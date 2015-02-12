/**
 * Created by Andy.Lv on 2015/2/2.
 */

(function (angular, validator) {
    'use strict';

    angular.module('ngWeb').controller('editArticleController', ['$scope', '$http', 'topicItemSource', 'dialogService', '$state',
        function ($scope, $http, topicItemSource, dialogService, $state) {

            $scope.category = topicItemSource;

            function init() {
                $scope.content = '';
                $scope.title = '';
                $scope.selectCategory = topicItemSource[0];
            }

            function safePost(str) {
                //return validator.escape(validator.trim(str));
                return validator.trim(str);
            }

            $scope.submit = function () {
                var category = safePost($scope.selectCategory.uiSref);
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
                    if (res.status === 200 && res.data) {
                        init();
                        dialogService.show({
                            template: 'save-ok.html'
                        });
                    }
                });
            };

            if ($state.params && $state.params.id) {
                //如果参数存在，则为update!
                $http.get('/api/article/' + $state.params.id).then(function (res) {
                    if (res.status === 200) {
                        $scope.content = res.data[0].content;
                        $scope.title = res.data[0].title;
                        $scope.selectCategory = _.find(topicItemSource, {uiSref: res.data[0].category});
                    }
                });
            } else {
                init();
            }
        }]);
})(angular, validator);