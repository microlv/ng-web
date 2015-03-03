/**
 * Created by Andy.Lv on 2015/2/3.
 */

(function (angular) {
  'use strict';

  angular.module('ngWeb').controller('articleController',
    ['$scope', '$http', '$state', 'commonService', function ($scope, $http, $state, commonService) {

      $http.get('/api/article/' + $state.params.id).then(function (res) {
        if (res.status === 200 && res.data) {
          $scope.item = res.data;
          $scope.item.formatUpdateAt = commonService.YYYYMMDD($scope.item.updateAt);
          angular.element('#articleContent').append(res.data.content);
        }
      });
    }]);

})(angular);