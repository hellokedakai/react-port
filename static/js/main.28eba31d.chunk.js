(this["webpackJsonpreact-port"]=this["webpackJsonpreact-port"]||[]).push([[0],[,,,,,,,function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/profile.a420f42a.png"},,,,,,,,function(e,t,c){},,function(e,t,c){var i={"./1.png":18,"./2.png":19,"./3.png":20,"./4.png":21,"./5.png":22,"./6.png":23,"./profile.png":7};function n(e){var t=a(e);return c(t)}function a(e){if(!c.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=a,e.exports=n,n.id=17},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/1.5447a21e.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/2.9d1234dc.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/3.082a8453.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/4.edb853a0.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/5.48da32ed.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/6.c9ffdee5.png"},function(e,t,c){"use strict";c.r(t);var i=c(2),n=c.n(i),a=c(10),r=c.n(a),s=(c(15),c(3)),l=c(1),o=[{name:"About Me",description:"About Me"},{name:"Portfolio",description:"Portfolio"},{name:"Contact",description:"Contact"},{name:"Resume",description:"Resume"}];var d=function(e){var t=e.categorySelected,c=e.setCategorySelected;return Object(l.jsx)("nav",{className:"navbar align-items-center",children:Object(l.jsx)("ul",{className:"container-fluid navbar-text",children:o.map((function(e){return Object(l.jsx)("li",{className:t===e.name,children:Object(l.jsx)("span",{className:"m-1",onClick:function(){return c(e.name)},children:e.name})},e.name)}))})})};var j=function(e){var t=e.categorySelected,c=e.setCategorySelected;return Object(l.jsxs)("header",{className:"flex-row align-items-center",children:[Object(l.jsx)("h1",{children:"hellokedakai"}),Object(l.jsx)(d,{categorySelected:t,setCategorySelected:c})]})},u=c(5);var h=function(){return Object(l.jsxs)("footer",{children:[Object(l.jsx)("a",{href:"https://github.com/hellokedakai",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(u.a,{})}),Object(l.jsx)("a",{href:"https://www.linkedin.com/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(u.b,{})}),Object(l.jsx)("a",{href:"https://stackoverflow.com/users/14993732/hellokedakai?tab=profile",target:"_blank",rel:"noreferrer",children:Object(l.jsx)(u.c,{})})]})},b=c(7);var p=function(){return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{id:"about",children:"About Me"}),Object(l.jsx)("img",{src:b.default,className:"my-2",style:{width:"10%"},alt:"profile photo"}),Object(l.jsx)("p",{children:"Full Stack Web Developer with a strong professional background, highly skilled in APIs, MySQL, React, and responsive design."})]})},m=c(8),x=function(e){var t=e.name,n=Object(i.useState)([{id:1,altText:"app for animal friendships",title:"Pawpals",deployed:"https://noemiegrau.github.io/pawpals/",github:"https://github.com/Noemiegrau/pawpals"},{id:2,altText:"app for finding hiking trails in new mexico",title:"Trail Mix",deployed:"https://radiant-wildwood-38672.herokuapp.com/",github:"https://github.com/RayTakemura/Hiking-Trail-Group-Project"},{id:3,altText:"app for talking about all things Chelcie",title:"Chelcie Fans",deployed:"https://secret-hollows-41476.herokuapp.com/",github:"https://github.com/simmonsW/chelcie-fans"},{id:4,altText:"app for taking notes",title:"Notetaker",deployed:"https://blooming-basin-16197.herokuapp.com/",github:"https://github.com/hellokedakai/notetaker"},{id:5,altText:"app for testing your coding knowledge",title:"Code Quiz",deployed:"https://hellokedakai.github.io/code-quiz/",github:"https://github.com/hellokedakai/code-quiz"},{id:6,altText:"app for checking weather forecast around the world",title:"Weather Forecast",deployed:"https://hellokedakai.github.io/weather-forecast/",github:"https://github.com/hellokedakai/weather-forecast"}]),a=Object(s.a)(n,1)[0].filter((function(e){return e.name===t}));return Object(l.jsx)("section",{className:"container row",children:a.map((function(e){var t=e.id,i=e.altText,n=e.title,a=e.deployed,r=e.github;return Object(l.jsxs)("div",{className:"col-4 flex-row container-fluid align-text-center",children:[Object(l.jsx)("img",{src:c(17)("./".concat(t,".png")).default,alt:i}),Object(l.jsxs)("div",{className:"flex-row",children:[Object(l.jsx)("h4",{className:"align-text-center",children:n}),Object(l.jsx)("a",{href:a,children:Object(l.jsx)(m.b,{})}),Object(l.jsx)("a",{href:r,children:Object(l.jsx)(m.a,{})})]})]})}))})};var f=function(){return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{children:"Portfolio"}),Object(l.jsx)(x,{})]})},O=c(4),g=c(9);var k=function(){var e=Object(i.useState)({name:"",email:"",message:""}),t=Object(s.a)(e,2),c=t[0],n=t[1],a=c.name,r=c.email,o=c.message,d=Object(i.useState)(""),j=Object(s.a)(d,2),u=j[0],h=j[1];function b(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),h(t?"":"Your email is invalid.")}else e.target.value.length?h(""):h("".concat(e.target.name," is required."));u||n(Object(g.a)(Object(g.a)({},c),{},Object(O.a)({},e.target.name,e.target.value)))}return Object(l.jsxs)("section",{className:"container-fluid",children:[Object(l.jsx)("h1",{"data-testid":"h1tag",children:"Contact Me"}),Object(l.jsxs)("form",{id:"contact-form",className:"container-fluid",onSubmit:function(e){e.preventDefault(),console.log(c)},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",defaultValue:a,onBlur:b,name:"name"})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(l.jsx)("input",{type:"email",defaultValue:r,name:"email",onBlur:b})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",defaultValue:o,onBlur:b,rows:"5"})]})]}),u&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:u})}),Object(l.jsx)("button",{"data-testid":"button",type:"submit",className:"",children:"Submit"})]})};var v=function(){return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{children:"Resume"}),Object(l.jsxs)("p",{children:["Download my ",Object(l.jsx)("a",{href:"../../assets/resume/resume.pdf",download:!0,children:"resume!"})]}),Object(l.jsx)("h2",{children:"Front-end Proficiencies"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"HTML"}),Object(l.jsx)("li",{children:"CSS"}),Object(l.jsx)("li",{children:"JavaScript"}),Object(l.jsx)("li",{children:"jQuery"}),Object(l.jsx)("li",{children:"responsive design"}),Object(l.jsx)("li",{children:"React"}),Object(l.jsx)("li",{children:"Bootstrap"})]}),Object(l.jsx)("h2",{children:"Back-end Proficiencies"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"APIs"}),Object(l.jsx)("li",{children:"Node"}),Object(l.jsx)("li",{children:"Express"}),Object(l.jsx)("li",{children:"MySQL"}),Object(l.jsx)("li",{children:"MongoDB"}),Object(l.jsx)("li",{children:"NoSQL"})]})]})};var y=function(){var e=Object(i.useState)(),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("head",{children:Object(l.jsx)("link",{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",crossorigin:"anonymous"})}),Object(l.jsx)(j,{categorySelected:c,setCategorySelected:n}),Object(l.jsx)("main",{children:function(){switch(c){case"About Me":return Object(l.jsx)(p,{});case"Portfolio":return Object(l.jsx)(f,{});case"Contact":return Object(l.jsx)(k,{});case"Resume":return Object(l.jsx)(v,{});default:return Object(l.jsx)(p,{})}}()}),Object(l.jsx)("div",{children:Object(l.jsx)(h,{})})]})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,25)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,r=t.getTTFB;c(e),i(e),n(e),a(e),r(e)}))};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root")),w()}],[[24,1,2]]]);
//# sourceMappingURL=main.28eba31d.chunk.js.map