import sharp from 'sharp';
import path from 'path';
import fs from 'fs/promises';
import pngToIco from 'png-to-ico';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SETTINGS = {
  outputDirectory: 'images',
  iconLightFilename: 'images/src/crest-negative.svg',
  iconDarkFilename: 'images/src/crest-positive.svg',
  lightColor: '#fdfcfc',
  darkColor: '#0c0c0c',
  androidChromeIconSizes: [36, 48, 72, 96, 144, 192],
  appleTouchIconSizes: [57, 60, 72, 76, 114, 120, 144, 152, 180],
  faviconSizes: [16, 32, 96, 192],
  pwaIconSizes: [72, 128, 144, 192, 512],
}

const transparent = {r: 0, g: 0, b: 0, alpha: 0};

SETTINGS.androidChromeIconSizes.forEach(async (size) => {
  await generateIcon({
    size,
    padding: Math.floor(size / 20),
    inputFilename: SETTINGS.iconDarkFilename,
    outputFilename: `android-chrome-${size}x${size}.png`,
    background: transparent,
  })
});

SETTINGS.appleTouchIconSizes.forEach(async (size) => {
  await generateIcon({
    size,
    padding: Math.floor(size / 10),
    inputFilename: SETTINGS.iconDarkFilename,
    outputFilename: `apple-touch-icon-${size}x${size}.png`,
    background: {r: 255, g: 255, b: 255, alpha: 1},
  });
});

SETTINGS.faviconSizes.forEach(async (size) => {
  await generateIcon({
    size,
    padding: 0,
    inputFilename: SETTINGS.iconDarkFilename,
    outputFilename: `favicon-${size}x${size}.png`,
    background: transparent,
  });
});

SETTINGS.faviconSizes.forEach(async (size) => {
  await generateIcon({
    size,
    padding: 0,
    inputFilename: SETTINGS.iconLightFilename,
    outputFilename: `favicon-dark-mode-${size}x${size}.png`,
    background: transparent,
  });
});

SETTINGS.pwaIconSizes.forEach(async (size) => {
  await generateIcon({
    size,
    padding: Math.floor(size / 5.5), // 5.5 is a bit arbitrary, but works for the crest
    inputFilename: SETTINGS.iconDarkFilename,
    outputFilename: `pwa-icon-${size}x${size}.png`,
    background: {r: 164, g: 153, b: 244, alpha: 1},
  });
});

const faviconBuffer = await pngToIco(SETTINGS.faviconSizes.map((size) => path.join(__dirname, SETTINGS.outputDirectory, `favicon-${size}x${size}.png`)));
await fs.writeFile(path.join(__dirname, SETTINGS.outputDirectory, 'favicon.ico'), faviconBuffer);

const faviconDarkBuffer = await pngToIco(SETTINGS.faviconSizes.map((size) => path.join(__dirname, SETTINGS.outputDirectory, `favicon-dark-mode-${size}x${size}.png`)));
await fs.writeFile(path.join(__dirname, SETTINGS.outputDirectory, 'favicon-dark-mode.ico'), faviconDarkBuffer);

// MS Tile icons - these are more faffy as regards padding and sizes
await generateIcon({
  size: 144,
  padding: 0,
  inputFilename: SETTINGS.iconLightFilename,
  outputFilename: 'mstile-144x144.png',
  background: transparent,
});

await generateIcon({
  width: 128,
  height: 81,
  padding: 16,
  inputFilename: SETTINGS.iconLightFilename,
  outputFilename: 'mstile-70x70.png',
  background: transparent,
});

await generateIcon({
  width: 270,
  height: 208,
  xPadding: 70,
  yPadding: 50,
  inputFilename: SETTINGS.iconLightFilename,
  outputFilename: 'mstile-150x150.png',
  background: transparent,
});

await generateIcon({
  width: 558,
  height: 208,
  xPadding: 216,
  yPadding: 50,
  inputFilename: SETTINGS.iconLightFilename,
  outputFilename: 'mstile-310x150.png',
  background: transparent,
});

await generateIcon({
  width: 558,
  height: 430,
  xPadding: 150,
  yPadding: 128,
  inputFilename: SETTINGS.iconLightFilename,
  outputFilename: 'mstile-310x310.png',
  background: transparent,
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
  const img = sharp(path.join(__dirname, options.inputFilename))
    .resize({
      width: ((options.width ?? options.size) - (2 * (options.xPadding ?? options.padding))),
      height: ((options.height ?? options.size) - (2 * (options.yPadding ?? options.padding))),
      fit: 'contain',
      background: options.background
    }).extend({
      top: options.yPadding ?? options.padding,
      bottom: options.yPadding ?? options.padding,
      left: options.xPadding ?? options.padding,
      right: options.xPadding ?? options.padding,
      background: options.background,
    });

  if (options.background !== transparent) {
    img.flatten({ background: options.background });
  }

  await img
    .png()
    .toFile(path.join(__dirname, SETTINGS.outputDirectory, options.outputFilename))

  console.log(`Generated icon: ${options.outputFilename}`);
}
