/**
 * Created by Andy.Lv on 2015/2/3.
 */

(function (angular) {
    'use strict';

    angular.module('ngWeb').controller('articleController', ['$scope', '$http', '$state', '$location',
        function ($scope, $http, $state, $location) {

            $http.get('/api/article/' + $state.params.id).then(function (res) {
                if (res.status === 200 && res.data) {
                    $('#articleContent').append(res.data.content);
                    var id = $state.params.id;

                    /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
                    window.disqus_identifier = id;
                    //var disqus_title = 'a unique title for each page where Disqus is present';
                    window.disqus_url = $location.absUrl();

                    /* * * DON'T EDIT BELOW THIS LINE * * */
                    (function () {
                        var dsq = document.createElement('script');
                        dsq.type = 'text/javascript';
                        dsq.async = true;
                        dsq.src = '//' + window.disqus_shortname + '.disqus.com/embed.js';
                        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
                    })();
                }
            });
        }]);

})(angular);