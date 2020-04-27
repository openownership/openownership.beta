import yaml

from notion.client import NotionClient
import requests
from slugify import slugify
import os

s = requests.Session()
s.get("https://www.notion.so/login")

r = s.post('https://www.notion.so/api/v3/loginWithEmail', json = {'email': os.getenv('NOTION_EMAIL'),'password': os.getenv('NOTION_PW')})
client = NotionClient(token_v2=r.cookies['token_v2'])

indicators = client.get_collection_view("https://www.notion.so/openownership/a5647e87f1e54653a9995d0721178ace?v=9a8f32ec534540079c603a1e5cac7870")

data = []

for indicator in indicators.collection.get_rows():
	if indicator.ref:
		data.append({
			"ref":indicator.ref,
	 		"text":indicator.title,
	 		"systems_text":indicator.systems_version,
	 		"data_text":indicator.data_version,
	 		"section":indicator.edf[0].n,
	 		"uses":indicator.uses,
	 		"weight":indicator.order,
	 		"guide_stage":indicator.stage,
	 		"url_q":indicator.supporting0_url,
	 		"detail_q":indicator.supporting1_details,
	 		"value_q":indicator.supporting2_value
	 	})

with open("../_data/edf.yaml", "w") as file:
	file.write(yaml.dump(data))
