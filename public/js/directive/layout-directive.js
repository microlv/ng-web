/**
 * Created by Andy.Lv on 2014/12/24.
 */

(function (angular) {
  'use strict';

  //use angular.module('ngWeb') because when uglify js, will exception.
  angular.module('ngWeb').directive('layoutHeader', ['$templateCache', function ($templateCache) {
    return {
      restrict: 'EA',
      template: $templateCache.get('layout-header.html')
    };
  }]).directive('layoutFooter', ['$templateCache', 'dialogService', function ($templateCache, dialogService) {
    return {
      restrict: 'EA',
      template: $templateCache.get('layout-footer.html'),
      controller: ['$scope', function ($scope) {
        $scope.login = function () {
          dialogService.show({
            template: 'login-template.html'
          });
        };
      }]
    };
  }]).directive('layoutSidebar',
    ['$templateCache', '$state', 'topicItemSource', function ($templateCache, $state, topicItemSource) {
      return {
        restrict: 'EA',
        template: $templateCache.get('layout-sidebar.html'),
        link: function (scope, ele, att) {
          _.forEach(topicItemSource, function (k) {
            k.href = $state.href('category', {category: k.uiSref});
          });
          scope.layoutSidebarItemSource = topicItemSource;
        }
      };
    }]).directive('layoutContent', ['$templateCache', function ($templateCache) {
      return {
        restrict: 'EA',
        template: $templateCache.get('layout-content.html'),
        controller: ['$rootScope', '$scope', function ($rootScope, $scope) {
          $rootScope.systemConfig = $rootScope.systemConfig || {};
          var sc = $rootScope.systemConfig;
          sc.articleStyle = 'list';//default value
          $scope.showList = true;

          $scope.changeArticleShowStyle = function (style) {
            switch (style) {
              case 'list':
                sc.articleStyle = 'list';
                break;
              case 'detail':
                sc.articleStyle = 'detail';
                break;
              default:
                break;
            }
            $scope.showList = sc.articleStyle === 'list';
          };
        }]
      };
    }]).directive('layoutSearch', ['$templateCache', function ($templateCache) {
      return {
        restrict: 'EA',
        template: $templateCache.get('layout-search.html')
      };
    }]);

})(angular);