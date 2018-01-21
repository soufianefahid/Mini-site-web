'use strict';

angular.
  module('core.item').
  factory('Item', ['$resource',
    function($resource) {
      return $resource('data/items/items.json', {}, {
        query: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);
