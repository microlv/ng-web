/**
 * Created by Andy.Lv on 2015/1/8.
 */

(function (angular) {
    'use strict';

    angular.module('ngWeb').controller('topicDetailController', ['$scope', '$http', 'topicItemSource',
        function ($scope, $http, topicItemSource) {
            $scope.data = topicItemSource;

            $http.get('/api/topic/grouptopic').then(function (response) {
                if (response.status === 200) {
                    var t = $scope.data;

                    _.forEach(response.data, function (k) {
                        var updateItem = _.find($scope.data, function (i) {
                            return k.topic === i._id;
                        });
                        updateItem.number = k.count;
                    });
                }
            });
        }]);

})(angular);