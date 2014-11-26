'use strict';

angular.module('examApp')
  .controller('ExamInfoCtrl', function ($scope, $http, $modalInstance, examId, ENV) {

  	$scope.examId = examId;

  	$http.get(ENV.apiEndPoint + 'examInfo/' + examId).success(function (data) {
  		$scope.exam = data;
  	});
  	$scope.cancel = function() {
  		$modalInstance.dismiss('cancel');
  	};
  });