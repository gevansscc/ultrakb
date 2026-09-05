module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy({
    "_src/assets": "assets"
  });

  return {
    dir: {
      input: "_src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};
