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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-post-post-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/post/post.page.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/post/post.page.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header no-border>\n  <ion-toolbar translucent>\n    <ion-buttons slot=\"start\">\n\n      <ion-button (click)=\"myBackButton()\" class=\"bckBtn\" fill=\"clear\">\n        <ion-icon slot=\"icon-only\" name=\"md-arrow-back\"></ion-icon>\n      </ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content fullscreen>\n\n\n  <div *ngIf=\"post\">\n    <div class=\"imgWrapper\">\n      <ion-title class=\"dTitle\" [innerHTML]=\"post?.title.rendered\"></ion-title>\n      <img [src]=\"post.media_url\" [style.width]=\"'100%'\">\n    </div>\n    <div class=\"author\">Author: {{ user?.name}}</div><br>\n    <div class=\"cath\">Cath: {{ category?.name}}</div><br>\n    <div class=\"cath\">Tag: {{ tagName?.name }}</div><br><br>\n    &nbsp;&nbsp;&nbsp;<ion-button class=\"favBtn\" (click)=\"addToFavorites(post.id)\" >\n      <ion-icon name=\"heart\" end></ion-icon>\n    </ion-button>\n\n    <div [innerHTML]=\"post.content.rendered\" class=\"ion-padding\"></div>\n  </div>\n\n\n  <div class=\"cath\" *ngIf=\"post\">Related Articles:</div><br>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"10\">\n        <ion-slides #slideWithNav class=\"slide-padding sli3\" pager=\"true\" [options]=\"sliderConfig\" >\n            <ion-slide *ngFor=\"let post of posts\">\n              <ion-card [routerLink]=\"['/tabs/home/post/' + post.id]\">\n                <img [src]=\"post.fimg_url\" alt=\"{{post.title.rendered}}\"/>\n\n                  <ion-card-subtitle [innerHTML]=\"post.title.rendered\"></ion-card-subtitle>\n\n              </ion-card>\n            </ion-slide>\n        </ion-slides>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");
            /***/ 
        }),
        /***/ "./src/app/pages/home/post/post.module.ts": 
        /*!************************************************!*\
          !*** ./src/app/pages/home/post/post.module.ts ***!
          \************************************************/
        /*! exports provided: PostPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageModule", function () { return PostPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _post_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post.page */ "./src/app/pages/home/post/post.page.ts");
            var PostPageModule = /** @class */ (function () {
                function PostPageModule() {
                }
                return PostPageModule;
            }());
            PostPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
                    imports: [
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _post_page__WEBPACK_IMPORTED_MODULE_6__["PostPage"] }])
                    ],
                    declarations: [_post_page__WEBPACK_IMPORTED_MODULE_6__["PostPage"]]
                })
            ], PostPageModule);
            /***/ 
        }),
        /***/ "./src/app/pages/home/post/post.page.scss": 
        /*!************************************************!*\
          !*** ./src/app/pages/home/post/post.page.scss ***!
          \************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  /*--background: black;*/\n}\nion-content .author,\nion-content .cath {\n  margin: 10px 16px -20px;\n}\nion-content .slider1 {\n  position: relative;\n  display: inline;\n  cursor: pointer;\n}\nion-content .relImg {\n  position: absolute;\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-width: none;\n  max-height: none;\n  z-index: 2;\n}\nion-content .relText {\n  display: inline-flex;\n  z-index: 3;\n  color: #fff;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 12px;\n  position: relative;\n}\nion-content ion-slide {\n  height: 100px;\n}\nion-content .custom-loading {\n  opacity: 1 !important;\n  background: #fff !important;\n  position: absolute !important;\n  width: 100%;\n  height: 100%;\n  min-height: 100%;\n}\nion-content .dTitle {\n  position: absolute;\n  color: #fff;\n  bottom: 20px;\n  width: 100%;\n  z-index: 10;\n  padding: 10px;\n  background: #000;\n  opacity: 0.8;\n  margin: 0 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  line-height: 16px;\n  max-height: 40px;\n  -webkit-line-clamp: 2;\n  /* Write the number of\n     lines you want to be\n     displayed */\n  -webkit-box-orient: vertical;\n}\nion-content .imgWrapper {\n  position: relative;\n}\nion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n  position: absolute;\n}\n.bckBtn {\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYWNQcm8vRGVza3RvcC9ERUNPREVSL0Jhc2tldC9zcmMvYXBwL3BhZ2VzL2hvbWUvcG9zdC9wb3N0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9wb3N0L3Bvc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7QUNDRjtBREFFOztFQUVFLHVCQUFBO0FDRUo7QURDRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNDSjtBREVFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNBSjtBREdFO0VBQ0Usb0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDRDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDREo7QURJRTtFQUNFLGFBQUE7QUNGSjtBREtFO0VBQ0UscUJBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0hKO0FEUUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUF1Qjs7Z0JBQUE7RUFHdkIsNEJBQUE7QUNMSjtBRFFFO0VBQ0Usa0JBQUE7QUNOSjtBRFVBO0VBQ0UseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0FDUEY7QURVQTtFQUNFLHNCQUFBO0FDUEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL3Bvc3QvcG9zdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC8qLS1iYWNrZ3JvdW5kOiBibGFjazsqL1xuICAuYXV0aG9yLFxuICAuY2F0aCB7XG4gICAgbWFyZ2luOiAxMHB4IDE2cHggLTIwcHg7XG4gIH1cblxuICAuc2xpZGVyMSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAucmVsSW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgbWF4LWhlaWdodDogbm9uZTtcbiAgICB6LWluZGV4OiAyO1xuICB9XG5cbiAgLnJlbFRleHQge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHotaW5kZXg6IDM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgaW9uLXNsaWRlIHtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG5cbiAgLmN1c3RvbS1sb2FkaW5nIHtcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmZhdkJ0biB7fVxuXG4gIC5kVGl0bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3R0b206IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIG9wYWNpdHk6IDAuODtcbiAgICBtYXJnaW46IDAgMTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyOyAvKiBXcml0ZSB0aGUgbnVtYmVyIG9mXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lcyB5b3Ugd2FudCB0byBiZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheWVkICovXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgfVxuXG4gIC5pbWdXcmFwcGVyIHtcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgfVxufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmJja0J0biB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4iLCJpb24tY29udGVudCB7XG4gIC8qLS1iYWNrZ3JvdW5kOiBibGFjazsqL1xufVxuaW9uLWNvbnRlbnQgLmF1dGhvcixcbmlvbi1jb250ZW50IC5jYXRoIHtcbiAgbWFyZ2luOiAxMHB4IDE2cHggLTIwcHg7XG59XG5pb24tY29udGVudCAuc2xpZGVyMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5pb24tY29udGVudCAucmVsSW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgbWF4LXdpZHRoOiBub25lO1xuICBtYXgtaGVpZ2h0OiBub25lO1xuICB6LWluZGV4OiAyO1xufVxuaW9uLWNvbnRlbnQgLnJlbFRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgei1pbmRleDogMztcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW9uLWNvbnRlbnQgaW9uLXNsaWRlIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbmlvbi1jb250ZW50IC5jdXN0b20tbG9hZGluZyB7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cbmlvbi1jb250ZW50IC5kVGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiAjZmZmO1xuICBib3R0b206IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgb3BhY2l0eTogMC44O1xuICBtYXJnaW46IDAgMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbWF4LWhlaWdodDogNDBweDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAvKiBXcml0ZSB0aGUgbnVtYmVyIG9mXG4gICAgIGxpbmVzIHlvdSB3YW50IHRvIGJlXG4gICAgIGRpc3BsYXllZCAqL1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuaW9uLWNvbnRlbnQgLmltZ1dyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYmNrQnRuIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/home/post/post.page.ts": 
        /*!**********************************************!*\
          !*** ./src/app/pages/home/post/post.page.ts ***!
          \**********************************************/
        /*! exports provided: PostPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPage", function () { return PostPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _providers_word_press_word_press__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../providers/word-press/word-press */ "./src/app/providers/word-press/word-press.ts");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _providers_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../providers/loader.service */ "./src/app/providers/loader.service.ts");
            var PostPage = /** @class */ (function () {
                function PostPage(route, wp, location, loadingService) {
                    this.route = route;
                    this.wp = wp;
                    this.location = location;
                    this.loadingService = loadingService;
                    this.hystory = [];
                    this.favorites = [];
                    this.sliderConfig = {
                        slidesPerView: 2
                    };
                }
                PostPage.prototype.ngOnInit = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var id;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.loadingService.showLoading('ifOfLoading')];
                                case 1:
                                    _a.sent();
                                    id = this.route.snapshot.paramMap.get('id');
                                    this.wp.getPostContent(id).subscribe(function (res) {
                                        _this.post = res;
                                        console.log(_this.post);
                                        _this.getUser(_this.post.author);
                                        _this.getCategory(_this.post.categories[0]);
                                        _this.loadPostsByTags(_this.post.tags[0]);
                                        _this.getTag(_this.post.tags[0]);
                                        _this.loadingService.dismissLoader('ifOfLoading');
                                    });
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                PostPage.prototype.getUser = function (id) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            this.wp.getUser(id).subscribe(function (res) {
                                _this.user = res;
                            });
                            return [2 /*return*/];
                        });
                    });
                };
                PostPage.prototype.myBackButton = function () {
                    this.location.back();
                };
                PostPage.prototype.getCategory = function (id) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            //console.log(id);
                            this.wp.getCathegory(id).subscribe(function (res) {
                                _this.category = res;
                            });
                            return [2 /*return*/];
                        });
                    });
                };
                PostPage.prototype.getTag = function (id) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: 
                                //console.log(id);
                                return [4 /*yield*/, this.loadingService.showLoading('ifOfLoading2')];
                                case 1:
                                    //console.log(id);
                                    _a.sent();
                                    this.wp.getTagName(id).subscribe(function (res) {
                                        _this.tagName = res;
                                        _this.loadingService.dismissLoader('ifOfLoading2');
                                    });
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                PostPage.prototype.openOriginal = function () {
                    // Add InAppBrowser for app if want
                    window.open(this.post.link, '_blank');
                };
                PostPage.prototype.loadPostsByTags = function (tagId) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            this.wp.getPostsByTag(tagId).subscribe(function (res) {
                                //  this.count = this.wp.totalPosts;
                                _this.posts = res;
                            });
                            return [2 /*return*/];
                        });
                    });
                };
                PostPage.prototype.addToFavorites = function (id) {
                    var _this = this;
                    this.wp.saveToFavorite(id).subscribe(function (res) {
                        //  this.count = this.wp.totalPosts;
                        _this.favorites = res;
                    });
                };
                //Move to Next slide
                PostPage.prototype.slideNext = function (object, slideView) {
                    slideView.slideNext(500);
                };
                //Move to previous slide
                PostPage.prototype.slidePrev = function (object, slideView) {
                    slideView.slidePrev(500);
                };
                //Method called when slide is changed by drag or navigation
                PostPage.prototype.SlideDidChange = function (object, slideView) {
                    this.checkIfNavDisabled(object, slideView);
                };
                //Call methods to check if slide is first or last to enable disbale navigation
                PostPage.prototype.checkIfNavDisabled = function (object, slideView) {
                    this.checkisBeginning(object, slideView);
                    this.checkisEnd(object, slideView);
                };
                PostPage.prototype.checkisBeginning = function (object, slideView) {
                    slideView.isBeginning().then(function (istrue) {
                        object.isBeginningSlide = istrue;
                    });
                };
                PostPage.prototype.checkisEnd = function (object, slideView) {
                    slideView.isEnd().then(function (istrue) {
                        object.isEndSlide = istrue;
                    });
                };
                return PostPage;
            }());
            PostPage.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _providers_word_press_word_press__WEBPACK_IMPORTED_MODULE_1__["WordpressService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
                { type: _providers_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"] }
            ]; };
            PostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-post',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/post/post.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post.page.scss */ "./src/app/pages/home/post/post.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _providers_word_press_word_press__WEBPACK_IMPORTED_MODULE_1__["WordpressService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _providers_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
            ], PostPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-home-post-post-module-es2015.js.map
//# sourceMappingURL=pages-home-post-post-module-es5.js.map
//# sourceMappingURL=pages-home-post-post-module-es5.js.map