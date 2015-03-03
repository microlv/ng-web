/**
 * Created by Andy.Lv on 2015/1/8.
 */

(function (angular) {
  'use strict';

  angular.module('ngWeb').controller('topicCategoryController',
    ['$scope', '$http', '$state', function ($scope, $http, $state) {
      $http.get('/api/topics/' + $state.params.category).then(function (res) {
        if (res.status === 200) {
          $scope.itemSource = res.data;
        }
      });
    }]);

})(angular);