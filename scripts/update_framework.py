from notion.client import NotionClient
import requests
from slugify import slugify
import os
import yaml

s = requests.Session()
s.get("https://www.notion.so/login")

r = s.post('https://www.notion.so/api/v3/loginWithEmail', json = {'email': os.getenv('NOTION_EMAIL'),'password': os.getenv('NOTION_PW')})
client = NotionClient(token_v2=r.cookies['token_v2'])

edf = client.get_collection_view("https://www.notion.so/openownership/829923a721a64401864c7bea5023fb4d?v=a776563ab34b42fe9d37776b18486893")

pages = {}


for fwp in edf.collection.get_rows():
  section_title = (str(fwp.n) + "- " + str(fwp.title))
  slug = slugify(fwp.title)
  
  frontmatter = {
  	"title": fwp.statement_version,
  	"component": fwp.title,
  	"order": fwp.n,
  	"summary_version": fwp.summary_text,
  }

  pages[slug] = ['---\n' + yaml.dump(frontmatter) +'---']
  pages[slug].append(fwp.extended_prose)

for page in pages:
  with open("../_framework/{}.markdown".format(page),"w") as file:
    file.write("\n\n".join(pages[page]))
