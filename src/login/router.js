var restaurantModule = require('../module.restaurantlist');

var Router = function (page) {
	this.page = page;
};

Router.prototype.success = function() {
	restaurantModule.page().open();
};

Router.prototype.failure = function() {
	this.page.find("#username").background = "red";
};

module.exports = Router;