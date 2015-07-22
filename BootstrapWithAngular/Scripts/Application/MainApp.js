//to create a module pass the name and an array for anything it depends on.
//Our module now depends on the route module, which is named ngRoute
angular.module("MainApp", []);

//The below works WITHOUT minification. If minified it breaks the depenency injection
//Angular no longer finds a parameter called $scope.
angular.module("MainApp").controller("TestController", function ($scope) {
    $scope.test = "This is the beginning of client side awesomeness!";
});