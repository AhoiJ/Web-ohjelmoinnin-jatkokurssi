module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_Home__ = __webpack_require__("./src/Home.tsx");

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__src_Home__["a" /* default */]);

/***/ }),

/***/ "./src/Home.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_components_Countries__ = __webpack_require__("./src/components/Countries.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_AppBar__ = __webpack_require__("@material-ui/core/AppBar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_AppBar__);
var _jsxFileName = "/home/jere/with-typescript-app/src/Home.tsx";







var Home = function Home() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_AppBar___default.a, {
    style: {
      backgroudColor: muiTheme.palette.primary1Color,
      flexWrap: 'wrap'
    },
    showMenuIconButton: true,
    title: __WEBPACK_IMPORTED_MODULE_5__material_ui_core_AppBar___default.a,
    titleStyle: muiTheme.title,
    iconClassNameRight: "muidocs-icon-navigation-expand-more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, "Hello worlds!!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "p", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_next_link___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "About"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button___default.a, {
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, "Test Material UI"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src_components_Countries__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),

/***/ "./src/components/Countries.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_Table__ = __webpack_require__("@material-ui/core/Table");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_Table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_Table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_TableBody__ = __webpack_require__("@material-ui/core/TableBody");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_TableBody___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_TableBody__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_TableCell__ = __webpack_require__("@material-ui/core/TableCell");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_TableCell___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_TableCell__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_TableHead__ = __webpack_require__("@material-ui/core/TableHead");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_TableHead___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_TableHead__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_TableRow__ = __webpack_require__("@material-ui/core/TableRow");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_TableRow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_TableRow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Paper__ = __webpack_require__("@material-ui/core/Paper");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_TableRow__ = __webpack_require__("@material-ui/core/TableRow");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_TableRow___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_TableRow__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_TableCell__ = __webpack_require__("@material-ui/core/TableCell");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_TableCell___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_TableCell__);
var _jsxFileName = "/home/jere/with-typescript-app/src/components/Country.tsx";




var Country = function Country(_ref) {
  var _ref$prop = _ref.prop1,
      prop1 = _ref$prop === void 0 ? {} : _ref$prop;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_TableRow___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, console.log('DEBUG: ', prop1), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_TableCell___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, prop1.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_TableCell___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, prop1.population), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_TableCell___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, prop1.percentage), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_TableCell___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, prop1.position));
};

/* harmony default export */ __webpack_exports__["a"] = (Country);

/***/ }),

/***/ "./src/countries.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var countries = [{
  "ID": "1067",
  "name": "China",
  "population": "1359821466",
  "percentage": "19,66%",
  "position": "1"
}, {
  "ID": "1068",
  "name": "India",
  "population": "1205624727",
  "percentage": "17,43%",
  "position": "2"
}, {
  "ID": "1069",
  "name": "United States of America",
  "population": "312237216",
  "percentage": "4,51%",
  "position": "3"
}, {
  "ID": "1070",
  "name": "Indonesia",
  "population": "240676485",
  "percentage": "3,48%",
  "position": "4"
}, {
  "ID": "1071",
  "name": "Brazil",
  "population": "195210154",
  "percentage": "2,82%",
  "position": "5"
}, {
  "ID": "1072",
  "name": "Pakistan",
  "population": "173113821",
  "percentage": "2,50%",
  "position": "6"
}, {
  "ID": "1073",
  "name": "Nigeria",
  "population": "159685249",
  "percentage": "2,31%",
  "position": "7"
}, {
  "ID": "1074",
  "name": "Bangladesh",
  "population": "151125475",
  "percentage": "2,19%",
  "position": "8"
}, {
  "ID": "1075",
  "name": "Russian Federation",
  "population": "143615916",
  "percentage": "2,08%",
  "position": "9"
}, {
  "ID": "1076",
  "name": "Japan",
  "population": "127352833",
  "percentage": "1,84%",
  "position": "10"
}, {
  "ID": "1077",
  "name": "Mexico",
  "population": "117886404",
  "percentage": "1,70%",
  "position": "11"
}, {
  "ID": "1078",
  "name": "Philippines",
  "population": "93444322",
  "percentage": "1,35%",
  "position": "12"
}, {
  "ID": "1079",
  "name": "Viet Nam",
  "population": "89047402",
  "percentage": "1,29%",
  "position": "13"
}, {
  "ID": "1080",
  "name": "Ethiopia",
  "population": "87095281",
  "percentage": "1,26%",
  "position": "14"
}, {
  "ID": "1081",
  "name": "Germany",
  "population": "83017404",
  "percentage": "1,20%",
  "position": "15"
}, {
  "ID": "1082",
  "name": "Egypt",
  "population": "78075705",
  "percentage": "1,13%",
  "position": "16"
}, {
  "ID": "1083",
  "name": "Iran (Islamic Republic of)",
  "population": "74462314",
  "percentage": "1,08%",
  "position": "17"
}, {
  "ID": "1084",
  "name": "Turkey",
  "population": "72137546",
  "percentage": "1,04%",
  "position": "18"
}, {
  "ID": "1085",
  "name": "Thailand",
  "population": "66400698",
  "percentage": "0,96%",
  "position": "19"
}, {
  "ID": "1086",
  "name": "France",
  "population": "63230866",
  "percentage": "0,91%",
  "position": "20"
}, {
  "ID": "1087",
  "name": "Democratic Republic of the Congo",
  "population": "62191161",
  "percentage": "0,90%",
  "position": "21"
}, {
  "ID": "1088",
  "name": "United Kingdom",
  "population": "62066350",
  "percentage": "0,90%",
  "position": "22"
}, {
  "ID": "1089",
  "name": "Italy",
  "population": "60508978",
  "percentage": "0,87%",
  "position": "23"
}, {
  "ID": "1090",
  "name": "Myanmar",
  "population": "51931231",
  "percentage": "0,75%",
  "position": "24"
}, {
  "ID": "1091",
  "name": "South Africa",
  "population": "51452352",
  "percentage": "0,74%",
  "position": "25"
}, {
  "ID": "1092",
  "name": "Republic of Korea",
  "population": "48453931",
  "percentage": "0,70%",
  "position": "26"
}, {
  "ID": "1093",
  "name": "Colombia",
  "population": "46444798",
  "percentage": "0,67%",
  "position": "27"
}, {
  "ID": "1094",
  "name": "Spain",
  "population": "46182038",
  "percentage": "0,67%",
  "position": "28"
}, {
  "ID": "1095",
  "name": "Ukraine",
  "population": "46044304",
  "percentage": "0,67%",
  "position": "29"
}, {
  "ID": "1096",
  "name": "United Republic of Tanzania",
  "population": "44973330",
  "percentage": "0,65%",
  "position": "30"
}];
/* harmony default export */ __webpack_exports__["a"] = (countries);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.tsx");


/***/ }),

/***/ "@material-ui/core/AppBar":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Grid":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Paper":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Table":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ "@material-ui/core/TableBody":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ "@material-ui/core/TableCell":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),

/***/ "@material-ui/core/TableHead":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),

/***/ "@material-ui/core/TableRow":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map