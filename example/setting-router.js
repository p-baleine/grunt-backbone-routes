
var SettingRouter = Backbone.Router.extend({
  routes: {
    "setting/email": "email",
    "setting/application": "application"
  },

  email: function() { alert("email"); },

  application: function(page) { alert("application"); }
});