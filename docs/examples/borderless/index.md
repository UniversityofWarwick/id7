---
layout: borderless
title: Borderless ID7
slug: examples/borderless
---

<div class="id7-container-breakout">
  <p class="embed-responsive embed-responsive-3by1 flush-top">
    <img class="embed-responsive-item" src="https://picsum.photos/3000/1000">
  </p>
</div>

# Borderless layout

By default, ID7 constrains all UI elements into the fixed width container (`.id7-fixed-width-container`).

Some designs call for an approach with the illusion of a fluid width container, but where the content is still constrained within a fixed width container for readibility and accessibility purposes. This can then be supplemented with large hero imagery that breaks out of the fixed width container entirely.

To enable borderless for a single page, add the `.id7-borderless` class to the html tag:

```html
<html class="id7-borderless">
```

To enable borderless for an entire application, either include `id7-borderless.css` instead of `id7.css`, or if you are building your own assets, set the LessCSS variable:

```css
@borderless-container: true;
```

With a borderless container, the `.id7-left-border` and `.id7-right-border`s are hidden so no imagery is needed. All full-width page imagery must now support up to `3000px` wide.

## Breaking out of the container

You can use elements with the class `.id7-container-breakout` to have elements that are flush to the entire width of the screen (note that you may lose between 10px and 20px at each side of this due to browser limitations when there is a vertical scrollbar).

You can use [Bootstrap responsive embeds](https://getbootstrap.com/docs/3.4/components/#responsive-embed) to embed content based on an aspect ratio, rather than specifying an explicit width and height. For example:

```html
<div class="id7-container-breakout">
    <p class="embed-responsive embed-responsive-3by1">
        <img class="embed-responsive-item" src="https://picsum.photos/3000/1000">
    </p>
</div>
```

As well as the default `.embed-responsive-16by9` and `embed-responsive-4by3` aspect ratios supported by Bootstrap, ID7 adds three others:

- `.embed-responsive-5by4`
- `.embed-responsive-3by2`
- `.embed-responsive-3by1`

<section class="section-example section-example--padding-lg bg-primary-strong id7-brand-yellow" markdown="1">

## Full-width containers with fixed-width content

The brand often demands a coloured section that stretches across the whole width. Currently this is possible in our CMS, Sitebuilder, but isn't implemented here in ID7 for other applications (except tantalisingly for this one example). If there's a need it can be brought upstream into ID7 to be used elsewhere.

</section>
