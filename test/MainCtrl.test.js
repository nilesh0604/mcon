'use strict';

describe('Controller: MainCtrl', function () {

  beforeEach(module('mcon'));

  var MainCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.employees.length).toBeGreaterThan(0);
  });
});
