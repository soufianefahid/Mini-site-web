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
  'phoneDetail',
  'phoneList',

  'pagePrincipale'
]).constant('LOCALES', {
  'locales': {
      'fr_FR': 'Français',
      'en_US': 'English'
  }
})

adictiz.run(function($translate,cookiesServices) {
  var lang = cookiesServices.getLang();
  if (lang == "")
    lang = $window.navigator.language || $window.navigator.userLanguage;
    // premièrement il faut mettre à jour les cookies pour qu'il souvegarde la langue
    cookiesServices.setLang(lang)

  $translate.Config({
    default :lang,
    languages :[
      'en_US'
    ]
  });
});