'use strict';

angular.module('pharmawebApp')
  .directive('appTitleSearch', function () {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        showInput: '@',
        showLink: '@',
        sref: '@',
        minLength: '@',
        actionMethod: '&',
        term: '@'
      },
      templateUrl: 'scripts/directives/title-search/app_title_search.html',
      link: function (scope, element, attrs) {
        scope.param = {};
        scope.showInput = scope.$eval(attrs.showInput);
        scope.showLink = scope.$eval(attrs.showLink);

        if (scope.minLength) {
          scope.minLength = parseInt(scope.minLength);
        } else {
          scope.minLength = 3;
        }

        if (scope.term) {
          scope.param.q = scope.term;

        } else {
          scope.param.q = '';
        }

        scope.search = function () {
          if (scope.param.q.length >= scope.minLength) {
            scope.actionMethod({term: scope.param.q});
          }
        };


      }
    }
  });
