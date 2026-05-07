---
layout: default
title: Migration - Evolved brand
slug: migration/evolved
html_classes: id7-evolved id7-borderless id7-brand-lavender
---

> ⚠️ The evolved brand for existing applications isn't fully finalised and so this section is subject to change. You can migrate to 4.0 without using the evolved brand.

This guide assumes you've completed the [4.0 migration](/migration/4.0/). It gives a technical overview of how to start making your application follow the evolved brand, but it doesn't include all of the brand guidelines. You should consult the [Brand Portal](https://brand.warwick.ac.uk/) to make sure you use colours in the correct way - for example, different primary colours cannot exist flush against each other and must have a gap of white between them.

## Ensure you have the code

If you build your own subset of LESS modules instead of importing `id7` or `id7-no-fa`, ensure you include:
  ```css
  @import 'evolved-brand.less';
  ```
In most apps this won't be necessary.

## Opting in to the layout

To opt in at the page level, add the `id7-evolved` and `id7-borderless` classes to the `html` element.

If you are building your CSS from source and you want to opt in your entire application, you can instead set these variables:

```css
@borderless-container:      true;
@evolved-brand:             true; 
@evolved-brand-default:     true;
```

The base brand colour must be one of the pastel palette colours. The easiest way to do that is to use one of the brand classes, e.g. `id7-brand-lavender`, which will also go on the `html` element. You can alternatively use `brand-css-variables` as long as you give it one of these colours. This will set the base colour for the masthead and any coloured components on the page. 

## Authoring components

There are a set of CSS custom properties that allow swapping out different theme colours, while components on the page can simply colour themselves with

Generally most of the properties should be considered internal details and not used directly - otherwise it's very easy to use a new background colour, for example, without also picking the appropriate contrasting text colour, and similarly for heading and link colours. To keep things simple, CSS classes are provided which should be used where possible, and if you come across situations where you can't implement a design with the classes available, you should look to get such classes incorporated into ID7.

### Primary colour selection

You can use one of the following classes: {% for brand in site.data.brand_palette %}`id7-brand-{{brand.id}}` {% endfor %}

In practice, Purple is probably not one that you would mix and match with the others, and only exists in the brand for specific non-web design cases.

### Background classes

`bg-primary-strong` Sets the background to the brightest version of the current colour, normally tint 500.

`bg-primary-subtle` Sets the background to a slightly faded version of the current colour, normally tint 300.

`bg-black` Sets the background to black.

`bg-white` Sets the background to white.

These classes also manage the `color` property and should also ensure link and heading colours are correct. In these examples the primary colour and the background are set on the same element, but this isn't required - the colours will be taken from any container, so you can set the primary colour across a whole page or a section of a page.

<ul class="example-grid list-unstyled">
{% for brand in site.data.brand_palette %}
    <li class="example-card id7-brand-{{brand.id}} bg-primary-strong">
        <h2>{{brand.name}}</h2>
        <p>Strong shade</p>
    </li>
    <li class="example-card id7-brand-{{brand.id}} bg-primary-subtle">
        <h2>{{brand.name}}</h2>
        <p>Subtle shade</p>
    </li>
{% endfor %}
</ul>

### Usable CSS properties

There are a few CSS properties that you can use (read-only), if you need to customise the colour of specific elements in a design. When you use the above classes to manage background colours, ID7 keeps these values updated so that everything matches the container it's in.

```css
/* Current background */
--w-sys-colors-bg;

/* Current foreground (text) */
/* Alternatively use the CSS `currentColor` value */
--w-sys-colors-fg;

/* Current heading colour */
--w-sys-colors-heading;

/* Link colours */
--w-sys-colors-link;
--w-sys-colors-link-hover;
```
