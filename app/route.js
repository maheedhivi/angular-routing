var app = angular.module("mahi, ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html"
    })
    .when("/post", {
        templateUrl : "templates/post.html"
    })
    .when("/view", {
        templateUrl : "templates/view.html"
    })

    
});