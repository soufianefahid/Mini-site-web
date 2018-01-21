'use strict';


angular.
  module('itemList').
  component('itemList', {
    templateUrl: 'partial_templates/item-list/item-list.template.html',
    controller: ['Item','$http','$scope','uiDialog',
      function itemListController(Item, $http, $scope, uiDialog) {
        self = this;
        this.items = [];
        this.categories = []
        var query = Item.query();
        query.$promise.then(function(data) {
          self.items = data;
          for (var i=0; i< data.length; i++){
            if (self.categories.indexOf(self.items[i].category) == -1) {
              self.categories.push(self.items[i].category);
            }
          }
        });
        this.selectedCategory = null;
        this.orderProp = 'tag';
        $scope.showAdvanced = function($event) {
          uiDialog.showAlert($event);
        };

      }
    ]
  });
