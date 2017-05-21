
'use strict';

var app = angular.module('MobileAngularUiExamples', [
    "ngRoute",
    "ngTouch",
    "mobile-angular-ui"
]);

/*
 -- Route provider
 */
app.constant('urlEmployees', {
    APIURL: "https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole",
    HOMEPATH: "#/urlEmp",
})


app.config(function ($routeProvider) {
    $routeProvider.when('/', { 
            templateUrl: "templates/listemployee.html",
            controller: "MainController"

        });
    $routeProvider.when('/about', {templateUrl: "templates/about.html"});
    $routeProvider.when('/addEmployee', {templateUrl: "templates/addEmployee.html"});
});
    

