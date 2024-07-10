(()=>{"use strict";var e={427:(e,t,n)=>{n.d(t,{A:()=>p});var o=n(601),a=n.n(o),i=n(314),d=n.n(i),c=n(417),r=n.n(c),s=new URL(n(203),n.b),l=d()(a()),m=r()(s);l.push([e.id,`body{\n    min-height: 100vh;\n    max-width: 100vw;\n    border: 0;\n    margin: 0;\n}\n\nheader{\n    position: sticky;\n    top: 0;\n}\n\nnav{\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    background-color: #333333;\n    color: #d4af37;\n}\n\n.brand{\n    display: flex;\n    align-items: center;\n}\n\n.logo-img{\n    max-height: 50px;\n    max-width: 50px;\n}\n\n\n.button-div{\n    display: flex;\n    flex-direction: row;\n    gap: 5px;\n}\n\nbutton{\n    background: none;\n    border: none;\n    cursor: pointer;\n    font: inherit;\n    color: #f0f0f0;\n}\n\n.content-button, .read-more{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: #d4af37;\n    border: 1px solid #d4af37;    \n    border-radius: 5px;\n    width: auto;\n    height: max-content;\n    padding: 1rem 2rem;\n    color: black;\n}\n\n.content-button:hover, .read-more:hover{\n    background-color: #7d5e3c;\n    border-color: #7d5e3c;\n    color: #f0f0f0;\n}\n\n#content{\n    height: 54.2rem;\n}\n\n.home-content{\n    display: flex;;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n}\n\n.left-side{\n    width: 40%;\n    color: #f0f0f0;\n    margin-left: 3rem;\n}\n\n.title{\n    font-size: 4rem;\n    margin-bottom: 0.5rem;\n    color: #f0f0f0\n}\n\n.desc{\n    margin-top: 0;\n    margin-bottom: 2rem;\n}\n\n.right-side{\n    display: flex;\n    height: 60%;\n    margin: 3rem 0 1rem 0;\n}\n\nfooter{\n    display: flex;\n    flex: 1 0 auto;\n    justify-content: center;\n    z-index: 10;\n    width: 100%;\n    /* margin-top: 3rem; */\n    background-color: #333333;\n    color: #f0f0f0;\n}\n\n.footer-content{\n    width: 25%;\n    margin-top: 2rem;\n    padding: 0 1rem;\n}\n\n.footer-title{\n    margin: 0 0 1rem 0;\n    font-size: 1.5rem;\n    color: #d4af37;\n}\n\n.sub-title{\n    margin: auto;\n    font-size: 1.2rem;\n}\n\n.time{\n    margin: 0.5rem 0 1rem 0;\n}\n\n.hero-content{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    min-height: 300px;\n    background: linear-gradient(rgb(15 24 47 / 90%), rgba(15, 23, 43, .9)), url(${m});;\n    background-size: cover;\n    background-position: center center;\n    background-color: #333333;\n    height: 100%;\n}\n\n.menu{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.menu-subtitle{\n    font-size: 2.5rem;\n    \n}\n\n.main-menu{\n    display: flex;\n    width: 80%;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    margin-top: 2rem;\n}\n\n.menu-card{\n    display: flex;\n    width: 50%;\n    \n}\n\n.menu-image{\n    width: 80px;\n    height: 80px;\n}\n\n.menu-details{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    border-bottom: 1px solid black;\n    margin-bottom: 0.5rem;\n    padding-bottom: 0.5rem;\n}\n\n.menu-div{\n    padding: 0 1.5rem;\n    width: 100%;\n}\n\n.menu-desc{\n    margin-top: 0.5rem;\n    font-size: 0.8rem;\n    color: #666565;\n}\n\nspan{\n    font-size: 1.3rem;\n}\n\n.price{\n    \n}\n\n.about-content{\n    width: 100%;\n}\n\n.main-content{\n    display: flex;\n    justify-content: center;\n    padding: 3rem 1.5rem;\n    background-color: #f0f0f0;\n}\n\n.img-div{\n    display: flex;\n    justify-content: flex-end;\n    width: 30%;\n    padding: 0 1.5rem;\n}\n\n.about-img{\n    display: flex;\n    aspect-ratio: 1/1;\n    max-width: 85%;\n}\n\n.text-content{\n    width: 50%;\n    padding: 0 1.5rem;\n}\n\n.section-title{\n    margin: 0 0 0.5rem 0;\n    font-size: 1.3rem;\n    color: #d4af37;\n}\n\n.welcome{\n    margin: 0 0 1.5rem 0;\n    font-size: 2.5rem;\n}\n\n.subtext{\n    margin: 0 0 1.5rem 0;\n    width: 60%;\n}\n\nli{\n    cursor: pointer;\n    transition: 0.3s;\n}\n\nli:hover{\n    letter-spacing: 1px;\n}`,""]);const p=l},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var d={};if(o)for(var c=0;c<this.length;c++){var r=this[c][0];null!=r&&(d[r]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&d[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},d=[],c=0;c<e.length;c++){var r=e[c],s=o.base?r[0]+o.base:r[0],l=i[s]||0,m="".concat(s," ").concat(l);i[s]=l+1;var p=n(m),u={css:r[1],media:r[2],sourceMap:r[3],supports:r[4],layer:r[5]};if(-1!==p)t[p].references++,t[p].updater(u);else{var h=a(u,o);o.byIndex=c,t.splice(c,0,{identifier:m,updater:h,references:1})}d.push(m)}return d}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var i=o(e=e||[],a=a||{});return function(e){e=e||[];for(var d=0;d<i.length;d++){var c=n(i[d]);t[c].references--}for(var r=o(e,a),s=0;s<i.length;s++){var l=n(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=r}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},203:(e,t,n)=>{e.exports=n.p+"5ca36597d470196adc75.jpg"}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=o[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0;var o=n(72),a=n.n(o),i=n(825),d=n.n(i),c=n(659),r=n.n(c),s=n(56),l=n.n(s),m=n(540),p=n.n(m),u=n(113),h=n.n(u),f=n(427),g={};g.styleTagTransform=h(),g.setAttributes=l(),g.insert=r().bind(null,"head"),g.domAPI=d(),g.insertStyleElement=p(),a()(f.A,g),f.A&&f.A.locals&&f.A.locals;const C=n.p+"cf2d202f309e4295a521.png",b=n.p+"dd2931e3411b39c71448.jpg";function v(){const e=document.querySelector("#content");for(;e.hasChildNodes();)e.removeChild(e.firstChild);const t=document.createElement("div");t.classList.add("about-content");const n=document.createElement("div");n.classList.add("hero-content");const o=document.createElement("h1");o.classList.add("title"),o.textContent="About Us",n.appendChild(o);const a=document.createElement("div");a.classList.add("main-content");const i=document.createElement("div");i.classList.add("img-div");const d=document.createElement("img");d.src=b,d.classList.add("about-img"),i.appendChild(d),a.appendChild(i);const c=document.createElement("div");c.classList.add("text-content");const r=document.createElement("h5");r.classList.add("section-title"),r.textContent="About Us";const s=document.createElement("h1");s.classList.add("welcome"),s.textContent="Welcome to Pearl Grill";const l=document.createElement("p");l.classList.add("subtext"),l.textContent="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.";const m=document.createElement("p");m.classList.add("subtext"),m.textContent="Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet";const p=document.createElement("p");p.classList.add("subtext"),p.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at velit ipsum. Sed at neque placerat, varius felis ut, posuere risus. Aliquam ut tellus sit amet justo pretium molestie. Nulla in ipsum sodales, ultricies magna a, fermentum massa. In tempor.";const u=document.createElement("button");u.classList.add("read-more"),u.textContent="READ MORE",c.appendChild(r),c.appendChild(s),c.appendChild(l),c.appendChild(m),c.appendChild(p),c.appendChild(u),a.appendChild(c),t.appendChild(n),t.appendChild(a),e.appendChild(t)}const x=n.p+"96adf3db29bdc1405e3d.png";function E(){const e=document.querySelector("#content");for(;e.hasChildNodes();)e.removeChild(e.firstChild);const t=document.createElement("div");t.classList.add("hero-content");const n=document.createElement("div");n.classList.add("left-side");const o=document.createElement("h1");o.textContent="Eat with us",o.classList.add("title");const a=document.createElement("p");a.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultrices, diam ac tincidunt aliquam, mi nisi suscipit nisi, egestas imperdiet felis lectus ac elit. Quisque.",a.classList.add("desc");const i=document.createElement("button");i.textContent="PLACE A RESERVATION",i.classList.add("content-button"),n.appendChild(o),n.appendChild(a),n.appendChild(i);const d=document.createElement("div");d.classList.add("right-side");const c=document.createElement("img");c.src=x,d.appendChild(c),t.appendChild(n),t.appendChild(d);const r=document.createElement("div");r.classList.add("home-content"),r.appendChild(t),e.appendChild(r)}const y=n.p+"175edddbe6a0fb976fb7.jpg",L=n.p+"358802b75ecbf8897d36.jpeg",w=n.p+"b0d5aa53cbc8ddc3b0a3.jpg",S=n.p+"1d9d3afb1024ade6e9f1.jpeg",j=n.p+"f83100c2cd7388aa1dd3.jpg",A=n.p+"2074d4ed3ecf85161141.jpg";function k(){const e=document.querySelector("#content");for(;e.hasChildNodes();)e.removeChild(e.firstChild);const t=document.createElement("div");t.classList.add("menu-content");const n=document.createElement("div");n.classList.add("hero-content");const o=document.createElement("h1");o.classList.add("title"),o.textContent="Food Menu",n.appendChild(o),t.appendChild(n);const a=document.createElement("div");a.classList.add("menu");const i=document.createElement("h2");i.classList.add("menu-subtitle"),i.textContent="Best Selling",a.appendChild(i);const d=document.createElement("div");d.classList.add("main-menu"),[{name:"Adobong Baboy",img:y,price:"P150"},{name:"Lechon Belly",img:L,price:"P500"},{name:"Scallops",img:w,price:"P250"},{name:"Deviled Shrimp",img:S,price:"P300"},{name:"Grilled Squid",img:j,price:"P250"},{name:"Sizzling Pork Sisig",img:A,price:"P150"}].forEach((e=>{const t=document.createElement("div");t.classList.add("menu-card");const n=document.createElement("img");n.src=e.img,n.classList.add("menu-image");const o=document.createElement("div");o.classList.add("menu-div");const a=document.createElement("h5");a.classList.add("menu-details");const i=document.createElement("span");i.textContent=e.name;const c=document.createElement("span");c.classList.add("price"),c.textContent=e.price;const r=document.createElement("p");r.classList.add("menu-desc"),r.textContent="Ipsum ipsum clita erat amet dolor justo diam",a.appendChild(i),a.appendChild(c),o.appendChild(a),o.appendChild(r),t.appendChild(n),t.appendChild(o),d.appendChild(t)})),a.appendChild(d),t.appendChild(a),e.appendChild(t)}!function(){const e=document.querySelector("header"),t=document.createElement("nav"),n=document.createElement("div");n.classList.add("brand");const o=document.createElement("img");o.classList.add("logo-img"),o.src=C;const a=document.createElement("h2");a.textContent="Pearl Grill",n.appendChild(o),n.appendChild(a);const i=document.createElement("div");i.classList.add("button-div");const d=document.createElement("button");d.textContent="Home",d.classList.add("home");const c=document.createElement("button");c.textContent="Menu",c.classList.add("menu");const r=document.createElement("button");r.textContent="About",r.classList.add("about"),i.appendChild(d),i.appendChild(c),i.appendChild(r),t.appendChild(n),t.appendChild(i),e.appendChild(t),d.addEventListener("click",E),c.addEventListener("click",k),r.addEventListener("click",v),E();const s=document.createElement("footer"),l=document.createElement("div");l.classList.add("footer-content");const m=document.createElement("div");m.classList.add("footer-content");const p=document.createElement("div");p.classList.add("footer-content");const u=document.createElement("h4");u.classList.add("footer-title"),u.textContent="Company";const h=["About Us","Contact Us","Reservation","Privacy","Terms and Conditions"],f=document.createElement("ul");for(let e=0;e<h.length;e++){const t=document.createElement("li");t.textContent=h[e],f.appendChild(t)}l.appendChild(u),l.appendChild(f);const g=document.createElement("h4");g.classList.add("footer-title"),g.textContent="Contact Us",m.appendChild(g);const b=document.createElement("p");b.classList.add("address"),b.textContent="123 Street, City, Country",m.appendChild(b);const x=document.createElement("p");x.classList.add("contact-no"),x.textContent="+123 456 789",m.appendChild(x);const y=document.createElement("p");y.classList.add("email"),y.textContent="random@email.com",m.appendChild(y),document.createElement("div").classList.add("icons");const L=document.createElement("h4");L.classList.add("footer-title"),L.textContent="Opening",p.appendChild(L);const w=document.createElement("h5");w.classList.add("sub-title"),w.textContent="Monday - Saturday",p.appendChild(w);const S=document.createElement("p");S.classList.add("time"),S.textContent="9AM - 9PM",p.appendChild(S);const j=document.createElement("h5");j.classList.add("sub-title"),j.textContent="Sunday",p.appendChild(j);const A=document.createElement("p");A.classList.add("time"),A.textContent="10AM - 10PM",p.appendChild(A),s.appendChild(l),s.appendChild(m),s.appendChild(p),document.querySelector("body").appendChild(s)}()})();