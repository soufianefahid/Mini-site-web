'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('appHeader').
  component('appHeader', {
    templateUrl: 'partial_templates/app-header/app-header.template.html',
    controller: ['$window','cookiesServices',
      function appHeaderController($window, cookiesServices){
        // Première récupération du cookies si ça n'existe pas alors le navigateur
        var lang = cookiesServices.getLang();
        if (lang == "")
          lang = $window.navigator.language || $window.navigator.userLanguage;
          // premièrement il faut mettre à jour les cookies pour qu'il souvegarde la langue
          cookiesServices.setLang(lang)
        //récupération de la langue



      }
    ]
  });
