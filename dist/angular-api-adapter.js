;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery', 'jquery.api-adapter'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'), require('jquery.api-adapter'));
  } else {
    root.angularApiAdapter = factory(root.jQuery, root.jQuery.Api);
  }
}(this, function(jQuery, Api) {
var angularApiAdapter = angular.module('angularApiAdapter', []);
angular.module('angularApiAdapter').factory('ApiAdapter', [
	function() {
		return jQuery.Api;
	}
]);
return ;
}));
