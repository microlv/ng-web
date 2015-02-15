/**
 * Created by Andy.Lv on 2015/2/2.
 */

(function (angular, validator) {
    'use strict';

    //JSHint W117
    angular.module('ngWeb').controller('editArticleController', ['$scope', '$http', 'topicItemSource', 'dialogService', '$state',
        function ($scope, $http, topicItemSource, dialogService, $state) {

            $scope.category = topicItemSource;
            $scope.transfer = [{name: '原创', value: false}, {name: '转载', value: true}];

            function init() {
                $scope.content = '';
                $scope.title = '';
                $scope.selectCategory = topicItemSource[0];
                $scope.selectTransfer = $scope.transfer[0];
            }

            function safePost(str) {
                //return validator.escape(validator.trim(str));
                return validator.trim(str);
            }

            $scope.submit = function () {
                var category = safePost($scope.selectCategory.uiSref);
                var transfer = safePost($scope.selectTransfer.value);
                var title = safePost($scope.title);
                var content = safePost($scope.content);

                if (!title || !content) {
                    return;
                }

                $http({
                    method: 'post',
                    url: '/api/saveArticle',
                    data: {
                        category: category,
                        title: title,
                        content: content,
                        transfer: transfer
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

            $scope.clear = function () {
                init();
            };

            if ($state.params && $state.params.id) {
                //如果参数存在，则为update!
                $http.get('/api/article/' + $state.params.id).then(function (res) {
                    if (res.status === 200 && res.data) {
                        $scope.content = res.data.content;
                        $scope.title = res.data.title;
                        $scope.selectCategory = _.find(topicItemSource, {uiSref: res.data.category});
                        $scope.selectTransfer = _.find($scope.transfer, {value: res.data.transfer});
                    }
                });
            } else {
                init();
            }
        }]);
})(angular, validator);