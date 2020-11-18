webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/projectcard/index.tsx":
/*!******************************************!*\
  !*** ./components/projectcard/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/projectcard/styles.tsx");


var _jsxFileName = "C:\\Users\\rafae\\Google Drive\\UXArch\\mvp\\web\\components\\projectcard\\index.tsx",
    _this = undefined;




var ProjectCard = function ProjectCard(_ref) {
  var _id = _ref._id,
      thumbnail = _ref.thumbnail,
      title = _ref.title,
      score = _ref.score;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["SectionProject"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["SectionImage"], {
      src: thumbnail
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles__WEBPACK_IMPORTED_MODULE_2__["SectionDescription"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: score
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, _this)]
  }, _id, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, _this);
};

_c = ProjectCard;
/* harmony default export */ __webpack_exports__["default"] = (ProjectCard);

var _c;

$RefreshReg$(_c, "ProjectCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/projectcard/styles.tsx":
/*!*******************************************!*\
  !*** ./components/projectcard/styles.tsx ***!
  \*******************************************/
/*! exports provided: SectionProject, SectionImage, SectionDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionProject", function() { return SectionProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionImage", function() { return SectionImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionDescription", function() { return SectionDescription; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var SectionProject = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__SectionProject",
  componentId: "a8qewx-0"
})(["     width:200px;display:flex;flex-direction:column;align-items:center;justify-content:center;margin-right:15px;transition:0.5s;padding:15px;outline:none;cursor:pointer;&:hover{background:#ccc;}"]);
var SectionImage = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: "styles__SectionImage",
  componentId: "a8qewx-1"
})(["height:200px;object-fit:cover;width:100%;"]);
var SectionDescription = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styles__SectionDescription",
  componentId: "a8qewx-2"
})(["     width:100%;padding:5px 7.5px;display:flex;align-items:center;justify-content:space-between;"]);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/profile.tsx":
/*!***************************!*\
  !*** ./pages/profile.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mock_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mock/data */ "./mock/data.tsx");
/* harmony import */ var _styles_nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/nav */ "./styles/nav.tsx");
/* harmony import */ var _styles_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Page */ "./styles/Page.tsx");
/* harmony import */ var _styles_main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/main */ "./styles/main.tsx");
/* harmony import */ var _styles_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/button */ "./styles/button.tsx");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _styles_slider_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/slider-config */ "./styles/slider-config.tsx");
/* harmony import */ var _components_projectcard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/projectcard */ "./components/projectcard/index.tsx");



var _jsxFileName = "C:\\Users\\rafae\\Google Drive\\UXArch\\mvp\\web\\pages\\profile.tsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }













var Profile = function Profile() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_Page__WEBPACK_IMPORTED_MODULE_7__["Page"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_nav__WEBPACK_IMPORTED_MODULE_6__["Nav"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_nav__WEBPACK_IMPORTED_MODULE_6__["Logo"], {
        children: "Zumthor"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_nav__WEBPACK_IMPORTED_MODULE_6__["NavButton"], {
        children: "Sair"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_main__WEBPACK_IMPORTED_MODULE_8__["MainBody"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ProfileSection, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(SectionHeader, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(SectionTitle, {
            children: "Refer\xEAncias de Projeto"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(AddButton, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaPlus"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ProjectSlider, _objectSpread(_objectSpread({}, _styles_slider_config__WEBPACK_IMPORTED_MODULE_11__["sliderSettings"]), {}, {
          children: _mock_data__WEBPACK_IMPORTED_MODULE_5__["data"].map(function (room) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_projectcard__WEBPACK_IMPORTED_MODULE_12__["default"], {
              _id: room._id,
              score: room.score,
              thumbnail: room.thumbnail,
              title: room.title
            }, room._id, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 33
            }, _this);
          })
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 25
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(ProfileSection, {
        children: "oi"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, _this);
};

_c = Profile;
/* harmony default export */ __webpack_exports__["default"] = (Profile);
var ProfileSection = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].section.withConfig({
  displayName: "profile__ProfileSection",
  componentId: "ejr0rd-0"
})(["     min-height:30vh;width:100%;display:flex;align-items:center;flex-direction:column;margin:15px 0;"]);
_c2 = ProfileSection;
var SectionHeader = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "profile__SectionHeader",
  componentId: "ejr0rd-1"
})(["width:100%;padding:15px;display:flex;align-items:center;justify-content:space-between;"]);
_c3 = SectionHeader;
var SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h2.withConfig({
  displayName: "profile__SectionTitle",
  componentId: "ejr0rd-2"
})(["font-size:16px;"]);
_c4 = SectionTitle;
var AddButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(_styles_button__WEBPACK_IMPORTED_MODULE_9__["Button"]).withConfig({
  displayName: "profile__AddButton",
  componentId: "ejr0rd-3"
})(["height:45px;width:45px;"]);
_c5 = AddButton;
var ProjectSlider = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(react_slick__WEBPACK_IMPORTED_MODULE_4___default.a).withConfig({
  displayName: "profile__ProjectSlider",
  componentId: "ejr0rd-4"
})(["width:100%;"]);
_c6 = ProjectSlider;
var SectionBody = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "profile__SectionBody",
  componentId: "ejr0rd-5"
})(["     width:100%;padding:15px;display:flex;"]);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Profile");
$RefreshReg$(_c2, "ProfileSection");
$RefreshReg$(_c3, "SectionHeader");
$RefreshReg$(_c4, "SectionTitle");
$RefreshReg$(_c5, "AddButton");
$RefreshReg$(_c6, "ProjectSlider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9qZWN0Y2FyZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvamVjdGNhcmQvc3R5bGVzLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS50c3giXSwibmFtZXMiOlsiUHJvamVjdENhcmQiLCJfaWQiLCJ0aHVtYm5haWwiLCJ0aXRsZSIsInNjb3JlIiwiU2VjdGlvblByb2plY3QiLCJzdHlsZWQiLCJkaXYiLCJTZWN0aW9uSW1hZ2UiLCJpbWciLCJTZWN0aW9uRGVzY3JpcHRpb24iLCJQcm9maWxlIiwic2xpZGVyU2V0dGluZ3MiLCJkYXRhIiwibWFwIiwicm9vbSIsIlByb2ZpbGVTZWN0aW9uIiwic2VjdGlvbiIsIlNlY3Rpb25IZWFkZXIiLCJTZWN0aW9uVGl0bGUiLCJoMiIsIkFkZEJ1dHRvbiIsIkJ1dHRvbiIsIlByb2plY3RTbGlkZXIiLCJTbGlkZXIiLCJTZWN0aW9uQm9keSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFzQztBQUFBLE1BQW5DQyxHQUFtQyxRQUFuQ0EsR0FBbUM7QUFBQSxNQUE5QkMsU0FBOEIsUUFBOUJBLFNBQThCO0FBQUEsTUFBbkJDLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUN0RCxzQkFDSSxxRUFBQyxzREFBRDtBQUFBLDRCQUNJLHFFQUFDLG9EQUFEO0FBQWMsU0FBRyxFQUFFRjtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSSxxRUFBQywwREFBRDtBQUFBLDhCQUNJO0FBQUEsa0JBQUlDO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBQSxrQkFBSUM7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRko7QUFBQTtBQUFBO0FBQUE7QUFB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LENBQUNrQixrREFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLG1CQUFuQjtNQUFNRCxhO0FBR04sSUFBTUUsV0FBVyxHQUFHbkIseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxrREFBakIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS4wYjIyZjkxZmM5MjdhNGM0ZTVmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBTZWN0aW9uRGVzY3JpcHRpb24sIFNlY3Rpb25JbWFnZSwgU2VjdGlvblByb2plY3QgfSBmcm9tICcuL3N0eWxlcydcclxuXHJcbmNvbnN0IFByb2plY3RDYXJkID0gKHsgX2lkLCB0aHVtYm5haWwsIHRpdGxlLCBzY29yZSB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTZWN0aW9uUHJvamVjdCBrZXk9e19pZH0+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uSW1hZ2Ugc3JjPXt0aHVtYm5haWx9IC8+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8cD57dGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+e3Njb3JlfTwvcD5cclxuICAgICAgICAgICAgPC9TZWN0aW9uRGVzY3JpcHRpb24+XHJcbiAgICAgICAgPC9TZWN0aW9uUHJvamVjdD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENhcmRcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uUHJvamVjdCA9IHN0eWxlZC5kaXZgICAgIFxyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcblxyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuXHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2NjYztcclxuICAgIH1cclxuYFxyXG5leHBvcnQgY29uc3QgU2VjdGlvbkltYWdlID0gc3R5bGVkLmltZ2BcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uRGVzY3JpcHRpb24gPSBzdHlsZWQuZGl2YCAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNXB4IDcuNXB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5gIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJ1xyXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi4vbW9jay9kYXRhJ1xyXG5pbXBvcnQgeyBMb2dvLCBOYXYsIE5hdkJ1dHRvbiB9IGZyb20gJy4uL3N0eWxlcy9uYXYnXHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi9zdHlsZXMvUGFnZSdcclxuaW1wb3J0IHsgTWFpbkJvZHkgfSBmcm9tICcuLi9zdHlsZXMvbWFpbidcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vc3R5bGVzL2J1dHRvbidcclxuaW1wb3J0IHsgRmFQbHVzIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnXHJcbmltcG9ydCB7IHNsaWRlclNldHRpbmdzIH0gZnJvbSAnLi4vc3R5bGVzL3NsaWRlci1jb25maWcnXHJcbmltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL3Byb2plY3RjYXJkJ1xyXG5cclxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFBhZ2U+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxOYXY+XHJcbiAgICAgICAgICAgICAgICA8TG9nbz5cclxuICAgICAgICAgICAgICAgICAgICBadW10aG9yXHJcbiAgICAgICAgICAgICAgICA8L0xvZ28+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxOYXZCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgU2FpclxyXG4gICAgICAgICAgICAgICAgPC9OYXZCdXR0b24+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L05hdj5cclxuICAgICAgICAgICAgPE1haW5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgPFByb2ZpbGVTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VjdGlvblRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVmZXLDqm5jaWFzIGRlIFByb2pldG9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWN0aW9uVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBZGRCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFQbHVzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWRkQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2VjdGlvbkhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2plY3RTbGlkZXIgey4uLnNsaWRlclNldHRpbmdzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcChyb29tID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdENhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cm9vbS5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9pZD17cm9vbS5faWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlPXtyb29tLnNjb3JlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWw9e3Jvb20udGh1bWJuYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17cm9vbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Qcm9qZWN0U2xpZGVyPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvUHJvZmlsZVNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8UHJvZmlsZVNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgb2lcclxuICAgICAgICAgICAgICAgIDwvUHJvZmlsZVNlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvTWFpbkJvZHk+XHJcblxyXG4gICAgICAgIDwvUGFnZT5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVxyXG5cclxuY29uc3QgUHJvZmlsZVNlY3Rpb24gPSBzdHlsZWQuc2VjdGlvbmAgICAgXHJcbiAgICBtaW4taGVpZ2h0OiAzMHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDE1cHggMDsgICAgXHJcbmBcclxuY29uc3QgU2VjdGlvbkhlYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aDogMTAwJTsgICBcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmBcclxuY29uc3QgU2VjdGlvblRpdGxlID0gc3R5bGVkLmgyYFxyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG5gXHJcbmNvbnN0IEFkZEJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbmBcclxuY29uc3QgUHJvamVjdFNsaWRlciA9IHN0eWxlZChTbGlkZXIpYFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbmBcclxuY29uc3QgU2VjdGlvbkJvZHkgPSBzdHlsZWQuZGl2YCAgICBcclxuICAgIHdpZHRoOiAxMDAlOyAgICBcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5gIl0sInNvdXJjZVJvb3QiOiIifQ==