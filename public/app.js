console.log('color palette app connected');


var app = angular.module('colorpalette', []);

app.controller('mainController', ['$http', function($http) {
    this.message = "controller works";
    var controller = this;

    $http({
        method: 'GET',
        url: "http://localhost:3000/palettes"
    }).then(
        function(res) {
            console.log(controller);
            console.log(res, " :successful callback");
            controller.palettes = res.data;
     },
        function(res) {
            console.log(res, " :failed callback");
     }.bind(this));


}]);
