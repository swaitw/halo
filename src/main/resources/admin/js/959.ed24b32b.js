"use strict";(self["webpackChunkhalo_admin"]=self["webpackChunkhalo_admin"]||[]).push([[959],{4959:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("exception-page",{attrs:{type:"404"}})},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"exception"},[n("a-result",{attrs:{status:t.type,subTitle:t.config[t.type].desc,title:t.type},scopedSlots:t._u([{key:"extra",fn:function(){return[n("a-button",{attrs:{type:"primary"},on:{click:t.handleToHome}},[t._v("返回仪表盘")])]},proxy:!0}])})],1)},o=[];const l={404:{desc:"抱歉，你访问的页面不存在"},500:{desc:"抱歉，服务器出错了"}};var u=l,c={name:"Exception",props:{type:{type:String,default:"404"}},data(){return{config:u}},methods:{handleToHome(){this.$router.push({name:"Dashboard"})}}},i=c,p=n(18156),d=(0,p.Z)(i,s,o,!1,null,null,null),f=d.exports,h={components:{ExceptionPage:f}},m=h,y=(0,p.Z)(m,a,r,!1,null,null,null),x=y.exports}}]);