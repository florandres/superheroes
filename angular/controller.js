var app = angular.module("MyLogin",['ngRoute']);


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


	app.controller("LoginController",function($scope, $location){
		$scope.submit = function(){
			var uname = $scope.username;
			var password = $scope.password;

			if($scope.username == 'admin' && $scope.password == 'admin'){
				$location.path('/index')
			}
			
		}
	})