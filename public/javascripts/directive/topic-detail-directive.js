/**
 * Created by Andy.Lv on 2015/1/14.
 */

(function (angular) {
    'use strict';

    angular.module('ngWeb').directive('topicDetail', ['$templateCache', function ($templateCache) {
        return {
            restrict: 'EA',
            scope: {},
            template: $templateCache.get('topic-detail-id.html'),
            link: function (scope, ele, att) {
                

            }
        };
    }]);

})(angular);
