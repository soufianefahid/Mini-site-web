'use strict';

// Define the `register` module
angular.module('register', ['ui-notification', 'ngCookies','picardy.fontawesome', 'ngMaterial', 'angularMoment','ngMessages']).
  config(function(NotificationProvider) {
    NotificationProvider.setOptions({
      delay: 10000,
      startTop: 20,
      startRight: 10,
      verticalSpacing: 20,
      horizontalSpacing: 20,
      positionX: 'right',
      positionY: 'top'
  });
})// Cette directive a été déclaré ici pour avoir un niveau maximal de scalabilité
//Si on cherche a utiliser ce module dans une autre application alors on aura pas a redéfinir
//La directive
.directive("compareTo", function() {
  return {
    require: "ngModel",
    scope: {
      otherModelValue: "=compareTo"
    },
    link: function(scope, element, attributes, ngModel) {

      ngModel.$validators.compareTo = function(modelValue) {
        return modelValue == scope.otherModelValue;
      };

      scope.$watch("otherModelValue", function() {
        ngModel.$validate();
      });
    }
  };
})