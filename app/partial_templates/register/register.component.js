'use strict';

angular.
  module('register').
  component('register', {
    templateUrl: 'partial_templates/register/register.template.html',
    controller: ['$q', '$timeout', '$filter', 'Notification', '$cookies','$window',
      function registerController($q, $timeout, $filter, Notification, $cookies, $window){
        var self = this;
        self.register = register;

        function register(){
          self.dataLoading = true;
          create(self.user)
            .then(function (response) {
              if (response.success){
                debugger;
                Notification.success('Votre Enregistrement a été effectué avec succés'+' Merci de nous rejoindre '+response.user.username )
                self.dataLoading = false;
              }else{
                Notification.error('L\'émail que vous utilisez existe déjà ')
                self.dataLoading = false;
              }
            });


        }
        function create(user) {
          var deferred = $q.defer();

          // simulate api call with $timeout
          $timeout(function () {
            GetByUsername(user.email)
              .then(function (duplicateUser) {
                if (duplicateUser !== null) {
                  deferred.resolve({ success: false, message: 'Email "' + user.email + '" is already taken' });
                } else {
                  var users = getUsers();


                  var lastUser = users[users.length - 1] || { id: 0 };
                  user.id = lastUser.id + 1;


                  users.push(user);

                  setUsers(users);

                  deferred.resolve({success: true, user: lastUser });
                }
              });
          }, 1000);

          return deferred.promise;
        }
        function getUsers() {
          if(!$cookies.get('users')){
            $cookies.put('users', JSON.stringify([]))
          }           
          return JSON.parse($cookies.get('users'));
        }
        function GetByUsername(email) {
          var deferred = $q.defer();
          var filtered = $filter('filter')(getUsers(), { email: email });
          var user = filtered.length ? filtered[0] : null;
          deferred.resolve(user);
          return deferred.promise;
        }
        function setUsers(users) {
          $cookies.put('users', JSON.stringify(users))
        }
           
      }
    ]
  });
