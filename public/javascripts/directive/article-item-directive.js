/**
 * Created by Andy.Lv on 2015/1/14.
 */

(function (angular) {
    'use strict';

    angular.module('ngWeb').directive('articleItem', ['$templateCache', function ($templateCache) {
        return {
            restrict: 'EA',
            scope: {
                item: '='
            },
            template: $templateCache.get('article-item.html'),
            link: function (scope, ele, att) {
            }
        };
    }]);

})(angular);
