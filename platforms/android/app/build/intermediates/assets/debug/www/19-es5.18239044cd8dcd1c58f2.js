var __generator=this&&this.__generator||function(n,l){var t,u,o,i,e={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function r(i){return function(r){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;e;)try{if(t=1,u&&(o=2&i[0]?u.return:i[0]?u.throw||((o=u.return)&&o.call(u),0):u.next)&&!(o=o.call(u,i[1])).done)return o;switch(u=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return e.label++,{value:i[1],done:!1};case 5:e.label++,u=i[1],i=[0];continue;case 7:i=e.ops.pop(),e.trys.pop();continue;default:if(!(o=(o=e.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){e=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){e.label=i[1];break}if(6===i[0]&&e.label<o[1]){e.label=o[1],o=i;break}if(o&&e.label<o[2]){e.label=o[2],e.ops.push(i);break}o[2]&&e.ops.pop(),e.trys.pop();continue}i=l.call(n,e)}catch(r){i=[6,r],u=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,r])}}};(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{iV67:function(n,l,t){"use strict";t.r(l);var u=t("8Y7J"),o=function(){},i=t("pMnS"),e=t("oBZk"),r=t("ZZ/e"),a=t("iInd"),s=t("SVse"),c=t("mrSG"),b=t("o5gY"),p=t("BXtY"),g=function(){function n(n,l,t,u){this.route=n,this.wp=l,this.location=t,this.loadingService=u,this.hystory=[],this.favorites=[],this.sliderConfig={slidesPerView:2}}return n.prototype.ngOnInit=function(){return c.b(this,void 0,void 0,(function(){var n,l=this;return __generator(this,(function(t){switch(t.label){case 0:return[4,this.loadingService.showLoading("ifOfLoading")];case 1:return t.sent(),n=this.route.snapshot.paramMap.get("id"),this.wp.getPostContent(n).subscribe((function(n){l.post=n,console.log(l.post),l.getUser(l.post.author),l.getCategory(l.post.categories[0]),l.loadPostsByTags(l.post.tags[0]),l.getTag(l.post.tags[0]),l.loadingService.dismissLoader("ifOfLoading")})),[2]}}))}))},n.prototype.getUser=function(n){return c.b(this,void 0,void 0,(function(){var l=this;return __generator(this,(function(t){return this.wp.getUser(n).subscribe((function(n){l.user=n})),[2]}))}))},n.prototype.myBackButton=function(){this.location.back()},n.prototype.getCategory=function(n){return c.b(this,void 0,void 0,(function(){var l=this;return __generator(this,(function(t){return this.wp.getCathegory(n).subscribe((function(n){l.category=n})),[2]}))}))},n.prototype.getTag=function(n){return c.b(this,void 0,void 0,(function(){var l=this;return __generator(this,(function(t){switch(t.label){case 0:return[4,this.loadingService.showLoading("ifOfLoading2")];case 1:return t.sent(),this.wp.getTagName(n).subscribe((function(n){l.tagName=n,l.loadingService.dismissLoader("ifOfLoading2")})),[2]}}))}))},n.prototype.openOriginal=function(){window.open(this.post.link,"_blank")},n.prototype.loadPostsByTags=function(n){return c.b(this,void 0,void 0,(function(){var l=this;return __generator(this,(function(t){return this.wp.getPostsByTag(n).subscribe((function(n){l.posts=n})),[2]}))}))},n.prototype.addToFavorites=function(n){var l=this;this.wp.saveToFavorite(n).subscribe((function(n){l.favorites=n}))},n.prototype.slideNext=function(n,l){l.slideNext(500)},n.prototype.slidePrev=function(n,l){l.slidePrev(500)},n.prototype.SlideDidChange=function(n,l){this.checkIfNavDisabled(n,l)},n.prototype.checkIfNavDisabled=function(n,l){this.checkisBeginning(n,l),this.checkisEnd(n,l)},n.prototype.checkisBeginning=function(n,l){l.isBeginning().then((function(l){n.isBeginningSlide=l}))},n.prototype.checkisEnd=function(n,l){l.isEnd().then((function(l){n.isEndSlide=l}))},n}(),f=u.zb({encapsulation:0,styles:[['ion-content[_ngcontent-%COMP%]   .author[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .cath[_ngcontent-%COMP%]{margin:10px 16px -20px}ion-content[_ngcontent-%COMP%]   .slider1[_ngcontent-%COMP%]{position:relative;display:inline;cursor:pointer}ion-content[_ngcontent-%COMP%]   .relImg[_ngcontent-%COMP%]{position:absolute;height:200px;-o-object-fit:cover;object-fit:cover;max-width:none;max-height:none;z-index:2}ion-content[_ngcontent-%COMP%]   .relText[_ngcontent-%COMP%]{display:inline-flex;z-index:3;color:#fff;font-family:"Times New Roman",Times,serif;font-size:12px;position:relative}ion-content[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]{height:100px}ion-content[_ngcontent-%COMP%]   .custom-loading[_ngcontent-%COMP%]{opacity:1!important;background:#fff!important;position:absolute!important;width:100%;height:100%;min-height:100%}ion-content[_ngcontent-%COMP%]   .dTitle[_ngcontent-%COMP%]{position:absolute;color:#fff;bottom:20px;width:100%;z-index:10;padding:10px;background:#000;opacity:.8;margin:0 10px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;line-height:16px;max-height:40px;-webkit-line-clamp:2;-webkit-box-orient:vertical}ion-content[_ngcontent-%COMP%]   .imgWrapper[_ngcontent-%COMP%]{position:relative}ion-toolbar[_ngcontent-%COMP%]{--background:transparent;--ion-color-base:transparent!important;position:absolute}.bckBtn[_ngcontent-%COMP%]{color:#fff!important}']],data:{}});function d(n){return u.Wb(0,[(n()(),u.Bb(0,0,null,null,20,"div",[],null,null,null,null,null)),(n()(),u.Bb(1,0,null,null,3,"div",[["class","imgWrapper"]],null,null,null,null,null)),(n()(),u.Bb(2,0,null,null,1,"ion-title",[["class","dTitle"]],[[8,"innerHTML",1]],null,null,e.ib,e.D)),u.Ab(3,49152,null,0,r.yb,[u.j,u.p,u.F],null,null),(n()(),u.Bb(4,0,null,null,0,"img",[],[[8,"src",4],[4,"width",null]],null,null,null,null)),(n()(),u.Bb(5,0,null,null,1,"div",[["class","author"]],null,null,null,null,null)),(n()(),u.Ub(6,null,["Author: ",""])),(n()(),u.Bb(7,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u.Bb(8,0,null,null,1,"div",[["class","cath"]],null,null,null,null,null)),(n()(),u.Ub(9,null,["Cath: ",""])),(n()(),u.Bb(10,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u.Bb(11,0,null,null,1,"div",[["class","cath"]],null,null,null,null,null)),(n()(),u.Ub(12,null,["Tag: ",""])),(n()(),u.Bb(13,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u.Bb(14,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u.Ub(-1,null,[" \xa0\xa0\xa0"])),(n()(),u.Bb(16,0,null,null,3,"ion-button",[["class","favBtn"]],null,[[null,"click"]],(function(n,l,t){var u=!0,o=n.component;return"click"===l&&(u=!1!==o.addToFavorites(o.post.id)&&u),u}),e.I,e.d)),u.Ab(17,49152,null,0,r.i,[u.j,u.p,u.F],null,null),(n()(),u.Bb(18,0,null,0,1,"ion-icon",[["end",""],["name","heart"]],null,null,null,e.T,e.o)),u.Ab(19,49152,null,0,r.A,[u.j,u.p,u.F],{name:[0,"name"]},null),(n()(),u.Bb(20,0,null,null,0,"div",[["class","ion-padding"]],[[8,"innerHTML",1]],null,null,null,null))],(function(n,l){n(l,19,0,"heart")}),(function(n,l){var t=l.component;n(l,2,0,null==t.post?null:t.post.title.rendered),n(l,4,0,t.post.media_url,"100%"),n(l,6,0,null==t.user?null:t.user.name),n(l,9,0,null==t.category?null:t.category.name),n(l,12,0,null==t.tagName?null:t.tagName.name),n(l,20,0,t.post.content.rendered)}))}function h(n){return u.Wb(0,[(n()(),u.Bb(0,0,null,null,1,"div",[["class","cath"]],null,null,null,null,null)),(n()(),u.Ub(-1,null,["Related Articles:"]))],null,null)}function m(n){return u.Wb(0,[(n()(),u.Bb(0,0,null,null,9,"ion-slide",[],null,null,null,e.db,e.y)),u.Ab(1,49152,null,0,r.ob,[u.j,u.p,u.F],null,null),(n()(),u.Bb(2,0,null,0,7,"ion-card",[],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==u.Nb(n,4).onClick()&&o),"click"===l&&(o=!1!==u.Nb(n,6).onClick(t)&&o),o}),e.O,e.f)),u.Ab(3,49152,null,0,r.k,[u.j,u.p,u.F],null,null),u.Ab(4,16384,null,0,a.n,[a.m,a.a,[8,null],u.K,u.p],{routerLink:[0,"routerLink"]},null),u.Ob(5,1),u.Ab(6,737280,null,0,r.Jb,[s.h,r.Gb,u.p,a.m,[2,a.n]],null,null),(n()(),u.Bb(7,0,null,0,0,"img",[],[[8,"src",4],[8,"alt",0]],null,null,null,null)),(n()(),u.Bb(8,0,null,0,1,"ion-card-subtitle",[],[[8,"innerHTML",1]],null,null,e.M,e.i)),u.Ab(9,49152,null,0,r.n,[u.j,u.p,u.F],null,null)],(function(n,l){var t=n(l,5,0,"/tabs/home/post/"+l.context.$implicit.id);n(l,4,0,t),n(l,6,0)}),(function(n,l){n(l,7,0,l.context.$implicit.fimg_url,u.Fb(1,"",l.context.$implicit.title.rendered,"")),n(l,8,0,l.context.$implicit.title.rendered)}))}function v(n){return u.Wb(0,[(n()(),u.Bb(0,0,null,null,9,"ion-header",[["no-border",""]],null,null,null,e.S,e.n)),u.Ab(1,49152,null,0,r.z,[u.j,u.p,u.F],null,null),(n()(),u.Bb(2,0,null,0,7,"ion-toolbar",[["translucent",""]],null,null,null,e.jb,e.E)),u.Ab(3,49152,null,0,r.Ab,[u.j,u.p,u.F],null,null),(n()(),u.Bb(4,0,null,0,5,"ion-buttons",[["slot","start"]],null,null,null,e.J,e.e)),u.Ab(5,49152,null,0,r.j,[u.j,u.p,u.F],null,null),(n()(),u.Bb(6,0,null,0,3,"ion-button",[["class","bckBtn"],["fill","clear"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.myBackButton()&&u),u}),e.I,e.d)),u.Ab(7,49152,null,0,r.i,[u.j,u.p,u.F],{fill:[0,"fill"]},null),(n()(),u.Bb(8,0,null,0,1,"ion-icon",[["name","md-arrow-back"],["slot","icon-only"]],null,null,null,e.T,e.o)),u.Ab(9,49152,null,0,r.A,[u.j,u.p,u.F],{name:[0,"name"]},null),(n()(),u.Bb(10,0,null,null,16,"ion-content",[["fullscreen",""]],null,null,null,e.Q,e.l)),u.Ab(11,49152,null,0,r.s,[u.j,u.p,u.F],{fullscreen:[0,"fullscreen"]},null),(n()(),u.qb(16777216,null,0,1,null,d)),u.Ab(13,16384,null,0,s.j,[u.W,u.S],{ngIf:[0,"ngIf"]},null),(n()(),u.qb(16777216,null,0,1,null,h)),u.Ab(15,16384,null,0,s.j,[u.W,u.S],{ngIf:[0,"ngIf"]},null),(n()(),u.Bb(16,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),u.Bb(17,0,null,0,9,"ion-grid",[],null,null,null,e.R,e.m)),u.Ab(18,49152,null,0,r.y,[u.j,u.p,u.F],null,null),(n()(),u.Bb(19,0,null,0,7,"ion-row",[],null,null,null,e.Z,e.u)),u.Ab(20,49152,null,0,r.hb,[u.j,u.p,u.F],null,null),(n()(),u.Bb(21,0,null,0,5,"ion-col",[["size","10"]],null,null,null,e.P,e.k)),u.Ab(22,49152,null,0,r.r,[u.j,u.p,u.F],{size:[0,"size"]},null),(n()(),u.Bb(23,0,null,0,3,"ion-slides",[["class","slide-padding sli3"],["pager","true"]],null,null,null,e.eb,e.z)),u.Ab(24,49152,[["slideWithNav",4]],0,r.pb,[u.j,u.p,u.F],{options:[0,"options"],pager:[1,"pager"]},null),(n()(),u.qb(16777216,null,0,1,null,m)),u.Ab(26,278528,null,0,s.i,[u.W,u.S,u.x],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var t=l.component;n(l,7,0,"clear"),n(l,9,0,"md-arrow-back"),n(l,11,0,""),n(l,13,0,t.post),n(l,15,0,t.post),n(l,22,0,"10"),n(l,24,0,t.sliderConfig,"true"),n(l,26,0,t.posts)}),null)}var y=u.xb("app-post",g,(function(n){return u.Wb(0,[(n()(),u.Bb(0,0,null,null,1,"app-post",[],null,null,null,v,f)),u.Ab(1,114688,null,0,g,[a.a,b.a,s.g,p.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),B=t("s7LF");t.d(l,"PostPageModuleNgFactory",(function(){return k}));var k=u.yb(o,[],(function(n){return u.Kb([u.Lb(512,u.m,u.jb,[[8,[i.a,y]],[3,u.m],u.D]),u.Lb(4608,s.l,s.k,[u.z,[2,s.r]]),u.Lb(4608,r.a,r.a,[u.F,u.g]),u.Lb(4608,r.Fb,r.Fb,[r.a,u.m,u.w]),u.Lb(4608,r.Ib,r.Ib,[r.a,u.m,u.w]),u.Lb(4608,B.g,B.g,[]),u.Lb(1073742336,s.b,s.b,[]),u.Lb(1073742336,r.Cb,r.Cb,[]),u.Lb(1073742336,B.f,B.f,[]),u.Lb(1073742336,B.a,B.a,[]),u.Lb(1073742336,a.o,a.o,[[2,a.t],[2,a.m]]),u.Lb(1073742336,o,o,[]),u.Lb(1024,a.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);