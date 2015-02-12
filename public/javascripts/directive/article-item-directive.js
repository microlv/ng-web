/**
 * Created by Andy.Lv on 2015/1/14.
 */

(function (angular) {
    'use strict';

    angular.module('ngWeb').directive('articleItem', ['$templateCache', '$state', function ($templateCache, $state) {
        return {
            restrict: 'EA',
            scope: {
                item: '='
            },
            template: $templateCache.get('article-item.html'),
            link: function (scope, ele, att) {
                scope.item.href = $state.href('article', {id: scope.item._id});
            },
            controller: ['$scope', function ($scope) {
                $scope.articleEdit = function (item) {
                    $state.go('edit-article', {id: item._id});
                };
            }]
        };
    }]);

})(angular);
