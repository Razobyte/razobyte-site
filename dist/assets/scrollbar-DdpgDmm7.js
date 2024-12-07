import{m as $,e as R,b as F,c as G,d as j,g as N,f as B,h as X,n as Y,i as U}from"./navigation-0xVBYdun.js";function P(T){return T===void 0&&(T=""),`.${T.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function V(T){let{swiper:e,extendParams:q,on:f,emit:v}=T;const m="swiper-pagination";q({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:a=>a,formatFractionTotal:a=>a,bulletClass:`${m}-bullet`,bulletActiveClass:`${m}-bullet-active`,modifierClass:`${m}-`,currentClass:`${m}-current`,totalClass:`${m}-total`,hiddenClass:`${m}-hidden`,progressbarFillClass:`${m}-progressbar-fill`,progressbarOppositeClass:`${m}-progressbar-opposite`,clickableClass:`${m}-clickable`,lockClass:`${m}-lock`,horizontalClass:`${m}-horizontal`,verticalClass:`${m}-vertical`,paginationDisabledClass:`${m}-disabled`}}),e.pagination={el:null,bullets:[]};let C,L=0;function M(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function D(a,s){const{bulletActiveClass:i}=e.params.pagination;a&&(a=a[`${s==="prev"?"previous":"next"}ElementSibling`],a&&(a.classList.add(`${i}-${s}`),a=a[`${s==="prev"?"previous":"next"}ElementSibling`],a&&a.classList.add(`${i}-${s}-${s}`)))}function h(a){const s=a.target.closest(P(e.params.pagination.bulletClass));if(!s)return;a.preventDefault();const i=F(s)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===i)return;e.slideToLoop(i)}else e.slideTo(i)}function g(){const a=e.rtl,s=e.params.pagination;if(M())return;let i=e.pagination.el;i=$(i);let o,u;const z=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,O=e.params.loop?Math.ceil(z/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(u=e.previousRealIndex||0,o=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(o=e.snapIndex,u=e.previousSnapIndex):(u=e.previousIndex||0,o=e.activeIndex||0),s.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const c=e.pagination.bullets;let y,b,w;if(s.dynamicBullets&&(C=R(c[0],e.isHorizontal()?"width":"height",!0),i.forEach(l=>{l.style[e.isHorizontal()?"width":"height"]=`${C*(s.dynamicMainBullets+4)}px`}),s.dynamicMainBullets>1&&u!==void 0&&(L+=o-(u||0),L>s.dynamicMainBullets-1?L=s.dynamicMainBullets-1:L<0&&(L=0)),y=Math.max(o-L,0),b=y+(Math.min(c.length,s.dynamicMainBullets)-1),w=(b+y)/2),c.forEach(l=>{const r=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(t=>`${s.bulletActiveClass}${t}`)].map(t=>typeof t=="string"&&t.includes(" ")?t.split(" "):t).flat();l.classList.remove(...r)}),i.length>1)c.forEach(l=>{const r=F(l);r===o?l.classList.add(...s.bulletActiveClass.split(" ")):e.isElement&&l.setAttribute("part","bullet"),s.dynamicBullets&&(r>=y&&r<=b&&l.classList.add(...`${s.bulletActiveClass}-main`.split(" ")),r===y&&D(l,"prev"),r===b&&D(l,"next"))});else{const l=c[o];if(l&&l.classList.add(...s.bulletActiveClass.split(" ")),e.isElement&&c.forEach((r,t)=>{r.setAttribute("part",t===o?"bullet-active":"bullet")}),s.dynamicBullets){const r=c[y],t=c[b];for(let n=y;n<=b;n+=1)c[n]&&c[n].classList.add(...`${s.bulletActiveClass}-main`.split(" "));D(r,"prev"),D(t,"next")}}if(s.dynamicBullets){const l=Math.min(c.length,s.dynamicMainBullets+4),r=(C*l-C)/2-w*C,t=a?"right":"left";c.forEach(n=>{n.style[e.isHorizontal()?t:"top"]=`${r}px`})}}i.forEach((c,y)=>{if(s.type==="fraction"&&(c.querySelectorAll(P(s.currentClass)).forEach(b=>{b.textContent=s.formatFractionCurrent(o+1)}),c.querySelectorAll(P(s.totalClass)).forEach(b=>{b.textContent=s.formatFractionTotal(O)})),s.type==="progressbar"){let b;s.progressbarOpposite?b=e.isHorizontal()?"vertical":"horizontal":b=e.isHorizontal()?"horizontal":"vertical";const w=(o+1)/O;let l=1,r=1;b==="horizontal"?l=w:r=w,c.querySelectorAll(P(s.progressbarFillClass)).forEach(t=>{t.style.transform=`translate3d(0,0,0) scaleX(${l}) scaleY(${r})`,t.style.transitionDuration=`${e.params.speed}ms`})}s.type==="custom"&&s.renderCustom?(c.innerHTML=s.renderCustom(e,o+1,O),y===0&&v("paginationRender",c)):(y===0&&v("paginationRender",c),v("paginationUpdate",c)),e.params.watchOverflow&&e.enabled&&c.classList[e.isLocked?"add":"remove"](s.lockClass)})}function S(){const a=e.params.pagination;if(M())return;const s=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let i=e.pagination.el;i=$(i);let o="";if(a.type==="bullets"){let u=e.params.loop?Math.ceil(s/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&u>s&&(u=s);for(let z=0;z<u;z+=1)a.renderBullet?o+=a.renderBullet.call(e,z,a.bulletClass):o+=`<${a.bulletElement} ${e.isElement?'part="bullet"':""} class="${a.bulletClass}"></${a.bulletElement}>`}a.type==="fraction"&&(a.renderFraction?o=a.renderFraction.call(e,a.currentClass,a.totalClass):o=`<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`),a.type==="progressbar"&&(a.renderProgressbar?o=a.renderProgressbar.call(e,a.progressbarFillClass):o=`<span class="${a.progressbarFillClass}"></span>`),e.pagination.bullets=[],i.forEach(u=>{a.type!=="custom"&&(u.innerHTML=o||""),a.type==="bullets"&&e.pagination.bullets.push(...u.querySelectorAll(P(a.bulletClass)))}),a.type!=="custom"&&v("paginationRender",i[0])}function k(){e.params.pagination=G(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const a=e.params.pagination;if(!a.el)return;let s;typeof a.el=="string"&&e.isElement&&(s=e.el.querySelector(a.el)),!s&&typeof a.el=="string"&&(s=[...document.querySelectorAll(a.el)]),s||(s=a.el),!(!s||s.length===0)&&(e.params.uniqueNavElements&&typeof a.el=="string"&&Array.isArray(s)&&s.length>1&&(s=[...e.el.querySelectorAll(a.el)],s.length>1&&(s=s.filter(i=>j(i,".swiper")[0]===e.el)[0])),Array.isArray(s)&&s.length===1&&(s=s[0]),Object.assign(e.pagination,{el:s}),s=$(s),s.forEach(i=>{a.type==="bullets"&&a.clickable&&i.classList.add(...(a.clickableClass||"").split(" ")),i.classList.add(a.modifierClass+a.type),i.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.type==="bullets"&&a.dynamicBullets&&(i.classList.add(`${a.modifierClass}${a.type}-dynamic`),L=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),a.type==="progressbar"&&a.progressbarOpposite&&i.classList.add(a.progressbarOppositeClass),a.clickable&&i.addEventListener("click",h),e.enabled||i.classList.add(a.lockClass)}))}function H(){const a=e.params.pagination;if(M())return;let s=e.pagination.el;s&&(s=$(s),s.forEach(i=>{i.classList.remove(a.hiddenClass),i.classList.remove(a.modifierClass+a.type),i.classList.remove(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.clickable&&(i.classList.remove(...(a.clickableClass||"").split(" ")),i.removeEventListener("click",h))})),e.pagination.bullets&&e.pagination.bullets.forEach(i=>i.classList.remove(...a.bulletActiveClass.split(" ")))}f("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const a=e.params.pagination;let{el:s}=e.pagination;s=$(s),s.forEach(i=>{i.classList.remove(a.horizontalClass,a.verticalClass),i.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass)})}),f("init",()=>{e.params.pagination.enabled===!1?I():(k(),S(),g())}),f("activeIndexChange",()=>{typeof e.snapIndex>"u"&&g()}),f("snapIndexChange",()=>{g()}),f("snapGridLengthChange",()=>{S(),g()}),f("destroy",()=>{H()}),f("enable disable",()=>{let{el:a}=e.pagination;a&&(a=$(a),a.forEach(s=>s.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),f("lock unlock",()=>{g()}),f("click",(a,s)=>{const i=s.target,o=$(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&o&&o.length>0&&!i.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&i===e.navigation.nextEl||e.navigation.prevEl&&i===e.navigation.prevEl))return;const u=o[0].classList.contains(e.params.pagination.hiddenClass);v(u===!0?"paginationShow":"paginationHide"),o.forEach(z=>z.classList.toggle(e.params.pagination.hiddenClass))}});const A=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=$(a),a.forEach(s=>s.classList.remove(e.params.pagination.paginationDisabledClass))),k(),S(),g()},I=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=$(a),a.forEach(s=>s.classList.add(e.params.pagination.paginationDisabledClass))),H()};Object.assign(e.pagination,{enable:A,disable:I,render:S,update:g,init:k,destroy:H})}function W(T){let{swiper:e,extendParams:q,on:f,emit:v}=T;const m=N();let C=!1,L=null,M=null,D,h,g,S;q({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null};function k(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:l,rtlTranslate:r}=e,{dragEl:t,el:n}=l,p=e.params.scrollbar,x=e.params.loop?e.progressLoop:e.progress;let E=h,d=(g-h)*x;r?(d=-d,d>0?(E=h-d,d=0):-d+h>g&&(E=g+d)):d<0?(E=h+d,d=0):d+h>g&&(E=g-d),e.isHorizontal()?(t.style.transform=`translate3d(${d}px, 0, 0)`,t.style.width=`${E}px`):(t.style.transform=`translate3d(0px, ${d}px, 0)`,t.style.height=`${E}px`),p.hide&&(clearTimeout(L),n.style.opacity=1,L=setTimeout(()=>{n.style.opacity=0,n.style.transitionDuration="400ms"},1e3))}function H(l){!e.params.scrollbar.el||!e.scrollbar.el||(e.scrollbar.dragEl.style.transitionDuration=`${l}ms`)}function A(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;const{scrollbar:l}=e,{dragEl:r,el:t}=l;r.style.width="",r.style.height="",g=e.isHorizontal()?t.offsetWidth:t.offsetHeight,S=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?h=g*S:h=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?r.style.width=`${h}px`:r.style.height=`${h}px`,S>=1?t.style.display="none":t.style.display="",e.params.scrollbar.hide&&(t.style.opacity=0),e.params.watchOverflow&&e.enabled&&l.el.classList[e.isLocked?"add":"remove"](e.params.scrollbar.lockClass)}function I(l){return e.isHorizontal()?l.clientX:l.clientY}function a(l){const{scrollbar:r,rtlTranslate:t}=e,{el:n}=r;let p;p=(I(l)-U(n)[e.isHorizontal()?"left":"top"]-(D!==null?D:h/2))/(g-h),p=Math.max(Math.min(p,1),0),t&&(p=1-p);const x=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*p;e.updateProgress(x),e.setTranslate(x),e.updateActiveIndex(),e.updateSlidesClasses()}function s(l){const r=e.params.scrollbar,{scrollbar:t,wrapperEl:n}=e,{el:p,dragEl:x}=t;C=!0,D=l.target===x?I(l)-l.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,l.preventDefault(),l.stopPropagation(),n.style.transitionDuration="100ms",x.style.transitionDuration="100ms",a(l),clearTimeout(M),p.style.transitionDuration="0ms",r.hide&&(p.style.opacity=1),e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="none"),v("scrollbarDragStart",l)}function i(l){const{scrollbar:r,wrapperEl:t}=e,{el:n,dragEl:p}=r;C&&(l.preventDefault&&l.cancelable?l.preventDefault():l.returnValue=!1,a(l),t.style.transitionDuration="0ms",n.style.transitionDuration="0ms",p.style.transitionDuration="0ms",v("scrollbarDragMove",l))}function o(l){const r=e.params.scrollbar,{scrollbar:t,wrapperEl:n}=e,{el:p}=t;C&&(C=!1,e.params.cssMode&&(e.wrapperEl.style["scroll-snap-type"]="",n.style.transitionDuration=""),r.hide&&(clearTimeout(M),M=Y(()=>{p.style.opacity=0,p.style.transitionDuration="400ms"},1e3)),v("scrollbarDragEnd",l),r.snapOnRelease&&e.slideToClosest())}function u(l){const{scrollbar:r,params:t}=e,n=r.el;if(!n)return;const p=n,x=t.passiveListeners?{passive:!1,capture:!1}:!1,E=t.passiveListeners?{passive:!0,capture:!1}:!1;if(!p)return;const d=l==="on"?"addEventListener":"removeEventListener";p[d]("pointerdown",s,x),m[d]("pointermove",i,x),m[d]("pointerup",o,E)}function z(){!e.params.scrollbar.el||!e.scrollbar.el||u("on")}function O(){!e.params.scrollbar.el||!e.scrollbar.el||u("off")}function c(){const{scrollbar:l,el:r}=e;e.params.scrollbar=G(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});const t=e.params.scrollbar;if(!t.el)return;let n;if(typeof t.el=="string"&&e.isElement&&(n=e.el.querySelector(t.el)),!n&&typeof t.el=="string"){if(n=m.querySelectorAll(t.el),!n.length)return}else n||(n=t.el);e.params.uniqueNavElements&&typeof t.el=="string"&&n.length>1&&r.querySelectorAll(t.el).length===1&&(n=r.querySelector(t.el)),n.length>0&&(n=n[0]),n.classList.add(e.isHorizontal()?t.horizontalClass:t.verticalClass);let p;n&&(p=n.querySelector(P(e.params.scrollbar.dragClass)),p||(p=X("div",e.params.scrollbar.dragClass),n.append(p))),Object.assign(l,{el:n,dragEl:p}),t.draggable&&z(),n&&n.classList[e.enabled?"remove":"add"](...B(e.params.scrollbar.lockClass))}function y(){const l=e.params.scrollbar,r=e.scrollbar.el;r&&r.classList.remove(...B(e.isHorizontal()?l.horizontalClass:l.verticalClass)),O()}f("changeDirection",()=>{if(!e.scrollbar||!e.scrollbar.el)return;const l=e.params.scrollbar;let{el:r}=e.scrollbar;r=$(r),r.forEach(t=>{t.classList.remove(l.horizontalClass,l.verticalClass),t.classList.add(e.isHorizontal()?l.horizontalClass:l.verticalClass)})}),f("init",()=>{e.params.scrollbar.enabled===!1?w():(c(),A(),k())}),f("update resize observerUpdate lock unlock changeDirection",()=>{A()}),f("setTranslate",()=>{k()}),f("setTransition",(l,r)=>{H(r)}),f("enable disable",()=>{const{el:l}=e.scrollbar;l&&l.classList[e.enabled?"remove":"add"](...B(e.params.scrollbar.lockClass))}),f("destroy",()=>{y()});const b=()=>{e.el.classList.remove(...B(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.remove(...B(e.params.scrollbar.scrollbarDisabledClass)),c(),A(),k()},w=()=>{e.el.classList.add(...B(e.params.scrollbar.scrollbarDisabledClass)),e.scrollbar.el&&e.scrollbar.el.classList.add(...B(e.params.scrollbar.scrollbarDisabledClass)),y()};Object.assign(e.scrollbar,{enable:b,disable:w,updateSize:A,setTranslate:k,init:c,destroy:y})}export{V as P,W as S};