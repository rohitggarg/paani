var pageHelper = require("./framework/pageHelper");

exports.page = function() {
	var loginPage = tabris.create("Page", {
		topLevel: true,
		title: "Login to Paani"
	});
	pageHelper.customizeUI(loginPage, "login");
	return loginPage;
};