grunt-backbone-routes
=====================

List routes of Backbone.Router.

This task searches files specified via `backboneRoutes.files` and output `routes` of each `Backbone.Router`.

## Sample gruntfile

```js
module.exports = function(grunt) {
  grunt.initConfig({
    backboneRoutes: {
      files: "example/*-router.js"
    }
  });
  grunt.loadNpmTasks('grunt-backbone-routes');
```

![screenshot](https://raw.github.com/p-baleine/grunt-backbone-routes/master/screenshot.png)
