/**
 * Created by Andy.Lv on 2014/11/13.
 */
(function (angular) {
    'use strict';

    angular.module('ngWeb', []).value('topicItemSource', [
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

})(angular);