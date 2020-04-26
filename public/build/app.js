(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)
 // Need jQuery? Install it with "yarn add jquery", then uncomment to import it.
// import $ from 'jquery';


var table = document.getElementById("table");
var status = document.getElementById("status");
var app = angular__WEBPACK_IMPORTED_MODULE_1___default.a.module('myApp', []).config(function ($interpolateProvider) {
  $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});
app.controller('Ctrl', function ($scope, $http) {
  $http.get("/grades").then(function (response) {
    $scope.grades = response.data;
    status.classList.add('d-none');
    table.classList.remove('d-none');
  });
});

/***/ })

},[["./assets/js/app.js","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qcyJdLCJuYW1lcyI6WyJ0YWJsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdGF0dXMiLCJhcHAiLCJhbmd1bGFyIiwibW9kdWxlIiwiY29uZmlnIiwiJGludGVycG9sYXRlUHJvdmlkZXIiLCJzdGFydFN5bWJvbCIsImVuZFN5bWJvbCIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCIkaHR0cCIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImdyYWRlcyIsImRhdGEiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7OztBQU9BO0NBR0E7QUFDQTs7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQWQ7QUFDQSxJQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFmO0FBRUEsSUFBTUUsR0FBRyxHQUFHQyw4Q0FBTyxDQUFDQyxNQUFSLENBQWUsT0FBZixFQUF3QixFQUF4QixFQUE0QkMsTUFBNUIsQ0FBbUMsVUFBQ0Msb0JBQUQsRUFBMEI7QUFDckVBLHNCQUFvQixDQUFDQyxXQUFyQixDQUFpQyxLQUFqQyxFQUF3Q0MsU0FBeEMsQ0FBa0QsS0FBbEQ7QUFDSCxDQUZXLENBQVo7QUFJQU4sR0FBRyxDQUFDTyxVQUFKLENBQWUsTUFBZixFQUF1QixVQUFDQyxNQUFELEVBQVNDLEtBQVQsRUFBbUI7QUFDdENBLE9BQUssQ0FBQ0MsR0FBTixDQUFVLFNBQVYsRUFDS0MsSUFETCxDQUNVLFVBQUNDLFFBQUQsRUFBYztBQUNoQkosVUFBTSxDQUFDSyxNQUFQLEdBQWdCRCxRQUFRLENBQUNFLElBQXpCO0FBQ0FmLFVBQU0sQ0FBQ2dCLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLFFBQXJCO0FBQ0FwQixTQUFLLENBQUNtQixTQUFOLENBQWdCRSxNQUFoQixDQUF1QixRQUF2QjtBQUNILEdBTEw7QUFNSCxDQVBELEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi4vY3NzL2FwcC5jc3MnO1xuXG4vLyBOZWVkIGpRdWVyeT8gSW5zdGFsbCBpdCB3aXRoIFwieWFybiBhZGQganF1ZXJ5XCIsIHRoZW4gdW5jb21tZW50IHRvIGltcG9ydCBpdC5cbi8vIGltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgYW5ndWxhciBmcm9tICdhbmd1bGFyJztcblxuY29uc3QgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYmxlXCIpXG5jb25zdCBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c1wiKVxuXG5jb25zdCBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnbXlBcHAnLCBbXSkuY29uZmlnKCgkaW50ZXJwb2xhdGVQcm92aWRlcikgPT4ge1xuICAgICRpbnRlcnBvbGF0ZVByb3ZpZGVyLnN0YXJ0U3ltYm9sKCd7W3snKS5lbmRTeW1ib2woJ31dfScpO1xufSk7XG5cbmFwcC5jb250cm9sbGVyKCdDdHJsJywgKCRzY29wZSwgJGh0dHApID0+IHtcbiAgICAkaHR0cC5nZXQoXCIvZ3JhZGVzXCIpXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgJHNjb3BlLmdyYWRlcyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICBzdGF0dXMuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICAgICAgICB0YWJsZS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgICAgfSk7XG59KTsiXSwic291cmNlUm9vdCI6IiJ9