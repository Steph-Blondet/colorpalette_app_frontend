console.log('color palette app connected');


var app = angular.module('colorpalette', []);

app.controller('mainController', ['$http', function($http) {
    this.message = "controller works";
    var controller = this;

// GETTING PALETTE
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



     $http({
         method: 'GET',
         url: "http://localhost:3000/users"
     }).then(
         function(res) {
             console.log(controller);
             console.log(res.data);
             controller.users = res.data;
      },
         function(res) {
             console.log(res, " :failed callback");
      }.bind(this));



// REGISTER FUNCTION
    this.register = {};

    this.createUser = function() {
        $http({
            method: 'POST',
            url: "http://localhost:3000/users",
            data: {user: {name: this.register.name, gender: this.register.gender, age: this.register.age}}
        }).then(function(response) {
            console.log('signing up');
            console.log(response.data);
            this.register = {};

        }.bind(this));
    }


}]);
