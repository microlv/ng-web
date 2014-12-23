/**
 * Created by Andy.Lv on 2014/12/23.
 */

(function (angular) {
	'use strict';
	//
	//<li class="bg_lb">
	//<a ui-sref="index.news">
	//<i class="icon-dashboard"></i>
	//<span class="label label-important">20</span> News
	//</a>
	//</li>

	angular.module('ngWeb').directive('tabsItem', [function () {
		var data = [
			{
				liStyle: 'bg_lb',
				uiSref: 'index.News',
				iStyle: 'icon-dashboard',
				spanStyle: 'label label-success'
			},
			{
				liStyle: 'bg_lg span3',
				uiSref: 'index.Javascript',
				iStyle: 'icon-signal',
				spanStyle: 'label label-success'
			},
			{
				liStyle: 'bg_ly',
				uiSref: 'index.NodeJS',
				iStyle: 'icon-inbox',
				spanStyle: 'label label-success'
			},
			{
				liStyle: 'bg_lo',
				uiSref: 'index.C#',
				iStyle: 'icon-th',
				spanStyle: 'label label-success'
			},
			{
				liStyle: 'bg_ls',
				uiSref: 'index.MongoDB',
				iStyle: 'icon-fullscreen',
				spanStyle: 'label label-success'
			},
			{
				liStyle: 'bg_lo span3',
				uiSref: 'index.SQL',
				iStyle: 'icon-th-list',
				spanStyle: 'label label-success'
			}];
		var html =
			'<ul class="quick-actions">' +
			'   <li data-ng-class="liStyle">' +
			'      <a ui-sref="{{uiSref}}">' +
			'          <i data-ng-class="iStyle"></i>' +
			'          <span data-ng-show="" class="label label-important">20</span>' +
			'      </a>' +
			'   </li>' +
			'</ul>';

		return {
			restrict: 'EA',
			template: html,
			//scope:{}, I don't need it, because I don't want to create too much scope, this effect lower.
			link: function (scope, ele, att) {

			}
		};
	}]);

})(angular);