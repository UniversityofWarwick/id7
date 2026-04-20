/**
 * This script generates the official Warwick app icons for
 * distribution with ID7. It uses the more general icon-generator
 * module which can be used directly to generate icons from
 * a custom SVG.
 */

import path from 'node:path';
import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';

import pngToIco from 'png-to-ico';

import { COLOURS, generateIcon as generateIconInternal } from "./tools/icon-generator.mjs";

const __dirname = import.meta.dirname;

/*
  Currently deprecated:
   - Most of the sizes of PNG
   - The light-dark mode PNGs (replaced by a dynamic SVG)
   - MS tiles

  We may keep generating the other sizes to avoid things breaking unexpectedly, but
  HTML templates should move to just using the minimal set of icons.
 */

const SETTINGS = {
  outputDirectory: 'dist/images',
  iconLightFilename: 'images/crest-negative.svg',
  iconDarkFilename: 'images/crest-positive.svg',
  lightColor: '#fdfcfc',
  darkColor: '#0c0c0c',
  androidChromeIconSizes: [36, 48, 72, 96, 144, 192, 512], // All but 512px: deprecated
  appleTouchIconSizes: [57, 60, 72, 76, 114, 120, 144, 152, 180], // All but 180px: deprecated
  faviconSizes: [16, 32, 96, 192], // All but 32: deprecated
  pwaIconSizes: [72, 128, 144, 192, 512], // All but 512px: deprecated
}

const outPath = path.join(__dirname, SETTINGS.outputDirectory);

if (!existsSync(outPath)) {
  await fs.mkdir(outPath, { recursive: true})
}

// Original non-maskable Android Chrome icons.
// Shouldn't have a lot of padding
// Will be placed on a white background (on Android)
//
SETTINGS.androidChromeIconSizes.forEach(async (size) => {
  await generateIcon({
    size,
    padding: Math.floor(size / 20),
    inputFilename: SETTINGS.iconDarkFilename,
    outputFilename: `android-chrome-${size}x${size}.png`,
    background: COLOURS.transparent,
  })
});

SETTINGS.appleTouchIconSizes.forEach(async (size) => {
  await generateIcon({
    size,
    padding: Math.floor(size / 10),
    inputFilename: SETTINGS.iconDarkFilename,
    outputFilename: `apple-touch-icon-${size}x${size}.png`,
    background: COLOURS.white,
  });
});

SETTINGS.faviconSizes.forEach(async (size) => {
  await generateIcon({
    size,
    padding: 0,
    inputFilename: SETTINGS.iconDarkFilename,
    outputFilename: `favicon-${size}x${size}.png`,
    background: COLOURS.transparent,
  });
  await generateIcon({
    size,
    padding: 0,
    inputFilename: SETTINGS.iconLightFilename,
    outputFilename: `favicon-dark-mode-${size}x${size}.png`,
    background: COLOURS.transparent,
  });
});

SETTINGS.pwaIconSizes.forEach(async (size) => {
  await generateIcon({
    size,
    // This is more padding than we should need to fit in the minimum maskable area, but in practice
    // we get cut off unless we make it even smaller than that.
    padding: Math.floor(size * 0.24),
    yOffset: Math.floor(size * 0.04), // Move the crest down a touch to appear more central within a circle
    inputFilename: SETTINGS.iconDarkFilename,
    outputFilename: `pwa-icon-${size}x${size}.png`,
    background: COLOURS.lavender,
  });
});

const faviconBuffer = await pngToIco([path.join(outPath, `favicon-32x32.png`)]);
await fs.writeFile(path.join(outPath, 'favicon.ico'), faviconBuffer);

const faviconDarkBuffer = await pngToIco([path.join(outPath, `favicon-dark-mode-32x32.png`)]);
await fs.writeFile(path.join(outPath, 'favicon-dark-mode.ico'), faviconDarkBuffer);

// MS Tile icons - these are more faffy as regards padding and sizes
await generateIcon({
  size: 144,
  padding: 0,
  inputFilename: SETTINGS.iconLightFilename,
  outputFilename: 'mstile-144x144.png',
  background: COLOURS.transparent,
});

await generateIcon({
  width: 128,
  height: 81,
  padding: 16,
  inputFilename: SETTINGS.iconLightFilename,
  outputFilename: 'mstile-70x70.png',
  background: COLOURS.transparent,
});

await generateIcon({
  width: 270,
  height: 208,
  xPadding: 70,
  yPadding: 50,
  inputFilename: SETTINGS.iconLightFilename,
  outputFilename: 'mstile-150x150.png',
  background: COLOURS.transparent,
});

await generateIcon({
  width: 558,
  height: 208,
  xPadding: 216,
  yPadding: 50,
  inputFilename: SETTINGS.iconLightFilename,
  outputFilename: 'mstile-310x150.png',
  background: COLOURS.transparent,
});

await generateIcon({
  width: 558,
  height: 430,
  xPadding: 150,
  yPadding: 128,
  inputFilename: SETTINGS.iconLightFilename,
  outputFilename: 'mstile-310x310.png',
  background: COLOURS.transparent,
});

/**
 * @param {Object} options - Options for generating the icon
 * @param {number} options.size - The size (width and height) of the icon to generate
 * @param {number} options.width - The width of the icon (overrides options.size)
 * @param {number} options.height - The height of the icon (overrides options.size)
 * @param {number} options.padding - The padding (horizontal and vertical) to apply around the icon
 * @param {number} options.xPadding - The horizontal padding to apply around the icon (overrides options.padding)
 * @param {number} options.yPadding - The vertical padding to apply around the icon (overrides options.padding)
 * @param {string} options.inputFilename - The input SVG file to use as the base for the icon (no directory needed)
 * @param {string} options.outputFilename - The filename for the generated icon (no directory needed)
 * @param {Object | string} options.background - The background color or an object with r, g, b, alpha properties
 */
async function generateIcon(options) {
  await generateIconInternal({
    ...options,
    inputPath: path.join(__dirname, options.inputFilename),
    outputPath: path.join(outPath, options.outputFilename)
  });
}

