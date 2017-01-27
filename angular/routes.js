var app = angular.module("Routers",['ngRoute']);


	app.config(function($routeProvider){
		$routeProvider
		.when('/login',{

			templateUrl: 'angular/login.html',
            name : "login"

		})
		.when('/index',{
			templateUrl: 'angular/index.html',
            name: "index"         
		})
		.otherwise({
			redirectTo: '/login'
		})
     
	});
