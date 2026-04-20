import path from 'node:path';
import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';

import sharp from 'sharp';

function resolvePath(p) {
  const absolutePath = path.isAbsolute(p) ? p : path.join(__dirname, '..', p);
  return path.normalize(absolutePath);
}

export const COLOURS = {
  transparent: {r: 0, g: 0, b: 0, alpha: 0},
  white: {r: 255, g: 255, b: 255, alpha: 1},
  lavender: {r: 164, g: 153, b: 244, alpha: 1},
  magenta: {r: 255, g: 0, b: 255, alpha: 1}, // For testing!
};

/**
 * From a source SVG, generate the set of necessary derivative favicon files.
 * Assuming modern browsers, we can largely rely on the source SVG itself,
 * one large Apple icon, a single legacy 32px PNG, and a maskable PWA icon for
 * use in a web manifest.
 *
 * Call from your build e.g.
 *
 *   await generator.generateCustomIcons('src/icons/toucan.svg', 'build/icons', {
 *     backgroundColour: generator.COLOURS.lavender
 *   });
 *
 * @param sourcePath {string} Path to the SVG of your icon
 * @param outputPath {string} Directory to output images to
 * @param options {object?} Options
 * @param options.backgroundColour {string?} Background colour where required, otherwise white is used.
 * @param options.maskablePadding {number?} A number 0-1 defining how much padding to use on maskable PWA icons.
 *        A sensible default is used if not defined.
 * @param options.alwaysBackground {boolean?} If true, we always add a background. Otherwise we will leave transparency
 *        in place for icons where it's recommended. You may wish to set this if your source SVG doesn't look
 *        consistently visible on all backgrounds.
 * @returns {Promise<string[]>} an array of generated paths.
 */
export async function generateCustomIcons(sourcePath, outputPath, options) {
  const inputPath = resolvePath(sourcePath);
  if (!existsSync(inputPath)) {
    throw new Error(`Source file not found: ${inputPath}`);
  }
  const outputDir = resolvePath(outputPath);
  if (!existsSync(outputDir)) {
    console.log(`Creating output directory: ${outputDir}`)
    await fs.mkdir(outputDir, { recursive: true});
  }

  const background = options?.backgroundColour ?? COLOURS.white;
  const maybeTransparent = options?.alwaysBackground ? background : COLOURS.transparent;
  const maskablePadding = options?.maskablePadding ?? 0.25;

  const maskable = generateIcon({
    size: 512,
    // More than we should need, but Android is a real cropping fiend.
    // It may also depend on the shape of your icon as to how well it fits within
    // a circle, so may need to make this configurable.
    padding: 512 * maskablePadding,
    inputPath,
    outputPath: path.join(outputDir, 'pwa-icon-512x512.png'),
    background,
  });

  const android = generateIcon({
    size: 512,
    padding: 16,
    inputPath,
    outputPath: path.join(outputDir, 'android-chrome-512x512.png'),
    background: maybeTransparent,
  })

  const apple = generateIcon({
    size: 180,
    padding: 18,
    inputPath,
    outputPath: path.join(outputDir, `apple-touch-icon-180x180.png`),
    background,
  });

  const legacy = generateIcon({
    size: 32,
    padding: 0,
    inputPath,
    outputPath: path.join(outputDir, `favicon-32x32.png`),
    background: maybeTransparent,
  });

  const results = await Promise.all([maskable, android, apple, legacy]);
  return results.map(r => r.outputPath);
}

export /**
 * @param {Object} options - Options for generating the icon
 * @param {number} options.size - The size (width and height) of the icon to generate
 * @param {number} options.width - The width of the icon (overrides options.size)
 * @param {number} options.height - The height of the icon (overrides options.size)
 * @param {number} options.padding - The padding (horizontal and vertical) to apply around the icon
 * @param {number} options.xPadding - The horizontal padding to apply around the icon (overrides options.padding)
 * @param {number} options.yPadding - The vertical padding to apply around the icon (overrides options.padding)
 * @param {number} options.yOffset - How much to move the icon down to visually appear central - default 0
 * @param {string} options.inputPath - The input SVG file to use as the base for the icon (no directory needed)
 * @param {string} options.outputPath - The filename for the generated icon (no directory needed)
 * @param {Object | string} options.background - The background color or an object with r, g, b, alpha properties
 */
async function generateIcon(options) {
  const xPadding = options.xPadding ?? options.padding;
  const yPadding = options.yPadding ?? options.padding;
  const yOffset = options.yOffset ?? 0;
  const img = sharp(options.inputPath)
    .resize({
      width: ((options.width ?? options.size) - (2 * xPadding)),
      height: ((options.height ?? options.size) - (2 * yPadding)),
      fit: 'contain',
      background: options.background
    }).extend({
      left: xPadding,
      right: xPadding,
      top: yPadding + yOffset,
      bottom: yPadding - yOffset,
      background: options.background,
    });

  if (options.background !== COLOURS.transparent) {
    img.flatten({ background: options.background });
  }

  await img
    .png()
    .toFile(options.outputPath)

  console.log(`Generated icon: ${options.outputPath}`);

  return {
    outputPath: options.outputPath
  };
}
