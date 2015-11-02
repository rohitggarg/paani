exports.customizeUI = function(page) {
	var usernameField = tabris.create("TextInput", {
	  keyboard: "email",
	  message: "Username/Email",
	  layoutData: {left: 15, top: 50, width: 290}
	}).appendTo(page);

	var passwordField = tabris.create("TextInput", {
	  type: "password",
	  message: "Password",
	  layoutData: {left: 15, top: [usernameField, 10], width: 290}
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