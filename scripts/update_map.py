import csv
import os
import pathlib

from dotenv import load_dotenv
from notion.client import NotionClient
import requests


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


def main():
    token = notionToken()
    client = NotionClient(token_v2=token)
    country_tracker = client.get_collection_view("https://www.notion.so/openownership/0bec13375fea4bd1a083f6baf8a21d78?v=88eca4f4bd5b4b72aa6b2cd5c2b5530d")
    fieldnames = [
        'name',
        'involvement',
        'commitments',
        'last_reviewed',
        'last_updated',
        'iso2'
    ]
    root_dir = pathlib.Path(__file__).parent.parent.absolute()
    output = os.path.join(root_dir, '_data', 'countries.csv')

    with open(output, "w") as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()
        for country in country_tracker.collection.get_rows():
            row = {
                'name': country.country,
                'involvement': country.oo_support,
                'commitments': ','.join(country.commitments),
                'iso2': country.iso2
            }
            writer.writerow(row)


if __name__ == "__main__":
    main()
