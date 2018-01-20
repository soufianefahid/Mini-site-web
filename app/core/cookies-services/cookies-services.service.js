'use strict';

angular.
  module('core.cookies-services').
  factory('cookiesServices',['$cookies',
      function($cookies){
        return {

          getUsers : function () {
            if(!$cookies.get('users')){
              $cookies.put('users', JSON.stringify(""))
            }           
            return JSON.parse($cookies.get('users'));
          },

          GetByUsername:function (email) {
            var deferred = $q.defer();
            var filtered = $filter('filter')(getUsers(), { email: email });
            var user = filtered.length ? filtered[0] : null;
            deferred.resolve(user);
            return deferred.promise;
          },

          setUsers: function (users) {
            $cookies.put('users', JSON.stringify(users))
          },

          getLang : function(){
            if(!$cookies.get('lang')){
              $cookies.put('lang', JSON.stringify([]))
            }           
            return JSON.parse($cookies.get('lang'));
          },

          setLang : function(lang){
            $cookies.put('lang', JSON.stringify(lang))
          }
        };
      }
    ]);
