import{q as a,b as s,U as e,o as l,a as t,w as i,d as o,e as r,f as u,g as c,F as n,z as d,i as f,h as p,j as _,x as m,G as v,t as g}from"./index-SNMhby7L.js";import{_ as h}from"./uni-icons.GkTfaCN8.js";import{a as k,r as b}from"./uni-app.es.CqodLWiA.js";import{_ as x,a as y}from"./uni-swipe-action.D8kotMu_.js";import{_ as j}from"./scroll-page.D5HVTT5K.js";import{b as w,c as C}from"./patient.D4s0Fj-8.js";import{_ as z}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./http.CqkQg3YM.js";const F=z({__name:"index",setup(z){const F=a([]),A=a(!1),q=a([{text:"删除",style:{backgroundColor:"#dd524d"}}]);k((()=>{D()}));const D=async()=>{const a=await w();if(1e4!==a.code)return uni.utils.toast(a.message);F.value=a.data,A.value=!0};return(a,k)=>{const w=f,z=p,D=b(s("uni-icons"),h),E=_,G=b(s("uni-swipe-action-item"),x),I=b(s("uni-swipe-action"),y),U=b(s("scroll-page"),j),V=e("key");return l(),t(U,null,{default:i((()=>[A.value?(l(),t(w,{key:0,class:"archive-page"},{default:i((()=>[o(w,{class:"archive-tips"},{default:i((()=>[r("最多可添加6人")])),_:1}),o(I,null,{default:i((()=>[(l(!0),u(n,null,c(F.value,((a,s)=>m((l(),t(G,{"right-options":q.value,onClick:e=>(async(a,s)=>{const e=await C(a);if(1e4!==e.code)return uni.utils.toast(e.message);F.value.splice(s,1)})(a.id,s)},{default:i((()=>[o(w,{class:v([{active:1===a.defaultFlag},"archive-card"])},{default:i((()=>[o(w,{class:"archive-info"},{default:i((()=>[o(z,{class:"name"},{default:i((()=>[r(g(a.name),1)])),_:2},1024),o(z,{class:"id-card"},{default:i((()=>[r(g(a.idCard),1)])),_:2},1024),1===a.defaultFlag?(l(),t(z,{key:0,class:"default"},{default:i((()=>[r("默认")])),_:1})):d("",!0)])),_:2},1024),o(w,{class:"archive-info"},{default:i((()=>[o(z,{class:"gender"},{default:i((()=>[r(g(a.genderValue),1)])),_:2},1024),o(z,{class:"age"},{default:i((()=>[r(g(a.age)+"岁",1)])),_:2},1024)])),_:2},1024),o(E,{"hover-class":"none",class:"edit-link",url:`/subpkg_archive/form/index?id=${a.id}`},{default:i((()=>[o(D,{type:"icon-edit",size:"20",color:"#16C2A3","custom-prefix":"iconfont"})])),_:2},1032,["url"])])),_:2},1032,["class"])])),_:2},1032,["right-options","onClick"])),[[V,a.id]]))),256))])),_:1}),F.value.length<6?(l(),t(w,{key:0,class:"archive-card"},{default:i((()=>[o(E,{class:"add-link","hover-class":"none",url:"/subpkg_archive/form/index"},{default:i((()=>[o(D,{color:"#16C2A3",size:"45rpx",type:"plusempty"}),o(z,{class:"label"},{default:i((()=>[r("添加患者")])),_:1})])),_:1})])),_:1})):d("",!0)])),_:1})):d("",!0)])),_:1})}}},[["__scopeId","data-v-b44ebbb5"]]);export{F as default};
