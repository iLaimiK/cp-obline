import{q as a,c as e,b as s,o as t,a as l,w as i,d as n,e as u,f as o,g as c,F as r,z as d,a3 as p,i as f,h as _,j as m,l as v,G as g,t as h}from"./index-SNMhby7L.js";import{_ as k}from"./uni-icons.GkTfaCN8.js";import{a as y,r as j}from"./uni-app.es.CqodLWiA.js";import{_ as x,a as b}from"./uni-swipe-action.D8kotMu_.js";import{_ as C}from"./scroll-page.D5HVTT5K.js";import{b as w,c as $}from"./patient.D4s0Fj-8.js";import{u as z}from"./consult.BsD5jsFe.js";import{_ as A}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./http.CqkQg3YM.js";const D=A({__name:"index",setup(A){const D=z(),F=a([{text:"删除",style:{backgroundColor:"#dd524d"}}]),G=a(!1),I=a([]);const q=a(0);const E=e((()=>{var a;return null==(a=I.value[q.value])?void 0:a.id}));function V(){D.selectData.patientId=E.value,p({url:"/subpkg_consult/payment/index"})}return y((()=>{!async function(){const a=await w();if(1e4!==a.code)return uni.utils.toast(a.message);I.value=a.data,G.value=!0}()})),(a,e)=>{const p=f,y=_,w=j(s("uni-icons"),k),z=m,A=j(s("uni-swipe-action-item"),x),D=j(s("uni-swipe-action"),b),E=v,B=j(s("scroll-page"),C);return t(),l(B,null,{default:i((()=>[G.value?(t(),l(p,{key:0,class:"patient-page"},{default:i((()=>[n(p,{class:"page-header"},{default:i((()=>[n(p,{class:"patient-title"},{default:i((()=>[u(" 请选择患者信息 ")])),_:1}),n(p,{class:"patient-tips"},{default:i((()=>[u(" 以便医生给出更准确的治疗，信息仅医生可见 ")])),_:1})])),_:1}),n(D,null,{default:i((()=>[(t(!0),o(r,null,c(I.value,((a,e)=>(t(),l(A,{key:a.id,"right-options":F.value,onClick:s=>(async(a,e)=>{const s=await $(a);if(1e4!==s.code)return uni.utils.toast(s.message);I.value.splice(e,1)})(a.id,e)},{default:i((()=>[n(p,{onClick:a=>function(a){q.value=a}(e),class:g([{active:e===q.value},"archive-card"])},{default:i((()=>[n(p,{class:"archive-info"},{default:i((()=>[n(y,{class:"name"},{default:i((()=>[u(h(a.name),1)])),_:2},1024),n(y,{class:"id-card"},{default:i((()=>[u(h(a.idCard.replace(/^(.{6}).+(.{4})$/,"$1**********$2")),1)])),_:2},1024),1===a.defaultFlag?(t(),l(y,{key:0,class:"default"},{default:i((()=>[u("默认")])),_:1})):d("",!0)])),_:2},1024),n(p,{class:"archive-info"},{default:i((()=>[n(y,{class:"gender"},{default:i((()=>[u(h(a.genderValue),1)])),_:2},1024),n(y,{class:"age"},{default:i((()=>[u(h(a.age)+"岁",1)])),_:2},1024)])),_:2},1024),n(z,{"hover-class":"none",class:"edit-link",url:`/subpkg_archive/form/index?id=${a.id}`},{default:i((()=>[n(w,{type:"icon-edit",size:"20",color:"#16C2A3","custom-prefix":"iconfont"})])),_:2},1032,["url"])])),_:2},1032,["onClick","class"])])),_:2},1032,["right-options","onClick"])))),128))])),_:1}),I.value.length<6?(t(),l(p,{key:0,class:"archive-card"},{default:i((()=>[n(z,{class:"add-link","hover-class":"none",url:"/subpkg_archive/form/index"},{default:i((()=>[n(w,{color:"#16C2A3",size:"24",type:"plusempty"}),n(y,{class:"label"},{default:i((()=>[u("添加患者")])),_:1})])),_:1})])),_:1})):d("",!0)])),_:1})):d("",!0),n(p,{class:"next-step"},{default:i((()=>[n(E,{class:"uni-button",onClick:V},{default:i((()=>[u(" 下一步 ")])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-b5ec4f50"]]);export{D as default};
