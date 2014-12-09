# ID7

ID7 is the 7th iteration of the University of Warwick corporate identity. This library provides CSS, JavaScript and sample HTML in order to use the corporate identity on your site.

## Table of contents

- [Quick start](#quick-start)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
- [Copyright and license](#copyright-and-license)

## Quick start

Four quick start options are available:

- [Download the latest release](#).
- Clone the repo: `git clone https://repo.elab.warwick.ac.uk/scm/id/id7.git`.
- Install with [Bower](http://bower.io): `bower install #`.
- Install with [npm](https://www.npmjs.org): `npm install #`.

Read the [Getting started page](#) for information on the framework contents, templates and examples, and more.

### What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
id7/
├── css/
│   ├── id7.css
│   ├── id7.css.map
│   ├── id7.min.css
├── js/
│   ├── id7.js
│   └── id7.min.js
└── fonts/
    ├── STUFF
```

We provide compiled CSS and JS (`id7.*`), as well as compiled and minified CSS and JS (`id7.min.*`). CSS [source maps](https://developers.google.com/chrome-developer-tools/docs/css-preprocessors) (`id7.*.map`) are available for use with certain browsers' developer tools. Fonts from Glyphicons, FontAwesome and Avenir Next from fonts.com are included, as is an optional ID7 theme.

The Avenir Next fonts *MUST* only be used with the snippet of Javascript to callback to fonts.com. These fonts will only work on addresses ending warwick.ac.uk.

## Bugs and feature requests

Have a bug or a feature request? Contact <webteam@warwick.ac.uk>.

## Documentation

Bootstrap's documentation, included in this repo in the root directory, is built with [Jekyll](http://jekyllrb.com) and publicly hosted on GitHub Pages at <http://getbootstrap.com>. The docs may also be run locally.

### Running sample site locally

1. If necessary, [install Jekyll](http://jekyllrb.com/docs/installation) (requires v2.5.x). **Windows users:** Read [this unofficial guide](http://jekyll-windows.juthilo.com/) to get Jekyll up and running without problems.
2. Install the Ruby-based syntax highlighter, [Rouge](https://github.com/jneen/rouge), with `gem install rouge`.
3. Install [LessCSS support for Jekyll](https://github.com/zroger/jekyll-less) with `gem install jekyll-less`.
4. From the root `/id7` directory, run `jekyll serve` in the command line.
5. Open <http://localhost:9001> in your browser, and voilà.

Learn more about using Jekyll by reading its [documentation](http://jekyllrb.com/docs/home/).

## Copyright and license

Code and documentation copyright 2011-2014 University of Warwick.