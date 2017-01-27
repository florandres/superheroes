var app = angular.module("MyLogin",['ngRoute','Routers']);


	app.controller("LoginController",function($scope, $location){
			$scope.submit = function(){
			var uname = $scope.username;
			var password = $scope.password;

			if($scope.username == 'admin' && $scope.password == 'admin'){
				$location.path('/index')
			}
			
		}
		
	});