(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,a){e.exports=a(67)},33:function(e,t,a){},34:function(e,t,a){},52:function(e,t,a){var n={"./01.jpg":53,"./DIAMS.jpg":54,"./Laetitia.jpg":55,"./NEO PAGE.jpg":56,"./Planche1.jpg":57,"./Zaza.jpg":58,"./bloccartespostalesB.jpg":59,"./manon-00pp09.jpg":60,"./planche 2.jpg":61};function c(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=o,e.exports=c,c.id=52},53:function(e,t,a){e.exports=a.p+"static/media/01.b2f68dae.jpg"},54:function(e,t,a){e.exports=a.p+"static/media/DIAMS.5aea495c.jpg"},55:function(e,t,a){e.exports=a.p+"static/media/Laetitia.e936691d.jpg"},56:function(e,t,a){e.exports=a.p+"static/media/NEO PAGE.61afdd68.jpg"},57:function(e,t,a){e.exports=a.p+"static/media/Planche1.fda2684d.jpg"},58:function(e,t,a){e.exports=a.p+"static/media/Zaza.629b4e9e.jpg"},59:function(e,t,a){e.exports=a.p+"static/media/bloccartespostalesB.64a74d3a.jpg"},60:function(e,t,a){e.exports=a.p+"static/media/manon-00pp09.451a1d10.jpg"},61:function(e,t,a){e.exports=a.p+"static/media/planche 2.4441eeba.jpg"},67:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(24),r=a.n(o),i=(a(33),a(9)),l=(a(34),a(10)),s=a(6),p=a(25),u=a.n(p),m=function(){var e,t=(e=a(52)).keys().map(e).map((function(e,t){var a="";return t%1===0&&(a="main1"),t%2===0&&(a="main2"),t%3===0&&(a="main3"),c.a.createElement("img",{key:e,alt:"",className:a,src:e})}));return t=function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e}(t),c.a.createElement("div",{className:"picture_div2"},c.a.createElement("div",{className:"main0"},t))},f=function(e){return c.a.createElement("div",{className:"picture_div"},c.a.createElement("h1",null,"Coucou"))},d=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2);a[0],a[1];return c.a.createElement("div",{className:"picture_div"},"coucou")};var E=function(){var e=Object(n.useState)({}),t=Object(i.a)(e,2),a=t[0],o=t[1];Object(n.useEffect)((function(){u.a.get("/folderInfos").then((function(e){return o(e.data)}))}),[]);var r=[];return Object.keys(a).forEach((function(e){r=r.concat(a[e])})),console.log(r),c.a.createElement("div",{style:{overflow:"hidden"}},c.a.createElement(l.a,null,c.a.createElement(l.b,{className:"Main_title",to:"/"},c.a.createElement("h1",null,"LOUISE GIRARDINI")),c.a.createElement(l.b,{to:"/Contact"},c.a.createElement("h2",null,"Contact")),c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/",exact:!0,component:m}),r.map((function(e){var t="/".concat(e);return c.a.createElement(s.a,{key:e,path:t,component:function(){return c.a.createElement(d,{folders:a,title:e})}})})),c.a.createElement(s.a,{path:"/Contact",component:f}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.d0b737e5.chunk.js.map