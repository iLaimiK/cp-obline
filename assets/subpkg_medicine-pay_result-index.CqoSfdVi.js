import{_ as s}from"./uni-icons.GkTfaCN8.js";import{q as e,m as a,b as t,o,a as l,w as u,i as r,d as n,z as d,e as i,t as p,j as c}from"./index-SNMhby7L.js";import{r as m}from"./uni-app.es.CqodLWiA.js";import{o as _}from"./medcine.DvYZqmoQ.js";import{_ as f}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./http.CqkQg3YM.js";const y=f({__name:"index",props:{orderId:{type:String,default:""},payResult:Boolean},setup(f){const y=f,b=e({});return a((()=>{!async function(){const s=await _(y.orderId);if(console.log(s),1e4!==s.code)return uni.utils.toast(s.message);b.value=s.data}()})),(e,a)=>{const _=m(t("uni-icons"),s),f=r,v=c;return o(),l(f,{class:"pay-result-page"},{default:u((()=>[n(f,{class:"result"},{default:u((()=>[y.payResult?(o(),l(_,{key:0,size:"70",color:"#20c6b2",type:"checkbox-filled"})):d("",!0),!0===y.payResult?(o(),l(f,{key:1,class:"amount"},{default:u((()=>[i("¥ "+p(b.value.actualPayment),1)])),_:1})):d("",!0),n(f,{class:"label"},{default:u((()=>[i(p(y.payResult?"支付成功":"支付失败"),1)])),_:1}),n(f,{class:"tips"},{default:u((()=>[i(p(y.payResult?"订单支付成功，已通知药房尽快发出，请耐心等待~":"订单支付失败，请重新支付~"),1)])),_:1})])),_:1}),n(f,{class:"buttons"},{default:u((()=>[n(v,{"hover-class":"none",url:`/subpkg_medicine/order_detail/index?id=${b.value.id}`,class:"uni-button"},{default:u((()=>[i(" 查看订单 ")])),_:1},8,["url"]),n(v,{"hover-class":"none",url:`/subpkg_consult/room/index?orderId=${b.value.roomId}`,"open-type":"redirect",class:"uni-button plain"},{default:u((()=>[i(" 返回诊室 ")])),_:1},8,["url"])])),_:1})])),_:1})}}},[["__scopeId","data-v-48b8da0d"]]);export{y as default};
