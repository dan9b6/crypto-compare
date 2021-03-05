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
  console.log(bitcoin.current_price);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanMiXSwibmFtZXMiOlsidXJsRm9yIiwic291cmNlIiwiaW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwiaW1hZ2UiLCJQb3N0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImNvaW4iLCJzZXRDb2lucyIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJhbW91bnQiLCJib2R5IiwiY3J5cHRvTmFtZSIsImNyeXB0b0ltYWdlIiwiY3VycmVuY3kiLCJuYW1lIiwidGl0bGUiLCJiaXRjb2luIiwiY3VycmVudF9wcmljZSIsInciLCJoIiwiZml0IiwiY29uZmlnIiwid2lkdGgiLCJ1cmwiLCJxdWVyeSIsImdyb3EiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0Iiwic2x1ZyIsImZldGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsTUFBaEIsRUFBd0I7QUFDdEIsU0FBT0Msd0RBQWUsQ0FBQ0MsK0NBQUQsQ0FBZixDQUF3QkMsS0FBeEIsQ0FBOEJILE1BQTlCLENBQVA7QUFDRDs7QUFFRCxJQUFNSSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDR0MsdURBQVEsQ0FBQyxFQUFELENBRFg7QUFBQSxNQUNmQyxJQURlO0FBQUEsTUFDVEMsUUFEUzs7QUFHdEJDLDBEQUFTLENBQUMsWUFBTTtBQUNkQyxpREFBSyxDQUNGQyxHQURILENBRUksMEhBRkosRUFJR0MsSUFKSCxDQUlRLFVBQUNDLEdBQUQsRUFBUztBQUNiTCxjQUFRLENBQUNLLEdBQUcsQ0FBQ0MsSUFBTCxDQUFSLENBRGEsQ0FFYjtBQUNELEtBUEgsV0FRUyxVQUFDQyxLQUFEO0FBQUEsYUFBV0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosQ0FBWDtBQUFBLEtBUlQ7QUFTRCxHQVZRLEVBVU4sRUFWTSxDQUFUO0FBSHNCLE1BaUJwQkcsTUFqQm9CLEdBd0JsQmIsS0F4QmtCLENBaUJwQmEsTUFqQm9CO0FBQUEsb0JBd0JsQmIsS0F4QmtCLENBa0JwQmMsSUFsQm9CO0FBQUEsTUFrQnBCQSxJQWxCb0IsNEJBa0JiLEVBbEJhO0FBQUEsTUFtQnBCQyxVQW5Cb0IsR0F3QmxCZixLQXhCa0IsQ0FtQnBCZSxVQW5Cb0I7QUFBQSxNQW9CcEJDLFdBcEJvQixHQXdCbEJoQixLQXhCa0IsQ0FvQnBCZ0IsV0FwQm9CO0FBQUEsTUFxQnBCQyxRQXJCb0IsR0F3QmxCakIsS0F4QmtCLENBcUJwQmlCLFFBckJvQjtBQUFBLG9CQXdCbEJqQixLQXhCa0IsQ0FzQnBCa0IsSUF0Qm9CO0FBQUEsTUFzQnBCQSxJQXRCb0IsNEJBc0JiLGNBdEJhO0FBQUEscUJBd0JsQmxCLEtBeEJrQixDQXVCcEJtQixLQXZCb0I7QUFBQSxNQXVCcEJBLEtBdkJvQiw2QkF1QlosZUF2Qlk7QUEwQnRCLE1BQUlDLE9BQU8sR0FBR2xCLElBQUksQ0FBQyxDQUFELENBQWxCO0FBQ0FTLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUSxPQUFPLENBQUNDLGFBQXBCO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFNLFVBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBLGdCQUFLRjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFO0FBQUEsd0JBQVVELElBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEYsZUFJRSxxRUFBQyxxRUFBRDtBQUNFLFlBQU0sRUFBRUosSUFEVjtBQUVFLGtCQUFZLEVBQUU7QUFBRVEsU0FBQyxFQUFFLEdBQUw7QUFBVUMsU0FBQyxFQUFFLEdBQWI7QUFBa0JDLFdBQUcsRUFBRTtBQUF2QjtBQUZoQixPQUdNM0IsK0NBQU0sQ0FBQzRCLE1BQVAsRUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFTRTtBQUFBLGlCQUNHVCxXQUFXLGlCQUNWO0FBQUEsK0JBQ0U7QUFBSyxhQUFHLEVBQUV0QixNQUFNLENBQUNzQixXQUFELENBQU4sQ0FBb0JVLEtBQXBCLENBQTBCLEVBQTFCLEVBQThCQyxHQUE5QjtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkosZUFNRTtBQUFBLGtCQUFLWjtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFORixlQU9FO0FBQUEsbUJBQ0dFLFFBREgsRUFFR0osTUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQXZERDs7R0FBTWQsSTs7S0FBQUEsSTtBQXlETixJQUFNNkIsS0FBSyxHQUFHQywyQ0FBSCxtQkFBWDs7QUFZQTlCLElBQUksQ0FBQytCLGVBQUw7QUFBQSxvU0FBdUIsaUJBQWdCQyxPQUFoQjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3JCO0FBRHFCLGtDQUVDQSxPQUFPLENBQUNILEtBRlQsQ0FFYkksSUFGYSxFQUViQSxJQUZhLG9DQUVOLEVBRk07QUFBQTtBQUFBLG1CQUdSbkMsK0NBQU0sQ0FBQ29DLEtBQVAsQ0FBYUwsS0FBYixFQUFvQjtBQUFFSSxrQkFBSSxFQUFKQTtBQUFGLGFBQXBCLENBSFE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF2Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNZWpDLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3QvW3NsdWddLjQ2ZDZiODk5Y2I0MWRjZGY5NTA0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBbc2x1Z10uanNcclxuaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcclxuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tIFwiQHNhbml0eS9pbWFnZS11cmxcIjtcclxuaW1wb3J0IEJsb2NrQ29udGVudCBmcm9tIFwiQHNhbml0eS9ibG9jay1jb250ZW50LXRvLXJlYWN0XCI7XHJcbmltcG9ydCBjbGllbnQgZnJvbSBcIi4uLy4uL2NsaWVudFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbi8vXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xyXG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpO1xyXG59XHJcblxyXG5jb25zdCBQb3N0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2NvaW4sIHNldENvaW5zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5nZXQoXHJcbiAgICAgICAgXCJodHRwczovL2FwaS5jb2luZ2Vja28uY29tL2FwaS92My9jb2lucy9tYXJrZXRzP3ZzX2N1cnJlbmN5PWdicCZvcmRlcj1tYXJrZXRfY2FwX2Rlc2MmcGVyX3BhZ2U9MTAwJnBhZ2U9MSZzcGFya2xpbmU9ZmFsc2VcIlxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRDb2lucyhyZXMuZGF0YSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzLmRhdGEpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgLy8gUE9TVCBQUk9QU1xyXG4gICAgYW1vdW50LFxyXG4gICAgYm9keSA9IFtdLFxyXG4gICAgY3J5cHRvTmFtZSxcclxuICAgIGNyeXB0b0ltYWdlLFxyXG4gICAgY3VycmVuY3ksXHJcbiAgICBuYW1lID0gXCJNaXNzaW5nIG5hbWVcIixcclxuICAgIHRpdGxlID0gXCJNaXNzaW5nIHRpdGxlXCIsXHJcbiAgfSA9IHByb3BzO1xyXG5cclxuICBsZXQgYml0Y29pbiA9IGNvaW5bMF07XHJcbiAgY29uc29sZS5sb2coYml0Y29pbi5jdXJyZW50X3ByaWNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlPlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPkNsaWNrPC9MaW5rPlxyXG4gICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgIDxzcGFuPkJ5IHtuYW1lfTwvc3Bhbj5cclxuICAgICAgPEJsb2NrQ29udGVudFxyXG4gICAgICAgIGJsb2Nrcz17Ym9keX1cclxuICAgICAgICBpbWFnZU9wdGlvbnM9e3sgdzogMzIwLCBoOiAyNDAsIGZpdDogXCJtYXhcIiB9fVxyXG4gICAgICAgIHsuLi5jbGllbnQuY29uZmlnKCl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2NyeXB0b0ltYWdlICYmIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXt1cmxGb3IoY3J5cHRvSW1hZ2UpLndpZHRoKDUwKS51cmwoKX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGgxPntjcnlwdG9OYW1lfTwvaDE+XHJcbiAgICAgICAgPGgxPlxyXG4gICAgICAgICAge2N1cnJlbmN5fVxyXG4gICAgICAgICAge2Ftb3VudH1cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIHsvKiA8aDE+e2NvaW4uc3ltYm9sfTwvaDE+ICovfVxyXG4gICAgICAgIHsvKiA8aDE+e2NvaW4uYml0Y29pbi5nYnB9PC9oMT4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBde1xyXG4gIHRpdGxlLFxyXG4gIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXHJcbiAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXHJcbiAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlLFxyXG4gIGJvZHksXHJcbiAgY3VycmVuY3ksXHJcbiAgYW1vdW50LFxyXG4gIFwiY3J5cHRvTmFtZVwiOiBjcnlwdG8tPm5hbWUsXHJcbiAgXCJjcnlwdG9JbWFnZVwiOiBjcnlwdG8tPmltYWdlLFxyXG59YDtcclxuXHJcblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKGNvbnRleHQpIHtcclxuICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxyXG4gIGNvbnN0IHsgc2x1ZyA9IFwiXCIgfSA9IGNvbnRleHQucXVlcnk7XHJcbiAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSwgeyBzbHVnIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==