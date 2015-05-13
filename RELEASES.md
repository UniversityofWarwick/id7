# Releasing ID7

In order to do a release, you need a tagged version of the repo in the format v#.#.# using [semantic versioning](http://semver.org/).
When you use [Github's release mechanism](https://github.com/UniversityofWarwick/id7/releases) it will create the tag
for you, so you don't need to worry about it. Make sure that the version numbers in package.json, bower.json etc. match
the version number that you're tagging.

## Bumping the version number

Quite unscientifically;

    perl -i.orig -pe 's/1\.0\.3/1.0.4/g' $(git grep --full-name -l '1\.0\.3')
    
Where 1.0.3 is the old version and 1.0.4 is the new version. `.orig` files are gitignored so they won't get pushed to the repo,
but if you're bothered by them, you can run

    find . -name '*.orig' -delete
    
after.

## Generating distribution zip files

When you create the release, you can paste the HTML version of the release notes from JIRA (make sure to unindent the
first line otherwise it will be Markdown'd as code) and attach a zip file for id6a and id7. These can be generated locally
by running `grunt prep-release`.
