'use strict';

describe('Item', function() {
  var $httpBackend;
  var Item;
  var itemsData = [
    {name: 'Item X'},
    {name: 'Item Y'},
    {name: 'Item Z'}
  ];


  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });


  beforeEach(module('core.item'));

  beforeEach(inject(function(_$httpBackend_, _Item_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('data/items.json').respond(itemsData);

    Item = _Item_;
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the items data from `/items`', function() {
    var items = Item.query();

    expect(items).toEqual([]);

    $httpBackend.flush();
    expect(items).toEqual(itemsData);
  });

});
