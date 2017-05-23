'use strict';

angular.module('pharmawebApp')
  .directive('makeAppMenu', function() {
    return function(scope, element, attrs) {
      setTimeout(function() {
        $(".dropdown-button").dropdown();
        $(".button-collapse").sideNav({
          closeOnClick: true
        });
        $('.collapsible').collapsible({
          accordion: false
        });
        $('.tooltipped').tooltip({
          delay: 10
        });
      }, 500);
    };
  });
