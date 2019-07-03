# ID7

ID7 is the 7th iteration of the University of Warwick corporate identity. This library provides CSS, JavaScript and sample HTML in order to use the corporate identity on your site.

## Table of contents

- [Quick start](#quick-start)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
- [Breaking changes](#breaking-changes)
- [Upgrading from 1.x to 2.x](#upgrading-from-1x-to-2x)
- [Copyright and license](#copyright-and-license)

## Quick start

Three quick start options are available:

- Install with [npm](https://www.npmjs.com): `npm i @universityofwarwick/id7`
- [Download the latest release](https://github.com/UniversityofWarwick/id7/releases/latest).
- Clone the repo: `git clone https://github.com/UniversityofWarwick/id7.git`.

Read the [Getting started page](getting-started/) for information on the framework contents, templates and examples, and more.

### What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
id7/
├── css/
│   ├── id7.css
│   └── id7-default-theme.css
├── js/
│   ├── id7-bundle.js
│   └── id7-bundle.js.map
├── images/
│   ├── logo.png
│   ├── masthead-logo-bleed-sm.svg
│   ├── masthead-logo-bleed-sm.png
│   ├── masthead-logo-bleed-xs.svg
│   ├── masthead-logo-bleed-xs.png
│   └── (and others)
├── fonts/
│   └── (font files)
└── templates/
    └── base.html
```

As of v2.0.0, we only provide compiled and minified CSS and JS. See [upgrading from 1.x to 2.x](#upgrading-from-1-x-to-2-x) for more information.

[JS](https://developer.chrome.com/devtools/docs/javascript-debugging#source-maps) source maps (`id7*.map`) are available for use with certain browsers' developer tools. The FontAwesome 5 free icon font is included, as is an optional ID7 theme.

The `id7-bundle.js` file includes dependencies such as jQuery and Bootstrap. These dependencies are:

- [jQuery](https://github.com/jquery/jquery) 3.4.1
- [Bootstrap](https://github.com/twbs/bootstrap) 3.4.1
- [bootstrap-3-typeahead](https://github.com/bassjobsen/Bootstrap-3-Typeahead) 4.0.2
- [headroom.js](https://github.com/WickyNilliams/headroom.js) 0.9.4
- jQuery doubleScroll 0.6

## Icons

Icons are provided by the Font Awesome 5 library. Because our license prevents distribution, this project by default includes Font Awesome 5 Free, which has a good selection of icons built in. If you are a Creator with a license and want to build ID7 with Font Awesome 5 Pro, first [set up NPM with the token](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers), then install the `@fortawesome/fontawesome-pro` package, and then instead of importing `id7`, import `id7-no-fa` and `font-awesome-pro` under the same path.

We don't include the FA4 compatibility layer by default. It can be imported within LESS with:

```less
@import '@fortawesome/fontawesome-free/less/v4-shims';
```

Replacing `fontawesome-free` with `fontawesome-pro` if necessary.

## Bugs and feature requests

Have a bug or a feature request? Contact <webteam@warwick.ac.uk>.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Documentation

Documentation, included in this repo in the root directory, is built with [Jekyll](http://jekyllrb.com) and publicly hosted on GitHub Pages at <http://id7.warwick.ac.uk>. The docs may also be run locally.

### Running sample site locally

1. Install Ruby and run `gem install bundler`.
1. Install node.js.
1. In the root `/id7` directory:
    1. Run `bundle install` to install dependent gems.
    1. Run `npm i` to install webpack and other node.js dependencies.
    1. Run `npm run start` in the command line.
1. Open <http://localhost:8080> in your browser, et voilà.

Learn more about using Jekyll by reading its [documentation](http://jekyllrb.com/docs/home/).

## Upgrading from 1.x to 2.x

From version 2.0.0, ID7 is built with webpack and a slightly different set of resources are delivered with the bundles.
In your application you will need to do the following:

* Replace references to `id7.min.css` with `id7.css`
* Replace references to `id7-default-theme.min.css` with `id7-default-theme.css`
* Replace references to `id7-bundle.min.js` with `id7-bundle.js`
* `id7-standalone.js` was removed from the distribution; you should build your own bundle if you are using this

## Breaking changes

- **1.2.0** - Now uses a custom Modernizr build (see _What's included_ above) with a minimal range of tests. If your application relies on other tests or shims which were included in previous versions, they will likely fail.
- **1.4.0** - Support for Internet Explorer 8 was removed, and a reduced range of Modernizr tests is used as a result.
- **1.6.0** - Font Awesome v5 is now used by default instead of v4. Icon identifier references may need to be updated, or the [shim](https://github.com/UniversityofWarwick/id7/#icons) included.
- **2.0.0** - Now built with Webpack instead of Grunt. Removed non-minified resources from packages. Moved from typeahead.js to bootstrap-3-typeahead.
- **2.3.0**:
  - Modernizr was removed and replaced with a shim just containing the tests used in ID7.
  - lodash is no longer exposed as `_` in order to reduce the bundle size

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
