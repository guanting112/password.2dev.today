(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{246:function(t,e,r){var content=r(301);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("28f1127f",content,!0,{sourceMap:!1})},299:function(t,e,r){var content=r(401);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(67).default)("48154dca",content,!0,{sourceMap:!1})},300:function(t,e,r){"use strict";r(246)},301:function(t,e,r){(e=r(66)(!1)).push([t.i,".container{width:100%;max-width:1000px;margin:0 auto;padding:4em 1em}.refresh{padding:.5em 0;margin-bottom:1em}.refresh a{color:#fff;font-size:32px;padding:.125em;border:1px solid #e91e63;background-color:#e91e63;border-radius:50%}h1{font-size:48px;margin-bottom:.125em}h2{margin-bottom:.5em}dl>dt,h2{font-size:18px}dl>dt{font-weight:700;color:#fff;background-color:#000;padding:.5em 1em}dl>dd>div{padding:.5em 0;border-bottom:1px dashed hsla(0,0%,50.2%,.5)}dl>dd>div span[class^=label]{display:inline-block;font-size:20px;color:#fff;border-radius:3px;width:2em;text-align:center;padding:.25em}dl>dd>div span[class^=label].label-6,dl>dd>div span[class^=label].label-8{background-color:rgba(73,89,154,.6)}dl>dd>div span[class^=label].label-12{background-color:rgba(63,81,181,.6)}dl>dd>div span[class^=label].label-16,dl>dd>div span[class^=label].label-24{background-color:rgba(57,73,171,.8)}dl>dd>div span[class^=label].label-32,dl>dd>div span[class^=label].label-36{background-color:#283593}dl>dd>div:last-child{border-width:0!important}.copyright{margin-top:6em;text-align:center}.copyright a.author,.copyright a.url{color:#000;font-size:24px;font-weight:700;text-decoration:none}.copyright a.author{font-size:48px}",""]),t.exports=e},311:function(t,e){},313:function(t,e){},323:function(t,e){},325:function(t,e){},350:function(t,e){},351:function(t,e){},356:function(t,e){},358:function(t,e){},365:function(t,e){},384:function(t,e){},400:function(t,e,r){"use strict";r(299)},401:function(t,e,r){(e=r(66)(!1)).push([t.i,".password-text[data-v-b7e9513c]{display:inline-block}.password-text input[data-v-b7e9513c]{outline:none;display:inline-block!important;padding:.25em .5em;margin-top:.25em;margin-bottom:.25em;font-size:18px;font-weight:700;color:#212121;background-color:#eee;border:none}.password-text input[data-v-b7e9513c]:hover{color:#fff;background-color:#c1134e}.password-text input.length-6[data-v-b7e9513c]{width:5.5em}.password-text input.length-8[data-v-b7e9513c]{width:6.5em}.password-text input.length-12[data-v-b7e9513c]{width:9em}.password-text input.length-16[data-v-b7e9513c]{width:12em}.password-text input.length-24[data-v-b7e9513c]{width:16em}.password-text input.length-32[data-v-b7e9513c]{width:22em}.password-text input.length-36[data-v-b7e9513c]{width:24em}",""]),t.exports=e},402:function(t,e,r){"use strict";r.r(e);r(302);var n=r(405),main=r(305),o=r.n(main),l={props:{length:{type:Number,default:8},useUuid:{type:Boolean,default:!1},symbols:{type:Boolean,default:!1},numbers:{type:Boolean,default:!1},lowercase:{type:Boolean,default:!0},uppercase:{type:Boolean,default:!1}},data:function(){return{passwordText:""}},computed:{classObject:function(){return this.useUuid?"length-36":"length-"+this.length}},mounted:function(){this.applyNewPassword()},methods:{doCopy:function(){var t=this;this.$copyText(this.passwordText).then((function(e){var r=t.$refs.main;window.TweenMax.set(r,{y:0,rotation:0}),window.TweenMax.to(r,.1,{yoyo:!0,y:5,repeat:1})}),(function(t){alert("can not copy.")}))},applyNewPassword:function(){this.useUuid?this.passwordText=Object(n.a)():this.passwordText=o.a.generate({length:this.length,symbols:this.symbols,numbers:this.numbers,lowercase:this.lowercase,uppercase:this.uppercase,exclude:[".",":","+","?","'",'"']})}}},d=(r(400),r(32)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"main",staticClass:"password-text"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordText,expression:"passwordText"}],class:t.classObject,attrs:{type:"text",readonly:"readonly"},domProps:{value:t.passwordText},on:{click:t.doCopy,input:function(e){e.target.composing||(t.passwordText=e.target.value)}}})])}),[],!1,null,"b7e9513c",null);e.default=component.exports},404:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{settings:[6,8,12,16,24,32]}}},o=(r(300),r(32)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("h1",[t._v("Random Password/UUID Generator")]),t._v(" "),r("h2",[t._v("create strong password for your online account.")]),t._v(" "),t._m(0),t._v(" "),r("dl",[t._m(1),t._v(" "),r("dd",[r("div",[r("span",{staticClass:"label-36"},[t._v("36")]),t._v(" "),r("password-text",{attrs:{"use-uuid":!0}}),t._v(" "),r("password-text",{attrs:{"use-uuid":!0}})],1),t._v(" "),r("div",[r("span",{staticClass:"label-36"},[t._v("36")]),t._v(" "),r("password-text",{attrs:{"use-uuid":!0}}),t._v(" "),r("password-text",{attrs:{"use-uuid":!0}})],1)]),t._v(" "),t._m(2),t._v(" "),r("dd",t._l(t.settings,(function(e){return r("div",{key:e},[r("span",{class:"label-"+e},[t._v(t._s(e))]),t._v(" "),r("password-text",{attrs:{numbers:!0,lowercase:!0,uppercase:!0,length:e}}),t._v(" "),r("password-text",{attrs:{numbers:!0,lowercase:!0,uppercase:!0,length:e}}),t._v(" "),r("password-text",{attrs:{numbers:!0,lowercase:!0,uppercase:!0,length:e}}),t._v(" "),r("password-text",{attrs:{numbers:!0,lowercase:!0,uppercase:!0,length:e}})],1)})),0),t._v(" "),t._m(3),t._v(" "),r("dd",t._l(t.settings,(function(e){return r("div",{key:e},[r("span",{class:"label-"+e},[t._v(t._s(e))]),t._v(" "),r("password-text",{attrs:{numbers:!0,symbols:!0,lowercase:!0,uppercase:!0,length:e}}),t._v(" "),r("password-text",{attrs:{numbers:!0,symbols:!0,lowercase:!0,uppercase:!0,length:e}}),t._v(" "),r("password-text",{attrs:{numbers:!0,symbols:!0,lowercase:!0,uppercase:!0,length:e}}),t._v(" "),r("password-text",{attrs:{numbers:!0,symbols:!0,lowercase:!0,uppercase:!0,length:e}})],1)})),0),t._v(" "),t._m(4),t._v(" "),r("dd",t._l(t.settings,(function(e){return r("div",{key:e},[r("span",{class:"label-"+e},[t._v(t._s(e))]),t._v(" "),r("password-text",{attrs:{numbers:!0,lowercase:!0,length:e}}),t._v(" "),r("password-text",{attrs:{numbers:!0,lowercase:!0,length:e}}),t._v(" "),r("password-text",{attrs:{numbers:!0,lowercase:!0,length:e}}),t._v(" "),r("password-text",{attrs:{numbers:!0,lowercase:!0,length:e}})],1)})),0),t._v(" "),t._m(5),t._v(" "),r("dd",t._l(t.settings,(function(e){return r("div",{key:e},[r("span",{class:"label-"+e},[t._v(t._s(e))]),t._v(" "),r("password-text",{attrs:{numbers:!0,lowercase:!1,length:e}}),t._v(" "),r("password-text",{attrs:{numbers:!0,lowercase:!1,length:e}}),t._v(" "),r("password-text",{attrs:{numbers:!0,lowercase:!1,length:e}}),t._v(" "),r("password-text",{attrs:{numbers:!0,lowercase:!1,length:e}})],1)})),0)]),t._v(" "),t._m(6)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"refresh"},[e("a",{attrs:{href:"/"}},[e("i",{staticClass:"fas fa-fw fa-sync-alt"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("dt",[e("i",{staticClass:"fas fa-key"}),this._v(" UUID v4")])},function(){var t=this.$createElement,e=this._self._c||t;return e("dt",[e("i",{staticClass:"fas fa-key"}),this._v(" abc ABC 123")])},function(){var t=this.$createElement,e=this._self._c||t;return e("dt",[e("i",{staticClass:"fas fa-key"}),this._v(" abc ABC 123 @%=#")])},function(){var t=this.$createElement,e=this._self._c||t;return e("dt",[e("i",{staticClass:"fas fa-key"}),this._v(" abc 123")])},function(){var t=this.$createElement,e=this._self._c||t;return e("dt",[e("i",{staticClass:"fas fa-key"}),this._v(" 123")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"copyright"},[e("p",[e("a",{staticClass:"url",attrs:{href:"//password.2dev.today"}},[this._v("//password.2dev.today")])]),this._v(" "),e("p",[e("a",{staticClass:"author",attrs:{href:"https://github.com/guanting112"}},[e("i",{staticClass:"fab fa-github-square"})])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{PasswordText:r(402).default})}}]);