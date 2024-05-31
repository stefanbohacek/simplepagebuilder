const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = (eleventyConfig) => {
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	// eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpeg}");

  eleventyConfig.addPassthroughCopy({
		"./public/": "/",
	});

	eleventyConfig.setChokidarConfig({
		usePolling: true,
		interval: 500,
	});


	return {
		dir: {
			input: "content",          // default: "."
			includes: "../_includes",  // default: "_includes"
			data: "../_data",          // default: "_data"
			output: "_site"
		},
	};

};
