/**
 * Created by Andy.Lv on 2015/1/8.
 */

(function (angular) {
    'use strict';

    angular.module('ngWeb').controller('topicDetailController', ['$scope', 'platformHttpService',
        function ($scope, platformHttp) {
            //testing.
            platformHttp.getTopicDetail('javascript').then(function (res) {
                $scope.itemSource = [];
            });
        }]);

})(angular);