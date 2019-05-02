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










var _jsxFileName = "/Users/javierbyte/n-r/website-2019/pages/_app.js";




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
      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_12__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_13___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("title", {
        className: "jsx-3065106983",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Synx"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("link", {
        rel: "icon",
        href: "".concat(URL, "static/favicon.png"),
        className: "jsx-3065106983",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "3065106983",
        __self: this
      }, "@font-face{font-family:\"Neufile Grotesk\";font-weight:400;src:url(\"".concat(URL, "static/fonts/NeufileGrotesk-Regular.ttf\") format(\"truetype\");}@font-face{font-family:\"Neufile Grotesk\";font-weight:700;src:url(\"").concat(URL, "static/fonts/NeufileGrotesk-Bold.ttf\") format(\"truetype\");}::selection{background:#ffb7b7;}body{background:rgb(26,26,26);color:#d9d8d6;font-size:24px;line-height:1.4166666667;font-family:\"Neufile Grotesk\";font-weight:400;}body>div{width:100vw;overflow-x:hidden;}h1{color:#ffffff;font-weight:700;font-size:110px;line-height:1.2727272727;}h2{color:#ffffff;font-weight:700;font-size:80px;line-height:1.75;}h3{color:#ffffff;font-weight:700;font-size:24px;padding-bottom:12px;}h3::before{content:\"\";position:relative;display:inline-block;height:24px;width:24px;background:url(").concat(URL, "static/arrow.svg);background-repeat:no-repeat;background-position:center;top:2px;}.synx-slogan{color:#fff;margin:6rem 0 7rem;font-size:60px;line-height:1.3333333333;font-weight:700;}.flex-1{-webkit-flex:1;-ms-flex:1;flex:1;}.synx-line{margin-top:-2rem;margin-bottom:-2rem;width:250vw;display:block;-webkit-filter:hue-rotate(0deg);filter:hue-rotate(0deg);}.subheader-content{padding:5rem 0;}.synx-case-study{position:relative;margin-bottom:3rem;}.-invert.synx-case-study{padding-top:3rem;}.synx-image-hue{background:url(\"").concat(URL, "static/assets/synx-hue.svg\");background-size:cover;display:inline-block;width:50%;}.synx-image-hue>div{top:-2px;left:-2px;}.synx-small-link{color:#686868;font-size:18px;margin-top:2rem;display:block;font-weight:400;border-bottom:1px solid #686868;display:inline-block;-webkit-text-decoration:none;text-decoration:none;}.synx-small-link:hover{color:#fff;border-bottom:1px solid #fff;}.synx-email{background:rgba(0,0,0,0.45);padding:2rem 0;text-align:center;}.synx-email h2{color:rgba(255,255,255,0.7);}table{margin:3rem 0;width:100%;border-collapse:collapse;}thead{background:#222;}td,th{border-collapse:collapse;padding:0.618rem 1rem;line-height:1;border:1px solid #666;}.synx-table-header{font-style:italic;text-align:center;margin:1rem 0 -1rem;}@media screen and (max-width:1000px){body{font-size:16px;}h1{font-size:54px;}h2{font-size:32px;}h3{font-size:18px;}.subheader-content{padding:3rem 0;}.synx-slogan{font-size:32px;}.synx-line{margin-top:-1rem;margin-bottom:2rem;max-width:150vw;width:150vw;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXZpZXJieXRlL24tci93ZWJzaXRlLTIwMTkvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RVcsQUFHNkMsQUFPQSxBQU9YLEFBSVEsQUFTZixBQUtFLEFBT0EsQUFPQSxBQU9ELEFBWUYsQUFRSixBQUlVLEFBUUYsQUFJRyxBQUlELEFBSXdELEFBT2hFLEFBS0ssQUFXSCxBQUtvQixBQU1BLEFBSWpCLEFBS0UsQUFHUyxBQU1QLEFBT0QsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUUsU0EzRVQsRUFuRFUsQUFZRCxBQXVEVSxDQTdGWCxFQUtGLEFBT0EsQUFPQSxBQStERCxBQTBCSixDQWxEYixBQXVFRSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQ0FwQ0YsQ0EvRHNCLEFBZ0J0QixBQXVGdUIsQ0EzRkYsQUE0REQsQ0F2SXBCLEFBMkZBLE1BdkZnQixBQXNIVyxBQU9ILEdBbEJQLEFBTWpCLENBN0V5QixBQXdEUCxDQTlHQSxBQU9BLEFBcUJsQixBQUtrQixBQU9ELEFBT0EsQUFtQkEsR0FPakIsR0E2RXNCLEFBK0JGLENBdkdOLEFBWWQsRUF2RWlCLENBc0dqQixHQUtvQixFQXJGRCxBQU9HLEFBbUJLLEFBNENYLENBN0dNLEFBT0EsQUF5QkssQ0E4R1gsRUFqRUEsQ0F4QkEsQUFrRmhCLEVBNkNnQixFQWxLVyxFQW1JM0IsR0F2Q2tCLEVBZWxCLEFBa0J3QixDQXZHeEIsQUFjZSxDQXdCVyxDQXVHeEIsQ0F0SUYsS0FtQmtCLENBakNsQixFQXNCaUUsQUF3Q3pDLEVBZ0JVLElBNUZGLElBNkhoQyxHQTdFQSxTQTZCdUIsWUFnQkEsRUE1RkwsT0E2RU4sR0FsQlosTUExREEsQ0E2RUEsRUFldUIsTUF6RFMsT0FoRGhDLEdBUEEsa0JBd0QrQixnQkF5RC9CLFdBeERZLFFBQ1YiLCJmaWxlIjoiL1VzZXJzL2phdmllcmJ5dGUvbi1yL3dlYnNpdGUtMjAxOS9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEFwcCwgeyBDb250YWluZXIgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuY29uc3QgVVJMID0gcHJvY2Vzcy5lbnYuVVJMIHx8IFwiL1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIHJvdXRlciwgY3R4IH0pIHtcbiAgICBsZXQgcGFnZVByb3BzID0ge307XG5cbiAgICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xuICB9XG5cbiAgc3RhdGUgPSB7XG4gICAgaHVlUm90YXRpb246IDBcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAod2luZG93LlJVTk5JTkcpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkQgOlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3aW5kb3cuUlVOTklORyA9IHRydWU7XG5cbiAgICBsZXQgaHVlUm90YXRpb24gPSAwO1xuICAgIGxldCBtb3Rpb25BY3RpdmF0ZWQgPSBmYWxzZTtcbiAgICBsZXQgbGFzdFNjcm9sbGVkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xuICAgICAgbGFzdFNjcm9sbGVkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImRldmljZW1vdGlvblwiLFxuICAgICAgZXZ0ID0+IHtcbiAgICAgICAgaHVlUm90YXRpb24gPSAoKGV2dC5hY2NlbGVyYXRpb25JbmNsdWRpbmdHcmF2aXR5LnggKyAxMCkgLyAxMCkgKiAxODAgKyAxODA7XG5cbiAgICAgICAgbW90aW9uQWN0aXZhdGVkID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgICB0cnVlXG4gICAgKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGV2dCA9PiB7XG4gICAgICBpZiAobW90aW9uQWN0aXZhdGVkKSByZXR1cm47XG5cbiAgICAgIGh1ZVJvdGF0aW9uID0gKGV2dC5wYWdlWCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIDM2MCArIDE4MDtcbiAgICAgIGh1ZVJvdGF0aW9uID0gKGh1ZVJvdGF0aW9uICsgMzYwICogMikgLyAzO1xuICAgIH0pO1xuXG4gICAgd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGlmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGxhc3RTY3JvbGxlZFRpbWUgPiAzMDApIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgICAgIGh1ZVJvdGF0aW9uOiBNYXRoLnJvdW5kKChzdGF0ZS5odWVSb3RhdGlvbiAqIDIgKyBodWVSb3RhdGlvbikgLyAzKVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfSwgMjUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlN5bng8L3RpdGxlPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPXtgJHtVUkx9c3RhdGljL2Zhdmljb24ucG5nYH0gLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk5ldWZpbGUgR3JvdGVza1wiO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICBzcmM6IHVybChcIiR7VVJMfXN0YXRpYy9mb250cy9OZXVmaWxlR3JvdGVzay1SZWd1bGFyLnR0ZlwiKVxuICAgICAgICAgICAgICAgIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTmV1ZmlsZSBHcm90ZXNrXCI7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgIHNyYzogdXJsKFwiJHtVUkx9c3RhdGljL2ZvbnRzL05ldWZpbGVHcm90ZXNrLUJvbGQudHRmXCIpXG4gICAgICAgICAgICAgICAgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIDo6c2VsZWN0aW9uIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmYjdiNztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigyNiwgMjYsIDI2KTtcbiAgICAgICAgICAgICAgY29sb3I6ICNkOWQ4ZDY7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDE2NjY2NjY2NztcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTmV1ZmlsZSBHcm90ZXNrXCI7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJvZHkgPiBkaXYge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMTBweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjcyNzI3MjcyNztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA4MHB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS43NTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBoMzo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgke1VSTH1zdGF0aWMvYXJyb3cuc3ZnKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB0b3A6IDJweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3lueC1zbG9nYW4ge1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgbWFyZ2luOiA2cmVtIDAgN3JlbTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zMzMzMzMzMzMzO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZmxleC0xIHtcbiAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN5bngtbGluZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0ycmVtO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMnJlbTtcbiAgICAgICAgICAgICAgd2lkdGg6IDI1MHZ3O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgZmlsdGVyOiBodWUtcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3ViaGVhZGVyLWNvbnRlbnQge1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zeW54LWNhc2Utc3R1ZHkge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuLWludmVydC5zeW54LWNhc2Utc3R1ZHkge1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN5bngtaW1hZ2UtaHVlIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiJHtVUkx9c3RhdGljL2Fzc2V0cy9zeW54LWh1ZS5zdmdcIik7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN5bngtaW1hZ2UtaHVlID4gZGl2IHtcbiAgICAgICAgICAgICAgdG9wOiAtMnB4O1xuICAgICAgICAgICAgICBsZWZ0OiAtMnB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3lueC1zbWFsbC1saW5rIHtcbiAgICAgICAgICAgICAgY29sb3I6ICM2ODY4Njg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjg2ODY4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN5bngtc21hbGwtbGluazpob3ZlciB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN5bngtZW1haWwge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAycmVtIDA7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN5bngtZW1haWwgaDIge1xuICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICAgIG1hcmdpbjogM3JlbSAwO1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoZWFkIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzIyMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRkLCB0aCB7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAuNjE4cmVtIDFyZW07XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNjY2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN5bngtdGFibGUtaGVhZGVyIHtcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbjogMXJlbSAwIC0xcmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTRweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnN1YmhlYWRlci1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcmVtIDA7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuc3lueC1zbG9nYW4ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5zeW54LWxpbmUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xcmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNTB2dztcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwdnc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGh1ZVJvdGF0aW9uPXt0aGlzLnN0YXRlLmh1ZVJvdGF0aW9ufSBVUkw9e1VSTH0gLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/javierbyte/n-r/website-2019/pages/_app.js */")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
        hueRotation: this.state.hueRotation,
        URL: URL,
        className: "jsx-3065106983" + " " + (pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
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
//# sourceMappingURL=_app.js.f230b342bfdb405cabda.hot-update.js.map