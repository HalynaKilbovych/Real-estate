(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),body:document.querySelector("body")};function t(){e.menu.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll")}e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t)})(),window.addEventListener("load",(function(){const e=document.documentElement,t=localStorage.getItem("user-theme");let s;window.matchMedia&&(s=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>{!t&&c()}));const n=document.querySelector(".theme-switch__btn"),o=document.querySelector(".theme-switch__auto");n&&n.addEventListener("click",(function(e){o.classList.add("active"),c(!0)}));o&&o.addEventListener("click",(function(e){o.classList.remove("active"),localStorage.setItem("user-theme",""),c()}));function c(t=!1){let s,n=e.classList.contains("light")?"light":"dark";"light"===n?s="dark":"dark"===n&&(s="light"),e.classList.remove(n),e.classList.add(s),t&&localStorage.setItem("user-theme",s)}t?(e.classList.add(t),o.classList.add("active")):e.classList.add(s)}));const e=document.querySelector(".up-btn__wrapper"),t=document.querySelector(".up-btn__svg-path"),s=t.getTotalLength();t.style.strokeDasharray=`${s} ${s}`,t.style.transition="stroke-dashoffset 25ms",e.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})})),window.addEventListener("scroll",(()=>{!function(){let e=document.documentElement.scrollHeight-window.innerHeight;const n=s-window.pageYOffset*s/e;t.style.strokeDashoffset=n}(),700>window.pageYOffset?e.classList.add("visually-hidden"):e.classList.remove("visually-hidden")}));
//# sourceMappingURL=index.fb58ea46.js.map
