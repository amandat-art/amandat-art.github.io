module.exports = function(eleventyConfig) {
  // local assets
  eleventyConfig.addPassthroughCopy({'src/images': 'assets/images'});
  eleventyConfig.addPassthroughCopy({'src/js': 'assets/js'});

  // jquery
  eleventyConfig.addPassthroughCopy({'node_modules/jquery/dist/jquery.min.js': 'assets/js/jquery.min.js'});

  // font awesome
  eleventyConfig.addPassthroughCopy({'node_modules/font-awesome/fonts/fontawesome-webfont.eot': 'assets/fonts/fontawesome-webfont.eot'});
  eleventyConfig.addPassthroughCopy({'node_modules/font-awesome/fonts/fontawesome-webfont.svg': 'assets/fonts/fontawesome-webfont.svg'});
  eleventyConfig.addPassthroughCopy({'node_modules/font-awesome/fonts/fontawesome-webfont.ttf': 'assets/fonts/fontawesome-webfont.ttf'});
  eleventyConfig.addPassthroughCopy({'node_modules/font-awesome/fonts/fontawesome-webfont.woff': 'assets/fonts/fontawesome-webfont.woff'});
  eleventyConfig.addPassthroughCopy({'node_modules/font-awesome/fonts/fontawesome-webfont.woff2': 'assets/fonts/fontawesome-webfont.woff2'});
  eleventyConfig.addPassthroughCopy({'node_modules/font-awesome/fonts/fontawesome-webfont.otf': 'assets/fonts/fontawesome-webfont.otf'});

  return {};
};
