(()=>{var e,o,n,r={1836:(e,o,n)=>{"use strict";var r=n(21777),i=n(32981),a=n(19231),s=n(85471),c=n(96689),d=n(60669),l=n(29999),u=n(90176),m=n(35550);var f=n(65899);let p,v;function b(){window.OCA.Activity.registerSidebarAction({mount:async(e,t)=>{let{context:o,fileInfo:r,reload:i}=t;const a=(0,f.Ey)();if(!p){const{default:e}=await Promise.all([n.e(4208),n.e(7462),n.e(8057)]).then(n.bind(n,98057));p=s.Ay.extend(e)}v=new p({el:e,parent:o,pinia:a,propsData:{reloadCallback:i,resourceId:r.id}}),c.A.info("Comments plugin mounted in Activity sidebar action",{fileInfo:r})},unmount:()=>{v&&v.$destroy()}}),window.OCA.Activity.registerSidebarEntries((async e=>{let{fileInfo:t,limit:o,offset:r}=e;const{data:i}=await async function(e,t){let{resourceType:o,resourceId:n}=e;const r=["",o,n].join("/"),i=t.datetime?`<oc:datetime>${t.datetime.toISOString()}</oc:datetime>`:"",a=await m.A.customRequest(r,Object.assign({method:"REPORT",data:`<?xml version="1.0"?>\n\t\t\t<oc:filter-comments\n\t\t\t\txmlns:d="DAV:"\n\t\t\t\txmlns:oc="http://owncloud.org/ns"\n\t\t\t\txmlns:nc="http://nextcloud.org/ns"\n\t\t\t\txmlns:ocs="http://open-collaboration-services.org/ns">\n\t\t\t\t<oc:limit>${t.limit??20}</oc:limit>\n\t\t\t\t<oc:offset>${t.offset||0}</oc:offset>\n\t\t\t\t${i}\n\t\t\t</oc:filter-comments>`},t)),s=await a.text(),c=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{multistatus:{response:o}}=e;return o.map((e=>{const o=e.propstat.prop;return(0,u.ch)(o,o.id.toString(),t)}))}(await(0,d.h4)(s),!0);return(0,l.hq)(a,c,!0)}({resourceType:"files",resourceId:t.id},{limit:o,offset:r});c.A.debug("Loaded comments",{fileInfo:t,comments:i});const{default:f}=await Promise.all([n.e(4208),n.e(7462),n.e(3920)]).then(n.bind(n,93920)),p=s.Ay.extend(f);return i.map((e=>({_CommentsViewInstance:void 0,timestamp:(0,a.A)(e.props?.creationDateTime).toDate().getTime(),mount(o,n){let{context:r,reload:i}=n;this._CommentsViewInstance=new p({el:o,parent:r,propsData:{comment:e,resourceId:t.id,reloadCallback:i}})},unmount(){this._CommentsViewInstance?.$destroy()}})))})),window.OCA.Activity.registerSidebarFilter((e=>"comments"!==e.type)),c.A.info("Comments plugin registered for Activity sidebar action")}if(s.Ay.use(f.R2),n.nc=btoa((0,r.do)()),(0,i.C)("comments","activityEnabled",!1)&&void 0!==OCA?.Activity?.registerSidebarAction)window.addEventListener("DOMContentLoaded",(function(){b()}));else{let e=null;const o=new OCA.Files.Sidebar.Tab({id:"comments",name:t("comments","Comments"),iconSvg:'<svg xmlns="http://www.w3.org/2000/svg" id="mdi-message-reply-text" viewBox="0 0 24 24"><path d="M18,8H6V6H18V8M18,11H6V9H18V11M18,14H6V12H18V14M22,4A2,2 0 0,0 20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4Z" /></svg>',async mount(t,o,n){e&&e.$destroy(),e=new OCA.Comments.View("files",{parent:n,propsData:{resourceId:o.id}}),await e.update(o.id),e.$mount(t)},update(t){e.update(t.id)},destroy(){e.$destroy(),e=null},scrollBottomReached(){e.onScrollBottomReached()}});window.addEventListener("DOMContentLoaded",(function(){OCA.Files&&OCA.Files.Sidebar&&OCA.Files.Sidebar.registerTab(o)}))}},96689:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});const n=(0,o(35947).YK)().setApp("comments").detectUser().build()},35550:(e,t,o)=>{"use strict";o.d(t,{A:()=>c});var n=o(60669),r=o(17003),i=o(21777);const a=(0,n.UU)((0,r.e)()),s=e=>{a.setHeaders({"X-Requested-With":"XMLHttpRequest",requesttoken:e??""})};(0,i.zo)(s),s((0,i.do)());const c=a},17003:(e,t,o)=>{"use strict";o.d(t,{e:()=>r});var n=o(63814);const r=function(){return(0,n.dC)("dav/comments")}},42634:()=>{},63779:()=>{},77199:()=>{},59169:()=>{},86833:()=>{}},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var o=i[e]={id:e,loaded:!1,exports:{}};return r[e].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}a.m=r,e=[],a.O=(t,o,n,r)=>{if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],n=e[l][1],r=e[l][2];for(var s=!0,c=0;c<o.length;c++)(!1&r||i>=r)&&Object.keys(a.O).every((e=>a.O[e](o[c])))?o.splice(c--,1):(s=!1,r<i&&(i=r));if(s){e.splice(l--,1);var d=n();void 0!==d&&(t=d)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[o,n,r]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,o)=>(a.f[o](e,t),t)),[])),a.u=e=>e+"-"+e+".js?v="+{3920:"d2965aff947ea8ac373f",4254:"5c2324570f66dff0c8a1",5528:"1058bc81cd72143db9e0",7462:"f9c87aa4b80fce3b7886",8057:"2c8f7e35c56e047ba73f",9480:"50fa67ec0e107a8bf23d"}[e],a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o={},n="nextcloud:",a.l=(e,t,r,i)=>{if(o[e])o[e].push(t);else{var s,c;if(void 0!==r)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==n+r){s=u;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",n+r),s.src=e),o[e]=[t];var m=(t,n)=>{s.onerror=s.onload=null,clearTimeout(f);var r=o[e];if(delete o[e],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((e=>e(n))),t)return t(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),c&&document.head.appendChild(s)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.j=2122,(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var n=o.length-1;n>-1&&(!e||!/^http(s?):/.test(e));)e=o[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{a.b=document.baseURI||self.location.href;var e={2122:0};a.f.j=(t,o)=>{var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var r=new Promise(((o,r)=>n=e[t]=[o,r]));o.push(n[2]=r);var i=a.p+a.u(t),s=new Error;a.l(i,(o=>{if(a.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var r=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,n[1](s)}}),"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,o)=>{var n,r,i=o[0],s=o[1],c=o[2],d=0;if(i.some((t=>0!==e[t]))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(c)var l=c(a)}for(t&&t(o);d<i.length;d++)r=i[d],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(l)},o=self.webpackChunknextcloud=self.webpackChunknextcloud||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),a.nc=void 0;var s=a.O(void 0,[4208],(()=>a(1836)));s=a.O(s)})();
//# sourceMappingURL=comments-comments-tab.js.map?v=c2dc95d982f4ee41a8a5