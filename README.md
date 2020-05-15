# OpenOwnership.org

This repo contains the main Open Ownership website which lives at:
https://www.openownership.org.

The site is built with [Jekyll](https://jekyllrb.com/), hosted by
[Netlify](https://www.netlify.com/) with content managed by
[Siteleaf](https://www.siteleaf.com/) and images served by
[Imgix](https://www.imgix.com/).

Some data and pages are built via Python scripts which pull data from our
organisational [Notion](https://notion.so) account, via GitHub actions configured
in this repository

## Prequisites
1. Install Ruby, [bundler](https://bundler.io/), Node.js and [yarn](https://yarnpkg.com/) at their latest versions

## Local development
1. Clone the github repository
2. `bundle install` to install the necessary ruby gems for Jekyll
3. `yarn install` to install the frontend dependencies
4. `npm run watch` to watch sass and js iles for changes and re-compile them,
   or `npm run build` to build them once.
5. `bundle exec jekyll serve` to run a local jekyll server
6. Open [http://localhost:4000](http://localhost:4000)

## Automated page development
1. Install Python 3.5 or greater
2. Make a virtualenv: `python3 -m venv venv`
3. Activate it: `source venv/bin/activate`
4. Install the python requirements: `pip install -r scripts/requirements.txt`
5. Create `.env` and set some environment variables in it:

```shell
NOTION_EMAIL=example@example.com
NOTION_PASSWORD=password
```

Generally you can run each python file in /scripts directly, e.g.
- `python scripts/update_framework.py`
- `python scripts/update_map.py`

These will make some changes to files in jekyll's folders, which you can then
view with `git diff`, commit, etc.

### Adding icons to symbol-defs.svg

- Convert to SVG with https://image.online-convert.com/convert-to-svg
  - You may have to tweak the black/white level to get some light colours to
    come out
- Open in Inkscape, select all and resize to max 400px wide
- With everything selected, reduce document size to selection size
- Save as SVG
- Run exported SVG through https://jakearchibald.github.io/svgomg/ to trim all
  the cruft (prefer viewBox, remove styles the only non-standard options)
- Copy and paste the paths from the result into a new symbol in symbol-defs.svg
- Add the viewBox attribute into the symbol from the SVG

## Setting up a deploy preview

1. You need to tell Netlify about the branch you want to deploy, as it only deploys
   from a whitelist. Go to: https://app.netlify.com/sites/open-ownership/settings/deploys#deploy-contexts
   and add it.
2. Push code to github under the same branch name
3. Go to https://app.netlify.com/sites/open-ownership/deploys to find your newly
   deployed branch

Remember to delete the branch after you're done.

## Deploying changes to production

1. Merge the branch you've been working on into `master`
2. Wait for Siteleaf to sync the changes from Github
3. Launch a preview in Siteleaf (and generally check you haven't broken any of
   the CMS setup if your changes have touched fields, content, etc).
4. When you're happy with the preview, publish changes in Siteleaf.
5. Wait for Netlify to pick up the changes in Github and deploy them.
