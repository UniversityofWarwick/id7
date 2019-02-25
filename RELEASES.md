# Releasing ID7

In order to do a release, you need a tagged version of the repo in the format `v#.#.#` using [semantic versioning](http://semver.org/).
When you use [Github's release mechanism](https://github.com/UniversityofWarwick/id7/releases) it will create the tag
for you, so you don't need to worry about it. Make sure that the version numbers in package.json etc. match
the version number that you're tagging.

## Bumping the version number

Edit the version number in the following places:

* Line 3 of `package.json`
* Line 20 of `_config.yml`

## Running a distribution build

When you run `npm run build` it will generate production CSS/JS etc. and place `id6-[version]-dist.zip` and 
`id7-[version]-dist.zip` into the version directories. When you create the release, you can paste the HTML version of the release notes from JIRA (make sure to unindent the
first line otherwise it will be Markdown'd as code) and attach the zip files.

## Doing a GitHub pages deploy

Once the version's released, you'll need to do a GitHub pages deploy. To do this, run the following:

```
node_modules/.bin/npm-run-all --parallel readme-md2html docs-assets
./deploy.sh
```
