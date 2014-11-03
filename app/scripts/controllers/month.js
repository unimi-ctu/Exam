'use strict';

/**
 * @ngdoc function
 * @name examApp.controller:MonthCtrl
 * @description
 * # MonthCtrl
 * Controller of the examApp
 */
angular.module('examApp')
  .controller('MonthCtrl', function ($scope, $http, $routeParams, $filter) {
	$scope.title = 'Elenco sessioni ' + $filter('date')(new Date($routeParams.date), 'MMMM yyyy');
	$scope.prevMonth = new Date($routeParams.date);
	$scope.prevMonth = $scope.prevMonth.setMonth($scope.prevMonth.getMonth() - 1);
	$scope.nextMonth = new Date($routeParams.date);
	$scope.nextMonth = $scope.nextMonth.setMonth($scope.nextMonth.getMonth() + 1);

	$http.get('http://api.unimi.it/ExamApi/api/exam/examSessions/month/' + $routeParams.date).success(function (data) {
		$scope.sessions = data;
	});
});
