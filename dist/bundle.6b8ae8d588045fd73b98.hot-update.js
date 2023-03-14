"use strict";
self["webpackHotUpdate"]("bundle",{

/***/ "./src/components/form.js":
/*!********************************!*\
  !*** ./src/components/form.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var core_js_modules_web_atob_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.atob.js */ "./node_modules/core-js/modules/web.atob.js");
/* harmony import */ var core_js_modules_web_atob_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_atob_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_exception_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-exception.constructor.js */ "./node_modules/core-js/modules/web.dom-exception.constructor.js");
/* harmony import */ var core_js_modules_web_dom_exception_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_exception_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-exception.stack.js */ "./node_modules/core-js/modules/web.dom-exception.stack.js");
/* harmony import */ var core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_exception_stack_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_exception_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-exception.to-string-tag.js */ "./node_modules/core-js/modules/web.dom-exception.to-string-tag.js");
/* harmony import */ var core_js_modules_web_dom_exception_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_exception_to_string_tag_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ "./node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_12__);







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }








var _config = {
  selector: 'form',
  title: 'Test',
  source: 'Test',
  link: location.href,
  requestURL: atob('aHR0cHM6Ly9za2lka2EtdHV0LmJ5L2FjdGlvbi9pbmRleC5waHA='),
  requestMethod: 'POST',
  resetFormAfterRequest: true,
  doneCallback: function doneCallback(response) {
    var _JSON$parse;

    if (response !== null && response !== void 0 && response.responseText && (_JSON$parse = JSON.parse(response.responseText)) !== null && _JSON$parse !== void 0 && _JSON$parse.text) {
      alert(JSON.parse(response.responseText).text);
      return true;
    }
  },
  errorMessage: 'There was a request error. Please contact your manager by phone!',
  repeatMessage: 'You have already sent your appeal, do I have to do it again?',
  testMode: true
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  _config = _objectSpread(_objectSpread({}, _config), config);
  var forms = document.querySelectorAll(_config.selector);
  Array.prototype.forEach.call(forms, function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      submitHandler(event.target);
    });
  });
});

var submitHandler = function submitHandler(form) {
  if (checkIsFormSubmitted()) return false;
  var data = getData(form);
  if (_config.resetFormAfterRequest) form.reset();
  sendData(data, function (response) {
    if (response.type === 'error') {
      alert(response.message);
    }
  });
  dispatchSendEvent();
};

var checkIsFormSubmitted = function checkIsFormSubmitted() {
  if (typeof sessionStorage !== 'undefined') {
    if (sessionStorage.getItem('formSubmitted')) {
      return !confirm(_config.repeatMessage);
    } else {
      sessionStorage.setItem('formSubmitted', 'true');
    }
  }

  return false;
};

var getData = function getData(form) {
  var _config2 = _config,
      title = _config2.title,
      source = _config2.source,
      link = _config2.link;
  var formData = new FormData(form);
  formData.append('source', source);
  formData.append('title', title);
  formData.append('link', link);
  return formData;
};

var sendData = function sendData(data) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (f) {
    return f;
  };
  var _config3 = _config,
      requestURL = _config3.requestURL,
      requestMethod = _config3.requestMethod;
  var request = new XMLHttpRequest();
  request.addEventListener("load", function (_ref) {
    var response = _ref.target;

    if (response.status === 200) {
      if (typeof _config.doneCallback === "function" && _config.doneCallback(response)) {
        return true;
      }

      return alert(response.responseText);
    }

    callback({
      type: 'error',
      message: _config.errorMessage
    });
  }, false);
  request.addEventListener("error", function onError() {
    callback({
      type: 'error',
      message: _config.errorMessage
    });
  }, false);
  request.open(requestMethod, requestURL);
  request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');

  if (_config.testMode) {
    var testing = {};
    data.forEach(function (value, key) {
      testing[key] = value;
    });
    console.log(testing);
  } else {
    request.send(data);
  }
};

var dispatchSendEvent = function dispatchSendEvent() {
  // Event dispatcher for IE9+ included
  if (typeof Event === 'function') {
    document.dispatchEvent(new Event('app.form.send'));
  } else {
    var ev = document.createEvent('Event');
    ev.initEvent('app.form.send', false, false);
    document.dispatchEvent(ev);
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "82a44500b5f59f3a25fd"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=bundle.6b8ae8d588045fd73b98.hot-update.js.map