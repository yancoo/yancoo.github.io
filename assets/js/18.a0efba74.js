(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{315:function(a,e,s){"use strict";s.r(e);var t=s(14),r=Object(t.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"jwt"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jwt"}},[a._v("#")]),a._v(" JWT")]),a._v(" "),e("codec-jwt"),a._v(" "),e("h1",{attrs:{id:"使用-openssl-生成-rsa-ecc-公私钥"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-openssl-生成-rsa-ecc-公私钥"}},[a._v("#")]),a._v(" 使用 OpenSSL 生成 RSA/ECC 公私钥")]),a._v(" "),e("p",[a._v("RS256 使用 RSA 算法进行签名，可通过如下命令生成 RSA 密钥：")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 1. 生成 2048 位（不是 256 位）的 RSA 密钥")]),a._v("\nopenssl genrsa "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-out")]),a._v(" rsa-private-key.pem "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("2048")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 2. 通过密钥生成公钥")]),a._v("\nopenssl rsa "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-in")]),a._v(" rsa-private-key.pem "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pubout")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-out")]),a._v(" rsa-public-key.pem\n")])])]),e("p",[a._v("ES256 使用 ECDSA 算法进行签名，该算法使用 ECC 密钥：")]),a._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 1. 生成 ec 算法的私钥，使用 prime256v1 曲线（NIST P-256 标准），密钥长度 256 位。（强度大于 2048 位的 RSA 密钥）")]),a._v("\nopenssl ecparam "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-genkey")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-name")]),a._v(" prime256v1 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-out")]),a._v(" ecc-private-key.pem\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 2. 通过密钥生成公钥")]),a._v("\nopenssl ec "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-in")]),a._v(" ecc-private-key.pem "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pubout")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-out")]),a._v(" ecc-public-key.pem\n")])])])],1)}),[],!1,null,null,null);e.default=r.exports}}]);