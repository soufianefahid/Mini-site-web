'use strict';


angular.
  module('itemList').
  component('itemList', {
    templateUrl: 'partial_templates/item-list/item-list.template.html',
    css: 'partial_templates/item-list/item-list.template.css',
    controller: ['cookiesServices','$rootScope','$mdDialog','$http','$translate',
      function itemListController( cookiesServices, $rootScope, $mdDialog, $http, $translate) {
        self = this;
        this.items = [];
        this.categories = [];

        //Cherchez la langue sur les cookies
        var lang = cookiesServices.getLang();
        //Cherchez les items
        getItems(lang);

        this.selectedCategory = null;
        // Pop-up manager
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
        function getItems(lang){
          $http.get('data/items/items.'+lang+'.json').then(function(response) {
            self.items = response.data;
            for (var i=0; i< self.items.length; i++){
              if (self.categories.indexOf(self.items[i].category) == -1) {
                self.categories.push(self.items[i].category);
              }
            }
          });
        }
        //Popup - controller
        function Dialog($scope, $mdDialog, item) {
          $scope.item = item;
          $scope.hide = function() {
            $mdDialog.hide();
          };
        }
        //Recharge data si on change la langue grâce a changeLanguage de ngTranslate
        $rootScope.$watch(function() { return cookiesServices.getLang(); }, function(newValue) {
          getItems(cookiesServices.getLang());
          console.log("language = "+cookiesServices.getLang());
          $translate.ChangeLanguage(cookiesServices.getLang());
        });

      }
    ]
  });
