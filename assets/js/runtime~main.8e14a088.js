(()=>{"use strict";var e,a,f,b,c,d={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var f=t[e]={exports:{}};return d[e].call(f.exports,f,f.exports,r),f.exports}r.m=d,e=[],r.O=(a,f,b,c)=>{if(!f){var d=1/0;for(i=0;i<e.length;i++){f=e[i][0],b=e[i][1],c=e[i][2];for(var t=!0,o=0;o<f.length;o++)(!1&c||d>=c)&&Object.keys(r.O).every((e=>r.O[e](f[o])))?f.splice(o--,1):(t=!1,c<d&&(d=c));if(t){e.splice(i--,1);var n=b();void 0!==n&&(a=n)}}return a}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[f,b,c]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,b){if(1&b&&(e=this(e)),8&b)return e;if("object"==typeof e&&e){if(4&b&&e.__esModule)return e;if(16&b&&"function"==typeof e.then)return e}var c=Object.create(null);r.r(c);var d={};a=a||[null,f({}),f([]),f(f)];for(var t=2&b&&e;"object"==typeof t&&!~a.indexOf(t);t=f(t))Object.getOwnPropertyNames(t).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,r.d(c,d),c},r.d=(e,a)=>{for(var f in a)r.o(a,f)&&!r.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,f)=>(r.f[f](e,a),a)),[])),r.u=e=>"assets/js/"+({71:"9cae5962",96:"fe210aea",106:"632d0ef1",274:"998d107e",538:"8a894f7b",544:"70de1c07",561:"54a9c2bb",786:"bc32b9c5",842:"1b67d0f3",881:"6bf0f114",888:"28bd9d7a",921:"e3b00369",1137:"ee513c31",1227:"37c719d6",1235:"a7456010",1271:"b59b8cf7",1288:"9ba56b79",1315:"68dcf780",1347:"48b7ca01",1363:"7fa695a7",1387:"aba90f67",1401:"d5f89569",1408:"ddce1156",1454:"b261517a",1481:"5ec46d54",1500:"d96727fd",1502:"7f76a12e",1554:"09bc817a",1624:"5db6705b",1651:"bd173b27",1691:"90aedb84",1779:"112763a5",1903:"acecf23e",2041:"0630e3af",2138:"1a4e3797",2142:"1ec3ce74",2150:"4d877b09",2515:"7eff0f1a",2590:"939f23de",2614:"3d6cf458",2634:"c4f5d8e4",2711:"9e4087bc",2761:"1f227c78",2838:"25003e4f",2897:"8aacd032",2901:"80bfa96b",3034:"c92fe796",3121:"20d769d8",3222:"b8af02bf",3229:"f9208490",3249:"ccc49370",3356:"c224274c",3408:"b4030b4d",3482:"0b185270",3485:"03e95fdf",3549:"5c30ba71",4072:"6c179ac5",4176:"5b209502",4597:"94782d2d",4598:"015d9d66",4794:"81739261",4813:"6875c492",4822:"5e1194df",4846:"6549b2b5",4897:"45f4020c",4921:"138e0e15",4924:"f4fea690",5147:"2e23a845",5220:"522a92e3",5341:"9f709603",5365:"cd6cf5b7",5376:"fda0af90",5415:"9efd8a4a",5479:"299beccc",5512:"c943a24a",5556:"cce09ffa",5562:"1fabe0bd",5579:"09a8bfdb",5738:"e641ee58",5742:"aba21aa0",5745:"5f74c797",5885:"fb02bab9",5889:"915a111c",5936:"5d1a7e8b",5949:"2d25ac87",5958:"44e37655",5968:"5e069031",5971:"cf7588c6",5993:"49b64d14",6003:"318608aa",6061:"1f391b9e",6168:"ce98a713",6261:"53a3e6dc",6509:"345ef4f9",6692:"7d09a242",6711:"84e198a2",6795:"be236901",6810:"9f640ee8",6838:"059e36ab",6840:"83732ada",6866:"842a7beb",6877:"7c110bd0",6891:"65524f4d",6977:"d6535278",7098:"a7bd4aaa",7146:"229f7513",7222:"12b076f3",7225:"acf4709b",7238:"b0535000",7295:"ac6a717f",7472:"814f3328",7564:"75936cdf",7613:"60d0076e",7643:"a6aa9e1f",7715:"80447496",7754:"32987299",7796:"8eb2df80",7800:"6d85920a",7855:"1ca2b1db",7957:"8bdabb45",7967:"e157395a",7978:"edaea366",7989:"b4bbde8e",8026:"99c26446",8117:"afe5e22f",8141:"86ba2311",8161:"06ed4e86",8209:"01a85c17",8258:"0c06159a",8270:"bf9d09b6",8320:"9060e84a",8382:"d5ab79da",8401:"17896441",8415:"7385c97b",8420:"8ee2fdd1",8599:"a8f610c9",8741:"56786013",8760:"8f6f5e4c",8773:"9c171e5c",8843:"d1becb09",8924:"76096a15",8943:"bb17976f",9048:"a94703ab",9057:"0092d9fd",9305:"03af419f",9381:"e1a437f7",9417:"ea743fb4",9551:"c7deb2e0",9616:"41756ce8",9647:"5e95c892",9664:"4c678320",9819:"ee8c27e3",9858:"36994c47",9954:"0e7f53a8",9987:"70006292",9993:"12df3b9e"}[e]||e)+"."+{71:"6f1b4cd9",96:"406a6fa8",106:"9d29e6a9",274:"4faf72c2",489:"ac3cadbd",538:"d31d077d",544:"688dbdf1",561:"a5fc91c6",786:"1ca984fe",842:"bed24664",881:"a229cdbe",888:"e72839c3",921:"98f4970c",1137:"d4c4b7f6",1227:"582ed92e",1235:"74d83d6f",1271:"ba0c714d",1288:"36b841ac",1315:"3b503859",1347:"8fe0d4cb",1363:"5a33e873",1387:"4d0374aa",1401:"3baa4f9f",1408:"f3d5098e",1454:"5d8cd9b4",1481:"43cca5d1",1500:"2dea97a9",1502:"ad92cdfd",1554:"a9273c21",1624:"d393eb54",1651:"aa1f323f",1691:"247bbfbd",1779:"2f24865d",1903:"53c450d7",2041:"7a61a9e7",2138:"61ec089a",2142:"b84695a8",2150:"f8eec807",2237:"1ce5baec",2515:"643ee9af",2590:"387e89c4",2614:"b7ab5c25",2634:"3fad96fa",2711:"ab04f1e2",2761:"d2480871",2838:"59bac8d0",2897:"1b11a5ab",2901:"066c58a5",3034:"0970780e",3121:"11611dbf",3222:"e7886f70",3229:"a08976fa",3242:"11ffffac",3249:"e8ad5b4a",3356:"19986ce1",3408:"4b66c6e6",3482:"72d28bf6",3485:"cf0c8b4d",3549:"a40f75cf",4072:"b3b3746d",4176:"161faee0",4597:"6eef689a",4598:"34c94e9d",4794:"18ea6210",4813:"bf1091d0",4822:"9e10b364",4846:"70fda637",4897:"1a6e377c",4921:"6968fe73",4924:"e1a14afe",5147:"07fda77e",5220:"64176dde",5341:"acaf4f9a",5365:"e2bfcd36",5376:"cb7232d3",5415:"728189d3",5479:"d7102637",5512:"0eede3bf",5556:"48b6c270",5562:"e9b4a360",5579:"896da601",5738:"a9f6c0fa",5741:"55f3755f",5742:"ae728298",5745:"a86bcbac",5885:"5149ef5e",5889:"f1abb281",5936:"f672e604",5949:"b3b1b4be",5958:"96dc4b6a",5968:"74320e42",5971:"297d3fa6",5993:"24c07fd2",6003:"a32bb04d",6061:"8a1cb8cc",6168:"527dfda6",6256:"56a54a96",6261:"4219249c",6509:"74c1b3ae",6692:"d0c4b57c",6711:"5bf44a42",6795:"74427c00",6810:"d0829498",6838:"09c1ae89",6840:"fe68602a",6866:"c12d6aad",6877:"8c1947b4",6891:"9611da09",6977:"63d26a33",7098:"ee6e1e0c",7146:"516ab320",7222:"2f2479ae",7225:"e7f62216",7238:"da506a6f",7295:"e9d17e1f",7472:"0981bb33",7564:"6e145da8",7613:"9649a50e",7643:"331d4367",7715:"50615375",7754:"93c9ec65",7796:"b753f579",7800:"85b4a41c",7855:"72291f78",7957:"1a5ededd",7967:"0c2892fe",7978:"e58187a3",7989:"fc711263",8026:"1baf958b",8117:"8f557d8f",8141:"4345c39d",8161:"a92ca837",8209:"e98d57be",8258:"b875faf9",8270:"fca940cb",8320:"69153841",8382:"d6487253",8401:"7de64484",8415:"941ed6c8",8420:"9ae6e7df",8498:"3c040e2b",8599:"6edf27e3",8741:"45204dfa",8760:"93d7d4c9",8773:"a8e92d57",8843:"45505c94",8924:"4b443b98",8943:"652198dc",9048:"bcb3ecfd",9057:"5ce6af10",9305:"d3efac70",9381:"a1a369c7",9417:"32fcc24b",9551:"d01fa519",9616:"12f3327b",9647:"f5aa597e",9664:"39e506b4",9819:"d66b5a73",9858:"24c1c1cf",9954:"a7772943",9987:"46bb53ad",9993:"596e423d"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),b={},c="codec-wiki:",r.l=(e,a,f,d)=>{if(b[e])b[e].push(a);else{var t,o;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==c+f){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",c+f),t.src=e),b[e]=[a];var l=(a,f)=>{t.onerror=t.onload=null,clearTimeout(s);var c=b[e];if(delete b[e],t.parentNode&&t.parentNode.removeChild(t),c&&c.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",r.gca=function(e){return e={17896441:"8401",32987299:"7754",56786013:"8741",70006292:"9987",80447496:"7715",81739261:"4794","9cae5962":"71",fe210aea:"96","632d0ef1":"106","998d107e":"274","8a894f7b":"538","70de1c07":"544","54a9c2bb":"561",bc32b9c5:"786","1b67d0f3":"842","6bf0f114":"881","28bd9d7a":"888",e3b00369:"921",ee513c31:"1137","37c719d6":"1227",a7456010:"1235",b59b8cf7:"1271","9ba56b79":"1288","68dcf780":"1315","48b7ca01":"1347","7fa695a7":"1363",aba90f67:"1387",d5f89569:"1401",ddce1156:"1408",b261517a:"1454","5ec46d54":"1481",d96727fd:"1500","7f76a12e":"1502","09bc817a":"1554","5db6705b":"1624",bd173b27:"1651","90aedb84":"1691","112763a5":"1779",acecf23e:"1903","0630e3af":"2041","1a4e3797":"2138","1ec3ce74":"2142","4d877b09":"2150","7eff0f1a":"2515","939f23de":"2590","3d6cf458":"2614",c4f5d8e4:"2634","9e4087bc":"2711","1f227c78":"2761","25003e4f":"2838","8aacd032":"2897","80bfa96b":"2901",c92fe796:"3034","20d769d8":"3121",b8af02bf:"3222",f9208490:"3229",ccc49370:"3249",c224274c:"3356",b4030b4d:"3408","0b185270":"3482","03e95fdf":"3485","5c30ba71":"3549","6c179ac5":"4072","5b209502":"4176","94782d2d":"4597","015d9d66":"4598","6875c492":"4813","5e1194df":"4822","6549b2b5":"4846","45f4020c":"4897","138e0e15":"4921",f4fea690:"4924","2e23a845":"5147","522a92e3":"5220","9f709603":"5341",cd6cf5b7:"5365",fda0af90:"5376","9efd8a4a":"5415","299beccc":"5479",c943a24a:"5512",cce09ffa:"5556","1fabe0bd":"5562","09a8bfdb":"5579",e641ee58:"5738",aba21aa0:"5742","5f74c797":"5745",fb02bab9:"5885","915a111c":"5889","5d1a7e8b":"5936","2d25ac87":"5949","44e37655":"5958","5e069031":"5968",cf7588c6:"5971","49b64d14":"5993","318608aa":"6003","1f391b9e":"6061",ce98a713:"6168","53a3e6dc":"6261","345ef4f9":"6509","7d09a242":"6692","84e198a2":"6711",be236901:"6795","9f640ee8":"6810","059e36ab":"6838","83732ada":"6840","842a7beb":"6866","7c110bd0":"6877","65524f4d":"6891",d6535278:"6977",a7bd4aaa:"7098","229f7513":"7146","12b076f3":"7222",acf4709b:"7225",b0535000:"7238",ac6a717f:"7295","814f3328":"7472","75936cdf":"7564","60d0076e":"7613",a6aa9e1f:"7643","8eb2df80":"7796","6d85920a":"7800","1ca2b1db":"7855","8bdabb45":"7957",e157395a:"7967",edaea366:"7978",b4bbde8e:"7989","99c26446":"8026",afe5e22f:"8117","86ba2311":"8141","06ed4e86":"8161","01a85c17":"8209","0c06159a":"8258",bf9d09b6:"8270","9060e84a":"8320",d5ab79da:"8382","7385c97b":"8415","8ee2fdd1":"8420",a8f610c9:"8599","8f6f5e4c":"8760","9c171e5c":"8773",d1becb09:"8843","76096a15":"8924",bb17976f:"8943",a94703ab:"9048","0092d9fd":"9057","03af419f":"9305",e1a437f7:"9381",ea743fb4:"9417",c7deb2e0:"9551","41756ce8":"9616","5e95c892":"9647","4c678320":"9664",ee8c27e3:"9819","36994c47":"9858","0e7f53a8":"9954","12df3b9e":"9993"}[e]||e,r.p+r.u(e)},(()=>{var e={5354:0,1869:0};r.f.j=(a,f)=>{var b=r.o(e,a)?e[a]:void 0;if(0!==b)if(b)f.push(b[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var c=new Promise(((f,c)=>b=e[a]=[f,c]));f.push(b[2]=c);var d=r.p+r.u(a),t=new Error;r.l(d,(f=>{if(r.o(e,a)&&(0!==(b=e[a])&&(e[a]=void 0),b)){var c=f&&("load"===f.type?"missing":f.type),d=f&&f.target&&f.target.src;t.message="Loading chunk "+a+" failed.\n("+c+": "+d+")",t.name="ChunkLoadError",t.type=c,t.request=d,b[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,f)=>{var b,c,d=f[0],t=f[1],o=f[2],n=0;if(d.some((a=>0!==e[a]))){for(b in t)r.o(t,b)&&(r.m[b]=t[b]);if(o)var i=o(r)}for(a&&a(f);n<d.length;n++)c=d[n],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(i)},f=self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();