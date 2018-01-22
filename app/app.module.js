'use strict';

var adictiz = angular.module('adictiz', [
  'ngRoute',
  'ngCookies',
  'picardy.fontawesome',
  'ngTranslate',
  'tmh.dynamicLocale',

  'core',

  'appHeader',
  'aboutMe',
  'register',
  'itemList',

  'pagePrincipale'
]).constant('LOCALES', {
  'locales': {
      'fr': 'Français',
      'en_US': 'English'
  }
})

adictiz.run(function($translate, cookiesServices, $window) {
  //Premièrement on cherche la langue sur les cookies si cette information n'existe pas
  // On cherche la langue du navigateur et on la stoque sur les cookies
  var lang = cookiesServices.getLang();
  if (lang == "")
    lang = $window.navigator.language || $window.navigator.userLanguage;
    // premièrement il faut mettre à jour les cookies pour qu'il souvegarde la langue
    cookiesServices.setLang(lang)

  $translate.Config({
    default :lang,
    languages :[
      'en_US',
      'fr'
    ]
  });
});