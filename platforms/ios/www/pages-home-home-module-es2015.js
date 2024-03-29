(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Home</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" routerLink=\"/search\" routerDirection=\"root\">\n     <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n   </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n<!--\n  <ion-card *ngFor=\"let post of posts\">\n    <ion-card-header>\n      <ion-card-title [innerHTML]=\"post.title.rendered\"></ion-card-title>\n      <ion-card-subtitle>{{ post.date_gmt | date }}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <img [src]=\"post.media_url\">\n      <div [innerHTML]=\"post.excerpt.rendered\"></div>\n      <ion-button expand=\"full\" fill=\"clear\" [routerLink]=\"['/tabs/home/post/' + post.id]\" class=\"ion-text-right\">Read More...</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-grid>\n  <ion-row>\n    <ion-col size-lg=\"3\" size-md=\"4\" size-sm=\"6\" size=\"12\" *ngFor=\"let post of posts\" [routerLink]=\"['/tabs/home/post/' + post.id]\">\n      <ion-card>\n        <img src=\"{{post.media_url}}\" alt=\"{{post.title.rendered}}\"/>\n        <ion-card-header>\n          <ion-card-subtitle [innerHTML]=\"post.title.rendered\"></ion-card-subtitle>\n        </ion-card-header>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n\n<div class=\"sub-headers\">\n    <p>Latest News</p>\n</div>\n<ion-slides class=\"slide-padding\" pager=\"true\" [options]=\"sliderConfig\">\n    <ion-slide *ngFor=\"let post of posts\">\n        <div class=\"container\">\n            <ion-img src=\"{{post.media_url}}\"></ion-img>\n            <h2 class=\"slidetitle\">\n                <span class=\"block\">{{post.title.rendered}}</span>\n            </h2>\n            <p class=\"author\">By {{post.author}}, 2h ago</p>\n        </div>\n    </ion-slide>\n</ion-slides>\n-->\n<div class=\"sub-headers\">\n    <p>Found {{ count }} posts</p>\n</div>\n\n<div class=\"sub-headers\">\n    <p>Latest News</p>\n</div>\n<ion-slides class=\"slide-padding sli1\" pager=\"true\" [options]=\"sliderConfig1\" >\n    <ion-slide *ngFor=\"let post of postsPerCat1\">\n      <ion-card [routerLink]=\"['/tabs/home/post/' + post.id]\">\n        <img src=\"{{post.media_url}}\" alt=\"{{post.title.rendered}}\"/>\n        <ion-card-header>\n          <ion-card-subtitle [innerHTML]=\"post.title.rendered\"></ion-card-subtitle>\n        </ion-card-header>\n      </ion-card>\n    </ion-slide>\n</ion-slides>\n\n<div class=\"sub-headers\">\n    <p>Free Agency</p>\n</div>\n<ion-slides class=\"slide-padding sli2\" pager=\"true\" [options]=\"sliderConfig2\" >\n    <ion-slide *ngFor=\"let post of postsPerCat2\">\n      <ion-card [routerLink]=\"['/tabs/home/post/' + post.id]\">\n        <img src=\"{{post.media_url}}\" alt=\"{{post.title.rendered}}\"/>\n        <ion-card-header>\n          <ion-card-subtitle [innerHTML]=\"post.title.rendered\"></ion-card-subtitle>\n        </ion-card-header>\n      </ion-card>\n    </ion-slide>\n</ion-slides>\n\n<div class=\"sub-headers\">\n    <p>NCAA</p>\n</div>\n<ion-slides class=\"slide-padding sli3\" pager=\"true\" [options]=\"sliderConfig3\" >\n    <ion-slide *ngFor=\"let post of postsPerCat3\">\n      <ion-card [routerLink]=\"['/tabs/home/post/' + post.id]\">\n        <img src=\"{{post.media_url}}\" alt=\"{{post.title.rendered}}\"/>\n        <ion-card-header>\n          <ion-card-subtitle [innerHTML]=\"post.title.rendered\"></ion-card-subtitle>\n        </ion-card-header>\n      </ion-card>\n    </ion-slide>\n</ion-slides>\n\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"] }])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.custom-loading {\n  opacity: 1 !important;\n  background: #fff !important;\n  position: absolute !important;\n  width: 100%;\n  height: 100%;\n  min-height: 100%;\n}\n\nion-grid ion-card {\n  width: 100%;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n\nion-grid ion-card ion-card-content {\n  padding: 0 !important;\n}\n\nion-col, ion-grid {\n  width: 100%;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n\n.container {\n  position: relative;\n  width: 100%;\n}\n\n.slidetitle {\n  position: absolute;\n  bottom: 60px;\n  left: 18px;\n  color: white;\n  text-align: left;\n  font-family: \"Helvetica\";\n  font-size: 14px !important;\n  line-height: 14px;\n  font-weight: 300;\n}\n\n/*\n .block{\n    background-color:rgba(0, 0, 0, 0.5);\n    padding: 4px;\n }\n*/\n\n.author {\n  position: absolute;\n  bottom: 25px;\n  left: 20px;\n  color: #f0f0f0;\n  font-size: 15px !important;\n  font-weight: 300;\n  text-shadow: 1px 1px 3px #000000;\n}\n\n.sub-headers {\n  padding-left: 20px;\n  text-align: center;\n  font-weight: bold;\n}\n\n.sub-headers p {\n  font-size: 20px;\n  font-family: Helvetica;\n}\n\nion-card-subtitle {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  line-height: 16px;\n  max-height: 48px;\n  -webkit-line-clamp: 2;\n  /* Write the number of\n     lines you want to be\n     displayed */\n  -webkit-box-orient: vertical;\n}\n\n.slide-padding {\n  padding-bottom: 24px !important;\n}\n\n.slide-padding ion-card-header {\n  background: #f4f4f4;\n}\n\n.swiper-slide img {\n  height: 15vh;\n  width: 100%;\n}\n\n.sli1 img {\n  height: 31vh;\n}\n\n.sli2 img {\n  height: 15vh;\n}\n\n.sli3 img {\n  height: 10vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYWNQcm8vRGVza3RvcC9ERUNPREVSL0Jhc2tldC9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FER1E7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQ0FaOztBRENZO0VBQ0kscUJBQUE7QUNDaEI7O0FESUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQ0RGOztBRElBO0VBQ0ssa0JBQUE7RUFDQSxXQUFBO0FDREw7O0FESUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURHQTs7Ozs7Q0FBQTs7QUFRQztFQUNHLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FDRko7O0FES0M7RUFDRyxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURLQztFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQ0ZIOztBREtDO0VBQ0MsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQXVCOztnQkFBQTtFQUd2Qiw0QkFBQTtBQ0RGOztBRElBO0VBQ0csK0JBQUE7QUNESDs7QURJQztFQUNFLG1CQUFBO0FDREg7O0FESUM7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0RIOztBRElDO0VBQ0UsWUFBQTtBQ0RIOztBRElDO0VBQ0UsWUFBQTtBQ0RIOztBRElDO0VBQ0UsWUFBQTtBQ0RIIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmN1c3RvbS1sb2FkaW5nIHtcbiAgb3BhY2l0eToxICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmYgIWltcG9ydGFudDtcbiAgcG9zaXRpb246YWJzb2x1dGUgIWltcG9ydGFudDtcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OjEwMCU7XG4gIG1pbi1oZWlnaHQ6MTAwJTtcbn1cblxuaW9uLWdyaWR7XG4gICAgICAgIGlvbi1jYXJke1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDowICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBpb24tY2FyZC1jb250ZW50e1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuaW9uLWNvbCwgaW9uLWdyaWQge1xuICB3aWR0aDoxMDAlO1xuICBtYXJnaW4tbGVmdDowICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDowICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXJ7XG4gICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgd2lkdGg6IDEwMCU7XG4gfVxuXG4uc2xpZGV0aXRsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogNjBweDtcbiAgICBsZWZ0OiAxOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhJztcbiAgICBmb250LXNpemU6MTRweCAhaW1wb3J0YW50O1xuICAgIGxpbmUtaGVpZ2h0OjE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiB9XG4vKlxuIC5ibG9ja3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBwYWRkaW5nOiA0cHg7XG4gfVxuKi9cblxuXG4gLmF1dGhvciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMjVweDtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIGNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAzcHggIzAwMDAwMDtcbiB9XG5cbiAuc3ViLWhlYWRlcnN7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiB9XG5cbiAuc3ViLWhlYWRlcnMgcCB7XG4gICBmb250LXNpemU6IDIwcHg7XG4gICBmb250LWZhbWlseTpIZWx2ZXRpY2E7XG4gfVxuXG4gaW9uLWNhcmQtc3VidGl0bGUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXgtaGVpZ2h0OiA0OHB4O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7IC8qIFdyaXRlIHRoZSBudW1iZXIgb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lcyB5b3Ugd2FudCB0byBiZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXllZCAqL1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuIH1cblxuLnNsaWRlLXBhZGRpbmcgIHtcbiAgIHBhZGRpbmctYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XG4gfVxuXG4gLnNsaWRlLXBhZGRpbmcgaW9uLWNhcmQtaGVhZGVye1xuICAgYmFja2dyb3VuZDojZjRmNGY0O1xuIH1cblxuIC5zd2lwZXItc2xpZGUgaW1nIHtcbiAgIGhlaWdodDoxNXZoO1xuICAgd2lkdGg6MTAwJTtcbiB9XG5cbiAuc2xpMSBpbWcge1xuICAgaGVpZ2h0OjMxdmg7XG4gfVxuXG4gLnNsaTIgaW1nIHtcbiAgIGhlaWdodDoxNXZoO1xuIH1cblxuIC5zbGkzIGltZyB7XG4gICBoZWlnaHQ6MTB2aDtcbiB9XG4iLCIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jdXN0b20tbG9hZGluZyB7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuaW9uLWdyaWQgaW9uLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5pb24tZ3JpZCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tY29sLCBpb24tZ3JpZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zbGlkZXRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDYwcHg7XG4gIGxlZnQ6IDE4cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhXCI7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLypcbiAuYmxvY2t7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgcGFkZGluZzogNHB4O1xuIH1cbiovXG4uYXV0aG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDI1cHg7XG4gIGxlZnQ6IDIwcHg7XG4gIGNvbG9yOiAjZjBmMGYwO1xuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggM3B4ICMwMDAwMDA7XG59XG5cbi5zdWItaGVhZGVycyB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnN1Yi1oZWFkZXJzIHAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbWF4LWhlaWdodDogNDhweDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAvKiBXcml0ZSB0aGUgbnVtYmVyIG9mXG4gICAgIGxpbmVzIHlvdSB3YW50IHRvIGJlXG4gICAgIGRpc3BsYXllZCAqL1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4uc2xpZGUtcGFkZGluZyB7XG4gIHBhZGRpbmctYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zbGlkZS1wYWRkaW5nIGlvbi1jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG59XG5cbi5zd2lwZXItc2xpZGUgaW1nIHtcbiAgaGVpZ2h0OiAxNXZoO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNsaTEgaW1nIHtcbiAgaGVpZ2h0OiAzMXZoO1xufVxuXG4uc2xpMiBpbWcge1xuICBoZWlnaHQ6IDE1dmg7XG59XG5cbi5zbGkzIGltZyB7XG4gIGhlaWdodDogMTB2aDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _providers_word_press_word_press__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../providers/word-press/word-press */ "./src/app/providers/word-press/word-press.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let HomePage = class HomePage {
    constructor(wp, loadingCtrl) {
        this.wp = wp;
        this.loadingCtrl = loadingCtrl;
        this.posts = [];
        this.page = 1;
        this.count = null;
        this.categories = [];
        this.categoryID = 0;
        this.postsPerCat = [];
        this.isFirst = false;
        this.postsPerCat1 = [];
        this.postsPerCat2 = [];
        this.postsPerCat3 = [];
        this.sliderConfig1 = {
            slidesPerView: 1
        };
        this.sliderConfig2 = {
            slidesPerView: 2
        };
        this.sliderConfig3 = {
            slidesPerView: 3
        };
    }
    ngOnInit() {
        this.loadPosts();
        this.getPostByCategories1(653);
        this.getPostByCategories2(657);
        this.getPostByCategories3(658);
    }
    loadPosts() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let loading = yield this.loadingCtrl.create({
                message: 'Loading Data...',
                translucent: true,
                cssClass: 'custom-loading'
            });
            yield loading.present();
            this.wp.getPosts(this.page).subscribe(res => {
                this.count = this.wp.totalPosts;
                this.posts = res;
                loading.dismiss();
            });
        });
    }
    getPostByCategories1(id) {
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
                this.postsPerCat1 = res;
                this.count = this.wp.totalPosts;
                //console.log(this.postsPerCat);
                //console.log(this.categories);
                loading.dismiss();
            });
        });
    }
    getPostByCategories2(id) {
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
                this.postsPerCat2 = res;
                this.count = this.wp.totalPosts;
                //console.log(this.postsPerCat);
                //console.log(this.categories);
                loading.dismiss();
            });
        });
    }
    getPostByCategories3(id) {
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
                this.postsPerCat3 = res;
                this.count = this.wp.totalPosts;
                //console.log(this.postsPerCat);
                //console.log(this.categories);
                loading.dismiss();
            });
        });
    }
    loadMore(event) {
        this.page++;
        this.wp.getPosts(this.page).subscribe(res => {
            this.posts = [...this.posts, ...res];
            event.target.complete();
            if (this.page == this.wp.pages) {
                event.target.disabled = true;
            }
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _providers_word_press_word_press__WEBPACK_IMPORTED_MODULE_1__["WordpressService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_word_press_word_press__WEBPACK_IMPORTED_MODULE_1__["WordpressService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map