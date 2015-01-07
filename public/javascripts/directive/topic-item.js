/**
 * Created by Andy.Lv on 2014/12/23.
 */

(function (angular) {
    'use strict';

    angular.module('ngWeb').directive('topicItem', ['$templateCache', function ($templateCache) {
        return {
            restrict: 'EA',
            template: $templateCache.get('topic-item.html'),
            scope: {
                itemSource: '='
            },
            link: function (scope, ele, att) {

            }
        };
    }]);

})(angular);