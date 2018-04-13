(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.i18nextPolyglot = factory());
}(this, (function () { 'use strict';

var arr = [];
var each = arr.forEach;
var slice = arr.slice;

function defaults(obj) {
  each.call(slice.call(arguments, 1), function (source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === undefined) obj[prop] = source[prop];
      }
    }
  });
  return obj;
}

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Polyglot = require('node-polyglot');

function getDefaults() {
  return {};
}

var PolyglotFormat = function () {
  function PolyglotFormat(options) {
    _classCallCheck(this, PolyglotFormat);

    this.type = 'i18nFormat';

    this.init(null, options);
  }

  _createClass(PolyglotFormat, [{
    key: 'init',
    value: function init(i18next, options) {
      var i18nextOptions = i18next && i18next.options && i18next.options.i18nFormat || {};
      this.options = defaults(i18nextOptions, options, this.options || {}, getDefaults());

      // expose
      if (i18next) i18next.Polyglot = Polyglot;
    }
  }, {
    key: 'parse',
    value: function parse(res, options, lng, ns, key) {
      return Polyglot.transformPhrase(res, options, lng);
    }
  }, {
    key: 'addLookupKeys',
    value: function addLookupKeys(finalKeys, key, code, ns, options) {
      // no additional keys needed for select or plural
      // so there is no need to add keys to that finalKeys array
      return finalKeys;
    }
  }]);

  return PolyglotFormat;
}();

PolyglotFormat.type = 'i18nFormat';

return PolyglotFormat;

})));
