/**
 * Created by Andy.Lv on 2014/12/23.
 */

(function (angular) {
    'use strict';

    angular.module('ngWeb').directive('topicItem', ['$templateCache', 'topicItemSource', function ($templateCache, topicItemSource) {
        return {
            restrict: 'EA',
            template: $templateCache.get('topic-item.html'),
            link: function (scope, ele, att) {
                scope.itemSource = topicItemSource;
            }
        };
    }]);

})(angular);