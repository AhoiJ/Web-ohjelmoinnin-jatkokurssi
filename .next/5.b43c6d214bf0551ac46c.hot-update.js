webpackHotUpdate(5,{

/***/ "./src/components/Countries.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_Table__ = __webpack_require__("./node_modules/@material-ui/core/Table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_TableBody__ = __webpack_require__("./node_modules/@material-ui/core/TableBody/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_TableBody___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_TableBody__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_TableCell__ = __webpack_require__("./node_modules/@material-ui/core/TableCell/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_TableCell___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_TableCell__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_TableHead__ = __webpack_require__("./node_modules/@material-ui/core/TableHead/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_TableHead___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_TableHead__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_TableRow__ = __webpack_require__("./node_modules/@material-ui/core/TableRow/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_TableRow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_TableRow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Paper__ = __webpack_require__("./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__countries__ = __webpack_require__("./src/countries.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Country__ = __webpack_require__("./src/components/Country.tsx");
var _jsxFileName = "/home/jere/with-typescript-app/src/components/Countries.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var Countries =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Countries, _React$Component);

  function Countries() {
    _classCallCheck(this, Countries);

    return _possibleConstructorReturn(this, (Countries.__proto__ || Object.getPrototypeOf(Countries)).apply(this, arguments));
  }

  _createClass(Countries, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Paper___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, "Countries"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Table___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_TableHead___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_TableRow___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_TableCell___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, "Name"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_TableCell___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, "Population"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_TableCell___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, "Percentage"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_TableCell___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, "Position"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_TableBody___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, __WEBPACK_IMPORTED_MODULE_7__countries__["a" /* default */].map(function (country) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__Country__["a" /* default */], {
          prop1: country,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        });
      }))));
    }
  }]);

  return Countries;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Countries);

/***/ }),

/***/ "./src/components/Country.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_TableRow__ = __webpack_require__("./node_modules/@material-ui/core/TableRow/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_TableRow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_TableRow__);
var _jsxFileName = "/home/jere/with-typescript-app/src/components/Country.tsx";



var Country = function Country(_ref) {
  var _ref$prop = _ref.prop1,
      prop1 = _ref$prop === void 0 ? {} : _ref$prop;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_TableRow___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, console.log('DEBUG: ', prop1), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TableCell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, prop1.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TableCell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, prop1.population), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TableCell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, prop1.percentage), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(TableCell, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, prop1.position));
};

/* harmony default export */ __webpack_exports__["a"] = (Country);

/***/ })

})
//# sourceMappingURL=5.b43c6d214bf0551ac46c.hot-update.js.map