import{c as u,h as m}from"./render.4b15871b.js";import{f as i,s as p,w as d,d as b,r as f,y as v,b as _,z as T,A as r,x as t,B as k}from"./index.34cff977.js";import{u as Q,a as h}from"./Ripple.85042e29.js";import{u as x,a as w,b as C,Q as L,c as g,d as R,e as V}from"./QLayout.9a166425.js";var y=u({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:a}){const s=i(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>p("div",{class:s.value},m(a.default))}}),c=u({name:"QRouteTab",props:{...Q,...x},emits:w,setup(e,{slots:a,emit:s}){const o=h({useDisableForRouterLinkProps:!1}),{renderTab:l,$tabs:n}=C(e,a,s,{exact:i(()=>e.exact),...o});return d(()=>`${e.name} | ${e.exact} | ${(o.resolvedLink.value||{}).href}`,()=>{n.verifyRouteModel()}),()=>l(o.linkTag.value,o.linkAttrs.value)}}),B=u({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:a}){const s=i(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>p("div",{class:s.value,role:"toolbar"},m(a.default))}});const M=b({__name:"MainLayout",setup(e){const a=f("mapa");return(s,o)=>{const l=v("router-view");return _(),T(L,{view:"lHh Lpr lFf"},{default:r(()=>[t(R,{class:"color: bg-gobmx-verde"},{default:r(()=>[t(B,null,{default:r(()=>[t(y,null,{default:r(()=>[k(" Atlas... ")]),_:1}),t(g,{modelValue:a.value,"onUpdate:modelValue":o[0]||(o[0]=n=>a.value=n),"no-caps":"",style:{"margin-right":"-12px"}},{default:r(()=>[t(c,{to:"/mapa",label:"Mapa"}),t(c,{to:"/anvcc",label:"ANVCC"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(V,null,{default:r(()=>[t(l)]),_:1})]),_:1})}}});export{M as default};
