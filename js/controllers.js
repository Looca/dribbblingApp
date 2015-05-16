'use strict'

var controllers = angular.module('dribbling.controllers', []);

controllers.controller('AppCtrl', function($scope){
	$scope.name = 'Dribbling App';
});


controllers.controller('ShotsListCtrl', function ($scope,$routeParams,dribbbleResponse){
	console.log($routeParams);

	var list = $routeParams.list;

	dribbbleResponse.list(list)
	.then(function (response){
		$scope.list = response.data;
	});

	$scope.loadNextPage = function(){
		// Dribblbe's API passes page values as a string.
		// To update pagination first convert a string to a number increase by 1. 
		// Then convert back to a string.
		var page = parseInt($scope.list.page, 10)+1;
		page = page.toString();
		dribbbleResponse.list(list, {page: page}).then(function (response){
			$scope.list.page = response.data.page;
			$scope.list.shots = $scope.list.shots.concat(response.data.shots);
		});
	}

});

controllers.controller('ShotCtrl', function ($scope,$routeParams,dribbbleResponse){
	var id = $routeParams.id;
	dribbbleResponse.shot(id)
	.then(function (response){
		$scope.shot = response.data;
	});
});

controllers.controller('PlayerCtrl', function ($scope,$routeParams,dribbbleResponse){
	var player = $routeParams.id;
	dribbbleResponse.player(player)
	.then(function (response){
		$scope.player = response.data;
	});
});
