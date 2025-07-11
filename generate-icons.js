import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
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
  faviconSizes: [16, 32, 96],
}

const transparent = {r: 0, g: 0, b: 0, alpha: 0};

SETTINGS.androidChromeIconSizes.forEach((size) => {
  generateIcon({
    size,
    padding: Math.floor(size / 20),
    inputFilename: SETTINGS.iconLightFilename,
    outputFilename: `android-chrome-${size}x${size}.png`,
    background: transparent,
  })
});

SETTINGS.appleTouchIconSizes.forEach((size) => {
  generateIcon({
    size,
    padding: Math.floor(size / 10),
    inputFilename: SETTINGS.iconDarkFilename,
    outputFilename: `apple-touch-icon-${size}x${size}.png`,
    background: {r: 255, g: 255, b: 255, alpha: 1},
  });
});

SETTINGS.faviconSizes.forEach((size) => {
  generateIcon({
    size,
    padding: 0,
    inputFilename: SETTINGS.iconDarkFilename,
    outputFilename: `favicon-${size}x${size}.png`,
    background: transparent,
  });
});

SETTINGS.faviconSizes.forEach((size) => {
  generateIcon({
    size,
    padding: 0,
    inputFilename: SETTINGS.iconLightFilename,
    outputFilename: `favicon-dark-mode-${size}x${size}.png`,
    background: transparent,
  });
});

pngToIco(SETTINGS.faviconSizes.map((size) => path.join(__dirname, SETTINGS.outputDirectory, `favicon-${size}x${size}.png`)))
  .then(buf => {
    fs.writeFileSync(path.join(__dirname, SETTINGS.outputDirectory, 'favicon.ico'), buf);
  });

pngToIco(SETTINGS.faviconSizes.map((size) => path.join(__dirname, SETTINGS.outputDirectory, `favicon-dark-mode-${size}x${size}.png`)))
  .then(buf => {
    fs.writeFileSync(path.join(__dirname, SETTINGS.outputDirectory, 'favicon-dark-mode.ico'), buf);
  });

/**
 * @param {Object} options - Options for generating the icon
 * @param {number} options.size - The size of the icon to generate
 * @param {number} options.padding - The margin to apply around the icon
 * @param {string} options.inputFilename - The input SVG file to use as the base for the icon (no directory needed)
 * @param {string} options.outputFilename - The filename for the generated icon (no directory needed)
 * @param {Object | string} options.background - The background color or an object with r, g, b, alpha properties
 */
function generateIcon(options) {
  const img = sharp(path.join(__dirname, options.inputFilename))
    .resize({
      width: (options.size - (2 * options.padding)),
      height: (options.size - (2 * options.padding)),
      fit: 'contain',
      background: options.background
    }).extend({
      top: options.padding,
      bottom: options.padding,
      left: options.padding,
      right: options.padding,
      background: options.background,
    });

  if (options.background !== transparent) {
    img.flatten({ background: options.background });
  }

  img
    .png()
    .toFile(path.join(__dirname, SETTINGS.outputDirectory, options.outputFilename))
    .then(() => {
      console.log(`Generated icon: ${options.outputFilename}`);
    })
    .catch((err) => {
      console.error(`Error generating icon: ${options.outputFilename} - `, err);
    });
}
