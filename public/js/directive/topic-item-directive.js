/**
 * Created by Andy.Lv on 2014/12/23.
 */

(function (angular) {
  'use strict';

  angular.module('ngWeb').directive('topicItems',
    ['$templateCache', 'topicItemSource', '$state', function ($templateCache, topicItemSource, $state) {
      return {
        restrict: 'EA',
        template: $templateCache.get('topic-items.html'),
        link: function (scope, ele, att) {
          _.forEach(topicItemSource, function (k) {
            k.href = $state.href('category', {category: k.uiSref});
          });
          scope.itemSource = topicItemSource;
        }
      };
    }]);

})(angular);