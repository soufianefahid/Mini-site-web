'use strict';


angular.
  module('itemList').
  component('itemList', {
    templateUrl: 'partial_templates/item-list/item-list.template.html',
    controller: ['Item','$http','$scope','$mdDialog',
      function itemListController(Item, $http, $scope, $mdDialog) {
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
        this.showAdvanced = function(ev, item) {
          $mdDialog.show({
            locals:{item: item},
            controller: Dialog,
            templateUrl: 'partial_templates/item-list/dialog1.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
          })
        };
        function Dialog($scope, $mdDialog, item) {
          $scope.item = item;
          $scope.hide = function() {
            $mdDialog.hide();
          };
        }

      }
    ]
  });
