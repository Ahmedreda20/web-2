(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{382:function(t,e,l){"use strict";l.r(e);var n={name:"SolutionsPage",computed:{solutions:function(){return this.$store.state.solutions}}},o=l(46),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"w-full p-6"},[l("main",{staticClass:"container space-y-6"},[t.solutions.length>0?l("div",{staticClass:"grid grid-cols-[repeat(auto-fill,minmax(325px,1fr))] gap-6 place-items-center"},t._l(t.solutions,(function(e,n){return l("figure",{key:n,staticClass:"w-full p-6 space-y-4 rounded-xl",style:"background: "+(e.theme_color+15)},[l("h4",{staticClass:"text-gray-300 font-bold",style:"color: "+e.theme_color},[t._v("\n          "+t._s(n>=10?n+1:"0"+(n+1))+"\n        ")]),t._v(" "),l("h2",{staticClass:"text-lg font-semibold text-gray-800",style:"color: "+e.theme_color},[t._v("\n          "+t._s(e["name_"+t.$i18n.locale])+"\n        ")]),t._v(" "),l("p",{staticClass:"text-sm font-medium text-gray-600"},[t._v("\n          "+t._s(e["head_desc_"+t.$i18n.locale])+"\n        ")]),t._v(" "),l("nuxt-link",{staticClass:"bg-transparent text-sm",style:"color: "+e.theme_color,attrs:{to:"/solutions/"+e.id}},[t._v("\n          اعرف المزيد\n        ")])],1)})),0):l("div",{staticClass:"grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-6 place-items-center"},t._l(4,(function(i){return l("div",{key:i,staticClass:"p-4 w-full mx-auto"},[t._m(0,!0)])})),0)])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"animate-pulse flex space-x-4"},[l("div",{staticClass:"flex-1 space-y-4 py-1"},[l("div",{staticClass:"h-3 bg-gray-200 rounded w-3/4"}),t._v(" "),l("div",{staticClass:"space-y-2"},[l("div",{staticClass:"h-3 bg-gray-200 rounded"}),t._v(" "),l("div",{staticClass:"h-3 bg-gray-200 rounded w-5/6"})])])])}],!1,null,null,null);e.default=component.exports}}]);