(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <!-- defaultHref=\"/tabs/home\" -->\n      <ion-button (click)=\"myBackButton()\">\n        <ion-icon slot=\"icon-only\" name=\"md-arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title [innerHTML]=\"Settings\"></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <!--<ion-button (click)=\"delete()\">delete</ion-button>-->\n  <ion-list>\n    <br><br>\n    <ion-button expand=\"full\" color=\"secondary\" (click)=\"deleteHystory()\">Delete Hystory</ion-button>\n    <br><br>\n    <ion-button expand=\"full\" color=\"secondary\" (click)=\"deleteFavorites()\">Delete Favorites</ion-button>\n\n  </ion-list>\n\n</ion-content>\n");
            /***/ 
        }),
        /***/ "./src/app/pages/settings/settings.module.ts": 
        /*!***************************************************!*\
          !*** ./src/app/pages/settings/settings.module.ts ***!
          \***************************************************/
        /*! exports provided: SettingsPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function () { return SettingsPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "./src/app/pages/settings/settings.page.ts");
            var SettingsPageModule = /** @class */ (function () {
                function SettingsPageModule() {
                }
                return SettingsPageModule;
            }());
            SettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    imports: [
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"] }])
                    ],
                    declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
                })
            ], SettingsPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/settings/settings.page.scss": 
        /*!***************************************************!*\
          !*** ./src/app/pages/settings/settings.page.scss ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLnBhZ2Uuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/pages/settings/settings.page.ts": 
        /*!*************************************************!*\
          !*** ./src/app/pages/settings/settings.page.ts ***!
          \*************************************************/
        /*! exports provided: SettingsPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function () { return SettingsPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var SettingsPage = /** @class */ (function () {
                function SettingsPage(location) {
                    this.location = location;
                }
                SettingsPage.prototype.deleteHystory = function () {
                    localStorage.setItem('hystoryList', null);
                };
                SettingsPage.prototype.deleteFavorites = function () {
                    localStorage.setItem('favoriteList', null);
                };
                SettingsPage.prototype.myBackButton = function () {
                    this.location.back();
                };
                return SettingsPage;
            }());
            SettingsPage.ctorParameters = function () { return [
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
            ]; };
            SettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-settings',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings/settings.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.page.scss */ "./src/app/pages/settings/settings.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
            ], SettingsPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-settings-settings-module-es2015.js.map
//# sourceMappingURL=pages-settings-settings-module-es5.js.map
//# sourceMappingURL=pages-settings-settings-module-es5.js.map