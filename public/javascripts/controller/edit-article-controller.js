/**
 * Created by Andy.Lv on 2015/2/2.
 */

(function (angular, validator) {
    'use strict';

    angular.module('ngWeb').controller('editArticleController', ['$scope', '$http', 'topicItemSource',
        function ($scope, $http, topicItemSource) {
            $scope.category = topicItemSource;
            $scope.content = '';
            $scope.title = '';

            function safePost(str) {
                //return validator.escape(validator.trim(str));
                return validator.trim(str);
            }

            $scope.submit = function () {
                var category = safePost($scope.selectCategory);
                var title = safePost($scope.title);
                var content = safePost($scope.content);

                if (!category || !title || !content) {
                    return;
                }

                $http({
                    method: 'post',
                    url: '/api/saveArticle',
                    data: {
                        category: category,
                        title: title,
                        content: content
                    }
                }).then(function (res) {
                    console.log('save finish');
                });
            };
        }]);

})(angular, validator);