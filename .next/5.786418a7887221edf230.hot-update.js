webpackHotUpdate(5,{

/***/ "./node_modules/@material-ui/core/AppBar/AppBar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _helpers = __webpack_require__("./node_modules/@material-ui/core/utils/helpers.js");

var _Paper = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Paper/index.js"));

// @inheritedComponent Paper
var styles = function styles(theme) {
  var backgroundColorDefault = theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[900];
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      boxSizing: 'border-box',
      // Prevent padding issue with the Modal and fixed positioned AppBar.
      zIndex: theme.zIndex.appBar,
      flexShrink: 0
    },

    /* Styles applied to the root element if `position="fixed"`. */
    positionFixed: {
      position: 'fixed',
      top: 0,
      left: 'auto',
      right: 0
    },

    /* Styles applied to the root element if `position="absolute"`. */
    positionAbsolute: {
      position: 'absolute',
      top: 0,
      left: 'auto',
      right: 0
    },

    /* Styles applied to the root element if `position="sticky"`. */
    positionSticky: {
      position: 'sticky',
      top: 0,
      left: 'auto',
      right: 0
    },

    /* Styles applied to the root element if `position="static"`. */
    positionStatic: {
      position: 'static'
    },

    /* Styles applied to the root element if `position="relative"`. */
    positionRelative: {
      position: 'relative'
    },

    /* Styles applied to the root element if `color="default"`. */
    colorDefault: {
      backgroundColor: backgroundColorDefault,
      color: theme.palette.getContrastText(backgroundColorDefault)
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    }
  };
};

exports.styles = styles;

function AppBar(props) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      color = props.color,
      position = props.position,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "color", "position"]);
  var className = (0, _classnames.default)(classes.root, classes["position".concat((0, _helpers.capitalize)(position))], (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes["color".concat((0, _helpers.capitalize)(color))], color !== 'inherit'), (0, _defineProperty2.default)(_classNames, 'mui-fixed', position === 'fixed'), _classNames), classNameProp);
  return _react.default.createElement(_Paper.default, (0, _extends2.default)({
    square: true,
    component: "header",
    elevation: 4,
    className: className
  }, other), children);
}

AppBar.propTypes =  true ? {
  /**
   * The content of the component.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes.default.oneOf(['inherit', 'primary', 'secondary', 'default']),

  /**
   * The positioning type. The behavior of the different options is described
   * [here](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning).
   * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
   */
  position: _propTypes.default.oneOf(['fixed', 'absolute', 'sticky', 'static', 'relative'])
} : {};
AppBar.defaultProps = {
  color: 'primary',
  position: 'fixed'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiAppBar'
})(AppBar);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/AppBar/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _AppBar.default;
  }
});

var _AppBar = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/AppBar/AppBar.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Paper/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Paper.default;
  }
});

var _Paper = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Paper/Paper.js"));

/***/ }),

/***/ "./src/Home.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_components_Countries__ = __webpack_require__("./src/components/Countries.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button__ = __webpack_require__("./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid__ = __webpack_require__("./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_AppBar__ = __webpack_require__("./node_modules/@material-ui/core/AppBar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_AppBar__);
var _jsxFileName = "/home/jere/with-typescript-app/src/Home.tsx";







var Home = function Home() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_AppBar___default.a, {
    style: {
      backgroudColor: MuiTheme.palette.primary1Color,
      flexWrap: 'wrap'
    },
    showMenuIconButton: true,
    title: __WEBPACK_IMPORTED_MODULE_5__material_ui_core_AppBar___default.a,
    titleStyle: MuiTheme.title,
    iconClassNameRight: "muidocs-icon-navigation-expand-more",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Hello worlds!!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "p", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_next_link___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "About"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button___default.a, {
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, "Test Material UI"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
    container: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src_components_Countries__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),

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

/***/ })

})
//# sourceMappingURL=5.786418a7887221edf230.hot-update.js.map