from notion.client import NotionClient
import requests
from slugify import slugify
import os


preamble = """Effective disclosure of beneficial ownership to deliver policy impact involves providing a public register of structured data drawing on robust definitions that provide for comprehensive coverage of all forms of ownership and control, collected with low thresholds for disclosure, and providing clear identifying information for people and entities that supports mapping of ownership chains.

The information should be accurate and published in a timely fashion, with historic records of ownership also made available. There should be enforcement mechanisms in place to guarantee compliance with disclosure requirements and ensure data quality.

Getting to effective disclosure and use of data benefits from a process of iterative development, and broad-based engagement.


**Read more about each component of effective disclosure below.**"""

s = requests.Session()
s.get("https://www.notion.so/login")

r = s.post('https://www.notion.so/api/v3/loginWithEmail', json = {'email': os.getenv('NOTION_EMAIL'),'password': os.getenv('NOTION_PW')})
client = NotionClient(token_v2=r.cookies['token_v2'])


edf = client.get_collection_view("https://www.notion.so/openownership/829923a721a64401864c7bea5023fb4d?v=a776563ab34b42fe9d37776b18486893")

indicators = client.get_collection_view("https://www.notion.so/openownership/a5647e87f1e54653a9995d0721178ace?v=9a8f32ec534540079c603a1e5cac7870")

pages = {}
pages['index'] = ['---\ntitle: Effective Disclosure Framework\nlayout: framework\ncomponent: Home\norder: 0\n---\n\n{}\n'.format(preamble)]

for fwp in edf.collection.get_rows():
  section_title = (str(fwp.n) + "- " + str(fwp.title))
  slug = slugify(fwp.title)

  pages['index'].append("## {}".format(section_title))
  pages['index'].append("{}".format(fwp.statement_version))
  pages['index'].append("{}".format(fwp.summary_text))
  pages['index'].append("[Read more]({}/)".format(slug))
  
  pages[slug] = ['---\ntitle: Effective Disclosure Framework - {}\nlayout: framework\ncomponent: {}\norder: {}\n---'.format(fwp.title, fwp.title, str(fwp.n))]
  pages[slug].append("# {}".format(fwp.title))
  pages[slug].append("{}".format(fwp.summary_text))
  pages[slug].append("## Resources\n\nThe following resources can support work on this topic.")
  pages[slug].append("## Checklist\n\nWhen addressing this aspect of effective disclosure, consider the following items.")


  for indicator in indicators.collection.get_rows():
    try:
	    if indicator.edf[0].id == fwp.id:
	      print("{} - {} - {}".format(indicator.ref,indicator.edf_section[0][0],fwp.n))
	      if "Checklist" in indicator.uses:
	        if(indicator.resources):
	          text = indicator.stage[0] + ": " + indicator.title + " [Read More >>](" + str(indicator.resources.split("]")[0][1:]).replace("-","%2D") + ")"
	        else:
	          text = indicator.stage[0] + ": " + indicator.title
	        
	        pages[slug].append("* [ ]  {}".format(text))
    except:
      pass

for page in pages:
  with open("../framework/{}.md".format(page),"w") as file:
    file.write("\n\n".join(pages[page]))
