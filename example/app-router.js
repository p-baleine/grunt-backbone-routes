
var AppRouter = Backbone.Router.extend({
  routes: {
    "top": "top",
    "page/:page": "page",
    "setting": "setting"
  },

  top: function() { alert("top"); },

  page: function(page) { alert("page"); },

  setting: function() { alert("setting"); }
});