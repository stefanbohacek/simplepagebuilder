export default e=>{e+="=";let t=decodeURIComponent(document.cookie).split(";");for(let n=0;n<t.length;n++){let r=t[n];for(;" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(e))return r.substring(e.length,r.length)}return""};//# sourceMappingURL=getCookie.js.map