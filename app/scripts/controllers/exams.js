'use strict';
/**
 * @ngdoc function
 * @name examApp.controller:ExamsCtrl
 * @description
 * # ExamsCtrl
 * Controller of the examApp
 */
angular.module('examApp')
  .controller('ExamsCtrl', function ($scope, $http, $modal, $location) {

  	$scope.now = new Date();

	$http.get('http://api.unimi.it/ExamApi/api/exam/lastExamSessions/25').success(function (data) {
		$scope.sessions = data;
	});

	$scope.showModal = function(examId) {
		$modal.open({
			templateUrl: 'views/examInfo.html',
			controller: 'ExamInfoCtrl',
			resolve: {
				examId: function() {
					return examId;
				}
			}
		});
	};

	$scope.go = function(path) {
		$location.path(path);
	};
  });
