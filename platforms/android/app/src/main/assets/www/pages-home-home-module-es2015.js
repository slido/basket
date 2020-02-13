(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Home</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" routerLink=\"/search\" routerDirection=\"root\">\n      <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"sub-headers\">\n    <p class=\"firstTitle mg21\">Latest News</p>\n  </div>\n  <ion-slides class=\"slide-padding sli1 slider\" pager=\"true\" [options]=\"sliderConfig1\">\n    <ion-slide *ngFor=\"let post of postsPerCat1\">\n      <ion-card class=\"sliderCard\" [routerLink]=\"['/tabs/home/post/' + post.id]\">\n        <img src=\"{{post.media_url}}\" alt=\"{{post.title.rendered}}\" />\n\n          <ion-card-subtitle [innerHTML]=\"post.title.rendered\"></ion-card-subtitle>\n\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n\n  <div class=\"sub-headers\">\n    <p  class=\"firstTitle mg0\">Trending</p>\n  </div>\n  <ion-slides class=\"slide-padding sli2  slider\" pager=\"true\" [options]=\"sliderConfig2\">\n    <ion-slide *ngFor=\"let post of postsPerCat2\">\n      <ion-card  class=\"sliderCard\" [routerLink]=\"['/tabs/home/post/' + post.id]\">\n        <img src=\"{{post.media_url}}\" alt=\"{{post.title.rendered}}\" />\n\n          <ion-card-subtitle [innerHTML]=\"post.title.rendered\"></ion-card-subtitle>\n\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n\n  <div class=\"sub-headers\">\n    <p  class=\"firstTitle mg0\">NCAA</p>\n  </div>\n  <ion-slides class=\"slide-padding sli2 slider\" pager=\"true\" [options]=\"sliderConfig2\">\n    <ion-slide *ngFor=\"let post of postsPerCat3\">\n      <ion-card class=\"sliderCard\"  [routerLink]=\"['/tabs/home/post/' + post.id]\">\n        <img src=\"{{post.media_url}}\" alt=\"{{post.title.rendered}}\" />\n\n          <ion-card-subtitle [innerHTML]=\"post.title.rendered\"></ion-card-subtitle>\n\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n\n  <div>\n    <p class=\"found\">Found {{ count }} posts</p>\n  </div>\n\n</ion-content>\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".welcome-card img {\n  max-height: 35vh;\n  overflow: hidden;\n}\n\n.custom-loading {\n  opacity: 1 !important;\n  background: #fff !important;\n  position: absolute !important;\n  width: 100%;\n  height: 100%;\n  min-height: 100%;\n}\n\nion-grid ion-card {\n  width: 100%;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n\nion-grid ion-card ion-card-content {\n  padding: 0 !important;\n}\n\nion-col, ion-grid {\n  width: 100%;\n  margin-left: 0 !important;\n  margin-right: 0 !important;\n}\n\n.container {\n  position: relative;\n  width: 100%;\n}\n\n.slidetitle {\n  position: absolute;\n  bottom: 60px;\n  left: 18px;\n  color: white;\n  text-align: left;\n  font-family: \"Helvetica\";\n  font-size: 14px !important;\n  line-height: 14px;\n  font-weight: 300;\n}\n\n.sliderCard {\n  position: relative;\n}\n\n.sliderCard ion-card-subtitle {\n  position: absolute;\n  bottom: 10px;\n  text-align: left;\n  left: 20px;\n  background: #000;\n  padding: 7px 10px 10px;\n  color: #fff;\n  opacity: 0.8;\n}\n\n.sli1 .sliderCard ion-card-subtitle {\n  font-size: 20px;\n  line-height: 128%;\n  text-transform: none;\n  font-weight: 400;\n}\n\n.sli2 .sliderCard ion-card-subtitle {\n  font-size: 12px;\n  line-height: 128%;\n  text-transform: none;\n}\n\n.firstTitle {\n  font-size: 20px;\n  font-family: Helvetica;\n  padding: 0;\n  text-align: left;\n  padding-left: 13px;\n}\n\n.mg21 {\n  margin: 21px 0 4px;\n}\n\n.mg0 {\n  margin: 0px 0 4px;\n}\n\n.found {\n  font-size: 13px;\n  font-family: helvetica;\n  text-align: center;\n}\n\n/*\n .block{\n    background-color:rgba(0, 0, 0, 0.5);\n    padding: 4px;\n }\n*/\n\n.author {\n  position: absolute;\n  bottom: 25px;\n  left: 20px;\n  color: #f0f0f0;\n  font-size: 15px !important;\n  font-weight: 300;\n  text-shadow: 1px 1px 3px #000000;\n}\n\n.sub-headers p {\n  font-size: 20px;\n  font-family: Helvetica;\n}\n\n.sli1 ion-card-subtitle {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  line-height: 16px;\n  max-height: 90px;\n  -webkit-line-clamp: 3;\n  /* Write the number of\n     lines you want to be\n     displayed */\n  -webkit-box-orient: vertical;\n}\n\n.sli2 ion-card-subtitle {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  line-height: 16px;\n  max-height: 40px;\n  -webkit-line-clamp: 2;\n  /* Write the number of\n     lines you want to be\n     displayed */\n  -webkit-box-orient: vertical;\n}\n\n.sli2 .swiper-slide img {\n  max-height: 101px;\n  height: 101px;\n}\n\n.slide-padding {\n  padding-bottom: 24px !important;\n}\n\n.slide-padding ion-card-header {\n  background: #f4f4f4;\n}\n\n.swiper-slide img {\n  height: 100%;\n  width: 100%;\n}\n\n.sli1 img {\n  height: 100%;\n  min-height: 281px;\n}\n\n.sli2 img {\n  height: 100%;\n}\n\n.sli3 img {\n  height: 12vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9NYWNQcm8vRGVza3RvcC9ERUNPREVSL0Jhc2tldC9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FER1E7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQ0FaOztBRENZO0VBQ0kscUJBQUE7QUNDaEI7O0FESUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQ0RGOztBRElBO0VBQ0ssa0JBQUE7RUFDQSxXQUFBO0FDREw7O0FESUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQztFQUNFLGtCQUFBO0FDREg7O0FESUE7RUFDRyxrQkFBQTtFQUNDLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNESjs7QURJQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDREY7O0FESUM7RUFDRSxlQUFBO0VBQ0Msc0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0RKOztBREdDO0VBQ0Usa0JBQUE7QUNBSDs7QURHQztFQUNFLGlCQUFBO0FDQUg7O0FER0M7RUFDRSxlQUFBO0VBQ0Msc0JBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREVBOzs7OztDQUFBOztBQVFDO0VBQ0csa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUNESjs7QURNQztFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQ0hIOztBRE1DO0VBQ0MsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQXVCOztnQkFBQTtFQUd2Qiw0QkFBQTtBQ0ZGOztBREtDO0VBQ0MsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQXVCOztnQkFBQTtFQUd2Qiw0QkFBQTtBQ0RGOztBRElFO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDREY7O0FESUE7RUFDRywrQkFBQTtBQ0RIOztBRElDO0VBQ0UsbUJBQUE7QUNESDs7QURJQztFQUNNLFlBQUE7RUFDSixXQUFBO0FDREg7O0FES0M7RUFDRSxZQUFBO0VBQ0YsaUJBQUE7QUNGRDs7QURLQztFQUNLLFlBQUE7QUNGTjs7QURLQztFQUNHLFlBQUE7QUNGSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jdXN0b20tbG9hZGluZyB7XG4gIG9wYWNpdHk6MSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOmFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOjEwMCU7XG4gIGhlaWdodDoxMDAlO1xuICBtaW4taGVpZ2h0OjEwMCU7XG59XG5cbmlvbi1ncmlke1xuICAgICAgICBpb24tY2FyZHtcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDowICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaW9uLWNhcmQtY29udGVudHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbmlvbi1jb2wsIGlvbi1ncmlkIHtcbiAgd2lkdGg6MTAwJTtcbiAgbWFyZ2luLWxlZnQ6MCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6MCAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVye1xuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgIHdpZHRoOiAxMDAlO1xuIH1cblxuLnNsaWRldGl0bGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDYwcHg7XG4gICAgbGVmdDogMThweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LWZhbWlseTogJ0hlbHZldGljYSc7XG4gICAgZm9udC1zaXplOjE0cHggIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDoxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gfVxuXG4gLnNsaWRlckNhcmQge1xuICAgcG9zaXRpb246cmVsYXRpdmU7XG4gfVxuXG4uc2xpZGVyQ2FyZCBpb24tY2FyZC1zdWJ0aXRsZSB7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGVmdDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgIHBhZGRpbmc6IDdweCAxMHB4IDEwcHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgb3BhY2l0eTogMC44O1xuIH1cblxuLnNsaTEgLnNsaWRlckNhcmQgaW9uLWNhcmQtc3VidGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMjglO1xuICB0ZXh0LXRyYW5zZm9ybTpub25lO1xuICBmb250LXdlaWdodDo0MDA7XG59XG5cbi5zbGkyIC5zbGlkZXJDYXJkIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTI4JTtcbiAgdGV4dC10cmFuc2Zvcm06bm9uZTtcbn1cblxuIC5maXJzdFRpdGxlIHtcbiAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG4gfVxuIC5tZzIxIHtcbiAgIG1hcmdpbjoyMXB4IDAgNHB4O1xuIH1cblxuIC5tZzAge1xuICAgbWFyZ2luOjBweCAwIDRweDtcbiB9XG5cbiAuZm91bmQge1xuICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH1cbi8qXG4gLmJsb2Nre1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHBhZGRpbmc6IDRweDtcbiB9XG4qL1xuXG5cbiAuYXV0aG9yIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAyNXB4O1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgY29sb3I6IHJnYigyNDAsIDI0MCwgMjQwKTtcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDNweCAjMDAwMDAwO1xuIH1cblxuXG5cbiAuc3ViLWhlYWRlcnMgcCB7XG4gICBmb250LXNpemU6IDIwcHg7XG4gICBmb250LWZhbWlseTpIZWx2ZXRpY2E7XG4gfVxuXG4gLnNsaTEgaW9uLWNhcmQtc3VidGl0bGUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXgtaGVpZ2h0OiA5MHB4O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7IC8qIFdyaXRlIHRoZSBudW1iZXIgb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lcyB5b3Ugd2FudCB0byBiZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXllZCAqL1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuIH1cblxuIC5zbGkyIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbWF4LWhlaWdodDogNDBweDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyOyAvKiBXcml0ZSB0aGUgbnVtYmVyIG9mXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZXMgeW91IHdhbnQgdG8gYmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5ZWQgKi9cbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiB9XG5cbiAgLnNsaTIgLnN3aXBlci1zbGlkZSBpbWcge1xuICBtYXgtaGVpZ2h0OjEwMXB4O1xuICBoZWlnaHQ6MTAxcHg7XG4gIH1cblxuLnNsaWRlLXBhZGRpbmcgIHtcbiAgIHBhZGRpbmctYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XG4gfVxuXG4gLnNsaWRlLXBhZGRpbmcgaW9uLWNhcmQtaGVhZGVye1xuICAgYmFja2dyb3VuZDojZjRmNGY0O1xuIH1cblxuIC5zd2lwZXItc2xpZGUgaW1nIHtcbiAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICB3aWR0aDoxMDAlO1xuIH1cblxuXG4gLnNsaTEgaW1nIHtcbiAgIGhlaWdodDogMTAwJTtcbiBtaW4taGVpZ2h0OiAyODFweDtcbiB9XG5cbiAuc2xpMiBpbWcge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuIH1cblxuIC5zbGkzIGltZyB7XG4gICAgaGVpZ2h0OiAxMnZoO1xuIH1cbiIsIi53ZWxjb21lLWNhcmQgaW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmN1c3RvbS1sb2FkaW5nIHtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tZ3JpZCBpb24tY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cbmlvbi1ncmlkIGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb2wsIGlvbi1ncmlkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNsaWRldGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNjBweDtcbiAgbGVmdDogMThweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIjtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uc2xpZGVyQ2FyZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNsaWRlckNhcmQgaW9uLWNhcmQtc3VidGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbGVmdDogMjBweDtcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgcGFkZGluZzogN3B4IDEwcHggMTBweDtcbiAgY29sb3I6ICNmZmY7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLnNsaTEgLnNsaWRlckNhcmQgaW9uLWNhcmQtc3VidGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMjglO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnNsaTIgLnNsaWRlckNhcmQgaW9uLWNhcmQtc3VidGl0bGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxMjglO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLmZpcnN0VGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMTNweDtcbn1cblxuLm1nMjEge1xuICBtYXJnaW46IDIxcHggMCA0cHg7XG59XG5cbi5tZzAge1xuICBtYXJnaW46IDBweCAwIDRweDtcbn1cblxuLmZvdW5kIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogaGVsdmV0aWNhO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qXG4gLmJsb2Nre1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHBhZGRpbmc6IDRweDtcbiB9XG4qL1xuLmF1dGhvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAyNXB4O1xuICBsZWZ0OiAyMHB4O1xuICBjb2xvcjogI2YwZjBmMDtcbiAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDNweCAjMDAwMDAwO1xufVxuXG4uc3ViLWhlYWRlcnMgcCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbn1cblxuLnNsaTEgaW9uLWNhcmQtc3VidGl0bGUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXgtaGVpZ2h0OiA5MHB4O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gIC8qIFdyaXRlIHRoZSBudW1iZXIgb2ZcbiAgICAgbGluZXMgeW91IHdhbnQgdG8gYmVcbiAgICAgZGlzcGxheWVkICovXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG5cbi5zbGkyIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBsaW5lLWhlaWdodDogMTZweDtcbiAgbWF4LWhlaWdodDogNDBweDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAvKiBXcml0ZSB0aGUgbnVtYmVyIG9mXG4gICAgIGxpbmVzIHlvdSB3YW50IHRvIGJlXG4gICAgIGRpc3BsYXllZCAqL1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4uc2xpMiAuc3dpcGVyLXNsaWRlIGltZyB7XG4gIG1heC1oZWlnaHQ6IDEwMXB4O1xuICBoZWlnaHQ6IDEwMXB4O1xufVxuXG4uc2xpZGUtcGFkZGluZyB7XG4gIHBhZGRpbmctYm90dG9tOiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zbGlkZS1wYWRkaW5nIGlvbi1jYXJkLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG59XG5cbi5zd2lwZXItc2xpZGUgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNsaTEgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAyODFweDtcbn1cblxuLnNsaTIgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2xpMyBpbWcge1xuICBoZWlnaHQ6IDEydmg7XG59Il19 */");

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
/* harmony import */ var _providers_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../providers/loader.service */ "./src/app/providers/loader.service.ts");




let HomePage = class HomePage {
    constructor(wp, loadingService) {
        this.wp = wp;
        this.loadingService = loadingService;
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
            yield this.loadingService.showLoading('ifOfLoading');
            this.wp.getPosts(this.page).subscribe(res => {
                this.count = this.wp.totalPosts;
                this.posts = res;
                this.loadingService.dismissLoader('ifOfLoading');
            });
        });
    }
    getPostByCategories1(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.loadingService.showLoading('ifOfLoading2');
            this.first = false;
            this.isFirst = false;
            this.wp.getPostsByCategory(id).subscribe(res => {
                this.postsPerCat1 = res;
                this.count = this.wp.totalPosts;
                console.log(this.postsPerCat1);
                //console.log(this.categories);
                this.loadingService.dismissLoader('ifOfLoading2');
            });
        });
    }
    getPostByCategories2(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.loadingService.showLoading('ifOfLoading3');
            this.first = false;
            this.isFirst = false;
            this.wp.getPostsByCategory(id).subscribe(res => {
                this.postsPerCat2 = res;
                //this.count = this.wp.totalPosts;
                console.log(this.postsPerCat2);
                //console.log(this.categories);
                this.loadingService.dismissLoader('ifOfLoading3');
            });
        });
    }
    getPostByCategories3(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.loadingService.showLoading('ifOfLoading4');
            this.first = false;
            this.isFirst = false;
            this.wp.getPostsByCategory(id).subscribe(res => {
                this.postsPerCat3 = res;
                //this.count = this.wp.totalPosts;
                console.log(this.postsPerCat3);
                //console.log(this.categories);
                this.loadingService.dismissLoader('ifOfLoading4');
            });
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _providers_word_press_word_press__WEBPACK_IMPORTED_MODULE_1__["WordpressService"] },
    { type: _providers_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_word_press_word_press__WEBPACK_IMPORTED_MODULE_1__["WordpressService"], _providers_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module-es2015.js.map