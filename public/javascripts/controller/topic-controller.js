/**
 * Created by Andy.Lv on 2014/11/13.
 */
(function (angular) {
    'use strict';

    angular.module('ngWeb').value('topicItemSource', [
        {
            topic: 'Javascript',
            liStyle: 'bg_lg span3',
            uiSref: 'javascript',
            iStyle: 'icon-signal',
            spanStyle: 'label label-success'
        },
        {
            topic: 'Angularjs',
            liStyle: 'bg_lb',
            uiSref: 'angularjs',
            iStyle: 'icon-dashboard',
            spanStyle: 'label label-success'
        },
        {
            topic: 'NodeJS',
            liStyle: 'bg_ly span2',
            uiSref: 'nodejs',
            iStyle: 'icon-inbox',
            spanStyle: 'label label-success'
        },
        {
            topic: 'C#',
            liStyle: 'bg_lo span3',
            uiSref: 'csharp',
            iStyle: 'icon-th',
            spanStyle: 'label label-success'
        },
        {
            topic: 'MongoDB',
            liStyle: 'bg_ls',
            uiSref: 'mongodb',
            iStyle: 'icon-fullscreen',
            spanStyle: 'label label-success'
        },
        {
            topic: 'SQL',
            liStyle: 'bg_lo',
            uiSref: 'sql',
            iStyle: 'icon-th-list',
            spanStyle: 'label label-success'
        }]);

    angular.module('ngWeb').controller('topicController', ['$scope', '$http', 'topicItemSource',
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