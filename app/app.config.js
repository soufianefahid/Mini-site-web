'use strict';

angular.
  module('adictiz').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<page-principale></page-principale>'
        }).
        otherwise('/');
    }
  ]);
