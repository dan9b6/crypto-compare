webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Development_learn_crypto_compare_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Development_learn_crypto_compare_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Development_learn_crypto_compare_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Development_learn_crypto_compare_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Development_learn_crypto_compare_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var C_Development_learn_crypto_compare_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! groq */ "./node_modules/groq/lib/groq.js");
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @sanity/image-url */ "./node_modules/@sanity/image-url/lib/browser/image-url.umd.js");
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @sanity/block-content-to-react */ "./node_modules/@sanity/block-content-to-react/lib/BlockContent.js");
/* harmony import */ var _sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../client */ "./client.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);






var _jsxFileName = "C:\\Development\\learn\\crypto-compare\\web\\pages\\post\\[slug].js",
    _this = undefined,
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_Development_learn_crypto_compare_web_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["*[_type == \"post\" && slug.current == $slug][0]{\n  title,\n  \"name\": author->name,\n  \"categories\": categories[]->title,\n  \"authorImage\": author->image,\n  body,\n  currency,\n  amount,\n  \"cryptoName\": crypto->name,\n  \"cryptoImage\": crypto->image,\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Development_learn_crypto_compare_web_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// [slug].js




 //




function urlFor(source) {
  return _sanity_image_url__WEBPACK_IMPORTED_MODULE_6___default()(_client__WEBPACK_IMPORTED_MODULE_8__["default"]).image(source);
}

var Post = function Post(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])([]),
      coin = _useState[0],
      setCoins = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_11___default.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false").then(function (res) {
      setCoins(res.data); // console.log(res.data);
    })["catch"](function (error) {
      return console.log(error);
    });
  }, []);
  var amount = props.amount,
      _props$body = props.body,
      body = _props$body === void 0 ? [] : _props$body,
      cryptoName = props.cryptoName,
      cryptoImage = props.cryptoImage,
      currency = props.currency,
      _props$name = props.name,
      name = _props$name === void 0 ? "Missing name" : _props$name,
      _props$title = props.title,
      title = _props$title === void 0 ? "Missing title" : _props$title;
  var bitcoin = coin[0];
  console.log(bitcoin.id);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("article", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
      href: "/",
      children: "Click"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
      children: ["By ", name]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_sanity_block_content_to_react__WEBPACK_IMPORTED_MODULE_7___default.a, _objectSpread({
      blocks: body,
      imageOptions: {
        w: 320,
        h: 240,
        fit: "max"
      }
    }, _client__WEBPACK_IMPORTED_MODULE_8__["default"].config()), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      children: [cryptoImage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("img", {
          src: urlFor(cryptoImage).width(50).url()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
        children: cryptoName
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h1", {
        children: [currency, amount]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, _this);
};

_s(Post, "8D/L/h4p4/TyBGT37Gu1wiQQays=");

_c = Post;
var query = groq__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());

Post.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(C_Development_learn_crypto_compare_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Development_learn_crypto_compare_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var _context$query$slug, slug;

    return C_Development_learn_crypto_compare_web_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // It's important to default the slug so that it doesn't return "undefined"
            _context$query$slug = context.query.slug, slug = _context$query$slug === void 0 ? "" : _context$query$slug;
            _context.next = 3;
            return _client__WEBPACK_IMPORTED_MODULE_8__["default"].fetch(query, {
              slug: slug
            });

          case 3:
            return _context.abrupt("return", _context.sent);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanMiXSwibmFtZXMiOlsidXJsRm9yIiwic291cmNlIiwiaW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwiaW1hZ2UiLCJQb3N0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImNvaW4iLCJzZXRDb2lucyIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJhbW91bnQiLCJib2R5IiwiY3J5cHRvTmFtZSIsImNyeXB0b0ltYWdlIiwiY3VycmVuY3kiLCJuYW1lIiwidGl0bGUiLCJiaXRjb2luIiwiaWQiLCJ3IiwiaCIsImZpdCIsImNvbmZpZyIsIndpZHRoIiwidXJsIiwicXVlcnkiLCJncm9xIiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsInNsdWciLCJmZXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsQ0FBZ0JDLE1BQWhCLEVBQXdCO0FBQ3RCLFNBQU9DLHdEQUFlLENBQUNDLCtDQUFELENBQWYsQ0FBd0JDLEtBQXhCLENBQThCSCxNQUE5QixDQUFQO0FBQ0Q7O0FBRUQsSUFBTUksSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0dDLHVEQUFRLENBQUMsRUFBRCxDQURYO0FBQUEsTUFDZkMsSUFEZTtBQUFBLE1BQ1RDLFFBRFM7O0FBR3RCQywwREFBUyxDQUFDLFlBQU07QUFDZEMsaURBQUssQ0FDRkMsR0FESCxDQUVJLDBIQUZKLEVBSUdDLElBSkgsQ0FJUSxVQUFDQyxHQUFELEVBQVM7QUFDYkwsY0FBUSxDQUFDSyxHQUFHLENBQUNDLElBQUwsQ0FBUixDQURhLENBRWI7QUFDRCxLQVBILFdBUVMsVUFBQ0MsS0FBRDtBQUFBLGFBQVdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLENBQVg7QUFBQSxLQVJUO0FBU0QsR0FWUSxFQVVOLEVBVk0sQ0FBVDtBQUhzQixNQWlCcEJHLE1BakJvQixHQXdCbEJiLEtBeEJrQixDQWlCcEJhLE1BakJvQjtBQUFBLG9CQXdCbEJiLEtBeEJrQixDQWtCcEJjLElBbEJvQjtBQUFBLE1Ba0JwQkEsSUFsQm9CLDRCQWtCYixFQWxCYTtBQUFBLE1BbUJwQkMsVUFuQm9CLEdBd0JsQmYsS0F4QmtCLENBbUJwQmUsVUFuQm9CO0FBQUEsTUFvQnBCQyxXQXBCb0IsR0F3QmxCaEIsS0F4QmtCLENBb0JwQmdCLFdBcEJvQjtBQUFBLE1BcUJwQkMsUUFyQm9CLEdBd0JsQmpCLEtBeEJrQixDQXFCcEJpQixRQXJCb0I7QUFBQSxvQkF3QmxCakIsS0F4QmtCLENBc0JwQmtCLElBdEJvQjtBQUFBLE1Bc0JwQkEsSUF0Qm9CLDRCQXNCYixjQXRCYTtBQUFBLHFCQXdCbEJsQixLQXhCa0IsQ0F1QnBCbUIsS0F2Qm9CO0FBQUEsTUF1QnBCQSxLQXZCb0IsNkJBdUJaLGVBdkJZO0FBMEJ0QixNQUFJQyxPQUFPLEdBQUdsQixJQUFJLENBQUMsQ0FBRCxDQUFsQjtBQUNBUyxTQUFPLENBQUNDLEdBQVIsQ0FBWVEsT0FBTyxDQUFDQyxFQUFwQjtBQUVBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxVQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBQSxnQkFBS0Y7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRTtBQUFBLHdCQUFVRCxJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBSUUscUVBQUMscUVBQUQ7QUFDRSxZQUFNLEVBQUVKLElBRFY7QUFFRSxrQkFBWSxFQUFFO0FBQUVRLFNBQUMsRUFBRSxHQUFMO0FBQVVDLFNBQUMsRUFBRSxHQUFiO0FBQWtCQyxXQUFHLEVBQUU7QUFBdkI7QUFGaEIsT0FHTTNCLCtDQUFNLENBQUM0QixNQUFQLEVBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGLGVBU0U7QUFBQSxpQkFDR1QsV0FBVyxpQkFDVjtBQUFBLCtCQUNFO0FBQUssYUFBRyxFQUFFdEIsTUFBTSxDQUFDc0IsV0FBRCxDQUFOLENBQW9CVSxLQUFwQixDQUEwQixFQUExQixFQUE4QkMsR0FBOUI7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBTUU7QUFBQSxrQkFBS1o7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkYsZUFPRTtBQUFBLG1CQUNHRSxRQURILEVBRUdKLE1BRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQkQsQ0F2REQ7O0dBQU1kLEk7O0tBQUFBLEk7QUF5RE4sSUFBTTZCLEtBQUssR0FBR0MsMkNBQUgsbUJBQVg7O0FBWUE5QixJQUFJLENBQUMrQixlQUFMO0FBQUEsb1NBQXVCLGlCQUFnQkMsT0FBaEI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNyQjtBQURxQixrQ0FFQ0EsT0FBTyxDQUFDSCxLQUZULENBRWJJLElBRmEsRUFFYkEsSUFGYSxvQ0FFTixFQUZNO0FBQUE7QUFBQSxtQkFHUm5DLCtDQUFNLENBQUNvQyxLQUFQLENBQWFMLEtBQWIsRUFBb0I7QUFBRUksa0JBQUksRUFBSkE7QUFBRixhQUFwQixDQUhROztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBdkI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTWVqQyxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tzbHVnXS4xYWY3NWY2ZmE1MjRiYzkxMWU4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gW3NsdWddLmpzXHJcbmltcG9ydCBncm9xIGZyb20gXCJncm9xXCI7XHJcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSBcIkBzYW5pdHkvaW1hZ2UtdXJsXCI7XHJcbmltcG9ydCBCbG9ja0NvbnRlbnQgZnJvbSBcIkBzYW5pdHkvYmxvY2stY29udGVudC10by1yZWFjdFwiO1xyXG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi8uLi9jbGllbnRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG4vL1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcclxuICByZXR1cm4gaW1hZ2VVcmxCdWlsZGVyKGNsaWVudCkuaW1hZ2Uoc291cmNlKTtcclxufVxyXG5cclxuY29uc3QgUG9zdCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtjb2luLCBzZXRDb2luc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBheGlvc1xyXG4gICAgICAuZ2V0KFxyXG4gICAgICAgIFwiaHR0cHM6Ly9hcGkuY29pbmdlY2tvLmNvbS9hcGkvdjMvY29pbnMvbWFya2V0cz92c19jdXJyZW5jeT1nYnAmb3JkZXI9bWFya2V0X2NhcF9kZXNjJnBlcl9wYWdlPTEwMCZwYWdlPTEmc3BhcmtsaW5lPWZhbHNlXCJcclxuICAgICAgKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgc2V0Q29pbnMocmVzLmRhdGEpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIC8vIFBPU1QgUFJPUFNcclxuICAgIGFtb3VudCxcclxuICAgIGJvZHkgPSBbXSxcclxuICAgIGNyeXB0b05hbWUsXHJcbiAgICBjcnlwdG9JbWFnZSxcclxuICAgIGN1cnJlbmN5LFxyXG4gICAgbmFtZSA9IFwiTWlzc2luZyBuYW1lXCIsXHJcbiAgICB0aXRsZSA9IFwiTWlzc2luZyB0aXRsZVwiLFxyXG4gIH0gPSBwcm9wcztcclxuXHJcbiAgbGV0IGJpdGNvaW4gPSBjb2luWzBdO1xyXG4gIGNvbnNvbGUubG9nKGJpdGNvaW4uaWQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGFydGljbGU+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+Q2xpY2s8L0xpbms+XHJcbiAgICAgIDxoMT57dGl0bGV9PC9oMT5cclxuICAgICAgPHNwYW4+Qnkge25hbWV9PC9zcGFuPlxyXG4gICAgICA8QmxvY2tDb250ZW50XHJcbiAgICAgICAgYmxvY2tzPXtib2R5fVxyXG4gICAgICAgIGltYWdlT3B0aW9ucz17eyB3OiAzMjAsIGg6IDI0MCwgZml0OiBcIm1heFwiIH19XHJcbiAgICAgICAgey4uLmNsaWVudC5jb25maWcoKX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7Y3J5cHRvSW1hZ2UgJiYgKFxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3VybEZvcihjcnlwdG9JbWFnZSkud2lkdGgoNTApLnVybCgpfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8aDE+e2NyeXB0b05hbWV9PC9oMT5cclxuICAgICAgICA8aDE+XHJcbiAgICAgICAgICB7Y3VycmVuY3l9XHJcbiAgICAgICAgICB7YW1vdW50fVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgey8qIDxoMT57Y29pbi5zeW1ib2x9PC9oMT4gKi99XHJcbiAgICAgICAgey8qIDxoMT57Y29pbi5iaXRjb2luLmdicH08L2gxPiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2FydGljbGU+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17XHJcbiAgdGl0bGUsXHJcbiAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcclxuICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT50aXRsZSxcclxuICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2UsXHJcbiAgYm9keSxcclxuICBjdXJyZW5jeSxcclxuICBhbW91bnQsXHJcbiAgXCJjcnlwdG9OYW1lXCI6IGNyeXB0by0+bmFtZSxcclxuICBcImNyeXB0b0ltYWdlXCI6IGNyeXB0by0+aW1hZ2UsXHJcbn1gO1xyXG5cclxuUG9zdC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoY29udGV4dCkge1xyXG4gIC8vIEl0J3MgaW1wb3J0YW50IHRvIGRlZmF1bHQgdGhlIHNsdWcgc28gdGhhdCBpdCBkb2Vzbid0IHJldHVybiBcInVuZGVmaW5lZFwiXHJcbiAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY29udGV4dC5xdWVyeTtcclxuICByZXR1cm4gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5LCB7IHNsdWcgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9