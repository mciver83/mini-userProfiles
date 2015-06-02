var app = angular.module('userProfiles');


app.controller('mainController', function(mainService){

	this.users =  mainService.getUsers();

})