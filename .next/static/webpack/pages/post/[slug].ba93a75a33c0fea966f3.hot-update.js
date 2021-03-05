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
  console.log(bitcoin);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10uanMiXSwibmFtZXMiOlsidXJsRm9yIiwic291cmNlIiwiaW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwiaW1hZ2UiLCJQb3N0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsImNvaW4iLCJzZXRDb2lucyIsInVzZUVmZmVjdCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJhbW91bnQiLCJib2R5IiwiY3J5cHRvTmFtZSIsImNyeXB0b0ltYWdlIiwiY3VycmVuY3kiLCJuYW1lIiwidGl0bGUiLCJiaXRjb2luIiwidyIsImgiLCJmaXQiLCJjb25maWciLCJ3aWR0aCIsInVybCIsInF1ZXJ5IiwiZ3JvcSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHQiLCJzbHVnIiwiZmV0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULENBQWdCQyxNQUFoQixFQUF3QjtBQUN0QixTQUFPQyx3REFBZSxDQUFDQywrQ0FBRCxDQUFmLENBQXdCQyxLQUF4QixDQUE4QkgsTUFBOUIsQ0FBUDtBQUNEOztBQUVELElBQU1JLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNHQyx1REFBUSxDQUFDLEVBQUQsQ0FEWDtBQUFBLE1BQ2ZDLElBRGU7QUFBQSxNQUNUQyxRQURTOztBQUd0QkMsMERBQVMsQ0FBQyxZQUFNO0FBQ2RDLGlEQUFLLENBQ0ZDLEdBREgsQ0FFSSwwSEFGSixFQUlHQyxJQUpILENBSVEsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JMLGNBQVEsQ0FBQ0ssR0FBRyxDQUFDQyxJQUFMLENBQVIsQ0FEYSxDQUViO0FBQ0QsS0FQSCxXQVFTLFVBQUNDLEtBQUQ7QUFBQSxhQUFXQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixDQUFYO0FBQUEsS0FSVDtBQVNELEdBVlEsRUFVTixFQVZNLENBQVQ7QUFIc0IsTUFpQnBCRyxNQWpCb0IsR0F3QmxCYixLQXhCa0IsQ0FpQnBCYSxNQWpCb0I7QUFBQSxvQkF3QmxCYixLQXhCa0IsQ0FrQnBCYyxJQWxCb0I7QUFBQSxNQWtCcEJBLElBbEJvQiw0QkFrQmIsRUFsQmE7QUFBQSxNQW1CcEJDLFVBbkJvQixHQXdCbEJmLEtBeEJrQixDQW1CcEJlLFVBbkJvQjtBQUFBLE1Bb0JwQkMsV0FwQm9CLEdBd0JsQmhCLEtBeEJrQixDQW9CcEJnQixXQXBCb0I7QUFBQSxNQXFCcEJDLFFBckJvQixHQXdCbEJqQixLQXhCa0IsQ0FxQnBCaUIsUUFyQm9CO0FBQUEsb0JBd0JsQmpCLEtBeEJrQixDQXNCcEJrQixJQXRCb0I7QUFBQSxNQXNCcEJBLElBdEJvQiw0QkFzQmIsY0F0QmE7QUFBQSxxQkF3QmxCbEIsS0F4QmtCLENBdUJwQm1CLEtBdkJvQjtBQUFBLE1BdUJwQkEsS0F2Qm9CLDZCQXVCWixlQXZCWTtBQTBCdEIsTUFBSUMsT0FBTyxHQUFHbEIsSUFBSSxDQUFDLENBQUQsQ0FBbEI7QUFDQVMsU0FBTyxDQUFDQyxHQUFSLENBQVlRLE9BQVo7QUFFQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUEsZ0JBQUtEO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0U7QUFBQSx3QkFBVUQsSUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQUlFLHFFQUFDLHFFQUFEO0FBQ0UsWUFBTSxFQUFFSixJQURWO0FBRUUsa0JBQVksRUFBRTtBQUFFTyxTQUFDLEVBQUUsR0FBTDtBQUFVQyxTQUFDLEVBQUUsR0FBYjtBQUFrQkMsV0FBRyxFQUFFO0FBQXZCO0FBRmhCLE9BR00xQiwrQ0FBTSxDQUFDMkIsTUFBUCxFQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQVNFO0FBQUEsaUJBQ0dSLFdBQVcsaUJBQ1Y7QUFBQSwrQkFDRTtBQUFLLGFBQUcsRUFBRXRCLE1BQU0sQ0FBQ3NCLFdBQUQsQ0FBTixDQUFvQlMsS0FBcEIsQ0FBMEIsRUFBMUIsRUFBOEJDLEdBQTlCO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixlQU1FO0FBQUEsa0JBQUtYO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5GLGVBT0U7QUFBQSxtQkFDR0UsUUFESCxFQUVHSixNQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMEJELENBdkREOztHQUFNZCxJOztLQUFBQSxJO0FBeUROLElBQU00QixLQUFLLEdBQUdDLDJDQUFILG1CQUFYOztBQVlBN0IsSUFBSSxDQUFDOEIsZUFBTDtBQUFBLG9TQUF1QixpQkFBZ0JDLE9BQWhCO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDckI7QUFEcUIsa0NBRUNBLE9BQU8sQ0FBQ0gsS0FGVCxDQUViSSxJQUZhLEVBRWJBLElBRmEsb0NBRU4sRUFGTTtBQUFBO0FBQUEsbUJBR1JsQywrQ0FBTSxDQUFDbUMsS0FBUCxDQUFhTCxLQUFiLEVBQW9CO0FBQUVJLGtCQUFJLEVBQUpBO0FBQUYsYUFBcEIsQ0FIUTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXZCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1laEMsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9bc2x1Z10uYmE5M2E3NWEzM2MwZmVhOTY2ZjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFtzbHVnXS5qc1xyXG5pbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xyXG5pbXBvcnQgaW1hZ2VVcmxCdWlsZGVyIGZyb20gXCJAc2FuaXR5L2ltYWdlLXVybFwiO1xyXG5pbXBvcnQgQmxvY2tDb250ZW50IGZyb20gXCJAc2FuaXR5L2Jsb2NrLWNvbnRlbnQtdG8tcmVhY3RcIjtcclxuaW1wb3J0IGNsaWVudCBmcm9tIFwiLi4vLi4vY2xpZW50XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuLy9cclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5mdW5jdGlvbiB1cmxGb3Ioc291cmNlKSB7XHJcbiAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSk7XHJcbn1cclxuXHJcbmNvbnN0IFBvc3QgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbY29pbiwgc2V0Q29pbnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3NcclxuICAgICAgLmdldChcclxuICAgICAgICBcImh0dHBzOi8vYXBpLmNvaW5nZWNrby5jb20vYXBpL3YzL2NvaW5zL21hcmtldHM/dnNfY3VycmVuY3k9Z2JwJm9yZGVyPW1hcmtldF9jYXBfZGVzYyZwZXJfcGFnZT0xMDAmcGFnZT0xJnNwYXJrbGluZT1mYWxzZVwiXHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHNldENvaW5zKHJlcy5kYXRhKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICAvLyBQT1NUIFBST1BTXHJcbiAgICBhbW91bnQsXHJcbiAgICBib2R5ID0gW10sXHJcbiAgICBjcnlwdG9OYW1lLFxyXG4gICAgY3J5cHRvSW1hZ2UsXHJcbiAgICBjdXJyZW5jeSxcclxuICAgIG5hbWUgPSBcIk1pc3NpbmcgbmFtZVwiLFxyXG4gICAgdGl0bGUgPSBcIk1pc3NpbmcgdGl0bGVcIixcclxuICB9ID0gcHJvcHM7XHJcblxyXG4gIGxldCBiaXRjb2luID0gY29pblswXTtcclxuICBjb25zb2xlLmxvZyhiaXRjb2luKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxhcnRpY2xlPlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPkNsaWNrPC9MaW5rPlxyXG4gICAgICA8aDE+e3RpdGxlfTwvaDE+XHJcbiAgICAgIDxzcGFuPkJ5IHtuYW1lfTwvc3Bhbj5cclxuICAgICAgPEJsb2NrQ29udGVudFxyXG4gICAgICAgIGJsb2Nrcz17Ym9keX1cclxuICAgICAgICBpbWFnZU9wdGlvbnM9e3sgdzogMzIwLCBoOiAyNDAsIGZpdDogXCJtYXhcIiB9fVxyXG4gICAgICAgIHsuLi5jbGllbnQuY29uZmlnKCl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2NyeXB0b0ltYWdlICYmIChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXt1cmxGb3IoY3J5cHRvSW1hZ2UpLndpZHRoKDUwKS51cmwoKX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGgxPntjcnlwdG9OYW1lfTwvaDE+XHJcbiAgICAgICAgPGgxPlxyXG4gICAgICAgICAge2N1cnJlbmN5fVxyXG4gICAgICAgICAge2Ftb3VudH1cclxuICAgICAgICA8L2gxPlxyXG4gICAgICAgIHsvKiA8aDE+e2NvaW4uc3ltYm9sfTwvaDE+ICovfVxyXG4gICAgICAgIHsvKiA8aDE+e2NvaW4uYml0Y29pbi5nYnB9PC9oMT4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBde1xyXG4gIHRpdGxlLFxyXG4gIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXHJcbiAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGUsXHJcbiAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlLFxyXG4gIGJvZHksXHJcbiAgY3VycmVuY3ksXHJcbiAgYW1vdW50LFxyXG4gIFwiY3J5cHRvTmFtZVwiOiBjcnlwdG8tPm5hbWUsXHJcbiAgXCJjcnlwdG9JbWFnZVwiOiBjcnlwdG8tPmltYWdlLFxyXG59YDtcclxuXHJcblBvc3QuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKGNvbnRleHQpIHtcclxuICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxyXG4gIGNvbnN0IHsgc2x1ZyA9IFwiXCIgfSA9IGNvbnRleHQucXVlcnk7XHJcbiAgcmV0dXJuIGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSwgeyBzbHVnIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==