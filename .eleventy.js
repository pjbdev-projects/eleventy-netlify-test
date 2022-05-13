module.exports = function(eleventConfig) {
    // Transfer to front folders without any processing steps
    eleventConfig.addPassthroughCopy('images');
    eleventConfig.addPassthroughCopy('admin');
};