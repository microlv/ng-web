/**
 * Created by Andy.Lv on 2015/1/14.
 */

(function (angular) {
    'use strict';

    angular.module('ngWeb').directive('articleItem', ['$templateCache', '$state', 'commonService', function ($templateCache, $state, commonService) {
        return {
            restrict: 'EA',
            scope: {
                item: '='
            },
            template: $templateCache.get('article-item.html'),
            link: function (scope, ele, att) {
                scope.item.href = $state.href('article', {id: scope.item._id});
                scope.item.formatUpdateAt = commonService.YYYYMMDD(scope.item.updateAt);
                scope.item.formatTransfer = scope.item.transfer ? '转载' : '原创';
            },
            controller: ['$scope', function ($scope) {
                $scope.articleEdit = function (item) {
                    $state.go('update-article', {id: item._id});
                };
            }]
        };
    }]);

})(angular);
