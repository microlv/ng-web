# ngMessage Beta.v.1
```
1.powerful message! you can use it like q/async/promise!
2.message for angular, different with $scope.$emit/$broadcast
3.use single service(like message center) to register and send.
3.currently support promise and mulit message.
4.more demo can see app.js and index.html
```
## Download

Check out [https://github.com/microlv/ngMessage.git]

Wiki: http://microlv.github.io/ngMessage (working it)

## Features
```
message center base on angularjs.
1.use the message to inform other controller
2.support service and factory(these don't contain $rootScope and $scope)
3.support promise and then
```

## Support

Currently only test in Chrome, require angularjs

## Installation & usage

In browsers:
```html
    <script src="ngMessage.js"></script>
```

Bower install[`bower`](http://bower.io/):
```
    bower install ng-message -S
```
Using:

1.Base use(via javascript code)
```js
    1.first inject ngMessage
    var app = angular.module('app', ['ngMessage']);

    app.controller('controller1', ['ngMessage', '$scope', function (ngMsg, $scope) {

        2.second register the message, message name is single.
        ngMsg.register('demo.1', function (k) {
            console.log('demo.1 response');
        });

        ngMsg.on('demo.2', function (k) {
            console.log('demo.2 response');
        });
    }]);

    app.controller('controller2', ['ngMessage', '$scope', function (ngMsg, $scope) {
        $scope.click = function () {
            3.fire the message
            ngMsg.trigger('demo.1', [{a: 1}, {a: 2}]);
        };

        $scope.remove = function () {
            ngMsg.remove('demo.1');
            $scope.click();
        };

        //console.log(ngMsg.list());
    }]);
```

2.Via element
must use ng-message attr and msg-name for register a unique message
```js
    <a href="" data-ng-message data-msg-name="demoFactoryOnMessage">fire factory message</a>
    
    //use controller to init function
    app.controller('controller3', ['demoFactory', function (demoFactory) {
        demoFactory.onMessage();
    }]);
```

in javascript code, you can use it like q/async/promise, and more powerful then the base angular $q
```js
    ngMsg.on('demoFactoryOnMessage', function (d) {
        console.log('factory task 1');
        d.resolve();
    }).then(function (d) {
        console.log('factory task 2');
        d.resolve();
    }).series([
        function (d) {
            console.log('series task 3');
            d.resolve();
        }, function (d) {
            console.log('series task 4');
            d.resolve();
        }
    ], function (d) {
        console.log('series task 5');
    }).then(function () {
        //why here don't work??
        //because task 5 don't resolve the it!!!
        console.log('I can\'t execute');
    });
```
3.Via directive:
```js
    <div data-ng-message data-msg-name="directive.1" style="background-color: #999">
        directive 1 click test
    </div>

    <div data-ng-message data-msg-name="directive.2" data-msg-type="dblclick" style="background-color: #999">
        directive 2 dblclick test
    </div>

    ngMsg.on('directive.1', function (k) {
        console.log('directive.1 response');
    });
    ngMsg.on('directive.2', function (k) {
        console.log('directive.2 response');
    });
```
## Open Api

1.register a message
```js
    Message.register;
    Message.on
    Message.bind
    Message.addLister
```
2.remove a message
```js
    Message.remove
    Message.off
    Message.unbind
    Message.removeLister
```
3.trigger a message
```js
    Message.trigger
    Message.fire
    Message.emit
```
4.show all message
```js
    Message.list
    Message.list(name)
```
5.promise
```js
    Message('').then
    Message('',function(){}).then
    Message('').series
    Message('').parallel

    Message('').then(function(){})
               .series([],function(){})
               .parallel([],function(){})
               .then(function(){})
```

## Author

Andy.lv@live.com;
Any problem contact with me.

## Contributors
