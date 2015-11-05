var pageHelper = require("./pageHelper");

exports.createModule = function(title, moduleName) {
	return function() {
		var page = tabris.create("Page", {
			topLevel: false,
			title: title
		});
		pageHelper.customizeUI(page, moduleName);
		return page;
	}
};

exports.createParentModule = function(title, moduleName) {
	return function() {
		var page = tabris.create("Page", {
			topLevel: true,
			title: title
		});
		pageHelper.customizeUI(page, moduleName);
		return page;
	}
};