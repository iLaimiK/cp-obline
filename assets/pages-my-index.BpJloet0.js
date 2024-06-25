import{b as s,o as e,a as t,w as a,d as o,e as l,t as r,r as c,z as u,n as i,i as n,q as d,m as f,f as _,g as m,F as p,A as b,k as h,h as x,j as v,v as g,s as y}from"./index-BC-67zmo.js";import{_ as w}from"./uni-icons.BOY_Jubr.js";import{r as k}from"./uni-app.es.9K6jfBy6.js";import{_ as N}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{_ as j,a as I,b as F}from"./uni-list.1E6ItBm6.js";import{_ as P}from"./scroll-page.BUfSIwsu.js";import{u as T}from"./user.DfNG0o2c.js";import{u as A}from"./http.Cf7yvREa.js";const D=N({__name:"custom-section",props:{title:{type:String,default:""},showArrow:{type:Boolean,default:!1},customStyle:{type:Object,default:{}}},setup(d){const f=d;return(d,_)=>{const m=n,p=k(s("uni-icons"),w);return e(),t(m,{class:"custom-section",style:i({...f.customStyle})},{default:a((()=>[o(m,{class:"custom-section-header"},{default:a((()=>[o(m,{class:"section-header-title"},{default:a((()=>[l(r(f.title),1)])),_:1}),o(m,{class:"section-header-right"},{default:a((()=>[c(d.$slots,"right",{},void 0,!0),f.showArrow?(e(),t(p,{key:0,color:"#c3c3c5",size:"16",type:"forward"})):u("",!0)])),_:3})])),_:3}),c(d.$slots,"default",{},void 0,!0)])),_:3},8,["style"])}}},[["__scopeId","data-v-cc39d661"]]),B=N({__name:"index",setup(c){const i=d({}),w=A(),N=()=>{w.token="",w.openType="switchTab",w.redirectURL="/pages/index/index",b({url:"/pages/login/index"})};return f((async()=>{await(async()=>{const s=await T();if(1e4!==s.code)return uni.utils.toast(s.message);i.value=s.data})()})),(c,d)=>{const f=h,b=x,w=n,T=v,A=y,B=g,C=k(s("custom-section"),D),S=k(s("uni-badge"),j),$=k(s("uni-list-item"),I),z=k(s("uni-list"),F),L=k(s("scroll-page"),P);return e(),t(L,{"background-color":"#F6F7F9"},{default:a((()=>[o(w,{class:"my-page"},{default:a((()=>[o(w,{class:"user-profile"},{default:a((()=>[o(f,{class:"user-avatar",src:i.value.avatar},null,8,["src"]),o(w,{class:"user-info"},{default:a((()=>[o(b,{class:"nickname"},{default:a((()=>[l(r(i.value.account),1)])),_:1}),o(b,{class:"iconfont icon-edit"})])),_:1})])),_:1}),o(w,{class:"user-data"},{default:a((()=>[o(T,{"hover-class":"none",url:" "},{default:a((()=>[o(b,{class:"data-number"},{default:a((()=>[l(r(i.value.collectionNumber),1)])),_:1}),o(b,{class:"data-label"},{default:a((()=>[l("收藏")])),_:1})])),_:1}),o(T,{"hover-class":"none",url:" "},{default:a((()=>[o(b,{class:"data-number"},{default:a((()=>[l(r(i.value.likeNumber),1)])),_:1}),o(b,{class:"data-label"},{default:a((()=>[l("关注")])),_:1})])),_:1}),o(T,{"hover-class":"none",url:" "},{default:a((()=>[o(b,{class:"data-number"},{default:a((()=>[l(r(i.value.score),1)])),_:1}),o(b,{class:"data-label"},{default:a((()=>[l("积分")])),_:1})])),_:1}),o(T,{"hover-class":"none",url:" "},{default:a((()=>[o(b,{class:"data-number"},{default:a((()=>[l(r(i.value.couponNumber),1)])),_:1}),o(b,{class:"data-label"},{default:a((()=>[l("优惠券")])),_:1})])),_:1})])),_:1}),i.value.consultationInfo?(e(),t(C,{key:0,"custom-style":{paddingBottom:"20rpx"},title:"问诊中"},{default:a((()=>[o(B,{class:"uni-swiper","indicator-active-color":"#2CB5A5","indicator-color":"#EAF8F6","indicator-dots":""},{default:a((()=>[(e(!0),_(p,null,m(i.value.consultationInfo,((s,c)=>(e(),t(A,{key:s.id},{default:a((()=>[o(w,{class:"doctor-brief"},{default:a((()=>[o(f,{class:"doctor-avatar",src:s.avatar},null,8,["src"]),o(w,{class:"doctor-info"},{default:a((()=>[o(w,{class:"meta"},{default:a((()=>[o(b,{class:"name"},{default:a((()=>[l(r(s.name),1)])),_:2},1024),o(b,{class:"title"},{default:a((()=>[l(r(s.depName)+" | "+r(s.positionalTitles),1)])),_:2},1024)])),_:2},1024),o(w,{class:"meta"},{default:a((()=>[o(b,{class:"tag"},{default:a((()=>[l(r(s.gradeName),1)])),_:2},1024),o(b,{class:"hospital"},{default:a((()=>[l(r(s.hospitalName),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),o(T,{class:"doctor-contcat","hover-class":"none",url:`/subpkg_consult/room/index?orderId=${s.orderId}`},{default:a((()=>[l(" 进入咨询 ")])),_:2},1032,["url"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})):u("",!0),o(C,{"show-arrow":"",title:"药品订单"},{right:a((()=>[o(T,{"hover-class":"none",url:"/subpkg_medicine/order_list/index"},{default:a((()=>[l(" 全部订单 ")])),_:1})])),default:a((()=>[o(w,{class:"drug-order"},{default:a((()=>[o(T,{"hover-class":"none",url:"/subpkg_medicine/order_list/index"},{default:a((()=>[o(S,{text:i.value.orderInfo.paidNumber,offset:[3,3],absolute:"rightTop"},{default:a((()=>[o(f,{src:"/assets/order-status-1-4D1nOsD6.png",class:"status-icon"})])),_:1},8,["text"]),o(b,{class:"status-label"},{default:a((()=>[l("待付款")])),_:1})])),_:1}),o(T,{"hover-class":"none",url:"/subpkg_medicine/order_list/index"},{default:a((()=>[o(S,{text:i.value.orderInfo.receivedNumber,offset:[3,3],absolute:"rightTop"},{default:a((()=>[o(f,{src:"/assets/order-status-2-DZQVgKF3.png",class:"status-icon"})])),_:1},8,["text"]),o(b,{class:"status-label"},{default:a((()=>[l("待收货")])),_:1})])),_:1}),o(T,{"hover-class":"none",url:"/subpkg_medicine/order_list/index"},{default:a((()=>[o(S,{text:i.value.orderInfo.shippedNumber,offset:[3,3],absolute:"rightTop"},{default:a((()=>[o(f,{src:"/assets/order-status-3-Dl_kDAhn.png",class:"status-icon"})])),_:1},8,["text"]),o(b,{class:"status-label"},{default:a((()=>[l("待发货")])),_:1})])),_:1}),o(T,{"hover-class":"none",url:"/subpkg_medicine/order_list/index"},{default:a((()=>[o(S,{text:i.value.orderInfo.finishedNumber,offset:[3,3],absolute:"rightTop"},{default:a((()=>[o(f,{src:"/assets/order-status-4-Cvhf5aLN.png",class:"status-icon"})])),_:1},8,["text"]),o(b,{class:"status-label"},{default:a((()=>[l("已完成")])),_:1})])),_:1})])),_:1})])),_:1}),o(C,{title:"快捷工具"},{default:a((()=>[o(z,{border:!1},{default:a((()=>[o($,{border:!1,title:"我的问诊","show-arrow":"","show-extra-icon":"",to:"/subpkg_consult/order_list/index","extra-icon":{customPrefix:"icon-symbol",type:"icon-symbol-tool-01"}}),o($,{border:!1,title:"我的处方","show-arrow":"","show-extra-icon":"","extra-icon":{customPrefix:"icon-symbol",type:"icon-symbol-tool-02"}}),o($,{border:!1,title:"家庭档案","show-arrow":"","show-extra-icon":"",to:"/subpkg_archive/list/index","extra-icon":{customPrefix:"icon-symbol",type:"icon-symbol-tool-03"}}),o($,{border:!1,title:"地址管理","show-arrow":"","show-extra-icon":"","extra-icon":{customPrefix:"icon-symbol",type:"icon-symbol-tool-04"}}),o($,{border:!1,title:"我的评价","show-arrow":"","show-extra-icon":"","extra-icon":{customPrefix:"icon-symbol",type:"icon-symbol-tool-05"}}),o($,{border:!1,title:"官方客服","show-arrow":"","show-extra-icon":"","extra-icon":{customPrefix:"icon-symbol",type:"icon-symbol-tool-06"}}),o($,{border:!1,title:"设置","show-arrow":"","show-extra-icon":"","extra-icon":{customPrefix:"icon-symbol",type:"icon-symbol-tool-07"}})])),_:1})])),_:1}),o(w,{onClick:N,class:"logout-button"},{default:a((()=>[l("退出登录")])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-a9cc4c09"]]);export{B as default};
