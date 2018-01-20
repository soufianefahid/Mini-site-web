'use strict';

// Define the `phoneDetail` module
angular.module('register', ['ui-notification', 'ngCookies']).
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
});
