(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Liste-liste-module"],{

/***/ "0dBE":
/*!***************************************!*\
  !*** ./src/app/Liste/liste.module.ts ***!
  \***************************************/
/*! exports provided: listePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listePageModule", function() { return listePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _liste_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./liste.page */ "fq/W");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _liste_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./liste-routing.module */ "fvDU");









var listePageModule = /** @class */ (function () {
    function listePageModule() {
    }
    listePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _liste_page__WEBPACK_IMPORTED_MODULE_6__["liste"] }]),
                _liste_routing_module__WEBPACK_IMPORTED_MODULE_8__["listePageRoutingModule"],
            ],
            declarations: [_liste_page__WEBPACK_IMPORTED_MODULE_6__["liste"]]
        })
    ], listePageModule);
    return listePageModule;
}());



/***/ }),

/***/ "Uk6V":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Liste/liste.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Liste des Coupons\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <img class=\"style_log\" src=\"../assets/logoGoStyle.png\">\n    </ion-toolbar>\n  </ion-header>\n  <ion-list>\n    <ion-item>\n      <ion-label>COUPON10</ion-label>\n      <ion-label>10/03/21</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Mega Man X</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>The Legend of Zelda</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Pac-Man</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>Super Mario World</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "d85A":
/*!***************************************!*\
  !*** ./src/app/Liste/liste.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0ZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "fq/W":
/*!*************************************!*\
  !*** ./src/app/Liste/liste.page.ts ***!
  \*************************************/
/*! exports provided: liste */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "liste", function() { return liste; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_liste_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./liste.page.html */ "Uk6V");
/* harmony import */ var _liste_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./liste.page.scss */ "d85A");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var liste = /** @class */ (function () {
    function liste() {
    }
    liste.ctorParameters = function () { return []; };
    liste = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-liste',
            template: _raw_loader_liste_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_liste_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], liste);
    return liste;
}());



/***/ }),

/***/ "fvDU":
/*!***********************************************!*\
  !*** ./src/app/Liste/liste-routing.module.ts ***!
  \***********************************************/
/*! exports provided: listePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listePageRoutingModule", function() { return listePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _liste_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./liste.page */ "fq/W");




var routes = [
    {
        path: '',
        component: _liste_page__WEBPACK_IMPORTED_MODULE_3__["liste"],
    }
];
var listePageRoutingModule = /** @class */ (function () {
    function listePageRoutingModule() {
    }
    listePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], listePageRoutingModule);
    return listePageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=Liste-liste-module.js.map