(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(t,e,n){t.exports={homeContent:"style_homeContent__3Ptcg",topSpace:"style_topSpace__WBHNq",cardButtonStack:"style_cardButtonStack__R89gw",card:"style_card__139XT",cardImage:"style_cardImage__1DsRE",cardTitle:"style_cardTitle__BmasH",button:"style_button__2vVOx",iconButton:"style_iconButton__21YFa",buttonIcon:"style_buttonIcon__2Z7QY",linkIcon:"style_linkIcon__3r3fR",roundedContainer:"style_roundedContainer__2NvUS",buyMeACoffee:"style_buyMeACoffee__3JLHS"}},37:function(t,e){},47:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/FinanceZine.351a35aa.png"},64:function(t,e){},65:function(t,e){},66:function(t,e){},67:function(t,e){},68:function(t,e){},71:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),i=n(19),s=n.n(i),r=n(23),o=n(2);function u(){return Object(a.useEffect)((function(){var t=document.createElement("script"),e=document.getElementById("supportByBMC");t.setAttribute("src","https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"),t.setAttribute("data-name","BMC-Widget"),t.setAttribute("data-cfasync","false"),t.setAttribute("data-id","wuUZsIOSP"),t.setAttribute("data-description","Support me on Buy me a coffee!"),t.setAttribute("data-message","Buying a single coffee for me is 1000 times worth than a Thankyou "),t.setAttribute("data-color","#befed6"),t.setAttribute("data-position","Right"),t.setAttribute("data-x_margin","18"),t.setAttribute("data-y_margin","18"),t.onload=function(){var t=document.createEvent("Event");t.initEvent("DOMContentLoaded",!1,!1),window.dispatchEvent(t)},e.appendChild(t)}),[]),Object(o.jsx)("div",{id:"supportByBMC"})}var d=n(8),l=[{name:"Finance Zine",path:"FinanceZine",file:n.p+"static/media/FinanceZine.59a20d77.pdf",thumbnail:n(47),title:"Early 20's Financial Stuff"}],j=n(31),b=n.n(j),f=n(74),m=n(75),p=n(76),O=n(33),x=n(6),h=n(15),_=n.n(h);var y=function(t){var e,n=Object(x.g)(),c=Object(x.f)(),i=Object(a.useRef)(null),s=Object(a.useState)(null),r=Object(d.a)(s,2),u=r[0],j=r[1],h=Object(a.useState)(null),y=Object(d.a)(h,2),v=y[0],g=y[1];Object(a.useEffect)((function(){return window.addEventListener("resize",b()(N,500)),N(),function(){window.removeEventListener("resize",b()(N,500))}}),[]);var B=n.title,C=null===(e=l.filter((function(t){return t.path===B}))[0])||void 0===e?void 0:e.file,N=function(){i&&i.current&&g(i.current.getBoundingClientRect().width)};return C||c("/"),Object(o.jsx)(f.a,{fluid:!0,children:Object(o.jsxs)(m.a,{children:[Object(o.jsx)(p.a,{xs:1}),Object(o.jsx)(p.a,{xs:10,ref:i,children:Object(o.jsx)(O.a,{file:C,loading:"",className:_.a.pdfPage,onLoadSuccess:function(t){var e=t.numPages;return j(e)},children:Array.apply(null,Array(u)).map((function(t,e){return e+1})).map((function(t){return Object(o.jsx)(O.b,{loading:"",pageNumber:t,width:v},t)}))})}),Object(o.jsx)(p.a,{xs:1})]})})},v=n(32),g=n(80),B=n(81),C=n(79),N=n(77),S=n(78);var w=function(t){var e=Object(x.f)(),n=t.zine;return Object(o.jsxs)(g.a,{className:_.a.card,children:[Object(o.jsx)(g.a.Img,{onClick:function(){e("/zines/".concat(n.path))},variant:"top",src:n.thumbnail.default,className:_.a.cardImage}),Object(o.jsxs)(g.a.Body,{className:_.a.cardBody,children:[Object(o.jsx)(g.a.Title,{className:_.a.cardTitle,children:n.title}),Object(o.jsxs)(B.a,{gap:3,direction:"horizontal",className:_.a.cardButtonStack,children:[Object(o.jsx)("a",{href:n.file,download:"".concat(n.path,".pdf"),children:Object(o.jsx)("div",{className:_.a.roundedContainer,children:Object(o.jsx)(N.a,{className:_.a.buttonIcon,size:20})})}),Object(o.jsx)("div",{className:_.a.roundedContainer,children:Object(o.jsx)(S.a,{className:"".concat(_.a.buttonIcon," ").concat(_.a.linkIcon),size:20,onClick:function(){return console.log("Clicked")}})}),Object(o.jsx)(C.a,{className:_.a.button,onClick:function(){e("/zines/".concat(n.path))},children:"Open"})]})]})]})};var A=function(t){var e=l.length-1;return Object(o.jsx)(o.Fragment,{children:e?Object(o.jsx)(v.a,{children:l.map((function(t,e){return Object(o.jsx)(v.a.Item,{children:Object(o.jsx)(w,{zine:t})},e)}))}):l.map((function(t){return Object(o.jsx)(w,{zine:t},"0")}))})};var I=function(t){return Object(o.jsxs)(f.a,{fluid:!0,className:_.a.homeContent,children:[Object(o.jsx)(m.a,{className:_.a.topSpace}),Object(o.jsxs)(m.a,{children:[Object(o.jsx)(p.a,{xs:1}),Object(o.jsx)(p.a,{xs:10,children:Object(o.jsx)(A,{})}),Object(o.jsx)(p.a,{xs:1})]}),Object(o.jsx)(m.a,{className:_.a.bottomSpace})]})};var k=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)(x.c,{children:[Object(o.jsx)(x.a,{path:"/",element:Object(o.jsx)(I,{})}),Object(o.jsx)(x.a,{path:"/zines/:title",element:Object(o.jsx)(y,{})})]}),Object(o.jsx)(u,{})]})};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(r.a,{basename:"/",children:Object(o.jsx)(k,{})})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.ebaa87ed.chunk.js.map