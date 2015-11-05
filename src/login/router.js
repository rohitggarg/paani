var restaurantModule = require('../module.restaurantlist');
var Router = function (page) {
	this.page = page;
};

Router.prototype.success = function() {
	restaurantModule.page().open();
};

Router.prototype.failure = function() {
	this.page.apply({
		"#username": {background: "red"},
		"#password": {background: "red"}
	});
};

module.exports = Router;