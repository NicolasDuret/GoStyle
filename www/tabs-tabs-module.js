(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"],{

/***/ "AHrv":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"scan\">\n      <ion-icon name=\"camera\"></ion-icon>\n      <ion-label>Scan</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"profil\">\n      <ion-icon name=\"man\"></ion-icon>\n      <ion-label>Profil</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"liste\">\n      <ion-icon name=\"list\"></ion-icon>\n      <ion-label>Ma liste</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n");

/***/ }),

/***/ "MJr+":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tabs.page.html */ "AHrv");
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page.scss */ "PkIa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var TabsPage = /** @class */ (function () {
    function TabsPage() {
    }
    TabsPage.ctorParameters = function () { return []; };
    TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-tabs',
            template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "PkIa":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "hO9l":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "kB8F");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "MJr+");







var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "kB8F":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "MJr+");




var routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'scan',
                loadChildren: function () { return Promise.all(/*! import() | scan-scan-module */[__webpack_require__.e("common"), __webpack_require__.e("scan-scan-module")]).then(__webpack_require__.bind(null, /*! ../scan/scan.module */ "FXPj")).then(function (m) { return m.ScanPageModule; }); }
            },
            {
                path: 'profil',
                loadChildren: function () { return Promise.all(/*! import() | Profil-profil-module */[__webpack_require__.e("common"), __webpack_require__.e("Profil-profil-module")]).then(__webpack_require__.bind(null, /*! ../Profil/profil.module */ "JLVP")).then(function (m) { return m.profilPageModule; }); }
            },
            {
                path: 'liste',
                loadChildren: function () { return Promise.all(/*! import() | Liste-liste-module */[__webpack_require__.e("common"), __webpack_require__.e("Liste-liste-module")]).then(__webpack_require__.bind(null, /*! ../Liste/liste.module */ "0dBE")).then(function (m) { return m.listePageModule; }); }
            },
            {
                path: 'connexion',
                loadChildren: function () { return Promise.all(/*! import() | Connexion-connexion-module */[__webpack_require__.e("common"), __webpack_require__.e("Connexion-connexion-module")]).then(__webpack_require__.bind(null, /*! ../Connexion/connexion.module */ "NTiO")).then(function (m) { return m.connexionPageModule; }); }
            },
            {
                path: 'coupon',
                loadChildren: function () { return Promise.all(/*! import() | Coupon-coupon-module */[__webpack_require__.e("common"), __webpack_require__.e("Coupon-coupon-module")]).then(__webpack_require__.bind(null, /*! ../Coupon/coupon.module */ "2aPE")).then(function (m) { return m.couponPageModule; }); }
            },
            {
                path: 'creation_compte',
                loadChildren: function () { return Promise.all(/*! import() | Creation_Compte-creation_compte-module */[__webpack_require__.e("common"), __webpack_require__.e("Creation_Compte-creation_compte-module")]).then(__webpack_require__.bind(null, /*! ../Creation_Compte/creation_compte.module */ "uRRc")).then(function (m) { return m.creation_comptePageModule; }); }
            },
            {
                path: 'creation_coupon',
                loadChildren: function () { return Promise.all(/*! import() | Creation_coupon-creation_coupon-module */[__webpack_require__.e("common"), __webpack_require__.e("Creation_coupon-creation_coupon-module")]).then(__webpack_require__.bind(null, /*! ../Creation_coupon/creation_coupon.module */ "mwYE")).then(function (m) { return m.creation_couponPageModule; }); }
            },
            {
                path: '',
                redirectTo: '/tabs/liste',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/profil',
        pathMatch: 'full'
    }
];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-tabs-module.js.map