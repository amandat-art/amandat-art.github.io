module.exports = function(eleventyConfig) {
  // local assets
  eleventyConfig.addPassthroughCopy({'src/images': 'assets/images'});
  eleventyConfig.addPassthroughCopy({'src/js': 'assets/js'});

  // jquery
  eleventyConfig.addPassthroughCopy({'node_modules/jquery/dist/jquery.min.js': 'assets/js/jquery.min.js'});

  // font awesome
  eleventyConfig.addPassthroughCopy({'node_modules/font-awesome': 'assets'});

  // frescojs
  eleventyConfig.addPassthroughCopy({'node_modules/@staaky/fresco/dist/css/fresco': 'assets/css/fresco'});
  eleventyConfig.addPassthroughCopy({'node_modules/@staaky/fresco/dist/css/fresco.css': 'assets/css/fresco.css'});
  eleventyConfig.addPassthroughCopy({'node_modules/@staaky/fresco/dist/js/fresco.min.js': 'assets/js/fresco.min.js'});

  return {};
};
