(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{194:function(n,t,o){},236:function(n,t,o){"use strict";var i=o(194);o.n(i).a},280:function(n,t,o){"use strict";o.r(t);var i={name:"HotsButton",components:{"h-icon":o(189).a},props:{icon:{},loading:{type:Boolean,default:!1},iconPosition:{type:String,default:"left",validator:function(n){return!("left"!==n&&"right"!==n)}}}},a=(o(236),o(1)),c={name:"use-button",components:{"h-button":Object(a.a)(i,function(){var n,t=this,o=t.$createElement,i=t._self._c||o;return i("button",{staticClass:"h-button",class:(n={},n["icon-"+t.iconPosition]=!0,n),on:{click:function(n){return t.$emit("click")}}},[t.icon&&!t.loading?i("h-icon",{staticClass:"icon",attrs:{name:t.icon}}):t._e(),t._v(" "),t.loading?i("h-icon",{staticClass:"loading icon",attrs:{name:"loading"}}):t._e(),t._v(" "),i("div",{staticClass:"hots-button-content"},[t._t("default")],2)],1)},[],!1,null,"8ae16eec",null).exports},data:function(){return{loading:!0,loading2:!1}}},e=Object(a.a)(c,function(){var n=this,t=n.$createElement,o=n._self._c||t;return o("div",[o("h-button",[n._v("默认")]),n._v(" "),o("h-button",{attrs:{icon:"setting"}},[n._v("设置")]),n._v(" "),o("h-button",{attrs:{loading:n.loading},on:{click:function(t){n.loading=!n.loading}}},[n._v("点击切换状态")]),n._v(" "),o("h-button",{attrs:{iconPosition:"right",icon:"shouwangxianfeng",loading:n.loading2},on:{click:function(t){n.loading2=!n.loading2}}},[n._v("右侧图标")])],1)},[],!1,null,null,null);t.default=e.exports}}]);