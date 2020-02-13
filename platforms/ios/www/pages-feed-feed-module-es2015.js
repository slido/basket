(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-feed-feed-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed/feed.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed/feed.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Feed</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n<ion-grid fixed>\n\n  <ion-row>\n<!-- [checked] postsavi aktivan tag -->\n    <ion-col size=\"12\">\n      <ion-segment scrollable=\"true\" [(ngModel)]=\"selectedIdx\">\n          <ion-segment-button\n          (ionSelect)=\"getPostByCategories(category.id)\"\n          [checked]=\"category?.name === 'Free Agency'\"\n          *ngFor= \"let category of categories; first as isFirst\" >\n              <ion-label>{{ category.name }}</ion-label>\n          </ion-segment-button>\n      </ion-segment>\n\n    </ion-col>\n\n  </ion-row>\n\n\n</ion-grid>\n\n<ion-card *ngFor=\"let post of postsPerCat\">\n  <ion-card-header>\n    <ion-card-title [innerHTML]=\"post.title.rendered\"></ion-card-title>\n    <ion-card-subtitle>{{ post.date_gmt | date }}</ion-card-subtitle>\n  </ion-card-header>\n  <ion-card-content>\n    <img [src]=\"post.media_url\">\n    <div [innerHTML]=\"post.excerpt.rendered\"></div>\n    <ion-button expand=\"full\" fill=\"clear\" [routerLink]=\"['/tabs/home/post/' + post.id]\" class=\"ion-text-right\">Read More...</ion-button>\n  </ion-card-content>\n</ion-card>\n\n<ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadMore($event)\">\n  <ion-infinite-scroll-content loadingText=\"Loading more posts...\">\n  </ion-infinite-scroll-content>\n</ion-infinite-scroll>\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/feed/feed.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/feed/feed.module.ts ***!
  \*******************************************/
/*! exports provided: FeedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPageModule", function() { return FeedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _feed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feed.page */ "./src/app/pages/feed/feed.page.ts");







let FeedPageModule = class FeedPageModule {
};
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



/***/ }),

/***/ "./src/app/pages/feed/feed.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/feed/feed.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZlZWQvZmVlZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/feed/feed.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/feed/feed.page.ts ***!
  \*****************************************/
/*! exports provided: FeedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPage", function() { return FeedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _providers_word_press_word_press__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../providers/word-press/word-press */ "./src/app/providers/word-press/word-press.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let FeedPage = class FeedPage {
    constructor(wp, loadingCtrl) {
        this.wp = wp;
        this.loadingCtrl = loadingCtrl;
        //categories = ['India','World','US','Croatia','Phillipines','Russia'];
        this.categories = [];
        this.categoryID = 0;
        this.postsPerCat = [];
        this.page = 1;
        this.count = null;
        this.selectedIdx = 657;
        this.isFirst = false;
    }
    ngOnInit() {
        this.getCategories();
        console.log(this.categories);
    }
    getCategories() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Loading Data...',
                translucent: true,
                cssClass: 'custom-loading'
            });
            yield loading.present();
            return this.wp.getAllCategories().subscribe(res => {
                this.categories = res;
                console.log(this.categories);
                this.getPostByCategories(this.categories[0].id);
                loading.dismiss();
            });
        });
    }
    getCatByID(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Loading Data...',
                translucent: true,
                cssClass: 'custom-loading'
            });
            yield loading.present();
            this.wp.getCathegory(id).subscribe(res => {
                this.categories = res;
                console.log(this.categories);
                loading.dismiss();
            });
        });
    }
    getPostByCategories(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Loading Data...',
                translucent: true,
                cssClass: 'custom-loading'
            });
            yield loading.present();
            this.first = false;
            this.isFirst = false;
            this.wp.getPostsByCategory(id).subscribe(res => {
                this.postsPerCat = res;
                this.count = this.wp.totalPosts;
                //console.log(this.postsPerCat);
                //console.log(this.categories);
                loading.dismiss();
            });
        });
    }
    loadMore(event) {
        this.page++;
        this.wp.getPostsByCategory(this.page).subscribe(res => {
            this.postsPerCat = [...this.postsPerCat, ...res];
            event.target.complete();
            console.log(this.postsPerCat);
            // Disable infinite loading when maximum reached
            if (this.page == this.wp.pages) {
                event.target.disabled = true;
            }
        });
    }
};
FeedPage.ctorParameters = () => [
    { type: _providers_word_press_word_press__WEBPACK_IMPORTED_MODULE_2__["WordpressService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
FeedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feed',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feed.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feed/feed.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feed.page.scss */ "./src/app/pages/feed/feed.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_word_press_word_press__WEBPACK_IMPORTED_MODULE_2__["WordpressService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
], FeedPage);



/***/ })

}]);
//# sourceMappingURL=pages-feed-feed-module-es2015.js.map