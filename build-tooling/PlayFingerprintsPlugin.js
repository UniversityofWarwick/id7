/* eslint-disable class-methods-use-this */
/* eslint-disable no-restricted-syntax */
import path from 'path';
import { createHash } from 'crypto';

/**
 * Webpack plugin that generates some extra files for Play! Framework
 * to use to generate versioned assets.
 *
 * It calculates the MD5 hash of each source and then:
 * Adds a .md5 file containing that hash
 * Adds a HASH-FILENAME copy of the original file.
 *
 * Logic based on the gulp-play-assets module.
 */
module.exports = class PlayFingerprintsPlugin {
  constructor(options) {
    this.options = options || {};
  }

  apply(compiler) {
    compiler.plugin('emit', (compilation, done) => {
      const { assets } = compilation;
      // const versionedFilenames = {};

      for (const fullPath in assets) {
        if (Object.prototype.hasOwnProperty.call(assets, fullPath)) {
          const dir = path.dirname(fullPath);
          const filename = path.basename(fullPath);

          const dynamicChunk = filename.match(/^([a-z0-9]+)-([0-9]+.js(\.map)?)$/);
          if (dynamicChunk) {
            // This is a dynamic chunk that uses [chunkhash]
            // in its filename already - so reverse engineer the .md5 file
            // to allow the Gulp script to find the fingerprinted version.
            const hash = dynamicChunk[1];
            const name = dynamicChunk[2];
            assets[`${dir}/${name}.md5`] = {
              source: () => hash,
              size: () => hash.length,
            };

            // don't really need this, but Play seems not to serve the file
            // unless the non-fingerprinted version exists.
            assets[`${dir}/${name}`] = assets[fullPath];
          } else {
            const hash = createHash('md5');
            hash.update(assets[fullPath].source());
            const md5 = hash.digest('hex');

            // Identical to original file but with hash prepended.
            assets[`${dir}/${md5}-${filename}`] = assets[fullPath];

            // Fingerprint .md5 file
            assets[`${dir}/${filename}.md5`] = {
              source: () => md5,
              size: () => md5.length,
            };

            // versionedFilenames[filename] = `${md5}-${filename}`;
          }
        }
      }

      // for (const chunkId in compilation.chunks) {
      //   if (compilation.chunks.hasOwnProperty(chunkId)) {
      //     const chunk = compilation.chunks[chunkId];
      //     chunk.files = chunk.files.map( file => {
      //       console.log(`Replacing ${file} with ${versionedFilenames[file]}`);
      //       return versionedFilenames[file];
      //     });
      //   }
      // }

      done();
    });
  }
};
