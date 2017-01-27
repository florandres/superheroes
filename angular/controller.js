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


	app.controller("LoginController",function($scope, $location){
		$scope.submit = function(){
			var uname = $scope.username;
			var password = $scope.password;

			if($scope.username == 'admin' && $scope.password == 'admin'){
				$location.path('/');
                
			}
			
		}
	})