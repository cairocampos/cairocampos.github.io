(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{205:function(t,n,e){var content=e(207);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(37).default)("77c07465",content,!0,{sourceMap:!1})},206:function(t,n,e){"use strict";var o=e(205);e.n(o).a},207:function(t,n,e){(n=e(36)(!1)).push([t.i,'.introduction{margin-top:32px;margin-bottom:32px;max-width:500px}.introduction__subtitle:after{content:"";display:block;height:2px;background-color:#fff;max-width:20px}',""]),t.exports=n},208:function(t,n,e){"use strict";e.r(n);var o={props:["title","subtitle"],data:function(){return{textAnimation:""}},methods:{animeDescription:function(){var t=this,i=0,n=parseInt(this.title.length)+1,e=setInterval((function(){t.textAnimation=t.title.substring(0,i),++i==n&&clearInterval(e)}),35)}},created:function(){this.animeDescription()}},r=(e(206),e(31)),component=Object(r.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"introduction"},[n("h5",{staticClass:"introduction__subtitle"},[this._v(this._s(this.subtitle))]),this._v(" "),n("h3",{staticClass:"introduction__title"},[this._v(this._s(this.textAnimation))])])}),[],!1,null,null,null);n.default=component.exports},227:function(t,n,e){"use strict";e.r(n);var o={props:["slug"],data:function(){return{introduction:{title:"",subtitle:"Cairo Campos"}}}},r=e(31),component=Object(r.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("section",{staticClass:"container"},[n("Introduction",{attrs:{title:this.introduction.title,subtitle:this.introduction.subtitle}}),this._v(" "),n("div",{staticClass:"row"})],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Introduction:e(208).default})}}]);