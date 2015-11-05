exports.customizeUI = function(page, moduleExt) {
	var view = require("../" + moduleExt + "/view");
	view.customizeUI(page);
};