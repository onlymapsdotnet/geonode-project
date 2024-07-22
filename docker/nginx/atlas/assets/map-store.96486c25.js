import{s as p,y as V,i as Me,J as G,K as Ie,r as P,f as _,L as F,o as K,M as st,N as Re,O as ct,P as ut,j as D,Q as dt,R as Ee,S as Be,n as de,U as ve,V as he,w as H,p as ge,W as vt,X as Ae,Y as ft,g as J,a as _t,Z as bt}from"./index.64155945.js";import{R as ht,Q as le,v as De,g as gt,c as Le}from"./Ripple.6a584e0c.js";import{a as We,h as Oe}from"./render.cf5f0108.js";const mt=p("div",{class:"q-space"});var Bt=V({name:"QSpace",setup(){return()=>mt}});let re,ee=0;const R=new Array(256);for(let e=0;e<256;e++)R[e]=(e+256).toString(16).substring(1);const pt=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return o=>{const t=new Uint8Array(o);return e.getRandomValues(t),t}}return o=>{const t=[];for(let l=o;l>0;l--)t.push(Math.floor(Math.random()*256));return t}})(),qe=4096;function yt(){(re===void 0||ee+16>qe)&&(ee=0,re=pt(qe));const e=Array.prototype.slice.call(re,ee,ee+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,R[e[0]]+R[e[1]]+R[e[2]]+R[e[3]]+"-"+R[e[4]]+R[e[5]]+"-"+R[e[6]]+R[e[7]]+"-"+R[e[8]]+R[e[9]]+"-"+R[e[10]]+R[e[11]]+R[e[12]]+R[e[13]]+R[e[14]]+R[e[15]]}let St=0;const At=["click","keydown"],Dt={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${St++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Wt(e,o,t,l){const n=Me(Ie,G);if(n===G)return console.error("QTab/QRouteTab component needs to be child of QTabs"),G;const{proxy:f}=D(),b=P(null),S=P(null),d=P(null),u=_(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),C=_(()=>n.currentModel.value===e.name),$=_(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(C.value===!0?" q-tab--active"+(n.tabProps.value.activeClass?" "+n.tabProps.value.activeClass:"")+(n.tabProps.value.activeColor?` text-${n.tabProps.value.activeColor}`:"")+(n.tabProps.value.activeBgColor?` bg-${n.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&n.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||n.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(l!==void 0?l.linkClass.value:"")),k=_(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(n.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),m=_(()=>e.disable===!0||n.hasFocus.value===!0||C.value===!1&&n.hasActiveTab.value===!0?-1:e.tabindex||0);function L(c,r){if(r!==!0&&b.value!==null&&b.value.focus(),e.disable===!0){l!==void 0&&l.hasRouterLink.value===!0&&Re(c);return}if(l===void 0){n.updateModel({name:e.name}),t("click",c);return}if(l.hasRouterLink.value===!0){const h=(y={})=>{let T;const z=y.to===void 0||dt(y.to,e.to)===!0?n.avoidRouteWatcher=yt():null;return l.navigateToRouterLink(c,{...y,returnRouterError:!0}).catch(M=>{T=M}).then(M=>{if(z===n.avoidRouteWatcher&&(n.avoidRouteWatcher=!1,T===void 0&&(M===void 0||M.message!==void 0&&M.message.startsWith("Avoided redundant navigation")===!0)&&n.updateModel({name:e.name})),y.returnRouterError===!0)return T!==void 0?Promise.reject(T):M})};t("click",c,h),c.defaultPrevented!==!0&&h();return}t("click",c)}function I(c){ct(c,[13,32])?L(c,!0):ut(c)!==!0&&c.keyCode>=35&&c.keyCode<=40&&c.altKey!==!0&&c.metaKey!==!0&&n.onKbdNavigate(c.keyCode,f.$el)===!0&&Re(c),t("keydown",c)}function Q(){const c=n.tabProps.value.narrowIndicator,r=[],h=p("div",{ref:d,class:["q-tab__indicator",n.tabProps.value.indicatorClass]});e.icon!==void 0&&r.push(p(le,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&r.push(p("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&r.push(e.alertIcon!==void 0?p(le,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):p("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),c===!0&&r.push(h);const y=[p("div",{class:"q-focus-helper",tabindex:-1,ref:b}),p("div",{class:k.value},We(o.default,r))];return c===!1&&y.push(h),y}const E={name:_(()=>e.name),rootRef:S,tabIndicatorRef:d,routeData:l};F(()=>{n.unregisterTab(E)}),K(()=>{n.registerTab(E)});function B(c,r){const h={ref:S,class:$.value,tabindex:m.value,role:"tab","aria-selected":C.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:L,onKeydown:I,...r};return st(p(c,h,Q()),[[ht,u.value]])}return{renderTab:B,$tabs:n}}function wt(){const e=P(!Ee.value);return e.value===!1&&K(()=>{e.value=!0}),{isHydrated:e}}const Qe=typeof ResizeObserver!="undefined",ke=Qe===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var fe=V({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:o}){let t=null,l,n={width:-1,height:-1};function f(d){d===!0||e.debounce===0||e.debounce==="0"?b():t===null&&(t=setTimeout(b,e.debounce))}function b(){if(t!==null&&(clearTimeout(t),t=null),l){const{offsetWidth:d,offsetHeight:u}=l;(d!==n.width||u!==n.height)&&(n={width:d,height:u},o("resize",n))}}const{proxy:S}=D();if(S.trigger=f,Qe===!0){let d;const u=C=>{l=S.$el.parentNode,l?(d=new ResizeObserver(f),d.observe(l),b()):C!==!0&&de(()=>{u(!0)})};return K(()=>{u()}),F(()=>{t!==null&&clearTimeout(t),d!==void 0&&(d.disconnect!==void 0?d.disconnect():l&&d.unobserve(l))}),Be}else{let C=function(){t!==null&&(clearTimeout(t),t=null),u!==void 0&&(u.removeEventListener!==void 0&&u.removeEventListener("resize",f,ve.passive),u=void 0)},$=function(){C(),l&&l.contentDocument&&(u=l.contentDocument.defaultView,u.addEventListener("resize",f,ve.passive),b())};const{isHydrated:d}=wt();let u;return K(()=>{de(()=>{l=S.$el,l&&$()})}),F(C),()=>{if(d.value===!0)return p("object",{class:"q--avoid-card-border",style:ke.style,tabindex:-1,type:"text/html",data:ke.url,"aria-hidden":"true",onLoad:$})}}}});function se(){let e;const o=D();function t(){e=void 0}return he(t),F(t),{removeTick:t,registerTick(l){e=l,de(()=>{e===l&&(De(o)===!1&&e(),e=void 0)})}}}function ze(){let e=null;const o=D();function t(){e!==null&&(clearTimeout(e),e=null)}return he(t),F(t),{removeTimeout:t,registerTimeout(l,n){t(),De(o)===!1&&(e=setTimeout(()=>{e=null,l()},n))}}}let He=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const o=document.createElement("div");Object.assign(o.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(o),e.scrollLeft=-1e3,He=e.scrollLeft>=0,e.remove()}function xt(e,o,t){const l=t===!0?["left","right"]:["top","bottom"];return`absolute-${o===!0?l[0]:l[1]}${e?` text-${e}`:""}`}const Ct=["left","center","right","justify"];var Ot=V({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Ct.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:o,emit:t}){const{proxy:l}=D(),{$q:n}=l,{registerTick:f}=se(),{registerTick:b}=se(),{registerTick:S}=se(),{registerTimeout:d,removeTimeout:u}=ze(),{registerTimeout:C,removeTimeout:$}=ze(),k=P(null),m=P(null),L=P(e.modelValue),I=P(!1),Q=P(!0),E=P(!1),B=P(!1),c=[],r=P(0),h=P(!1);let y=null,T=null,z;const M=_(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:xt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),Ge=_(()=>{const a=r.value,i=L.value;for(let s=0;s<a;s++)if(c[s].name.value===i)return!0;return!1}),Ke=_(()=>`q-tabs__content--align-${I.value===!0?"left":B.value===!0?"justify":e.align}`),Ue=_(()=>`q-tabs row no-wrap items-center q-tabs--${I.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Xe=_(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+Ke.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),U=_(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),X=_(()=>e.vertical!==!0&&n.lang.rtl===!0),ae=_(()=>He===!1&&X.value===!0);H(X,j),H(()=>e.modelValue,a=>{oe({name:a,setCurrent:!0,skipEmit:!0})}),H(()=>e.outsideArrows,Y);function oe({name:a,setCurrent:i,skipEmit:s}){L.value!==a&&(s!==!0&&e["onUpdate:modelValue"]!==void 0&&t("update:modelValue",a),(i===!0||e["onUpdate:modelValue"]===void 0)&&(Ye(L.value,a),L.value=a))}function Y(){f(()=>{me({width:k.value.offsetWidth,height:k.value.offsetHeight})})}function me(a){if(U.value===void 0||m.value===null)return;const i=a[U.value.container],s=Math.min(m.value[U.value.scroll],Array.prototype.reduce.call(m.value.children,(x,g)=>x+(g[U.value.content]||0),0)),w=i>0&&s>i;I.value=w,w===!0&&b(j),B.value=i<parseInt(e.breakpoint,10)}function Ye(a,i){const s=a!=null&&a!==""?c.find(x=>x.name.value===a):null,w=i!=null&&i!==""?c.find(x=>x.name.value===i):null;if(s&&w){const x=s.tabIndicatorRef.value,g=w.tabIndicatorRef.value;y!==null&&(clearTimeout(y),y=null),x.style.transition="none",x.style.transform="none",g.style.transition="none",g.style.transform="none";const v=x.getBoundingClientRect(),q=g.getBoundingClientRect();g.style.transform=e.vertical===!0?`translate3d(0,${v.top-q.top}px,0) scale3d(1,${q.height?v.height/q.height:1},1)`:`translate3d(${v.left-q.left}px,0,0) scale3d(${q.width?v.width/q.width:1},1,1)`,S(()=>{y=setTimeout(()=>{y=null,g.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",g.style.transform="none"},70)})}w&&I.value===!0&&N(w.rootRef.value)}function N(a){const{left:i,width:s,top:w,height:x}=m.value.getBoundingClientRect(),g=a.getBoundingClientRect();let v=e.vertical===!0?g.top-w:g.left-i;if(v<0){m.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(v),j();return}v+=e.vertical===!0?g.height-x:g.width-s,v>0&&(m.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(v),j())}function j(){const a=m.value;if(a===null)return;const i=a.getBoundingClientRect(),s=e.vertical===!0?a.scrollTop:Math.abs(a.scrollLeft);X.value===!0?(Q.value=Math.ceil(s+i.width)<a.scrollWidth-1,E.value=s>0):(Q.value=s>0,E.value=e.vertical===!0?Math.ceil(s+i.height)<a.scrollHeight:Math.ceil(s+i.width)<a.scrollWidth)}function pe(a){T!==null&&clearInterval(T),T=setInterval(()=>{et(a)===!0&&W()},5)}function ye(){pe(ae.value===!0?Number.MAX_SAFE_INTEGER:0)}function Se(){pe(ae.value===!0?0:Number.MAX_SAFE_INTEGER)}function W(){T!==null&&(clearInterval(T),T=null)}function Ze(a,i){const s=Array.prototype.filter.call(m.value.children,q=>q===i||q.matches&&q.matches(".q-tab.q-focusable")===!0),w=s.length;if(w===0)return;if(a===36)return N(s[0]),s[0].focus(),!0;if(a===35)return N(s[w-1]),s[w-1].focus(),!0;const x=a===(e.vertical===!0?38:37),g=a===(e.vertical===!0?40:39),v=x===!0?-1:g===!0?1:void 0;if(v!==void 0){const q=X.value===!0?-1:1,A=s.indexOf(i)+v*q;return A>=0&&A<w&&(N(s[A]),s[A].focus({preventScroll:!0})),!0}}const Je=_(()=>ae.value===!0?{get:a=>Math.abs(a.scrollLeft),set:(a,i)=>{a.scrollLeft=-i}}:e.vertical===!0?{get:a=>a.scrollTop,set:(a,i)=>{a.scrollTop=i}}:{get:a=>a.scrollLeft,set:(a,i)=>{a.scrollLeft=i}});function et(a){const i=m.value,{get:s,set:w}=Je.value;let x=!1,g=s(i);const v=a<g?-1:1;return g+=v*5,g<0?(x=!0,g=0):(v===-1&&g<=a||v===1&&g>=a)&&(x=!0,g=a),w(i,g),j(),x}function we(a,i){for(const s in a)if(a[s]!==i[s])return!1;return!0}function tt(){let a=null,i={matchedLen:0,queryDiff:9999,hrefLen:0};const s=c.filter(v=>v.routeData!==void 0&&v.routeData.hasRouterLink.value===!0),{hash:w,query:x}=l.$route,g=Object.keys(x).length;for(const v of s){const q=v.routeData.exact.value===!0;if(v.routeData[q===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:A,query:ne,matched:it,href:rt}=v.routeData.resolvedLink.value,ie=Object.keys(ne).length;if(q===!0){if(A!==w||ie!==g||we(x,ne)===!1)continue;a=v.name.value;break}if(A!==""&&A!==w||ie!==0&&we(ne,x)===!1)continue;const O={matchedLen:it.length,queryDiff:g-ie,hrefLen:rt.length-A.length};if(O.matchedLen>i.matchedLen){a=v.name.value,i=O;continue}else if(O.matchedLen!==i.matchedLen)continue;if(O.queryDiff<i.queryDiff)a=v.name.value,i=O;else if(O.queryDiff!==i.queryDiff)continue;O.hrefLen>i.hrefLen&&(a=v.name.value,i=O)}a===null&&c.some(v=>v.routeData===void 0&&v.name.value===L.value)===!0||oe({name:a,setCurrent:!0})}function lt(a){if(u(),h.value!==!0&&k.value!==null&&a.target&&typeof a.target.closest=="function"){const i=a.target.closest(".q-tab");i&&k.value.contains(i)===!0&&(h.value=!0,I.value===!0&&N(i))}}function at(){d(()=>{h.value=!1},30)}function Z(){Ce.avoidRouteWatcher===!1?C(tt):$()}function xe(){if(z===void 0){const a=H(()=>l.$route.fullPath,Z);z=()=>{a(),z=void 0}}}function ot(a){c.push(a),r.value++,Y(),a.routeData===void 0||l.$route===void 0?C(()=>{if(I.value===!0){const i=L.value,s=i!=null&&i!==""?c.find(w=>w.name.value===i):null;s&&N(s.rootRef.value)}}):(xe(),a.routeData.hasRouterLink.value===!0&&Z())}function nt(a){c.splice(c.indexOf(a),1),r.value--,Y(),z!==void 0&&a.routeData!==void 0&&(c.every(i=>i.routeData===void 0)===!0&&z(),Z())}const Ce={currentModel:L,tabProps:M,hasFocus:h,hasActiveTab:Ge,registerTab:ot,unregisterTab:nt,verifyRouteModel:Z,updateModel:oe,onKbdNavigate:Ze,avoidRouteWatcher:!1};ge(Ie,Ce);function Pe(){y!==null&&clearTimeout(y),W(),z!==void 0&&z()}let Te;return F(Pe),he(()=>{Te=z!==void 0,Pe()}),vt(()=>{Te===!0&&xe(),Y()}),()=>p("div",{ref:k,class:Ue.value,role:"tablist",onFocusin:lt,onFocusout:at},[p(fe,{onResize:me}),p("div",{ref:m,class:Xe.value,onScroll:j},Oe(o.default)),p(le,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(Q.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||n.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ye,onTouchstartPassive:ye,onMouseupPassive:W,onMouseleavePassive:W,onTouchendPassive:W}),p(le,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(E.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||n.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:Se,onTouchstartPassive:Se,onMouseupPassive:W,onMouseleavePassive:W,onTouchendPassive:W})])}});const Pt={dark:{type:Boolean,default:null}};function Tt(e,o){return _(()=>e.dark===null?o.dark.isActive:e.dark)}const Rt={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},ce={xs:2,sm:4,md:8,lg:16,xl:24};var Qt=V({name:"QSeparator",props:{...Pt,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const o=D(),t=Tt(e,o.proxy.$q),l=_(()=>e.vertical===!0?"vertical":"horizontal"),n=_(()=>` q-separator--${l.value}`),f=_(()=>e.inset!==!1?`${n.value}-${Rt[e.inset]}`:""),b=_(()=>`q-separator${n.value}${f.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(t.value===!0?" q-separator--dark":"")),S=_(()=>{const d={};if(e.size!==void 0&&(d[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const u=e.spaced===!0?`${ce.md}px`:e.spaced in ce?`${ce[e.spaced]}px`:e.spaced,C=e.vertical===!0?["Left","Right"]:["Top","Bottom"];d[`margin${C[0]}`]=d[`margin${C[1]}`]=u}return d});return()=>p("hr",{class:b.value,style:S.value,"aria-orientation":l.value})}}),Ht=V({name:"QPageContainer",setup(e,{slots:o}){const{proxy:{$q:t}}=D(),l=Me(Ae,G);if(l===G)return console.error("QPageContainer needs to be child of QLayout"),G;ge(ft,!0);const n=_(()=>{const f={};return l.header.space===!0&&(f.paddingTop=`${l.header.size}px`),l.right.space===!0&&(f[`padding${t.lang.rtl===!0?"Left":"Right"}`]=`${l.right.size}px`),l.footer.space===!0&&(f.paddingBottom=`${l.footer.size}px`),l.left.space===!0&&(f[`padding${t.lang.rtl===!0?"Right":"Left"}`]=`${l.left.size}px`),f});return()=>p("div",{class:"q-page-container",style:n.value},Oe(o.default))}});const Lt=[Element,String],qt=[null,document,document.body,document.scrollingElement,document.documentElement];function kt(e,o){let t=gt(o);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return qt.includes(t)?window:t}function Fe(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Ve(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function Ne(e,o,t=0){const l=arguments[3]===void 0?performance.now():arguments[3],n=Fe(e);if(t<=0){n!==o&&_e(e,o);return}requestAnimationFrame(f=>{const b=f-l,S=n+(o-n)/Math.max(b,t)*b;_e(e,S),S!==o&&Ne(e,o,t-b,f)})}function je(e,o,t=0){const l=arguments[3]===void 0?performance.now():arguments[3],n=Ve(e);if(t<=0){n!==o&&be(e,o);return}requestAnimationFrame(f=>{const b=f-l,S=n+(o-n)/Math.max(b,t)*b;be(e,S),S!==o&&je(e,o,t-b,f)})}function _e(e,o){if(e===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,o);return}e.scrollTop=o}function be(e,o){if(e===window){window.scrollTo(o,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}e.scrollLeft=o}function Ft(e,o,t){if(t){Ne(e,o,t);return}_e(e,o)}function Vt(e,o,t){if(t){je(e,o,t);return}be(e,o)}let te;function ue(){if(te!==void 0)return te;const e=document.createElement("p"),o=document.createElement("div");Le(e,{width:"100%",height:"200px"}),Le(o,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),o.appendChild(e),document.body.appendChild(o);const t=e.offsetWidth;o.style.overflow="scroll";let l=e.offsetWidth;return t===l&&(l=o.clientWidth),o.remove(),te=t-l,te}function Nt(e,o=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:o?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}const{passive:$e}=ve,zt=["both","horizontal","vertical"];var $t=V({name:"QScrollObserver",props:{axis:{type:String,validator:e=>zt.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:Lt},emits:["scroll"],setup(e,{emit:o}){const t={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let l=null,n,f;H(()=>e.scrollTarget,()=>{d(),S()});function b(){l!==null&&l();const $=Math.max(0,Fe(n)),k=Ve(n),m={top:$-t.position.top,left:k-t.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const L=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";t.position={top:$,left:k},t.directionChanged=t.direction!==L,t.delta=m,t.directionChanged===!0&&(t.direction=L,t.inflectionPoint=t.position),o("scroll",{...t})}function S(){n=kt(f,e.scrollTarget),n.addEventListener("scroll",u,$e),u(!0)}function d(){n!==void 0&&(n.removeEventListener("scroll",u,$e),n=void 0)}function u($){if($===!0||e.debounce===0||e.debounce==="0")b();else if(l===null){const[k,m]=e.debounce?[setTimeout(b,e.debounce),clearTimeout]:[requestAnimationFrame(b),cancelAnimationFrame];l=()=>{m(k),l=null}}}const{proxy:C}=D();return H(()=>C.$q.lang.rtl,b),K(()=>{f=C.$el.parentNode,S()}),F(()=>{l!==null&&l(),d()}),Object.assign(C,{trigger:u,getPosition:()=>t}),Be}}),jt=V({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:o,emit:t}){const{proxy:{$q:l}}=D(),n=P(null),f=P(l.screen.height),b=P(e.container===!0?0:l.screen.width),S=P({position:0,direction:"down",inflectionPoint:0}),d=P(0),u=P(Ee.value===!0?0:ue()),C=_(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),$=_(()=>e.container===!1?{minHeight:l.screen.height+"px"}:null),k=_(()=>u.value!==0?{[l.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),m=_(()=>u.value!==0?{[l.lang.rtl===!0?"right":"left"]:0,[l.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function L(r){if(e.container===!0||document.qScrollPrevented!==!0){const h={position:r.position.top,direction:r.direction,directionChanged:r.directionChanged,inflectionPoint:r.inflectionPoint.top,delta:r.delta.top};S.value=h,e.onScroll!==void 0&&t("scroll",h)}}function I(r){const{height:h,width:y}=r;let T=!1;f.value!==h&&(T=!0,f.value=h,e.onScrollHeight!==void 0&&t("scrollHeight",h),E()),b.value!==y&&(T=!0,b.value=y),T===!0&&e.onResize!==void 0&&t("resize",r)}function Q({height:r}){d.value!==r&&(d.value=r,E())}function E(){if(e.container===!0){const r=f.value>d.value?ue():0;u.value!==r&&(u.value=r)}}let B=null;const c={instances:{},view:_(()=>e.view),isContainer:_(()=>e.container),rootRef:n,height:f,containerHeight:d,scrollbarWidth:u,totalWidth:_(()=>b.value+u.value),rows:_(()=>{const r=e.view.toLowerCase().split(" ");return{top:r[0].split(""),middle:r[1].split(""),bottom:r[2].split("")}}),header:J({size:0,offset:0,space:!1}),right:J({size:300,offset:0,space:!1}),footer:J({size:0,offset:0,space:!1}),left:J({size:300,offset:0,space:!1}),scroll:S,animate(){B!==null?clearTimeout(B):document.body.classList.add("q-body--layout-animate"),B=setTimeout(()=>{B=null,document.body.classList.remove("q-body--layout-animate")},155)},update(r,h,y){c[r][h]=y}};if(ge(Ae,c),ue()>0){let y=function(){r=null,h.classList.remove("hide-scrollbar")},T=function(){if(r===null){if(h.scrollHeight>l.screen.height)return;h.classList.add("hide-scrollbar")}else clearTimeout(r);r=setTimeout(y,300)},z=function(M){r!==null&&M==="remove"&&(clearTimeout(r),y()),window[`${M}EventListener`]("resize",T)},r=null;const h=document.body;H(()=>e.container!==!0?"add":"remove",z),e.container!==!0&&z("add"),_t(()=>{z("remove")})}return()=>{const r=We(o.default,[p($t,{onScroll:L}),p(fe,{onResize:I})]),h=p("div",{class:C.value,style:$.value,ref:e.container===!0?void 0:n,tabindex:-1},r);return e.container===!0?p("div",{class:"q-layout-container overflow-hidden",ref:n},[p(fe,{onResize:Q}),p("div",{class:"absolute-full",style:k.value},[p("div",{class:"scroll",style:m.value},[h])])]):h}}});const Gt=bt("map-store",{state:()=>({counter:0,showDrawerMunicipioInfo:!1,geoStories:[],mapasBase:[{value:"osm-standard",label:"OSM Standard",bgcolor:"#75cff0",url:"https://tile.openstreetmap.org/{z}/{x}/{y}.png"},{value:"osm-topomap",label:"OSM TopoMap",bgcolor:"#75cff0",url:"https://a.tile.opentopomap.org/{z}/{x}/{y}.png"},{value:"google-road",label:"Google Road",bgcolor:"#75cff0",url:"https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"},{value:"google-terrain",label:"Google Terrain",bgcolor:"#75cff0",url:"https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}"},{value:"esri-gray-light",label:"ESRI Gray (light)",bgcolor:"#75cff0",url:"https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"},{value:"esri-gray-dark",label:"ESRI Gray (dark)",bgcolor:"#75cff0",url:"https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"},{value:"carto-positron",label:"Carto Positron",bgcolor:"#75cff0",url:"https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png"},{value:"carto-dark-matter",label:"Carto Dark Matter",bgcolor:"#75cff0",url:"https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png"},{value:"google-satellite",label:"Google Satellite",bgcolor:"#75cff0",url:"https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"}],componentesVulnerabilidad:[{value:"vulnerabilidad",label:"Vulnerabilidad",icono:"mdi-risk",escenarios:[{value:"vulnerabilidad_actual",label:"Actual",style:"clase_vulnerabilidad_actual"},{value:"clase_vulnerabilidad_ssp1_rcp26_21_40",label:"SSP1-RCP26: 2021-2040",style:"clase_vulnerabilidad_ssp1_rcp26_21_40"},{value:"clase_vulnerabilidad_ssp1_rcp26_41_60",label:"SSP1-RCP26: 2041-2060",style:"clase_vulnerabilidad_ssp1_rcp26_41_60"},{value:"clase_vulnerabilidad_ssp1_rcp26_81_100",label:"SSP1-RCP26: 2081-2100",style:"clase_vulnerabilidad_ssp1_rcp26_81_100"},{value:"clase_vulnerabilidad_ssp2_rcp45_21_40",label:"SSP2-RCP45: 2021-2040",style:"clase_vulnerabilidad_ssp2_rcp45_21_40"},{value:"clase_vulnerabilidad_ssp2_rcp45_41_60",label:"SSP2-RCP45: 2041-2060",style:"clase_vulnerabilidad_ssp2_rcp45_41_60"},{value:"clase_vulnerabilidad_ssp2_rcp45_81_100",label:"SSP2-RCP45: 2081-2100",style:"clase_vulnerabilidad_ssp2_rcp45_81_100"},{value:"clase_vulnerabilidad_ssp3_rcp70_21_40",label:"SSP3-RCP70: 2021-2040",style:"clase_vulnerabilidad_ssp3_rcp70_21_40"},{value:"clase_vulnerabilidad_ssp3_rcp70_41_60",label:"SSP3-RCP70: 2041-2060",style:"clase_vulnerabilidad_ssp3_rcp70_41_60"},{value:"clase_vulnerabilidad_ssp3_rcp70_81_100",label:"SSP3-RCP70: 2081-2100",style:"clase_vulnerabilidad_ssp3_rcp70_81_100"},{value:"clase_vulnerabilidad_ssp5_rcp85_21_40",label:"SSP5-RCP85: 2021-2040",style:"clase_vulnerabilidad_ssp5_rcp85_21_40"},{value:"clase_vulnerabilidad_ssp5_rcp85_41_60",label:"SSP5-RCP85: 2041-2060",style:"clase_vulnerabilidad_ssp5_rcp85_41_60"},{value:"clase_vulnerabilidad_ssp5_rcp85_81_100",label:"SSP5-RCP85: 2081-2100",style:"clase_vulnerabilidad_ssp5_rcp85_81_100"}]},{value:"exposicion",label:"Exposici\xF3n",icono:"mdi-expose",escenarios:[{value:"exposicion_actual",label:"Actual",style:"clase_exposicion_actual"},{value:"clase_exposicion_ssp1_rcp26_21_40",label:"SSP1-RCP26: 2021-2040",style:"clase_exposicion_ssp1_rcp26_21_40"},{value:"clase_exposicion_ssp1_rcp26_41_60",label:"SSP1-RCP26: 2041-2060",style:"clase_exposicion_ssp1_rcp26_41_60"},{value:"clase_exposicion_ssp1_rcp26_81_100",label:"SSP1-RCP26: 2081-2100",style:"clase_exposicion_ssp1_rcp26_81_100"},{value:"clase_exposicion_ssp2_rcp45_21_40",label:"SSP2-RCP45: 2021-2040",style:"clase_exposicion_ssp2_rcp45_21_40"},{value:"clase_exposicion_ssp2_rcp45_41_60",label:"SSP2-RCP45: 2041-2060",style:"clase_exposicion_ssp2_rcp45_41_60"},{value:"clase_exposicion_ssp2_rcp45_81_100",label:"SSP2-RCP45: 2081-2100",style:"clase_exposicion_ssp2_rcp45_81_100"},{value:"clase_exposicion_ssp3_rcp70_21_40",label:"SSP3-RCP70: 2021-2040",style:"clase_exposicion_ssp3_rcp70_21_40"},{value:"clase_exposicion_ssp3_rcp70_41_60",label:"SSP3-RCP70: 2041-2060",style:"clase_exposicion_ssp3_rcp70_41_60"},{value:"clase_exposicion_ssp3_rcp70_81_100",label:"SSP3-RCP70: 2081-2100",style:"clase_exposicion_ssp3_rcp70_81_100"},{value:"clase_exposicion_ssp5_rcp85_21_40",label:"SSP5-RCP85: 2021-2040",style:"clase_exposicion_ssp5_rcp85_21_40"},{value:"clase_exposicion_ssp5_rcp85_41_60",label:"SSP5-RCP85: 2041-2060",style:"clase_exposicion_ssp5_rcp85_41_60"},{value:"clase_exposicion_ssp5_rcp85_81_100",label:"SSP5-RCP85: 2081-2100",style:"clase_exposicion_ssp5_rcp85_81_100"}]},{value:"sensibilidad",label:"Sensibilidad",icono:"mdi-weather-sunset-down",escenarios:[{value:"sensibilidad",label:"Sensibilidad",style:"clase_sensibilidad"}]},{value:"capacidad_adaptativa",label:"Capacidad adaptativa",icono:"mdi-weather-sunset-up",escenarios:[{value:"capacidad_adaptativa",label:"Capacidad adaptativa",style:"clase_capacidad_adaptativa"}]}],componenteVulnerabilidadSelected:null,escenariosVulnerabilidad:[],escenarioSelected:null,escenarioSelectedStyle:"default",mapaBase:"osm-standard",geonodeCategories:[],geonodeSelectedCategory:null,geonodeMaps:[],geonodeSelectedMap:null,geonodeLayers:[],geonodeSelectedLayer:null,geonodeEscenarios:[],geonodeSelectedEscenario:null,currentLayer:void 0,datosMarcoGeoestadisticoINEGI:[],estadosINEGI:null,localConfig:null,estados:[],estadoSelected:"",estadoSelectedID:"",municipios:[],municipioSelected:"",municipioSelectedID:"",municipioSelectedWfsData:null,mapCenter:[-102,24],mapZoom:6,mapRotation:0,drawerMapCenter:[-102,24],drawerMapZoom:6,showFichaMunicipioInfoDialog:!1}),getters:{doubleCount:e=>e?1:0,activeSelectedMapLayers(){this.geonodeMaps.find(e=>(console.log("iMap",e),e.pk===this.geonodeSelectedMap?(console.log("iMap.maplayers",e.maplayers),{dataset:{alternate:"aaa",title:"No map selected"}}):{pk:0,title:"No map selected"}))},estadoID(){return this.estadoSelected.cve_ent?this.estadoSelected.cve_ent:this.estadoSelected},municipioID(){return this.municipioSelected.cvegeo?this.municipioSelected.cvegeo:this.municipioSelected}},actions:{increment(){this.counter++},updateTickedCapas(e){console.log("updateTickedCapas",e)}}});export{jt as Q,At as a,Wt as b,Gt as c,Bt as d,Ot as e,Qt as f,Ht as g,fe as h,Pt as i,Tt as j,Ve as k,Fe as l,Nt as m,ze as n,se as o,$t as p,Ft as q,yt as r,Vt as s,ue as t,Dt as u,Lt as v,kt as w,He as x};
