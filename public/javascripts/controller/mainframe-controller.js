/**
 * Created by Andy.Lv on 2014/11/13.
 */

(function (angular) {
    'use strict';

    angular.module('edu').controller('mainframeController', ['$scope', 'dialogService', function ($scope, dialogService) {

        $scope.login = function () {
            dialogService.show({

            });
        };
    }]);
})(angular);