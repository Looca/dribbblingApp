'use strict';

var app = angular.module('dribblingApp', ['ngRoute','dribbling.controllers', 'dribbble.filters', 'dribbble.services']);

app.config(function ($routeProvider, $locationProvider){
	$routeProvider
	.when('/shots/:id', {
		controller:'ShotCtrl', 
		templateUrl:'./views/shot.html'})
	.when('/:list', {
		controller:'ShotsListCtrl', 
		templateUrl:'./views/shots_list.html'})
	.when('/:player/:id', {
		controller:'PlayerCtrl', 
		templateUrl:'./views/player.html'})
	.otherwise({redirectTo: '/popular'});
});