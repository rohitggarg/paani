module.exports = {
	customizeUI: function(page, moduleExt) {
		var view = require("../" + moduleExt + "/view." + moduleExt);
		view.customizeUI(page);
	}
}