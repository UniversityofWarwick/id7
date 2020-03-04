# Releasing ID7

In order to do a release, you need a tagged version of the repo in the format `v#.#.#` using [semantic versioning](http://semver.org/).
When you use [Github's release mechanism](https://github.com/UniversityofWarwick/id7/releases) it will create the tag
for you, so you don't need to worry about it. Make sure that the version numbers in package.json etc. match
the version number that you're tagging.

## Bumping the version number

Create a `release/v#.#.#` branch and edit the version number in the following places:

* Line 3 of `package.json`
* Line 20 of `_config.yml`

Create a pull request and get it approved and merged. 

## Running a distribution build

When you create the release, you can paste the HTML version of the release notes from JIRA (make sure to unindent the
first line otherwise it will be Markdown'd as code) and press the Publish button.

Once the release is published, GitHub Actions will do the rest and run `npm run build` in order to generate production CSS/JS etc. These will automatically be uploaded to the release you published within a few minutes.

## Netlify deploy

Netlify will deploy the static site at https://id7.warwick.ac.uk automatically when `master` is updated, you don't need to run any scripts.

## Publishing the package on npmjs.com

You'll need to be a member of the npm `@universityofwarwick` organisation to publish.

Make sure you're logged in to npm with `npm login`, then from the root of the project run `npm publish --access=public` and go through the prompts.
