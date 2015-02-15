/**
 * Created by Andy.Lv on 2015/2/15.
 */

(function (angular) {
    'use strict';

    angular.module('platform').factory('commonService', [function () {

        //this code come from utility, because I only need some code, so I don't inject all file.
        function YYYYMMDD(str) {

            var d = new Date(str),
                date = d.getDate(),
                sep = '-';
            if (date < 10) {
                date = '0' + date;
            }
            var month = d.getMonth() + 1;
            if (month < 10) {
                month = '0' + month;
            }
            return d.getFullYear() + sep + month + sep + date;
        }

        return {
            YYYYMMDD: YYYYMMDD
        };
    }]);
})(angular);
