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
- Clone the repo: `git clone https://github.com/UniversityofWarwick/id7.git`.
- Install with [Bower](http://bower.io): `bower install https://github.com/UniversityofWarwick/id7.git`.

Read the [Getting started page](#) for information on the framework contents, templates and examples, and more.

### What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
id7/
├── css/
│   ├── id7.css
│   ├── id7.css.map
│   ├── id7.min.css
│   ├── id7-default-theme.css
│   ├── id7-default-theme.css.map
│   └── id7-default-theme.min.css
├── js/
│   ├── vendor/
│   |   ├── html5shiv-3.7.2.min.js
│   |   ├── respond-1.4.2.min.js
│   |   └── matchMedia.js
│   ├── id7-bundle.js
│   ├── id7-bundle.min.js
│   ├── id7-standalone.js
│   └── id7-standalone.min.js
│   images/
|   ├── logo.png
|   ├── masthead-logo-bleed-sm.png
|   ├── masthead-logo-bleed-sm@2x.png
|   ├── masthead-logo-bleed-xs.png
|   └── masthead-logo-bleed-xs@2x.png
└── fonts/
    ├── avenirnext-demi.eot
    ├── avenirnext-demi.svg
    ├── avenirnext-demi.ttf
    ├── avenirnext-demi.woff
    ├── avenirnext-demi-italic.eot
    ├── avenirnext-demi-italic.svg
    ├── avenirnext-demi-italic.ttf
    ├── avenirnext-demi-italic.woff
    ├── avenirnext-italic.eot
    ├── avenirnext-italic.svg
    ├── avenirnext-italic.ttf
    ├── avenirnext-italic.woff
    ├── avenirnext-regular.eot
    ├── avenirnext-regular.svg
    ├── avenirnext-regular.ttf
    ├── avenirnext-regular.woff
    ├── avenirnext-ultralight.eot
    ├── avenirnext-ultralight.svg
    ├── avenirnext-ultralight.ttf
    ├── avenirnext-ultralight.woff
    ├── avenirnext-ultralight-italic.eot
    ├── avenirnext-ultralight-italic.svg
    ├── avenirnext-ultralight-italic.ttf
    ├── avenirnext-ultralight-italic.woff
    ├── fontawesome-webfont.eot
    ├── fontawesome-webfont.svg
    ├── fontawesome-webfont.ttf
    └── fontawesome-webfont.woff
```

We provide compiled CSS and JS (`id7.*`), as well as compiled and minified CSS and JS (`id7.min.*`). CSS [source maps](https://developers.google.com/chrome-developer-tools/docs/css-preprocessors) (`id7.*.map`) are available for use with certain browsers' developer tools. Fonts from Glyphicons, FontAwesome and Avenir Next from fonts.com are included, as is an optional ID7 theme.

The `id7-bundle.js` file includes dependencies such as jQuery and Bootstrap. The `id7-standalone.js` file doesn't include these, so they will need to be included manually. The dependencies required are:

- [jQuery](https://github.com/jquery/jquery) >= 1.11.1
- [Bootstrap](https://github.com/twbs/bootstrap) >= 3.3.1
- [typeahead.js](https://github.com/twitter/typeahead.js) >= 0.10.5
- [lodash](https://github.com/lodash/lodash) >= 2.4.1

Internet Explorer 9 (and earlier) support requires

- [matchMedia](https://github.com/paulirish/matchMedia.js) >= 0.2.0

Internet Explorer 8 (and earlier) support (in order to not receive the "mobile" rendition) requires:

- [html5shiv](https://github.com/aFarkas/html5shiv) >= 3.7.2
- [respond](https://github.com/scottjehl/Respond) >= 1.4.2

The Avenir Next fonts *MUST* only be used with the snippet of Javascript to callback to fonts.com. These fonts will only work on addresses ending warwick.ac.uk.

## Bugs and feature requests

Have a bug or a feature request? Contact <webteam@warwick.ac.uk>.

## Documentation

Documentation, included in this repo in the root directory, is built with [Jekyll](http://jekyllrb.com) and publicly hosted on GitHub Pages at <http://id7.warwick.ac.uk>. The docs may also be run locally.

### Running sample site locally

1. Install Ruby and `gem install bundler`
2. From the root `/id7` directory, run `bundle install` to install dependent gems.
3. From the root `/id7` directory, run `grunt` to generate CSS/JS, which is used on the sample site.
4. From the root `/id7` directory, run `bin/jekyll serve` in the command line. To develop core CSS/JS, run `grunt watch` from another terminal at the same time.
5. Open <http://localhost:9001> in your browser, et voilà.

Learn more about using Jekyll by reading its [documentation](http://jekyllrb.com/docs/home/).

## Copyright and license

Code and documentation copyright 2015 University of Warwick.