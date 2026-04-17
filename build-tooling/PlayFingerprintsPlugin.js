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
export default class PlayFingerprintsPlugin {
  constructor(options) {
    this.options = options || {};
  }

  apply(compiler) {
    compiler.hooks.thisCompilation.tap('PlayFingerprintsPlugin', (compilation) => {
      compilation.hooks.processAssets.tapAsync(
        {
          name: 'PlayFingerprintsPlugin',
          stage: compilation.compiler.webpack.Compilation.PROCESS_ASSETS_STAGE_ADDITIONAL,
        },
        (assets, done) => {
          // const versionedFilenames = {};

          // Get list of asset names to process (avoid mutating during iteration)
          const assetNames = Object.keys(assets);

          for (const fullPath of assetNames) {
            const dir = path.dirname(fullPath);
            const filename = path.basename(fullPath);

            // Skip zip files - they don't need fingerprinting
            if (filename.endsWith('.zip')) {
              continue;
            }

            const dynamicChunk = filename.match(/^([a-z0-9]+)-([0-9]+.js(\.map)?)$/);
            if (dynamicChunk) {
              // This is a dynamic chunk that uses [chunkhash]
              // in its filename already - so reverse engineer the .md5 file
              // to allow the Gulp script to find the fingerprinted version.
              const hash = dynamicChunk[1];
              const name = dynamicChunk[2];
              
              const RawSource = compilation.compiler.webpack.sources.RawSource;
              compilation.emitAsset(`${dir}/${name}.md5`, new RawSource(hash));

              // don't really need this, but Play seems not to serve the file
              // unless the non-fingerprinted version exists.
              compilation.emitAsset(`${dir}/${name}`, compilation.getAsset(fullPath).source);
            } else {
              const asset = compilation.getAsset(fullPath);
              if (!asset) continue;
              
              const hash = createHash('md5');
              hash.update(asset.source.source());
              const md5 = hash.digest('hex');

              // Identical to original file but with hash prepended.
              compilation.emitAsset(`${dir}/${md5}-${filename}`, asset.source);

              // Fingerprint .md5 file
              const RawSource = compilation.compiler.webpack.sources.RawSource;
              compilation.emitAsset(`${dir}/${filename}.md5`, new RawSource(md5));

              // versionedFilenames[filename] = `${md5}-${filename}`;
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
        }
      );
    });
  }
}
