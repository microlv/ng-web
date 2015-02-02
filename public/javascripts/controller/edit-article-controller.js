/**
 * Created by Andy.Lv on 2015/2/2.
 */

(function (angular) {
    'use strict';

    angular.module('ngWeb').controller('editArticleController', ['$scope', '$http', 'topicItemSource',
        function ($scope, $http, topicItemSource) {
            $scope.category = topicItemSource;
            $scope.content = '';
            $scope.title = '';

            $scope.submit = function () {
                $http({
                    type: 'post',
                    url: '/api/saveArticle',
                    data: {
                        category: 'javascript',
                        title: $scope.title,
                        content: $scope.content
                    }
                }).then(function (res) {

                });
            };
        }]);

})(angular);