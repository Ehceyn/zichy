(this.webpackJsonpmyreactapp=this.webpackJsonpmyreactapp||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},146:function(e,t,a){},147:function(e,t){},148:function(e,t,a){e.exports=a.p+"static/media/butterfly.4fef7860.jpg"},149:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(8),o=a.n(c),r=(a(102),Object(n.createContext)()),i=function(e){return l.a.createElement(r.Provider,{value:Object(n.useReducer)(e.reducer,e.initialState)},e.children)},s=function(){return Object(n.useContext)(r)},m=a(16),u=a(21),d=((new Date).getSeconds(),Math.floor(Math.random(27)*Math.pow(1555,5)),{basket:localStorage.getItem("favorites")?JSON.parse(localStorage.getItem("favorites")):[]});var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(u.a)(Object(u.a)({},e),{},{basket:[].concat(Object(m.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var a=Object(m.a)(e.basket),n=e.basket.findIndex((function(e){return e.id===t.id}));return n>=0?a.splice(n,1):console.warn("Can't remove (id: ".concat(t.id,") as it is not existing")),Object(u.a)(Object(u.a)({},e),{},{basket:a});default:return e}},E=(a(103),a(20)),f=a(11),g=a(56),b=a(6),h=a(13);var p=function(e){return l.a.createElement("input",{type:"button",value:e.value,className:e.className})},N=a(180);var y=a(184),k=a(185),O=a(30);var C=function(){var e={backgroundColor:"transparent",color:"white",borderBottom:"1px solid rgba(255, 255, 255, 0.616)"},t={backgroundColor:"white",color:"black",boxShadow:"0 1px 2px 0 rgba(0, 0, 0, 0.1)"},a={backgroundColor:"white",color:"black"},c=s(),o=Object(b.a)(c,1)[0].basket,r=Object(n.useState)(!1),i=Object(b.a)(r,2),m=i[0],u=i[1],d=Object(n.useState)(e),v=Object(b.a)(d,2),f=v[0],g=v[1];function C(){window.scrollY>=70?g(t):g(e)}function w(){u(!m),m?C():g(a),console.log(m)}return Object(n.useEffect)((function(){return["load","scroll","resize","change"].forEach((function(e){return window.addEventListener(e,C)})),function(){return["load","scroll","resize","change"].forEach((function(e){return window.removeEventListener(e,C)}))}}),[]),l.a.createElement("div",null,l.a.createElement("div",{className:"hamburger"},l.a.createElement("div",{className:"ham-logo-div",style:f},l.a.createElement(E.b,{to:"/myfav"},l.a.createElement("div",{style:{position:"relative"}},l.a.createElement(N.a,{className:"toggleBtn",style:{color:"".concat(window.scrollY>=70?"black":"white")}}),l.a.createElement("p",{style:{backgroundColor:"".concat(window.scrollY>=70?"white":"black"),color:"".concat(window.scrollY>=70?"black":"white"),display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.4em",position:"absolute",height:"14px",width:"14px",borderRadius:"50%",left:"14px",bottom:"5px",transition:"all 0.3s ease-in"}},null===o||void 0===o?void 0:o.length))),l.a.createElement(h.Link,{activeClass:"active",to:"home",spy:!0,smooth:!0,offset:0,duration:500},l.a.createElement("div",{className:"ham-logo"},"ZICHYgraphs")),l.a.createElement("div",{onClick:w,style:{transition:"all 0.3s linear"}},m?l.a.createElement(y.a,{className:"toggleBtn"}):l.a.createElement(k.a,{className:"toggleBtn"})," ")),l.a.createElement("div",{className:"ham-div",style:m?{height:"92vh"}:{height:"0px"}},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(h.Link,{activeClass:"active",to:"home",spy:!0,smooth:!0,offset:-150,duration:0},l.a.createElement("p",{className:"ham-links",href:"#home",onClick:w},"home"))),l.a.createElement("li",null,l.a.createElement(h.Link,{activeClass:"active",to:"works",spy:!0,smooth:!0,offset:-10,duration:0},l.a.createElement("p",{className:"ham-links",href:"#works",onClick:w},"works"))),l.a.createElement("li",null,l.a.createElement(h.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-20,duration:0},l.a.createElement("p",{className:"ham-links",href:"#about",onClick:w},"about"))),l.a.createElement("li",null,l.a.createElement(h.Link,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-30,duration:0},l.a.createElement("p",{className:"ham-links",href:"#contact",onClick:w},"contact"))),l.a.createElement("li",null,l.a.createElement(p,{value:"Hire me",className:"btn btn-for-general btn-with-bg"}))),l.a.createElement("article",null,l.a.createElement(O.SocialIcon,{url:"https://facebook.com/chimeruzee.chidum",bgColor:"#cca",fgColor:"00ACEF",className:"social-icon"}),l.a.createElement(O.SocialIcon,{url:"https://twitter.com/chimeruzee1",bgColor:"#cca",fgColor:"00ACEF",className:"social-icon"}),l.a.createElement(O.SocialIcon,{url:"https://instagram.com/chimeruzee.chidum",bgColor:"#cca",fgColor:"00ACEF",className:"social-icon"})))),");")},w=a(40),j=a.n(w);var S=function(e){var t=s(),a=Object(b.a)(t,1)[0].basket;return Object(n.useEffect)((function(){localStorage.setItem("favorites",JSON.stringify(a))}),[a]),l.a.createElement("div",{className:e.navContainer},l.a.createElement("div",{className:"logo-div"},e.navLogo),l.a.createElement("div",{className:"nav-links-div"},l.a.createElement("ul",{className:"nav-links"},l.a.createElement("li",null,l.a.createElement(h.Link,{activeClass:"active",to:"home",spy:!0,smooth:!0,offset:-150,duration:500},l.a.createElement("p",{className:"link",href:"#home"},"home"))),l.a.createElement("li",null,l.a.createElement(h.Link,{activeClass:"active",to:"works",spy:!0,smooth:!0,offset:-30,duration:500},l.a.createElement("p",{className:"link",href:"#works"},"works"))),l.a.createElement("li",null,l.a.createElement(h.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:-30,duration:500},l.a.createElement("p",{className:"link",href:"#about"},"about"))),l.a.createElement("li",null,l.a.createElement(h.Link,{activeClass:"active",to:"contact",spy:!0,smooth:!0,offset:-30,duration:500},l.a.createElement("p",{className:"link",href:"#contact"},"contact"))),l.a.createElement("li",null,l.a.createElement(E.b,{to:"/myfav"},l.a.createElement("p",{className:"link",href:"#my fav"},"my favorites",l.a.createElement("div",{style:{position:"relative"}},l.a.createElement(N.a,{style:{color:"red",fontSize:"200%",marginLeft:"10px"}}),l.a.createElement("p",{className:"favCount"},null===a||void 0===a?void 0:a.length))))),l.a.createElement("li",null,l.a.createElement(p,{value:"Hire me",className:"btn btn-for-general btn-with-bg"})))))};var x=function(e){var t=Object(n.useState)(l.a.createElement(S,{navLogo:l.a.createElement("img",{src:j.a,alt:"",className:"logo",draggable:"false"}),navContainer:"navbar"})),a=Object(b.a)(t,2),c=a[0],o=a[1];function r(){window.scrollY>140?window.matchMedia("(max-width:800px)").matches?o(l.a.createElement(C,null)):o(l.a.createElement(S,{navLogo:"ZICHYgraghs",navContainer:"navbarfixed"})):window.matchMedia("(max-width:800px)").matches?o(l.a.createElement(C,null)):o(l.a.createElement(S,{navLogo:l.a.createElement("img",{src:j.a,alt:"",className:"logo",draggable:"false"}),navContainer:"navbar"}))}return Object(n.useEffect)((function(){return["load","scroll","resize","change"].forEach((function(e){return window.addEventListener(e,r)})),function(){return["load","scroll","resize","change"].forEach((function(e){return window.removeEventListener(e,r)}))}}),[]),l.a.createElement("header",null,c,l.a.createElement("a",{name:"home"},l.a.createElement("div",{className:"intro"},l.a.createElement("p",null,"Bring your ",l.a.createElement("span",{className:"intro-span"},"dreams")," into reality. I put my best into every work."),l.a.createElement(p,{value:"Hire me",className:"btn btn-for-header btn-with-bg"}))))},F=[{id:1,category:"All"},{id:2,category:"Logos"},{id:3,category:"Business cards"},{id:4,category:"Flyers"},{id:5,category:"Posters"}];var I=function(e){return l.a.createElement("div",{className:"title ".concat(e.divClassName),name:e.divNameAttr,title:e.title,draggable:"false"},l.a.createElement("div",null,l.a.createElement("p",{className:"section-title"},e.pName),l.a.createElement("div",{className:"underline"},l.a.createElement("div",null))))},B=a(66),L=a.n(B);var R=function(){return l.a.createElement("div",{className:"about-div"},l.a.createElement("article",{className:"about-paragraph-div"},l.a.createElement("p",{className:"about-paragraph"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloribus harum eos numquam perferendis facere necessitatibus amet, officia tempore dolorem dolorum aliquid nam odit placeat voluptatem iusto nostrum aliquam totam! ",l.a.createElement("br",null),l.a.createElement("br",null),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloribus harum eos numquam perferendis facere necessitatibus amet, officia tempore dolorem dolorum aliquid nam odit placeat voluptatem iusto nostrum aliquam totam!"),l.a.createElement("img",{src:L.a,alt:"myPhoto",className:"my-photo-smscrn "})),l.a.createElement("div",{className:"about photo-div"},l.a.createElement("img",{src:L.a,alt:"myPhoto",className:"my-photo "})))},T=a(55),A=(a(74),a(5)),_=a(187),M=a(192),P=a(186);var z=function(e){var t=s(),a=Object(b.a)(t,2);Object(g.a)(a[0]);var n=a[1];return l.a.createElement("div",{className:"contactFav-div"},l.a.createElement("div",{className:"cancel-contactFav",onClick:function(){n({type:"REMOVE_FROM_BASKET",id:e.id}),e.onRemoveFav(e.id)}},l.a.createElement(P.a,{style:{width:"15px",height:"15px",color:"grey"}})),l.a.createElement("img",{src:e.img,alt:"",className:"contactFav-img"}))},D=a(90),J=a(190),Y=a(188),H=a(189),W=Object(A.a)({root:{"& id.Mui-focused":{borderBottomColor:"#a2a1a3"},"& label.Mui-focused":{color:"#0b993a"},"& .MuiInput-underline:after":{borderBottomColor:"#0b993a"}}})(M.a),q=Object(_.a)((function(e){return{root:{display:"flex",justifyContent:"space-between",flexWrap:"wrap",margin:e.spacing(3)},textField:{marginTop:e.spacing(1),marginLeft:e.spacing(1),marginRight:e.spacing(1),justifySelf:"center",width:"30ch"}}}));function V(e){var t=Object(n.useRef)(),a=q(),c=s(),o=Object(b.a)(c,1)[0].basket,r=Object(n.useState)({fullname:"",title:"",email:"",message:"",phone:""}),i=Object(b.a)(r,2),d=i[0],v=i[1],E=Object(n.useState)({icon:"",title:"",text:""}),f=Object(b.a)(E,2),g=f[0],h=f[1],N=Object(n.useState)({color:"black",borderBottomColor:"#0b993a"}),y=Object(b.a)(N,2),k=y[0],C=y[1],w=Object(n.useState)("none"),j=Object(b.a)(w,2),S=j[0],x=j[1],F=Object(n.useState)([]),I=Object(b.a)(F,2),B=I[0],L=I[1],R=JSON.parse(localStorage.getItem("favs")||"0");Object(n.useEffect)((function(){0!==R&&L(Object(m.a)(R))}),[]);var A=function(e){var t=B,a=!0;t.forEach((function(n,l){n===e&&(t.splice(l,1),a=!1)})),a&&t.push(e),L(Object(m.a)(t)),localStorage.setItem("favs",JSON.stringify(B)),console.log(B)};function _(e){var t=e.target,a=t.name,n=t.value;v((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(T.a)({},a,n))})),console.log(d)}Object(n.useEffect)((function(){localStorage.setItem("favorites",JSON.stringify(o))}),[o]);return l.a.createElement("div",{className:e.containerClass},l.a.createElement("div",{style:{display:"".concat(S)},className:"messageContainer"},l.a.createElement("div",{className:"messageBox"},l.a.createElement("div",{className:"messageContent"},l.a.createElement("p",null,g.icon),l.a.createElement("p",{style:{marginTop:"20px",fontWeight:"bold",fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}},g.title),l.a.createElement("p",{style:{marginTop:"10px",fontFamily:"Verdana, Geneva, Tahoma, sans-serif"}},g.text),l.a.createElement("div",{onClick:function(){return x("none")}},l.a.createElement("button",{className:"messageBtn"},"OK"))))),l.a.createElement("div",{className:e.closeClass,onClick:e.onClose},e.close),l.a.createElement("div",{className:e.container2},l.a.createElement("div",{className:"contact-div"},l.a.createElement("div",{className:"contact-bg-para"},l.a.createElement("p",null,"ZICHYgraphs"),l.a.createElement("article",null,l.a.createElement(O.SocialIcon,{url:"https://facebook.com/chimeruzee.chidum",bgColor:"blue",fgColor:"white",className:"social-icon"}),l.a.createElement(O.SocialIcon,{url:"https://twitter.com/chimeruzee1",bgColor:"#00ACEF",fgColor:"white",className:"social-icon"}),l.a.createElement(O.SocialIcon,{url:"https://instagram.com/chimeruzee.chidum",bgColor:"red",fgColor:"white",className:"social-icon"})))),l.a.createElement("div",{className:"contact-page"},l.a.createElement("form",{ref:t,className:a.root,noValidate:!0,autoComplete:"off"},l.a.createElement(J.a,{id:"standard-basic",label:"I will like to get something like this/these",fullWidth:!0,style:{margin:8,display:"flex"},className:"contactFav"},o.map((function(e,t){return l.a.createElement(z,{key:e.id,id:e.id,img:e.img,onRemoveFav:A})}))),l.a.createElement(W,{required:!0,id:"standard-basic",label:"Fullname",className:a.textField,name:"fullname",value:d.fullname,onChange:_,contentEditable:!1,style:{color:"".concat(k.color),borderBottomColor:"".concat(k.borderBottomColor)}}),l.a.createElement(W,{id:"standard-basic",label:"Title",className:a.textField,value:d.title,onChange:_,name:"title"}),l.a.createElement(W,{required:!0,id:"standard-basic",label:"E-mail",className:a.textField,value:d.email,onChange:_,name:"email",style:{color:"".concat(k.color),borderBottomColor:"".concat(k.borderBottomColor)},contentEditable:!1}),l.a.createElement(W,{id:"standard-basic",label:"Phone no.",className:a.textField,value:d.phone,onChange:_,name:"phone"}),l.a.createElement(W,{required:!0,multiline:!0,rows:4,id:"standard-basic",label:"Message",fullWidth:!0,value:d.message,onChange:_,name:"message",style:{color:"".concat(k.color),margin:8,borderBottomColor:"".concat(k.borderBottomColor)},contentEditable:!1}),l.a.createElement("div",{onClick:function(e){if(e.preventDefault(),!(d.fullname.length>=2&&d.email.length>=2&&d.email.includes("@")&&d.message.length>=5))return C({color:"red",borderBottomColor:"red"}),v({fullname:"Please input your fullname",title:"",email:"Please input a valid e-mail",message:"Please write your message",phone:""}),!1;D.a.sendForm("service_yp4s9fl","template_rhblcj9",t.current,"user_45P0sivHcc6PnCNY5cdtH").then((function(e){console.log(e.text),h({icon:l.a.createElement(Y.a,{style:{width:"70px",height:"70px",color:"#0b993a"}}),title:"Message Sent Successfully",text:"Thanks for contacting me.  "}),v({fullname:"",title:"",email:"",message:"",phone:""}),x("flex")}),(function(e){console.log(e.text),h({icon:l.a.createElement(H.a,{style:{width:"70px",height:"70px",color:"red"}}),title:"Ooops, something went wrong",text:e.text?e.text:"Check your internet connection"}),x("flex")})),t.current.reset()}},l.a.createElement(p,{className:"btn btn-for-general btn-with-bg",value:"Send"}))))))}var K=function(){return l.a.createElement("footer",null,l.a.createElement("div",null,l.a.createElement("p",null,"Zichygraphs"),l.a.createElement("p",null,"\xa9 ",(new Date).getFullYear())))},Z=a(193);var G=function(){return l.a.createElement("div",{className:"see-more-btn"},l.a.createElement(Z.a,{style:{fontWeight:400,textTransform:"lowercase",fontSize:"1rem"}},"See more..."))};var U=function(e){return l.a.createElement("li",null,l.a.createElement("button",{onClick:e.onFilterWork,value:e.category},e.category))},Q=a(89),X=a.n(Q),$=a(191),ee=a(88),te=a.n(ee);var ae=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!0),r=Object(b.a)(o,2),i=r[0],u=r[1],d=Object(n.useState)(null),v=Object(b.a)(d,2),E=(v[0],v[1]),f=Object(n.useState)([]),h=Object(b.a)(f,2),p=h[0],y=h[1],k=JSON.parse(localStorage.getItem("favs")||"0");function O(e){console.log(e.target.value),e.target.value,c(),console.log(a)}Object(n.useEffect)((function(){0!==k&&y(Object(m.a)(k))}),[]),Object(n.useEffect)((function(){te.a.get("http://localhost:5000/api/works").then((function(e){c(e.data),u(!1),console.log(e.data)})).catch((function(e){c(a),E(e),u(!1)}))}),[]),console.log(a);var C=function(e){var t=p,a=!0;t.forEach((function(n,l){n===e._id&&(t.splice(l,1),a=!1)})),a&&t.push(e._id),y(Object(m.a)(t)),localStorage.setItem("favs",JSON.stringify(p)),console.log(p)},w=s(),j=Object(b.a)(w,2);Object(g.a)(j[0]);var S=j[1];return l.a.createElement("div",null,l.a.createElement(x,{id:"home"}),l.a.createElement("section",{className:"works",id:"works"},l.a.createElement(I,{divClassName:"section-title-div left-section-title",divNameAttr:"works",title:"works",pName:"WORKS"}),l.a.createElement("div",{className:"filter"},l.a.createElement("ul",{className:"filter-btn"},F.map((function(e,t){return l.a.createElement(U,{key:e.id,category:e.category,onFilterWork:O})})))),l.a.createElement("div",{className:"works-gallery"},i?l.a.createElement("p",null,"Loading..."):a.map((function(e,t){return l.a.createElement("div",{className:"works-div",key:e._id},l.a.createElement("div",null,l.a.createElement("img",{src:e.img,alt:"",className:"works-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement($.a,{titleAccess:"VIEW PROJECT"}))),l.a.createElement("article",{className:"work-info"},l.a.createElement("div",{className:"category-div"},l.a.createElement("p",null,e.category),l.a.createElement("div",null)),p.includes(e._id)?l.a.createElement("div",{className:"fav-btn btns",onClick:function(){S({type:"REMOVE_FROM_BASKET",id:e._id}),C(e)}},l.a.createElement(N.a,null)):l.a.createElement("div",{className:"fav-btn btns",onClick:function(){var t;S({type:"ADD_TO_BASKET",item:{id:(t=e)._id,img:t.img,category:t.category}}),C(e)}},l.a.createElement(X.a,null))))})))),l.a.createElement("section",null,l.a.createElement(G,null)),l.a.createElement("section",{className:"about",id:"about"},l.a.createElement(I,{divClassName:"about-section-title-div about-section-title",divNameAttr:"about",title:"about",pName:"ABOUT"}),l.a.createElement(R,null)),l.a.createElement("section",{className:"contact",id:"contact"},l.a.createElement(I,{divClassName:"section-title-div left-section-title",divNameAttr:"contact",title:"contact",pName:"CONTACT"}),l.a.createElement(V,{containerClass:"contact-container",container2:"contact-container2",closeClass:"contact-close-btn"})),l.a.createElement("section",null,l.a.createElement(K,null)))};a(146),a(147);var ne=function(e){var t=s(),a=Object(b.a)(t,2),c=a[0].basket,o=a[1];Object(n.useEffect)((function(){localStorage.setItem("favorites",JSON.stringify(c))}),[c]);var r=Object(n.useState)([]),i=Object(b.a)(r,2),u=(i[0],i[1]),d=JSON.parse(localStorage.getItem("favs")||"0");return Object(n.useEffect)((function(){0!==d&&u(Object(m.a)(d))}),[]),l.a.createElement("div",{className:"works-div"},l.a.createElement("div",{onClick:function(){e.viewThisProject(e.id)}},l.a.createElement("img",{src:e.img,alt:"",className:"works-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement($.a,{titleAccess:"VIEW PROJECT"}))),l.a.createElement("article",{className:"work-info"},l.a.createElement("div",{className:"category-div"},l.a.createElement("p",null,e.category),l.a.createElement("div",null)),l.a.createElement("div",{className:"checkoutFavs-remove-btn"},l.a.createElement("button",{onClick:function(){o({type:"REMOVE_FROM_BASKET",id:e.id}),e.onRemoveFav(e.id)}},"Remove"))))};var le=function(e){var t=s(),a=Object(b.a)(t,1)[0].basket;return console.log(a),console.log(E.b),console.log(h.Link),l.a.createElement("div",null,l.a.createElement("div",{className:"navbarfixed"},l.a.createElement("div",{className:"logo-div"},"ZICHYgraphs"),l.a.createElement("ul",{className:"nav-links nav-links-fav"},l.a.createElement(E.b,{to:"/"},l.a.createElement("li",null,l.a.createElement("p",{className:"link",href:"#home"},"home"))),l.a.createElement(E.b,{to:"/myfav"},l.a.createElement("li",null,l.a.createElement("p",{className:"link",href:"#my fav"},"my favorites",l.a.createElement("div",{style:{position:"relative"}},l.a.createElement(N.a,{style:{color:"red",fontSize:"200%",marginLeft:"10px"}}),l.a.createElement("p",{className:"favCount"},null===a||void 0===a?void 0:a.length))))),l.a.createElement("li",{onClick:e.onDisplayContactDiv},l.a.createElement(p,{value:"Hire me",className:"btn btn-for-general btn-with-bg"})))))};a(148);var ce=function(e){var t=s(),a=Object(b.a)(t,1)[0].basket,c=Object(n.useState)(),o=Object(b.a)(c,2),r=o[0],i=o[1],u=Object(n.useState)([]),d=Object(b.a)(u,2),v=d[0],E=d[1],f=JSON.parse(localStorage.getItem("favs")||"0"),g=Object(n.useState)({navPosition:"static",navBorder:"1px solid lightgray",navPaddingRight:"88px"}),h=Object(b.a)(g,2),p=(h[0],h[1]);function N(){window.scrollY>10?p({navPosition:"fixed",navBorder:"none",navPaddingRight:"70px"}):p({navPosition:"static",navBorder:"1px solid lightgray",navPaddingRight:"88px"})}Object(n.useEffect)((function(){return["scroll","resize","load"].forEach((function(e){return window.addEventListener(e,N)})),function(){return["scroll","resize","load"].forEach((function(e){return window.removeEventListener(e,N)}))}}),[]),Object(n.useEffect)((function(){0!==f&&E(Object(m.a)(f))}),[]);var y=function(e){var t=v,a=!0;t.forEach((function(n,l){n===e&&(t.splice(l,1),a=!1)})),a&&t.push(e),E(Object(m.a)(t)),localStorage.setItem("favs",JSON.stringify(v)),console.log(v)};function k(){i()}return l.a.createElement(l.a.Fragment,null,l.a.createElement(le,{onDisplayContactDiv:function(){i(l.a.createElement(V,{containerClass:"checkout-contactDiv",container2:"checkout-contactDiv2",close:"Close",closeClass:"checkout-contact-close-btn ",onClose:k}))}}),l.a.createElement("div",{className:"main-contactDiv-body"},r," "),l.a.createElement("div",{className:"checkout"},l.a.createElement("div",{className:"checkout-left"},l.a.createElement("div",{className:"checkout-ad"},l.a.createElement("p",null,"My Favorites")),0===(null===a||void 0===a?void 0:a.length)?l.a.createElement("div",null,l.a.createElement("h2",null,"Your Favorites Section Is Empty"),l.a.createElement("p",null,"You have no favorite. To add one or more favorite work(s) simply click on the 'heart' icon next to the item"," ")):l.a.createElement("div",null,l.a.createElement("h2",{className:"checkout-title"},"My Favorite Designs"),l.a.createElement("div",{className:"works"},a.map((function(e,t){return l.a.createElement(ne,{key:e.id,id:e.id,img:e.img,category:e.category,onRemoveFav:y})})))))))};var oe=function(){return l.a.createElement(E.a,null,l.a.createElement("div",null,l.a.createElement(f.c,null,l.a.createElement(f.a,{path:"/myfav"},l.a.createElement(ce,null),l.a.createElement(K,null)),l.a.createElement(f.a,{path:"/contact"},l.a.createElement(ae,null)),l.a.createElement(f.a,{path:"/"},l.a.createElement(ae,null)))))};o.a.render(l.a.createElement(l.a.Fragment,null,l.a.createElement(i,{initialState:d,reducer:v},l.a.createElement(oe,null))),document.getElementById("root"))},40:function(e,t,a){e.exports=a.p+"static/media/zichygraphs.1f51213c.png"},66:function(e,t,a){e.exports=a.p+"static/media/myphoto.527d3dc9.png"},74:function(e,t,a){},97:function(e,t,a){e.exports=a(149)}},[[97,1,2]]]);
//# sourceMappingURL=main.4dda8641.chunk.js.map