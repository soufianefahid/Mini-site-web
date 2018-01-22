'use strict';

angular.
  module('pagePrincipale').
  component('pagePrincipale', {
    templateUrl: 'pages/page-principale/page-principale.template.html',
    controller: ['Notification',
      function pagePrincipaleController(Notification){
        var self = this;
        Notification.info('Nous tenons à vous informer que nous utilisons les Cookies sur notre site')
           
      }
    ]
  });
