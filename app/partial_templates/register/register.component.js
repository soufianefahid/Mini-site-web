'use strict';

angular.
  module('register').
  component('register', {
    templateUrl: 'partial_templates/register/register.template.html',
    css: 'partial_templates/register/register.template.css',
    controller: ['$q', '$timeout', '$filter', 'Notification', '$cookies','$window','moment',
      function registerController($q, $timeout, $filter, Notification, $cookies, $window, moment){
        var self = this;
        self.register = register;
        self.myDate = new Date();
        this.minDate = new Date(
          this.myDate.getFullYear()-80,
          this.myDate.getMonth() ,
          this.myDate.getDate()
        );

        this.maxDate = new Date(
          this.myDate.getFullYear(),
          this.myDate.getMonth(),
          this.myDate.getDate()
        );

        function register(){
          self.dataLoading = true;
          create(self.user)
            .then(function (response) {
              if (response.success){
                Notification.success('Votre Enregistrement a été effectué avec succés' + ' Merci de nous rejoindre '+response.user.username )
                self.dataLoading = false;
              }else{
                Notification.error(response.message)
                self.dataLoading = false;
              }
            });


        }
        function create(user) {
          var deferred = $q.defer();
          if (user.birthday == undefined || user.birthday == null) deferred.resolve({ success: false, message: 'Entez votre date de naissance' });
          if (user.sexe == undefined || user.sexe == null) deferred.resolve({ success: false, message: 'Entez votre sexe' });
          if (user.password != user.passwordConfirm) deferred.resolve({ success: false, message: 'Confirmez votre mot de passe' });
          // simulate api call with $timeout
          $timeout(function () {
            GetByUsername(user.email)
              .then(function (duplicateUser) {
                if (duplicateUser !== null) {
                  deferred.resolve({ success: false, message: 'L\'email que vous utilisez existe déjà' });
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
