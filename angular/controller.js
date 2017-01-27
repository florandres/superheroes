<<<<<<< HEAD
var app = angular.module("MyLogin",['ngRoute']);


	app.config(function($routeProvider){
		$routeProvider
		.when('/login',{

			templateUrl: 'login.html',
            name : "login",
            controller: "LoginController"

		})
		.when('/index',{
			templateUrl: 'index.html',
            name: "index",
            controller: "LoginController"
		})
		.otherwise({
			redirectTo: '/login'
            
		})
     
	});
=======
var app = angular.module("MyLogin",['ngRoute','Routers']);
>>>>>>> fbe09c3c136fd35b2a297b00952b032cb6b650a4


	app.controller("LoginController",function($scope, $location){
			$scope.submit = function(){
			var uname = $scope.username;
			var password = $scope.password;

			if($scope.username == 'admin' && $scope.password == 'admin'){
				$location.path('/');
                
			}
			
		}
		
	});