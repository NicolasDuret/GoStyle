(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Connexion-connexion-module"],{

/***/ "FM2R":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Connexion/connexion.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Connexion\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">CONNEXION</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <app-explore-container name=\"Connexion page\"></app-explore-container>\n</ion-content>\n");

/***/ }),

/***/ "GgP+":
/*!****************************************!*\
  !*** ./src/app/Connexion/connexion.ts ***!
  \****************************************/
/*! exports provided: connexion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connexion", function() { return connexion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_connexion_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./connexion.page.html */ "FM2R");
/* harmony import */ var _connexion_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connexion.page.scss */ "gGd5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var connexion = /** @class */ (function () {
    function connexion() {
    }
    connexion.ctorParameters = function () { return []; };
    connexion = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-connexion',
            template: _raw_loader_connexion_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_connexion_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], connexion);
    return connexion;
}());



/***/ }),

/***/ "NTiO":
/*!***********************************************!*\
  !*** ./src/app/Connexion/connexion.module.ts ***!
  \***********************************************/
/*! exports provided: connexionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connexionPageModule", function() { return connexionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _connexion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./connexion */ "GgP+");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _connexion_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./connexion-routing.module */ "uvzs");








var connexionPageModule = /** @class */ (function () {
    function connexionPageModule() {
    }
    connexionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
                _connexion_routing_module__WEBPACK_IMPORTED_MODULE_7__["connexionPageRoutingModule"]
            ],
            declarations: [_connexion__WEBPACK_IMPORTED_MODULE_5__["connexion"]]
        })
    ], connexionPageModule);
    return connexionPageModule;
}());



/***/ }),

/***/ "gGd5":
/*!***********************************************!*\
  !*** ./src/app/Connexion/connexion.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25uZXhpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "uvzs":
/*!*******************************************************!*\
  !*** ./src/app/Connexion/connexion-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: connexionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connexionPageRoutingModule", function() { return connexionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _connexion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connexion */ "GgP+");




var routes = [
    {
        path: '',
        component: _connexion__WEBPACK_IMPORTED_MODULE_3__["connexion"],
    }
];
var connexionPageRoutingModule = /** @class */ (function () {
    function connexionPageRoutingModule() {
    }
    connexionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], connexionPageRoutingModule);
    return connexionPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=Connexion-connexion-module.js.map