(function(t){function e(e){for(var s,r,c=e[0],l=e[1],i=e[2],f=0,u=[];f<c.length;f++)r=c[f],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(u.length)u.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,c=1;c<a.length;c++){var l=a[c];0!==n[l]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},o=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var i=0;i<c.length;i++)e(c[i]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),n=a.n(s);n.a},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=o(t);return a(e)}function o(t){if(!a.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=o,t.exports=n,n.id="4678"},5490:function(t,e,a){"use strict";var s=a("a6b6"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Map")],1)},o=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"content"},[a("div",{staticClass:"left-content"},[a("div",{staticClass:"total"},[a("p",{staticClass:"title"},[t._v("Total confirmed")]),a("p",{staticClass:"count"},[t._v(t._s(t.total))])]),a("div",{staticClass:"total lower"},[a("p",{staticClass:"title"},[t._v("Total Recovered")]),a("p",{staticClass:"count green"},[t._v(t._s(t.totalRecovered))])]),a("div",{staticClass:"total lower"},[a("p",{staticClass:"title"},[t._v("Total Active")]),a("p",{staticClass:"count orange"},[t._v(t._s(t.totalActive))])]),a("div",{staticClass:"total lower"},[a("p",{staticClass:"title"},[t._v("Total Death")]),a("p",{staticClass:"count"},[t._v(t._s(t.totalDeath))])]),a("div",{staticClass:"lower"},[a("line-chart",{attrs:{"chart-data":t.datacollection}})],1)]),a("div",{staticClass:"center-content"},[t.showMap?a("l-map",{attrs:{zoom:t.zoom,center:t.latLng(21.295132,81.828232),options:t.mapOptions},on:{"update:center":t.centerUpdate,"update:zoom":t.zoomUpdate}},[a("l-tile-layer",{attrs:{url:t.url,attribution:t.attribution}}),t._l(t.cityList,(function(e,s){return a("div",{key:s},[a("l-marker",{attrs:{"lat-lng":t.latLng(e.location.lat,e.location.long)}},[a("l-popup",[a("div",[t._v(" "+t._s(e.state)+" "),a("p",[t._v(" Total : "+t._s(e.total)+" ")]),a("p",[t._v(" Dead : "+t._s(e.dead)+" ")]),a("p",[t._v(" Recovered : "+t._s(e.recovered)+" ")])])])],1)],1)}))],2):t._e()],1),a("div",{staticClass:"right-content"},[a("div",{staticClass:"list"},t._l(t.cityList,(function(e,s){return a("li",{key:s,staticClass:"list-item"},[a("div",{staticClass:"details"},[a("span",{staticClass:"list-state"},[t._v(t._s(e.state))]),a("span",{staticClass:"list-count"},[t._v(t._s(e.total))])])])})),0)])]),t._m(1)])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("h3",[t._v("Coronavirus COVID-19 Indian Cases : Ministry of Health and Family Welfare ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("p",[t._v("Data sourced from : "),a("a",{attrs:{href:"https://www.mohfw.gov.in/"}},[t._v("MOHFW")])])])}],l=(a("4de4"),a("4160"),a("b64b"),a("07ac"),a("ac1f"),a("5319"),a("159b"),a("e11e")),i=a("f60f"),d=a("bc3a"),f=a.n(d),u={loadAllCasesIndia:function(){return f.a.get("/india").then((function(t){return t})).catch((function(t){console.log(t)}))},loadAllCasesWorld:function(){return f.a.get("/world").then((function(t){return t})).catch((function(t){console.log(t)}))}},j=u,b=a("1fca"),p=b["b"].reactiveProp,h={extends:b["a"],mixins:[p],props:["options"],mounted:function(){this.renderChart(this.chartData,this.options)}};delete l["Icon"].Default.prototype._getIconUrl,l["Icon"].Default.mergeOptions({iconRetinaUrl:a("584d"),iconUrl:a("6397"),shadowUrl:a("e2b9")});var v={name:"Map",components:{LPopup:i["a"],LineChart:h},data:function(){return{datacollection:null,zoom:5,center:Object(l["latLng"])(21.295132,81.828232),url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',currentZoom:3,currentCenter:Object(l["latLng"])(23.473324,77.947998),showParagraph:!1,mapOptions:{zoomSnap:.5},showMap:!0,cityList:[],total:0,totalActive:0,totalDeath:0,totalRecovered:0}},mounted:function(){this.loadIndiaData(),this.loadWorldData()},methods:{zoomUpdate:function(t){this.currentZoom=t},centerUpdate:function(t){this.currentCenter=t},latLng:function(t,e){if(t&&e)return Object(l["latLng"])(parseInt(t),parseInt(e))},loadWorldData:function(){var t=this;j.loadAllCasesWorld().then((function(e){for(var a=[],s=[],n=e.data.filter((function(t){return"India"===t.country})),o=0,r=Object.values(n[0].cases);o<r.length;o++){var c=r[o];s.push(parseInt(c))}for(var l=0,i=Object.keys(n[0].cases);l<i.length;l++){var d=i[l];a.push(parseInt(d))}t.datacollection={labels:a,datasets:[{label:"Daily cases",backgroundColor:"red",data:s}]}}))},loadIndiaData:function(){var t=this;j.loadAllCasesIndia().then((function(e){t.total=0,t.totalActive=0,t.totalDeath=0,t.totalRecovered=0,t.cityList=e.data,t.cityList.forEach((function(e){e.state=e.state.replace("Union Territory of",""),t.total+=e.total,t.totalDeath+=parseInt(e.dead),t.totalRecovered+=parseInt(e.recovered)})),t.totalActive=t.total-t.totalDeath-t.totalRecovered}))}}},m=v,g=(a("5490"),a("2877")),y=Object(g["a"])(m,r,c,!1,null,null,null),_=y.exports,k={name:"App",components:{Map:_}},C=k,w=(a("034f"),Object(g["a"])(C,n,o,!1,null,null,null)),z=w.exports,O=a("2699"),D=a("a40a"),I=a("4e2b");a("6cc5"),a("5717");s["a"].config.productionTip=!1,s["a"].component("l-map",O["a"]),s["a"].component("l-tile-layer",D["a"]),s["a"].component("l-marker",I["a"]),new s["a"]({render:function(t){return t(z)}}).$mount("#app")},5717:function(t,e,a){},"85ec":function(t,e,a){},a6b6:function(t,e,a){}});
//# sourceMappingURL=app.ddbb6f1c.js.map