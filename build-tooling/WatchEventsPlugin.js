module.exports = class WatchEventsPlugin {
  constructor(options) {
    this.options = options || {};
  }

  apply(compiler) {
    const { emitter } = this.options;
    compiler.plugin('after-emit', (compilation, done) => {
      emitter.emit('assets-updated');
      done();
    });
  }
};
