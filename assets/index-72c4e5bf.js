import{r as e,X as t,aO as n,aQ as o,U as r,V as a,e as i,b8 as c,cf as l,Y as s,a0 as u,l as m,O as f,cg as d,z as p,W as g,i as v,N as h,p as w,q as b,aR as C,ch as x,ci as y,b4 as S,v as I,s as E,aW as N,L as k,n as M,x as R,a7 as z,af as T,ag as O,f as j,b7 as L}from"./index-eb6f3572.js";import{b as P,a as A,g as D}from"./addEventListener-edd8f0d3.js";var Y=["crossOrigin","decoding","draggable","loading","referrerPolicy","sizes","srcSet","useMap","alt"],$=e.createContext(null),X=0;function H(n){var o=n.src,r=n.isCustomPlaceholder,a=n.fallback,i=e.useState(r?"loading":"normal"),c=t(i,2),l=c[0],s=c[1],u=e.useRef(!1),m="error"===l;e.useEffect((function(){var e=!0;return function(e){return new Promise((function(t){var n=document.createElement("img");n.onerror=function(){return t(!1)},n.onload=function(){return t(!0)},n.src=e}))}(o).then((function(t){!t&&e&&s("error")})),function(){e=!1}}),[o]),e.useEffect((function(){r&&!u.current?s("loading"):m&&s("normal")}),[o]);var f=function(){s("normal")};return[function(e){u.current=!1,"loading"===l&&null!=e&&e.complete&&(e.naturalWidth||e.naturalHeight)&&(u.current=!0,f())},m&&a?{src:a}:{onLoad:f,src:o},l]}var Z={x:0,y:0,rotate:0,scale:1,flipX:!1,flipY:!1};function B(e,t,n,o){var r=t+n,i=(n-o)/2;if(n>o){if(t>0)return a({},e,i);if(t<0&&r<o)return a({},e,-i)}else if(t<0||r>o)return a({},e,t<0?i:-i);return{}}function W(e,t,n,o){var a=P(),i=a.width,c=a.height,l=null;return e<=i&&t<=c?l={x:0,y:0}:(e>i||t>c)&&(l=r(r({},B("x",n,e,i)),B("y",o,t,c))),l}function V(e,t){var n=e.x-t.x,o=e.y-t.y;return Math.hypot(n,o)}function F(n,o,a,i,c,l,s){var u=c.rotate,m=c.scale,f=c.x,d=c.y,p=e.useState(!1),g=t(p,2),v=g[0],h=g[1],w=e.useRef({point1:{x:0,y:0},point2:{x:0,y:0},eventType:"none"}),b=function(e){w.current=r(r({},w.current),e)};return e.useEffect((function(){var e;return a&&o&&(e=A(window,"touchmove",(function(e){return e.preventDefault()}),{passive:!1})),function(){var t;null===(t=e)||void 0===t||t.remove()}}),[a,o]),{isTouching:v,onTouchStart:function(e){if(o){e.stopPropagation(),h(!0);var t=e.touches,n=void 0===t?[]:t;n.length>1?b({point1:{x:n[0].clientX,y:n[0].clientY},point2:{x:n[1].clientX,y:n[1].clientY},eventType:"touchZoom"}):b({point1:{x:n[0].clientX-f,y:n[0].clientY-d},eventType:"move"})}},onTouchMove:function(e){var n=e.touches,o=void 0===n?[]:n,r=w.current,a=r.point1,i=r.point2,c=r.eventType;if(o.length>1&&"touchZoom"===c){var u={x:o[0].clientX,y:o[0].clientY},m={x:o[1].clientX,y:o[1].clientY},f=function(e,t,n,o){var r=V(e,n),a=V(t,o);if(0===r&&0===a)return[e.x,e.y];var i=r/(r+a);return[e.x+i*(t.x-e.x),e.y+i*(t.y-e.y)]}(a,i,u,m),d=t(f,2),p=d[0],g=d[1],v=V(u,m)/V(a,i);s(v,"touchZoom",p,g,!0),b({point1:u,point2:m,eventType:"touchZoom"})}else"move"===c&&(l({x:o[0].clientX-a.x,y:o[0].clientY-a.y},"move"),b({eventType:"move"}))},onTouchEnd:function(){if(a){if(v&&h(!1),b({eventType:"none"}),i>m)return l({x:0,y:0,scale:i},"touchZoom");var e=n.current.offsetWidth*m,t=n.current.offsetHeight*m,o=n.current.getBoundingClientRect(),c=o.left,s=o.top,f=u%180!=0,d=W(f?t:e,f?e:t,c,s);d&&l(r({},d),"dragRebound")}}}}var G=function(t){var n=t.visible,o=t.maskTransitionName,u=t.getContainer,m=t.prefixCls,f=t.rootClassName,d=t.icons,p=t.countRender,g=t.showSwitch,v=t.showProgress,h=t.current,w=t.transform,b=t.count,C=t.scale,x=t.minScale,y=t.maxScale,S=t.closeIcon,I=t.onSwitchLeft,E=t.onSwitchRight,N=t.onClose,k=t.onZoomIn,M=t.onZoomOut,R=t.onRotateRight,z=t.onRotateLeft,T=t.onFlipX,O=t.onFlipY,j=t.toolbarRender,L=t.zIndex,P=e.useContext($),A=d.rotateLeft,D=d.rotateRight,Y=d.zoomIn,X=d.zoomOut,H=d.close,Z=d.left,B=d.right,W=d.flipX,V=d.flipY,F="".concat(m,"-operations-operation");e.useEffect((function(){var e=function(e){e.keyCode===s.ESC&&N()};return n&&window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[n]);var G=[{icon:V,onClick:O,type:"flipY"},{icon:W,onClick:T,type:"flipX"},{icon:A,onClick:z,type:"rotateLeft"},{icon:D,onClick:R,type:"rotateRight"},{icon:X,onClick:M,type:"zoomOut",disabled:C<=x},{icon:Y,onClick:k,type:"zoomIn",disabled:C===y}].map((function(t){var n,o=t.icon,r=t.onClick,c=t.type,l=t.disabled;return e.createElement("div",{className:i(F,(n={},a(n,"".concat(m,"-operations-operation-").concat(c),!0),a(n,"".concat(m,"-operations-operation-disabled"),!!l),n)),onClick:r,key:c},o)})),_=e.createElement("div",{className:"".concat(m,"-operations")},G);return e.createElement(c,{visible:n,motionName:o},(function(t){var n=t.className,o=t.style;return e.createElement(l,{open:!0,getContainer:null!=u?u:document.body},e.createElement("div",{className:i("".concat(m,"-operations-wrapper"),n,f),style:r(r({},o),{},{zIndex:L})},null===S?null:e.createElement("button",{className:"".concat(m,"-close"),onClick:N},S||H),g&&e.createElement(e.Fragment,null,e.createElement("div",{className:i("".concat(m,"-switch-left"),a({},"".concat(m,"-switch-left-disabled"),0===h)),onClick:I},Z),e.createElement("div",{className:i("".concat(m,"-switch-right"),a({},"".concat(m,"-switch-right-disabled"),h===b-1)),onClick:E},B)),e.createElement("div",{className:"".concat(m,"-footer")},v&&e.createElement("div",{className:"".concat(m,"-progress")},p?p(h+1,b):"".concat(h+1," / ").concat(b)),j?j(_,r({icons:{flipYIcon:G[0],flipXIcon:G[1],rotateLeftIcon:G[2],rotateRightIcon:G[3],zoomOutIcon:G[4],zoomInIcon:G[5]},actions:{onFlipY:O,onFlipX:T,onRotateLeft:z,onRotateRight:R,onZoomOut:M,onZoomIn:k},transform:w},P?{current:h,total:b}:{})):_)))}))},_=["fallback","src","imgRef"],U=["prefixCls","src","alt","fallback","movable","onClose","visible","icons","rootClassName","closeIcon","getContainer","current","count","countRender","scaleStep","minScale","maxScale","transitionName","maskTransitionName","imageRender","imgCommonProps","toolbarRender","onTransform","onChange"],Q=function(e){var n=e.fallback,o=e.src,r=e.imgRef,a=u(e,_),i=H({src:o,fallback:n}),c=t(i,2),l=c[0],s=c[1];return m.createElement("img",f({ref:function(e){r.current=e,l(e)}},a,s))},q=function(c){var l=c.prefixCls,p=c.src,g=c.alt,v=c.fallback,h=c.movable,w=void 0===h||h,b=c.onClose,C=c.visible,x=c.icons,y=void 0===x?{}:x,S=c.rootClassName,I=c.closeIcon,E=c.getContainer,N=c.current,k=void 0===N?0:N,M=c.count,R=void 0===M?1:M,z=c.countRender,T=c.scaleStep,O=void 0===T?.5:T,j=c.minScale,L=void 0===j?1:j,D=c.maxScale,Y=void 0===D?50:D,X=c.transitionName,H=void 0===X?"zoom":X,B=c.maskTransitionName,V=void 0===B?"fade":B,_=c.imageRender,q=c.imgCommonProps,J=c.toolbarRender,K=c.onTransform,ee=c.onChange,te=u(c,U),ne=e.useRef(),oe=e.useContext($),re=oe&&R>1,ae=oe&&R>=1,ie=e.useState(!0),ce=t(ie,2),le=ce[0],se=ce[1],ue=function(a,i,c,l){var s=e.useRef(null),u=e.useRef([]),m=e.useState(Z),f=t(m,2),d=f[0],p=f[1],g=function(e,t){null===s.current&&(u.current=[],s.current=o((function(){p((function(e){var n=e;return u.current.forEach((function(e){n=r(r({},n),e)})),s.current=null,null==l||l({transform:n,action:t}),n}))}))),u.current.push(r(r({},d),e))};return{transform:d,resetTransform:function(e){p(Z),l&&!n(Z,d)&&l({transform:Z,action:e})},updateTransform:g,dispatchZoomChange:function(e,t,n,o,r){var l=a.current,s=l.width,u=l.height,m=l.offsetWidth,f=l.offsetHeight,p=l.offsetLeft,v=l.offsetTop,h=e,w=d.scale*e;w>c?(w=c,h=c/d.scale):w<i&&(h=(w=r?w:i)/d.scale);var b=null!=n?n:innerWidth/2,C=null!=o?o:innerHeight/2,x=h-1,y=x*s*.5,S=x*u*.5,I=x*(b-d.x-p),E=x*(C-d.y-v),N=d.x-(I-y),k=d.y-(E-S);if(e<1&&1===w){var M=m*w,R=f*w,z=P(),T=z.width,O=z.height;M<=T&&R<=O&&(N=0,k=0)}g({x:N,y:k,scale:w},t)}}}(ne,L,Y,K),me=ue.transform,fe=ue.resetTransform,de=ue.updateTransform,pe=ue.dispatchZoomChange,ge=function(n,o,a,i,c,l,s){var u=c.rotate,m=c.scale,f=c.x,d=c.y,p=e.useState(!1),g=t(p,2),v=g[0],h=g[1],w=e.useRef({diffX:0,diffY:0,transformX:0,transformY:0}),b=function(e){a&&v&&l({x:e.pageX-w.current.diffX,y:e.pageY-w.current.diffY},"move")},C=function(){if(a&&v){h(!1);var e=w.current,t=e.transformX,o=e.transformY;if(f===t||d===o)return;var i=n.current.offsetWidth*m,c=n.current.offsetHeight*m,s=n.current.getBoundingClientRect(),p=s.left,g=s.top,b=u%180!=0,C=W(b?c:i,b?i:c,p,g);C&&l(r({},C),"dragRebound")}};return e.useEffect((function(){var e,t,n,r;if(o){n=A(window,"mouseup",C,!1),r=A(window,"mousemove",b,!1);try{window.top!==window.self&&(e=A(window.top,"mouseup",C,!1),t=A(window.top,"mousemove",b,!1))}catch(a){}}return function(){var o,a,i,c;null===(o=n)||void 0===o||o.remove(),null===(a=r)||void 0===a||a.remove(),null===(i=e)||void 0===i||i.remove(),null===(c=t)||void 0===c||c.remove()}}),[a,v,f,d,u,o]),{isMoving:v,onMouseDown:function(e){o&&0===e.button&&(e.preventDefault(),e.stopPropagation(),w.current={diffX:e.pageX-f,diffY:e.pageY-d,transformX:f,transformY:d},h(!0))},onMouseMove:b,onMouseUp:C,onWheel:function(e){if(a&&0!=e.deltaY){var t=Math.abs(e.deltaY/100),n=1+Math.min(t,1)*i;e.deltaY>0&&(n=1/n),s(n,"wheel",e.clientX,e.clientY)}}}}(ne,w,C,O,me,de,pe),ve=ge.isMoving,he=ge.onMouseDown,we=ge.onWheel,be=F(ne,w,C,L,me,de,pe),Ce=be.isTouching,xe=be.onTouchStart,ye=be.onTouchMove,Se=be.onTouchEnd,Ie=me.rotate,Ee=me.scale,Ne=i(a({},"".concat(l,"-moving"),ve));e.useEffect((function(){le||se(!0)}),[le]);var ke=function(e){null==e||e.preventDefault(),null==e||e.stopPropagation(),k>0&&(se(!1),fe("prev"),null==ee||ee(k-1,k))},Me=function(e){null==e||e.preventDefault(),null==e||e.stopPropagation(),k<R-1&&(se(!1),fe("next"),null==ee||ee(k+1,k))},Re=function(e){C&&re&&(e.keyCode===s.LEFT?ke():e.keyCode===s.RIGHT&&Me())};e.useEffect((function(){var e=A(window,"keydown",Re,!1);return function(){e.remove()}}),[C,re,k]);var ze=m.createElement(Q,f({},q,{width:c.width,height:c.height,imgRef:ne,className:"".concat(l,"-img"),alt:g,style:{transform:"translate3d(".concat(me.x,"px, ").concat(me.y,"px, 0) scale3d(").concat(me.flipX?"-":"").concat(Ee,", ").concat(me.flipY?"-":"").concat(Ee,", 1) rotate(").concat(Ie,"deg)"),transitionDuration:(!le||Ce)&&"0s"},fallback:v,src:p,onWheel:we,onMouseDown:he,onDoubleClick:function(e){C&&(1!==Ee?de({x:0,y:0,scale:1},"doubleClick"):pe(1+O,"doubleClick",e.clientX,e.clientY))},onTouchStart:xe,onTouchMove:ye,onTouchEnd:Se,onTouchCancel:Se}));return m.createElement(m.Fragment,null,m.createElement(d,f({transitionName:H,maskTransitionName:V,closable:!1,keyboard:!0,prefixCls:l,onClose:b,visible:C,classNames:{wrapper:Ne},rootClassName:S,getContainer:E},te,{afterClose:function(){fe("close")}}),m.createElement("div",{className:"".concat(l,"-img-wrapper")},_?_(ze,r({transform:me},oe?{current:k}:{})):ze)),m.createElement(G,{visible:C,transform:me,maskTransitionName:V,closeIcon:I,getContainer:E,prefixCls:l,rootClassName:S,icons:y,countRender:z,showSwitch:re,showProgress:ae,current:k,count:R,scale:Ee,minScale:L,maxScale:Y,toolbarRender:J,onSwitchLeft:ke,onSwitchRight:Me,onZoomIn:function(){pe(1+O,"zoomIn")},onZoomOut:function(){pe(1/(1+O),"zoomOut")},onRotateRight:function(){de({rotate:Ie+90},"rotateRight")},onRotateLeft:function(){de({rotate:Ie-90},"rotateLeft")},onFlipX:function(){de({flipX:!me.flipX},"flipX")},onFlipY:function(){de({flipY:!me.flipY},"flipY")},onClose:b,zIndex:void 0!==te.zIndex?te.zIndex+1:void 0}))};var J=["visible","onVisibleChange","getContainer","current","movable","minScale","maxScale","countRender","closeIcon","onChange","onTransform","toolbarRender","imageRender"],K=["src"],ee=["src","alt","onPreviewClose","prefixCls","previewPrefixCls","placeholder","fallback","width","height","style","preview","className","onClick","onError","wrapperClassName","wrapperStyle","rootClassName"],te=["src","visible","onVisibleChange","getContainer","mask","maskClassName","movable","icons","scaleStep","minScale","maxScale","imageRender","toolbarRender"],ne=function(n){var o=n.src,c=n.alt,l=n.onPreviewClose,s=n.prefixCls,m=void 0===s?"rc-image":s,d=n.previewPrefixCls,p=void 0===d?"".concat(m,"-preview"):d,h=n.placeholder,w=n.fallback,b=n.width,C=n.height,x=n.style,y=n.preview,S=void 0===y||y,I=n.className,E=n.onClick,N=n.onError,k=n.wrapperClassName,M=n.wrapperStyle,R=n.rootClassName,z=u(n,ee),T=h&&!0!==h,O="object"===g(S)?S:{},j=O.src,L=O.visible,P=void 0===L?void 0:L,A=O.onVisibleChange,Z=void 0===A?l:A,B=O.getContainer,W=void 0===B?void 0:B,V=O.mask,F=O.maskClassName,G=O.movable,_=O.icons,U=O.scaleStep,Q=O.minScale,J=O.maxScale,K=O.imageRender,ne=O.toolbarRender,oe=u(O,te),re=null!=j?j:o,ae=v(!!P,{value:P,onChange:Z}),ie=t(ae,2),ce=ie[0],le=ie[1],se=H({src:o,isCustomPlaceholder:T,fallback:w}),ue=t(se,3),me=ue[0],fe=ue[1],de=ue[2],pe=e.useState(null),ge=t(pe,2),ve=ge[0],he=ge[1],we=e.useContext($),be=!!S,Ce=i(m,k,R,a({},"".concat(m,"-error"),"error"===de)),xe=e.useMemo((function(){var e={};return Y.forEach((function(t){void 0!==n[t]&&(e[t]=n[t])})),e}),Y.map((function(e){return n[e]}))),ye=function(n,o){var r=e.useState((function(){return String(X+=1)})),a=t(r,1)[0],i=e.useContext($),c={data:o,canPreview:n};return e.useEffect((function(){if(i)return i.register(a,c)}),[]),e.useEffect((function(){i&&i.register(a,c)}),[n,o]),a}(be,e.useMemo((function(){return r(r({},xe),{},{src:re})}),[re,xe]));return e.createElement(e.Fragment,null,e.createElement("div",f({},z,{className:Ce,onClick:be?function(e){var t=D(e.target),n=t.left,o=t.top;we?we.onPreview(ye,n,o):(he({x:n,y:o}),le(!0)),null==E||E(e)}:E,style:r({width:b,height:C},M)}),e.createElement("img",f({},xe,{className:i("".concat(m,"-img"),a({},"".concat(m,"-img-placeholder"),!0===h),I),style:r({height:C},x),ref:me},fe,{width:b,height:C,onError:N})),"loading"===de&&e.createElement("div",{"aria-hidden":"true",className:"".concat(m,"-placeholder")},h),V&&be&&e.createElement("div",{className:i("".concat(m,"-mask"),F),style:{display:"none"===(null==x?void 0:x.display)?"none":void 0}},V)),!we&&be&&e.createElement(q,f({"aria-hidden":!ce,visible:ce,prefixCls:p,onClose:function(){le(!1),he(null)},mousePosition:ve,src:re,alt:c,fallback:w,getContainer:W,icons:_,movable:G,scaleStep:U,minScale:Q,maxScale:J,rootClassName:R,imageRender:K,imgCommonProps:xe,toolbarRender:ne},oe)))};ne.PreviewGroup=function(n){var o,i=n.previewPrefixCls,c=void 0===i?"rc-image-preview":i,l=n.children,s=n.icons,m=void 0===s?{}:s,d=n.items,h=n.preview,w=n.fallback,b="object"===g(h)?h:{},C=b.visible,x=b.onVisibleChange,y=b.getContainer,S=b.current,I=b.movable,E=b.minScale,N=b.maxScale,k=b.countRender,M=b.closeIcon,R=b.onChange,z=b.onTransform,T=b.toolbarRender,O=b.imageRender,j=u(b,J),L=function(n){var o=e.useState({}),i=t(o,2),c=i[0],l=i[1],s=e.useCallback((function(e,t){return l((function(n){return r(r({},n),{},a({},e,t))})),function(){l((function(t){var n=r({},t);return delete n[e],n}))}}),[]);return[e.useMemo((function(){return n?n.map((function(e){if("string"==typeof e)return{data:{src:e}};var t={};return Object.keys(e).forEach((function(n){["src"].concat(p(Y)).includes(n)&&(t[n]=e[n])})),{data:t}})):Object.keys(c).reduce((function(e,t){var n=c[t],o=n.canPreview,r=n.data;return o&&e.push({data:r,id:t}),e}),[])}),[n,c]),s]}(d),P=t(L,2),A=P[0],D=P[1],X=v(0,{value:S}),H=t(X,2),Z=H[0],B=H[1],W=e.useState(!1),V=t(W,2),F=V[0],G=V[1],_=(null===(o=A[Z])||void 0===o?void 0:o.data)||{},U=_.src,Q=u(_,K),ee=v(!!C,{value:C,onChange:function(e,t){null==x||x(e,t,Z)}}),te=t(ee,2),ne=te[0],oe=te[1],re=e.useState(null),ae=t(re,2),ie=ae[0],ce=ae[1],le=e.useCallback((function(e,t,n){var o=A.findIndex((function(t){return t.id===e}));oe(!0),ce({x:t,y:n}),B(o<0?0:o),G(!0)}),[A]);e.useEffect((function(){ne?F||B(0):G(!1)}),[ne]);var se=e.useMemo((function(){return{register:D,onPreview:le}}),[D,le]);return e.createElement($.Provider,{value:se},l,e.createElement(q,f({"aria-hidden":!ne,movable:I,visible:ne,prefixCls:c,closeIcon:M,onClose:function(){oe(!1),ce(null)},mousePosition:ie,imgCommonProps:Q,src:U,fallback:w,icons:m,minScale:E,maxScale:N,getContainer:y,current:Z,count:A.length,countRender:k,onTransform:z,toolbarRender:T,imageRender:O,onChange:function(e,t){B(e),null==R||R(e,t)}},j)))},ne.displayName="Image";const oe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H188V494h440v326z"}},{tag:"path",attrs:{d:"M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5 42.1 5.2 82.1 18.2 119 38.7 38.1 21.2 71.2 49.7 98.4 84.3 27.1 34.7 46.7 73.7 58.1 115.8a325.95 325.95 0 016.5 140.9h74.9c14.8-103.6-11.3-213-81-302.3z"}}]},name:"rotate-left",theme:"outlined"};var re=function(t,n){return e.createElement(h,f({},t,{ref:n,icon:oe}))};const ae=e.forwardRef(re);const ie={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2A399.75 399.75 0 00123.5 631h74.9c-.9-5.3-1.7-10.7-2.4-16.1-5.1-42.1-2.1-84.1 8.9-124.8 11.4-42.2 31-81.1 58.1-115.8 27.2-34.7 60.3-63.2 98.4-84.3 37-20.6 76.9-33.6 119.1-38.8z"}},{tag:"path",attrs:{d:"M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32zm-44 402H396V494h440v326z"}}]},name:"rotate-right",theme:"outlined"};var ce=function(t,n){return e.createElement(h,f({},t,{ref:n,icon:ie}))};const le=e.forwardRef(ce);const se={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"swap",theme:"outlined"};var ue=function(t,n){return e.createElement(h,f({},t,{ref:n,icon:se}))};const me=e.forwardRef(ue);const fe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-in",theme:"outlined"};var de=function(t,n){return e.createElement(h,f({},t,{ref:n,icon:fe}))};const pe=e.forwardRef(de);const ge={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"}}]},name:"zoom-out",theme:"outlined"};var ve=function(t,n){return e.createElement(h,f({},t,{ref:n,icon:ge}))};const he=e.forwardRef(ve),we=e=>({position:e||"absolute",inset:0}),be=e=>{const{iconCls:t,motionDurationSlow:n,paddingXXS:o,marginXXS:r,prefixCls:a,colorTextLightSolid:i}=e;return{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:i,background:new C("#000").setAlpha(.5).toRgbString(),cursor:"pointer",opacity:0,transition:`opacity ${n}`,[`.${a}-mask-info`]:Object.assign(Object.assign({},I),{padding:`0 ${E(o)}`,[t]:{marginInlineEnd:r,svg:{verticalAlign:"baseline"}}})}},Ce=e=>{const{previewCls:t,modalMaskBg:n,paddingSM:o,marginXL:r,margin:a,paddingLG:i,previewOperationColorDisabled:c,previewOperationHoverColor:l,motionDurationSlow:s,iconCls:u,colorTextLightSolid:m}=e,f=new C(n).setAlpha(.1),d=f.clone().setAlpha(.2);return{[`${t}-footer`]:{position:"fixed",bottom:r,left:{_skip_check_:!0,value:0},width:"100%",display:"flex",flexDirection:"column",alignItems:"center",color:e.previewOperationColor},[`${t}-progress`]:{marginBottom:a},[`${t}-close`]:{position:"fixed",top:r,right:{_skip_check_:!0,value:r},display:"flex",color:m,backgroundColor:f.toRgbString(),borderRadius:"50%",padding:o,outline:0,border:0,cursor:"pointer",transition:`all ${s}`,"&:hover":{backgroundColor:d.toRgbString()},[`& > ${u}`]:{fontSize:e.previewOperationSize}},[`${t}-operations`]:{display:"flex",alignItems:"center",padding:`0 ${E(i)}`,backgroundColor:f.toRgbString(),borderRadius:100,"&-operation":{marginInlineStart:o,padding:o,cursor:"pointer",transition:`all ${s}`,userSelect:"none",[`&:not(${t}-operations-operation-disabled):hover > ${u}`]:{color:l},"&-disabled":{color:c,cursor:"not-allowed"},"&:first-of-type":{marginInlineStart:0},[`& > ${u}`]:{fontSize:e.previewOperationSize}}}}},xe=e=>{const{modalMaskBg:t,iconCls:n,previewOperationColorDisabled:o,previewCls:r,zIndexPopup:a,motionDurationSlow:i}=e,c=new C(t).setAlpha(.1),l=c.clone().setAlpha(.2);return{[`${r}-switch-left, ${r}-switch-right`]:{position:"fixed",insetBlockStart:"50%",zIndex:e.calc(a).add(1).equal({unit:!1}),display:"flex",alignItems:"center",justifyContent:"center",width:e.imagePreviewSwitchSize,height:e.imagePreviewSwitchSize,marginTop:e.calc(e.imagePreviewSwitchSize).mul(-1).div(2).equal(),color:e.previewOperationColor,background:c.toRgbString(),borderRadius:"50%",transform:"translateY(-50%)",cursor:"pointer",transition:`all ${i}`,userSelect:"none","&:hover":{background:l.toRgbString()},"&-disabled":{"&, &:hover":{color:o,background:"transparent",cursor:"not-allowed",[`> ${n}`]:{cursor:"not-allowed"}}},[`> ${n}`]:{fontSize:e.previewOperationSize}},[`${r}-switch-left`]:{insetInlineStart:e.marginSM},[`${r}-switch-right`]:{insetInlineEnd:e.marginSM}}},ye=e=>{const{motionEaseOut:t,previewCls:n,motionDurationSlow:o,componentCls:r}=e;return[{[`${r}-preview-root`]:{[n]:{height:"100%",textAlign:"center",pointerEvents:"none"},[`${n}-body`]:Object.assign(Object.assign({},we()),{overflow:"hidden"}),[`${n}-img`]:{maxWidth:"100%",maxHeight:"70%",verticalAlign:"middle",transform:"scale3d(1, 1, 1)",cursor:"grab",transition:`transform ${o} ${t} 0s`,userSelect:"none","&-wrapper":Object.assign(Object.assign({},we()),{transition:`transform ${o} ${t} 0s`,display:"flex",justifyContent:"center",alignItems:"center","& > *":{pointerEvents:"auto"},"&::before":{display:"inline-block",width:1,height:"50%",marginInlineEnd:-1,content:'""'}})},[`${n}-moving`]:{[`${n}-preview-img`]:{cursor:"grabbing","&-wrapper":{transitionDuration:"0s"}}}}},{[`${r}-preview-root`]:{[`${n}-wrap`]:{zIndex:e.zIndexPopup}}},{[`${r}-preview-operations-wrapper`]:{position:"fixed",zIndex:e.calc(e.zIndexPopup).add(1).equal({unit:!1})},"&":[Ce(e),xe(e)]}]},Se=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",display:"inline-block",[`${t}-img`]:{width:"100%",height:"auto",verticalAlign:"middle"},[`${t}-img-placeholder`]:{backgroundColor:e.colorBgContainerDisabled,backgroundImage:"url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4=')",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"30%"},[`${t}-mask`]:Object.assign({},be(e)),[`${t}-mask:hover`]:{opacity:1},[`${t}-placeholder`]:Object.assign({},we())}}},Ie=e=>{const{previewCls:t}=e;return{[`${t}-root`]:y(e,"zoom"),"&":S(e,!0)}},Ee=w("Image",(e=>{const t=`${e.componentCls}-preview`,n=b(e,{previewCls:t,modalMaskBg:new C("#000").setAlpha(.45).toRgbString(),imagePreviewSwitchSize:e.controlHeightLG});return[Se(n),ye(n),x(b(n,{componentCls:t})),Ie(n)]}),(e=>({zIndexPopup:e.zIndexPopupBase+80,previewOperationColor:new C(e.colorTextLightSolid).setAlpha(.65).toRgbString(),previewOperationHoverColor:new C(e.colorTextLightSolid).setAlpha(.85).toRgbString(),previewOperationColorDisabled:new C(e.colorTextLightSolid).setAlpha(.25).toRgbString(),previewOperationSize:1.5*e.fontSizeIcon})));var Ne=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const ke={rotateLeft:e.createElement(ae,null),rotateRight:e.createElement(le,null),zoomIn:e.createElement(pe,null),zoomOut:e.createElement(he,null),close:e.createElement(N,null),left:e.createElement(k,null),right:e.createElement(M,null),flipX:e.createElement(me,null),flipY:e.createElement(me,{rotate:90})},Me=t=>{var{previewPrefixCls:n,preview:o}=t,r=Ne(t,["previewPrefixCls","preview"]);const{getPrefixCls:a}=e.useContext(R),c=a("image",n),l=`${c}-preview`,s=a(),u=z(c),[m,f]=Ee(c,u),[d]=T("ImagePreview","object"==typeof o?o.zIndex:void 0),p=e.useMemo((()=>{var e;if(!1===o)return o;const t="object"==typeof o?o:{},n=i(f,u,null!==(e=t.rootClassName)&&void 0!==e?e:"");return Object.assign(Object.assign({},t),{transitionName:O(s,"zoom",t.transitionName),maskTransitionName:O(s,"fade",t.maskTransitionName),rootClassName:n,zIndex:d})}),[o]);return m(e.createElement(ne.PreviewGroup,Object.assign({preview:p,previewPrefixCls:l,icons:ke},r)))};var Re=globalThis&&globalThis.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};const ze=t=>{const{prefixCls:n,preview:o,className:r,rootClassName:a,style:c}=t,l=Re(t,["prefixCls","preview","className","rootClassName","style"]),{getPrefixCls:s,locale:u=j,getPopupContainer:m,image:f}=e.useContext(R),d=s("image",n),p=s(),g=u.Image||j.Image,v=z(d),[h,w]=Ee(d,v),b=i(a,w,v),C=i(r,w,null==f?void 0:f.className),[x]=T("ImagePreview","object"==typeof o?o.zIndex:void 0),y=e.useMemo((()=>{if(!1===o)return o;const t="object"==typeof o?o:{},{getContainer:n}=t,r=Re(t,["getContainer"]);return Object.assign(Object.assign({mask:e.createElement("div",{className:`${d}-mask-info`},e.createElement(L,null),null==g?void 0:g.preview),icons:ke},r),{getContainer:n||m,transitionName:O(p,"zoom",t.transitionName),maskTransitionName:O(p,"fade",t.maskTransitionName),zIndex:x})}),[o,g]),S=Object.assign(Object.assign({},null==f?void 0:f.style),c);return h(e.createElement(ne,Object.assign({prefixCls:d,preview:y,rootClassName:b,className:C,style:S},l)))};ze.PreviewGroup=Me;const Te=ze;export{Te as I};
