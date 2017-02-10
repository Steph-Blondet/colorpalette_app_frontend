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



// GETTING USERS
    $http({
         method: 'GET',
         url: "http://localhost:3000/users"
     }).then(
         function(res) {
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



// ADD A COLOR FUNCTION
    this.addColor = {};

    this.createColor = function() {
        $http({
            method: 'POST',
            url: "http://localhost:3000/palettes",
            data: {palette: {color_name: this.addColor.color_name, img: this.addColor.img, user_id: this.addColor.user_id}}
        }).then(function(response) {
            console.log('adding color');
            console.log(response.data);
            this.addColor = {};
            location.reload();
        }.bind(this));
    }



// EDIT FUNCTION
    this.editPaletteButton = function(id){
        $http({
            method: 'GET',
            url: "http://localhost:3000/palettes/" + id
        }).then(
            function(res) {
                console.log(controller);
                console.log(res.data);
                controller.palette = res.data;
         },
            function(res) {
                console.log(res, " :failed callback");
         }.bind(this));
    };


    this.editPalette = function(id) {
        console.log(id);
        $http({
            method: 'PUT',
            url: "http://localhost:3000/palettes/" + id,
            data: {palette: {color_name: this.editPalette.color_name, img: this.editPalette.img}}
        }).then(function(response) {
            console.log('editing palette');
            console.log(response.data);
            location.reload();
        }.bind(this));
    };



// DELETE FUNCTION
    this.deletePaletteButton = function(id){
        console.log(id);
        $http({
            method: 'GET',
            url: "http://localhost:3000/palettes/" + id
        }).then(
            function(res) {
                console.log(res.data);
                controller.palette = res.data;
                location.reload();
         },
            function(res) {
                console.log(res, " :failed callback");
         }.bind(this));
    };


    this.deletePalette = function(id) {
        console.log(id);
        $http({
            method: 'DELETE',
            url: "http://localhost:3000/palettes/" + id
        }).then(function(response) {
            console.log('deleting color');
            console.log(response.data);
            location.reload();
        }.bind(this));
    }


}]);


// LOG IN FUNCTION
    // this.signIn = {};
    // this.login = function() {
    //     $http({
    //         method: 'POST',
    //         url: "http://localhost:3000/users/login",
    //         data: {user: {name: this.register.name, gender: this.register.gender, age: this.register.age}}
    //     }).then(function(response) {
    //         console.log(response.data);
    //         if (response.data.status === 401) {
    //             this.wrongPassword = true;
    //             this.message = 'Incorrect username or password';
    //         } else {
    //
    //         }
    //     }.bind(this));
    // }
