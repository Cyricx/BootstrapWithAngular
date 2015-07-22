//to create a module pass the name and an array for anything it depends on.
//Our module now depends on the route module, which is named ngRoute
angular.module("MainApp", []);

//The below works WITHOUT minification. If minified it breaks the depenency injection
//Angular no longer finds a parameter called $scope.
//angular.module("MainApp").controller("TestController", function ($scope) {
//    $scope.test = "This is the beginning of client side awesomeness!";
//});

//To allow angular to process minified versions, it allows you to pass an array as the
//second parameter. It will assume the last item in the array is the function for the controller.
//Anything that comes before that function will be directly wired up to the parameters 
//in the function in the order encountered.
angular.module("MainApp").controller("TestController",
    [
        '$scope',
        function ($scope) {
            $scope.test = "This is a beginning of client side awesomeness!";
        }
    ]
);