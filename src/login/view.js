var Router = require('./router');
var controller = require('./controller');

exports.customizeUI = function(page) {
	var loginRouter = new Router(page);
	var usernameField = tabris.create("TextInput", {
	  keyboard: "email",
	  message: "Username/Email",
	  id: "username",
	  layoutData: {left: 15, top: 50, width: 290}
	}).appendTo(page);

	var passwordField = tabris.create("TextInput", {
	  type: "password",
	  message: "Password",
	  id: "password",
	  layoutData: {left: 15, top: [usernameField, 10], width: 290}
	}).appendTo(page);

	var button = tabris.create("Button", {
	  text: "Login",
	  layoutData: {centerX: 0, top: [passwordField, 20]}
	}).appendTo(page);

	button.on('select', function() {
		controller.handleLogin(usernameField.get('text'), passwordField.get('text'), loginRouter);
	});
};