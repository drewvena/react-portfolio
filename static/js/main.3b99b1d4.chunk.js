(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(7),r=a.n(c),i=(a(6),a(2)),o=a.p+"static/media/headshot.883c3565.jpg",l=a(0);var m=function(){return Object(l.jsxs)("section",{id:"about",children:[Object(l.jsx)("img",{className:"drew",src:o,alt:"headshot",width:"25%"}),Object(l.jsx)("div",{className:"about-text",children:Object(l.jsx)("p",{children:"My name is Drew Vena, I am a full stack web developer who learned the tricks of the trade through a bootcamp by The University of Texas."})})]})};var d=function(e){return Object(l.jsx)("nav",{className:"header",children:Object(l.jsx)("ul",{className:"links",children:[{name:"About Me",id:"#about-me"},{name:"Portfolio",id:"#portfolio"},{name:"Contact",id:"#contact"},{name:"Resume",id:"#resume"}].map((function(t){return Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"linkers",href:t.id,id:t.id,onClick:function(){return e.setPage(t.name)},children:t.name})})}))})})},j=a.p+"static/media/now-playing.a1f03526.png";var u=function(){var e=[{name:"Now Playing",img:j,description:"Now Playing is a social media application where users post music they are listening to and other users can interact, comment and like each others posts!",tech:"Handlebars, Express, Sequelize"},{name:"Cinequiz",img:"cinequiz",description:"The Movie Game that uses a third party api to build a movie trivia game for the user to enjoy! All answers are responded to using a gif and highscores are logged for everyone, lets see who is best!",tech:"HTML, CSS, JS, OMDb API, GIPHY API"}];return Object(l.jsx)("section",{id:"projects",children:e.map((function(e){return Object(l.jsxs)("div",{className:"Project",children:[Object(l.jsx)("img",{className:"port-img",src:e.img,alt:"".concat(e.name)}),Object(l.jsx)("h3",{className:"proj-d",children:e.name}),Object(l.jsx)("p",{className:"proj-d",children:e.description}),Object(l.jsx)("p",{className:"proj-d",children:e.tech})]})}))})},b=a(3),h=a(5);var p=function(){var e=Object(s.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)({name:"",email:"",message:""}),r=Object(i.a)(c,2),o=r[0],m=r[1],d=o.name,j=o.email,u=o.message;function p(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),n(t?"":"Your e-mail is invalid.")}else e.target.value.length?n(""):n("".concat(e.target.name," is required."));a||m(Object(h.a)(Object(h.a)({},o),{},Object(b.a)({},e.target.name,e.target.value))),console.log("errorMessage",a)}return Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("form",{className:"contact-forms",action:"mailto:drewvena1@gmail.com",target:"_blank",method:"POST",enctype:"multipart/form-data",children:[Object(l.jsxs)("div",{className:"contact-box",children:[Object(l.jsx)("label",{htmlfor:"name",children:"Your Name"}),Object(l.jsx)("input",{type:"text",id:"name",name:"name",defaultValue:d,onBlur:p})]}),Object(l.jsxs)("div",{className:"contact-box",children:[Object(l.jsx)("label",{htmlfor:"email",children:"Your Email"}),Object(l.jsx)("input",{type:"text",id:"email",name:"email",defaultValue:j,onBlur:p})]}),Object(l.jsxs)("div",{class:"contact-box",children:[Object(l.jsx)("label",{class:"textarea-label",htmlFor:"Message",children:"Message"}),Object(l.jsx)("br",{}),Object(l.jsx)("textarea",{name:"Message",defaultValue:u,onBlur:p,rows:"4"})]}),a&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:a})}),Object(l.jsx)("button",{className:"button",type:"submit",children:"Email Drew"})]})})};var g=function(){var e=Object(s.useState)("About"),t=Object(i.a)(e,2),a=t[0],n=t[1];function c(){switch(a){case"Portfolio":return Object(l.jsx)(u,{});case"Contact":return Object(l.jsx)(p,{});case"Resume":return"";case"About Me":default:return Object(l.jsx)(m,{})}}return Object(l.jsxs)("div",{className:"mainpage",children:[Object(l.jsx)(d,{page:a,setPage:n,renderPage:c}),c()]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){}},[[13,1,2]]]);
//# sourceMappingURL=main.3b99b1d4.chunk.js.map