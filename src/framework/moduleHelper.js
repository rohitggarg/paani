var pageHelper = require("./pageHelper");

exports.createModule = function(title, moduleName) {
	var page = tabris.create("Page", {
		topLevel: true,
		title: title
	});
	pageHelper.customizeUI(page, moduleName);
	return page;
};