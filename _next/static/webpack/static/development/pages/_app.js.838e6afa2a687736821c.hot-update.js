webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");










var _jsxFileName = "/Users/siggy/synx/website-2019/pages/_app.js";





var trackingId = "UA-106564167-1"; // Replace with your Google Analytics tracking ID

react_ga__WEBPACK_IMPORTED_MODULE_14__["default"].initialize(trackingId);
/*
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});
*/

var URL = process.env.URL || "/";

var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(MyApp, _App);

  function MyApp() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MyApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      hueRotation: 0
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (window.RUNNING) {
        console.warn("D :");
        return;
      }

      window.RUNNING = true;
      var hueRotation = 0;
      var motionActivated = false;
      var lastScrolledTime = new Date().getTime();
      window.addEventListener("scroll", function () {
        lastScrolledTime = new Date().getTime();
      });
      window.addEventListener("devicemotion", function (evt) {
        hueRotation = (evt.accelerationIncludingGravity.x + 10) / 10 * 180 + 180;
        motionActivated = true;
      }, true);
      window.addEventListener("mousemove", function (evt) {
        if (motionActivated) return;
        hueRotation = evt.pageX / window.innerWidth * 360 + 180;
        hueRotation = (hueRotation + 360 * 2) / 3;
      });
      window.setInterval(function () {
        if (new Date().getTime() - lastScrolledTime > 300) {
          _this2.setState(function (state) {
            return {
              hueRotation: Math.round((state.hueRotation * 2 + hueRotation) / 3)
            };
          });
        }
      }, 25);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      console.log(URL);
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_12__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_13___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("title", {
        className: "jsx-827469350",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Synx"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("link", {
        rel: "icon",
        href: "".concat(URL, "static/favicon.png"),
        className: "jsx-827469350",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "827469350",
        __self: this
      }, "@font-face{font-family:\"Neufile Grotesk\";font-weight:400;src:url(\"".concat(URL, "static/fonts/NeufileGrotesk-Regular.ttf\") format(\"truetype\");}@font-face{font-family:\"Neufile Grotesk\";font-weight:700;src:url(\"").concat(URL, "static/fonts/NeufileGrotesk-Bold.ttf\") format(\"truetype\");}::selection{background:#ffb7b7;}body{background:rgb(26,26,26);color:#d9d8d6;font-size:24px;line-height:1.4166666667;font-family:\"Neufile Grotesk\";font-weight:400;}body>div{width:100vw;overflow-x:hidden;}h1{color:#ffffff;font-weight:700;font-size:110px;line-height:1.2727272727;}h2{color:#ffffff;font-weight:700;font-size:80px;line-height:1.75;}h3{color:#ffffff;font-weight:700;font-size:24px;padding-bottom:12px;}h3::before{content:\"\";position:relative;display:inline-block;height:24px;width:24px;background:url(").concat(URL, "static/arrow.svg);background-repeat:no-repeat;background-position:center;top:2px;}.synx-slogan{color:#fff;margin:6rem 0 7rem;font-size:60px;line-height:1.3333333333;font-weight:700;}.flex-1{-webkit-flex:1;-ms-flex:1;flex:1;}.synx-line{margin-top:-2rem;margin-bottom:-2rem;width:250vw;display:block;-webkit-filter:hue-rotate(0deg);filter:hue-rotate(0deg);}.subheader-content{padding:5rem 0;}.synx-case-study{position:relative;margin-bottom:3rem;}.-invert.synx-case-study{padding-top:3rem;}.synx-image-hue{background:url(\"").concat(URL, "static/assets/synx-hue.svg\");background-size:cover;display:inline-block;width:50%;}.synx-image-hue>div{top:-2px;left:-2px;}.synx-small-link{color:#686868;font-size:18px;margin-top:2rem;display:block;font-weight:400;border-bottom:1px solid #686868;display:inline-block;-webkit-text-decoration:none;text-decoration:none;}.synx-small-link:hover{color:#fff;border-bottom:1px solid #fff;}.synx-email{background:rgba(0,0,0,0.45);padding:2rem 0;text-align:center;}.synx-email h2{color:rgba(255,255,255,0.7);}table{margin:3rem 0;width:100%;border-collapse:collapse;}thead{background:#222;}td,th{border-collapse:collapse;padding:0.618rem 1rem;line-height:1;border:1px solid #666;}.synx-table-header{font-style:italic;text-align:center;margin:2rem 0 -2rem;}@media screen and (max-width:1000px){body{font-size:16px;}h1{font-size:54px;}h2{font-size:32px;}h3{font-size:18px;}.subheader-content{padding:3rem 0;}.synx-slogan{font-size:32px;}.synx-line{margin-top:-1rem;margin-bottom:2rem;max-width:150vw;width:150vw;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zaWdneS9zeW54L3dlYnNpdGUtMjAxOS9wYWdlcy9fYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThGVyxBQUc2QyxBQU9BLEFBT1gsQUFJUSxBQVNmLEFBS0UsQUFPQSxBQU9BLEFBT0QsQUFZRixBQVFKLEFBSVUsQUFRRixBQUlHLEFBSUQsQUFJd0QsQUFPaEUsQUFLSyxBQVdILEFBS29CLEFBTUEsQUFJakIsQUFLRSxBQUdTLEFBTVAsQUFPRCxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJRSxTQTNFVCxFQW5EVSxBQVlELEFBdURVLENBN0ZYLEVBS0YsQUFPQSxBQU9BLEFBK0RELEFBMEJKLENBbERiLEFBdUVFLEFBSUEsQUFJQSxBQUlBLEFBSUEsQUFJQSxDQXBDRixDQS9Ec0IsQUFnQnRCLEFBdUZ1QixDQTNGRixBQTRERCxDQXZJcEIsQUEyRkEsTUF2RmdCLEFBc0hXLEFBT0gsR0FsQlAsQUFNakIsQ0E3RXlCLEFBd0RQLENBOUdBLEFBT0EsQUFxQmxCLEFBS2tCLEFBT0QsQUFPQSxBQW1CQSxHQU9qQixHQTZFc0IsQUErQkYsQ0F2R04sQUFZZCxFQXZFaUIsQ0FzR2pCLEdBS29CLEVBckZELEFBT0csQUFtQkssQUE0Q1gsQ0E3R00sQUFPQSxBQXlCSyxDQThHWCxFQWpFQSxDQXhCQSxBQWtGaEIsRUE2Q2dCLEVBbEtXLEVBbUkzQixHQXZDa0IsRUFlbEIsQUFrQndCLENBdkd4QixBQWNlLENBd0JXLENBdUd4QixDQXRJRixLQW1Ca0IsQ0FqQ2xCLEVBc0JpRSxBQXdDekMsRUFnQlUsSUE1RkYsSUE2SGhDLEdBN0VBLFNBNkJ1QixZQWdCQSxFQTVGTCxPQTZFTixHQWxCWixNQTFEQSxDQTZFQSxFQWV1QixNQXpEUyxPQWhEaEMsR0FQQSxrQkF3RCtCLGdCQXlEL0IsV0F4RFksUUFDViIsImZpbGUiOiIvVXNlcnMvc2lnZ3kvc3lueC93ZWJzaXRlLTIwMTkvcGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcHAsIHsgQ29udGFpbmVyIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUmVhY3RHQSBmcm9tICdyZWFjdC1nYSc7XG5cblxuY29uc3QgdHJhY2tpbmdJZCA9IFwiVUEtMTA2NTY0MTY3LTFcIjsgLy8gUmVwbGFjZSB3aXRoIHlvdXIgR29vZ2xlIEFuYWx5dGljcyB0cmFja2luZyBJRFxuXG5cblJlYWN0R0EuaW5pdGlhbGl6ZSh0cmFja2luZ0lkKTtcblxuLypcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgY3JlYXRlQnJvd3Nlckhpc3RvcnkgfSBmcm9tICdoaXN0b3J5JztcblxuY29uc3QgaGlzdG9yeSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCk7XG5cbmhpc3RvcnkubGlzdGVuKGxvY2F0aW9uID0+IHtcbiAgUmVhY3RHQS5zZXQoeyBwYWdlOiBsb2NhdGlvbi5wYXRobmFtZSB9KTsgLy8gVXBkYXRlIHRoZSB1c2VyJ3MgY3VycmVudCBwYWdlXG4gIFJlYWN0R0EucGFnZXZpZXcobG9jYXRpb24ucGF0aG5hbWUpOyAvLyBSZWNvcmQgYSBwYWdldmlldyBmb3IgdGhlIGdpdmVuIHBhZ2Vcbn0pO1xuKi9cblxuY29uc3QgVVJMID0gcHJvY2Vzcy5lbnYuVVJMIHx8IFwiL1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIHJvdXRlciwgY3R4IH0pIHtcbiAgICBsZXQgcGFnZVByb3BzID0ge307XG5cbiAgICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgaHVlUm90YXRpb246IDBcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAod2luZG93LlJVTk5JTkcpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkQgOlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuUlVOTklORyA9IHRydWU7XG5cbiAgICBsZXQgaHVlUm90YXRpb24gPSAwO1xuICAgIGxldCBtb3Rpb25BY3RpdmF0ZWQgPSBmYWxzZTtcbiAgICBsZXQgbGFzdFNjcm9sbGVkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgICAgbGFzdFNjcm9sbGVkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImRldmljZW1vdGlvblwiLFxuICAgICAgZXZ0ID0+IHtcbiAgICAgICAgaHVlUm90YXRpb24gPSAoKGV2dC5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LnggKyAxMCkgLyAxMCkgKiAxODAgKyAxODA7XG5cbiAgICAgICAgbW90aW9uQWN0aXZhdGVkID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICB0cnVlXG4gICAgKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGV2dCA9PiB7XG4gICAgICBpZiAobW90aW9uQWN0aXZhdGVkKSByZXR1cm47XG5cbiAgICAgIGh1ZVJvdGF0aW9uID0gKGV2dC5wYWdlWCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIDM2MCArIDE4MDtcbiAgICAgIGh1ZVJvdGF0aW9uID0gKGh1ZVJvdGF0aW9uICsgMzYwICogMikgLyAzO1xuICAgIH0pO1xuXG4gICAgd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGxhc3RTY3JvbGxlZFRpbWUgPiAzMDApIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgICAgIGh1ZVJvdGF0aW9uOiBNYXRoLnJvdW5kKChzdGF0ZS5odWVSb3RhdGlvbiAqIDIgKyBodWVSb3RhdGlvbikgLyAzKVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfSwgMjUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zb2xlLmxvZyhVUkwpO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+U3lueDwvdGl0bGU+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9e2Ake1VSTH1zdGF0aWMvZmF2aWNvbi5wbmdgfSAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTmV1ZmlsZSBHcm90ZXNrXCI7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgIHNyYzogdXJsKFwiJHtVUkx9c3RhdGljL2ZvbnRzL05ldWZpbGVHcm90ZXNrLVJlZ3VsYXIudHRmXCIpXG4gICAgICAgICAgICAgICAgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJOZXVmaWxlIEdyb3Rlc2tcIjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgc3JjOiB1cmwoXCIke1VSTH1zdGF0aWMvZm9udHMvTmV1ZmlsZUdyb3Rlc2stQm9sZC50dGZcIilcbiAgICAgICAgICAgICAgICBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgOjpzZWxlY3Rpb24ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZiN2I3O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI2LCAyNiwgMjYpO1xuICAgICAgICAgICAgICBjb2xvcjogI2Q5ZDhkNjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS40MTY2NjY2NjY3O1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJOZXVmaWxlIEdyb3Rlc2tcIjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYm9keSA+IGRpdiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDExMHB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yNzI3MjcyNzI3O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc1O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGgzOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCR7VVJMfXN0YXRpYy9hcnJvdy5zdmcpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHRvcDogMnB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zeW54LXNsb2dhbiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBtYXJnaW46IDZyZW0gMCA3cmVtO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjMzMzMzMzMzMzM7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5mbGV4LTEge1xuICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3lueC1saW5lIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTJyZW07XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0ycmVtO1xuICAgICAgICAgICAgICB3aWR0aDogMjUwdnc7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBmaWx0ZXI6IGh1ZS1yb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zdWJoZWFkZXItY29udGVudCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVyZW0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN5bngtY2FzZS1zdHVkeSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC4taW52ZXJ0LnN5bngtY2FzZS1zdHVkeSB7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzcmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3lueC1pbWFnZS1odWUge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIke1VSTH1zdGF0aWMvYXNzZXRzL3N5bngtaHVlLnN2Z1wiKTtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3lueC1pbWFnZS1odWUgPiBkaXYge1xuICAgICAgICAgICAgICB0b3A6IC0ycHg7XG4gICAgICAgICAgICAgIGxlZnQ6IC0ycHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zeW54LXNtYWxsLWxpbmsge1xuICAgICAgICAgICAgICBjb2xvcjogIzY4Njg2ODtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2ODY4Njg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3lueC1zbWFsbC1saW5rOmhvdmVyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3lueC1lbWFpbCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40NSk7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3lueC1lbWFpbCBoMiB7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAzcmVtIDA7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhlYWQge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjIyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGQsIHRoIHtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMC42MThyZW0gMXJlbTtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NjY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3lueC10YWJsZS1oZWFkZXIge1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbWFyZ2luOiAycmVtIDAgLTJyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1NHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuc3ViaGVhZGVyLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNyZW0gMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5zeW54LXNsb2dhbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnN5bngtbGluZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTFyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE1MHZ3O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTB2dztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gaHVlUm90YXRpb249e3RoaXMuc3RhdGUuaHVlUm90YXRpb259IFVSTD17VVJMfSAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=/Users/siggy/synx/website-2019/pages/_app.js */")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
        hueRotation: this.state.hueRotation,
        URL: URL,
        className: "jsx-827469350" + " " + (pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, router, ctx, pageProps;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                pageProps = {};

                if (!Component.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return Component.getInitialProps(ctx);

              case 5:
                pageProps = _context.sent;

              case 6:
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_12___default.a);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=_app.js.838e6afa2a687736821c.hot-update.js.map