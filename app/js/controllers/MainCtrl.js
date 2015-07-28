function MainCtrl(apiService) {
	this.test = "Hello Wiki!";
	this.apiService = apiService;
	this.wikiData;

	this.getData();
};

angular.module('app').controller('MainCtrl', MainCtrl);

MainCtrl.prototype.getData = function() {
	var self = this;
	this.apiService.getWikiData().then(function(response) {
		console.log(response);
		self.wikiData = response;
	});
};