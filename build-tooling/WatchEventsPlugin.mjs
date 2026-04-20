export default class WatchEventsPlugin {
  constructor(options) {
    this.options = options || {};
  }

  apply(compiler) {
    const { emitter } = this.options;
    compiler.hooks.afterEmit.tapAsync('WatchEventsPlugin', (compilation, done) => {
      emitter.emit('assets-updated');
      done();
    });
  }
}
