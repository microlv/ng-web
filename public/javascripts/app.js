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

    app.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
    }]);

    app.config(['$provide', function ($provide) {
        $provide.decorator('$templateCache', ['$http', '$delegate', '$injector', function ($http, $delegate, $injector) {
            $delegate.loadedTemplateUrl = function (url) {
                $http({
                    url: url,
                    method: 'GET'
                }).then(function (r) {
                    $injector.get('$compile')(r.data);
                });
            };
            return $delegate;
        }]);
    }]);

    app.run(['$templateCache', '$http', '$compile', function ($templateCache, $http, $compile) {
        $templateCache.loadedTemplateUrl('/template/ng-template.html');
    }]);


})(angular);

//angular.bootstrap(document, ['app']);
