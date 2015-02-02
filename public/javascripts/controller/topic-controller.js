/**
 * Created by Andy.Lv on 2014/11/13.
 */
(function (angular) {
    'use strict';

    /**
     * index will use this controller
     */
    angular.module('ngWeb').controller('topicController', ['$scope', '$http', 'topicItemSource',
        function ($scope, $http, topicItemSource) {
            $scope.data = topicItemSource;
            $http.get('/api/topics/grouptopics').then(function (response) {
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