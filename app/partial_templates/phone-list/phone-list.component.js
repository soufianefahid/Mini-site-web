'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'partial_templates/phone-list/phone-list.template.html',
    controller: ['Phone','$mdDialog','$scope','uiDialog',
      function PhoneListController(Phone, $mdDialog, $scope, uiDialog) {
        self = this;
        this.phones = Phone.query();
        this.selectedCategory = null;
        this.orderProp = 'age';
        $scope.showAdvanced = function($event) {
          uiDialog.showAlert($event);
        };
        this.categories = [
          "nature", "exposition", "art"
        ];
      }
    ]
  });
