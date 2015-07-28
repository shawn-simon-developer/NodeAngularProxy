function ApiService($http) {
	this.$http = $http;
	this.url = "https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro&titles=AngularJS";
};

angular.module('app').service('apiService', ApiService);

ApiService.prototype.getWikiData = function() {
	return this.$http.get(this.url)
};