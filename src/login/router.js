var Router = function (page) {
	this.page = page;
};

Router.prototype.success = function() {
	var restaurantModule = require('../module.restaurantlist');
	restaurantModule.page.open();
};

Router.prototype.failure = function() {
	this.page.apply({
		"#username": {background: "red"},
		"#password": {background: "red"}
	});
};

module.exports = Router;