(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{329:function(s,t,e){"use strict";e.r(t);var a=e(14),n=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"github认证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#github认证"}},[s._v("#")]),s._v(" github认证")]),s._v(" "),t("ul",[t("li",[s._v("本地生成ssh public/private密钥对"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('# github 2022.3.15后不支持rsa sha-1算法密钥，使用ed25519算法生成密钥对\nssh-keygen -t ed25519 -b 4096 -C "1220041986@qq.com"\n# 一直回车；passphrase留空，不然每次git操作都需要输入\n')])])])]),s._v(" "),t("li",[s._v("github.com  Settings > SSH and GPG Keys > New SSH key"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Title: macbook2\nKey type: Authentication Key\nKey: （复制~/.ssh/id_ed25519.pub内容）\n")])])])]),s._v(" "),t("li",[s._v("开发者工具 > 版本管理 > 设置 > 网络与认证"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("认证方式：使用SSH Key（指定密钥）\n公钥文件：/Users/yan/.ssh/id_ed25519.pub\n私钥文件：/Users/yan/.ssh/id_ed25519\n密钥口令：（留空）\n")])])]),s._v("拉取正常即可")])])])}),[],!1,null,null,null);t.default=n.exports}}]);