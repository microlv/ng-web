/**
 * Created by Andy.Lv on 2015/1/8.
 */

(function (angular) {
    'use strict';

    angular.module('ngWeb').controller('topicCategoryController', ['$scope', 'platformHttpService',
        function ($scope, platformHttp) {
            //testing.
            platformHttp.getTopicDetail('javascript').then(function (res) {
                if (res.status === 200) {
                    $scope.itemSource = res.data;
                }
            });
        }]);

})(angular);