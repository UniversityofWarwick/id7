# ID7

![Build status](https://github.com/UniversityofWarwick/id7/workflows/Node%20CI/badge.svg)

ID7 is the 7th iteration of the University of Warwick corporate identity. This library provides CSS, JavaScript and sample HTML in order to use the corporate identity on your site.

ID7 is available under an OSS license so that the open-source community can benefit from the various UI components and JavaScript functionality we have implemented.

<a href="https://www.netlify.com">
  <img src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="Deployments powered by Netlify" />
</a> 

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
│   ├── id7-default-theme.css
│   └── id7-wide.css
├── js/
│   ├── id7-bundle.js
│   └── id7-bundle.js.map
├── images/
│   ├── logo.png
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
- [bootstrap-3-typeahead](https://github.com/UniversityOfWarwick/Bootstrap-3-Typeahead) 4.0.3
- [headroom.js](https://github.com/WickyNilliams/headroom.js) 0.10.3
- [jqDoubleScroll](https://github.com/UniversityOfWarwick/jqDoubleScroll) 0.7.0

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

## Documentation / Demo

Documentation, included in this repo in the root directory, is built with [Jekyll](https://jekyllrb.com) and publicly hosted by Netlify at <http://id7.warwick.ac.uk>. The docs may also be run locally.

### Running sample site locally

1. Install Ruby and run `gem install bundler`.
1. Install node.js.
1. In the root `/id7` directory:
    1. Run `bundle install` to install dependent gems.
    1. Run `npm ci` to install webpack and other node.js dependencies.
    1. Run `npm run dev` (or `npm run watch`) to build a copy of static assets.
    1. Run `npm run start` in the command line.
1. Open <http://localhost:8080> in your browser, et voilà.

Learn more about using Jekyll by reading its [documentation](https://jekyllrb.com/docs/home/).

## Upgrading from 1.x to 2.x

From version 2.0.0, ID7 is built with webpack and a slightly different set of resources are delivered with the bundles.
In your application you will need to do the following:

* Replace references to `id7.min.css` with `id7.css`
* Replace references to `id7-default-theme.min.css` with `id7-default-theme.css`
* Replace references to `id7-bundle.min.js` with `id7-bundle.js`
* `id7-standalone.js` was removed from the distribution; you should build your own bundle if you are using this

## Using ID7.1

From version 2.9.7 onwards, you can apply the new "ID7.1" styling to the site masthead in your app.
From 2.11.0, it is no longer optional and all sites will use the 7.1 styling.
To do so:

* Replace the logo image `logo.png` with `logo.svg` in your templates
* Update anything app-specific that needs updating - the whole masthead region should have a white background

## Breaking changes

- **1.2.0** - Now uses a custom Modernizr build (see _What's included_ above) with a minimal range of tests. If your application relies on other tests or shims which were included in previous versions, they will likely fail.
- **1.4.0** - Support for Internet Explorer 8 was removed, and a reduced range of Modernizr tests is used as a result.
- **1.6.0** - Font Awesome v5 is now used by default instead of v4. Icon identifier references may need to be updated, or the [shim](https://github.com/UniversityofWarwick/id7/#icons) included.
- **2.0.0** - Now built with Webpack instead of Grunt. Removed non-minified resources from packages. Moved from typeahead.js to bootstrap-3-typeahead.
- **2.3.0**:
  - Modernizr was removed and replaced with a shim just containing the tests used in ID7.
  - lodash is no longer exposed as `_` in order to reduce the bundle size
- **2.6.0**:
  - Internet Explorer 11 is no longer fully supported
  - Headroom.js was updated to 0.10.3 which no longer supports IE11 without a polyfill for `Object.assign`. To enable this in IE11, include an `Object.assign` polyfill and then add `data-fixed-header="true" data-fixed-nav="true"` to the `.id7-navigation` element.  
- **2.8.0**:
  - Bootstrap typeahead now adds aria- attributes to parent elements. If you use typeahead directly, ensure your input field is inside a reasonable container element (a Bootstrap column or `.form-group` is fine)
- **2.9.0**:
  - The `id7-site-footer` and `id7-app-footer` elements now require a nested content element, `id7-site-footer-content` and `id7-app-footer-content` respectively. The template has been updated to reflect this.
- **2.9.10**:
  - Using the 7.1 design requires the `id7-point-1` class to be on the `<body>` element.
  - If building your own CSS, LESS must be at least version 3.5.
- **2.10.0**:
  - Some styles are now based on CSS custom properties (CSS variables). There shouldn't be a noticeable
    difference to your site.
  - If you are currently importing your own subset of ID7 intead of using `id7-no-fa` or similar then you
    will need to make sure to import `design-tokens/all` to ensure that the new CSS custom properties are
    defined. If you don't do this then a lot of things will look wrong.
- **2.11.0**:
  - The 7.1 design refresh is now the only option, so it no longer requires the `id7-point-1` class.
- **2.??.?**:
  - The math option for Less has been changed to `parens-division`, so expressions such as `19 / 6` will now be
    left as-is instead of being evaluated. This is to improve compatibility with CSS that uses the division operator.
    If you are doing your own LESS compilation, you should set `math: 'parens-division'` in your LESS compiler options.
  - The "clearfix hack" has been removed from the Bootstrap container styles. This shouldn't have an effect on most layouts but if you have custom content using the container mixins, you may want to check that content doesn't spill out onto other content.

<!--
- **2.12.0**:
  - 2025 brand updates are available but not enabled by default. If you are building ID7 from source, you can set
    `@id7-gen: 2025;` in your LESS to enable the new styles.
  - You will need to update any web font import in your template from Lato to Neue Haas Grotesk, as per the template.
  - If you use a CSP, you will need to update to allow TypeKit as a font source (see [Getting started](/getting-started/#security-headers)).
  - Borderless is enabled in this mode so there is no need to specify left or right border images.
-->

## Copyright and license

Bootstrap is licensed under the [MIT license](https://github.com/twbs/bootstrap/blob/master/LICENSE).

ID7 is licensed under the [ISC license](https://github.com/UniversityofWarwick/id7/blob/master/LICENSE).

This project includes a modified version of Bootstrap 3. Changes have been made to the original code.

Note that Access to the University web-site is subject to the separate, [published copyright notice](https://warwick.ac.uk/terms/copyright).
