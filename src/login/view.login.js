exports.customizeUI = function(page) {
	var usernameField = tabris.create("TextInput", {
	  keyboard: "email",
	  layoutData: {centerX: 0, top: 50}
	}).appendTo(page);

	var passwordField = tabris.create("TextInput", {
	  type: "password",
	  layoutData: {centerX: 0, top: [usernameField, 10]}
	}).appendTo(page);

	var button = tabris.create("Button", {
	  text: "Login",
	  layoutData: {centerX: 0, top: [passwordField, 20]}
	}).appendTo(page);

	button.on('select', function() {
		var controller = require('./controller.login');
		var loginRouter = require('./router.login')(page);
		controller.handleLogin(usernameField.text, passwordField.text, loginRouter);
	})
}