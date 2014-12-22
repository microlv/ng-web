/**
 * ngMessage 1.0.1 - andy.lv, message for angular
 * (C) 2014 - Andy.Lv
 * License: MIT
 * Source: https://github.com/lvjianyu/ngMessage/
 * Data: 2014-12
 */

(function (angular) {
	'use strict';

	if (typeof angular === 'undefined') {
		throw new Error('ngMessage\'s JavaScript requires angular');
	}

	angular.module('ngMessage.services', []).provider('ngMessage', [function () {
		function Message() {
			this._events = [];
		}

		Message.fn = Message.prototype;

		Message.fn.register = Message.fn.on = function (fn) {
			this._events.push(fn);
		};
		Message.fn.remove = Message.fn.on = function () {
			this._events = [];
		};
		Message.fn.trigger = Message.fn.fire = function (args, scope) {
			for (var i = 0; i < this._events.length; i++) {
				if (typeof this._events[i] === 'function') {
					this._events[i].call(scope, args);
				}
			}
		};

		this.$get = [function () {
			var ngMsg = {};

			return {
				/**
				 * create a new message instance
				 * @param name
				 * @returns {*}
				 */
				create: function (name) {
					ngMsg[name] = new Message();
					return ngMsg[name];
				},
				/**
				 * fire the message, will call all message which has register into the ngMessage service.
				 * @param name
				 * @param args
				 * @param scope
				 */
				trigger: function (name, args, scope) {
					var ng = ngMsg[name];
					if (ng) {
						ng.trigger(args, scope);
					}
				},
				/**
				 * use to register the message.
				 * @param name
				 * @param func
				 */
				register: function (name, func) {
					if (typeof func !== 'function') {
						return;
					}
					//if this name message is not exist, create a new one.
					var ng = ngMsg[name] || this.create(name);
					if (ng) {
						ng.register(func);
					}
				},
				/**
				 * if first argument is boolean, it will remove all message
				 * @param args
				 */
				remove: function (args) {
					if (typeof args === 'boolean') {
						ngMsg = {};
						return;
					}
					for (var i in ngMsg) {
						if (i === args) {
							delete ngMsg[i];
						}
					}
				},
				list: function (name) {
					if (!name) {
						return ngMsg;
					}
					return ngMsg[name] || {};
				}
			};
		}];
	}
	])
	;

	angular.module('ngMessage.directive', []).directive('ngMessage', ['ngMessage', function (ngMessage) {
		return {
			restrict: 'A',
			scope: {
				msgName: '@',
				msgType: '@'
			},
			link: function (scope, ele) {
				//if not assign eventType, default is click.
				var eventType = scope.msgType || 'click';

				//if the element not support event, if can't work.
				//interface same with jquery.
				ele.on(eventType, function (e, args) {
					ngMessage.trigger(scope.msgName, e, args);
				});
			}
		};
	}]);

	angular.module('ngMessage', ['ngMessage.services', 'ngMessage.directive']);

})
(angular);
