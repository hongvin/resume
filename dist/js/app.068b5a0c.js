(function(t){function e(e){for(var s,i,l=e[0],o=e[1],c=e[2],u=0,f=[];u<l.length;u++)i=l[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,l=1;l<n.length;l++){var o=n[l];0!==a[o]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},a={app:0},r=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=o;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0fd0":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"resume"},[n("MainLayout"),n("ContextList",{attrs:{title:"Profesional Experience"}},[n("Experiences",{attrs:{slot:"listItem"},slot:"listItem"})],1),n("hr",{staticClass:"solid"}),n("ContextList",{attrs:{title:"Education"}},[n("Experiences",{attrs:{slot:"listItem"},slot:"listItem"})],1),n("hr",{staticClass:"solid"}),n("ContextList",{attrs:{title:"Awards, Achievement, Honorable Mentions",id:"a"}},[n("Achievement",{attrs:{slot:"listItem"},slot:"listItem"})],1),n("hr",{staticClass:"solid"}),n("ContextList",{attrs:{title:"Leadership Experiences",id:"a"}},[n("Achievement",{attrs:{slot:"listItem"},slot:"listItem"})],1),n("hr",{staticClass:"solid"}),n("Reference")],1),n("div",{staticClass:"actions"},[n("div",[n("vs-row",[n("label",{staticStyle:{"margin-right":"12px"}},[t._v("Enable Dark mode")]),n("vs-switch",{attrs:{color:"dark"},model:{value:t.darkMode,callback:function(e){t.darkMode=e},expression:"darkMode"}})],1)],1),n("vs-button",{attrs:{color:"primary",id:"button-margin",type:"border"},on:{click:t.print}},[t._v("Print")]),t._m(0),n("div",{staticClass:"info-card"},[n("vs-row",{attrs:{"vs-justify":"center"}},[n("vs-col",{attrs:{type:"flex","vs-justify":"center","vs-align":"center","vs-w":"12"}},[n("vs-card",{staticClass:"bg-card"},[n("div",{attrs:{slot:"header"},slot:"header"},[n("h3",[t._v("Hello there !")])]),n("div",[n("span",[t._v("All dotted boxes are editable")]),n("hr",{staticClass:"solid line-c"}),n("span",[t._v("You are able to add additional items in all sections, except About Me and References. Right click on any item to delete too!")]),n("hr",{staticClass:"solid line-c"}),n("span",[t._v("If you found this useful, please consider contributing by buy me a coffee or contributing to the repo. Or, just spread the words!")]),n("hr",{staticClass:"solid line-c"}),n("span",[t._v("Click print to save as PDF.")]),n("hr",{staticClass:"solid line-c"}),n("a",{staticClass:"github-button",attrs:{href:"https://github.com/khvmaths/resume","data-color-scheme":"no-preference: light; light: light; dark: dark;","data-icon":"octicon-star","aria-label":"Star khvmaths/resume on GitHub"}},[t._v("Star")]),n("span"),n("a",{staticClass:"github-button",attrs:{href:"https://github.com/khvmaths","data-color-scheme":"no-preference: light; light: light; dark: dark;","aria-label":"Follow @khvmaths on GitHub"}},[t._v("Follow @khvmaths")])])])],1)],1)],1)],1)])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"https://www.buymeacoffee.com/hongvin",target:"_blank"}},[n("img",{staticStyle:{"margin-top":"10px",height:"30px !important",width:"100px !important"},attrs:{src:"https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png",alt:"Buy Me A Coffee"}})])}],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"heading"},[n("vs-row",[n("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"12"}},[n("div",{staticClass:"name",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t.name)},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()}}})])],1),n("vs-row",{attrs:{"vs-type":"flex","vs-justify":"space-between"}},[n("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"12"}},[n("span",{staticClass:"text-bold"},[t._v("Email: ")]),n("span",{staticClass:"text-detail",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t.email)},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()}}}),n("span",{staticClass:"seperator"},[t._v("|")]),n("span",{staticClass:"text-bold"},[t._v("Phone: ")]),n("span",{staticClass:"text-detail",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t.phone)},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()}}}),n("span",{staticClass:"seperator"},[t._v("|")]),n("span",{staticClass:"text-bold"},[t._v("Linkedin: ")]),n("span",{staticClass:"text-detail",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t.linkedin)},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()}}})])],1),n("vs-row",[n("vs-col",{attrs:{"vs-type":"flex","vs-justify":"center","vs-align":"center","vs-w":"12"}},[n("span",{staticClass:"text-bold"},[t._v("Address: ")]),n("span",{staticClass:"text-detail",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t.address)},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()}}})])],1)],1),n("hr",{staticClass:"solid"}),n("div",{staticClass:"personalStat"},[n("div",{staticClass:"title",attrs:{contenteditable:"true"}},[t._v("About Me")]),n("div",{staticClass:"text-detail",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t.textarea)}})]),n("hr",{staticClass:"solid"})])},l=[],o={name:"MainLayout",data:function(){return{name:"John Doe",email:"jdoe@gmail.com",phone:"012345678",linkedin:"linkedin.com/in/abcd",address:"1234, Jalan University, Kuala Lumpur, Malaysia.",textarea:"About me."}}},c=o,d=n("2877"),u=Object(d["a"])(c,i,l,!1,null,null,null),f=u.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"context-list"},[n("div",{staticClass:"list-heading"},[n("div",{staticClass:"title"},[n("span",{staticClass:"title",attrs:{contenteditable:"true"}},[t._v(t._s(t.title))]),n("div",{staticClass:"button add",on:{click:t.add}},[t._v("+")])])]),n("ul",{attrs:{id:"luo"}},["a"==t.id?n("div",t._l(t.arry,(function(t){return n("Achievement",{key:t.id})})),1):n("div",t._l(t.arry,(function(t){return n("Experience",{key:t.id})})),1),t._t("listItem")],2)])},v=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"experience"},[n("ListItem",[n("vs-row",{attrs:{"vs-type":"flex","vs-justify":"space-between"}},[n("vs-col",{attrs:{"vs-justify":"flex-start","vs-align":"center","vs-w":"6"}},[n("div",{staticClass:"text-bold",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t.company)},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()}}}),n("div",{staticClass:"text-detail",staticStyle:{"margin-top":"-2px"},attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t.company)},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()}}})]),n("vs-col",{attrs:{"vs-type":"flex","vs-justify":"flex-end","vs-align":"center","vs-w":"6"}},[n("span",{staticClass:"text-bold",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t.year)},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()}}})])],1),n("div",{staticClass:"text-detail",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t.description)}})],1)],1)},m=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.listItem?n("li",{staticClass:"list-item",on:{contextmenu:function(e){return e.preventDefault(),t.showControl(e)}}},[t._t("default"),t.listControl?n("div",{staticClass:"list-control"},[n("span",{on:{click:t.deleteControl}},[t._v("delete")]),n("span",{on:{click:t.cancelControl}},[t._v("cancel")])]):t._e()],2):t._e()},h=[],x={name:"ListItem",data:function(){return{listControl:!1,listItem:!0}},methods:{showControl:function(){this.listControl=!0},cancelControl:function(){this.listControl=!1},deleteControl:function(){this.listItem=!1}}},b=x,C=(n("c619"),Object(d["a"])(b,k,h,!1,null,null,null)),_=C.exports,g={name:"Experience",components:{ListItem:_},props:{data:{type:Object,default:function(){return{}}},company:{type:String,default:"Title"},year:{type:String,default:"Date/Period"},description:{type:String,default:"Descriptions"}}},w=g,j=Object(d["a"])(w,y,m,!1,null,null,null),M=j.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"experience"},[n("ListItem",[n("vs-row",{attrs:{"vs-type":"flex","vs-justify":"space-between"}},[n("vs-col",{attrs:{"vs-justify":"flex-start","vs-align":"center","vs-w":"8"}},[n("div",{staticClass:"text-bold",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t.company)},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()}}})]),n("vs-col",{attrs:{"vs-type":"flex","vs-justify":"flex-end","vs-align":"center","vs-w":"4"}},[n("span",{staticClass:"text-bold",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t.year)},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()}}})])],1),n("div",{staticClass:"text-detail",staticStyle:{"margin-top":"-2px"},attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t.description)}})],1)],1)},L=[],O={name:"Achievement",components:{ListItem:_},props:{data:{type:Object,default:function(){return{}}},company:{type:String,default:"Title"},year:{type:String,default:"Date/Period"},description:{type:String,default:"Description"}}},P=O,T=Object(d["a"])(P,E,L,!1,null,null,null),D=T.exports,H={name:"ContextList",components:{Experience:M,Achievement:D},props:{title:{type:String,default:"Title"},id:{type:String,default:""}},data:function(){return{arry:[]}},methods:{showAdd:function(){this.add=!0},add:function(){this.arry.push(1)}}},S=H,A=(n("e927"),Object(d["a"])(S,p,v,!1,null,null,null)),I=A.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("div",{staticClass:"reference"},[n("vs-row",[n("vs-col",{attrs:{"vs-type":"flex","vs-justify":"flex-start","vs-align":"center","vs-w":"6"}},[n("span",{staticClass:"text-bold",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t.name)},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()}}})]),n("vs-col",{attrs:{"vs-type":"flex","vs-justify":"flex-start","vs-align":"center","vs-w":"6"}},[n("span",{staticClass:"text-bold",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t.name)},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()}}})])],1),n("vs-row",[n("vs-col",{attrs:{"vs-type":"flex","vs-justify":"flex-start","vs-align":"center","vs-w":"6"}},[n("span",{staticClass:"text-detail margin-adj",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t.title)},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()}}})]),n("vs-col",{attrs:{"vs-type":"flex","vs-justify":"flex-start","vs-align":"center","vs-w":"6"}},[n("span",{staticClass:"text-detail margin-adj",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t.title)},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()}}})])],1),n("vs-row",[n("vs-col",{attrs:{"vs-type":"flex","vs-justify":"flex-start","vs-align":"center","vs-w":"6"}},[n("span",{staticClass:"text-detail margin-adj",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t.contact)},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()}}}),n("span",{staticClass:"seperator"},[t._v("|")]),n("span",{staticClass:"text-detail margin-adj",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t.email)},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()}}})]),n("vs-col",{attrs:{"vs-type":"flex","vs-justify":"flex-start","vs-align":"center","vs-w":"6"}},[n("span",{staticClass:"text-detail margin-adj",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t.contact)},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()}}}),n("span",{staticClass:"seperator"},[t._v("|")]),n("span",{staticClass:"text-detail margin-adj",attrs:{contenteditable:"true"},domProps:{innerHTML:t._s(t.email)},on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;e.preventDefault()}}})])],1)],1)])},R=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("span",{staticClass:"title"},[t._v("References")])])}],J={name:"Reference",data:function(){return{name:"Name",title:"Title",contact:"012345678",email:"email@email.com"}}},F=J,B=Object(d["a"])(F,$,R,!1,null,null,null),G=B.exports,q=n("c0e9"),K=n.n(q),N=n("21a6"),U=n.n(N),Y={name:"App",components:{MainLayout:f,ContextList:I,Achievement:D,Experiences:M,Reference:G},data:function(){return{darkMode:!1}},mounted:function(){var t=document.body;t.classList.add("app-bg");var e=document.documentElement,n=localStorage.getItem("theme");"dark"===n?(e.setAttribute("theme","dark"),this.darkMode=!0):(e.setAttribute("theme","light"),this.darkMode=!1)},watch:{darkMode:function(){var t=document.documentElement;this.darkMode?(localStorage.setItem("theme","dark"),t.setAttribute("theme","dark")):(localStorage.setItem("theme","light"),t.setAttribute("theme","light"))}},methods:{saveAsImage:function(){var t=document.querySelector(".resume");K()(t).then((function(t){t.toBlob((function(t){U.a.saveAs(t,"Resume.png")}))}))},print:function(){window.print()}}},z=Y,Q=(n("034f"),Object(d["a"])(z,a,r,!1,null,null,null)),V=Q.exports,W=n("fb9a"),X=n.n(W);n("04f2");s["default"].config.productionTip=!1,s["default"].use(X.a),new s["default"]({render:function(t){return t(V)}}).$mount("#app")},"729e":function(t,e,n){},"85ec":function(t,e,n){},c619:function(t,e,n){"use strict";n("0fd0")},e927:function(t,e,n){"use strict";n("729e")}});
//# sourceMappingURL=app.068b5a0c.js.map