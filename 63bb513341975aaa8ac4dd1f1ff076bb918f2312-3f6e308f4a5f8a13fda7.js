"use strict";(self.webpackChunkkyoungah_dev_blog=self.webpackChunkkyoungah_dev_blog||[]).push([[781],{2452:function(t,e,s){s.d(e,{Z:function(){return y}});var r=s(6298);const i=(0,r.F4)({from:{opacity:0},to:{opacity:1}}),n={root:(0,r.iv)({width:"100%",animation:"0.6s "+i},"","","","")};var o=function(t){let{children:e}=t;return(0,r.tZ)("ul",{css:n.root},e)};const a={root:{name:"wr8btd",styles:"position:absolute;width:100%;margin-bottom:16px;text-align:center;font-size:18px;top:50%;left:50%;transform:translate(-50%, -50%)"},commingSoon:{name:"1jjx41q",styles:"font-size:24px;font-weight:600;color:hsla(var(--palette-blue-100), 100%)"},emptyPostText:{name:"135yvj2",styles:"font-size:18px;line-height:1.5;color:hsla(var(--palette-gray-100), 100%)"}};var u=function(){return(0,r.tZ)("div",{css:a.root},(0,r.tZ)("h3",{css:a.commingSoon},"COMING SOON"),(0,r.tZ)("br",null),(0,r.tZ)("span",{css:a.emptyPostText},"아직 등록된 포스트가 없어요",(0,r.tZ)("br",null),"조금만 기다려주세요"))};const c=(0,r.F4)({to:{opacity:"0.3",transform:"translate3d(0, -16px, 0)"}}),h={root:(0,r.iv)({display:"flex",alignItems:"center",justifyContent:"center",gap:6,span:{width:8,height:8,backgroundColor:"var(--primary-color)",borderRadius:"50%",animation:"0.6s "+c+" infinite alternate","&:nth-of-type(2)":{animationDelay:"0.3s"},"&:nth-of-type(3)":{animationDelay:"0.6s"}}},"","","","")};var l=()=>(0,r.tZ)("div",{css:h.root},(0,r.tZ)("span",null),(0,r.tZ)("span",null),(0,r.tZ)("span",null)),d=s(1883);const p={root:(0,r.iv)({width:"100%",listStyle:"none","&:not(:last-of-type)":{marginBottom:60}},"","","",""),postLink:{name:"4ky2pj",styles:"color:#000000"},postTitle:(0,r.iv)({marginBottom:8,fontSize:20,fontWeight:600,"a:hover &":{color:"hsla(var(--base-blue), 29%)",transition:"color 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s"}},"","","",""),postExcerpt:(0,r.iv)({lineHeight:1.5,fontSize:15,fontWeight:400,"a:hover &":{color:"hsla(var(--base-blue), 39%)",transition:"color 0.25s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s"}},"","","","")};var f=function(t){let{link:e,title:s,excerpt:i}=t;return(0,r.tZ)("li",{css:p.root},(0,r.tZ)(d.Link,{to:e,css:p.postLink},(0,r.tZ)("h3",{css:p.postTitle},s),(0,r.tZ)("p",{css:p.postExcerpt},i)))};var y=Object.assign(o,{EmptyPost:u,FetchPostLoader:l,Post:f})},9394:function(t,e,s){s.d(e,{N:function(){return w}});var r=s(4139),i=s(7037),n=s(6474),o=s(7506),a=s(2008),u=class extends o.l{constructor(t,e){super(),this.#t=void 0,this.#e=void 0,this.#s=void 0,this.#r=new Set,this.#i=t,this.options=e,this.#n=null,this.bindMethods(),this.setOptions(e)}#i;#t;#e;#s;#o;#a;#n;#u;#c;#h;#l;#d;#p;#r;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.#t.addObserver(this),c(this.#t,this.options)?this.#f():this.updateResult(),this.#y())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return h(this.#t,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return h(this.#t,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#R(),this.#v(),this.#t.removeObserver(this)}setOptions(t,e){const s=this.options,i=this.#t;if(this.options=this.#i.defaultQueryOptions(t),(0,r.VS)(s,this.options)||this.#i.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#t,observer:this}),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=s.queryKey),this.#g();const n=this.hasListeners();n&&l(this.#t,i,this.options,s)&&this.#f(),this.updateResult(e),!n||this.#t===i&&this.options.enabled===s.enabled&&this.options.staleTime===s.staleTime||this.#m();const o=this.#b();!n||this.#t===i&&this.options.enabled===s.enabled&&o===this.#p||this.#Q(o)}getOptimisticResult(t){const e=this.#i.getQueryCache().build(this.#i,t),s=this.createResult(e,t);return function(t,e){if(!(0,r.VS)(t.getCurrentResult(),e))return!0;return!1}(this,s)&&(this.#s=s,this.#a=this.options,this.#o=this.#t.state),s}getCurrentResult(){return this.#s}trackResult(t){const e={};return Object.keys(t).forEach((s=>{Object.defineProperty(e,s,{configurable:!1,enumerable:!0,get:()=>(this.#r.add(s),t[s])})})),e}getCurrentQuery(){return this.#t}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const e=this.#i.defaultQueryOptions(t),s=this.#i.getQueryCache().build(this.#i,e);return s.isFetchingOptimistic=!0,s.fetch().then((()=>this.createResult(s,e)))}fetch(t){return this.#f({...t,cancelRefetch:t.cancelRefetch??!0}).then((()=>(this.updateResult(),this.#s)))}#f(t){this.#g();let e=this.#t.fetch(this.options,t);return t?.throwOnError||(e=e.catch(r.ZT)),e}#m(){if(this.#R(),r.sk||this.#s.isStale||!(0,r.PN)(this.options.staleTime))return;const t=(0,r.Kp)(this.#s.dataUpdatedAt,this.options.staleTime)+1;this.#l=setTimeout((()=>{this.#s.isStale||this.updateResult()}),t)}#b(){return("function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.#t):this.options.refetchInterval)??!1}#Q(t){this.#v(),this.#p=t,!r.sk&&!1!==this.options.enabled&&(0,r.PN)(this.#p)&&0!==this.#p&&(this.#d=setInterval((()=>{(this.options.refetchIntervalInBackground||n.j.isFocused())&&this.#f()}),this.#p))}#y(){this.#m(),this.#Q(this.#b())}#R(){this.#l&&(clearTimeout(this.#l),this.#l=void 0)}#v(){this.#d&&(clearInterval(this.#d),this.#d=void 0)}createResult(t,e){const s=this.#t,i=this.options,n=this.#s,o=this.#o,u=this.#a,h=t!==s?t.state:this.#e,{state:p}=t;let f,{error:y,errorUpdatedAt:R,fetchStatus:v,status:g}=p,m=!1;if(e._optimisticResults){const r=this.hasListeners(),n=!r&&c(t,e),o=r&&l(t,s,e,i);(n||o)&&(v=(0,a.Kw)(t.options.networkMode)?"fetching":"paused",p.dataUpdatedAt||(g="pending")),"isRestoring"===e._optimisticResults&&(v="idle")}if(e.select&&void 0!==p.data)if(n&&p.data===o?.data&&e.select===this.#u)f=this.#c;else try{this.#u=e.select,f=e.select(p.data),f=(0,r.oE)(n?.data,f,e),this.#c=f,this.#n=null}catch(P){this.#n=P}else f=p.data;if(void 0!==e.placeholderData&&void 0===f&&"pending"===g){let t;if(n?.isPlaceholderData&&e.placeholderData===u?.placeholderData)t=n.data;else if(t="function"==typeof e.placeholderData?e.placeholderData(this.#h?.state.data,this.#h):e.placeholderData,e.select&&void 0!==t)try{t=e.select(t),this.#n=null}catch(P){this.#n=P}void 0!==t&&(g="success",f=(0,r.oE)(n?.data,t,e),m=!0)}this.#n&&(y=this.#n,f=this.#c,R=Date.now(),g="error");const b="fetching"===v,Q="pending"===g,O="error"===g,I=Q&&b;return{status:g,fetchStatus:v,isPending:Q,isSuccess:"success"===g,isError:O,isInitialLoading:I,isLoading:I,data:f,dataUpdatedAt:p.dataUpdatedAt,error:y,errorUpdatedAt:R,failureCount:p.fetchFailureCount,failureReason:p.fetchFailureReason,errorUpdateCount:p.errorUpdateCount,isFetched:p.dataUpdateCount>0||p.errorUpdateCount>0,isFetchedAfterMount:p.dataUpdateCount>h.dataUpdateCount||p.errorUpdateCount>h.errorUpdateCount,isFetching:b,isRefetching:b&&!Q,isLoadingError:O&&0===p.dataUpdatedAt,isPaused:"paused"===v,isPlaceholderData:m,isRefetchError:O&&0!==p.dataUpdatedAt,isStale:d(t,e),refetch:this.refetch}}updateResult(t){const e=this.#s,s=this.createResult(this.#t,this.options);if(this.#o=this.#t.state,this.#a=this.options,void 0!==this.#o.data&&(this.#h=this.#t),(0,r.VS)(s,e))return;this.#s=s;const i={};!1!==t?.listeners&&(()=>{if(!e)return!0;const{notifyOnChangeProps:t}=this.options,s="function"==typeof t?t():t;if("all"===s||!s&&!this.#r.size)return!0;const r=new Set(s??this.#r);return this.options.throwOnError&&r.add("error"),Object.keys(this.#s).some((t=>{const s=t;return this.#s[s]!==e[s]&&r.has(s)}))})()&&(i.listeners=!0),this.#O({...i,...t})}#g(){const t=this.#i.getQueryCache().build(this.#i,this.options);if(t===this.#t)return;const e=this.#t;this.#t=t,this.#e=t.state,this.hasListeners()&&(e?.removeObserver(this),t.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#y()}#O(t){i.V.batch((()=>{t.listeners&&this.listeners.forEach((t=>{t(this.#s)})),this.#i.getQueryCache().notify({query:this.#t,type:"observerResultsUpdated"})}))}};function c(t,e){return function(t,e){return!(!1===e.enabled||t.state.dataUpdatedAt||"error"===t.state.status&&!1===e.retryOnMount)}(t,e)||t.state.dataUpdatedAt>0&&h(t,e,e.refetchOnMount)}function h(t,e,s){if(!1!==e.enabled){const r="function"==typeof s?s(t):s;return"always"===r||!1!==r&&d(t,e)}return!1}function l(t,e,s,r){return!1!==s.enabled&&(t!==e||!1===r.enabled)&&(!s.suspense||"error"!==t.state.status)&&d(t,s)}function d(t,e){return t.isStaleByTime(e.staleTime)}var p=s(4948),f=class extends u{constructor(t,e){super(t,e)}bindMethods(){super.bindMethods(),this.fetchNextPage=this.fetchNextPage.bind(this),this.fetchPreviousPage=this.fetchPreviousPage.bind(this)}setOptions(t,e){super.setOptions({...t,behavior:(0,p.Gm)()},e)}getOptimisticResult(t){return t.behavior=(0,p.Gm)(),super.getOptimisticResult(t)}fetchNextPage(t){return this.fetch({...t,meta:{fetchMore:{direction:"forward"}}})}fetchPreviousPage(t){return this.fetch({...t,meta:{fetchMore:{direction:"backward"}}})}createResult(t,e){const{state:s}=t,r=super.createResult(t,e),{isFetching:i,isRefetching:n}=r,o=i&&"forward"===s.fetchMeta?.fetchMore?.direction,a=i&&"backward"===s.fetchMeta?.fetchMore?.direction;return{...r,fetchNextPage:this.fetchNextPage,fetchPreviousPage:this.fetchPreviousPage,hasNextPage:(0,p.Qy)(e,s.data),hasPreviousPage:(0,p.ZF)(e,s.data),isFetchingNextPage:o,isFetchingPreviousPage:a,isRefetching:n&&!o&&!a}}},y=s(7294);function R(){let t=!1;return{clearReset:()=>{t=!1},reset:()=>{t=!0},isReset:()=>t}}var v=y.createContext(R()),g=()=>y.useContext(v),m=s(202),b=y.createContext(!1),Q=()=>y.useContext(b);b.Provider;var O=(t,e)=>{(t.suspense||t.throwOnError)&&(e.isReset()||(t.retryOnMount=!1))},I=t=>{y.useEffect((()=>{t.clearReset()}),[t])},P=({result:t,errorResetBoundary:e,throwOnError:s,query:r})=>{return t.isError&&!e.isReset()&&!t.isFetching&&(i=s,n=[t.error,r],"function"==typeof i?i(...n):!!i);var i,n},S=t=>{t.suspense&&"number"!=typeof t.staleTime&&(t.staleTime=1e3)},C=(t,e)=>t?.suspense&&e.isPending,x=(t,e,s)=>e.fetchOptimistic(t).catch((()=>{s.clearReset()}));function w(t,e){return function(t,e,s){const r=(0,m.NL)(s),n=Q(),o=g(),a=r.defaultQueryOptions(t);a._optimisticResults=n?"isRestoring":"optimistic",S(a),O(a,o),I(o);const[u]=y.useState((()=>new e(r,a))),c=u.getOptimisticResult(a);if(y.useSyncExternalStore(y.useCallback((t=>{const e=n?()=>{}:u.subscribe(i.V.batchCalls(t));return u.updateResult(),e}),[u,n]),(()=>u.getCurrentResult()),(()=>u.getCurrentResult())),y.useEffect((()=>{u.setOptions(a,{listeners:!1})}),[a,u]),C(a,c))throw x(a,u,o);if(P({result:c,errorResetBoundary:o,throwOnError:a.throwOnError,query:u.getCurrentQuery()}))throw c.error;return a.notifyOnChangeProps?c:u.trackResult(c)}(t,f,e)}}}]);
//# sourceMappingURL=63bb513341975aaa8ac4dd1f1ff076bb918f2312-3f6e308f4a5f8a13fda7.js.map