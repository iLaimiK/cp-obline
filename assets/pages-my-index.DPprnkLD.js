import{b as e,o as s,a as t,w as a,d as o,e as l,t as r,r as u,z as i,n as c,i as n,q as d,m as f,f as _,g as m,F as p,A as b,k as h,h as v,j as x,v as g,s as y}from"./index-DZYRYWK8.js";import{_ as w}from"./uni-icons.DjJVVxUr.js";import{r as k}from"./uni-app.es.DbCdGPBd.js";import{_ as N}from"./_plugin-vue_export-helper.BCo6x5W8.js";import{_ as j,a as I,b as F}from"./uni-list.BRIuYMJs.js";import{_ as P}from"./scroll-page.Bb0n_poV.js";import{u as T}from"./user.mxfBgdu1.js";import{u as A}from"./http.BtQMKx8L.js";const D=N({__name:"custom-section",props:{title:{type:String,default:""},showArrow:{type:Boolean,default:!1},customStyle:{type:Object,default:{}}},setup(d){const f=d;return(d,_)=>{const m=n,p=k(e("uni-icons"),w);return s(),t(m,{class:"custom-section",style:c({...f.customStyle})},{default:a((()=>[o(m,{class:"custom-section-header"},{default:a((()=>[o(m,{class:"section-header-title"},{default:a((()=>[l(r(f.title),1)])),_:1}),o(m,{class:"section-header-right"},{default:a((()=>[u(d.$slots,"right",{},void 0,!0),f.showArrow?(s(),t(p,{key:0,color:"#c3c3c5",size:"16",type:"forward"})):i("",!0)])),_:3})])),_:3}),u(d.$slots,"default",{},void 0,!0)])),_:3},8,["style"])}}},[["__scopeId","data-v-cc39d661"]]),B=N({__name:"index",setup(u){const c=d({}),w=A(),N=()=>{w.token="",w.openType="switchTab",w.redirectURL="/pages/index/index",b({url:"/pages/login/index"})};return f((async()=>{await(async()=>{const e=await T();if(1e4!==e.code)return uni.utils.toast(e.message);c.value=e.data})()})),(u,d)=>{const f=h,b=v,w=n,T=x,A=y,B=g,C=k(e("custom-section"),D),S=k(e("uni-badge"),j),$=k(e("uni-list-item"),I),z=k(e("uni-list"),F),L=k(e("scroll-page"),P);return s(),t(L,{"background-color":"#F6F7F9"},{default:a((()=>[o(w,{class:"my-page"},{default:a((()=>{var e;return[o(w,{class:"user-profile"},{default:a((()=>[o(f,{class:"user-avatar",src:c.value.avatar},null,8,["src"]),o(w,{class:"user-info"},{default:a((()=>[o(b,{class:"nickname"},{default:a((()=>[l(r(c.value.account),1)])),_:1}),o(b,{class:"iconfont icon-edit"})])),_:1})])),_:1}),o(w,{class:"user-data"},{default:a((()=>[o(T,{"hover-class":"none",url:" "},{default:a((()=>[o(b,{class:"data-number"},{default:a((()=>[l(r(c.value.collectionNumber),1)])),_:1}),o(b,{class:"data-label"},{default:a((()=>[l("收藏")])),_:1})])),_:1}),o(T,{"hover-class":"none",url:" "},{default:a((()=>[o(b,{class:"data-number"},{default:a((()=>[l(r(c.value.likeNumber),1)])),_:1}),o(b,{class:"data-label"},{default:a((()=>[l("关注")])),_:1})])),_:1}),o(T,{"hover-class":"none",url:" "},{default:a((()=>[o(b,{class:"data-number"},{default:a((()=>[l(r(c.value.score),1)])),_:1}),o(b,{class:"data-label"},{default:a((()=>[l("积分")])),_:1})])),_:1}),o(T,{"hover-class":"none",url:" "},{default:a((()=>[o(b,{class:"data-number"},{default:a((()=>[l(r(c.value.couponNumber),1)])),_:1}),o(b,{class:"data-label"},{default:a((()=>[l("优惠券")])),_:1})])),_:1})])),_:1}),(null==(e=c.value.consultationInfo)?void 0:e.length)?(s(),t(C,{key:0,"custom-style":{paddingBottom:"20rpx"},title:"问诊中"},{default:a((()=>[o(B,{class:"uni-swiper","indicator-active-color":"#2CB5A5","indicator-color":"#EAF8F6","indicator-dots":""},{default:a((()=>[(s(!0),_(p,null,m(c.value.consultationInfo,((e,u)=>(s(),t(A,{key:e.id},{default:a((()=>[o(w,{class:"doctor-brief"},{default:a((()=>[o(f,{class:"doctor-avatar",src:e.avatar},null,8,["src"]),o(w,{class:"doctor-info"},{default:a((()=>[o(w,{class:"meta"},{default:a((()=>[o(b,{class:"name"},{default:a((()=>[l(r(e.name),1)])),_:2},1024),o(b,{class:"title"},{default:a((()=>[l(r(e.depName)+" | "+r(e.positionalTitles),1)])),_:2},1024)])),_:2},1024),o(w,{class:"meta"},{default:a((()=>[o(b,{class:"tag"},{default:a((()=>[l(r(e.gradeName),1)])),_:2},1024),o(b,{class:"hospital"},{default:a((()=>[l(r(e.hospitalName),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),o(T,{class:"doctor-contcat","hover-class":"none",url:`/subpkg_consult/room/index?orderId=${e.orderId}`},{default:a((()=>[l(" 进入咨询 ")])),_:2},1032,["url"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})):i("",!0),o(C,{"show-arrow":"",title:"药品订单"},{right:a((()=>[o(T,{"hover-class":"none",url:"/subpkg_medicine/order_list/index"},{default:a((()=>[l(" 全部订单 ")])),_:1})])),default:a((()=>[o(w,{class:"drug-order"},{default:a((()=>[o(T,{"hover-class":"none",url:"/subpkg_medicine/order_list/index"},{default:a((()=>{var e;return[o(S,{text:null==(e=c.value.orderInfo)?void 0:e.paidNumber,offset:[3,3],absolute:"rightTop"},{default:a((()=>[o(f,{src:"/assets/order-status-1-4D1nOsD6.png",class:"status-icon"})])),_:1},8,["text"]),o(b,{class:"status-label"},{default:a((()=>[l("待付款")])),_:1})]})),_:1}),o(T,{"hover-class":"none",url:"/subpkg_medicine/order_list/index"},{default:a((()=>{var e;return[o(S,{text:null==(e=c.value.orderInfo)?void 0:e.receivedNumber,offset:[3,3],absolute:"rightTop"},{default:a((()=>[o(f,{src:"/assets/order-status-2-DZQVgKF3.png",class:"status-icon"})])),_:1},8,["text"]),o(b,{class:"status-label"},{default:a((()=>[l("待收货")])),_:1})]})),_:1}),o(T,{"hover-class":"none",url:"/subpkg_medicine/order_list/index"},{default:a((()=>{var e;return[o(S,{text:null==(e=c.value.orderInfo)?void 0:e.shippedNumber,offset:[3,3],absolute:"rightTop"},{default:a((()=>[o(f,{src:"/assets/order-status-3-Dl_kDAhn.png",class:"status-icon"})])),_:1},8,["text"]),o(b,{class:"status-label"},{default:a((()=>[l("待发货")])),_:1})]})),_:1}),o(T,{"hover-class":"none",url:"/subpkg_medicine/order_list/index"},{default:a((()=>{var e;return[o(S,{text:null==(e=c.value.orderInfo)?void 0:e.finishedNumber,offset:[3,3],absolute:"rightTop"},{default:a((()=>[o(f,{src:"/assets/order-status-4-Cvhf5aLN.png",class:"status-icon"})])),_:1},8,["text"]),o(b,{class:"status-label"},{default:a((()=>[l("已完成")])),_:1})]})),_:1})])),_:1})])),_:1}),o(C,{title:"快捷工具"},{default:a((()=>[o(z,{border:!1},{default:a((()=>[o($,{border:!1,title:"我的问诊","show-arrow":"","show-extra-icon":"",to:"/subpkg_consult/order_list/index","extra-icon":{customPrefix:"icon-symbol",type:"icon-symbol-tool-01"}}),o($,{border:!1,title:"我的处方","show-arrow":"","show-extra-icon":"","extra-icon":{customPrefix:"icon-symbol",type:"icon-symbol-tool-02"}}),o($,{border:!1,title:"家庭档案","show-arrow":"","show-extra-icon":"",to:"/subpkg_archive/list/index","extra-icon":{customPrefix:"icon-symbol",type:"icon-symbol-tool-03"}}),o($,{border:!1,title:"地址管理","show-arrow":"","show-extra-icon":"","extra-icon":{customPrefix:"icon-symbol",type:"icon-symbol-tool-04"}}),o($,{border:!1,title:"我的评价","show-arrow":"","show-extra-icon":"","extra-icon":{customPrefix:"icon-symbol",type:"icon-symbol-tool-05"}}),o($,{border:!1,title:"官方客服","show-arrow":"","show-extra-icon":"","extra-icon":{customPrefix:"icon-symbol",type:"icon-symbol-tool-06"}}),o($,{border:!1,title:"设置","show-arrow":"","show-extra-icon":"","extra-icon":{customPrefix:"icon-symbol",type:"icon-symbol-tool-07"}})])),_:1})])),_:1}),o(w,{onClick:N,class:"logout-button"},{default:a((()=>[l("退出登录")])),_:1})]})),_:1})])),_:1})}}},[["__scopeId","data-v-d0e01d1a"]]);export{B as default};
