;(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    root.angularApiAdapter = factory(root.jQuery);
  }
}(this, function(jQuery) {
var angularApiAdapter = angular.module('angularApiAdapter', []);
angular.module('angularApiAdapter').factory('ApiAdapter', [
	function() {
		return jQuery.Api;
	}
]);
return ;
}));
