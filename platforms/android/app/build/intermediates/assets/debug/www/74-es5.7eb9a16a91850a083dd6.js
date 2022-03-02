var __awaiter=this&&this.__awaiter||function(e,r,t,i){return new(t||(t=Promise))((function(n,s){function o(e){try{h(i.next(e))}catch(r){s(r)}}function l(e){try{h(i.throw(e))}catch(r){s(r)}}function h(e){e.done?n(e.value):new t((function(r){r(e.value)})).then(o,l)}h((i=i.apply(e,r||[])).next())}))},__generator=this&&this.__generator||function(e,r){var t,i,n,s,o={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function l(s){return function(l){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,i&&(n=2&s[0]?i.return:s[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,s[1])).done)return n;switch(i=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,i=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(n=(n=o.trys).length>0&&n[n.length-1])&&(6===s[0]||2===s[0])){o=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){o.label=s[1];break}if(6===s[0]&&o.label<n[1]){o.label=n[1],n=s;break}if(n&&o.label<n[2]){o.label=n[2],o.ops.push(s);break}n[2]&&o.ops.pop(),o.trys.pop();continue}s=r.call(e,o)}catch(l){s=[6,l],i=0}finally{t=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}};(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{CXux:function(e,r,t){"use strict";t.r(r),t.d(r,"ion_refresher",(function(){return o})),t.d(r,"ion_refresher_content",(function(){return l}));var i=t("c1op"),n=t("AfW+"),s=t("YtD4"),o=function(){function e(e){Object(i.l)(this,e),this.appliedStyles=!1,this.didStart=!1,this.progress=0,this.state=1,this.pullMin=60,this.pullMax=this.pullMin+60,this.closeDuration="280ms",this.snapbackDuration="280ms",this.pullFactor=1,this.disabled=!1,this.ionRefresh=Object(i.e)(this,"ionRefresh",7),this.ionPull=Object(i.e)(this,"ionPull",7),this.ionStart=Object(i.e)(this,"ionStart",7)}return e.prototype.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled)},e.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var e,r,i,n=this;return __generator(this,(function(s){switch(s.label){case 0:return"fixed"!==this.el.getAttribute("slot")?[2,void console.error('Make sure you use: <ion-refresher slot="fixed">')]:(e=this.el.closest("ion-content"))?(r=this,[4,e.getScrollElement()]):[3,3];case 1:return r.scrollEl=s.sent(),i=this,[4,Promise.resolve().then(t.bind(null,"mUkt"))];case 2:return i.gesture=s.sent().createGesture({el:e,gestureName:"refresher",gesturePriority:10,direction:"y",threshold:20,passive:!1,canStart:function(){return n.canStart()},onStart:function(){return n.onStart()},onMove:function(e){return n.onMove(e)},onEnd:function(){return n.onEnd()}}),this.disabledChanged(),[3,4];case 3:console.error("<ion-refresher> must be used inside an <ion-content>"),s.label=4;case 4:return[2]}}))}))},e.prototype.disconnectedCallback=function(){this.scrollEl=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},e.prototype.complete=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return this.close(32,"120ms"),[2]}))}))},e.prototype.cancel=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return this.close(16,""),[2]}))}))},e.prototype.getProgress=function(){return Promise.resolve(this.progress)},e.prototype.canStart=function(){return!(!this.scrollEl||1!==this.state||this.scrollEl.scrollTop>0)},e.prototype.onStart=function(){this.progress=0,this.state=1},e.prototype.onMove=function(e){if(this.scrollEl){var r=e.event;if(!(r.touches&&r.touches.length>1)&&0==(56&this.state)){var t=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor,i=e.deltaY*t;if(i<=0)return this.progress=0,this.state=1,this.appliedStyles?void this.setCss(0,"",!1,""):void 0;if(1===this.state){if(this.scrollEl.scrollTop>0)return void(this.progress=0);this.state=2}if(r.cancelable&&r.preventDefault(),this.setCss(i,"0ms",!0,""),0!==i){var n=this.pullMin;this.progress=i/n,this.didStart||(this.didStart=!0,this.ionStart.emit()),this.ionPull.emit(),i<n?this.state=2:i>this.pullMax?this.beginRefresh():this.state=4}else this.progress=0}}},e.prototype.onEnd=function(){4===this.state?this.beginRefresh():2===this.state&&this.cancel()},e.prototype.beginRefresh=function(){this.state=8,this.setCss(this.pullMin,this.snapbackDuration,!0,""),this.ionRefresh.emit({complete:this.complete.bind(this)})},e.prototype.close=function(e,r){var t=this;setTimeout((function(){t.state=1,t.progress=0,t.didStart=!1,t.setCss(0,"0ms",!1,"")}),600),this.state=e,this.setCss(0,this.closeDuration,!0,r)},e.prototype.setCss=function(e,r,t,n){var s=this;this.appliedStyles=e>0,Object(i.m)((function(){if(s.scrollEl){var i=s.scrollEl.style;i.transform=e>0?"translateY("+e+"px) translateZ(0px)":"translateZ(0px)",i.transitionDuration=r,i.transitionDelay=n,i.overflow=t?"hidden":""}}))},e.prototype.render=function(){var e,r=Object(i.d)(this);return Object(i.i)(i.a,{slot:"fixed",class:(e={},e[r]=!0,e["refresher-"+r]=!0,e["refresher-active"]=1!==this.state,e["refresher-pulling"]=2===this.state,e["refresher-ready"]=4===this.state,e["refresher-refreshing"]=8===this.state,e["refresher-cancelling"]=16===this.state,e["refresher-completing"]=32===this.state,e)})},Object.defineProperty(e.prototype,"el",{get:function(){return Object(i.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-refresher{left:0;top:0;display:none;position:absolute;width:100%;height:60px;z-index:-1}:host-context([dir=rtl]) ion-refresher,[dir=rtl] ion-refresher{left:unset;right:unset;right:0}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:.2s;transition:.2s;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon,[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}.refresher-pulling ion-refresher-content .refresher-pulling,.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-cancelling ion-refresher-content .refresher-pulling,.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-icon,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color,#000)}.refresher-ios .refresher-refreshing .spinner-crescent circle,.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line{stroke:var(--ion-text-color,#000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color,#000)}"},enumerable:!0,configurable:!0}),e}(),l=function(){function e(e){Object(i.l)(this,e)}return e.prototype.componentWillLoad=function(){if(void 0===this.pullingIcon&&(this.pullingIcon=n.b.get("refreshingIcon","arrow-down")),void 0===this.refreshingSpinner){var e=Object(i.d)(this);this.refreshingSpinner=n.b.get("refreshingSpinner",n.b.get("spinner","ios"===e?"lines":"crescent"))}},e.prototype.render=function(){return Object(i.i)(i.a,{class:Object(i.d)(this)},Object(i.i)("div",{class:"refresher-pulling"},this.pullingIcon&&Object(i.i)("div",{class:"refresher-pulling-icon"},Object(i.i)("ion-icon",{icon:this.pullingIcon,lazy:!1})),this.pullingText&&Object(i.i)("div",{class:"refresher-pulling-text",innerHTML:Object(s.a)(this.pullingText)})),Object(i.i)("div",{class:"refresher-refreshing"},this.refreshingSpinner&&Object(i.i)("div",{class:"refresher-refreshing-icon"},Object(i.i)("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&Object(i.i)("div",{class:"refresher-refreshing-text",innerHTML:Object(s.a)(this.refreshingText)})))},e}()}}]);