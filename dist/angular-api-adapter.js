var angularApiAdapter = angular.module('angularApiAdapter', []);
angular.module('angularApiAdapter').factory('ApiAdapter', [
	function() {
		return jQuery.Api;
	}
]);