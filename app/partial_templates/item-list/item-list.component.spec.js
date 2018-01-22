'use strict';

describe('itemList', function() {

  // Load the module that contains the `phoneList` component before each test
  beforeEach(module('itemList'));

  // Test the controller
  describe('ItemListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('data/items/items.fr.json')
                  .respond([{name: 'Chat'}, {name: 'Chien'}]);

      ctrl = $componentController('itemList');
    }));
    it('should create a `items` property with 2 items fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.items).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.items).toEqual([{name: 'Chat'}, {name: 'Chien'}]);
    });


  });

});
