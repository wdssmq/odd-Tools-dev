"use strict";const e=(e,t={price:"price",number:"number"})=>new Proxy(e,{get:(e,t,o)=>Reflect.get(e,t,o),set(e,o,n){const r=e.map((e=>{const o=e[t.price],n=e[t.number];return e.unit=(o/n).toFixed(2),e}));return Reflect.set(r,o,n)}});var t=e([],{price:"price",number:"number"}),o=Object.freeze({__proto__:null,default:t,unit:e,unitByObject:(e,t={price:"price",number:"number"})=>{const o=e[t.price],n=e[t.number];return e.unit=(o/n).toFixed(2),e}});var n=Object.freeze({__proto__:null,dateFormat:function(e,t){const o={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};/(y+)/.test(t)&&(e||(e=new Date),t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));for(const e in o)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?o[e]+"":("00"+o[e]).substr((""+o[e]).length)));return t}});function r(e){const t=atob(e),o=t.split("").map((e=>e.charCodeAt(0))).reduce(((e,t)=>e+String.fromCharCode(t)),""),n=new ArrayBuffer(t.length),r=new Uint8Array(n);for(let e=0;e<t.length;e++)r[e]=t.charCodeAt(e);return new Blob([n],{type:o})}function c(e){return URL.createObjectURL(e)}var l=Object.freeze({__proto__:null,base64ToBlob:r,blobToBase64:function(e){return new Promise(((t,o)=>{const n=new FileReader;n.readAsDataURL(e),n.onloadend=()=>{const e=n.result;t(e.split(",")[1])},n.onerror=()=>{o("Unable to convert blob to base64")}}))},blobToUrl:c,downloadBase64File:function(e,t){const o=c(r(e)),n=document.createElement("a");n.href=o,n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(o)},downloadBlobFile:function(e,t){const o=c(e),n=document.createElement("a");n.href=o,n.download=t,document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(o)}});exports.dateFormat=n,exports.unitPrice=o,exports.uploadTools=l;
