import{p as e,q as t,ci as n,t as r,cj as o,ck as a,by as l,cl as i,r as s,x as c,e as p,cm as d,ax as g,ag as m}from"./index-eb6f3572.js";const u=e=>e?"function"==typeof e?e():e:null,b=e=>{const{componentCls:t,popoverColor:n,titleMinWidth:a,fontWeightStrong:l,innerPadding:i,boxShadowSecondary:s,colorTextHeading:c,borderRadiusLG:p,zIndexPopup:d,titleMarginBottom:g,colorBgElevated:m,popoverBg:u,titleBorderBottom:b,innerContentPadding:y,titlePadding:f}=e;return[{[t]:Object.assign(Object.assign({},r(e)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:d,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":m,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${t}-content`]:{position:"relative"},[`${t}-inner`]:{backgroundColor:u,backgroundClip:"padding-box",borderRadius:p,boxShadow:s,padding:i},[`${t}-title`]:{minWidth:a,marginBottom:g,color:c,fontWeight:l,borderBottom:b,padding:f},[`${t}-inner-content`]:{color:n,padding:y}})},o(e,"var(--antd-arrow-background-color)"),{[`${t}-pure`]:{position:"relative",maxWidth:"none",margin:e.sizePopupArrow,display:"inline-block",[`${t}-content`]:{display:"inline-block"}}}]},y=e=>{const{componentCls:t}=e;return{[t]:a.map((n=>{const r=e[`${n}6`];return{[`&${t}-${n}`]:{"--antd-arrow-background-color":r,[`${t}-inner`]:{backgroundColor:r},[`${t}-arrow`]:{background:"transparent"}}}}))}},f=e("Popover",(e=>{const{colorBgElevated:r,colorText:o}=e,a=t(e,{popoverBg:r,popoverColor:o});return[b(a),y(a),n(a,"zoom-big")]}),(e=>{const{lineWidth:t,controlHeight:n,fontHeight:r,padding:o,wireframe:a,zIndexPopupBase:s,borderRadiusLG:c,marginXS:p,lineType:d,colorSplit:g,paddingSM:m}=e,u=n-r,b=u/2,y=u/2-t,f=o;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:s+30},l(e)),i({contentRadius:c,limitVerticalRadius:!0})),{innerPadding:a?0:12,titleMarginBottom:a?0:p,titlePadding:a?`${b}px ${f}px ${y}px`:0,titleBorderBottom:a?`${t}px ${d} ${g}`:"none",innerContentPadding:a?`${m}px ${f}px`:0})}),{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]});var v=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const x=e=>{const{hashId:t,prefixCls:n,className:r,style:o,placement:a="top",title:l,content:i,children:c}=e;return s.createElement("div",{className:p(t,n,`${n}-pure`,`${n}-placement-${a}`,r),style:o},s.createElement("div",{className:`${n}-arrow`}),s.createElement(d,Object.assign({},e,{className:t,prefixCls:n}),c||((e,t,n)=>{if(t||n)return s.createElement(s.Fragment,null,t&&s.createElement("div",{className:`${e}-title`},u(t)),s.createElement("div",{className:`${e}-inner-content`},u(n)))})(n,l,i)))},h=e=>{const{prefixCls:t}=e,n=v(e,["prefixCls"]),{getPrefixCls:r}=s.useContext(c),o=r("popover",t),[a,l]=f(o);return a(s.createElement(x,Object.assign({},n,{prefixCls:o,hashId:l})))};var O=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const $=e=>{let{title:t,content:n,prefixCls:r}=e;return s.createElement(s.Fragment,null,t&&s.createElement("div",{className:`${r}-title`},u(t)),s.createElement("div",{className:`${r}-inner-content`},u(n)))},C=s.forwardRef(((e,t)=>{const{prefixCls:n,title:r,content:o,overlayClassName:a,placement:l="top",trigger:i="hover",mouseEnterDelay:d=.1,mouseLeaveDelay:u=.1,overlayStyle:b={}}=e,y=O(e,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:v}=s.useContext(c),x=v("popover",n),[h,C]=f(x),P=v(),w=p(a,C);return h(s.createElement(g,Object.assign({placement:l,trigger:i,mouseEnterDelay:d,mouseLeaveDelay:u,overlayStyle:b},y,{prefixCls:x,overlayClassName:w,ref:t,overlay:r||o?s.createElement($,{prefixCls:x,title:r,content:o}):null,transitionName:m(P,"zoom-big",y.transitionName),"data-popover-inject":!0})))}));C._InternalPanelDoNotUseOrYouWillBeFired=h;const P=C;export{P,h as a,u as g};
