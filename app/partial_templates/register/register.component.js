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
        // Les dates a ne pas dépasser
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

        //Fonction du sign Up
        function register(){
          self.dataLoading = true;
          create(self.user)
            .then(function (response) {
              if (response.success){
                //Notification display
                Notification.success('Votre Enregistrement a été effectué avec succés' + ' Merci de nous rejoindre '+response.user.username )
                self.dataLoading = false;
              }else{
                //Notification display
                Notification.error(response.message)
                self.dataLoading = false;
              }
            });


        }
        function create(user) {
          var deferred = $q.defer();
          //Validation
          if (user.birthday == undefined || user.birthday == null) deferred.resolve({ success: false, message: 'Entez votre date de naissance' });
          if (user.sexe == undefined || user.sexe == null) deferred.resolve({ success: false, message: 'Entez votre sexe' });
          if (user.password != user.passwordConfirm) deferred.resolve({ success: false, message: 'Confirmez votre mot de passe' });
          // On simule le call de l'API avec $timeout
          $timeout(function () {
            //On cherche si cet email existe déjà chez l'un de nos utilisateurs enregistrés dans les
            //cookies
            GetByUsername(user.email)
              .then(function (duplicateUser) {
                if (duplicateUser !== null) {
                  deferred.resolve({ success: false, message: 'L\'email que vous utilisez existe déjà' });
                } else {
                  var users = getUsers();
                  var lastUser = users[users.length - 1] || { id: 0 };
                  user.id = lastUser.id + 1;

                  //On ajoute le dernier utilisateur dans la liste des users
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
