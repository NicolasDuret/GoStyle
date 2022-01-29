(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Coupon-coupon-module"],{

/***/ "2aPE":
/*!*****************************************!*\
  !*** ./src/app/Coupon/coupon.module.ts ***!
  \*****************************************/
/*! exports provided: couponPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "couponPageModule", function() { return couponPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _coupon_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coupon.page */ "wkbN");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _coupon_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./coupon-routing.module */ "GEe0");









var couponPageModule = /** @class */ (function () {
    function couponPageModule() {
    }
    couponPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _coupon_page__WEBPACK_IMPORTED_MODULE_6__["coupon"] }]),
                _coupon_routing_module__WEBPACK_IMPORTED_MODULE_8__["couponPageRoutingModule"],
            ],
            declarations: [_coupon_page__WEBPACK_IMPORTED_MODULE_6__["coupon"]]
        })
    ], couponPageModule);
    return couponPageModule;
}());



/***/ }),

/***/ "4Sho":
/*!*****************************************!*\
  !*** ./src/app/Coupon/coupon.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".coupon {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.image_coupon {\n  padding-top: 30px;\n  text-align-last: center;\n}\n\n.general_information_coupon {\n  padding-top: 45px;\n}\n\n.coupon_informations {\n  display: flex;\n  flex-direction: column;\n}\n\n.name {\n  padding-top: 40px;\n  text-align-last: center;\n}\n\n.bloc_information {\n  text-align-last: center;\n}\n\n.date_conditions_pourcent {\n  display: flex;\n  flex-direction: row;\n  padding-top: 15px;\n  justify-content: center;\n}\n\n.pourcent_condition {\n  padding-right: 50px;\n}\n\n.ville_utils {\n  padding-top: 60px;\n  text-align-last: center;\n}\n\n.style_log {\n  width: 70%;\n}\n\n.pourcent {\n  padding-left: 35px;\n}\n\n.dates_validites {\n  padding-left: 20px;\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvdXBvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtBQUVKOztBQUFBO0VBQ0ksaUJBQUE7QUFHSjs7QUFEQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUlKOztBQUZBO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtBQUtKOztBQUhBO0VBQ0ksdUJBQUE7QUFNSjs7QUFKQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFPSjs7QUFMQTtFQUNJLG1CQUFBO0FBUUo7O0FBTkE7RUFDSSxpQkFBQTtFQUNBLHVCQUFBO0FBU0o7O0FBUEE7RUFDSSxVQUFBO0FBVUo7O0FBUkE7RUFDSSxrQkFBQTtBQVdKOztBQVRBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQVlKIiwiZmlsZSI6ImNvdXBvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY291cG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pbWFnZV9jb3Vwb24ge1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xufVxuLmdlbmVyYWxfaW5mb3JtYXRpb25fY291cG9uIHtcbiAgICBwYWRkaW5nLXRvcDogNDVweDtcbn1cbi5jb3Vwb25faW5mb3JtYXRpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubmFtZSB7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XG59XG4uYmxvY19pbmZvcm1hdGlvbiB7XG4gICAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7XG59XG4uZGF0ZV9jb25kaXRpb25zX3BvdXJjZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucG91cmNlbnRfY29uZGl0aW9uIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xufVxuLnZpbGxlX3V0aWxzIHtcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbiAgICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcbn1cbi5zdHlsZV9sb2d7XG4gICAgd2lkdGg6IDcwJTtcbn1cbi5wb3VyY2VudHtcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHhcbn1cbi5kYXRlc192YWxpZGl0ZXN7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "A5j8":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Coupon/coupon.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar class=\"logo\">\n      <img class=\"style_log\" src=\"../assets/logoGoStyle.png\">\n    </ion-toolbar>\n  </ion-header>\n  <div class=\"coupon\">\n    <div class=\"image_coupon\">\n      <img class=\"style_log\" src=\"../assets/user.png\">\n    </div>\n    <div class=\"coupon_informations\">\n      <div class=\"name\">\n        CouponName\n      </div>\n      <div class=\"general_information_coupon\">\n        <div class=\"bloc_information\">\n          <div class=\"date_conditions_pourcent\">\n              <div class=\"pourcent_condition\">\n                <div class=\"pourcent\">\n                  <div>\n                    pourcentage:\n                  </div>\n                  <div>\n                    10%\n                  </div>\n                </div>\n              </div>\n              <div class=\"dates_validites\">\n                <div>\n                  valable du:\n                </div>\n                <div>\n                  20/03/2021\n                </div>\n              </div>\n          </div>\n          <div class=\"date_conditions_pourcent\">\n            <div class=\"pourcent_condition\">\n              <div>\n                Conditions d'utilisations:\n              </div>\n              <div>\n                Avoir un minimum <br>d’achat de 35€\n              </div>\n            </div>\n            <div>\n              <div>\n                au:\n              </div>\n              <div>\n                22/03/2021\n              </div>\n            </div>\n          </div>\n          <div class=\"ville_utils\">\n            <div>\n              Ville d'utilisation:\n            </div>\n            <div>\n              Nantes\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "GEe0":
/*!*************************************************!*\
  !*** ./src/app/Coupon/coupon-routing.module.ts ***!
  \*************************************************/
/*! exports provided: couponPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "couponPageRoutingModule", function() { return couponPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _coupon_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coupon.page */ "wkbN");




var routes = [
    {
        path: '',
        component: _coupon_page__WEBPACK_IMPORTED_MODULE_3__["coupon"],
    }
];
var couponPageRoutingModule = /** @class */ (function () {
    function couponPageRoutingModule() {
    }
    couponPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], couponPageRoutingModule);
    return couponPageRoutingModule;
}());



/***/ }),

/***/ "wkbN":
/*!***************************************!*\
  !*** ./src/app/Coupon/coupon.page.ts ***!
  \***************************************/
/*! exports provided: coupon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coupon", function() { return coupon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_coupon_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./coupon.page.html */ "A5j8");
/* harmony import */ var _coupon_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coupon.page.scss */ "4Sho");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var coupon = /** @class */ (function () {
    function coupon() {
    }
    coupon.ctorParameters = function () { return []; };
    coupon = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-coupon',
            template: _raw_loader_coupon_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_coupon_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], coupon);
    return coupon;
}());



/***/ })

}]);
//# sourceMappingURL=Coupon-coupon-module.js.map