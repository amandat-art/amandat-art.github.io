module.exports = function(eleventyConfig) {
  return {
      ...require('./layout.js')(eleventyConfig),
      ...require('./site.js')(eleventyConfig),
      ...require('./assets.js')(eleventyConfig),
  };
};
