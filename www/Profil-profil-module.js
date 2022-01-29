(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Profil-profil-module"],{

/***/ "2wUN":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Profil/profil.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <img class=\"style_log\" src=\"../assets/logoGoStyle.png\">\n    </ion-toolbar>\n  </ion-header>\n  <div class=\"profile\">\n    <div class=\"avatar\">\n      <img class=\"style_log\" src=\"../assets/user.png\">\n    </div>\n    <div class=\"profil_informations\">\n      <div class=\"name\">\n        FirstName LastName\n      </div>\n      <div class=\"general_information\">\n        <div class=\"birthday_city\">\n          <div class=\"city\">\n            <div>\n              Ville:\n            </div>\n            <div>\n              Nantes\n            </div>\n          </div>\n          <div class=\"birthday\">\n            <div>\n              Anniversaire:\n            </div>\n            <div>\n              22/03/2021\n            </div>\n          </div>\n        </div>\n        <div class=\"email\">\n          <div>\n            email:\n          </div>\n          <div>\n            user@user.fr\n          </div>\n        </div>\n      </div>\n    </div>\n    <ion-button color=\"medium\">\n      <ion-label>Déconnexion</ion-label>\n  </ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "JLVP":
/*!*****************************************!*\
  !*** ./src/app/Profil/profil.module.ts ***!
  \*****************************************/
/*! exports provided: profilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profilPageModule", function() { return profilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _profil_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profil.page */ "VK67");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _profil_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profil-routing.module */ "hF7E");








var profilPageModule = /** @class */ (function () {
    function profilPageModule() {
    }
    profilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
                _profil_routing_module__WEBPACK_IMPORTED_MODULE_7__["profilPageRoutingModule"]
            ],
            declarations: [_profil_page__WEBPACK_IMPORTED_MODULE_5__["profil"]]
        })
    ], profilPageModule);
    return profilPageModule;
}());



/***/ }),

/***/ "VK67":
/*!***************************************!*\
  !*** ./src/app/Profil/profil.page.ts ***!
  \***************************************/
/*! exports provided: profil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profil", function() { return profil; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profil_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profil.page.html */ "2wUN");
/* harmony import */ var _profil_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profil.page.scss */ "mjs8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




var profil = /** @class */ (function () {
    function profil() {
    }
    profil.ctorParameters = function () { return []; };
    profil = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-profil',
            template: _raw_loader_profil_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_profil_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        })
    ], profil);
    return profil;
}());



/***/ }),

/***/ "hF7E":
/*!*************************************************!*\
  !*** ./src/app/Profil/profil-routing.module.ts ***!
  \*************************************************/
/*! exports provided: profilPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profilPageRoutingModule", function() { return profilPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _profil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profil.page */ "VK67");




var routes = [
    {
        path: '',
        component: _profil_page__WEBPACK_IMPORTED_MODULE_3__["profil"],
    }
];
var profilPageRoutingModule = /** @class */ (function () {
    function profilPageRoutingModule() {
    }
    profilPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], profilPageRoutingModule);
    return profilPageRoutingModule;
}());



/***/ }),

/***/ "mjs8":
/*!*****************************************!*\
  !*** ./src/app/Profil/profil.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.avatar {\n  padding-top: 30px;\n  text-align-last: center;\n}\n\n.general_information {\n  padding-top: 60px;\n}\n\n.profil_information {\n  display: flex;\n  flex-direction: column;\n}\n\n.name {\n  padding-top: 40px;\n  text-align-last: center;\n}\n\n.birthday_city {\n  display: flex;\n  flex-direction: row;\n}\n\n.city {\n  padding-right: 100px;\n}\n\n.email {\n  padding-top: 60px;\n  text-align-last: center;\n}\n\n.style_log {\n  width: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3Byb2ZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtBQUVKOztBQUFBO0VBQ0ksaUJBQUE7QUFHSjs7QUFEQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUlKOztBQUZBO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtBQUtKOztBQUhBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBTUo7O0FBSkE7RUFDSSxvQkFBQTtBQU9KOztBQUxBO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtBQVFKOztBQU5BO0VBQ0ksVUFBQTtBQVNKIiwiZmlsZSI6InByb2ZpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYXZhdGFyIHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcbn1cbi5nZW5lcmFsX2luZm9ybWF0aW9uIHtcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbn1cbi5wcm9maWxfaW5mb3JtYXRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5uYW1lIHtcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcbn1cbi5iaXJ0aGRheV9jaXR5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4uY2l0eSB7XG4gICAgcGFkZGluZy1yaWdodDogMTAwcHg7XG59XG4uZW1haWwge1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xufVxuLnN0eWxlX2xvZ3tcbiAgICB3aWR0aDogNzAlO1xufSJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=Profil-profil-module.js.map