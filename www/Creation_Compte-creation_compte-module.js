(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Creation_Compte-creation_compte-module"],{

/***/ "/nE1":
/*!*********************************************************!*\
  !*** ./src/app/Creation_Compte/creation_compte.page.ts ***!
  \*********************************************************/
/*! exports provided: creation_compte */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creation_compte", function() { return creation_compte; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_creation_compte_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./creation_compte.page.html */ "L+2I");
/* harmony import */ var _creation_compte_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./creation_compte.page.scss */ "ztET");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var creation_compte = /** @class */ (function () {
    function creation_compte() {
    }
    creation_compte.ctorParameters = function () { return []; };
    creation_compte = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-creation_compte',
            template: _raw_loader_creation_compte_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_creation_compte_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], creation_compte);
    return creation_compte;
}());



/***/ }),

/***/ "L+2I":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Creation_Compte/creation_compte.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Creation d'un Compte\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <form [formGroup]=\"ionicForm\" (ngSubmit)=\"submitForm()\" novalidate> -->\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Nom</ion-label>\n      <ion-input type=\"text\" required></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Prenom</ion-label>\n      <ion-input type=\"text\" required></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input type=\"email\" required></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Mot de Passe</ion-label>\n      <ion-input type=\"password\" required></ion-input>\n    </ion-item>\n\n    <!-- Radio buttons -->\n    <ion-radio-group lines=\"full\">\n      <ion-list-header>\n        <ion-label>Genre</ion-label>\n      </ion-list-header>\n\n      <ion-item>\n        <ion-label>Homme</ion-label>\n        <ion-radio slot=\"start\" value=\"male\" checked></ion-radio>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Femme</ion-label>\n        <ion-radio slot=\"start\" value=\"female\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n\n\n    <ion-row>\n      <ion-col>\n        <ion-button type=\"submit\" color=\"danger\" expand=\"block\">Valider</ion-button>\n      </ion-col>\n    </ion-row>\n  <!-- </form> -->\n</ion-content>\n");

/***/ }),

/***/ "uRRc":
/*!***********************************************************!*\
  !*** ./src/app/Creation_Compte/creation_compte.module.ts ***!
  \***********************************************************/
/*! exports provided: creation_comptePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creation_comptePageModule", function() { return creation_comptePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _creation_compte_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./creation_compte.page */ "/nE1");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _creation_compte_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./creation_compte-routing.module */ "vU65");








var creation_comptePageModule = /** @class */ (function () {
    function creation_comptePageModule() {
    }
    creation_comptePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
                _creation_compte_routing_module__WEBPACK_IMPORTED_MODULE_7__["creation_comptePageRoutingModule"]
            ],
            declarations: [_creation_compte_page__WEBPACK_IMPORTED_MODULE_5__["creation_compte"]]
        })
    ], creation_comptePageModule);
    return creation_comptePageModule;
}());



/***/ }),

/***/ "vU65":
/*!*******************************************************************!*\
  !*** ./src/app/Creation_Compte/creation_compte-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: creation_comptePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creation_comptePageRoutingModule", function() { return creation_comptePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _creation_compte_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./creation_compte.page */ "/nE1");




var routes = [
    {
        path: '',
        component: _creation_compte_page__WEBPACK_IMPORTED_MODULE_3__["creation_compte"],
    }
];
var creation_comptePageRoutingModule = /** @class */ (function () {
    function creation_comptePageRoutingModule() {
    }
    creation_comptePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], creation_comptePageRoutingModule);
    return creation_comptePageRoutingModule;
}());



/***/ }),

/***/ "ztET":
/*!***********************************************************!*\
  !*** ./src/app/Creation_Compte/creation_compte.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGlvbl9jb21wdGUucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=Creation_Compte-creation_compte-module.js.map