(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{262:function(r,a,t){},294:function(r,a,t){"use strict";t(262)},308:function(r,a,t){"use strict";t.r(a);var o={name:"MatrixFormulaOperatorShow",props:["last","formula","operator"],methods:{showBrackets(r,a){return!!a&&(a.length>1||1==a.length&&"formula"===r.type&&r.value.deep>0&&1===this.formula.operators.length)}}},e=(t(294),t(14)),s=Object(e.a)(o,(function(){var r=this,a=r._self._c;return a("div",{staticClass:"operator"},["base"===r.operator.type?a("div",{staticClass:"base-value"},[r._v("\n        "+r._s(r.operator.value)+"\n    ")]):a("div",{staticClass:"sub-operator"},[r.showBrackets(r.operator,r.operator.value.operators)?a("div",[r._v("(")]):r._e(),r._v(" "),r._l(r.operator.value.operators,(function(t,o){return[a("MatrixFormulaOperatorShow",{attrs:{last:o===r.operator.value.operators.length-1,formula:r.operator.value,operator:t}})]})),r._v(" "),0===r.operator.value.operators.length?a("div",[r._v("...")]):r._e(),r._v(" "),r.showBrackets(r.operator,r.operator.value.operators)?a("div",[r._v(")")]):r._e()],2),r._v(" "),"inverse"===r.formula.alg?a("div",{staticClass:"right-up-corner"},[r._v("-1")]):r._e(),r._v(" "),"transpose"===r.formula.alg?a("div",{staticClass:"right-up-corner"},[r._v("T")]):r._e(),r._v(" "),"multiply"!==r.formula.alg||r.last?r._e():a("div",{staticClass:"multiply"},[r._v("✖️")])])}),[],!1,null,"0a2cec88",null);a.default=s.exports}}]);