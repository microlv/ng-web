/**
 * Created by Andy.Lv on 2014/12/23.
 */

(function (angular) {
	'use strict';

	angular.module('ngWeb').directive('topicItem', [function () {
		var html =
			'<ul class="quick-actions">' +
			'   <li data-ng-class="item.liStyle" data-ng-repeat="item in itemSource">' +
			'      <a ui-sref="{{item.uiSref}}">' +
			'          <i data-ng-class="item.iStyle"></i>' +
			'          <span data-ng-show="item.number" class="label label-important">{{item.number}}</span>' +
			'           {{item.topic}}' +
			'      </a>' +
			'   </li>' +
			'</ul>';

		return {
			restrict: 'EA',
			template: html,
			scope: {
				itemSource: '='
			},
			link: function (scope, ele, att) {

			}
		};
	}]);

})(angular);