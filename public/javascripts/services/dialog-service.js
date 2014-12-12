/**
 * Created by Andy.Lv on 2014/11/12.
 */

(function (angular, $) {
    'use strict';

    var platform = angular.module('platform');

    platform.run(['$templateCache', function ($templateCache) {
        var modalHtml = '<div>' +
            '    <div class="modal-header">' +
            '        <h3 class="modal-title">{{title}}</h3>' +
            '    </div>' +
            '    <div class="modal-body">' +
            '    </div>' +
            '    <div class="modal-footer">' +
            '        <button class="btn btn-primary" ng-click="ok()">OK</button>' +
            '        <button class="btn btn-warning" ng-click="cancel()">Cancel</button>' +
            '    </div>' +
            '</div>';

        $templateCache.put('dialogHtmlTemplate', modalHtml);
    }]);

    platform.factory('dialogService', ['$modal', '$templateCache', function ($modal, $templateCache) {
        return {
            show: function (options) {
                var defaultOptions = {
                    template: $templateCache.get('dialogHtmlTemplate')
                };
                $.merge(defaultOptions, options);
                var modalInstance = $modal.open(defaultOptions);

                return modalInstance;
            }
        };
    }]);
})
(angular, $);
