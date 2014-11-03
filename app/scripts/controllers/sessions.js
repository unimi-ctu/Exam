'use strict';

/**
 * @ngdoc function
 * @name examApp.controller:SessionsCtrl
 * @description
 * # SessionsCtrl
 * Controller of the examApp
 */
angular.module('examApp')
  .controller('SessionsCtrl', function ($scope, $http, $routeParams, $modal) {
  	$scope.examId = $routeParams.examId;
  	$scope.title = 'Elenco sessioni';

	$http.get('http://api.unimi.it/ExamApi/api/exam/exam/' + $routeParams.examId + '/examSessions').success(function (data) {
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
  });
