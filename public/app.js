console.log('color palette app connected');


var app = angular.module('colorpalette', []);

app.controller('mainController', ['$http', function($http) {
    this.message = "controller works";


    $http({
        method: 'GET',
        url: 'http://localhost:3000/palettes',
    }).then(function(response) {
        console.log(response);
    });

}]);
