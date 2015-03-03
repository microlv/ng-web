/**
 * Created by Andy.Lv on 2015/1/14.
 */

(function (angular) {
  'use strict';

  angular.module('ngWeb').directive('topicCategory', ['$templateCache', function ($templateCache) {
    return {
      restrict: 'EA',
      scope: {
        itemSource: '='
      },
      template: $templateCache.get('topic-category.html'),
      link: function (scope, ele, att) {

      }
    };
  }]);

})(angular);
