'use strict';

// Define the `Page principale` module
angular.module('pagePrincipale', ['ui-notification']).
  config(function(NotificationProvider) {
    NotificationProvider.setOptions({
      delay: 10000,
      startTop: 20,
      startRight: 10,
      verticalSpacing: 50,
      horizontalSpacing: 50,
      positionX: 'left',
      positionY: 'bottom'
  });
})// Cette directive a été déclaré ici pour avoir un niveau maximal de scalabilité
// Si cette directive est utilisée par plusieurs composants on peut créer un fichier
// app.directive.js et inscrire notre directive avec le main module de l'application
.directive('appTabs', ['$rootScope', function($rootScope) {

    var link = function(scope, element, attrs) {

      var activeHeader = element.find(".tabs-header-item.active");

      var updateTabs = function(activeHeader) {
        var activeTabID = activeHeader.attr("data-id");

        element.find(".tab-content").removeClass("active");

        element.find(".tab-content").each( function() {
          var tabID = $( this ).attr("data-id");
          if( tabID != activeTabID ) return;
          $( this ).addClass("active");
        } );
      };

      var moveIndicator = function(activeHeader, first = true) {
        var $indicator= element.find(".selected-tab-indicator");
        if (first)
          var indicatorLeft = activeHeader[0].offsetLeft + activeHeader.width() / 2 - $indicator.width() / 2 - 100;
        else
          var indicatorLeft = activeHeader[0].offsetLeft + activeHeader.width() / 2 - $indicator.width() / 2;
        $indicator.css("transform", "translate("+indicatorLeft+"px, 0) rotate(45deg)");
      };

      updateTabs( activeHeader );
      moveIndicator( activeHeader );

      element.find(".selected-tab-indicator").show();

      element.find(".tabs-header-item").on("click", function() {
        var $this = $(this);
        if( $this.hasClass("active") ) return;

        element.find(".tabs-header-item").removeClass("active");
        $this.addClass("active");

        updateTabs( $this );
        moveIndicator( $this, false );

        var tabID = $this.attr("data-id");

        $rootScope.$broadcast("dibari:refresh-ellipsis", null);
        $rootScope.$broadcast("app:tab-change", { tabID : tabID });
      });
    };

    return {
      restrict: 'A',
      link: link,
    };
  }]);
