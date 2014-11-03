'use strict';

describe('Controller: ExamsCtrl', function () {

  // load the controller's module
  beforeEach(module('examApp'));

  var ExamsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExamsCtrl = $controller('ExamsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
