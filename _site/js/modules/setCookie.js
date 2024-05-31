export default(e,t,o)=>{const i=new Date;i.setTime(i.getTime()+24*o*60*60*1e3);let n="expires="+i.toUTCString();document.cookie=e+"="+t+";"+n+";path=/"};//# sourceMappingURL=setCookie.js.map
