function ApiService($http) {
	this.$http = $http;
	this.url = "/space/";
};

angular.module('app').service('apiService', ApiService);

ApiService.prototype.getAstronauts = function() {
	return this.$http.get(this.url)
};