'use strict';

/**
 * @ngdoc function
 * @name examApp.controller:SessionsCtrl
 * @description
 * # SessionsCtrl
 * Controller of the examApp
 */
angular.module('examApp')
  .controller('SessionsCtrl', function ($scope, $http, $routeParams, $modal, ENV) {
  	$scope.examId = $routeParams.examId;
  	$scope.title = 'Elenco sessioni';

	$http.get(ENV.apiEndPoint + 'exam/' + $routeParams.examId + '/examSessions').success(function (data) {
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
