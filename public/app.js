console.log('color palette app connected');


var app = angular.module('colorpalette', []);

app.controller('mainController', ['$http', function($http) {
    this.message = "controller works"

}]);
