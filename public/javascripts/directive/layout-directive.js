/**
 * Created by Andy.Lv on 2014/12/24.
 */

(function (angular) {
    'use strict';

    angular.module('ngWeb')
        .directive('layoutHeader', ['$templateCache', 'dialogService', function ($templateCache, dialogService) {
            return {
                restrict: 'EA',
                scope: {},
                template: $templateCache.get('layout-header.html'),
                controller: function ($scope) {
                    $scope.login = function () {
                        dialogService.show({
                            template: $templateCache.get('login-template.html')
                        });
                    };
                }
            };
        }])
        .directive('layoutFooter', ['$templateCache', function ($templateCache) {
            return {
                restrict: 'EA',
                template: $templateCache.get('layout-footer.html')
            };
        }])
        .directive('layoutSidebar', ['$templateCache', 'topicItemSource', function ($templateCache, topicItemSource) {
            return {
                restrict: 'EA',
                template: $templateCache.get('layout-sidebar.html'),
                link: function (scope, ele, att) {
                    scope.itemSource = topicItemSource;
                }
            };
        }])
        .directive('layoutContent', ['$templateCache', function ($templateCache) {
            return {
                restrict: 'EA',
                template: $templateCache.get('layout-content.html')
            };
        }])
        .directive('layoutSearch', ['$templateCache', function ($templateCache) {
            return {
                restrict: 'EA',
                template: $templateCache.get('layout-search.html')
            };
        }]);

})(angular);