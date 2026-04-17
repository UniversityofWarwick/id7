module.exports = function(api) {
  // Cache results until NODE_ENV changes
  api.cache.using(() => process.env.NODE_ENV);

  return {
    "presets": [
      "@babel/preset-env"
    ],
    "plugins": ["lodash"]
  };
};
