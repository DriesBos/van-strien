(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{323:function(t,n,e){"use strict";n.a={mounted:function(){var t=this;this.$storybridge.on(["input","published","change"],(function(n){"input"==n.action?n.story.id===t.story.id&&(t.story.content=n.story.content):n.slugChanged||window.location.reload()}))}}},327:function(t,n,e){var content=e(337);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(33).default)("512f2390",content,!0,{sourceMap:!1})},336:function(t,n,e){"use strict";var o=e(327);e.n(o).a},337:function(t,n,e){(n=e(32)(!1)).push([t.i,"",""]),t.exports=n},339:function(t,n,e){"use strict";e.r(n);var o=e(323),r=e(333);r.setOptions({breaks:!0});var c={name:"MarkdownItem",props:{input:String},computed:{compiledMarkdown:function(){return r(this.input)}}},d=(e(336),e(6)),l={components:{"markdown-item":Object(d.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"markdown",domProps:{innerHTML:this._s(this.compiledMarkdown)}})}),[],!1,null,"096e6aba",null).exports},mixins:[o.a],asyncData:function(t){return t.app.$storyapi.get("cdn/stories/about",{version:"draft"}).then((function(t){return t.data})).catch((function(n){n.response?(console.error(n.response.data),t.error({statusCode:n.response.status,message:n.response.data})):(console.error(n),t.error({statusCode:404,message:"Failed to receive content form api"}))}))},data:function(){return{story:{content:{}}}},mounted:function(){}},f=Object(d.a)(l,(function(){var t=this.$createElement,n=this._self._c||t;return n("section",[n("h1",[this._v(this._s(this.story.content.title))]),this._v(" "),n("markdown-item",{attrs:{input:this.story.content.text}})],1)}),[],!1,null,null,null);n.default=f.exports}}]);