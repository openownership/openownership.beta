from collections import defaultdict
import csv
import os
import pathlib
import re

from dotenv import load_dotenv
from notion.client import NotionClient
import requests


load_dotenv()


# These are for the current commitment tags in the country tracker
CENTRAL_COMMITMENTS = [
    '2016 ACS: Central register',
    'OGP: Central register',
    'EU: All sectors',
    'EITI'
]
ALL_SECTORS_COMMITMENTS = [
    '2016 ACS: All sectors',
    'OGP: All sectors',
    'EU: All sectors',
]
PUBLIC_COMMITMENTS = [
    '2016 ACS: Public register',
    'OGP: Public register',
    'EU: All sectors',
    'EITI'
]
OGP_COMMITMENTS = [
    'OGP: Central register',
    'OGP: Public register',
    'OGP: All sectors',
]
ACS_COMMITMENTS = [
    '2016 ACS: Central register',
    '2016 ACS: All sectors',
    '2016 ACS: Public register',
]


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


def commitmentsAsHTML(country):
    commitments = []
    if 'Other' in country.commitments:
        commitments.append(
            f"{country.country} has made a commitment to beneficial ownership "
            f"transparency."
        )
    if 'EU: All sectors' in country.commitments:
        commitments.append(
            f"As a European Union member, {country.country} is obliged to "
            f"create a central, public register of beneficial ownership, "
            f"covering the whole economy."
        )
    if 'EITI' in country.commitments:
        commitments.append(
            f"As an <a href='https://eiti.org/'>Extractives Industry "
            f"Transparency Initiative (EITI)</a> member, {country.country} has "
            f"committed to beneficial ownership transparency for the "
            f"extractives sector."
        )
    if 'FSI' in country.commitments:
        commitments.append(
            f"<a href='https://fsi.taxjustice.net/en/'>The Financial Secrecy "
            f"Index (FSI)</a> record that {country.country} has a commitment to, "
            f"or is making progress towards, a register of beneficial "
            f"ownership transparency."
        )
    if 'BOLG' in country.commitments:
        commitments.append(
            f"{country.country} has made a commitment to beneficial ownership "
            f"transparency as part of the "
            f"<a href='https://www.openownership.org/what-we-do/the-beneficial-ownership-leadership-group/'>"
            f"Beneficial Ownership Leadership Group</a>."
        )
    if(any(tag in ACS_COMMITMENTS for tag in country.commitments)):
        commitments.append(
            f"At the "
            f"<a href='https://www.gov.uk/government/topical-events/anti-corruption-summit-london-2016'>"
            f"2016 UK Anti-Corruption Summit</a> {country.country} made a "
            f"commitment to beneficial ownership disclosure."
        )
    if(any(tag in OGP_COMMITMENTS for tag in country.commitments)):
        commitments.append(
            f"{country.country} has included a commitment in an Open "
            f"Government Partnership National Action Plan to beneficial "
            f"ownership transparency"
        )

    if(len(commitments) == 0):
        return ''
    else:
        html = "<ul>"
        for commitment in commitments:
            html += f"<li>{commitment}</li>"
        html += "</ul>"

        return html


def commitmentDetails(commitments):
    central = any(tag in CENTRAL_COMMITMENTS for tag in commitments)
    public = any(tag in PUBLIC_COMMITMENTS for tag in commitments)
    allSectors = any(tag in ALL_SECTORS_COMMITMENTS for tag in commitments)
    score = 0
    level = 0

    if central:
        score += 1
    if public:
        score += 1
    if allSectors:
        score += 1

    # We map to a 0-1-2 scale, where you have to make 2/3 of central, public
    # and all sectors to get 1, or all three to get 2.
    if(score == 2):
        level = 1
    if(score == 3):
        level = 2

    return {
        'commitment_level': level,
        'central': central,
        'public': public,
        'all_sectors': allSectors
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
        if len(row.country) == 0:
            print(f'{row} is missing a country to match it to')
            continue
        register_url = extractUrl(row.get_property('6_1_register_url_r_online_url'))
        oo_register_url = extractUrl(row.get_property('3_1_oo_register_page_url'))
        if register_url or oo_register_url:
            regimes[row.country[0].id].append({
                'name': row.get_property('title'),
                'scope': row.get_property('1_regime_scope_c_scope'),
                'register_url': register_url,
                'oo_register_url': oo_register_url
            })

    return regimes


def writeCountriesCSV(client, data_dir, capitals, regimes):
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
            committed = len(country.commitments) > 0
            involved = validInvolvement(country.oo_support)
            if(committed or involved):
                involvement = 'None'
                if involved:
                    involvement = involvementText(country.oo_support)
                commitments = commitmentDetails(country.commitments)
                capital = capitals.get(country.iso2, {})
                country_regimes = regimes.get(country.id, [])
                row = {
                    'notion_id': country.id,
                    'name': country.country,
                    'iso2': country.iso2,
                    'committed': committed,
                    'involved': involved,
                    'involvement': involvement,
                    'central': commitments['central'],
                    'public': commitments['public'],
                    'all_sectors': commitments['all_sectors'],
                    'commitment_level': commitments['commitment_level'],
                    'commitments_html': commitmentsAsHTML(country),
                    'capital_lat': capital.get('lat'),
                    'capital_lon': capital.get('lon'),
                    'any_online_register': any((regime.get('register_url') is not None) for regime in country_regimes),
                    'any_data_in_oo_register': any((regime.get('oo_register_url') is not None) for regime in country_regimes),
                    'last_updated': country.last_changed_automatic.isoformat()
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
    regimes = regimesByCountryId(client)
    data_dir = os.path.join(
        pathlib.Path(__file__).parent.parent.absolute(),
        '_data'
    )
    capitals = loadCountryCapitals(data_dir)
    regimes = regimesByCountryId(client)
    writeRegimesCSV(regimes, data_dir)
    writeCountriesCSV(client, data_dir, capitals, regimes)


if __name__ == "__main__":
    main()
