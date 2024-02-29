import{j as p}from"./jsx-runtime.rLVLFWFs.js";import{r as s,R as xe}from"./index.CAtLf4_y.js";import"./index.1P2F51O5.js";/**
 * @remix-run/router v1.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(this,arguments)}var P;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(P||(P={}));const Q="popstate";function ye(e){e===void 0&&(e={});function t(r,a){let{pathname:l,search:i,hash:c}=r.location;return K("",{pathname:l,search:i,hash:c},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:_(a)}return we(t,n,null,e)}function b(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ae(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function be(){return Math.random().toString(36).substr(2,8)}function Y(e,t){return{usr:e.state,key:e.key,idx:t}}function K(e,t,n,r){return n===void 0&&(n=null),T({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?U(t):t,{state:n,key:t&&t.key||r||be()})}function _(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function U(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function we(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:l=!1}=r,i=a.history,c=P.Pop,o=null,d=u();d==null&&(d=0,i.replaceState(T({},i.state,{idx:d}),""));function u(){return(i.state||{idx:null}).idx}function f(){c=P.Pop;let h=u(),w=h==null?null:h-d;d=h,o&&o({action:c,location:v.location,delta:w})}function m(h,w){c=P.Push;let g=K(v.location,h,w);n&&n(g,h),d=u()+1;let y=Y(g,d),C=v.createHref(g);try{i.pushState(y,"",C)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;a.location.assign(C)}l&&o&&o({action:c,location:v.location,delta:1})}function E(h,w){c=P.Replace;let g=K(v.location,h,w);n&&n(g,h),d=u();let y=Y(g,d),C=v.createHref(g);i.replaceState(y,"",C),l&&o&&o({action:c,location:v.location,delta:0})}function x(h){let w=a.location.origin!=="null"?a.location.origin:a.location.href,g=typeof h=="string"?h:_(h);return g=g.replace(/ $/,"%20"),b(w,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,w)}let v={get action(){return c},get location(){return e(a,i)},listen(h){if(o)throw new Error("A history only accepts one active listener");return a.addEventListener(Q,f),o=h,()=>{a.removeEventListener(Q,f),o=null}},createHref(h){return t(a,h)},createURL:x,encodeLocation(h){let w=x(h);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:m,replace:E,go(h){return i.go(h)}};return v}var Z;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Z||(Z={}));function Ce(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?U(t):t,a=L(r.pathname||"/",n);if(a==null)return null;let l=le(e);Ee(l);let i=null;for(let c=0;i==null&&c<l.length;++c){let o=Oe(a);i=Te(l[c],o)}return i}function le(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(l,i,c)=>{let o={relativePath:c===void 0?l.path||"":c,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};o.relativePath.startsWith("/")&&(b(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let d=j([r,o.relativePath]),u=n.concat(o);l.children&&l.children.length>0&&(b(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),le(l.children,t,u,d)),!(l.path==null&&!l.index)&&t.push({path:d,score:Ue(d,l.index),routesMeta:u})};return e.forEach((l,i)=>{var c;if(l.path===""||!((c=l.path)!=null&&c.includes("?")))a(l,i);else for(let o of ie(l.path))a(l,i,o)}),t}function ie(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let i=ie(r.join("/")),c=[];return c.push(...i.map(o=>o===""?l:[l,o].join("/"))),a&&c.push(...i),c.map(o=>e.startsWith("/")&&o===""?"/":o)}function Ee(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ke(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Re=/^:[\w-]+$/,Pe=3,je=2,Se=1,Ne=10,Le=-2,ee=e=>e==="*";function Ue(e,t){let n=e.split("/"),r=n.length;return n.some(ee)&&(r+=Le),t&&(r+=je),n.filter(a=>!ee(a)).reduce((a,l)=>a+(Re.test(l)?Pe:l===""?Se:Ne),r)}function ke(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function Te(e,t){let{routesMeta:n}=e,r={},a="/",l=[];for(let i=0;i<n.length;++i){let c=n[i],o=i===n.length-1,d=a==="/"?t:t.slice(a.length)||"/",u=q({path:c.relativePath,caseSensitive:c.caseSensitive,end:o},d);if(!u)return null;Object.assign(r,u.params);let f=c.route;l.push({params:r,pathname:j([a,u.pathname]),pathnameBase:We(j([a,u.pathnameBase])),route:f}),u.pathnameBase!=="/"&&(a=j([a,u.pathnameBase]))}return l}function q(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Be(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let l=a[0],i=l.replace(/(.)\/+$/,"$1"),c=a.slice(1);return{params:r.reduce((d,u,f)=>{let{paramName:m,isOptional:E}=u;if(m==="*"){let v=c[f]||"";i=l.slice(0,l.length-v.length).replace(/(.)\/+$/,"$1")}const x=c[f];return E&&!x?d[m]=void 0:d[m]=(x||"").replace(/%2F/g,"/"),d},{}),pathname:l,pathnameBase:i,pattern:e}}function Be(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ae(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,c,o)=>(r.push({paramName:c,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function Oe(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ae(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function L(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ie(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?U(e):e;return{pathname:n?n.startsWith("/")?n:_e(n,t):t,search:Fe(r),hash:Me(a)}}function _e(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function z(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function $e(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function oe(e,t){let n=$e(e);return t?n.map((r,a)=>a===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function se(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=U(e):(a=T({},e),b(!a.pathname||!a.pathname.includes("?"),z("?","pathname","search",a)),b(!a.pathname||!a.pathname.includes("#"),z("#","pathname","hash",a)),b(!a.search||!a.search.includes("#"),z("#","search","hash",a)));let l=e===""||a.pathname==="",i=l?"/":a.pathname,c;if(i==null)c=n;else{let f=t.length-1;if(!r&&i.startsWith("..")){let m=i.split("/");for(;m[0]==="..";)m.shift(),f-=1;a.pathname=m.join("/")}c=f>=0?t[f]:"/"}let o=Ie(a,c),d=i&&i!=="/"&&i.endsWith("/"),u=(l||i===".")&&n.endsWith("/");return!o.pathname.endsWith("/")&&(d||u)&&(o.pathname+="/"),o}const j=e=>e.join("/").replace(/\/\/+/g,"/"),We=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Fe=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Me=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function De(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ce=["post","put","patch","delete"];new Set(ce);const Ve=["get",...ce];new Set(Ve);/**
 * React Router v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}const F=s.createContext(null),ue=s.createContext(null),S=s.createContext(null),M=s.createContext(null),N=s.createContext({outlet:null,matches:[],isDataRoute:!1}),fe=s.createContext(null);function Je(e,t){let{relative:n}=t===void 0?{}:t;O()||b(!1);let{basename:r,navigator:a}=s.useContext(S),{hash:l,pathname:i,search:c}=D(e,{relative:n}),o=i;return r!=="/"&&(o=i==="/"?r:j([r,i])),a.createHref({pathname:o,search:c,hash:l})}function O(){return s.useContext(M)!=null}function I(){return O()||b(!1),s.useContext(M).location}function de(e){s.useContext(S).static||s.useLayoutEffect(e)}function Ae(){let{isDataRoute:e}=s.useContext(N);return e?rt():ze()}function ze(){O()||b(!1);let e=s.useContext(F),{basename:t,future:n,navigator:r}=s.useContext(S),{matches:a}=s.useContext(N),{pathname:l}=I(),i=JSON.stringify(oe(a,n.v7_relativeSplatPath)),c=s.useRef(!1);return de(()=>{c.current=!0}),s.useCallback(function(d,u){if(u===void 0&&(u={}),!c.current)return;if(typeof d=="number"){r.go(d);return}let f=se(d,JSON.parse(i),l,u.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:j([t,f.pathname])),(u.replace?r.replace:r.push)(f,u.state,u)},[t,r,i,l,e])}function D(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=s.useContext(S),{matches:a}=s.useContext(N),{pathname:l}=I(),i=JSON.stringify(oe(a,r.v7_relativeSplatPath));return s.useMemo(()=>se(e,JSON.parse(i),l,n==="path"),[e,i,l,n])}function Ke(e,t){return qe(e,t)}function qe(e,t,n,r){O()||b(!1);let{navigator:a}=s.useContext(S),{matches:l}=s.useContext(N),i=l[l.length-1],c=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let d=I(),u;if(t){var f;let h=typeof t=="string"?U(t):t;o==="/"||(f=h.pathname)!=null&&f.startsWith(o)||b(!1),u=h}else u=d;let m=u.pathname||"/",E=m;if(o!=="/"){let h=o.replace(/^\//,"").split("/");E="/"+m.replace(/^\//,"").split("/").slice(h.length).join("/")}let x=Ce(e,{pathname:E}),v=Ye(x&&x.map(h=>Object.assign({},h,{params:Object.assign({},c,h.params),pathname:j([o,a.encodeLocation?a.encodeLocation(h.pathname).pathname:h.pathname]),pathnameBase:h.pathnameBase==="/"?o:j([o,a.encodeLocation?a.encodeLocation(h.pathnameBase).pathname:h.pathnameBase])})),l,n,r);return t&&v?s.createElement(M.Provider,{value:{location:B({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:P.Pop}},v):v}function Ge(){let e=nt(),t=De(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return s.createElement(s.Fragment,null,s.createElement("h2",null,"Unexpected Application Error!"),s.createElement("h3",{style:{fontStyle:"italic"}},t),n?s.createElement("pre",{style:a},n):null,null)}const Xe=s.createElement(Ge,null);class He extends s.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?s.createElement(N.Provider,{value:this.props.routeContext},s.createElement(fe.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Qe(e){let{routeContext:t,match:n,children:r}=e,a=s.useContext(F);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),s.createElement(N.Provider,{value:t},r)}function Ye(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if((l=n)!=null&&l.errors)e=n.matches;else return null}let i=e,c=(a=n)==null?void 0:a.errors;if(c!=null){let u=i.findIndex(f=>f.route.id&&c?.[f.route.id]);u>=0||b(!1),i=i.slice(0,Math.min(i.length,u+1))}let o=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<i.length;u++){let f=i[u];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(d=u),f.route.id){let{loaderData:m,errors:E}=n,x=f.route.loader&&m[f.route.id]===void 0&&(!E||E[f.route.id]===void 0);if(f.route.lazy||x){o=!0,d>=0?i=i.slice(0,d+1):i=[i[0]];break}}}return i.reduceRight((u,f,m)=>{let E,x=!1,v=null,h=null;n&&(E=c&&f.route.id?c[f.route.id]:void 0,v=f.route.errorElement||Xe,o&&(d<0&&m===0?(at("route-fallback",!1),x=!0,h=null):d===m&&(x=!0,h=f.route.hydrateFallbackElement||null)));let w=t.concat(i.slice(0,m+1)),g=()=>{let y;return E?y=v:x?y=h:f.route.Component?y=s.createElement(f.route.Component,null):f.route.element?y=f.route.element:y=u,s.createElement(Qe,{match:f,routeContext:{outlet:u,matches:w,isDataRoute:n!=null},children:y})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?s.createElement(He,{location:n.location,revalidation:n.revalidation,component:v,error:E,children:g(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):g()},null)}var he=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(he||{}),$=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}($||{});function Ze(e){let t=s.useContext(F);return t||b(!1),t}function et(e){let t=s.useContext(ue);return t||b(!1),t}function tt(e){let t=s.useContext(N);return t||b(!1),t}function pe(e){let t=tt(),n=t.matches[t.matches.length-1];return n.route.id||b(!1),n.route.id}function nt(){var e;let t=s.useContext(fe),n=et($.UseRouteError),r=pe($.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function rt(){let{router:e}=Ze(he.UseNavigateStable),t=pe($.UseNavigateStable),n=s.useRef(!1);return de(()=>{n.current=!0}),s.useCallback(function(a,l){l===void 0&&(l={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,B({fromRouteId:t},l)))},[e,t])}const te={};function at(e,t,n){!t&&!te[e]&&(te[e]=!0)}function k(e){b(!1)}function lt(e){let{basename:t="/",children:n=null,location:r,navigationType:a=P.Pop,navigator:l,static:i=!1,future:c}=e;O()&&b(!1);let o=t.replace(/^\/*/,"/"),d=s.useMemo(()=>({basename:o,navigator:l,static:i,future:B({v7_relativeSplatPath:!1},c)}),[o,c,l,i]);typeof r=="string"&&(r=U(r));let{pathname:u="/",search:f="",hash:m="",state:E=null,key:x="default"}=r,v=s.useMemo(()=>{let h=L(u,o);return h==null?null:{location:{pathname:h,search:f,hash:m,state:E,key:x},navigationType:a}},[o,u,f,m,E,x,a]);return v==null?null:s.createElement(S.Provider,{value:d},s.createElement(M.Provider,{children:n,value:v}))}function it(e){let{children:t,location:n}=e;return Ke(G(t),n)}new Promise(()=>{});function G(e,t){t===void 0&&(t=[]);let n=[];return s.Children.forEach(e,(r,a)=>{if(!s.isValidElement(r))return;let l=[...t,a];if(r.type===s.Fragment){n.push.apply(n,G(r.props.children,l));return}r.type!==k&&b(!1),!r.props.index||!r.props.children||b(!1);let i={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(i.children=G(r.props.children,l)),n.push(i)}),n}/**
 * React Router DOM v6.22.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}function me(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,l;for(l=0;l<r.length;l++)a=r[l],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function ot(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function st(e,t){return e.button===0&&(!t||t==="_self")&&!ot(e)}const ct=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],ut=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],ft="6";try{window.__reactRouterVersion=ft}catch{}const dt=s.createContext({isTransitioning:!1}),ht="startTransition",ne=xe[ht];function pt(e){let{basename:t,children:n,future:r,window:a}=e,l=s.useRef();l.current==null&&(l.current=ye({window:a,v5Compat:!0}));let i=l.current,[c,o]=s.useState({action:i.action,location:i.location}),{v7_startTransition:d}=r||{},u=s.useCallback(f=>{d&&ne?ne(()=>o(f)):o(f)},[o,d]);return s.useLayoutEffect(()=>i.listen(u),[i,u]),s.createElement(lt,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:i,future:r})}const mt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vt=s.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:l,replace:i,state:c,target:o,to:d,preventScrollReset:u,unstable_viewTransition:f}=t,m=me(t,ct),{basename:E}=s.useContext(S),x,v=!1;if(typeof d=="string"&&gt.test(d)&&(x=d,mt))try{let y=new URL(window.location.href),C=d.startsWith("//")?new URL(y.protocol+d):new URL(d),R=L(C.pathname,E);C.origin===y.origin&&R!=null?d=R+C.search+C.hash:v=!0}catch{}let h=Je(d,{relative:a}),w=bt(d,{replace:i,state:c,target:o,preventScrollReset:u,relative:a,unstable_viewTransition:f});function g(y){r&&r(y),y.defaultPrevented||w(y)}return s.createElement("a",W({},m,{href:x||h,onClick:v||l?r:g,ref:n,target:o}))}),xt=s.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:a=!1,className:l="",end:i=!1,style:c,to:o,unstable_viewTransition:d,children:u}=t,f=me(t,ut),m=D(o,{relative:f.relative}),E=I(),x=s.useContext(ue),{navigator:v,basename:h}=s.useContext(S),w=x!=null&&wt(m)&&d===!0,g=v.encodeLocation?v.encodeLocation(m).pathname:m.pathname,y=E.pathname,C=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;a||(y=y.toLowerCase(),C=C?C.toLowerCase():null,g=g.toLowerCase()),C&&h&&(C=L(C,h)||C);const R=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let V=y===g||!i&&y.startsWith(g)&&y.charAt(R)==="/",H=C!=null&&(C===g||!i&&C.startsWith(g)&&C.charAt(g.length)==="/"),J={isActive:V,isPending:H,isTransitioning:w},ge=V?r:void 0,A;typeof l=="function"?A=l(J):A=[l,V?"active":null,H?"pending":null,w?"transitioning":null].filter(Boolean).join(" ");let ve=typeof c=="function"?c(J):c;return s.createElement(vt,W({},f,{"aria-current":ge,className:A,ref:n,style:ve,to:o,unstable_viewTransition:d}),typeof u=="function"?u(J):u)});var X;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(X||(X={}));var re;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(re||(re={}));function yt(e){let t=s.useContext(F);return t||b(!1),t}function bt(e,t){let{target:n,replace:r,state:a,preventScrollReset:l,relative:i,unstable_viewTransition:c}=t===void 0?{}:t,o=Ae(),d=I(),u=D(e,{relative:i});return s.useCallback(f=>{if(st(f,n)){f.preventDefault();let m=r!==void 0?r:_(d)===_(u);o(e,{replace:m,state:a,preventScrollReset:l,relative:i,unstable_viewTransition:c})}},[d,o,u,r,a,n,e,l,i,c])}function wt(e,t){t===void 0&&(t={});let n=s.useContext(dt);n==null&&b(!1);let{basename:r}=yt(X.useViewTransitionState),a=D(e,{relative:t.relative});if(!n.isTransitioning)return!1;let l=L(n.currentLocation.pathname,r)||n.currentLocation.pathname,i=L(n.nextLocation.pathname,r)||n.nextLocation.pathname;return q(a.pathname,i)!=null||q(a.pathname,l)!=null}const Ct=()=>{const e=[{href:"/",name:"Stack"},{href:"/certificates/",name:"Certificates"},{href:"/work-together/",name:"Work with me"},{href:"/files/",name:"Download CV"}];return p.jsx("ul",{className:"absolute flex justify-between items-center top-[27rem] profile-nav border-b-solid border-b-[1px] border-b-accent-100 w-full md:w-[55%] lg:w-[45%] 2xl:w-[41%] 2xl:top-[30rem]",children:e.map((t,n)=>p.jsx("li",{className:"px-4 mx-2 w-fit h-full flex justify-center items-center md:mx-0 md:px-2",children:p.jsx(xt,{to:t.href,className:({isActive:r,isPending:a})=>a?"h-full w-20 flex justify-center items-center bg-[#ffffff] text-center text-xs":r?"h-full w-20 flex justify-center items-center border-b-[4px] border-b-solid border-b-primary-300 text-white text-center text-xs":"h-full w-20 flex justify-center items-center border-b-[4px] border-b-solid border-b-transparent text-accent-100 text-center text-xs",children:t.name})},`pnl_${n}`))})},Et=()=>{const e=[{name:"Responsive Web Design",src:"https://www.freecodecamp.org/certification/borgesmj19/responsive-web-design",by:"FreeCodeCamp"},{name:"Javascript Algorithms and Data Structures",src:"https://www.freecodecamp.org/certification/borgesmj19/javascript-algorithms-and-data-structures",by:"FreeCodeCamp"},{name:"Taller de Figma",src:"https://cursos.desafiolatam.com/certificates/fufwc9p2lr",by:"Desafio Latam"},{name:"English for Developers & IT Profesionals",src:"https://cursos.desafiolatam.com/certificates/sdydbgbmfq",by:"Desafio Latam"}];return p.jsx("div",{className:"my-2 py-2 w-full flex flex-wrap gap-4 justify-center md:justify-between lg:justify-around",children:e.map(t=>p.jsxs("a",{href:t.src,className:"w-1/2 flex flex-col items-center text-center mb-2 md:w-2/5",target:"_blank",children:[p.jsx("img",{className:"aspect-square",src:`/Certificates-images/${t.name.replace(/\s+/g,"-")}.webp`,alt:t.name}),p.jsx("p",{children:p.jsx("strong",{children:t.name})}),p.jsxs("p",{children:["by: ",p.jsx("strong",{children:t.by})]})]},`certificate_${t.name.replace(/\s+/g,"-")}`))})},Rt=()=>{const e=[{language:"en",text:"Resume english Version"},{language:"es",text:"Resumen Versión Español"}];return p.jsx("div",{className:"my-2 py-2 w-full flex flex-col items-center md:flex-row md:justify-between md:items-start ",children:e.map(t=>p.jsxs("a",{href:`/files/Miguel_Borges_${t.language}.pdf`,className:"w-1/2 flex flex-col items-center text-center mb-2 md:w-2/5",target:"_blank",children:[p.jsx("img",{className:"aspect-square",src:`/files/Miguel_Borges_${t.language}.webp`,alt:""}),p.jsx("span",{children:t.text})]},`languaje_${t.language}`))})},Pt=()=>{const e=["HTML","CSS","JavaScript","TailwindCss","ReactJs","NextJs","NodeJs","AstroJs"];return p.jsx("div",{className:"my-2 pt-2 w-full grid grid-cols-2 md:grid-cols-4 justify-items-center bg-background-300 rounded-xl mb-8",children:e.map((t,n)=>p.jsx("img",{src:`/Stack-logos/${t}.webp`,alt:`${t}_icono`,className:"w-16 p-2 md:w-24 md:p-4 md:mx-2 lg:w-20 lg:p-2"},`icono_${n}`))})},jt=()=>p.jsxs("div",{className:"my-2 py-2 w-full flex flex-col text-center bg-gradient-to-r from-[#5bad1e] to-[#008eff] text-white p-8 rounded-lg mb-8",children:[p.jsx("h2",{className:"text-3xl font-bold mb-4",children:"Let's Work Together"}),p.jsx("img",{src:"/Images/Developer-activity-bro.webp",alt:"Developer-activity-bro",className:"md:h-[15rem] mx-auto md:w-[15rem]"}),p.jsx("p",{className:"text-lg mb-8",children:"I'm excited to collaborate with you. Let's create something amazing together!"}),p.jsx("a",{href:"/contact/",className:"bg-[#560bad] md:w-2/3 xl:w-1/2 md:mx-auto text-indigo-600 hover:bg-indigo-600 py-2 px-6 rounded-full text-lg font-bold inline-block border-[2px] border-solid border-[#560bad] transition-all hover:bg-white hover:text-[#560bad]",children:"<Work with Me/>"})]}),Ut=()=>p.jsxs(pt,{children:[p.jsx(Ct,{}),p.jsx("div",{className:"absolute top-[30rem] w-full pb-12 p-4  md:w-[60%] md:top-[32rem] lg:w-[45%] lg:top-[30rem] xl:top-[30rem] 2xl:top-[33rem] 2xl:w-2/5 lg:p-1 ",children:p.jsxs(it,{children:[p.jsx(k,{path:"/",element:p.jsx(Pt,{})}),p.jsx(k,{path:"/files/",element:p.jsx(Rt,{})}),p.jsx(k,{path:"/certificates/",element:p.jsx(Et,{})}),p.jsx(k,{path:"/work-together/",element:p.jsx(jt,{})})]})})]});export{Ut as default};
