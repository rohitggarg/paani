exports.handleLogin = function(username, password, router) {
	if(username == "rohit" && password == "garg") {
		router.success();
	} else {
		router.failure();
	}
}