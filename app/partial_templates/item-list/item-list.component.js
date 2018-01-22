'use strict';


angular.
  module('itemList').
  component('itemList', {
    templateUrl: 'partial_templates/item-list/item-list.template.html',
    css: 'partial_templates/item-list/item-list.template.css',
    controller: ['cookiesServices','$scope','$mdDialog','$http',
      function itemListController( cookiesServices, $scope, $mdDialog, $http) {
        self = this;
        this.items = [];
        this.categories = [];

        //Getting Data Language
        var lang = cookiesServices.getLang();
        var response =$http.get('data/items/items.'+lang+'.json').then(function(response) {
          self.items = response.data;
          for (var i=0; i< self.items.length; i++){
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
            templateUrl: 'partial_templates/layouts/item-detail.template.html',
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
