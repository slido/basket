(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-history-history-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html": 
        /*!***************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html ***!
          \***************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>History</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" *ngIf=\"hystoryList\">\n<!--<ion-button (click)=\"delete()\">delete</ion-button>-->\n  <ion-card *ngFor=\"let post of hystoryList?.reverse()\">\n    <ion-card-header>\n      <ion-card-title [innerHTML]=\"post?.title.rendered\"></ion-card-title>\n      <ion-card-subtitle>{{ post?.date_gmt | date }}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <img [src]=\"post?.media_url\">\n      <div [innerHTML]=\"post?.excerpt.rendered\"></div>\n      <ion-button expand=\"full\" fill=\"solid\" [routerLink]=\"['/tabs/home/post/' + post?.id]\" class=\"ion-text-right\">Read More...</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n");
            /***/ 
        }),
        /***/ "./src/app/pages/history/history.module.ts": 
        /*!*************************************************!*\
          !*** ./src/app/pages/history/history.module.ts ***!
          \*************************************************/
        /*! exports provided: HistoryPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function () { return HistoryPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./history.page */ "./src/app/pages/history/history.page.ts");
            var HistoryPageModule = /** @class */ (function () {
                function HistoryPageModule() {
                }
                return HistoryPageModule;
            }());
            HistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    imports: [
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"] }])
                    ],
                    declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]]
                })
            ], HistoryPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/history/history.page.scss": 
        /*!*************************************************!*\
          !*** ./src/app/pages/history/history.page.scss ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hpc3RvcnkvaGlzdG9yeS5wYWdlLnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/history/history.page.ts": 
        /*!***********************************************!*\
          !*** ./src/app/pages/history/history.page.ts ***!
          \***********************************************/
        /*! exports provided: HistoryPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryPage", function () { return HistoryPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _providers_word_press_word_press__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../providers/word-press/word-press */ "./src/app/providers/word-press/word-press.ts");
            var HistoryPage = /** @class */ (function () {
                function HistoryPage(wp) {
                    this.wp = wp;
                }
                HistoryPage.prototype.ionViewWillEnter = function () {
                    this.load();
                };
                HistoryPage.prototype.load = function () {
                    if (localStorage.getItem('hystoryList') !== null) {
                        this.hystoryList = JSON.parse(localStorage.getItem('hystoryList'));
                        console.log(this.hystoryList);
                    }
                };
                HistoryPage.prototype.delete = function () {
                    this.hystoryList = [];
                };
                return HistoryPage;
            }());
            HistoryPage.ctorParameters = function () { return [
                { type: _providers_word_press_word_press__WEBPACK_IMPORTED_MODULE_2__["WordpressService"] }
            ]; };
            HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-history',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./history.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/history/history.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./history.page.scss */ "./src/app/pages/history/history.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_word_press_word_press__WEBPACK_IMPORTED_MODULE_2__["WordpressService"]])
            ], HistoryPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-history-history-module-es2015.js.map
//# sourceMappingURL=pages-history-history-module-es5.js.map
//# sourceMappingURL=pages-history-history-module-es5.js.map