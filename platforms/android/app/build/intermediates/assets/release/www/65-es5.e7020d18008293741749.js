var __awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{u(r.next(e))}catch(t){o(t)}}function a(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){e.done?i(e.value):new n((function(t){t(e.value)})).then(s,a)}u((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},__values=this&&this.__values||function(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}};(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"qF1+":function(e,t,n){"use strict";n.r(t),n.d(t,"ion_nav",(function(){return f})),n.d(t,"ion_nav_link",(function(){return b})),n.d(t,"ion_nav_pop",(function(){return m})),n.d(t,"ion_nav_push",(function(){return y})),n.d(t,"ion_nav_set_root",(function(){return w}));var r=n("c1op"),i=n("AfW+"),o=n("aiEM"),s=n("kBU6"),a=n("m9yc"),u=n("K6rM"),c=n("qaSm"),l=1,h=function(){function e(e,t){this.component=e,this.params=t,this.state=l}return e.prototype.init=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n;return __generator(this,(function(r){switch(r.label){case 0:return this.state=2,this.element?[3,2]:(t=this.component,n=this,[4,Object(a.a)(this.delegate,e,t,["ion-page","ion-page-invisible"],this.params)]);case 1:n.element=r.sent(),r.label=2;case 2:return[2]}}))}))},e.prototype._destroy=function(){Object(o.b)(3!==this.state,"view state must be ATTACHED");var e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=3},e}(),p=function(e,t,n){var r,i;if(!e)return!1;if(e.component!==t)return!1;var o=e.params;if(o===n)return!0;if(!o&&!n)return!0;if(!o||!n)return!1;var s=Object.keys(o),a=Object.keys(n);if(s.length!==a.length)return!1;try{for(var u=__values(s),c=u.next();!c.done;c=u.next()){var l=c.value;if(o[l]!==n[l])return!1}}catch(h){r={error:h}}finally{try{c&&!c.done&&(i=u.return)&&i.call(u)}finally{if(r)throw r.error}}return!0},v=function(e,t){return e?e instanceof h?e:new h(e,t):null},f=function(){function e(e){Object(r.l)(this,e),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0,this.ionNavWillLoad=Object(r.e)(this,"ionNavWillLoad",7),this.ionNavWillChange=Object(r.e)(this,"ionNavWillChange",3),this.ionNavDidChange=Object(r.e)(this,"ionNavDidChange",3)}return e.prototype.swipeGestureChanged=function(){this.gesture&&this.gesture.setDisabled(!0!==this.swipeGesture)},e.prototype.rootChanged=function(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))},e.prototype.componentWillLoad=function(){if(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture){var e=Object(r.d)(this);this.swipeGesture=i.b.getBoolean("swipeBackEnabled","ios"===e)}this.ionNavWillLoad.emit()},e.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){switch(t.label){case 0:return this.rootChanged(),e=this,[4,n.e(2).then(n.bind(null,"0yHn"))];case 1:return e.gesture=t.sent().createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged(),[2]}}))}))},e.prototype.componentDidUnload=function(){var e,t;try{for(var n=__values(this.views),r=n.next();!r.done;r=n.next()){var i=r.value;Object(u.c)(i.element,s.e),i._destroy()}}catch(o){e={error:o}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0},e.prototype.push=function(e,t,n,r){return this.queueTrns({insertStart:-1,insertViews:[{page:e,params:t}],opts:n},r)},e.prototype.insert=function(e,t,n,r,i){return this.queueTrns({insertStart:e,insertViews:[{page:t,params:n}],opts:r},i)},e.prototype.insertPages=function(e,t,n,r){return this.queueTrns({insertStart:e,insertViews:t,opts:n},r)},e.prototype.pop=function(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)},e.prototype.popTo=function(e,t,n){var r={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(r.removeView=e,r.removeStart=1):"number"==typeof e&&(r.removeStart=e+1),this.queueTrns(r,n)},e.prototype.popToRoot=function(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)},e.prototype.removeIndex=function(e,t,n,r){return void 0===t&&(t=1),this.queueTrns({removeStart:e,removeCount:t,opts:n},r)},e.prototype.setRoot=function(e,t,n,r){return this.setPages([{page:e,params:t}],n,r)},e.prototype.setPages=function(e,t,n){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)},e.prototype.setRouteId=function(e,t,n){var r,i=this,o=this.getActiveSync();if(p(o,e,t))return Promise.resolve({changed:!1,element:o.element});var s,a=new Promise((function(e){return r=e})),u={updateURL:!1,viewIsReady:function(e){var t,n=new Promise((function(e){return t=e}));return r({changed:!0,element:e,markVisible:function(){return __awaiter(i,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return t(),[4,s];case 1:return e.sent(),[2]}}))}))}}),n}};if("root"===n)s=this.setRoot(e,t,u);else{var c=this.views.find((function(n){return p(n,e,t)}));c?s=this.popTo(c,Object.assign(Object.assign({},u),{direction:"back"})):"forward"===n?s=this.push(e,t,u):"back"===n&&(s=this.setRoot(e,t,Object.assign(Object.assign({},u),{direction:"back",animated:!0})))}return a},e.prototype.getRouteId=function(){return __awaiter(this,void 0,void 0,(function(){var e;return __generator(this,(function(t){return[2,(e=this.getActiveSync())?{id:e.element.tagName,params:e.params,element:e.element}:void 0]}))}))},e.prototype.getActive=function(){return Promise.resolve(this.getActiveSync())},e.prototype.getByIndex=function(e){return Promise.resolve(this.views[e])},e.prototype.canGoBack=function(e){return Promise.resolve(this.canGoBackSync(e))},e.prototype.getPrevious=function(e){return Promise.resolve(this.getPreviousSync(e))},e.prototype.getLength=function(){return this.views.length},e.prototype.getActiveSync=function(){return this.views[this.views.length-1]},e.prototype.canGoBackSync=function(e){return void 0===e&&(e=this.getActiveSync()),!(!e||!this.getPreviousSync(e))},e.prototype.getPreviousSync=function(e){if(void 0===e&&(e=this.getActiveSync()),e){var t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}},e.prototype.queueTrns=function(e,t){if(this.isTransitioning&&null!=e.opts&&e.opts.skipIfBusy)return Promise.resolve(!1);var n=new Promise((function(t,n){e.resolve=t,e.reject=n}));return e.done=t,e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),n},e.prototype.success=function(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){var n=document.querySelector("ion-router");n&&n.navChanged("back"===e.direction?"back":"forward")}},e.prototype.failed=function(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))},e.prototype.fireError=function(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)},e.prototype.nextTrns=function(){if(this.isTransitioning)return!1;var e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)},e.prototype.runTransition=function(e){return __awaiter(this,void 0,void 0,(function(){var t,n,r,i,o;return __generator(this,(function(s){switch(s.label){case 0:if(s.trys.push([0,6,,7]),this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(e),t=this.getActiveSync(),n=this.getEnteringView(e,t),!t&&!n)throw new Error("no views in the stack to be removed");return n&&n.state===l?[4,n.init(this.el)]:[3,2];case 1:s.sent(),s.label=2;case 2:return this.postViewInit(n,t,e),!e.enteringRequiresTransition&&!e.leavingRequiresTransition||n===t?[3,4]:[4,this.transition(n,t,e)];case 3:return i=s.sent(),[3,5];case 4:i={hasCompleted:!0,requiresTransition:!1},s.label=5;case 5:return r=i,this.success(r,e),this.ionNavDidChange.emit(),[3,7];case 6:return o=s.sent(),this.failed(o,e),[3,7];case 7:return this.isTransitioning=!1,this.nextTrns(),[2]}}))}))},e.prototype.prepareTI=function(e){var t,n,r=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),void 0!==e.removeView){Object(o.b)(void 0!==e.removeStart,"removeView needs removeStart"),Object(o.b)(void 0!==e.removeCount,"removeView needs removeCount");var i=this.views.indexOf(e.removeView);if(i<0)throw new Error("removeView was not found");e.removeStart+=i}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=r-1),e.removeCount<0&&(e.removeCount=r-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===r),e.insertViews&&((e.insertStart<0||e.insertStart>r)&&(e.insertStart=r),e.enteringRequiresTransition=e.insertStart===r);var s=e.insertViews;if(s){Object(o.b)(s.length>0,"length can not be zero");var a=s.map((function(e){return e instanceof h?e:"page"in e?v(e.page,e.params):v(e,void 0)})).filter((function(e){return null!==e}));if(0===a.length)throw new Error("invalid views to insert");try{for(var u=__values(a),c=u.next();!c.done;c=u.next()){var l=c.value;l.delegate=e.opts.delegate;var p=l.nav;if(p&&p!==this)throw new Error("inserted view was already inserted");if(3===l.state)throw new Error("inserted view was already destroyed")}}catch(f){t={error:f}}finally{try{c&&!c.done&&(n=u.return)&&n.call(u)}finally{if(t)throw t.error}}e.insertViews=a}},e.prototype.getEnteringView=function(e,t){var n=e.insertViews;if(void 0!==n)return n[n.length-1];var r=e.removeStart;if(void 0!==r)for(var i=this.views,o=r+e.removeCount,s=i.length-1;s>=0;s--){var a=i[s];if((s<r||s>=o)&&a!==t)return a}},e.prototype.postViewInit=function(e,t,n){var r,i,a,c,l,h;Object(o.b)(t||e,"Both leavingView and enteringView are null"),Object(o.b)(n.resolve,"resolve must be valid"),Object(o.b)(n.reject,"reject must be valid");var p,v=n.opts,f=n.insertViews,d=n.removeStart,b=n.removeCount;if(void 0!==d&&void 0!==b){Object(o.b)(d>=0,"removeStart can not be negative"),Object(o.b)(b>=0,"removeCount can not be negative"),p=[];for(var m=0;m<b;m++){(O=this.views[m+d])&&O!==e&&O!==t&&p.push(O)}v.direction=v.direction||"back"}var y=this.views.length+(void 0!==f?f.length:0)-(void 0!==b?b:0);if(Object(o.b)(y>=0,"final balance can not be negative"),0===y)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(f){var w=n.insertStart;try{for(var g=__values(f),j=g.next();!j.done;j=g.next()){var O=j.value;this.insertViewAt(O,w),w++}}catch(T){r={error:T}}finally{try{j&&!j.done&&(i=g.return)&&i.call(g)}finally{if(r)throw r.error}}n.enteringRequiresTransition&&(v.direction=v.direction||"forward")}if(p&&p.length>0){try{for(var _=__values(p),S=_.next();!S.done;S=_.next()){O=S.value;Object(u.c)(O.element,s.c),Object(u.c)(O.element,s.d),Object(u.c)(O.element,s.e)}}catch(V){a={error:V}}finally{try{S&&!S.done&&(c=_.return)&&c.call(_)}finally{if(a)throw a.error}}try{for(var C=__values(p),k=C.next();!k.done;k=C.next()){O=k.value;this.destroyView(O)}}catch(E){l={error:E}}finally{try{k&&!k.done&&(h=C.return)&&h.call(C)}finally{if(l)throw l.error}}}},e.prototype.transition=function(e,t,n){return __awaiter(this,void 0,void 0,(function(){var o,s,a,c,l,h,p,v=this;return __generator(this,(function(f){switch(f.label){case 0:return o=n.opts,s=o.progressAnimation?function(e){return v.sbAni=e}:void 0,a=Object(r.d)(this),c=e.element,l=t&&t.element,h=Object.assign({mode:a,showGoBack:this.canGoBackSync(e),baseEl:this.el,animationBuilder:this.animation||o.animationBuilder||i.b.get("navAnimation"),progressCallback:s,animated:this.animated&&i.b.getBoolean("animated",!0),enteringEl:c,leavingEl:l},o),[4,Object(u.e)(h)];case 1:return p=f.sent().hasCompleted,[2,this.transitionFinish(p,e,t,o)]}}))}))},e.prototype.transitionFinish=function(e,t,n,r){var i=e?t:n;return i&&this.cleanup(i),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:r.direction}},e.prototype.insertViewAt=function(e,t){var n=this.views,r=n.indexOf(e);r>-1?(Object(o.b)(e.nav===this,"view is not part of the nav"),n.splice(t,0,n.splice(r,1)[0])):(Object(o.b)(!e.nav,"nav is used"),e.nav=this,n.splice(t,0,e))},e.prototype.removeView=function(e){Object(o.b)(2===e.state||3===e.state,"view state should be loaded or destroyed");var t=this.views,n=t.indexOf(e);Object(o.b)(n>-1,"view must be part of the stack"),n>=0&&t.splice(n,1)},e.prototype.destroyView=function(e){e._destroy(),this.removeView(e)},e.prototype.cleanup=function(e){if(!this.destroyed)for(var t=this.views,n=t.indexOf(e),r=t.length-1;r>=0;r--){var i=t[r],o=i.element;r>n?(Object(u.c)(o,s.e),this.destroyView(i)):r<n&&Object(u.d)(o,!0)}},e.prototype.canStart=function(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()},e.prototype.onStart=function(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)},e.prototype.onMove=function(e){this.sbAni&&this.sbAni.progressStep(e)},e.prototype.onEnd=function(e,t,n){var r=this;if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish((function(){r.animationEnabled=!0}),{oneTimeCallback:!0});var i=e?-.001:.001;e?i+=Object(c.b)(new c.a(0,0),new c.a(.32,.72),new c.a(0,1),new c.a(1,1),t):(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),i+=Object(c.b)(new c.a(0,0),new c.a(1,0),new c.a(.68,.28),new c.a(1,1),t)),this.sbAni.progressEnd(e?1:0,i,n)}},e.prototype.render=function(){return Object(r.i)("slot",null)},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"},enumerable:!0,configurable:!0}),e}(),d=function(e,t,n,r){var i=e.closest("ion-nav");if(i)if("forward"===t){if(void 0!==n)return i.push(n,r,{skipIfBusy:!0})}else if("root"===t){if(void 0!==n)return i.setRoot(n,r,{skipIfBusy:!0})}else if("back"===t)return i.pop({skipIfBusy:!0});return Promise.resolve(!1)},b=function(){function e(e){var t=this;Object(r.l)(this,e),this.routerDirection="forward",this.onClick=function(){return d(t.el,t.routerDirection,t.component,t.componentProps)}}return e.prototype.render=function(){return Object(r.i)(r.a,{onClick:this.onClick})},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),e}(),m=function(){function e(e){var t=this;Object(r.l)(this,e),this.pop=function(){return d(t.el,"back")}}return e.prototype.componentDidLoad=function(){console.warn('[DEPRECATED][ion-nav-pop] <ion-nav-pop> is deprecated. Use `<ion-nav-link routerDirection="back">` instead.')},e.prototype.render=function(){return Object(r.i)(r.a,{onClick:this.pop})},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),e}(),y=function(){function e(e){var t=this;Object(r.l)(this,e),this.push=function(){return d(t.el,"forward",t.component,t.componentProps)}}return e.prototype.componentDidLoad=function(){console.warn('[DEPRECATED][ion-nav-push] `<ion-nav-push component="MyComponent">` is deprecated. Use `<ion-nav-link component="MyComponent">` instead.')},e.prototype.render=function(){return Object(r.i)(r.a,{onClick:this.push})},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),e}(),w=function(){function e(e){var t=this;Object(r.l)(this,e),this.setRoot=function(){return d(t.el,"root",t.component,t.componentProps)}}return e.prototype.componentDidLoad=function(){console.warn('[DEPRECATED][ion-nav-set-root] `<ion-nav-set-root component="MyComponent">` is deprecated. Use `<ion-nav-link component="MyComponent" routerDirection="root">` instead.')},e.prototype.render=function(){return Object(r.i)(r.a,{onClick:this.setRoot})},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),e}()}}]);