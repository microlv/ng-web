/**
 * Created by Andy.Lv on 2014/11/13.
 */

(function (angular) {
	'use strict';

	angular.module('ngWeb').value('topicItemSource', [
		{
			topic: 'News',
			liStyle: 'bg_lb',
			uiSref: 'topic.news',
			iStyle: 'icon-dashboard',
			spanStyle: 'label label-success'
		},
		{
			topic: 'Javascript',
			liStyle: 'bg_lg span3',
			uiSref: 'topic.javascript',
			iStyle: 'icon-signal',
			spanStyle: 'label label-success'
		},
		{
			topic: 'NodeJS',
			liStyle: 'bg_ly span2',
			uiSref: 'topic.nodejs',
			iStyle: 'icon-inbox',
			spanStyle: 'label label-success'
		},
		{
			topic: 'C#',
			liStyle: 'bg_lo span3',
			uiSref: 'topic.c#',
			iStyle: 'icon-th',
			spanStyle: 'label label-success'
		},
		{
			topic: 'MongoDB',
			liStyle: 'bg_ls',
			uiSref: 'topic.mongodb',
			iStyle: 'icon-fullscreen',
			spanStyle: 'label label-success'
		},
		{
			topic: 'SQL',
			liStyle: 'bg_lo',
			uiSref: 'topic.sql',
			iStyle: 'icon-th-list',
			spanStyle: 'label label-success'
		}]);

	angular.module('ngWeb').controller('mainframeController', ['$scope', 'topicItemSource',
		function ($scope, topicItemSource) {

			$scope.topicItemSource = topicItemSource;

		}]);
})(angular);