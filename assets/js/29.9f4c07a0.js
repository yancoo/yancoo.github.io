(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{324:function(s,t,a){"use strict";a.r(t);var e=a(14),l=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mac挂载ntfs-u盘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac挂载ntfs-u盘"}},[s._v("#")]),s._v(" Mac挂载NTFS U盘")]),s._v(" "),t("ul",[t("li",[s._v("安装 MacFUSE 软件"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("brew tap gromgit/homebrew-fuse\nbrew install --cask macfuse\nbrew install gromgit/fuse/ntfs-3g-mac\n")])])])]),s._v(" "),t("li",[s._v("查看磁盘的挂载点"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("# 比如/dev/disk4s1\ndiskutil list\n")])])])]),s._v(" "),t("li",[s._v("重新挂载"),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mkdir ~/ntfs\nsudo umount /dev/disk4s1\nsudo ntfs-3g /dev/disk4s1 ~/ntfs -o local -o allow_other -o auto_xattr -o volname=XXX\n# volname=XXX 在Finder中可见\n")])])])]),s._v(" "),t("li",[s._v("后记\n"),t("ul",[t("li",[s._v("效率很低，写几十兆的文件需要20分钟（USB3.2 64G U盘）")]),s._v(" "),t("li",[s._v("换软件BuhoNTFS，2G文件需要6分钟（USB3.0 1T机械移动硬盘），需要收费，好在提供单人免费 6B76C-34510-38639-85515-CFE7 1220041986@qq.com")]),s._v(" "),t("li",[s._v("最好（非windows启动盘）U盘重新格式化成exFAT使用")])])])])])}),[],!1,null,null,null);t.default=l.exports}}]);