import{d as fe,y as j,i as T,t as le,f as w,j as ve,w as H,k as Y,o as he,z as pe,s as ee,n as ge,h as ze,A as be,q as we}from"./index.dbd9e38d.js";import{i as ye,t as me}from"./echarts.be87358c.js";var W=null;function Ee(e){return W||(W=(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){return setTimeout(t,16)}).bind(window)),W(e)}var N=null;function Oe(e){N||(N=(window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||function(t){clearTimeout(t)}).bind(window)),N(e)}function xe(e){var t=document.createElement("style");return t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),(document.querySelector("head")||document.body).appendChild(t),t}function R(e,t){t===void 0&&(t={});var r=document.createElement(e);return Object.keys(t).forEach(function(a){r[a]=t[a]}),r}function ie(e,t,r){var a=window.getComputedStyle(e,r||null)||{display:"none"};return a[t]}function q(e){if(!document.documentElement.contains(e))return{detached:!0,rendered:!1};for(var t=e;t!==document;){if(ie(t,"display")==="none")return{detached:!1,rendered:!1};t=t.parentNode}return{detached:!1,rendered:!0}}var Ce='.resize-triggers{visibility:hidden;opacity:0;pointer-events:none}.resize-contract-trigger,.resize-contract-trigger:before,.resize-expand-trigger,.resize-triggers{content:"";position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden}.resize-contract-trigger,.resize-expand-trigger{background:#eee;overflow:auto}.resize-contract-trigger:before{width:200%;height:200%}',B=0,F=null;function Le(e,t){e.__resize_mutation_handler__||(e.__resize_mutation_handler__=je.bind(e));var r=e.__resize_listeners__;if(!r){if(e.__resize_listeners__=[],window.ResizeObserver){var a=e.offsetWidth,o=e.offsetHeight,n=new ResizeObserver(function(){!e.__resize_observer_triggered__&&(e.__resize_observer_triggered__=!0,e.offsetWidth===a&&e.offsetHeight===o)||k(e)}),u=q(e),g=u.detached,v=u.rendered;e.__resize_observer_triggered__=g===!1&&v===!1,e.__resize_observer__=n,n.observe(e)}else if(e.attachEvent&&e.addEventListener)e.__resize_legacy_resize_handler__=function(){k(e)},e.attachEvent("onresize",e.__resize_legacy_resize_handler__),document.addEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);else if(B||(F=xe(Ce)),Te(e),e.__resize_rendered__=q(e).rendered,window.MutationObserver){var h=new MutationObserver(e.__resize_mutation_handler__);h.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0}),e.__resize_mutation_observer__=h}}e.__resize_listeners__.push(t),B++}function Ae(e,t){var r=e.__resize_listeners__;if(!!r){if(t&&r.splice(r.indexOf(t),1),!r.length||!t){if(e.detachEvent&&e.removeEventListener){e.detachEvent("onresize",e.__resize_legacy_resize_handler__),document.removeEventListener("DOMSubtreeModified",e.__resize_mutation_handler__);return}e.__resize_observer__?(e.__resize_observer__.unobserve(e),e.__resize_observer__.disconnect(),e.__resize_observer__=null):(e.__resize_mutation_observer__&&(e.__resize_mutation_observer__.disconnect(),e.__resize_mutation_observer__=null),e.removeEventListener("scroll",P),e.removeChild(e.__resize_triggers__.triggers),e.__resize_triggers__=null),e.__resize_listeners__=null}!--B&&F&&F.parentNode.removeChild(F)}}function Se(e){var t=e.__resize_last__,r=t.width,a=t.height,o=e.offsetWidth,n=e.offsetHeight;return o!==r||n!==a?{width:o,height:n}:null}function je(){var e=q(this),t=e.rendered,r=e.detached;t!==this.__resize_rendered__&&(!r&&this.__resize_triggers__&&($(this),this.addEventListener("scroll",P,!0)),this.__resize_rendered__=t,k(this))}function P(){var e=this;$(this),this.__resize_raf__&&Oe(this.__resize_raf__),this.__resize_raf__=Ee(function(){var t=Se(e);t&&(e.__resize_last__=t,k(e))})}function k(e){!e||!e.__resize_listeners__||e.__resize_listeners__.forEach(function(t){t.call(e,e)})}function Te(e){var t=ie(e,"position");(!t||t==="static")&&(e.style.position="relative"),e.__resize_old_position__=t,e.__resize_last__={};var r=R("div",{className:"resize-triggers"}),a=R("div",{className:"resize-expand-trigger"}),o=R("div"),n=R("div",{className:"resize-contract-trigger"});a.appendChild(o),r.appendChild(a),r.appendChild(n),e.appendChild(r),e.__resize_triggers__={triggers:r,expand:a,expandChild:o,contract:n},$(e),e.addEventListener("scroll",P,!0),e.__resize_last__={width:e.offsetWidth,height:e.offsetHeight}}function $(e){var t=e.__resize_triggers__,r=t.expand,a=t.expandChild,o=t.contract,n=o.scrollWidth,u=o.scrollHeight,g=r.offsetWidth,v=r.offsetHeight,h=r.scrollWidth,f=r.scrollHeight;o.scrollLeft=n,o.scrollTop=u,a.style.width=g+1+"px",a.style.height=v+1+"px",r.scrollLeft=h,r.scrollTop=f}var p=function(){return p=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},p.apply(this,arguments)};var He=["getWidth","getHeight","getDom","getOption","resize","dispatchAction","convertToPixel","convertFromPixel","containPixel","getDataURL","getConnectedDataURL","appendData","clear","isDisposed","dispose"];function Re(e){return t=Object.create(null),He.forEach(function(r){t[r]=function(a){return function(){for(var o=[],n=0;n<arguments.length;n++)o[n]=arguments[n];if(!e.value)throw new Error("ECharts is not initialized yet.");return e.value[a].apply(e.value,o)}}(r)}),t;var t}var Me={autoresize:[Boolean,Object]},Fe=/^on[^a-z]/,te=function(e){return Fe.test(e)};function M(e,t){var r=ze(e)?be(e):e;return r&&typeof r=="object"&&"value"in r?r.value||t:r||t}var ke="ecLoadingOptions",De={loading:Boolean,loadingOptions:Object},E=null,ae="x-vue-echarts",re=[],O=[];(function(e,t){if(e&&typeof document!="undefined"){var r,a=t.prepend===!0?"prepend":"append",o=t.singleTag===!0,n=typeof t.container=="string"?document.querySelector(t.container):document.getElementsByTagName("head")[0];if(o){var u=re.indexOf(n);u===-1&&(u=re.push(n)-1,O[u]={}),r=O[u]&&O[u][a]?O[u][a]:O[u][a]=g()}else r=g();e.charCodeAt(0)===65279&&(e=e.substring(1)),r.styleSheet?r.styleSheet.cssText+=e:r.appendChild(document.createTextNode(e))}function g(){var v=document.createElement("style");if(v.setAttribute("type","text/css"),t.attributes)for(var h=Object.keys(t.attributes),f=0;f<h.length;f++)v.setAttribute(h[f],t.attributes[h[f]]);var x=a==="prepend"?"afterbegin":"beforeend";return n.insertAdjacentElement(x,v),v}})(`x-vue-echarts{display:flex;flex-direction:column;width:100%;height:100%;min-width:0}
.vue-echarts-inner{flex-grow:1;min-width:0;width:auto!important;height:auto!important}
`,{});var Ue=function(){if(E!=null)return E;if(typeof HTMLElement=="undefined"||typeof customElements=="undefined")return E=!1;try{new Function("tag",`class EChartsElement extends HTMLElement {
  __dispose = null;

  disconnectedCallback() {
    if (this.__dispose) {
      this.__dispose();
      this.__dispose = null;
    }
  }
}

if (customElements.get(tag) == null) {
  customElements.define(tag, EChartsElement);
}
`)(ae)}catch{return E=!1}return E=!0}(),We="ecTheme",Ne="ecInitOptions",qe="ecUpdateOptions",ne=/(^&?~?!?)native:/,Be=fe({name:"echarts",props:p(p({option:Object,theme:{type:[Object,String]},initOptions:Object,updateOptions:Object,group:String,manualUpdate:Boolean},Me),De),emits:{},inheritAttrs:!1,setup:function(e,t){var r=t.attrs,a=j(),o=j(),n=j(),u=j(),g=T(We,null),v=T(Ne,null),h=T(qe,null),f=le(e),x=f.autoresize,se=f.manualUpdate,oe=f.loading,ue=f.loadingOptions,_e=w(function(){return u.value||e.option||null}),I=w(function(){return e.theme||M(g,{})}),Z=w(function(){return e.initOptions||M(v,{})}),G=w(function(){return e.updateOptions||M(h,{})}),ce=w(function(){return function(s){var i={};for(var _ in s)te(_)||(i[_]=s[_]);return i}(r)}),D={},C=ve().proxy.$listeners,L={};function A(s){if(o.value){var i=n.value=ye(o.value,I.value,Z.value);e.group&&(i.group=e.group),Object.keys(L).forEach(function(l){var c=L[l];if(c){var d=l.toLowerCase();d.charAt(0)==="~"&&(d=d.substring(1),c.__once__=!0);var y=i;if(d.indexOf("zr:")===0&&(y=i.getZr(),d=d.substring(3)),c.__once__){delete c.__once__;var b=c;c=function(){for(var m=[],z=0;z<arguments.length;z++)m[z]=arguments[z];b.apply(void 0,m),y.off(d,c)}}y.on(d,c)}}),x.value?ge(function(){i&&!i.isDisposed()&&i.resize(),_()}):_()}function _(){var l=s||_e.value;l&&i.setOption(l,G.value)}}function U(){n.value&&(n.value.dispose(),n.value=void 0)}C?Object.keys(C).forEach(function(s){ne.test(s)?D[s.replace(ne,"$1")]=C[s]:L[s]=C[s]}):Object.keys(r).filter(function(s){return te(s)}).forEach(function(s){var i=s.charAt(2).toLowerCase()+s.slice(3);if(i.indexOf("native:")!==0)i.substring(i.length-4)==="Once"&&(i="~".concat(i.substring(0,i.length-4))),L[i]=r[s];else{var _="on".concat(i.charAt(7).toUpperCase()).concat(i.slice(8));D[_]=r[s]}});var S=null;H(se,function(s){typeof S=="function"&&(S(),S=null),s||(S=H(function(){return e.option},function(i,_){i&&(n.value?n.value.setOption(i,p({notMerge:i!==_},G.value)):A())},{deep:!0}))},{immediate:!0}),H([I,Z],function(){U(),A()},{deep:!0}),Y(function(){e.group&&n.value&&(n.value.group=e.group)});var de=Re(n);return function(s,i,_){var l=T(ke,{}),c=w(function(){return p(p({},M(l,{})),_==null?void 0:_.value)});Y(function(){var d=s.value;d&&(i.value?d.showLoading(c.value):d.hideLoading())})}(n,oe,ue),function(s,i,_){var l=null;H([_,s,i],function(c,d,y){var b=c[0],m=c[1],z=c[2];if(b&&m&&z){var J=z===!0?{}:z,K=J.throttle,Q=K===void 0?100:K,V=J.onResize,X=function(){m.resize(),V==null||V()};l=Q?me(X,Q):X,Le(b,l)}y(function(){b&&l&&Ae(b,l)})})}(n,x,o),he(function(){A()}),pe(function(){Ue&&a.value?a.value.__dispose=U:U()}),p({chart:n,root:a,inner:o,setOption:function(s,i){e.manualUpdate&&(u.value=s),n.value?n.value.setOption(s,i||{}):A(s)},nonEventAttrs:ce,nativeListeners:D},de)},render:function(){var e=p(p({},this.nonEventAttrs),this.nativeListeners);return e.ref="root",e.class=e.class?["echarts"].concat(e.class):"echarts",ee(ae,e,[ee("div",{ref:"inner",class:"vue-echarts-inner"})])}}),Ie=we(({app:e})=>{e.component("v-chart",Be)});export{Ie as default};
