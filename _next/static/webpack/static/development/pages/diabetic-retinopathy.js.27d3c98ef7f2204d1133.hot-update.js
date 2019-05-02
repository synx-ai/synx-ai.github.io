webpackHotUpdate("static/development/pages/diabetic-retinopathy.js",{

/***/ "./pages/diabetic-retinopathy.js":
/*!***************************************!*\
  !*** ./pages/diabetic-retinopathy.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_cutereset_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/cutereset.less */ "./styles/cutereset.less");
/* harmony import */ var _styles_cutereset_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_cutereset_less__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_grid_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/grid.less */ "./styles/grid.less");
/* harmony import */ var _styles_grid_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_grid_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ratio_image_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ratio-image.js */ "./components/ratio-image.js");
/* harmony import */ var _components_topnav_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/topnav.js */ "./components/topnav.js");
/* harmony import */ var _components_footer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/footer.js */ "./components/footer.js");
/* harmony import */ var _components_apiviewer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/apiviewer.js */ "./components/apiviewer.js");
var _jsxFileName = "/Users/javierbyte/n-r/website-2019/pages/diabetic-retinopathy.js";









var DB = [{
  source: "./static/assets/diabetic-retinopathy/10004_left.jpg",
  data: {
    label: "No DR",
    sum_r: 0.000285714285714285,
    sum_y: 0.018857143,
    red_alert: false,
    yellow_alert: false,
    probs: {
      healthy: 9.08857143e-1,
      mild: 7.22857143e-2,
      moderate: 1.85714286e-2,
      severe: 2.85714286e-4,
      proliferative: 0.0
    }
  }
}, {
  source: "./static/assets/diabetic-retinopathy/10062_left.jpg",
  data: {
    label: "Moderate",
    sum_r: 0.072285714,
    sum_y: 0.618571429,
    red_alert: false,
    yellow_alert: true,
    probs: {
      healthy: 0.28142857,
      mild: 0.1,
      moderate: 0.54628571,
      severe: 0.04457143,
      proliferative: 0.02771429
    }
  }
}, {
  source: "./static/assets/diabetic-retinopathy/10125_right.jpg",
  data: {
    label: "Severe",
    sum_r: 0.029142857,
    sum_y: 0.731142857,
    red_alert: false,
    yellow_alert: true,
    probs: {
      healthy: 0.19685714,
      mild: 0.072,
      moderate: 0.702,
      severe: 0.02171429,
      proliferative: 0.00742857
    }
  }
}, {
  source: "./static/assets/diabetic-retinopathy/10219_left.jpg",
  data: {
    label: "Moderate",
    sum_r: 0.040285714,
    sum_y: 0.969714286,
    red_alert: false,
    yellow_alert: true,
    probs: {
      healthy: 0.00257143,
      mild: 0.02771429,
      moderate: 0.92942857,
      severe: 0.03142857,
      proliferative: 0.00885714
    }
  }
}, {
  source: "./static/assets/diabetic-retinopathy/10236_right.jpg",
  data: {
    label: "Proliferative",
    sum_r: 0.458164658,
    sum_y: 0.999714286,
    red_alert: true,
    yellow_alert: true,
    probs: {
      healthy: 2.85714286e-4,
      mild: 0.0,
      moderate: 5.41549627e-1,
      severe: 3.35714286e-1,
      proliferative: 1.22450373e-1
    }
  }
}, {
  source: "./static/assets/diabetic-retinopathy/10376_left.jpg",
  data: {
    label: "Mild",
    sum_r: 0.011142857,
    sum_y: 0.424285714,
    red_alert: false,
    yellow_alert: true,
    probs: {
      healthy: 2.51714286e-1,
      mild: 3.24e-1,
      moderate: 4.13142857e-1,
      severe: 1.08571429e-2,
      proliferative: 2.85714286e-4
    }
  }
}, {
  source: "./static/assets/diabetic-retinopathy/10378_right.jpg",
  data: {
    label: "Proliferative",
    sum_r: 0.994,
    sum_y: 1,
    red_alert: true,
    yellow_alert: true,
    probs: {
      healthy: 0.0,
      mild: 0.0,
      moderate: 0.006,
      severe: 0.06057143,
      proliferative: 0.93342857
    }
  }
}, {
  source: "./static/assets/diabetic-retinopathy/10446_right.jpg",
  data: {
    label: "Moderate",
    sum_r: 0.019714286,
    sum_y: 0.962,
    red_alert: false,
    yellow_alert: true,
    probs: {
      healthy: 0.01114286,
      mild: 0.02685714,
      moderate: 0.94228571,
      severe: 0.018,
      proliferative: 0.00171429
    }
  }
}, {
  source: "./static/assets/diabetic-retinopathy/10551_right.jpg",
  data: {
    label: "Mild",
    sum_r: 0.001142857,
    sum_y: 0.075714286,
    red_alert: false,
    yellow_alert: true,
    probs: {
      healthy: 0.54542857,
      mild: 0.37885714,
      moderate: 0.07457143,
      severe: 0.00114286,
      proliferative: 0.0
    }
  }
}, {
  source: "./static/assets/diabetic-retinopathy/1071_right.jpg",
  data: {
    label: "Mild",
    sum_r: 0.001428571,
    sum_y: 0.755714286,
    red_alert: false,
    yellow_alert: true,
    probs: {
      healthy: 2.13142857e-1,
      mild: 3.11428571e-2,
      moderate: 7.54285714e-1,
      severe: 1.14285714e-3,
      proliferative: 2.85714286e-4
    }
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-458499360" + " " + "grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, "Synx - Impact on Healthcare.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "458499360",
    __self: this
  }, ".small{font-size:0.95rem;padding:0.3rem 0;}.study-illustration{margin:3rem auto;max-width:640px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYXZpZXJieXRlL24tci93ZWJzaXRlLTIwMTkvcGFnZXMvZGlhYmV0aWMtcmV0aW5vcGF0aHkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcU1PLEFBRzZCLEFBS0QsaUJBQ0QsQ0FMQyxlQU1uQixFQUxBIiwiZmlsZSI6Ii9Vc2Vycy9qYXZpZXJieXRlL24tci93ZWJzaXRlLTIwMTkvcGFnZXMvZGlhYmV0aWMtcmV0aW5vcGF0aHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvY3V0ZXJlc2V0Lmxlc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9ncmlkLmxlc3NcIjtcblxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFJhdGlvSW1hZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvcmF0aW8taW1hZ2UuanNcIjtcblxuaW1wb3J0IFRvcE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy90b3BuYXYuanNcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyLmpzXCI7XG5pbXBvcnQgQVBJVmlld2VyIGZyb20gXCIuLi9jb21wb25lbnRzL2FwaXZpZXdlci5qc1wiO1xuXG5jb25zdCBEQiA9IFtcbiAge1xuICAgIHNvdXJjZTogXCIuL3N0YXRpYy9hc3NldHMvZGlhYmV0aWMtcmV0aW5vcGF0aHkvMTAwMDRfbGVmdC5qcGdcIixcbiAgICBkYXRhOiB7XG4gICAgICBsYWJlbDogXCJObyBEUlwiLFxuICAgICAgc3VtX3I6IDAuMDAwMjg1NzE0Mjg1NzE0Mjg1LFxuICAgICAgc3VtX3k6IDAuMDE4ODU3MTQzLFxuICAgICAgcmVkX2FsZXJ0OiBmYWxzZSxcbiAgICAgIHllbGxvd19hbGVydDogZmFsc2UsXG4gICAgICBwcm9iczoge1xuICAgICAgICBoZWFsdGh5OiA5LjA4ODU3MTQzZS0xLFxuICAgICAgICBtaWxkOiA3LjIyODU3MTQzZS0yLFxuICAgICAgICBtb2RlcmF0ZTogMS44NTcxNDI4NmUtMixcbiAgICAgICAgc2V2ZXJlOiAyLjg1NzE0Mjg2ZS00LFxuICAgICAgICBwcm9saWZlcmF0aXZlOiAwLjBcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAge1xuICAgIHNvdXJjZTogXCIuL3N0YXRpYy9hc3NldHMvZGlhYmV0aWMtcmV0aW5vcGF0aHkvMTAwNjJfbGVmdC5qcGdcIixcbiAgICBkYXRhOiB7XG4gICAgICBsYWJlbDogXCJNb2RlcmF0ZVwiLFxuICAgICAgc3VtX3I6IDAuMDcyMjg1NzE0LFxuICAgICAgc3VtX3k6IDAuNjE4NTcxNDI5LFxuICAgICAgcmVkX2FsZXJ0OiBmYWxzZSxcbiAgICAgIHllbGxvd19hbGVydDogdHJ1ZSxcbiAgICAgIHByb2JzOiB7XG4gICAgICAgIGhlYWx0aHk6IDAuMjgxNDI4NTcsXG4gICAgICAgIG1pbGQ6IDAuMSxcbiAgICAgICAgbW9kZXJhdGU6IDAuNTQ2Mjg1NzEsXG4gICAgICAgIHNldmVyZTogMC4wNDQ1NzE0MyxcbiAgICAgICAgcHJvbGlmZXJhdGl2ZTogMC4wMjc3MTQyOVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICB7XG4gICAgc291cmNlOiBcIi4vc3RhdGljL2Fzc2V0cy9kaWFiZXRpYy1yZXRpbm9wYXRoeS8xMDEyNV9yaWdodC5qcGdcIixcbiAgICBkYXRhOiB7XG4gICAgICBsYWJlbDogXCJTZXZlcmVcIixcbiAgICAgIHN1bV9yOiAwLjAyOTE0Mjg1NyxcbiAgICAgIHN1bV95OiAwLjczMTE0Mjg1NyxcbiAgICAgIHJlZF9hbGVydDogZmFsc2UsXG4gICAgICB5ZWxsb3dfYWxlcnQ6IHRydWUsXG4gICAgICBwcm9iczoge1xuICAgICAgICBoZWFsdGh5OiAwLjE5Njg1NzE0LFxuICAgICAgICBtaWxkOiAwLjA3MixcbiAgICAgICAgbW9kZXJhdGU6IDAuNzAyLFxuICAgICAgICBzZXZlcmU6IDAuMDIxNzE0MjksXG4gICAgICAgIHByb2xpZmVyYXRpdmU6IDAuMDA3NDI4NTdcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAge1xuICAgIHNvdXJjZTogXCIuL3N0YXRpYy9hc3NldHMvZGlhYmV0aWMtcmV0aW5vcGF0aHkvMTAyMTlfbGVmdC5qcGdcIixcbiAgICBkYXRhOiB7XG4gICAgICBsYWJlbDogXCJNb2RlcmF0ZVwiLFxuICAgICAgc3VtX3I6IDAuMDQwMjg1NzE0LFxuICAgICAgc3VtX3k6IDAuOTY5NzE0Mjg2LFxuICAgICAgcmVkX2FsZXJ0OiBmYWxzZSxcbiAgICAgIHllbGxvd19hbGVydDogdHJ1ZSxcbiAgICAgIHByb2JzOiB7XG4gICAgICAgIGhlYWx0aHk6IDAuMDAyNTcxNDMsXG4gICAgICAgIG1pbGQ6IDAuMDI3NzE0MjksXG4gICAgICAgIG1vZGVyYXRlOiAwLjkyOTQyODU3LFxuICAgICAgICBzZXZlcmU6IDAuMDMxNDI4NTcsXG4gICAgICAgIHByb2xpZmVyYXRpdmU6IDAuMDA4ODU3MTRcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAge1xuICAgIHNvdXJjZTogXCIuL3N0YXRpYy9hc3NldHMvZGlhYmV0aWMtcmV0aW5vcGF0aHkvMTAyMzZfcmlnaHQuanBnXCIsXG4gICAgZGF0YToge1xuICAgICAgbGFiZWw6IFwiUHJvbGlmZXJhdGl2ZVwiLFxuICAgICAgc3VtX3I6IDAuNDU4MTY0NjU4LFxuICAgICAgc3VtX3k6IDAuOTk5NzE0Mjg2LFxuICAgICAgcmVkX2FsZXJ0OiB0cnVlLFxuICAgICAgeWVsbG93X2FsZXJ0OiB0cnVlLFxuICAgICAgcHJvYnM6IHtcbiAgICAgICAgaGVhbHRoeTogMi44NTcxNDI4NmUtNCxcbiAgICAgICAgbWlsZDogMC4wLFxuICAgICAgICBtb2RlcmF0ZTogNS40MTU0OTYyN2UtMSxcbiAgICAgICAgc2V2ZXJlOiAzLjM1NzE0Mjg2ZS0xLFxuICAgICAgICBwcm9saWZlcmF0aXZlOiAxLjIyNDUwMzczZS0xXG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHtcbiAgICBzb3VyY2U6IFwiLi9zdGF0aWMvYXNzZXRzL2RpYWJldGljLXJldGlub3BhdGh5LzEwMzc2X2xlZnQuanBnXCIsXG4gICAgZGF0YToge1xuICAgICAgbGFiZWw6IFwiTWlsZFwiLFxuICAgICAgc3VtX3I6IDAuMDExMTQyODU3LFxuICAgICAgc3VtX3k6IDAuNDI0Mjg1NzE0LFxuICAgICAgcmVkX2FsZXJ0OiBmYWxzZSxcbiAgICAgIHllbGxvd19hbGVydDogdHJ1ZSxcbiAgICAgIHByb2JzOiB7XG4gICAgICAgIGhlYWx0aHk6IDIuNTE3MTQyODZlLTEsXG4gICAgICAgIG1pbGQ6IDMuMjRlLTEsXG4gICAgICAgIG1vZGVyYXRlOiA0LjEzMTQyODU3ZS0xLFxuICAgICAgICBzZXZlcmU6IDEuMDg1NzE0MjllLTIsXG4gICAgICAgIHByb2xpZmVyYXRpdmU6IDIuODU3MTQyODZlLTRcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAge1xuICAgIHNvdXJjZTogXCIuL3N0YXRpYy9hc3NldHMvZGlhYmV0aWMtcmV0aW5vcGF0aHkvMTAzNzhfcmlnaHQuanBnXCIsXG4gICAgZGF0YToge1xuICAgICAgbGFiZWw6IFwiUHJvbGlmZXJhdGl2ZVwiLFxuICAgICAgc3VtX3I6IDAuOTk0LFxuICAgICAgc3VtX3k6IDEsXG4gICAgICByZWRfYWxlcnQ6IHRydWUsXG4gICAgICB5ZWxsb3dfYWxlcnQ6IHRydWUsXG4gICAgICBwcm9iczoge1xuICAgICAgICBoZWFsdGh5OiAwLjAsXG4gICAgICAgIG1pbGQ6IDAuMCxcbiAgICAgICAgbW9kZXJhdGU6IDAuMDA2LFxuICAgICAgICBzZXZlcmU6IDAuMDYwNTcxNDMsXG4gICAgICAgIHByb2xpZmVyYXRpdmU6IDAuOTMzNDI4NTdcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAge1xuICAgIHNvdXJjZTogXCIuL3N0YXRpYy9hc3NldHMvZGlhYmV0aWMtcmV0aW5vcGF0aHkvMTA0NDZfcmlnaHQuanBnXCIsXG4gICAgZGF0YToge1xuICAgICAgbGFiZWw6IFwiTW9kZXJhdGVcIixcbiAgICAgIHN1bV9yOiAwLjAxOTcxNDI4NixcbiAgICAgIHN1bV95OiAwLjk2MixcbiAgICAgIHJlZF9hbGVydDogZmFsc2UsXG4gICAgICB5ZWxsb3dfYWxlcnQ6IHRydWUsXG4gICAgICBwcm9iczoge1xuICAgICAgICBoZWFsdGh5OiAwLjAxMTE0Mjg2LFxuICAgICAgICBtaWxkOiAwLjAyNjg1NzE0LFxuICAgICAgICBtb2RlcmF0ZTogMC45NDIyODU3MSxcbiAgICAgICAgc2V2ZXJlOiAwLjAxOCxcbiAgICAgICAgcHJvbGlmZXJhdGl2ZTogMC4wMDE3MTQyOVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICB7XG4gICAgc291cmNlOiBcIi4vc3RhdGljL2Fzc2V0cy9kaWFiZXRpYy1yZXRpbm9wYXRoeS8xMDU1MV9yaWdodC5qcGdcIixcbiAgICBkYXRhOiB7XG4gICAgICBsYWJlbDogXCJNaWxkXCIsXG4gICAgICBzdW1fcjogMC4wMDExNDI4NTcsXG4gICAgICBzdW1feTogMC4wNzU3MTQyODYsXG4gICAgICByZWRfYWxlcnQ6IGZhbHNlLFxuICAgICAgeWVsbG93X2FsZXJ0OiB0cnVlLFxuICAgICAgcHJvYnM6IHtcbiAgICAgICAgaGVhbHRoeTogMC41NDU0Mjg1NyxcbiAgICAgICAgbWlsZDogMC4zNzg4NTcxNCxcbiAgICAgICAgbW9kZXJhdGU6IDAuMDc0NTcxNDMsXG4gICAgICAgIHNldmVyZTogMC4wMDExNDI4NixcbiAgICAgICAgcHJvbGlmZXJhdGl2ZTogMC4wXG4gICAgICB9XG4gICAgfVxuICB9LFxuICB7XG4gICAgc291cmNlOiBcIi4vc3RhdGljL2Fzc2V0cy9kaWFiZXRpYy1yZXRpbm9wYXRoeS8xMDcxX3JpZ2h0LmpwZ1wiLFxuICAgIGRhdGE6IHtcbiAgICAgIGxhYmVsOiBcIk1pbGRcIixcbiAgICAgIHN1bV9yOiAwLjAwMTQyODU3MSxcbiAgICAgIHN1bV95OiAwLjc1NTcxNDI4NixcbiAgICAgIHJlZF9hbGVydDogZmFsc2UsXG4gICAgICB5ZWxsb3dfYWxlcnQ6IHRydWUsXG4gICAgICBwcm9iczoge1xuICAgICAgICBoZWFsdGh5OiAyLjEzMTQyODU3ZS0xLFxuICAgICAgICBtaWxkOiAzLjExNDI4NTcxZS0yLFxuICAgICAgICBtb2RlcmF0ZTogNy41NDI4NTcxNGUtMSxcbiAgICAgICAgc2V2ZXJlOiAxLjE0Mjg1NzE0ZS0zLFxuICAgICAgICBwcm9saWZlcmF0aXZlOiAyLjg1NzE0Mjg2ZS00XG4gICAgICB9XG4gICAgfVxuICB9XG5dO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9wcyA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPlN5bnggLSBJbXBhY3Qgb24gSGVhbHRoY2FyZS48L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgIHtgXG4gICAgICAgIC5zbWFsbCB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xuICAgICAgICAgIHBhZGRpbmc6IDAuM3JlbSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0dWR5LWlsbHVzdHJhdGlvbiB7XG4gICAgICAgICAgbWFyZ2luOiAzcmVtIGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiA2NDBweDtcbiAgICAgICAgfVxuICAgICAgYH1cbiAgICA8L3N0eWxlPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1jb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaGVhZGVyXCI+XG4gICAgICAgIDxUb3BOYXYgVVJMPXtwcm9wcy5VUkx9IC8+XG5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic3ViaGVhZGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICA8aDE+SW1wYWN0IG9uIEhlYWx0aGNhcmUuPC9oMT5BIGNhc2Ugb24gRGlhYmV0aWMgUmV0aW5vcGF0aHkuXG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWNvbnRlbnRcIj5cblxuICAgICAgQnkgYXBwbHlpbmcgRGVlcCBMZWFybmluZyBhbmQgQ29tcHV0ZXIgVmlzaW9uLCB3ZSBjYW4gYWNoaWV2ZSBmYXN0ZXIgZGlhZ25vc3RpY3MsIHdoaWNoIGxlYWRzIHRvIHRoZSBvcHRpbWl6YXRpb24gb2YgdGhlIHdheSBwYXRpZW50cyBhcmUgdHJlYXRlZCBpbiB0aGUgd2hvbGUgcHJvY2VzcyBhbmQgdGhlIGRlY2lzaW9uIG1ha2luZyBmcm9tIHRoZSBkb2N0b3IuXG5cbiAgICAgIDxoMj5BYnN0cmFjdDwvaDI+XG4gICAgICBXZSBkZXZlbG9wZWQgYW4gYXV0b21hdGljIHNjcmVlbmluZy9kaWFnbm9zdGljIHN5c3RlbSBmb3IgZGlhYmV0aWNcbiAgICAgIHJldGlub3BhdGh5IHVzaW5nIGFuIGVuc2VtYmxlIG9mIGRlZXAgbmV1cmFsIG5ldHdvcmtzIGZvbGxvd2VkIGJ5IGEgcmFuZG9tXG4gICAgICBmb3Jlc3QgY2xhc3NpZmllci4gT3VyIHN5c3RlbSBoYXMgYSBzZW5zaXRpdml0eSBvZiA5NSUgYW5kIGEgc3BlY2lmaWNpdHlcbiAgICAgIG9mIDY1JS5cbiAgICAgIDxiciAvPjxiciAvPlxuICAgICAgPEFQSVZpZXdlciBkYXRhPXtEQn0gLz5cbiAgICAgIDxiciAvPlxuICAgICAgPGgzPlByb2JsZW0gb3ZlcnZpZXc8L2gzPlxuICAgICAgRGlhYmV0aWMgcmV0aW5vcGF0aHkgKERSKSwgYSBtYWpvciBtaWNyb3Zhc2N1bGFyIGNvbXBsaWNhdGlvbiBvZiBkaWFiZXRlcyxcbiAgICAgIGhhcyBhIHNpZ25pZmljYW50IGltcGFjdCBvbiB0aGUgd29ybGQncyBoZWFsdGggc3lzdGVtcy4gSW4gTWV4aWNvIGFsb25lXG4gICAgICB0aGlzIGRpc2Vhc2UgYWZmZWN0cyBtb3JlIHRoYW4gMTEgbWlsbGlvbiBwZW9wbGUgWzFdLiBHbG9iYWxseSwgdGhlIG51bWJlclxuICAgICAgb2YgcGVvcGxlIHdpdGggRFIgd2lsbCBncm93IGZyb20gMTI2LjYgbWlsbGlvbiBpbiAyMDEwIHRvIDE5MS4wIG1pbGxpb24gYnlcbiAgICAgIDIwMzAsIGFuZCBpdCBpcyBlc3RpbWF0ZWQgdGhhdCB0aGUgbnVtYmVyIHdpdGggdmlzaW9uLXRocmVhdGVuaW5nIGRpYWJldGljXG4gICAgICByZXRpbm9wYXRoeSAoVlREUikgd2lsbCBpbmNyZWFzZSBmcm9tIDM3LjMgbWlsbGlvbiB0byA1Ni4zIG1pbGxpb24sIGlmXG4gICAgICBwcm9tcHQgYWN0aW9uIGlzIG5vdCB0YWtlbi5cbiAgICAgIDxiciAvPjxiciAvPlxuICAgICAgRGVzcGl0ZSBncm93aW5nIGV2aWRlbmNlIGRvY3VtZW50aW5nIHRoZVxuICAgICAgZWZmZWN0aXZlbmVzcyBvZiByb3V0aW5lIERSIHNjcmVlbmluZyBhbmQgZWFybHkgdHJlYXRtZW50LCBEUiBmcmVxdWVudGx5XG4gICAgICBsZWFkcyB0byBwb29yIHZpc3VhbCBmdW5jdGlvbmluZyBhbmQgcmVwcmVzZW50cyB0aGUgbGVhZGluZyBjYXVzZSBvZlxuICAgICAgYmxpbmRuZXNzIGluIHdvcmtpbmctYWdlIHBvcHVsYXRpb25zLiBEUiBoYXMgYmVlbiBuZWdsZWN0ZWQgaW4gaGVhbHRoLWNhcmVcbiAgICAgIHJlc2VhcmNoIGFuZCBwbGFubmluZyBpbiBtYW55IGxvdy1pbmNvbWUgY291bnRyaWVzLCB3aGVyZSBhY2Nlc3MgdG9cbiAgICAgIHRyYWluZWQgZXllLWNhcmUgcHJvZmVzc2lvbmFscyBhbmQgdGVydGlhcnkgZXllLWNhcmUgc2VydmljZXMgbWF5IGJlXG4gICAgICBpbmFkZXF1YXRlLiBEZW1hbmQgZm9yLCBhcyB3ZWxsIGFzLCBzdXBwbHkgb2Ygc2VydmljZXMgbWF5IGJlIGEgcHJvYmxlbS5cbiAgICAgIFJhdGVzIG9mIGNvbXBsaWFuY2Ugd2l0aCBkaWFiZXRlcyBtZWRpY2F0aW9ucyBhbmQgYW5udWFsIGV5ZSBleGFtaW5hdGlvbnNcbiAgICAgIG1heSBiZSBsb3csIHRoZSByZWFzb25zIGZvciB3aGljaCBhcmUgbXVsdGlmYWN0b3JpYWwgWzJdLlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxoMz5Nb3RpdmF0aW9uPC9oMz5cbiAgICAgIFdpdGggdGhlIGludGVudGlvbiBvZiBkZXZlbG9waW5nIGFuIGF1dG9tYXRpYyBkaWFnbm9zdGljIHN5c3RlbSBmb3IgdGhlXG4gICAgICBzY3JlZW5pbmcgb2YgcGF0aWVudHMgd2l0aCBwb3NzaWJsZSBkaWFiZXRpYyByZXRpbm9wYXRoeSwgd2UgdXNlZCByZWNlbnRcbiAgICAgIGFkdmFuY2VzIGluIGNvbXB1dGVyIHZpc2lvbiBhbmQgZGVlcCBsZWFybmluZyB0byB0cmFpbiBhbiBlbnNhbWJsZSBvZlxuICAgICAgbmV1cmFsIG5ldHdvcmtzIHRvIGRldGVjdCB0aGlzIGRpc2Vhc2UgYW5kIGl0cyBsZXZlbCBvZiBwcm9ncmVzc2lvbi5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxoMj5Nb2RlbCBvdmVydmlldzwvaDI+XG4gICAgICA8aDM+RGF0YTwvaDM+XG4gICAgICBGb3IgdHJhaW5pbmcgYW5kIHZhbGlkYXRpb24sIHdlIHVzZWQgODUsMDAwIGhpZ2gtcmVzb2x1dGlvbiBpbWFnZXMsIGVhY2ggb25lIGNvbnNpc3Rpbmcgb2YgYSBkaWdpdGFsIHNsaXQgbGFtcCBjYXB0dXJlLCBsYWJlbGVkIHdpdGggdGhlIHByb3BlciBkaWFnbm9zaXMgKG1hZGUgYnkgYSBjbGluaWNpYW4gd2hvIHJhdGVkIHRoZSBzZXZlcml0eSBvZiB0aGUgZGlzZWFzZSkuIEVhY2ggaW1hZ2UgaXMgbGFiZWxlZCBhcyBiZWluZyBbMF0gbm8gRFIsIFsxXSBtaWxkIERSLCBbMl0gbW9kZXJhdGUgRFIsIFszXSBzZXZlcmUgRFIgb3IgWzRdIHByb2xpZmVyYXRpdmUgRFIuIFRoZSBwZXItY2xhc3MgcmVwcmVzZW50YXRpb24gaW4gdGhlIGRhdGFzZXQgaXMgYXMgZm9sbG93czpcbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5DbGFzczwvdGg+XG4gICAgICAgICAgICA8dGg+TnVtYmVyIG9mIGltYWdlczwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5ObyBEUjwvdGQ+XG4gICAgICAgICAgICA8dGQ+NjIsOTIwPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5NaWxkIERSPC90ZD5cbiAgICAgICAgICAgIDx0ZD41LDY1MDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+TW9kZXJhdGUgRFI8L3RkPlxuICAgICAgICAgICAgPHRkPjEyLDQ0MDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+U2V2ZXJlIERSPC90ZD5cbiAgICAgICAgICAgIDx0ZD4yLDAyMDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+UHJvbGlmZXJhdGl2ZSBEUjwvdGQ+XG4gICAgICAgICAgICA8dGQ+MSw2OTA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgICAgVGhlIGRhdGEgd2FzIHJhbmRvbWx5IGRpdmlkZWQgYmV0d2VlbiB0cmFpbiAoOTAlKSBhbmQgdGVzdCAoMTAlKSBzZXRzLlxuICAgICAgVGVzdCByZXN1bHRzIHdlcmUgdXNlZCBmb3IgZWFybHktc3RvcHBpbmcgZHVyaW5nIHRyYWluaW5nIGFuZCB0byBjaG9vc2VcbiAgICAgIHNvbWUgbWV0YXBhcmFtZXRlcnMgb2YgdGhlIG5ldXJhbCBuZXR3b3Jrcy4gQW4gZXhhbXBsZSBpbWFnZSBmcm9tIG9yaWdpbmFsXG4gICAgICBkYXRhLiBBbiBleGFtcGxlIGltYWdlIGZyb20gb3JpZ2luYWwgZGF0YS5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0dWR5LWlsbHVzdHJhdGlvblwiPlxuICAgICAgICA8UmF0aW9JbWFnZSBzcmM9XCIuL3N0YXRpYy9hc3NldHMvZGlhYmV0aWMtcmV0aW5vcGF0aHkvbm9ybWFsLmpwZ1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMz5QcmVwcm9jZXNzaW5nPC9oMz5cbiAgICAgIFRoZSBleWUgaXMgZGV0ZWN0ZWQgYW5kIHRoZSBpbWFnZSBpcyByZXNjYWxlZCBhbmQgYWRqdXN0ZWQgc28gdGhhdCB0aGUgZXllXG4gICAgICBpcyBhbHdheXMgaW4gdGhlIGNlbnRlciB3aXRoIGEgZml4ZWQgc2l6ZS4gUkdCIGNoYW5uZWxzIGFyZSBsb2NhbGx5XG4gICAgICBub3JtYWxpemVkIHdpdGggYSBtb3ZpbmcgZ2F1c3NpYW4ga2VybmVsIGluIG9yZGVyIHRvIGhpZ2hsaWdodCBsb2NhbCBpbWFnZVxuICAgICAgdmFyaWFiaWxpdHkuIFRoaXMgYWxsb3dzIHRoZSBtb2RlbCB0byBiZSBhZ25vc3RpYyB0byBnbG9iYWwgbGlnaHRcbiAgICAgIGludGVuc2l0eSBhbmQgb3RoZXIgZmFjdG9ycyBkZXBlbmRpbmcgb24gdGhlIHBhcnRpY3VsYXIgY2FtZXJhIHVzZWQuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0dWR5LWlsbHVzdHJhdGlvblwiPlxuICAgICAgICA8UmF0aW9JbWFnZSBzcmM9XCIuL3N0YXRpYy9hc3NldHMvZGlhYmV0aWMtcmV0aW5vcGF0aHkvcHJlcHJvY2Vzc2VkLmpwZ1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIEFuIGV4YW1wbGUgaW1hZ2UgZnJvbSBvcmlnaW5hbCBkYXRhLiBUaGlzIGltYWdlIHJlcHJlc2VudCB0aGUgZmluYWwgaW1hZ2VcbiAgICAgIGZyb20gYSBQcm9saWZlcmF0aXZlIERSIHN0dWR5IHVzZWQgZm9yIG5ldXJhbCBuZXR3b3JrIHRyYWluaW5nLlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxoMz5OZXVyYWwgTmV0d29ya3M8L2gzPlxuICAgICAgU2V2ZXJhbCBuZXVyYWwgbmV0d29ya3Mgd2VyZSB0cmFpbmVkIHVzaW5nIGRpZmZlcmVudCBhcmNoaXRlY3R1cmVzXG4gICAgICAoSW5jZXB0aW9uVjMsIFJlc25ldDUwKS4gVGhlIHRyYWluaW5nIGxldmVyYWdlZCB0cmFuc2ZlciBsZWFybmluZyBmcm9tIGFuXG4gICAgICBJbWFnZW5ldCBtb2RlbCwgYW5kIHdhcyBkb25lIGluIHN0YWdlcyBmcm9tIHRoZSB0b3AtbW9zdCBsYXllcnMgZ3JhZHVhbGx5XG4gICAgICBkaW1pbmlzaGluZyB0aGUgbGVhcm5pbmcgcmF0ZS4gVHdvIHdlZWtzIG9mIDItZ3B1IHNlcnZlcnMgd2VyZSB1c2VkIGZvclxuICAgICAgdGhlIHRyYWluaW5nIG9mIGVhY2ggbW9kZWwuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0dWR5LWlsbHVzdHJhdGlvblwiPlxuICAgICAgICA8UmF0aW9JbWFnZSBzcmM9XCIuL3N0YXRpYy9hc3NldHMvZGlhYmV0aWMtcmV0aW5vcGF0aHkvaGVhdG1hcC5qcGdcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICBBbiBleGFtcGxlIGltYWdlIGZyb20gb3JpZ2luYWwgZGF0YS4gQWZ0ZXIgdHJhaW5pbmcsIGEgbmV1cmFsIG5ldHdvcmsgaXNcbiAgICAgIGNhcGFibGUgdG8gZXZhbHVhdGUgcHJlcHJlY2Vzc2VkIGltYWdlcywgdGhpcyBpbWFnZSBzaG93cyB0aGUgaGVhdG1hcFxuICAgICAgd2hlcmUgZGFtYWdlIGlzIGJlaW5nIGZvdW5kIG9uIGEgUHJvbGlmZXJhdGl2ZSBEUiBwYXRpZW50LlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxoMz5SYW5kb20gRm9yZXN0PC9oMz5cbiAgICAgIFdlIHRyYWluZWQgYSBSYW5kb20gRm9yZXN0IHRvIGNvbWJpbmUgdGhlIHJlc3VsdHMgb2YgdGhlIGRpZmZlcmVudCBuZXVyYWxcbiAgICAgIG5ldHdvcmtzIG9uIGJvdGggZXllcyBvZiB0aGUgcGF0aWVudCB3aXRoIG90aGVyIHN0YXRpc3RpY3MgZnJvbSB0aGVcbiAgICAgIGltYWdlcywgdG8gcHJlZGljdCB0aGUgZmluYWwgcHJvYmFiaWxpdGllcyB0aGF0IGEgcGFydGljdWxhciBpbWFnZVxuICAgICAgY29ycmVzcG9uZHMgdG8gYSBjZXJ0YWluIGxldmVsIG9mIERSLiBUaGlzIHN0YWdlIGFzc2lnbnMgdG8gZWFjaCBpbWFnZSBhXG4gICAgICB2ZWN0b3Igd2l0aCB0aGUgcHJvYmFiaWxpdGllcyBvZiBlYWNoIGNsYXNzLlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxoMz5MYWJlbCBhZ2dyZWdhdGlvbjwvaDM+XG4gICAgICBNb3N0IGd1aWRlbGluZXMgcmVjb21tZW5kIGFubnVhbCBzY3JlZW5pbmcgZm9yIHRob3NlIHdpdGggbm8gcmV0aW5vcGF0aHlcbiAgICAgIG9yIG1pbGQgZGlhYmV0aWMgcmV0aW5vcGF0aHksIHJlcGVhdCBleGFtaW5hdGlvbiBpbiA2IG1vbnRocyBmb3IgbW9kZXJhdGVcbiAgICAgIGRpYWJldGljIHJldGlub3BhdGh5LCBhbmQgYW4gb3BodGhhbG1vbG9naXN0IHJlZmVycmFsIGZvciB0cmVhdG1lbnRcbiAgICAgIGV2YWx1YXRpb24gd2l0aGluIGEgZmV3IHdlZWtzIHRvIG1vbnRocyBmb3Igc2V2ZXJlIG9yIHByb2xpZmVyYXRpdmVcbiAgICAgIGRpYWJldGljIHJldGlub3BhdGh5IFszXS5cbiAgICAgIDxiciAvPlxuICAgICAgPGJyIC8+XG4gICAgICBGb2xsb3dpbmcgb3RoZXIgc3R1ZGllcyBzdWNoIGFzIFszXSwgd2UgZGVmaW5lIGEgbmVnYXRpdmUgY2FzZSBhcyBuby1EUiBvclxuICAgICAgbWlsZC1EUiwgYW5kIGEgcG9zaXRpdmUgY2FzZSBhcyBtb2RlcmF0ZSwgc2V2ZXJlIG9yIHByb2xpZmVyYXRpdmUgRFIuIFRoZVxuICAgICAgdmVjdG9yIG9mIHByb2JhYmlsaXRpZXMgaXMgdGhlcmVmb3JlIHNpbXBsaWZpZWQgaW50byB0aGUgcHJvYmFiaWxpdHkgb2ZcbiAgICAgIGJlaW5nIGEgcG9zaXRpdmUgRFIgY2FzZS4gV2UgY2FuIG5vdyBjcmVhdGUgYSBST0MgY3VydmUgdG8gY2hvb3NlIHRoZVxuICAgICAgdGhyZXNob2xkIGZvciBvdXIgcHJlZGljdGlvbi4gQSBmYW1pbHkgb2YgbW9kZWxzIHdpdGggZGlmZmVyZW50XG4gICAgICBzZW5zaWJpbGl0eSBhbmQgc3BlY2lmaWNpdHkuIEluIGZpZ3VyZSBYIHdlIGNhbiBzZWUgdGhlIGRpZmZlcmVudFxuICAgICAgcG9zc2liaWxpdGllcy4gQW1vbmcgdGhlc2Ugd2UgY2hvc2UgYSBtb2RlbCB3aXRoIDk1JSBzZW5zaXRpdml0eSBhbmQgYVxuICAgICAgY29ycmVzcG9uZGluZyA2NSUgc3BlY2lmaWNpdHkgc28gdGhhdCBpdCBzZXJ2ZXMgYXMgYSBnb29kIGZpcnN0IHNjcmVlbmluZ1xuICAgICAgbGF5ZXIgaW4gYSBkaWFnbm9zdGljIHBpcGVsaW5lLlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIEluIGEgc2ltaWxhciBmYXNoaW9uLCB3ZSBjcmVhdGVkIGEgUmVkIGFsZXJ0IHVzaW5nIG9ubHkgc2V2ZXJlIGFuZFxuICAgICAgcHJvbGlmZXJhdGl2ZSBEUiBhcyBwb3NpdGl2ZSBjYXNlcyBhbmQgbG9va2luZyBmb3IgYSBzZW5zaXRpdml0eSBvZiAwLjkuXG4gICAgICBUaGVzZSB0d28gYWxlcnRzLCB5ZWxsb3cgYW5kIHJlZCBoYXZlIHRoZSBmb2xsb3dpbmcgc3RhdGlzdGljczpcbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5DbGFzczwvdGg+XG4gICAgICAgICAgICA8dGg+WWVsbG93IGFsZXJ0PC90aD5cbiAgICAgICAgICAgIDx0aD5SZWQgYWxlcnQ8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+Tm8gRFI8L3RkPlxuICAgICAgICAgICAgPHRkPjE4JTwvdGQ+XG4gICAgICAgICAgICA8dGQ+MSU8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPk1pbGQgRFI8L3RkPlxuICAgICAgICAgICAgPHRkPjU3JTwvdGQ+XG4gICAgICAgICAgICA8dGQ+MiU8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPk1vZGVyYXRlIERSPC90ZD5cbiAgICAgICAgICAgIDx0ZD45MCU8L3RkPlxuICAgICAgICAgICAgPHRkPjM4JTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+U2V2ZXJlIERSPC90ZD5cbiAgICAgICAgICAgIDx0ZD45OCU8L3RkPlxuICAgICAgICAgICAgPHRkPjg5JTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+UHJvbGlmZXJhdGl2ZSBEUjwvdGQ+XG4gICAgICAgICAgICA8dGQ+OTglPC90ZD5cbiAgICAgICAgICAgIDx0ZD45MSU8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPk5vIERSIG9yIE1pbGQgRFI8L3RkPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8Yj4zNSU8L2I+e1wiIFwifVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsXCI+KGdlbmVyYWwgc3BlY2lmaWNpdHkgPSA2NSUpPC9kaXY+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPjElPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD5Nb2RlcmF0ZSwgU2V2ZXJlIG9yIFByb2xpZmVyYXRpdmU8L3RkPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8Yj45NSU8L2I+IDxkaXYgY2xhc3NOYW1lPVwic21hbGxcIj4oZ2VuZXJhbCBzZW5zaXZpdHkpPC9kaXY+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkPjUwJTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+U2V2ZXJlIG9yIFByb2xpZmVyYXRpdmU8L3RkPlxuICAgICAgICAgICAgPHRkPjk4JTwvdGQ+XG4gICAgICAgICAgICA8dGQ+OTAlPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICAgIFRhYmxlIDEuIFRoZSBwcm9iYWJpbGl0eSBvZiB0cmlnZ2VyaW5nIHRoZSBZZWxsb3cgb3IgUmVkIGFsZXJ0cyB3aGVuIHRoZVxuICAgICAgcGF0aWVudCBoYXMgYSBjZXJ0YWluIGNsYXNzIGxldmVsIG9mIHJldGlub3BhdGh5LiBXZSBzZWUgdGhhdCB0aGUgUmVkXG4gICAgICBhbGVydCBpcyBvbmx5IGxpa2VseSB0byBiZSB0cmlnZ2VyZWQgd2l0aCBNb2RlcmF0ZSwgU2V2ZXJlIG9yXG4gICAgICBQcm9saWZlcmF0aXZlIERSLiBZZWxsb3cgYWxlcnQgaXMgbW9yZSBjb25zZXJ2YXRpdmUgYW5kIGlzIGFibGUgdG8gZGV0ZWN0XG4gICAgICA5NSUgb2YgYWxsIHBvc2l0aXZlIGNhc2VzLiBJbiBjb21iaW5hdGlvbiwgYm90aCBhbGVydHMgY2FuIGJlIGV4dHJlbWVseVxuICAgICAgdXNlZnVsIGZvciB0aGUgZWFybHkgZGV0ZWN0aW9uIG9mIGRpYWJldGljIHJldGlub3BhdGh5LlxuICAgICAgPGJyIC8+XG4gICAgICA8YnIgLz5cbiAgICAgIDxoMz5GdXJ0aGVyIHN0ZXBzIGZvciBpbXByb3Zpbmcgb2YgdGhlIG1vZGVsIHBlcmZvcm1hbmNlOjwvaDM+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICBBIG1vcmUgcm9idXN0IGxhYmVsaW5nIGZvbGxvd2luZyB0aGUgZXhhbXBsZSBvZiBbM10gd291bGQgZGVmaW5pdGVseVxuICAgICAgICAgIGRlY3JlYXNlIHRoZSBwcmVkaWN0aW9uIGVycm9yLiBJbiBvcmRlciB0byBkbyB0aGlzIHdlIHdpbGwgY29sbGFib3JhdGVcbiAgICAgICAgICB3aXRoIGEgdGVhbSBvZiBvcGh0aGFsbW9sb2dpc3RzIGZvciBzeXN0ZW1hdGljIHJvYnVzdCBkaWFnbm9zaXMgYW5kXG4gICAgICAgICAgbG9jYWxpemF0aW9uIG9mIHdvdW5kcy5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIER1cmluZyB0aGUgUmFuZG9tIEZvcmVzdCBzdGFnZSwgdGhlIGluY2x1c2lvbiBvZiBhZGRpdGlvbmFsIGRhdGEgZnJvbVxuICAgICAgICAgIHRoZSBwYXRpZW50cyAoc3VjaCBhcyBnbHVjb3NlIGxldmVscywgYWdlLCBldGMpIHdvdWxkIGJlIHZlcnlcbiAgICAgICAgICB2YWx1YWJsZS5cbiAgICAgICAgPC9saT5cbiAgICAgICAgPGxpPlxuICAgICAgICAgIEN1cnJlbnRseSB0aGUgbW9kZWwgdXNlcyBhbiBlbnNlbWJsZSBvZiAzIG5ldXJhbCBuZXR3b3Jrcy4gQnJpbmdpbmdcbiAgICAgICAgICB0aGlzIHRvIGF0IGxlYXN0IDEwIGNvdWxkIHByb3ZlIHZlcnkgZWZmZWN0aXZlIGluIGluY3JlYXNpbmcgdGhlXG4gICAgICAgICAgYWNjdXJhY3kgb2YgdGhlIG1vZGVsLiBJbiBhZGRpdGlvbiwgd29ya2luZyB3aXRoIGxhcmdlciAoYmV0dGVyXG4gICAgICAgICAgcmVzb2x1dGlvbikgaW1hZ2VzIGNvdWxkIGFsbG93IHVzIHRvIGRldGVjdCBzbWFsbGVyIHdvdW5kcy4gVGhlc2UgdHdvXG4gICAgICAgICAgb25seSBhbW91bnQgdG8gaGF2aW5nIG1vcmUgY29tcHV0aW5nIHBvd2VyIGR1cmluZyB0cmFpbmluZy5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG5cbiAgICA8Rm9vdGVyIGh1ZVJvdGF0aW9uPXtwcm9wcy5odWVSb3RhdGlvbn0gLz5cbiAgPC9kaXY+XG4pO1xuIl19 */\n/*@ sourceURL=/Users/javierbyte/n-r/website-2019/pages/diabetic-retinopathy.js */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-458499360" + " " + "grid-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-458499360" + " " + "grid-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_topnav_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
    URL: props.URL,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-458499360" + " " + "subheader-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "Impact on Healthcare."), "A case on Diabetic Retinopathy."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-458499360" + " " + "grid-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, "By applying Deep Learning and Computer Vision, we can achieve faster diagnostics, which leads to the optimization of the way patients are treated in the whole process and the decision making from the doctor.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, "Abstract"), "We developed an automatic screening/diagnostic system for diabetic retinopathy using an ensemble of deep neural networks followed by a random forest classifier. Our system has a sensitivity of 95% and a specificity of 65%.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_apiviewer_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: DB,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }, "Problem overview"), "Diabetic retinopathy (DR), a major microvascular complication of diabetes, has a significant impact on the world's health systems. In Mexico alone this disease affects more than 11 million people [1]. Globally, the number of people with DR will grow from 126.6 million in 2010 to 191.0 million by 2030, and it is estimated that the number with vision-threatening diabetic retinopathy (VTDR) will increase from 37.3 million to 56.3 million, if prompt action is not taken.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }), "Despite growing evidence documenting the effectiveness of routine DR screening and early treatment, DR frequently leads to poor visual functioning and represents the leading cause of blindness in working-age populations. DR has been neglected in health-care research and planning in many low-income countries, where access to trained eye-care professionals and tertiary eye-care services may be inadequate. Demand for, as well as, supply of services may be a problem. Rates of compliance with diabetes medications and annual eye examinations may be low, the reasons for which are multifactorial [2].", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, "Motivation"), "With the intention of developing an automatic diagnostic system for the screening of patients with possible diabetic retinopathy, we used recent advances in computer vision and deep learning to train an ensamble of neural networks to detect this disease and its level of progression.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, "Model overview"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, "Data"), "For training and validation, we used 85,000 high-resolution images, each one consisting of a digital slit lamp capture, labeled with the proper diagnosis (made by a clinician who rated the severity of the disease). Each image is labeled as being [0] no DR, [1] mild DR, [2] moderate DR, [3] severe DR or [4] proliferative DR. The per-class representation in the dataset is as follows:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }, "Class"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, "Number of images"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, "No DR"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }, "62,920")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, "Mild DR"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, "5,650")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, "Moderate DR"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, "12,440")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }, "Severe DR"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, "2,020")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }, "Proliferative DR"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }, "1,690")))), "The data was randomly divided between train (90%) and test (10%) sets. Test results were used for early-stopping during training and to choose some metaparameters of the neural networks. An example image from original data. An example image from original data.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-458499360" + " " + "study-illustration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ratio_image_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    src: "./static/assets/diabetic-retinopathy/normal.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, "Preprocessing"), "The eye is detected and the image is rescaled and adjusted so that the eye is always in the center with a fixed size. RGB channels are locally normalized with a moving gaussian kernel in order to highlight local image variability. This allows the model to be agnostic to global light intensity and other factors depending on the particular camera used.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-458499360" + " " + "study-illustration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ratio_image_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    src: "./static/assets/diabetic-retinopathy/preprocessed.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  })), "An example image from original data. This image represent the final image from a Proliferative DR study used for neural network training.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }, "Neural Networks"), "Several neural networks were trained using different architectures (InceptionV3, Resnet50). The training leveraged transfer learning from an Imagenet model, and was done in stages from the top-most layers gradually diminishing the learning rate. Two weeks of 2-gpu servers were used for the training of each model.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-458499360" + " " + "study-illustration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ratio_image_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    src: "./static/assets/diabetic-retinopathy/heatmap.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  })), "An example image from original data. After training, a neural network is capable to evaluate preprecessed images, this image shows the heatmap where damage is being found on a Proliferative DR patient.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }, "Random Forest"), "We trained a Random Forest to combine the results of the different neural networks on both eyes of the patient with other statistics from the images, to predict the final probabilities that a particular image corresponds to a certain level of DR. This stage assigns to each image a vector with the probabilities of each class.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: this
  }, "Label aggregation"), "Most guidelines recommend annual screening for those with no retinopathy or mild diabetic retinopathy, repeat examination in 6 months for moderate diabetic retinopathy, and an ophthalmologist referral for treatment evaluation within a few weeks to months for severe or proliferative diabetic retinopathy [3].", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: this
  }), "Following other studies such as [3], we define a negative case as no-DR or mild-DR, and a positive case as moderate, severe or proliferative DR. The vector of probabilities is therefore simplified into the probability of being a positive DR case. We can now create a ROC curve to choose the threshold for our prediction. A family of models with different sensibility and specificity. In figure X we can see the different possibilities. Among these we chose a model with 95% sensitivity and a corresponding 65% specificity so that it serves as a good first screening layer in a diagnostic pipeline.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: this
  }), "In a similar fashion, we created a Red alert using only severe and proliferative DR as positive cases and looking for a sensitivity of 0.9. These two alerts, yellow and red have the following statistics:", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 362
    },
    __self: this
  }, "Class"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363
    },
    __self: this
  }, "Yellow alert"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
    },
    __self: this
  }, "Red alert"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 367
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369
    },
    __self: this
  }, "No DR"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370
    },
    __self: this
  }, "18%"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371
    },
    __self: this
  }, "1%")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 373
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 374
    },
    __self: this
  }, "Mild DR"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: this
  }, "57%"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376
    },
    __self: this
  }, "2%")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 378
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 379
    },
    __self: this
  }, "Moderate DR"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380
    },
    __self: this
  }, "90%"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  }, "38%")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    },
    __self: this
  }, "Severe DR"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: this
  }, "98%"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: this
  }, "89%")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: this
  }, "Proliferative DR"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390
    },
    __self: this
  }, "98%"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391
    },
    __self: this
  }, "91%")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: this
  }, "No DR or Mild DR"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396
    },
    __self: this
  }, "35%"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-458499360" + " " + "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 397
    },
    __self: this
  }, "(general specificity = 65%)")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399
    },
    __self: this
  }, "1%")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402
    },
    __self: this
  }, "Moderate, Severe or Proliferative"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    },
    __self: this
  }, "95%"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-458499360" + " " + "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    },
    __self: this
  }, "(general sensivity)")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406
    },
    __self: this
  }, "50%")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409
    },
    __self: this
  }, "Severe or Proliferative"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410
    },
    __self: this
  }, "98%"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, "90%")))), "Table 1. The probability of triggering the Yellow or Red alerts when the patient has a certain class level of retinopathy. We see that the Red alert is only likely to be triggered with Moderate, Severe or Proliferative DR. Yellow alert is more conservative and is able to detect 95% of all positive cases. In combination, both alerts can be extremely useful for the early detection of diabetic retinopathy.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423
    },
    __self: this
  }, "Further steps for improving of the model performance:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425
    },
    __self: this
  }, "A more robust labeling following the example of [3] would definitely decrease the prediction error. In order to do this we will collaborate with a team of ophthalmologists for systematic robust diagnosis and localization of wounds."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: this
  }, "During the Random Forest stage, the inclusion of additional data from the patients (such as glucose levels, age, etc) would be very valuable."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-458499360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436
    },
    __self: this
  }, "Currently the model uses an ensemble of 3 neural networks. Bringing this to at least 10 could prove very effective in increasing the accuracy of the model. In addition, working with larger (better resolution) images could allow us to detect smaller wounds. These two only amount to having more computing power during training."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_footer_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    hueRotation: props.hueRotation,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=diabetic-retinopathy.js.27d3c98ef7f2204d1133.hot-update.js.map