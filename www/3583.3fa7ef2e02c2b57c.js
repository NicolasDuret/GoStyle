"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3583],{3583:function(U,E,a){a.r(E),a.d(E,{ion_reorder:function(){return I},ion_reorder_group:function(){return C}});var m=a(4942),P=a(5861),p=a(5671),g=a(3144),T=a(7757),b=a.n(T),d=a(9533),y=a(7639),S=a(6499),v=a(2335),I=function(){function h(r){(0,p.Z)(this,h),(0,d.r)(this,r)}return(0,g.Z)(h,[{key:"onClick",value:function(e){var t=this.el.closest("ion-reorder-group");e.preventDefault(),(!t||!t.disabled)&&e.stopImmediatePropagation()}},{key:"render",value:function(){var e=(0,y.b)(this);return(0,d.h)(d.H,{class:e},(0,d.h)("slot",null,(0,d.h)("ion-icon",{name:"ios"===e?"reorder-three-outline":"reorder-two-sharp",lazy:!1,class:"reorder-icon",part:"icon"})))}},{key:"el",get:function(){return(0,d.i)(this)}}]),h}();I.style={ios:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}",md:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}"};var C=function(){function h(r){(0,p.Z)(this,h),(0,d.r)(this,r),this.ionItemReorder=(0,d.e)(this,"ionItemReorder",7),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0}return(0,g.Z)(h,[{key:"disabledChanged",value:function(){this.gesture&&this.gesture.enable(!this.disabled)}},{key:"connectedCallback",value:(r=(0,P.Z)(b().mark(function t(){var i,s=this;return b().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!(i=this.el.closest("ion-content"))){o.next=7;break}return o.next=4,new Promise(function(l){return(0,S.c)(i,l)});case 4:return o.next=6,i.getScrollElement();case 6:this.scrollEl=o.sent;case 7:return o.next=9,Promise.resolve().then(a.bind(a,1363));case 9:this.gesture=o.sent.createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:function(c){return s.canStart(c)},onStart:function(c){return s.onStart(c)},onMove:function(c){return s.onMove(c)},onEnd:function(){return s.onEnd()}}),this.disabledChanged();case 11:case"end":return o.stop()}},t,this)})),function e(){return r.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"complete",value:function(e){return Promise.resolve(this.completeSync(e))}},{key:"canStart",value:function(e){if(this.selectedItemEl||0!==this.state)return!1;var s=e.event.target.closest("ion-reorder");if(!s)return!1;var i=B(s,this.el);return!!i&&(e.data=i,!0)}},{key:"onStart",value:function(e){e.event.preventDefault();var t=this.selectedItemEl=e.data,s=this.cachedHeights;s.length=0;var i=this.el,n=i.children;if(n&&0!==n.length){for(var o=0,l=0;l<n.length;l++){var c=n[l];s.push(o+=c.offsetHeight),c.$ionIndex=l}var u=i.getBoundingClientRect();if(this.containerTop=u.top,this.containerBottom=u.bottom,this.scrollEl){var f=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=f.top+k,this.scrollElBottom=f.bottom-k}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=_(t),this.selectedItemHeight=t.offsetHeight,this.state=1,t.classList.add(M),(0,v.a)()}}},{key:"onMove",value:function(e){var t=this.selectedItemEl;if(t){var s=this.autoscroll(e.currentY),i=this.containerTop-s,o=Math.max(i,Math.min(e.currentY,this.containerBottom-s)),l=s+o-e.startY,u=this.itemIndexForTop(o-i);if(u!==this.lastToIndex){var f=_(t);this.lastToIndex=u,(0,v.b)(),this.reorderMove(f,u)}t.style.transform="translateY(".concat(l,"px)")}}},{key:"onEnd",value:function(){var e=this.selectedItemEl;if(this.state=2,e){var t=this.lastToIndex,s=_(e);t===s?this.completeSync():this.ionItemReorder.emit({from:s,to:t,complete:this.completeSync.bind(this)}),(0,v.h)()}else this.state=0}},{key:"completeSync",value:function(e){var t=this.selectedItemEl;if(t&&2===this.state){var s=this.el.children,i=s.length,n=this.lastToIndex,o=_(t);n===o||void 0!==e&&!0!==e||this.el.insertBefore(t,o<n?s[n+1]:s[n]),Array.isArray(e)&&(e=G(e,o,n));for(var c=0;c<i;c++)s[c].style.transform="";t.style.transition="",t.classList.remove(M),this.selectedItemEl=void 0,this.state=0}return e}},{key:"itemIndexForTop",value:function(e){for(var t=this.cachedHeights,s=0;s<t.length;s++)if(t[s]>e)return s;return t.length-1}},{key:"reorderMove",value:function(e,t){for(var s=this.selectedItemHeight,i=this.el.children,n=0;n<i.length;n++){var o=i[n].style,l="";n>e&&n<=t?l="translateY(".concat(-s,"px)"):n<e&&n>=t&&(l="translateY(".concat(s,"px)")),o.transform=l}}},{key:"autoscroll",value:function(e){if(!this.scrollEl)return 0;var t=0;return e<this.scrollElTop?t=-D:e>this.scrollElBottom&&(t=D),0!==t&&this.scrollEl.scrollBy(0,t),this.scrollEl.scrollTop-this.scrollElInitial}},{key:"render",value:function(){var e,t=(0,y.b)(this);return(0,d.h)(d.H,{class:(e={},(0,m.Z)(e,t,!0),(0,m.Z)(e,"reorder-enabled",!this.disabled),(0,m.Z)(e,"reorder-list-active",0!==this.state),e)})}},{key:"el",get:function(){return(0,d.i)(this)}}],[{key:"watchers",get:function(){return{disabled:["disabledChanged"]}}}]),h;var r}(),_=function(r){return r.$ionIndex},B=function(r,e){for(var t;r;){if((t=r.parentElement)===e)return r;r=t}},k=60,D=10,M="reorder-selected",G=function(r,e,t){var s=r[e];return r.splice(e,1),r.splice(t,0,s),r.slice()};C.style=".reorder-list-active>*{-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}"}}]);