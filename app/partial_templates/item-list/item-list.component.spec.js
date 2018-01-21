'use strict';

describe('itemList', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('itemList'));

  // Test the controller
  describe('ItemListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;

      ctrl = $componentController('itemList');
    }));


  });

});
