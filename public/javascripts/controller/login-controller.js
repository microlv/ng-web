/**
 * Created by Andy.Lv on 2014/12/26.
 */

(function (angular) {
	'use strict';

	angular.module('ngWeb').controller('loginController', ['$scope', '$http',
		function ($scope, $http) {
			$scope.ok = function () {
				$http({
					method: 'POST',
					url: '/api/login',
					data: {
						username: $scope.username,
						password: $scope.password
					}
				}).then(function (response) {

				}, function () {

				});
			};
			$scope.cancel = function () {
			};
		}]);

})(angular);