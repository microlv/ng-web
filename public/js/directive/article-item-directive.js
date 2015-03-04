/**
 * Created by Andy.Lv on 2015/1/14.
 */

(function (angular) {
  'use strict';

  //this should code optimize! move template combine one file
  /*
   article detail item directive
   */
  angular.module('ngWeb').directive('articleItem',
    ['$templateCache', '$state', 'commonService', function ($templateCache, $state, commonService) {
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
        controller: ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {
          $scope.articleEdit = function (item) {
            $state.go('update-article', {id: item._id});
          };
          $scope.articleDelete = function (item) {
            $http({
              method: 'POST',
              url: '/api/deleteArticle',
              data: {_id: item._id}
            }).then(function (res) {
              if (res.status === 200 && res.data.result === 'OK') {
                item.removed = true;
              }
            });
          };
          $scope.item.showEditButton = $rootScope.systemUser.isAdmin;
        }]
      };
    }]);

})(angular);
