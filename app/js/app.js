(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _Shipping = require('./Shipping.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function Main() {
  _classCallCheck(this, Main);

  var inputElement = document.getElementById('check7dr');
  var message = document.getElementById('message');
  inputElement.addEventListener('keyup', function (e) {
    if (_Shipping.Shipping.checkdigit7DR(inputElement.value)) {
      message.innerHTML = 'OK';
    } else {
      message.innerHTML = 'NG';
    }
  });
};

new Main();

},{"./Shipping.js":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shipping = exports.Shipping = function () {
	function Shipping() {
		_classCallCheck(this, Shipping);
	}

	_createClass(Shipping, null, [{
		key: "checkdigit7DR",
		value: function checkdigit7DR(no12) {
			var no11 = String(no12).substr(0, 11);
			var calcNo12 = String(no11) + String(no11 % 7);
			console.log(no12);
			console.log(calcNo12);
			if (calcNo12 == no12) {
				return true;
			} else {
				return false;
			}
		}
	}, {
		key: "checkdigitYamato",
		value: function checkdigitYamato(no) {
			return this.checkdigit7DR(no);
		}
	}, {
		key: "checkdigitSagawa",
		value: function checkdigitSagawa(no) {
			return this.checkdigit7DR(no);
		}
	}, {
		key: "checkdigitYubin",
		value: function checkdigitYubin(no) {
			return this.checkdigit7DR(no);
		}
	}]);

	return Shipping;
}();

},{}]},{},[1]);
