'use strict';

/**
 * @ngdoc directive
 * @name arquitecturaApp.directive:directives
 * @description
 * # directives
 */
angular.module('arquitecturaApp')
  .directive('directives', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the directives directive');
      }
    };
  });
