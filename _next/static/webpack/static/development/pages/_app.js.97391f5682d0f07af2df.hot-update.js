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
        className: "jsx-1583691816",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Synx"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("link", {
        rel: "icon",
        href: "".concat(URL, "static/favicon.png"),
        className: "jsx-1583691816",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_10___default.a, {
        id: "1583691816",
        __self: this
      }, "@font-face{font-family:\"Neufile Grotesk\";font-weight:400;src:url(\"".concat(URL, "static/fonts/NeufileGrotesk-Regular.ttf\") format(\"truetype\");}@font-face{font-family:\"Neufile Grotesk\";font-weight:700;src:url(\"").concat(URL, "static/fonts/NeufileGrotesk-Bold.ttf\") format(\"truetype\");}::selection{background:#ffb7b7;}body{background:rgb(26,26,26);color:#d9d8d6;font-size:24px;line-height:1.4166666667;font-family:\"Neufile Grotesk\";font-weight:400;}body>div{width:100vw;overflow-x:hidden;}h1{color:#ffffff;font-weight:700;font-size:110px;line-height:1.2727272727;}h2{color:#ffffff;font-weight:700;font-size:80px;line-height:1.75;}h3{color:#ffffff;font-weight:700;font-size:24px;padding-bottom:12px;}h3::before{content:\"\";position:relative;display:inline-block;height:24px;width:24px;background:url(").concat(URL, "static/arrow.svg);background-repeat:no-repeat;background-position:center;top:2px;}.synx-slogan{color:#fff;margin:6rem 0 7rem;font-size:60px;line-height:1.3333333333;font-weight:700;}.flex-1{-webkit-flex:1;-ms-flex:1;flex:1;}.synx-line{margin-top:-2rem;margin-bottom:-2rem;width:250vw;display:block;-webkit-filter:hue-rotate(0deg);filter:hue-rotate(0deg);}.subheader-content{padding:5rem 0;}.synx-case-study{position:relative;margin-bottom:3rem;}.-invert.synx-case-study{padding-top:3rem;}.synx-image-hue{background:url(\"").concat(URL, "static/assets/synx-hue.svg\");background-size:cover;display:inline-block;width:50%;}.synx-image-hue>div{top:-2px;left:-2px;}.synx-small-link{color:#686868;font-size:18px;margin-top:2rem;display:block;font-weight:400;border-bottom:1px solid #686868;display:inline-block;-webkit-text-decoration:none;text-decoration:none;}.synx-small-link:hover{color:#fff;border-bottom:1px solid #fff;}.synx-email{background:rgba(0,0,0,0.45);padding:2rem 0;text-align:center;}.synx-email h2{color:rgba(255,255,255,0.7);}table{margin:3rem 0;width:100%;border-collapse:collapse;}thead{background:#222;}td,th{border-collapse:collapse;padding:0.618rem 1rem;line-height:1;border:1px solid #666;}.synx-table-header{font-style:italic;text-align:center;}@media screen and (max-width:1000px){body{font-size:16px;}h1{font-size:54px;}h2{font-size:32px;}h3{font-size:18px;}.subheader-content{padding:3rem 0;}.synx-slogan{font-size:32px;}.synx-line{margin-top:-1rem;margin-bottom:2rem;max-width:150vw;width:150vw;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXZpZXJieXRlL24tci93ZWJzaXRlLTIwMTkvcGFnZXMvX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RVcsQUFHNkMsQUFPQSxBQU9YLEFBSVEsQUFTZixBQUtFLEFBT0EsQUFPQSxBQU9ELEFBWUYsQUFRSixBQUlVLEFBUUYsQUFJRyxBQUlELEFBSXdELEFBT2hFLEFBS0ssQUFXSCxBQUtvQixBQU1BLEFBSWpCLEFBS0UsQUFHUyxBQU1QLEFBTUQsQUFJQSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUUsU0ExRVQsRUFuRFUsQUFZRCxBQXVEVSxDQTdGWCxFQUtGLEFBT0EsQUFPQSxBQStERCxBQTBCSixDQWxEYixBQXNFRSxBQUlBLEFBSUEsQUFJQSxBQUlBLEFBSUEsQ0FuQ0YsQ0EvRHNCLEFBZ0J0QixBQXNGdUIsQ0ExRkYsQUE0REQsQ0F2SXBCLEFBMkZBLE1BdkZnQixBQXNIVyxBQU9ILEdBbEJQLEFBTWpCLENBN0V5QixBQXdEUCxDQTlHQSxBQU9BLEFBcUJsQixBQUtrQixBQU9ELEFBT0EsQUFtQkEsR0FPakIsR0E2RUEsQUE4Qm9CLENBdEdOLEFBWWQsRUF2RWlCLENBc0dqQixHQUtvQixFQXJGRCxBQU9HLEFBbUJLLEFBNENYLENBN0dNLEFBT0EsQUF5QkssQ0E4R1gsRUFqRUEsQ0F4QkEsQUFrRmhCLEVBNENnQixFQWpLVyxLQTRGVCxFQWVsQixBQWtCd0IsQ0F2R3hCLEFBY2UsQ0F3QlcsQ0FzR3hCLENBcklGLEtBbUJrQixDQWpDbEIsRUFzQmlFLEFBd0N6QyxFQWdCVSxJQTVGRixJQTZIaEMsR0E3RUEsU0E2QnVCLFlBZ0JBLEVBNUZMLE9BNkVOLEdBbEJaLE1BMURBLENBNkVBLEVBZXVCLE1BekRTLE9BaERoQyxHQVBBLGtCQXdEK0IsZ0JBeUQvQixXQXhEWSxRQUNWIiwiZmlsZSI6Ii9Vc2Vycy9qYXZpZXJieXRlL24tci93ZWJzaXRlLTIwMTkvcGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcHAsIHsgQ29udGFpbmVyIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmNvbnN0IFVSTCA9IHByb2Nlc3MuZW52LlVSTCB8fCBcIi9cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgQ29tcG9uZW50LCByb3V0ZXIsIGN0eCB9KSB7XG4gICAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xuXG4gICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBwYWdlUHJvcHMgfTtcbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgIGh1ZVJvdGF0aW9uOiAwXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHdpbmRvdy5SVU5OSU5HKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJEIDpcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2luZG93LlJVTk5JTkcgPSB0cnVlO1xuXG4gICAgbGV0IGh1ZVJvdGF0aW9uID0gMDtcbiAgICBsZXQgbW90aW9uQWN0aXZhdGVkID0gZmFsc2U7XG4gICAgbGV0IGxhc3RTY3JvbGxlZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcbiAgICAgIGxhc3RTY3JvbGxlZFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJkZXZpY2Vtb3Rpb25cIixcbiAgICAgIGV2dCA9PiB7XG4gICAgICAgIGh1ZVJvdGF0aW9uID0gKChldnQuYWNjZWxlcmF0aW9uSW5jbHVkaW5nR3Jhdml0eS54ICsgMTApIC8gMTApICogMTgwICsgMTgwO1xuXG4gICAgICAgIG1vdGlvbkFjdGl2YXRlZCA9IHRydWU7XG4gICAgICB9LFxuICAgICAgdHJ1ZVxuICAgICk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBldnQgPT4ge1xuICAgICAgaWYgKG1vdGlvbkFjdGl2YXRlZCkgcmV0dXJuO1xuXG4gICAgICBodWVSb3RhdGlvbiA9IChldnQucGFnZVggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiAzNjAgKyAxODA7XG4gICAgICBodWVSb3RhdGlvbiA9IChodWVSb3RhdGlvbiArIDM2MCAqIDIpIC8gMztcbiAgICB9KTtcblxuICAgIHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBpZiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBsYXN0U2Nyb2xsZWRUaW1lID4gMzAwKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHtcbiAgICAgICAgICBodWVSb3RhdGlvbjogTWF0aC5yb3VuZCgoc3RhdGUuaHVlUm90YXRpb24gKiAyICsgaHVlUm90YXRpb24pIC8gMylcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH0sIDI1KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5TeW54PC90aXRsZT5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj17YCR7VVJMfXN0YXRpYy9mYXZpY29uLnBuZ2B9IC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJOZXVmaWxlIEdyb3Rlc2tcIjtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgc3JjOiB1cmwoXCIke1VSTH1zdGF0aWMvZm9udHMvTmV1ZmlsZUdyb3Rlc2stUmVndWxhci50dGZcIilcbiAgICAgICAgICAgICAgICBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk5ldWZpbGUgR3JvdGVza1wiO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICBzcmM6IHVybChcIiR7VVJMfXN0YXRpYy9mb250cy9OZXVmaWxlR3JvdGVzay1Cb2xkLnR0ZlwiKVxuICAgICAgICAgICAgICAgIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA6OnNlbGVjdGlvbiB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmI3Yjc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjYsIDI2LCAyNik7XG4gICAgICAgICAgICAgIGNvbG9yOiAjZDlkOGQ2O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQxNjY2NjY2Njc7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk5ldWZpbGUgR3JvdGVza1wiO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBib2R5ID4gZGl2IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTEwcHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI3MjcyNzI3Mjc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaDM6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJHtVUkx9c3RhdGljL2Fycm93LnN2Zyk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgdG9wOiAycHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN5bngtc2xvZ2FuIHtcbiAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIG1hcmdpbjogNnJlbSAwIDdyZW07XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzMzMzMzMzMzMztcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmZsZXgtMSB7XG4gICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zeW54LWxpbmUge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMnJlbTtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTJyZW07XG4gICAgICAgICAgICAgIHdpZHRoOiAyNTB2dztcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIGZpbHRlcjogaHVlLXJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN1YmhlYWRlci1jb250ZW50IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogNXJlbSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3lueC1jYXNlLXN0dWR5IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLi1pbnZlcnQuc3lueC1jYXNlLXN0dWR5IHtcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDNyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zeW54LWltYWdlLWh1ZSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIiR7VVJMfXN0YXRpYy9hc3NldHMvc3lueC1odWUuc3ZnXCIpO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zeW54LWltYWdlLWh1ZSA+IGRpdiB7XG4gICAgICAgICAgICAgIHRvcDogLTJweDtcbiAgICAgICAgICAgICAgbGVmdDogLTJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN5bngtc21hbGwtbGluayB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNjg2ODY4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzY4Njg2ODtcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zeW54LXNtYWxsLWxpbms6aG92ZXIge1xuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zeW54LWVtYWlsIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcbiAgICAgICAgICAgICAgcGFkZGluZzogMnJlbSAwO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zeW54LWVtYWlsIGgyIHtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgICBtYXJnaW46IDNyZW0gMDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGVhZCB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ZCwgdGgge1xuICAgICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAwLjYxOHJlbSAxcmVtO1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzY2NjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zeW54LXRhYmxlLWhlYWRlciB7XG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTRweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLnN1YmhlYWRlci1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcmVtIDA7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuc3lueC1zbG9nYW4ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5zeW54LWxpbmUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xcmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNTB2dztcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUwdnc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGh1ZVJvdGF0aW9uPXt0aGlzLnN0YXRlLmh1ZVJvdGF0aW9ufSBVUkw9e1VSTH0gLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=/Users/javierbyte/n-r/website-2019/pages/_app.js */")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
        hueRotation: this.state.hueRotation,
        URL: URL,
        className: "jsx-1583691816" + " " + (pageProps.className != null && pageProps.className || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
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
//# sourceMappingURL=_app.js.97391f5682d0f07af2df.hot-update.js.map