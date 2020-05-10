module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({'src/images': 'assets/images'});
  eleventyConfig.addPassthroughCopy({'src/js': 'assets/js'});
  eleventyConfig.addPassthroughCopy({'node_modules/font-awesome/fonts': 'assets/fonts'});

  return {
    pathPrefix: "/portfolio/",
    dir: {
      input: 'src/content',
      output: 'dist',

      includes: '../includes',
      layouts: '../layouts',

      data: '../data',
    }
  };
};
