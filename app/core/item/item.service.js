'use strict';

angular.
  module('core.item').
  factory('Item',['$http',
    function($http){
      return {
        getData : function (lang) {
          var self = this;
          this.items = [];
          this.categories = [];
          this.dataResult= {};
          $http.get('data/items/items.fr.json').then(function(response) {
            self.items = response.data;
            for (var i=0; i< self.items.length; i++){
              if (self.categories.indexOf(self.items[i].category) == -1) {
                self.categories.push(self.items[i].category);
              }
            }
            self.dataResult = {
              "items": self.items,
              "categories": self.categories
            }
            debugger;
          });
          return self.dataResult;
        }
      };
    }
  ]);