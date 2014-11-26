'use strict';

/**
 * @ngdoc function
 * @name examApp.controller:CalendarCtrl
 * @description
 * # CalendarCtrl
 * Controller of the examApp
 */
angular.module('examApp')
  .controller('CalendarCtrl', function ($scope, $http, ENV) {
	$http.get(ENV.apiEndPoint + 'sessionCount').success(function (data) {
		$scope.calendar = data;
	});

  });
