# AGENTS.md — Context for AI Agents

This file provides orientation for AI agents working in this repository.

## What this repository is

**ID7** is the University of Warwick's corporate identity design system (7th iteration). It is published as an npm package (`@universityofwarwick/id7`) and provides CSS, JavaScript, fonts, images, and HTML templates that implement Warwick's brand guidelines across all university web applications.

- **npm package name:** `@universityofwarwick/id7`
- **Current version:** see `package.json`
- **Documentation/demo site:** <https://id7.warwick.ac.uk> (Jekyll, hosted on Netlify)
- **License:** ISC

---

## Key technologies

| Technology | Purpose |
|---|---|
| **LESS** | CSS preprocessor for all styles |
| **Webpack 5** | Bundles JS and compiles LESS → CSS |
| **jQuery 3 + Bootstrap 3** | Core JS/UI framework (vendored and modified in `bootstrap/`) |
| **Babel** | ES6+ transpilation |
| **TypeScript** | Used in `vitest/` tests and some tooling |
| **ESLint** (airbnb-base) | JS linting |
| **Karma + QUnit** | Browser-based JS unit tests |
| **Vitest** | Node-based unit tests (LESS functions, WCAG, icon generation) |
| **Jekyll** | Documentation site (`docs/`) |
| **Node.js 22** | Required runtime (see `.node-version`) |
| **FontAwesome 5 Free** | Icon library (FA Pro also supported) |

---

## Repository layout

```
id7/
├── js/                        # JavaScript source
│   ├── id7-bundle.js          # Main JS entry point (imports all plugins)
│   ├── id7-standalone.js      # ID7-specific features (nav, search, etc.)
│   ├── bootstrap-*.jquery.js  # Bootstrap 3 components as jQuery plugins
│   ├── navigation.jquery.js   # Sticky/responsive navigation
│   ├── search-suggest.jquery.js
│   ├── account-popover.jquery.js
│   ├── wide-tables.jquery.js
│   ├── koan-spinner.jquery.js
│   ├── feature-detect.js      # Minimal Modernizr replacement
│   └── tests/
│       ├── karma.conf.cjs     # Karma/QUnit browser test config
│       └── unit/              # QUnit test files (*.js)
│
├── less/                      # LESS stylesheet source
│   ├── id7.less               # Main CSS entry (@imports id7-no-fa + FA)
│   ├── id7-no-fa.less         # ID7 without FontAwesome (for FA Pro users)
│   ├── id7-2024.less          # Legacy 2024 brand entry point
│   ├── id7-wide.less          # Wide-viewport CSS variant
│   ├── id7-borderless.less    # Borderless layout variant
│   ├── default-theme.less     # Optional default colour theme
│   ├── variables.less         # Brand colours, grid config, @id7-gen flags
│   ├── design-tokens/         # CSS custom properties (colors, breakpoints)
│   ├── mixins/                # Shared LESS mixins
│   ├── header.less            # Masthead / header
│   ├── footer.less            # Footer
│   ├── navigation.less        # Navigation bar
│   ├── masthead.less
│   ├── main-content.less
│   └── (other component files)
│
├── bootstrap/                 # Modified Bootstrap 3 LESS source
│
├── templates/
│   └── base.html              # Reference HTML page template
│
├── images/                    # Brand images, logos, favicons
│
├── build-tooling/             # Custom Webpack plugins and shared config
│   ├── webpack.tooling.mjs    # Reusable Webpack loaders/plugins helpers
│   ├── PlayFingerprintsPlugin.mjs  # Asset fingerprinting for Play framework
│   └── WatchEventsPlugin.mjs
│
├── vitest/                    # Vitest tests (TypeScript)
│   ├── less-functions.test.ts
│   ├── less-wcag.test.ts
│   └── icon-generator.test.ts
│
├── docs/                      # Jekyll documentation/demo site
│   ├── _includes/ _layouts/   # Jekyll partials and layouts
│   ├── components/            # Component demos
│   ├── getting-started/
│   ├── design-tokens/
│   └── assets/                # Docs-specific CSS/JS/images
│
├── tools/                     # Utilities (icon generator module)
├── generate-official-icons.mjs  # Generates favicon/app icon variants
├── webpack.config.mjs         # Main Webpack configuration
├── babel.config.cjs           # Babel configuration
├── .eslintrc.json             # ESLint rules (airbnb-base, 2-space indent)
├── Gemfile                    # Ruby dependencies (Jekyll for docs)
└── package.json               # npm scripts and dependencies
```

---

## Build commands

Install dependencies first:
```bash
npm ci
```

| Command | What it does |
|---|---|
| `npm run dev` | One-shot development build → `dist/` |
| `npm run watch` | Development build with file watching |
| `npm run build` | Production build → `dist/` + zip archives |
| `npm run generateIcons` | Regenerate favicons/app icons |
| `npm run clean` | Remove `dist/` and `docs/dist/` |

**Build output (`dist/`):**
```
dist/
├── css/id7.css
├── css/id7-2024.css
├── css/id7-default-theme.css
├── css/id7-wide.css
├── css/id7-borderless.css
├── css/id6a.css
├── js/id7-bundle.js
├── images/
├── fonts/
└── templates/base.html
```

Production also emits `id7-{version}-dist.zip` and `id6a-{version}-dist.zip`.

---

## Test commands

```bash
# Run all tests
npm test

# Browser-based tests only (Karma + QUnit, requires dist/ to be built first)
npm run build
npm run test:karma

# Node-based tests only (Vitest — LESS functions, WCAG, icon generator)
npm run test:vitest
```

> **Important:** `test:karma` requires a pre-built `dist/js/id7-bundle.js`. Always run `npm run build` (or `npm run dev`) before running `test:karma`.

---

## Lint commands

```bash
# Lint all JS source files
npx eslint js/**/*.js

# Or via eslint-loader during webpack build (runs automatically)
npm run dev
```

ESLint config: `.eslintrc.json` — extends `airbnb-base`, 2-space indentation, browser environment.

---

## Running the documentation site locally

```bash
gem install bundler
bundle install        # Install Jekyll and Ruby dependencies
npm ci                # Install node dependencies
npm run dev           # Build assets into dist/
npm run start         # Builds docs assets and starts Jekyll on http://localhost:8080
```

---

## CSS architecture notes

- All styles are written in **LESS** (version ≥ 3.5 required, `math: 'parens-division'`).
- **Entry points:**
  - `less/id7.less` — standard build (includes FontAwesome Free)
  - `less/id7-no-fa.less` — use when bundling FontAwesome Pro separately
  - `less/id7-2024.less` — legacy 2024 brand styles
- **Design tokens** live in `less/design-tokens/` as CSS custom properties (`--w-*` prefix).
- **Brand generation flag** in `less/variables.less`:
  ```less
  @id7-gen: 2025;  // 2024 for legacy brand
  ```
  Sub-flags (`@id7-gen-font`, `@id7-gen-colours`, etc.) can be set independently.
- Bootstrap 3 source is vendored in `bootstrap/less/` and customised via `less/variables.less` overrides.

---

## JavaScript architecture notes

- **Entry point:** `js/id7-bundle.js` — imports jQuery (exposed as global), all Bootstrap 3 plugins, headroom.js, typeahead, jqDoubleScroll, then `id7-standalone.js`.
- jQuery is provided globally via Webpack `ProvidePlugin` (as `$` and `jQuery`).
- All ID7-specific jQuery plugins follow the pattern `$.fn.pluginName`.
- `js/id7-standalone.js` wires up ID7 components on `$(document).ready`.
- Tests in `js/tests/unit/` use **QUnit** with **Sinon** stubs.
- Tests in `vitest/` use **Vitest** (TypeScript, Node environment).

---

## HTML template

The reference template is at `templates/base.html`. Key structural elements:

```html
<div class="id7-left-border">
<div class="id7-fixed-width-container">
  <header class="id7-page-header">
    <div class="id7-utility-masthead"> <!-- utility bar + masthead -->
    <div class="id7-navigation">       <!-- nav bar -->
  </header>
  <main class="id7-main-content-area" id="main">
    <header class="id7-main-content-header">
    <div class="id7-main-content">
  </main>
  <footer class="id7-page-footer">
    <div class="id7-site-footer"><div class="id7-site-footer-content">
    <div class="id7-app-footer"><div class="id7-app-footer-content">
  </footer>
</div>
<div class="id7-right-border">
```

- Use `wordmark.svg` (not `logo.svg`) for the Warwick wordmark since v3.0.
- The web font is Neue Haas Grotesk via Adobe Fonts TypeKit (`https://use.typekit.net/iog2qgq.css`). If no Creative Cloud subscription is available, omit the import.
- Add `class="id7-non-branded"` to `<html>` to strip Warwick branding.

---

## Icons

- FontAwesome 5 Free is the default icon library (`@fortawesome/fontawesome-free`).
- To use FontAwesome 5 Pro: set up the npm token, install `@fortawesome/fontawesome-pro`, import `id7-no-fa` instead of `id7`, and import `font-awesome-pro.less`.
- Custom favicons and app icons can be generated from an SVG using the `tools/icon-generator` module and the `generateCustomIcons` function. The official icons are regenerated with `npm run generateIcons`.

---

## Contributing

- JS must pass ESLint (`airbnb-base` rules, 2-space indent).
- PRs are automatically linted by CI.
- See `CONTRIBUTING.md` for more details.
- Report bugs or feature requests to <webteam@warwick.ac.uk>.
