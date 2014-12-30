/**
 * Created by Andy.Lv on 2014/11/3.
 */

(function (angular) {
	'use strict';

	var dependInject = [
//        'ngAnimate',
		'ui.router',
		'ui.bootstrap',
		'platform',
		'authentication',
		'ngWeb',
		'ngMessage',
		'angular-loading-bar'
	];
	//window.globePath= 'http://localhost:3000';

	var app = angular.module('app', dependInject);

	//app.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
	//	cfpLoadingBarProvider.includeSpinner = false;
	//}]);

	//app.config(['$provide', function ($provide) {
	//	$provide.decorator('$templateCache', ['$http', '$delegate', function ($http, $delegate) {
	//		$delegate.loadedTemplateUrl = function (url) {
	//			$http({
	//				url: url,
	//				method: 'GET'
	//			}).then(function (r) {
	//				_.forEach(r.data, function (k) {
	//					$delegate.put(k);
	//				});
	//			});
	//		};
	//	}]);
	//}]);

	//app.run(['$templateCache', '$http', '$compile', function ($templateCache, $http, $compile) {
	//	//$http({
	//	//    url: 'layout/layout-template',
	//	//    method: 'GET'
	//	//}).then(function (r) {
	//	//    $compile(r.data);
	//	//
	//	//    //_.forEach(r.data, function (k) {
	//	//    //    $templateCache.put(k);
	//	//    //});
	//	//});
	//	//
	//	//$templateCache.loadedTemplateUrl('/');
	//}]);


})(angular);

//angular.bootstrap(document, ['app']);
