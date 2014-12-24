/**
 * Created by Andy.Lv on 2014/12/24.
 */

(function (angular) {
	'use strict';

	angular.module('ngWeb')
		.directive('layoutHeader', ['$templateCache', function ($templateCache) {
			return {
				restrict: 'EA',
				template: $templateCache.get('layout-header.html')
			};
		}])
		.directive('layoutFooter', ['$templateCache', function ($templateCache) {
			return {
				restrict: 'EA',
				template: $templateCache.get('layout-footer.html')
			};
		}])
		.directive('layoutSidebar', ['$templateCache', function ($templateCache) {
			return {
				restrict: 'EA',
				template: $templateCache.get('layout-sidebar.html'),
				scope: {
					itemSource: '='
				},
				link: function (scope, ele, att) {
				}
			};
		}])
		.directive('layoutContent', ['$templateCache', function ($templateCache) {
			return {
				restrict: 'EA',
				template: $templateCache.get('layout-content.html')
			};
		}])
		.directive('layoutSearch', ['$templateCache', function ($templateCache) {
			return {
				restrict: 'EA',
				template: $templateCache.get('layout-search.html')
			};
		}]);

})(angular);