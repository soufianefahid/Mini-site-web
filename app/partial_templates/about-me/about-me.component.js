'use strict';

angular.
  module('aboutMe').
  component('aboutMe', {
    css: 'partial_templates/about-me/about-me.template.css',
    templateUrl: 'partial_templates/about-me/about-me.template.html',
    controller: ['$cookies','$rootScope',
      function aboutMeController($cookies, $rootScope){
        var self = this;
        self.user = GetLastUser();

        function getUsers() {
          if(!$cookies.get('users')){
            $cookies.put('users', JSON.stringify([]))
          }           
          return JSON.parse($cookies.get('users'));
        }

        function GetLastUser() {
          var users = getUsers();
          var lastUser = users[users.length - 1] || { id: 0 };
          if (lastUser.id != 0) self.loadData = true;
          else self.loadData = false;
          return lastUser
        }
        $rootScope.$watch(function() { return $cookies.get('users'); }, function(newValue) {
          self.user = GetLastUser();
        });
           
      }
    ]
  });
