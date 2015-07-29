function MainCtrl(apiService) {
	this.test = "Hello Astronauts!";
	this.apiService = apiService;
	this.wikiData;

	this.getData();
};

angular.module('app').controller('MainCtrl', MainCtrl);

MainCtrl.prototype.getData = function() {
	var self = this;
	this.apiService.getAstronauts().then(function(response) {
		console.log(response);
		self.wikiData = response.data.people;
	});
};