/**
 * Created by Andy.Lv on 2014/11/3.
 */

(function (angular) {
    'use strict';

    var dependInject = [
        'ngAnimate',
        'ui.router',
        'ui.bootstrap',
        'platform',
        'authentication',
        'ngWeb',
        'ngMessage',
        'angular-loading-bar',
        'textAngular'
    ];
    window.disqus_shortname = 'ng-web'; // required: replace example with your forum shortname
    window.disqus_identifier = '';
    //var disqus_title = 'a unique title for each page where Disqus is present';
    window.disqus_url = '';

    var app = angular.module('app', dependInject);

    app.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
        cfpLoadingBarProvider.includeSpinner = false;
    }]);

    //app.config(['$provide', function ($provide) {
    //    $provide.decorator('$templateCache', ['$http', '$delegate', '$injector', function ($http, $delegate, $injector) {
    //        $delegate.loadedTemplateUrl = function (url) {
    //            $http({
    //                url: url,
    //                method: 'GET'
    //            }).then(function (r) {
    //                $injector.get('$compile')(r.data);
    //            });
    //        };
    //        return $delegate;
    //    }]);
    //}]);
    //
    //app.run(['$templateCache', '$http', '$compile', function ($templateCache, $http, $compile) {
    //    $templateCache.loadedTemplateUrl('/template/ng-template.html');
    //}]);


})(angular);

//angular.bootstrap(document, ['app']);
