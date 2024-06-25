const t=(t,e=500)=>{let l=null;return function(...n){l&&clearTimeout(l),l=setTimeout((()=>{t.apply(this,n)}),e)}};export{t as d};
