'use strict';

angular.
  module('core.ui-dialog').
  factory('uiDialog',['$mdDialog','$rootScope',
      function($mdDialog, $rootScope){
        return {
          showAlert : function($event) {
            var parentEl = angular.element(document.body);
            $mdDialog.show({
              parent: parentEl,
              targetEvent: $event,
              template:
                '<md-dialog aria-label="List dialog">' +
                '  <md-dialog-content>'+
                '  </md-dialog-content>' +
                '  <md-dialog-actions>' +
                '    <md-button ng-click="closeDialog()" class="md-primary">' +
                '      Close Dialog' +
                '    </md-button>' +
                '  </md-dialog-actions>' +
                '</md-dialog>',
              locals: {

              },
              controller: ['$scope', '$mdDialog', function($scope, $mdDialog) {
                $scope.hide = function() {
                  $mdDialog.hide();
                };

                $scope.cancel = function() {
                  $mdDialog.cancel();
                };

                $scope.answer = function(answer) {
                  $mdDialog.hide(answer);
                };
            }]
            });
          },

          showConfirm : function(ev, title, content, onConfirm, onCancel) {
            var confirm = $mdDialog.confirm()
                  .title(title)
                  .textContent(content)
                  .ariaLabel(title)
                  .targetEvent(ev)
                  .ok('OK')
                  .cancel('CANCEL');

            if( typeof onCancel != "function" ) onCancel = function() {};

            $mdDialog.show(confirm).then(onConfirm, onCancel);
          },
          DialogController : function ($scope, $mdDialog) {

          },
        };
      }
    ]);
