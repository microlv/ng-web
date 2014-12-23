/**
 * Created by Andy.Lv on 2014/11/13.
 */
(function (angular) {
	'use strict';

	angular.module('ngWeb').controller('topicController', ['$scope', '$http', function ($scope, $http) {
		$scope.data = [
			{
				topic: 'News',
				liStyle: 'bg_lb',
				uiSref: 'index.News',
				iStyle: 'icon-dashboard',
				spanStyle: 'label label-success'
			},
			{
				topic: 'Javascript',
				liStyle: 'bg_lg span3',
				uiSref: 'index.Javascript',
				iStyle: 'icon-signal',
				spanStyle: 'label label-success'
			},
			{
				topic: 'NodeJS',
				liStyle: 'bg_ly span2',
				uiSref: 'index.NodeJS',
				iStyle: 'icon-inbox',
				spanStyle: 'label label-success'
			},
			{
				topic: 'C#',
				liStyle: 'bg_lo span3',
				uiSref: 'index.C#',
				iStyle: 'icon-th',
				spanStyle: 'label label-success'
			},
			{
				topic: 'MongoDB',
				liStyle: 'bg_ls',
				uiSref: 'index.MongoDB',
				iStyle: 'icon-fullscreen',
				spanStyle: 'label label-success'
			},
			{
				topic: 'SQL',
				liStyle: 'bg_lo',
				uiSref: 'index.SQL',
				iStyle: 'icon-th-list',
				spanStyle: 'label label-success'
			}];

		$http.get('/topic/updatelist').then(function (response) {
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