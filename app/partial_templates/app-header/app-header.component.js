'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('appHeader').
  component('appHeader', {
    templateUrl: 'partial_templates/app-header/app-header.template.html',
    controller: ['$window','cookiesServices','$translate','LOCALES',
      function appHeaderController($window, cookiesServices, $translate, LOCALES){
        // Première récupération du cookies si ça n'existe pas alors le navigateu
        self = this;
        this.localesObj = LOCALES.locales;
        //récupération de la langue
        this.switchLang= function(selectedLang){
          var lang = getKeyByValue(this.localesObj, selectedLang);
          $translate.ChangeLanguage(lang);
        };

        function getKeyByValue(object, value) {
          return Object.keys(object).find(key => object[key] === value);
        }


      }
    ]
  });
