import{h as e}from"./http.CqkQg3YM.js";const t=t=>e.get("/patient/medicine/order/pre",{params:{prescriptionId:t}}),i=(t,i)=>e.post("/patient/medicine/order",{id:t,addressId:i}),r=t=>e.get(`/patient/medicine/order/detail/${t}`),a=(t=10,i=1,r=10)=>e.get("/patient/medicine/order/mylist",{params:{status:t,current:i,pageSize:r}}),s=t=>e.get(`/patient/order/${t}/logistics`);export{a,i as c,s as l,r as o,t as p};
