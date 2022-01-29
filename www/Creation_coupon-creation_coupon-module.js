(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Creation_coupon-creation_coupon-module"],{

/***/ "A/4j":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Creation_coupon/creation_coupon.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title> Creation d'un Coupon </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate> -->\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">Nom</ion-label>\n    <ion-input type=\"text\" required></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">Description</ion-label>\n    <ion-input type=\"text\" required></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">Date de Début</ion-label>\n    <ion-input type=\"date\" required></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">Date de Fin</ion-label>\n    <ion-input type=\"date\" required></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">Montant Minimum</ion-label>\n    <ion-input type=\"number\" required></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">Ville</ion-label>\n    <ion-input type=\"text\" required></ion-input>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-label position=\"floating\">Nombre d'utilisation possible</ion-label>\n    <ion-input type=\"number\" required></ion-input>\n  </ion-item>\n  <br />\n  <ion-row>\n    <ion-col>\n      <ion-button type=\"submit\" color=\"danger\" expand=\"block\"\n        >Valider</ion-button\n      >\n    </ion-col>\n  </ion-row>\n  <!-- </form> -->\n</ion-content>\n");

/***/ }),

/***/ "CTr7":
/*!***********************************************************!*\
  !*** ./src/app/Creation_coupon/creation_coupon.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGlvbl9jb3Vwb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "am8m":
/*!*********************************************************!*\
  !*** ./src/app/Creation_coupon/creation_coupon.page.ts ***!
  \*********************************************************/
/*! exports provided: creation_coupon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creation_coupon", function() { return creation_coupon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_creation_coupon_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./creation_coupon.page.html */ "A/4j");
/* harmony import */ var _creation_coupon_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./creation_coupon.page.scss */ "CTr7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var creation_coupon = /** @class */ (function () {
    function creation_coupon() {
    }
    creation_coupon.ctorParameters = function () { return []; };
    creation_coupon = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-creation_coupon',
            template: _raw_loader_creation_coupon_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_creation_coupon_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], creation_coupon);
    return creation_coupon;
}());



/***/ }),

/***/ "mwYE":
/*!***********************************************************!*\
  !*** ./src/app/Creation_coupon/creation_coupon.module.ts ***!
  \***********************************************************/
/*! exports provided: creation_couponPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creation_couponPageModule", function() { return creation_couponPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _creation_coupon_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./creation_coupon.page */ "am8m");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _creation_coupon_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./creation_coupon-routing.module */ "u5S+");








var creation_couponPageModule = /** @class */ (function () {
    function creation_couponPageModule() {
    }
    creation_couponPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
                _creation_coupon_routing_module__WEBPACK_IMPORTED_MODULE_7__["creation_couponPageRoutingModule"]
            ],
            declarations: [_creation_coupon_page__WEBPACK_IMPORTED_MODULE_5__["creation_coupon"]]
        })
    ], creation_couponPageModule);
    return creation_couponPageModule;
}());



/***/ }),

/***/ "u5S+":
/*!*******************************************************************!*\
  !*** ./src/app/Creation_coupon/creation_coupon-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: creation_couponPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creation_couponPageRoutingModule", function() { return creation_couponPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _creation_coupon_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./creation_coupon.page */ "am8m");




var routes = [
    {
        path: '',
        component: _creation_coupon_page__WEBPACK_IMPORTED_MODULE_3__["creation_coupon"],
    }
];
var creation_couponPageRoutingModule = /** @class */ (function () {
    function creation_couponPageRoutingModule() {
    }
    creation_couponPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], creation_couponPageRoutingModule);
    return creation_couponPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=Creation_coupon-creation_coupon-module.js.map