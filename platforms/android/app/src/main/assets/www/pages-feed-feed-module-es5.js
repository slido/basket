var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-feed-feed-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed/feed.page.html": 
        /*!*********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed/feed.page.html ***!
          \*********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Feed</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid fixed>\n    <ion-row>\n      <!-- [checked] postsavi aktivan tag -->\n      <ion-col size=\"12\">\n        <ion-segment scrollable=\"true\" [(ngModel)]=\"selectedIdx\">\n          <ion-segment-button (ionSelect)=\"getPostByCategories(category.id)\" [checked]=\"category?.name === 'Free Agency'\" *ngFor=\"let category of categories; first as isFirst\">\n            <ion-label>{{ category.name }}</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-card *ngFor=\"let post of postsPerCat\">\n    <ion-card-header>\n      <ion-card-title [innerHTML]=\"post.title.rendered\"></ion-card-title>\n      <ion-card-subtitle>{{ post.date_gmt | date }}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <img [src]=\"post.media_url\">\n      <div [innerHTML]=\"post.excerpt.rendered\"></div>\n      <ion-button expand=\"full\" fill=\"solid\" [routerLink]=\"['/tabs/home/post/' + post.id]\" class=\"ion-text-right\">Read More...</ion-button>\n    </ion-card-content>\n  </ion-card>\n<!--\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMore($event)\">\n    <ion-infinite-scroll-content loadingText=\"Loading more posts...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n-->\n\n</ion-content>\n");
            /***/ 
        }),
        /***/ "./src/app/pages/feed/feed.module.ts": 
        /*!*******************************************!*\
          !*** ./src/app/pages/feed/feed.module.ts ***!
          \*******************************************/
        /*! exports provided: FeedPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function () { return FeedPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _feed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feed.page */ "./src/app/pages/feed/feed.page.ts");
            var FeedPageModule = /** @class */ (function () {
                function FeedPageModule() {
                }
                return FeedPageModule;
            }());
            FeedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    imports: [
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _feed_page__WEBPACK_IMPORTED_MODULE_6__["FeedPage"] }])
                    ],
                    declarations: [_feed_page__WEBPACK_IMPORTED_MODULE_6__["FeedPage"]]
                })
            ], FeedPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/feed/feed.page.scss": 
        /*!*******************************************!*\
          !*** ./src/app/pages/feed/feed.page.scss ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZlZWQvZmVlZC5wYWdlLnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/feed/feed.page.ts": 
        /*!*****************************************!*\
          !*** ./src/app/pages/feed/feed.page.ts ***!
          \*****************************************/
        /*! exports provided: FeedPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPage", function () { return FeedPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _providers_word_press_word_press__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../providers/word-press/word-press */ "./src/app/providers/word-press/word-press.ts");
            /* harmony import */ var _providers_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../providers/loader.service */ "./src/app/providers/loader.service.ts");
            var FeedPage = /** @class */ (function () {
                function FeedPage(wp, loadingService) {
                    this.wp = wp;
                    this.loadingService = loadingService;
                    this.categories = [];
                    this.categoryID = 0;
                    this.postsPerCat = [];
                    this.page = 1;
                    this.count = null;
                    this.selectedIdx = 657;
                    this.isFirst = false;
                }
                FeedPage.prototype.ngOnInit = function () {
                    this.getCategories();
                };
                FeedPage.prototype.getCategories = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.loadingService.showLoading('ifOfLoading')];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/, this.wp.getAllCategories().subscribe(function (res) {
                                            _this.categories = res;
                                            console.log(_this.categories);
                                            _this.getPostByCategories(_this.categories[0].id);
                                            _this.loadingService.dismissLoader('ifOfLoading');
                                        })];
                            }
                        });
                    });
                };
                FeedPage.prototype.getCatByID = function (id) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.loadingService.showLoading('ifOfLoading2')];
                                case 1:
                                    _a.sent();
                                    this.wp.getCathegory(id).subscribe(function (res) {
                                        _this.categories = res;
                                        console.log(_this.categories);
                                        _this.loadingService.dismissLoader('ifOfLoading2');
                                    });
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                FeedPage.prototype.getPostByCategories = function (id) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.loadingService.showLoading('ifOfLoading3')];
                                case 1:
                                    _a.sent();
                                    this.first = false;
                                    this.isFirst = false;
                                    this.wp.getPostsByCategory(id).subscribe(function (res) {
                                        _this.postsPerCat = res;
                                        _this.count = _this.wp.totalPosts;
                                        //console.log(this.postsPerCat);
                                        //console.log(this.categories);
                                        _this.loadingService.dismissLoader('ifOfLoading3');
                                    });
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                return FeedPage;
            }());
            FeedPage.ctorParameters = function () { return [
                { type: _providers_word_press_word_press__WEBPACK_IMPORTED_MODULE_2__["WordpressService"] },
                { type: _providers_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }
            ]; };
            FeedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-feed',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feed.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed/feed.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feed.page.scss */ "./src/app/pages/feed/feed.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_word_press_word_press__WEBPACK_IMPORTED_MODULE_2__["WordpressService"], _providers_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]])
            ], FeedPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-feed-feed-module-es2015.js.map
//# sourceMappingURL=pages-feed-feed-module-es5.js.map
//# sourceMappingURL=pages-feed-feed-module-es5.js.map