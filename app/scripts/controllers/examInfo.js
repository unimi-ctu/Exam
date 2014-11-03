'use strict';

angular.module('examApp')
  .controller('ExamInfoCtrl', function ($scope, $http, $modalInstance, examId) {

  	$scope.examId = examId;

  	$http.get('http://api.unimi.it/ExamApi/api/exam/examInfo/' + examId).success(function (data) {
  		$scope.exam = data;
  	});
  	$scope.cancel = function() {
  		$modalInstance.dismiss('cancel');
  	};
  });