module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}([function(e,t,r){"use strict"},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={delay:5,resolutions:["1920x1080"],dest:"result",pagesPath:"./static/default",url:"http://localhost:3000/",imageAPath:"2018-5-10-17-46-32-79",imageBPath:"2018-5-11-11-4-11-471"}},function(e,t){e.exports=require("tracer")},function(e,t){e.exports=require("colors")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(r(3));function o(e){return e&&e.__esModule?e:{default:e}}var u=o(r(2)).default.colorConsole({format:"{{timestamp}} | {{message}}",dateformat:"HH:MM:ss.L",filters:[{log:n.default.green,trace:n.default.magenta,debug:n.default.blue,info:n.default.white,warn:n.default.yellow,error:[n.default.red,n.default.bold]}]});t.default=u},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("pageres")},function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.make=t.getCurrentDate=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=i(r(6)),u=i(r(5)),a=i(r(4)),l=i(r(1));function i(e){return e&&e.__esModule?e:{default:e}}t.getCurrentDate=function(){var e=new Date;return e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+"-"+e.getHours()+"-"+e.getMinutes()+"-"+e.getSeconds()+"-"+e.getMilliseconds()},t.make=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=n({},l.default,t),i=r.pages,s=void 0===i?[]:i,d=r.delay,f=r.resolutions;if(!s.length)return a.default.warn("Pages are not defined. Terminating process."),!1;a.default.log("Total pages: "+s.length),s.forEach(function(t,r){!function(t){var r=t.idx,n=t.delay,l=void 0===n?5:n,i=t.url,s=void 0===i?"":i,d=t.page,f=void 0===d?"":d,c=t.resolutions,p=void 0===c?["1920x1080"]:c,g=t.dest;new o.default({delay:l}).src(""+s+f,p).dest(u.default.resolve(e,g)).run().then(function(){return a.default.log("Page "+(r+1)+": "+f+" - screenshot done!")})}({page:t,idx:r,delay:d,resolutions:f})})}}).call(this,"/")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(7),o=r(0);t.default=new function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.make,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.compare;return this.make=e,this.compare=t,{make:this.make,compare:this.compare}}}]).default;