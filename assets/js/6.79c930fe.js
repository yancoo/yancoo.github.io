(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{241:function(e,t,a){"use strict";(function(e){t.a={name:"JWT",data:()=>({before:"",header:"",payload:"",errorTip:""}),watch:{before:function(e){this.before&&this.onDecode()}},methods:{onTest(){this.before="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbiIsInNjb3BlIjpbImNsaWVudHNpZGUiXSwiaXNzIjoieWFuQHdvbmRlcnMiLCJpZCI6MiwiZXhwIjoxNjYxNzYwMTA0LCJqdGkiOiIwZmNiYmNhYS03MDU1LTQwZmEtYjkxYy0zNmQyNDc3MzE1OTkiLCJhdXRob3JpdGllcyI6W10sImNsaWVudF9pZCI6ImFkbWluIn0.PiN3qKOd0R_jeFywmK-NbiobJWudobqp31VSH_r6ESp2OjHvFL4T8MVIdToO6dW-z4jJ6IpRCFhZdCpSxg9Qhm8VKzEO8j4m5ZGMx7ZUpeCG4A9_kUFjPvNBylDeH4YfxqAlkw4GuEdvdnAPE6Dxpcv1w9k9uxZKBMVfLd8MsquqZWr4ojkZG2iRPXp3FkaanVHY-XKpUF373zcaHBCpCZZ6fVBsIWwg7lApHe_qLtOEg6x2LSJggstToKngKPxmCo0_8jVDrJUcsx269CsZAtJq3n8tbqU7gVYYdgbJEvV5nxK-iPfDzuH2uBVi4lJRzbNGt3XZzLKqy9N0v81eWQ"},onDecode(){if(!this.before)return this.errorTip="请输入JWT加密串",void this.clearDecode();this.errorTip="";var t=this.before.split(".");if(3!=t.length)return this.errorTip="JWT格式错误，未包含两个分段.点号",void this.clearDecode();console.log("decode");var a=new e(t[0],"base64").toString();try{JSON.parse(a)}catch{return this.errorTip="JWT格式错误，HEADER段非正常JSON",void this.clearDecode()}var r=new e(t[1],"base64").toString();try{JSON.parse(r)}catch{return this.errorTip="JWT格式错误，PAYLOAD段非正常JSON",void this.clearDecode()}this.header=a,this.payload=r},clearDecode(){this.header="",this.payload=""},onClear(){this.before="",this.header="",this.payload="",this.errorTip=""}}}}).call(this,a(256).Buffer)},260:function(e,t,a){},292:function(e,t,a){"use strict";a(260)},313:function(e,t,a){"use strict";a.r(t);var r=a(241).a,i=(a(292),a(14)),s=Object(i.a)(r,(function(){var e=this,t=e._self._c;return t("div",[e._m(0),e._v(" "),t("div",{staticClass:"desc"},[e._v('signature = base64( RS256(base64(header)+"."+base64(payload), publicKey, privateKey) )')]),e._v(" "),e._m(1),e._v(" "),t("div",{staticClass:"container-panel"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.before,expression:"before"}],staticClass:"op-textarea",attrs:{rows:"25",placeholder:"请输入JWT加密串"},domProps:{value:e.before},on:{input:function(t){t.target.composing||(e.before=t.target.value)}}}),e._v(" "),t("div",{staticClass:"decode-panel"},[t("div",[e._v("HEADER")]),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.header,expression:"header"}],staticClass:"decode-textarea",attrs:{rows:"5",placeholder:"解码自动填入HEADER段"},domProps:{value:e.header},on:{input:function(t){t.target.composing||(e.header=t.target.value)}}}),e._v(" "),t("div",[e._v("PAYLOAD")]),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.payload,expression:"payload"}],staticClass:"decode-textarea",attrs:{rows:"20",placeholder:"解码自动填入PAYLOAD段"},domProps:{value:e.payload},on:{input:function(t){t.target.composing||(e.payload=t.target.value)}}})])]),e._v(" "),e.errorTip?t("div",{staticClass:"error-tip"},[e._v(e._s(e.errorTip))]):e._e(),e._v(" "),t("button",{staticClass:"op-button test-button",on:{click:e.onTest}},[e._v(" 填入测试JWT ")]),e._v(" "),t("button",{staticClass:"clear-button",on:{click:e.onClear}},[e._v(" clear ")])])}),[function(){var e=this._self._c;return e("div",{staticClass:"desc"},[e("b",[this._v("base64(header).base64(payload).signature")])])},function(){var e=this._self._c;return e("div",{staticClass:"desc"},[this._v("常见JWT签名算法："),e("b",[this._v("HS256")]),this._v("(HMAC-SHA256，SecretKey签名验证，对称加密，分布式多方验证不采用)、"),e("b",[this._v("RS256")]),this._v("(RSA-SHA256，私钥签名公钥验证，oauth2+spring security jwt采用)、"),e("b",[this._v("ES256")]),this._v("(ECDSA-SHA256，私钥签名公钥验证，比RS256长度更短、速度/强度相当)")])}],!1,null,"46136b78",null);t.default=s.exports}}]);