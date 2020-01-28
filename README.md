# OpenOwnership.org

This repo contains the main Open Ownership website which lives at:
https://www.openownership.org.

The site is built with [Jekyll](https://jekyllrb.com/), hosted by
[Netlify](https://www.netlify.com/) with content managed by
[Siteleaf](https://www.siteleaf.com/) and images served by
[Imgix](https://www.imgix.com/).

Local development uses [codekit](https://codekitapp.com/) to compile static
assets.

## Local development

1. Clone the github repository
2. `bundle install` to install the necessary ruby gems for Jekyll
3. Start codekit and open `config.codekit3` as a project. Allow codekit to
   install the  necessary dependencies for javascript and sass. Leave codekit
   running during development to live compile sass or install new deps.
4. `bundle exec jekyll serve` to run a local jekyll server
5. Open http://localhost:4000

### Gotchas

- Codekit will aggressively compile new/changed markdown files to html in the
  root directory. Delete them before committing changes
- Codekit's config file will update whenever new files are added or filesizes
  change. Try to commit those changes with the appropriate file changes, but
  beware of `git add -p` as it's easily corrupted - better to just commit it in
  a standalone commit if it's problematic.
- Turn Codekit off during rebases as it'll cause issues with changing the config
  all the time otherwise.

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
