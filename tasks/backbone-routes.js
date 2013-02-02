
/**
 * Module dependencies.
 */

var colors = require("colors");

module.exports = function(grunt) {

  grunt.registerTask("backbone-routes", "List routes of Backbone.Router.", function() {
    var routers = grunt.file.glob.glob(grunt.config.get("backboneRoutes.files"));
    routers.forEach(function(router) {
      var content = grunt.file.read(router),
          routes = content.match(/routes:\s+(\{[^}]+\})/)[1];
      if (!routes) { return grunt.log.writeln("routes not found in " + router); }
      output(router, JSON.parse(routes));
    });
  });
};

function output(router, routes) {
  var keys = Object.keys(routes),
      indent = "  ",
      arrow = "  \u2192  ";
  console.log("\n" + router.blue);
  keys.forEach(function(key) {
    console.log(indent + ("#" + key).magenta + arrow + routes[key].grey);
  });
}