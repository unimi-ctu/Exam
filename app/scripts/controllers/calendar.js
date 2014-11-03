'use strict';

/**
 * @ngdoc function
 * @name examApp.controller:CalendarCtrl
 * @description
 * # CalendarCtrl
 * Controller of the examApp
 */
angular.module('examApp')
  .controller('CalendarCtrl', function ($scope, $http) {
	$http.get('http://api.unimi.it/ExamApi/api/exam/sessionCount').success(function (data) {
		$scope.calendar = data;
	});

  });
