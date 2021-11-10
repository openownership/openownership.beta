from collections import defaultdict
import csv
import os
import pathlib
import re

from dotenv import load_dotenv
from notion.client import NotionClient
import requests

from notion.store import RecordStore

#### MONKEYPATCH client libary needs patching.
# def call_load_page_chunk(self, page_id):

#     if self._client.in_transaction():
#         self._pages_to_refresh.append(page_id)
#         return

#     data = {
#         "pageId": page_id,
#         "limit": 100,  ## Monkey patch changes this number to 100
#         "cursor": {"stack": []},
#         "chunkNumber": 0,
#         "verticalColumns": False,
#     }

#     recordmap = self._client.post("loadPageChunk", data).json()["recordMap"]

#     self.store_recordmap(recordmap)

# RecordStore.call_load_page_chunk = call_load_page_chunk
#### END MONKEYPATCH

load_dotenv()


def notionToken():
    loginData = {
        'email': os.getenv('NOTION_EMAIL'),
        'password': os.getenv('NOTION_PASSWORD')
    }
    headers = {
        # Notion obviously check this as some kind of (bad) test of CSRF
        'host': 'www.notion.so'
    }
    response = requests.post(
        'https://notion.so/api/v3/loginWithEmail',
        json=loginData,
        headers=headers
    )
    response.raise_for_status()
    return response.cookies['token_v2']


def validInvolvement(text):
    validInvolvements = [
        'Standard',
        'Medium',
        'High',
        'Past engagement'
    ]
    return (text in validInvolvements)


def involvementText(text):
    if(text == 'Past engagement'):
        return 'Historic'
    else:
        return 'Current'


def defaultCommitmentSummary(commitment_type, country):
    if commitment_type == 'EU':
        return (
            f"As a European Union member, {country.Country} is obliged to "
            f"create a central, public register of beneficial ownership, "
            f"covering the whole economy."
        )
    elif commitment_type == 'EITI':
        return (
            f"As an <a href='https://eiti.org/'>Extractives Industry "
            f"Transparency Initiative (EITI)</a> member, {country.Country} has "
            f"committed to beneficial ownership transparency for the "
            f"extractives sector."
        )
    elif commitment_type == 'BOLG':
        return (
            f"{country.Country} has made a commitment to beneficial ownership "
            f"transparency as part of the "
            f"<a href='https://www.openownership.org/what-we-do/the-beneficial-ownership-leadership-group/'>"
            f"Beneficial Ownership Leadership Group</a>."
        )
    elif commitment_type == 'UK Anti-Corruption Summit':
        return (
            f"At the "
            f"<a href='https://www.gov.uk/government/topical-events/anti-corruption-summit-london-2016'>"
            f"2016 UK Anti-Corruption Summit</a>, {country.Country} made a "
            f"commitment to beneficial ownership disclosure."
        )
    elif commitment_type == 'OGP':
        return (
            f"{country.Country} has included a commitment in an Open "
            f"Government Partnership National Action Plan to beneficial "
            f"ownership transparency"
        )
    elif commitment_type == 'Other':
        return (
            f"{country.Country} has made a commitment to beneficial "
            f"ownership transparency through some other means"
        )


def commitmentsSummaryHTML(commitments):
    html = "<ul>"
    for commitment in commitments:
        html += f"<li>{commitment['summary']}</li>"
    html += "</ul>"
    return html


def combinedCommitments(commitments):
    central_register = any(commitment.get('central_register') for commitment in commitments)
    public_register = any(commitment.get('public_register') for commitment in commitments)
    all_sectors = any(commitment.get('all_sectors') for commitment in commitments)
    score = 0
    level = 0

    if central_register:
        score += 1
    if public_register:
        score += 1
    if all_sectors:
        score += 1

    # We map to a 0-1-2 scale, where you have to make 2/3 of central, public
    # and all sectors to get 1, or all three to get 2.
    if(score == 2):
        level = 1
    if(score == 3):
        level = 2

    return {
        'central': central_register,
        'public': public_register,
        'all_sectors': all_sectors,
        'level': level,
        'html': commitmentsSummaryHTML(commitments)
    }


def extractUrl(text):
    if text is None:
        return
    url_regex = re.compile(r"(http(s)?://[^\s]+)")
    match = url_regex.search(text)
    if match:
        return match[0]
    else:
        return


def regimesByCountryId(client):
    regime_tracker = client.get_collection_view("https://www.notion.so/openownership/ff93549f6c6a430fa5887b16f274f82c?v=a19b080ab95547008078452f219351bc")
    regimes = defaultdict(list)

    for row in regime_tracker.collection.get_rows():
        if len(row.Country) == 0:
            print(f'{row} is missing a country to match it to')
            continue
        register_url = extractUrl(row.get_property('6_1_Register_URL_R_ONLINE_URL'))
        oo_register_url = extractUrl(row.get_property('3_1_OO_Register_Page_URL'))
        if register_url or oo_register_url:
            regimes[row.Country[0].id].append({
                'name': row.get_property('title'),
                'scope': row.get_property('1_Regime_scope_C_SCOPE'),
                'register_url': register_url,
                'oo_register_url': oo_register_url,
                'last_edited': row.get_property('Last_edited'),
            })

    return regimes


def commitmentsByCountryId(client):
    commitments_tracker = client.get_collection_view("https://www.notion.so/openownership/995e7787e85f45df8fa568684f30d16b?v=499db353db9c4bf2bb95d1a2d2f3a389")
    commitments = defaultdict(list)

    for row in commitments_tracker.collection.get_rows():
        if len(row.Country) == 0:
            print(f'{row} is missing a country to match it to')
            continue
        commitment_type = row.get_property('Commitment_type')
        summary = row.get_property('Summary_Text')
        if summary == '':
            summary = defaultCommitmentSummary(commitment_type, row.get_property('Country')[0])
        commitments[row.Country[0].id].append({
            'type': commitment_type,
            'all_sectors': row.get_property('All_sectors'),
            'central_register': row.get_property('Central_register'),
            'public_register': row.get_property('Public_register'),
            'link': extractUrl(row.get_property('Link')),
            'summary': summary,
            'last_edited': row.get_property('Last_edited'),
        })

    return commitments


def writeCountriesCSV(client, data_dir, capitals, regimes, commitments):
    country_tracker = client.get_collection_view("https://www.notion.so/openownership/0bec13375fea4bd1a083f6baf8a21d78?v=88eca4f4bd5b4b72aa6b2cd5c2b5530d")
    fieldnames = [
        'notion_id',
        'name',
        'iso2',
        'committed',
        'involved',
        'involvement',
        'central',
        'public',
        'all_sectors',
        'commitment_level',
        'commitments_html',
        'capital_lat',
        'capital_lon',
        'any_online_register',
        'any_data_in_oo_register',
        'last_updated'
    ]

    output = os.path.join(data_dir, 'countries.csv')
    with open(output, "w") as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames, dialect='unix')
        writer.writeheader()
        for country in country_tracker.collection.get_rows():
            committed = len(commitments.get(country.id, [])) > 0
            involved = validInvolvement(country.OO_Support)
            if(committed or involved):
                involvement = 'None'
                if involved:
                    involvement = involvementText(country.OO_Support)
                capital = capitals.get(country.ISO2, {})
                all_last_edited = [country.Last_edited]
                country_regimes = regimes.get(country.id, [])
                all_last_edited.extend([item['last_edited'] for item in country_regimes])
                country_commitments = combinedCommitments(commitments.get(country.id, []))

                all_last_edited.extend([item['last_edited'] for item in commitments.get(country.id, [])])

                row = {
                    'notion_id': country.id,
                    'name': country.Country,
                    'iso2': country.ISO2,
                    'committed': committed,
                    'involved': involved,
                    'involvement': involvement,
                    'central': country_commitments['central'],
                    'public': country_commitments['public'],
                    'all_sectors': country_commitments['all_sectors'],
                    'commitment_level': country_commitments['level'],
                    'commitments_html': country_commitments['html'],
                    'capital_lat': capital.get('lat'),
                    'capital_lon': capital.get('lon'),
                    'any_online_register': any((regime.get('register_url') is not None) for regime in country_regimes),
                    'any_data_in_oo_register': any((regime.get('oo_register_url') is not None) for regime in country_regimes),
                    'last_updated': max(all_last_edited)
                }
                writer.writerow(row)


def writeRegimesCSV(regimes, data_dir):
    fieldnames = [
        'country_notion_id',
        'name',
        'scope',
        'register_url',
        'oo_register_url'
    ]
    output = os.path.join(data_dir, 'regimes.csv')
    with open(output, "w") as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames, dialect='unix')
        writer.writeheader()
        for country_id, country_regimes in regimes.items():
            for regime in country_regimes:
                row = {
                    'country_notion_id': country_id,
                    'name': regime.get('name'),
                    'scope': ','.join(regime.get('scope')),
                    'register_url': regime.get('register_url'),
                    'oo_register_url': regime.get('oo_register_url')
                }
                writer.writerow(row)


def loadCountryCapitals(data_dir):
    capitals = {}
    with open(os.path.join(data_dir, 'country_capitals.csv'), 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            capitals[row['iso2']] = {
                'lat': row['lat'],
                'lon': row['lon']
            }
    return capitals


def main():
    token = notionToken()
    client = NotionClient(token_v2=token)
    data_dir = os.path.join(
        pathlib.Path(__file__).parent.parent.absolute(),
        '_data'
    )
    capitals = loadCountryCapitals(data_dir)
    regimes = regimesByCountryId(client)
    commitments = commitmentsByCountryId(client)
    writeRegimesCSV(regimes, data_dir)
    writeCountriesCSV(client, data_dir, capitals, regimes, commitments)


if __name__ == "__main__":
    main()
