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
            /* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n\n      <ion-button (click)=\"myBackButton()\">\n        <ion-icon slot=\"icon-only\" name=\"md-arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title [innerHTML]=\"post?.title.rendered\"></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content fullscreen>\n\n  <div *ngIf=\"post\">\n    <img [src]=\"post.media_url\" [style.width]=\"'100%'\">\n    <div class=\"author\">Author: {{ user?.name}}</div><br>\n    <div class=\"cath\">Cath: {{ category?.name}}</div><br>\n    <div class=\"cath\">Tag: {{ tagName?.name }}</div><br><br>\n    &nbsp;&nbsp;&nbsp;<ion-button (click)=\"addToFavorites(post.id)\" end>\n      <ion-icon name=\"heart\" end></ion-icon>\n    </ion-button>\n\n    <div [innerHTML]=\"post.content.rendered\" class=\"ion-padding\"></div>\n  </div>\n\n\n  <div class=\"cath\" *ngIf=\"post\">Related Articles:</div><br>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"10\">\n\n        <ion-slides #slideWithNav [options]=\"sliderConfig\">\n\n          <ion-slide *ngFor=\"let post of posts\" class=\"slider1\" [routerLink]=\"['/tabs/home/post/' + post.id]\">\n            <img class=\"relImg\" [src]=\"post.fimg_url\" [style.width]=\"'100%'\">\n            <div [innerHTML]=\"post.title.rendered\" class=\"relText\"></div>\n          </ion-slide>\n\n        </ion-slides>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n\n\n\n\n\n<!--\n  <ion-card *ngFor=\"let post of posts\">\n    <ion-card-header>\n      <ion-card-title [innerHTML]=\"post.title.rendered\"></ion-card-title>\n      <ion-card-subtitle>{{ post.date_gmt | date }}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <img [src]=\"post.media_url\">\n      <div [innerHTML]=\"post.excerpt.rendered\"></div>\n      <ion-button expand=\"full\" fill=\"clear\" [routerLink]=\"['/tabs/home/post/' + post.id]\" class=\"ion-text-right\">Read More...</ion-button>\n    </ion-card-content>\n  </ion-card>\n-->\n</ion-content>\n\n<ion-footer color=\"secondary\">\n  <ion-toolbar>\n    <ion-button expand=\"full\" fill=\"clear\" (click)=\"openOriginal()\">\n      Open Original\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n");
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
            /* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  /*--background: black;*/\n}\nion-content .author, ion-content .cath {\n  margin: 10px 16px -20px 16px;\n}\nion-content .slider1 {\n  position: relative;\n  display: inline;\n  cursor: pointer;\n}\nion-content .relImg {\n  position: absolute;\n  height: 200px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  max-width: none;\n  max-height: none;\n  z-index: 2;\n}\nion-content .relText {\n  display: inline-flex;\n  z-index: 3;\n  color: #fff;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 12px;\n  position: relative;\n}\nion-content ion-slide {\n  height: 100px;\n}\nion-content .custom-loading {\n  opacity: 1 !important;\n  background: #fff !important;\n  position: absolute !important;\n  width: 100%;\n  height: 100%;\n  min-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYWNQcm8vRGVza3RvcC9ERUNPREVSL0Jhc2tldC9zcmMvYXBwL3BhZ2VzL2hvbWUvcG9zdC9wb3N0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9wb3N0L3Bvc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0csdUJBQUE7QUNBSDtBREVHO0VBQ00sNEJBQUE7QUNBVDtBREVHO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0FMO0FERUc7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ0FMO0FERUc7RUFDRSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsNENBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBTDtBREdHO0VBQ0UsYUFBQTtBQ0RMO0FESUc7RUFDRSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRkwiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL3Bvc3QvcG9zdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1jb250ZW50IHtcbiAgIC8qLS1iYWNrZ3JvdW5kOiBibGFjazsqL1xuXG4gICAuYXV0aG9yLCAuY2F0aCB7XG4gICAgICAgICBtYXJnaW46IDEwcHggMTZweCAtMjBweCAxNnB4O1xuICAgfVxuICAgLnNsaWRlcjEge1xuICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICBjdXJzb3I6cG9pbnRlcjtcbiAgIH1cbiAgIC5yZWxJbWcge1xuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgIGhlaWdodDogMjAwcHg7XG4gICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICBtYXgtd2lkdGg6bm9uZTtcbiAgICAgbWF4LWhlaWdodDpub25lO1xuICAgICB6LWluZGV4OjI7XG4gICB9XG4gICAucmVsVGV4dCB7XG4gICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICB6LWluZGV4OjM7XG4gICAgIGNvbG9yOiNmZmY7XG4gICAgIGZvbnQtZmFtaWx5OiBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XG4gICAgIGZvbnQtc2l6ZToxMnB4O1xuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICB9XG5cbiAgIGlvbi1zbGlkZSB7XG4gICAgIGhlaWdodDogMTAwcHg7XG4gICB9XG5cbiAgIC5jdXN0b20tbG9hZGluZyB7XG4gICAgIG9wYWNpdHk6MSAhaW1wb3J0YW50O1xuICAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgIHBvc2l0aW9uOmFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgIHdpZHRoOjEwMCU7XG4gICAgIGhlaWdodDoxMDAlO1xuICAgICBtaW4taGVpZ2h0OjEwMCU7XG4gICB9XG59XG4iLCJpb24tY29udGVudCB7XG4gIC8qLS1iYWNrZ3JvdW5kOiBibGFjazsqL1xufVxuaW9uLWNvbnRlbnQgLmF1dGhvciwgaW9uLWNvbnRlbnQgLmNhdGgge1xuICBtYXJnaW46IDEwcHggMTZweCAtMjBweCAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLnNsaWRlcjEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuaW9uLWNvbnRlbnQgLnJlbEltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIG1heC13aWR0aDogbm9uZTtcbiAgbWF4LWhlaWdodDogbm9uZTtcbiAgei1pbmRleDogMjtcbn1cbmlvbi1jb250ZW50IC5yZWxUZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHotaW5kZXg6IDM7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZSB7XG4gIGhlaWdodDogMTAwcHg7XG59XG5pb24tY29udGVudCAuY3VzdG9tLWxvYWRpbmcge1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59Il19 */");
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
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var PostPage = /** @class */ (function () {
                function PostPage(route, wp, loadingCtrl, location) {
                    this.route = route;
                    this.wp = wp;
                    this.loadingCtrl = loadingCtrl;
                    this.location = location;
                    this.hystory = [];
                    this.favorites = [];
                    this.sliderConfig = {
                        slidesPerView: 2
                    };
                }
                PostPage.prototype.ngOnInit = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var loading, id;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.loadingCtrl.create({
                                        message: 'Loading Data...',
                                        translucent: true,
                                        cssClass: 'custom-loading'
                                    })];
                                case 1:
                                    loading = _a.sent();
                                    return [4 /*yield*/, loading.present()];
                                case 2:
                                    _a.sent();
                                    id = this.route.snapshot.paramMap.get('id');
                                    this.wp.getPostContent(id).subscribe(function (res) {
                                        _this.post = res;
                                        console.log(_this.post);
                                        _this.getUser(_this.post.author);
                                        _this.getCategory(_this.post.categories[0]);
                                        _this.loadPostsByTags(_this.post.tags[0]);
                                        _this.getTag(_this.post.tags[0]);
                                        loading.dismiss();
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
                        var loading;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.loadingCtrl.create({
                                        message: 'Loading Data...',
                                        translucent: true,
                                        cssClass: 'custom-loading'
                                    })];
                                case 1:
                                    loading = _a.sent();
                                    return [4 /*yield*/, loading.present()];
                                case 2:
                                    _a.sent();
                                    this.wp.getTagName(id).subscribe(function (res) {
                                        _this.tagName = res;
                                        loading.dismiss();
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
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
            ]; };
            PostPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
                    selector: 'app-post',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./post.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/post/post.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./post.page.scss */ "./src/app/pages/home/post/post.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _providers_word_press_word_press__WEBPACK_IMPORTED_MODULE_1__["WordpressService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
            ], PostPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=pages-home-post-post-module-es2015.js.map
//# sourceMappingURL=pages-home-post-post-module-es5.js.map
//# sourceMappingURL=pages-home-post-post-module-es5.js.map