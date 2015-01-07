/**
 * Created by Andy.Lv on 2014/11/13.
 */
(function (angular) {
    'use strict';

    angular.module('ngWeb').controller('topicController', ['$scope', '$http', 'topicItemSource',
        function ($scope, $http, topicItemSource) {
            $scope.data = topicItemSource;

            $http.get('/topic/list').then(function (response) {
                if (response.status === 200) {
                    var t = $scope.data;

                    _.forEach(response.data, function (k) {
                        var updateItem = _.find($scope.data, function (i) {
                            return k.topic === i.topic;
                        });
                        updateItem.number = k.number;
                    });
                }
            });
        }]);

})(angular);