/**
 * Created by Andy.Lv on 2014/11/13.
 */
(function (angular) {
    'use strict';

    angular.module('ngWeb', [])
        .value('topicItemSource', [
            {
                topic: 'Javascript',
                liStyle: 'bg_lg span3',
                uiSref: 'javascript',
                iStyle: 'icon-leaf',
                spanStyle: 'label label-success'
            },
            {
                topic: 'Angularjs',
                liStyle: 'bg_lb span2',
                uiSref: 'angularjs',
                iStyle: 'icon-twitter',
                spanStyle: 'label label-success'
            },
            {
                topic: 'NodeJS',
                liStyle: 'bg_ly span2',
                uiSref: 'nodejs',
                iStyle: 'icon-beaker',
                spanStyle: 'label label-success'
            },
            {
                topic: 'C#',
                liStyle: 'bg_lo span3',
                uiSref: 'csharp',
                iStyle: 'icon-lemon',
                spanStyle: 'label label-success'
            },
            {
                topic: 'MongoDB',
                liStyle: 'bg_ls',
                uiSref: 'mongodb',
                iStyle: 'icon-cloud',
                spanStyle: 'label label-success'
            },
            {
                topic: 'SQL',
                liStyle: 'bg_lo',
                uiSref: 'sql',
                iStyle: 'icon-th-large',
                spanStyle: 'label label-success'
            }]);
        //.run(['$templateCache', function ($templateCache) {
        //
        //    var layoutHeaderHtml =
        //        '<div style="height: 81px">' +
        //        '   <div id="user-nav" class="navbar navbar-inverse">' +
        //        '       <ul class="nav">' +
        //        '           <li>' +
        //        '               <a href>' +
        //        '                   <i class="icon icon-user"></i>' +
        //        '                   <span class="text" data-ng-model="username"></span>' +
        //        '               </a>' +
        //        '           </li>' +
        //        '           <li>' +
        //        '               <a href ng-click="login()">' +
        //        '                   <i class="icon-github"></i>' +
        //        '                   <span class="text">Login</span>' +
        //        '               </a>' +
        //        '               <i class="icon-github">{{username}}</i>' +
        //        '           </li>' +
        //        '       </ul>' +
        //        '   </div>' +
        //        '</div>';
        //
        //    var layoutFooterHtml =
        //        '<div class="row-fluid">' +
        //        '   <div id="footer" class="span12"> ' +
        //        '       2014-2015 &copy;Web design by ' +
        //        '       <a href="https://github.com/microlv/" target="_blank">[microlv]</a>' +
        //        '       fork me on github:' +
        //        '       <a href="https://github.com/microlv/" target="_blank">[microlv]</a>' +
        //        '   </div>' +
        //        '</div>';
        //
        //    var layoutSidebarHtml =
        //        '<div id="sidebar">' +
        //        '   <a class="visible-phone" href ui-sref="topic">' +
        //        '       <i class="icon icon-home"></i> Dashboard' +
        //        '   </a>' +
        //        '   <ul>' +
        //        '      <li data-ng-repeat="item in layoutSidebarItemSource">' +
        //        '          <a data-ng-href="{{item.href}}">' +
        //        '              <i class="icon" data-ng-class="item.iStyle"></i>' +
        //        '              <span> {{item.topic}}</span>' +
        //        '          </a>' +
        //        '      </li>' +
        //        '   </ul>' +
        //        '</div>';
        //
        //    var layoutContentHtml =
        //        '<div id="content">' +
        //        '   <div id="content-header">' +
        //        '       <div id="breadcrumb">' +
        //        '           <a ui-sref="index" title="Go to Home" class="tip-bottom">' +
        //        '           <i class="icon-home"></i>Home' +
        //        '           </a>' +
        //        '       </div>' +
        //        '   </div>' +
        //        '   <div ui-view></div>' +
        //        '</div>';
        //
        //    var topicItemHtml =
        //        '<ul class="quick-actions">' +
        //        '   <li data-ng-class="item.liStyle" data-ng-repeat="item in itemSource">' +
        //        '      <a data-ng-href="{{item.href}}">' +
        //        '          <i data-ng-class="item.iStyle"></i>' +
        //        '          <span data-ng-show="item.number" class="label label-important">{{item.number}}</span>' +
        //        '           {{item.topic}}' +
        //        '      </a>' +
        //        '   </li>' +
        //        '</ul>';
        //
        //    var layoutSearchHtml =
        //        '<div id="search">' +
        //        '   <a href data-ui-sref="about">' +
        //        '       <span class="text">About Me</span>' +
        //        '   </a>' +
        //        '   <a href data-ng-show="isAdmin" data-ui-sref="edit-article">' +
        //        '       <span class="text">Post Article</span>' +
        //        '   </a>' +
        //        '</div>';
        //
        //    $templateCache.put('layout-header.html', layoutHeaderHtml);
        //    $templateCache.put('layout-content.html', layoutContentHtml);
        //    $templateCache.put('layout-footer.html', layoutFooterHtml);
        //    $templateCache.put('layout-sidebar.html', layoutSidebarHtml);
        //    $templateCache.put('layout-search.html', layoutSearchHtml);
        //    $templateCache.put('topic-items.html', topicItemHtml);
        //
        //}]);

})(angular);