/**
 * Created by Andy.Lv on 2014/11/13.
 */
(function (angular) {
    'use strict';

    angular.module('ngWeb', []).run(['$templateCache', function ($templateCache) {

        var layoutHeaderHtml =
            '<div style="height: 87px">' +
            '   <div id="user-nav" class="navbar navbar-inverse">' +
            '       <ul class="nav">' +
            '           <li>' +
            '               <a href>' +
            '                   <i class="icon icon-user"></i>' +
            '                   <span class="text">welcome</span>' +
            '               </a>' +
            '           </li>' +
            '           <li>' +
            '               <a href ng-click="login()">' +
            '                   <i class="icon icon-key"></i>' +
            '                   <span class="text">Login</span>' +
            '               </a>' +
            '           </li>' +
            '       </ul>' +
            '   </div>' +
            '</div>';

        var layoutFooterHtml =
            '<div class="row-fluid">' +
            '   <div id="footer" class="span12"> 2014 &copy;Web design by ' +
            '       <a href="https://github.com/lvjianyu/" target="_blank">[Andy.lv]</a>' +
            '   </div>' +
            '</div>';

        var layoutSidebarHtml =
            '<div id="sidebar">' +
            '   <a class="visible-phone" href ui-sref="topic">' +
            '       <i class="icon icon-home"></i> Dashboard' +
            '   </a>' +
            '   <ul>' +
            '      <li data-ng-repeat="item in itemSource">' +
            '          <a data-ui-sref="{{item.uiSref}}">' +
            '              <i class="icon" data-ng-class="item.iStyle"></i>' +
            '              <span> {{item.topic}}</span>' +
            '          </a>' +
            '      </li>' +
            '   </ul>' +
            '</div>';

        var layoutContentHtml =
            '<div id="content">' +
            '   <div id="content-header">' +
            '       <div id="breadcrumb">' +
            '           <a ui-sref="index" title="Go to Home" class="tip-bottom">' +
            '           <i class="icon-home"></i>Home' +
            '           </a>' +
            '       </div>' +
            '   </div>' +
            '   <div ui-view></div>' +
            '</div>';

        var topicItemHtml =
            '<ul class="quick-actions">' +
            '   <li data-ng-class="item.liStyle" data-ng-repeat="item in itemSource">' +
            '      <a data-ui-sref="{{item.uiSref}}">' +
            '          <i data-ng-class="item.iStyle"></i>' +
            '          <span data-ng-show="item.number" class="label label-important">{{item.number}}</span>' +
            '           {{item.topic}}' +
            '      </a>' +
            '   </li>' +
            '</ul>';

        var layoutSearchHtml =
            '<div id="search">' +
            '   <a href data-ui-sref="about">' +
            '       <span class="text">About Me</span>' +
            '   </a>' +
            '</div>';

        var dialogModalHtml =
            '<div>' +
            '    <div class="modal-header">' +
            '        <h3 class="modal-title">{{title}}</h3>' +
            '    </div>' +
            '    <div class="modal-body">' +
            '       $$content$$' +
            '    </div>' +
            '    <div class="modal-footer">' +
            '        <button class="btn btn-primary" data-ng-click="ok()">OK</button>' +
            '        <button class="btn btn-warning" data-ng-click="cancel()">Cancel</button>' +
            '    </div>' +
            '</div>';

        //UI will change later!!!
        var loginTemplateHtml =

            '<div data-ng-controller="loginController">' +
            '    <div class="modal-header">' +
            '        <h3 class="modal-title">{{title}}</h3>' +
            '    </div>' +
            '    <div class="modal-body">' +

            '       <div id="#loginbox">' +
            '       <div id="#loginform">' +
            '       <div class="control-group">' +
            '       <div class="controls">' +
            '       <div class="main_input_box">' +
            '       <span class="add-on bg_lg"><i class="icon-user"></i></span>' +
            '       <input type="text" placeholder="Username" data-ng-model="username"/>' +
            '       </div>' +
            '       </div>' +
            '       </div>' +
            '       <div class="control-group">' +
            '       <div class="controls">' +
            '       <div class="main_input_box">' +
            '       <span class="add-on bg_ly"><i class="icon-lock"></i></span>' +
            '       <input type="password" placeholder="Password" data-ng-model="password"/>' +
            '       </div>' +
            '       </div>' +
            '       </div>' +
            '       </div>' +
            '       </div>' +

            '    </div>' +
            '    <div class="modal-footer">' +
            '        <button class="btn btn-primary" data-ng-click="ok()">OK</button>' +
            '        <button class="btn btn-warning" data-ng-click="cancel()">Cancel</button>' +
            '    </div>' +
            '</div>';


        $templateCache.put('layout-header.html', layoutHeaderHtml);
        $templateCache.put('layout-content.html', layoutContentHtml);
        $templateCache.put('layout-footer.html', layoutFooterHtml);
        $templateCache.put('layout-sidebar.html', layoutSidebarHtml);
        $templateCache.put('layout-search.html', layoutSearchHtml);
        $templateCache.put('topic-item.html', topicItemHtml);
        $templateCache.put('dialog-modal.html', dialogModalHtml);
        $templateCache.put('login-template.html', loginTemplateHtml);

    }]);

})(angular);