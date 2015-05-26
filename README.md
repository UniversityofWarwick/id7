# ID7

ID7 is the 7th iteration of the University of Warwick corporate identity. This library provides CSS, JavaScript and sample HTML in order to use the corporate identity on your site.

## Table of contents

- [Quick start](#quick-start)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
- [Copyright and license](#copyright-and-license)

## Quick start

Three quick start options are available:

- [Download the latest release](https://github.com/UniversityofWarwick/id7/releases/latest).
- Clone the repo: `git clone https://github.com/UniversityofWarwick/id7.git`.
- Install with [Bower](http://bower.io): `bower install warwick-id7`.

Read the [Getting started page](getting-started/) for information on the framework contents, templates and examples, and more.

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
│   │   └── html5shiv-3.7.2.min.js
│   ├── id7-bundle.js
│   ├── id7-bundle.min.js
│   ├── id7-standalone.js
│   └── id7-standalone.min.js
├── images/
│   ├── logo.png
│   ├── masthead-logo-bleed-sm.svg
│   ├── masthead-logo-bleed-sm.png
│   ├── masthead-logo-bleed-xs.svg
│   └── masthead-logo-bleed-xs.png
├── fonts/
│   ├── FontAwesome.otf
│   ├── fontawesome-webfont.eot
│   ├── fontawesome-webfont.svg
│   ├── fontawesome-webfont.ttf
│   ├── fontawesome-webfont.woff
│   └── fontawesome-webfont.woff2
└── templates/
    └── base.html
```

We provide compiled CSS and JS (`id7.*`), as well as compiled and minified CSS and JS (`id7.min.*`). CSS [source maps](https://developers.google.com/chrome-developer-tools/docs/css-preprocessors) (`id7.*.map`) are available for use with certain browsers' developer tools. The FontAwesome icon font is included, as is an optional ID7 theme.

The `id7-bundle.js` file includes dependencies such as jQuery and Bootstrap. The `id7-standalone.js` file doesn't include these, so they will need to be included manually. The dependencies required are:

- [jQuery](https://github.com/jquery/jquery) >= 1.11.1
- [Bootstrap](https://github.com/twbs/bootstrap) >= 3.3.4
- [typeahead.js](https://github.com/twitter/typeahead.js) >= 0.10.5
- [lodash](https://github.com/lodash/lodash) >= 2.4.1
- [Modernizr](https://github.com/Modernizr/Modernizr) >= 2.8.3
- jQuery doubleScroll >= 0.4 (note that this has been patched in the ID7 build to support concatenation)

Internet Explorer 8 (and earlier) support requires:

- [html5shiv](https://github.com/aFarkas/html5shiv) >= 3.7.2

## Bugs and feature requests

Have a bug or a feature request? Contact <webteam@warwick.ac.uk>.

## Documentation

Documentation, included in this repo in the root directory, is built with [Jekyll](http://jekyllrb.com) and publicly hosted on GitHub Pages at <http://id7.warwick.ac.uk>. The docs may also be run locally.

### Running sample site locally

1. Install Ruby and `gem install bundler`
2. From the root `/id7` directory, run `bundle install` to install dependent gems.
3. From the root `/id7` directory, run `grunt` to generate CSS/JS, which is used on the sample site.
4. From the root `/id7` directory, run `grunt serve` in the command line.
5. Open <http://localhost:9001> in your browser, et voilà.

Learn more about using Jekyll by reading its [documentation](http://jekyllrb.com/docs/home/).

## Copyright and license

Bootstrap is licensed under the [MIT license](https://github.com/twbs/bootstrap/blob/master/LICENSE).

All rights, including copyright, in the code and documentation (including, but not limited to, the University logo, and
all text, layout, graphics, video and audio material and artwork) are owned or controlled for these purposes by the
University of Warwick unless otherwise stated.

Content on web pages at Warwick is the responsibility of the page owner and does not necessarily represent the views of
the University of Warwick.

In accessing the university's web pages, you agree that you may only download the content for your own personal
non-commercial use. The material on these web pages should not be used, copied, stored or transmitted outside the
University without the prior written consent of the University or in accordance with the Copyright, Designs and Patents
Act 1988.
