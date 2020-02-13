var __awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(r,o){function s(t){try{a(n.next(t))}catch(e){o(e)}}function l(t){try{a(n.throw(t))}catch(e){o(e)}}function a(t){t.done?r(t.value):new i((function(e){e(t.value)})).then(s,l)}a((n=n.apply(t,e||[])).next())}))},__generator=this&&this.__generator||function(t,e){var i,n,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,n&&(r=2&o[0]?n.return:o[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,o[1])).done)return r;switch(n=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,n=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1];break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o);break}r[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(l){o=[6,l],n=0}finally{i=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},__values=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],i=0;return e?e.call(t):{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}}};(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{"8Mb5":function(t,e,i){"use strict";i.r(e),i.d(e,"ion_virtual_scroll",(function(){return l}));var n=i("c1op");i("AfW+");var r=function(t,e){var i=o(t,e);return i&&t.ownerDocument?t.ownerDocument.importNode(i.content,!0).children[0]:null},o=function(t,e){switch(e){case"item":return t.querySelector("template:not([name])");case"header":return t.querySelector("template[name=header]");case"footer":return t.querySelector("template[name=footer]")}},s=function(t,e,i,n,r,o,s,l,a,h,c,u){for(var d=[],f=u+c,p=c;p<f;p++){var g,v=t[p];if(r)null!=(g=r(v,p,t))&&d.push({i:h++,type:"header",value:g,index:p,height:i?i(g,p):s,reads:i?0:2,visible:!!i});if(d.push({i:h++,type:"item",value:v,index:p,height:e?e(v,p):a,reads:e?0:2,visible:!!e}),o)null!=(g=o(v,p,t))&&d.push({i:h++,type:"footer",value:g,index:p,height:n?n(g,p):l,reads:n?0:2,visible:!!n})}return d},l=function(){function t(t){var e=this;Object(n.l)(this,t),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=function(){e.updateVirtualScroll()}}return t.prototype.itemsChanged=function(){this.calcCells(),this.updateVirtualScroll()},t.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var t,e;return __generator(this,(function(i){switch(i.label){case 0:return(t=this.el.closest("ion-content"))?(e=this,[4,t.getScrollElement()]):[3,2];case 1:return e.scrollEl=i.sent(),this.contentEl=t,this.calcCells(),this.updateState(),[3,3];case 2:console.error("<ion-virtual-scroll> must be used inside an <ion-content>"),i.label=3;case 3:return[2]}}))}))},t.prototype.componentDidUpdate=function(){this.updateState()},t.prototype.disconnectedCallback=function(){this.scrollEl=void 0},t.prototype.onResize=function(){this.calcCells(),this.updateVirtualScroll()},t.prototype.positionForItem=function(t){return Promise.resolve(function(t,e,i){var n=e.find((function(e){return"item"===e.type&&e.index===t}));return n?i[n.i]:-1}(t,this.cells,this.getHeightIndex()))},t.prototype.checkRange=function(t,e){return void 0===e&&(e=-1),__awaiter(this,void 0,void 0,(function(){var i,n,r;return __generator(this,(function(o){return this.items?(i=-1===e?this.items.length-t:e,n=function(t,e){return 0===e?0:e===(t.length>0?t[t.length-1].index:0)+1?t.length:t.findIndex((function(t){return t.index===e}))}(this.cells,t),r=s(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,n,t,i),this.cells=function(t,e,i){if(0===i&&e.length>=t.length)return e;for(var n=0;n<e.length;n++)t[n+i]=e[n];return t}(this.cells,r,n),this.lastItemLen=this.items.length,this.indexDirty=Math.max(t-1,0),this.scheduleUpdate(),[2]):[2]}))}))},t.prototype.checkEnd=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return this.items&&this.checkRange(this.lastItemLen),[2]}))}))},t.prototype.updateVirtualScroll=function(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),Object(n.g)(this.readVS.bind(this)),Object(n.m)(this.writeVS.bind(this)))},t.prototype.readVS=function(){for(var t=this.contentEl,e=this.scrollEl,i=0,n=this.el;n&&n!==t;)i+=n.offsetTop,n=n.parentElement;this.viewportOffset=i,e&&(this.viewportHeight=e.offsetHeight,this.currentScrollTop=e.scrollTop)},t.prototype.writeVS=function(){var t,e,i=this.indexDirty,n=(t=this.currentScrollTop-this.viewportOffset,e=this.viewportHeight,{top:Math.max(t-100,0),bottom:t+e+100}),o=this.getHeightIndex(),s=function(t,e,i){for(var n=e.top,r=e.bottom,o=0;o<t.length&&!(t[o]>n);o++);for(var s=Math.max(o-2-1,0);o<t.length&&!(t[o]>=r);o++);return{offset:s,length:Math.min(o+2,t.length)-s}}(o,n);(function(t,e,i){return t<=i.offset+i.length||e.offset!==i.offset||e.length!==i.length})(i,this.range,s)&&(this.range=s,function(t,e,i,n){var r,o,s,l;try{for(var a=__values(t),h=a.next();!h.done;h=a.next()){var c=h.value;c.change=0,c.d=!0}}catch(b){r={error:b}}finally{try{h&&!h.done&&(o=a.return)&&o.call(a)}finally{if(r)throw r.error}}for(var u=[],d=n.offset+n.length,f=function(n){var r=i[n],o=t.find((function(t){return t.d&&t.cell===r}));if(o){var s=e[n];s!==o.top&&(o.top=s,o.change=1),o.d=!1}else u.push(r)},p=n.offset;p<d;p++)f(p);var g=t.filter((function(t){return t.d})),v=function(i){var n=g.find((function(t){return t.d&&t.cell.type===i.type})),r=i.i;n?(n.d=!1,n.change=2,n.cell=i,n.top=e[r]):t.push({d:!1,cell:i,visible:!0,change:2,top:e[r]})};try{for(var m=__values(u),y=m.next();!y.done;y=m.next()){v(y.value)}}catch(x){s={error:x}}finally{try{y&&!y.done&&(l=m.return)&&l.call(m)}finally{if(s)throw s.error}}t.filter((function(t){return t.d&&-9999!==t.top})).forEach((function(t){t.change=1,t.top=-9999}))}(this.virtualDom,o,this.cells,s),this.nodeRender?function(t,e,i,n){for(var o,s=Array.from(t.children).filter((function(t){return"TEMPLATE"!==t.tagName})),l=s.length,a=0;a<i.length;a++){var h=i[a],c=h.cell;if(2===h.change){if(a<l)e(o=s[a],c,a);else{var u=r(t,c.type);(o=e(u,c,a)||u).classList.add("virtual-item"),t.appendChild(o)}o.$ionCell=c}else o=s[a];0!==h.change&&(o.style.transform="translate3d(0,"+h.top+"px,0)");var d=c.visible;h.visible!==d&&(d?o.classList.remove("virtual-loading"):o.classList.add("virtual-loading"),h.visible=d),c.reads>0&&(n(c,o),c.reads--)}}(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&this.el.forceUpdate())},t.prototype.updateCellHeight=function(t,e){var i=this,n=function(){if(e.$ionCell===t){var n=window.getComputedStyle(e),r=e.offsetHeight+parseFloat(n.getPropertyValue("margin-bottom"));i.setCellHeight(t,r)}};e&&e.componentOnReady?e.componentOnReady().then(n):n()},t.prototype.setCellHeight=function(t,e){var i=t.i;t===this.cells[i]&&(t.height===e&&!0===t.visible||(t.visible=!0,t.height=e,this.indexDirty=Math.min(this.indexDirty,i),this.scheduleUpdate()))},t.prototype.scheduleUpdate=function(){var t=this;clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout((function(){return t.updateVirtualScroll()}),100)},t.prototype.updateState=function(){var t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())},t.prototype.calcCells=function(){this.items&&(this.lastItemLen=this.items.length,this.cells=s(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)},t.prototype.getHeightIndex=function(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex},t.prototype.calcHeightIndex=function(t){void 0===t&&(t=0),this.heightIndex=function(t,e){if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){var i=new Uint32Array(e);return i.set(t),i}return t.subarray(0,e)}(this.heightIndex,this.cells.length),this.totalHeight=function(t,e,i){for(var n=t[i],r=i;r<t.length;r++)t[r]=n,n+=e[r].height;return n}(this.heightIndex,this.cells,t),this.indexDirty=1/0},t.prototype.enableScrollEvents=function(t){var e=this;this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);var i=this.scrollEl;i&&(this.isEnabled=t,i.addEventListener("scroll",this.onScroll),this.rmEvent=function(){i.removeEventListener("scroll",e.onScroll)})},t.prototype.renderVirtualNode=function(t){var e=t.cell,i=e.type,n=e.value,r=e.index;switch(i){case"item":return this.renderItem(n,r);case"header":return this.renderHeader(n,r);case"footer":return this.renderFooter(n,r)}},t.prototype.render=function(){var t=this;return Object(n.i)(n.a,{style:{height:this.totalHeight+"px"}},this.renderItem&&Object(n.i)(a,{dom:this.virtualDom},this.virtualDom.map((function(e){return t.renderVirtualNode(e)}))))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute!important;top:0!important;right:0!important;left:0!important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"},enumerable:!0,configurable:!0}),t}(),a=function(t,e,i){var n=t.dom;return i.map(e,(function(t,e){var i=n[e],r=t.vattrs||{},o=r.class||"";return o+="virtual-item ",i.visible||(o+="virtual-loading"),Object.assign(Object.assign({},t),{vattrs:Object.assign(Object.assign({},r),{class:o,style:Object.assign(Object.assign({},r.style),{transform:"translate3d(0,"+i.top+"px,0)"})})})}))}}}]);