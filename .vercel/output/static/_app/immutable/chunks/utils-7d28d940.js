const L={suburbAlias:[{name:"KUNDIBAKH",alternative:["BURRELL CREEK","BELBORA"]},{name:"BURRELL CREEK",alternative:["KUNDIBAKH","BELBORA","KIMBRIKI","HILLVILLE"]},{name:"BELBORA",alternative:["BURRELL CREEK","KUNDIBAKH"]},{name:"KIMBRIKI",alternative:["BURRELL CREEK","KUNDIBAKH"]},{name:"HILLVILLE",alternative:["BURRELL CREEK","KUNDIBAKH"]}]},E=(t,a)=>{const s=L.suburbAlias.filter(function(n){return n.name==a});let e=[`${t.toUpperCase()} ${a.toUpperCase()}`];if(s.length>0)for(let n of s[0].alternative)e=[...e,`${t.toUpperCase()}, ${n.toUpperCase()}`];return e},R=(t,a)=>(t+=a,t.length==4&&(t+=" "),t.length==8&&(t+=" "),t),K=(t,a)=>(t+=a,t.length==4&&(t+=" "),t);export{R as a,K as f,E as s};
