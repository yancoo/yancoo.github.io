(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{264:function(e,t,r){},265:function(e,t,r){},266:function(e,t,r){},296:function(e,t,r){"use strict";r(264)},297:function(e,t,r){"use strict";r(265)},298:function(e,t,r){"use strict";r(266)},303:function(e,t,r){"use strict";r.r(t);r(92),r(93);function a(e){var t=e.length,r=e[0].length;let a=new Array(r).fill(0).map(e=>new Array(t).fill(0));for(let s=0;s<r;s++)for(let r=0;r<t;r++)a[s][r]=e[r][s];return a}function s(e){if(e.length!==e[0].length)throw new Error("非方针不能求行列式");let t=e.length,r=0;if(t>3)for(let a=0;a<t;a++){let o=new Array(t-1).fill(0).map(e=>new Array(t-1).fill(0));for(let r=0;r<t-1;r++)for(let s=0;s<t-1;s++)o[r][s]=s<a?e[r+1][s]:e[r+1][s+1];r+=e[0][a]*Math.pow(-1,0+a)*s(o)}else 3===t?r=e[0][0]*e[1][1]*e[2][2]+e[0][1]*e[1][2]*e[2][0]+e[0][2]*e[1][0]*e[2][1]-e[0][2]*e[1][1]*e[2][0]-e[0][1]*e[1][0]*e[2][2]-e[0][0]*e[1][2]*e[2][1]:2===t?r=e[0][0]*e[1][1]-e[0][1]*e[1][0]:1===t&&(r=e[0][0]);return r}var o={matrix2String:function(e){var t="";return e.forEach(e=>{t+=e.join(" "),t+="\n"}),t},string2Matrix:function(e){var t=e.split("\n"),r=0,a=[];return t.forEach(e=>{var t=e.trim();if(t){for(t=t.replace(/\t/g," ");-1!==t.indexOf("  ");)t=t.replace(/  /g," ");t=t.split(" ");var s=[];if(t.forEach(e=>{s.push(Number(e))}),a.push(s),0===r)r=t.length;else if(r!==t.length)throw new Error("矩阵行长度不一致")}}),a},transpose:a,inverse:function(e){if(e[0].length!==e.length)throw new Error("非方阵不能求逆");let t=s(e);if(0===t)throw new Error("矩阵不可逆");let r=function(e){if(e[0].length!==e.length)throw new Error("非方阵不能求伴随矩阵");let t=e.length,r=new Array(t).fill(0).map(e=>new Array(t).fill(0));for(let a=0;a<t;a++)for(let o=0;o<t;o++){let t=[];for(let r=0;r<e.length;r++)if(r!==a){let a=[];for(let t=0;t<e.length;t++)t!==o&&a.push(e[r][t]);t.push(a)}r[a][o]=Math.pow(-1,a+o)*s(t)}return a(r)}(e);for(let e=0;e<r.length;e++)for(let a=0;a<r.length;a++)r[e][a]/=t;return r},multiply:function(e,t){if(e[0].length!==t.length)throw new Error("左阵列数不等于右阵行数，不能相乘");let r=e.length,a=e[0].length,s=t[0].length,o=new Array(r).fill(0).map(e=>new Array(s).fill(0));for(let l=0;l<r;l++)for(let r=0;r<s;r++)for(let s=0;s<a;s++)o[l][r]+=e[l][s]*t[s][r];return o}},l={name:"MatrixFormula",props:["matrixes","formula"],data:()=>({algOptions:[{value:"ready",name:"选择算法"},{value:"transpose",name:"转置"},{value:"inverse",name:"求逆"},{value:"multiply",name:"相乘"}]}),mounted(){this.formula.alg||(this.formula.alg="ready",this.formula.operators=[])},methods:{onAlgChange(e){var t=e.target.selectedIndex,r=this.algOptions[t].value,a=[];"ready"===r||("multiply"===r?(a.push({type:"base",value:this.matrixes.length>0?this.matrixes[0].key:""}),a.push({type:"base",value:this.matrixes.length>1?this.matrixes[1].key:this.matrixes.length>0?this.matrixes[0].key:""})):a.push({type:"base",value:this.matrixes.length>0?this.matrixes[0].key:""})),this.formula.alg=r,this.formula.operators=a,console.log("select alg",r,", operators",JSON.stringify(a))},onOperatorChange(e,t){var r=e.target.selectedIndex,a=this.formula.operators[t];r===this.matrixes.length?(a.type="formula",a.value={alg:"ready",operators:[],deep:(this.formula.deep||0)+1}):(a.type="base",a.value=this.matrixes[r].key),console.log("change operator",JSON.stringify(a))},deleteOperator(e,t){this.formula.operators.splice(t,1)},addMultiplyOperator(){this.formula.operators.push({type:"base",value:this.matrixes.length>0?this.matrixes[0].key:""})}}},i=(r(296),r(14)),n=Object(i.a)(l,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"formula"},[t("div",[t("select",{on:{change:e.onAlgChange}},e._l(e.algOptions,(function(r,a){return t("option",{domProps:{selected:r.value===e.formula.alg}},[e._v(e._s(r.name)+"\n            ")])})),0)]),e._v(" "),e._l(e.formula.operators,(function(r,a){return t("div",{staticClass:"operator"},[t("div",{staticClass:"operator-select"},[t("select",{on:{change:function(t){return e.onOperatorChange(t,a)}}},[e._l(e.matrixes,(function(a,s){return t("option",{domProps:{selected:r.value===a.key}},[e._v(e._s(a.key)+"\n                ")])})),e._v(" "),t("option",{domProps:{selected:"formula"===r.type}},[e._v("计算")])],2),e._v(" "),"formula"===r.type?t("MatrixFormula",{staticClass:"sub-formula",attrs:{matrixes:e.matrixes,formula:r.value}}):e._e(),e._v(" "),e.formula.operators.length>2?t("div",{staticClass:"operator-delete",on:{click:function(t){return e.deleteOperator(t,a)}}},[e._v("➖\n            ")]):e._e()],1),e._v(" "),"multiply"===e.formula.alg?[a!==e.formula.operators.length-1?t("div",[e._v("✖️")]):t("div",{staticClass:"operator-multiply-add",on:{click:e.addMultiplyOperator}},[e._v("✖️")])]:e._e()],2)}))],2)}),[],!1,null,"76137dd8",null).exports,u={name:"MatrixFormulaOperatorShow",props:["last","formula","operator"],methods:{showBrackets(e,t){return!!t&&(t.length>1||1==t.length&&"formula"===e.type&&e.value.deep>0&&1===this.formula.operators.length)}}},p=(r(297),{name:"Base64",components:{MatrixFormula:n,MatrixFormulaOperatorShow:Object(i.a)(u,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"operator"},["base"===e.operator.type?t("div",{staticClass:"base-value"},[e._v("\n        "+e._s(e.operator.value)+"\n    ")]):t("div",{staticClass:"sub-operator"},[e.showBrackets(e.operator,e.operator.value.operators)?t("div",[e._v("(")]):e._e(),e._v(" "),e._l(e.operator.value.operators,(function(r,a){return[t("MatrixFormulaOperatorShow",{attrs:{last:a===e.operator.value.operators.length-1,formula:e.operator.value,operator:r}})]})),e._v(" "),0===e.operator.value.operators.length?t("div",[e._v("...")]):e._e(),e._v(" "),e.showBrackets(e.operator,e.operator.value.operators)?t("div",[e._v(")")]):e._e()],2),e._v(" "),"inverse"===e.formula.alg?t("div",{staticClass:"right-up-corner"},[e._v("-1")]):e._e(),e._v(" "),"transpose"===e.formula.alg?t("div",{staticClass:"right-up-corner"},[e._v("T")]):e._e(),e._v(" "),"multiply"!==e.formula.alg||e.last?e._e():t("div",{staticClass:"multiply"},[e._v("✖️")])])}),[],!1,null,"6cc0299c",null).exports},data:()=>({transposeBefore:"",transposeAfter:"",transposeErrorTip:"",inverseBefore:"",inverseAfter:"",inverseErrorTip:"",defaultKeySet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ",matrixes:[{key:"A",value:""},{key:"B",value:""},{key:"C",value:""}],formula:{alg:"ready",operators:[]},formulaResult:"",formulaJsonVisible:!1,customErrorTip:""}),watch:{formula:{handler(e,t){this.formulaResult="",this.customErrorTip=""},deep:!0,immediate:!0}},computed:{defaultKeys:function(){return this.defaultKeySet.split("")},formulaJsonString:function(){return JSON.stringify(this.formula)}},mounted(){},methods:{onTest(){this.transposeBefore="1 2 3\n4 5 6\n7 8 9",this.clickTranspose(),this.inverseBefore="1 2 1\n4 4 1\n7 7 1",this.clickInverse()},onClear(){this.transposeAfter="",this.transposeBefore="",this.transposeErrorTip="",this.inverseAfter="",this.inverseBefore="",this.inverseErrorTip=""},clickTranspose(){if(this.transposeErrorTip="",this.transposeBefore)try{var e=o.string2Matrix(this.transposeBefore),t=o.transpose(e);this.transposeAfter=o.matrix2String(t)}catch(e){this.transposeErrorTip=e.message,this.transposeAfter=""}else this.transposeErrorTip="请输入需转置的矩阵"},clickInverse(){if(this.inverseErrorTip="",this.inverseBefore)try{var e=o.string2Matrix(this.inverseBefore),t=o.inverse(e);this.inverseAfter=o.matrix2String(t)}catch(e){this.inverseErrorTip=e.message,this.inverseAfter=""}else this.inverseErrorTip="请输入需转置的矩阵"},addCustomMatrix(){try{this.matrixes.push({key:this.getRandomKey(),value:""})}catch(e){alert(e.message)}},deleteAllCustomMatrix(){this.matrixes=[]},deleteCustomMatrix(e,t){console.log(e,t),this.matrixes.splice(t,1)},getRandomKey(){var e=null;if(this.defaultKeys.forEach(t=>{for(var r=!1,a=0;a<this.matrixes.length;a++)if(this.matrixes[a].key===t){r=!0;break}r||e||(e=t)}),!e)throw new Error("默认key已分配完毕");return e},resetFormula(){this.formula={alg:"ready",operators:[]},this.formulaResult="",this.customErrorTip=""},onCustomTest(){this.matrixes=[{key:"X",value:"1 0 1 0 0 1\n1 1.1 0.6 1.21 0.66 0.36\n1 1.8 0 3.24 0 0\n1 2.95 0 8.7025 0 0\n1 3.4 0.2 11.56 0.68 0.04\n1 1.8 1.7 3.24 3.06 2.89\n1 0.7 1.3 0.49 0.91 1.69\n1 0.2 2 0.04 0.4 4\n1 0.85 3.35 0.7225 2.8475 11.2225\n1 1.65 3.15 2.7225 5.1975 9.9225\n1 2.65 3.1 7.0225 8.215 9.61\n1 3.65 2.55 13.3225 9.3075 6.5025"},{key:"Z",value:"27.6\n38.4\n24\n24.7\n32\n55.5\n40.4\n37.5\n31\n31.7\n53\n44.9"}],this.formula={alg:"multiply",operators:[{type:"formula",value:{alg:"inverse",operators:[{type:"formula",value:{alg:"multiply",operators:[{type:"formula",value:{alg:"transpose",operators:[{type:"base",value:"X"}],deep:3}},{type:"base",value:"X"}],deep:2}}],deep:1}},{type:"formula",value:{alg:"transpose",operators:[{type:"base",value:"X"}],deep:1}},{type:"base",value:"Z"}]},setTimeout(()=>{this.onCustomFormulaExecute()},1)},onCustomFormulaExecute(){this.customErrorTip="";var e={};try{this.matrixes.forEach(t=>{try{e[t.key]=o.string2Matrix(t.value)}catch(e){throw new Error(t.key+e.message)}})}catch(e){return void(this.customErrorTip=e.message)}try{var t=this.formulaExecute(this.formula,e);this.formulaResult=o.matrix2String(t)}catch(e){return console.log("execute error",JSON.stringify(this.formula),e),void(this.customErrorTip=e.message)}},formulaExecute(e,t){if("ready"===e.alg)throw new Error("请选择算法");for(var r=[],a=0;a<e.operators.length;a++){var s=e.operators[a],l=null;if("base"===s.type){if(!(l=t[s.value]))throw new Error("未找到矩阵"+s.value)}else if(!(l=this.formulaExecute(s.value,t)))throw new Error("无处理结果"+s.value.alg);try{if("transpose"===e.alg)return o.transpose(l);if("inverse"===e.alg)return o.inverse(l);if("multiply"!==e.alg)throw new Error("不支持的算法"+e.alg);r.push(l)}catch(e){throw new Error(("formula"===s.type?JSON.stringify(s.value)+" ":s.value)+e.message)}}var i=null;return r.forEach(e=>{i=i?o.multiply(i,e):e}),i},onCustomClear(){this.deleteAllCustomMatrix(),this.resetFormula()}}}),v=(r(298),Object(i.a)(p,(function(){var e=this,t=e._self._c;return t("div",[e._m(0),e._v(" "),t("div",{staticClass:"title"},[e._v("基础运算")]),e._v(" "),t("div",{staticClass:"op-area"},[t("div",{staticClass:"container-panel"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.transposeBefore,expression:"transposeBefore"}],staticClass:"op-textarea",attrs:{rows:"5",placeholder:"请输入矩阵"},domProps:{value:e.transposeBefore},on:{input:function(t){t.target.composing||(e.transposeBefore=t.target.value)}}}),e._v(" "),t("div",{staticClass:"op-panel"},[t("button",{staticClass:"op-button",on:{click:e.clickTranspose}},[e._v(" 转 置 ")])]),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.transposeAfter,expression:"transposeAfter"}],staticClass:"op-textarea",attrs:{placeholder:"转置后矩阵"},domProps:{value:e.transposeAfter},on:{input:function(t){t.target.composing||(e.transposeAfter=t.target.value)}}})]),e._v(" "),e.transposeErrorTip?t("div",{staticClass:"error-tip"},[e._v(e._s(e.transposeErrorTip))]):e._e()]),e._v(" "),t("div",{staticClass:"op-area"},[t("div",{staticClass:"container-panel"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.inverseBefore,expression:"inverseBefore"}],staticClass:"op-textarea",attrs:{rows:"5",placeholder:"请输入矩阵"},domProps:{value:e.inverseBefore},on:{input:function(t){t.target.composing||(e.inverseBefore=t.target.value)}}}),e._v(" "),t("div",{staticClass:"op-panel"},[t("button",{staticClass:"op-button",on:{click:e.clickInverse}},[e._v(" 求 逆 ")])]),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.inverseAfter,expression:"inverseAfter"}],staticClass:"op-textarea",attrs:{placeholder:"逆矩阵"},domProps:{value:e.inverseAfter},on:{input:function(t){t.target.composing||(e.inverseAfter=t.target.value)}}})]),e._v(" "),e.inverseErrorTip?t("div",{staticClass:"error-tip"},[e._v(e._s(e.inverseErrorTip))]):e._e()]),e._v(" "),t("button",{staticClass:"op-button test-button",on:{click:e.onTest}},[e._v(" 填入测试串 ")]),e._v(" "),t("button",{staticClass:"clear-button",on:{click:e.onClear}},[e._v(" 清 除 ")]),e._v(" "),t("div",{staticClass:"title"},[e._v("自定义运算")]),e._v(" "),t("div",[t("div",{staticClass:"custom-sub-title"},[e._v("\n            定义矩阵：\n            "),t("button",{staticClass:"custom-add-btn",on:{click:e.addCustomMatrix}},[e._v("+ 增加")]),e._v(" "),t("button",{staticClass:"custom-add-btn",on:{click:e.onCustomTest}},[e._v(" 测试填入 ")])]),e._v(" "),t("div",{staticClass:"custom-define"},e._l(e.matrixes,(function(r,a){return t("div",{staticClass:"custom-item"},[t("div",{staticClass:"custom-key"},[t("input",{directives:[{name:"model",rawName:"v-model",value:r.key,expression:"item.key"}],staticClass:"custom-key-input",domProps:{value:r.key},on:{input:function(t){t.target.composing||e.$set(r,"key",t.target.value)}}}),e._v(" "),t("button",{staticClass:"custom-key-delete-btn",on:{click:function(t){return e.deleteCustomMatrix(r,a)}}},[e._v("x")])]),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:r.value,expression:"item.value"}],staticClass:"custom-textarea",attrs:{rows:"5",placeholder:"请定义矩阵"},domProps:{value:r.value},on:{input:function(t){t.target.composing||e.$set(r,"value",t.target.value)}}})])})),0)]),e._v(" "),e.matrixes.length>0?t("div",[t("div",{staticClass:"custom-sub-title"},[e._v("\n            运算公式：\n            "),"ready"!==e.formula.alg?t("button",{staticClass:"custom-add-btn",on:{click:e.resetFormula}},[e._v("重置")]):e._e(),e._v(" "),"ready"!==e.formula.alg?t("button",{staticClass:"custom-add-btn custom-formula-json-btn",on:{click:function(t){e.formulaJsonVisible=!e.formulaJsonVisible}}},[e._v(e._s(e.formulaJsonVisible?"隐藏":"显示")+"公式JSON")]):e._e()]),e._v(" "),"ready"!==e.formula.alg&&e.formulaJsonVisible?t("div",{staticClass:"custom-formula-json"},[e._v(e._s(e.formulaJsonString))]):e._e(),e._v(" "),t("div",{staticClass:"custom-formula"},[t("MatrixFormula",{attrs:{matrixes:e.matrixes,formula:e.formula}})],1),e._v(" "),"ready"!==e.formula.alg?t("div",{staticClass:"custom-formula-execute"},[t("div",{staticClass:"custom-formula-show"},[e._l(e.formula.operators,(function(r,a){return[t("MatrixFormulaOperatorShow",{attrs:{last:a===e.formula.operators.length-1,formula:e.formula,operator:r}})]}))],2),e._v(" "),e.formulaResult?[t("div",{},[e._v("🟰")]),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.formulaResult,expression:"formulaResult"}],staticClass:"custom-formula-textarea",attrs:{rows:"5",placeholder:"运算结果"},domProps:{value:e.formulaResult},on:{input:function(t){t.target.composing||(e.formulaResult=t.target.value)}}})]:e._e()],2):e._e(),e._v(" "),e.customErrorTip?t("div",{staticClass:"error-tip"},[e._v(e._s(e.customErrorTip))]):e._e(),e._v(" "),t("button",{staticClass:"op-button test-button",on:{click:e.onCustomFormulaExecute}},[e._v(" 开始运算 ")]),e._v(" "),t("button",{staticClass:"clear-button",on:{click:e.onCustomClear}},[e._v(" 清除定义 ")])]):e._e()])}),[function(){var e=this._self._c;return e("div",{staticClass:"tip"},[this._v("\n        （矩阵实现"),e("a",{attrs:{target:"_blank",href:"https://blog.csdn.net/XY1790026787/article/details/106144101"}},[this._v("参考链接")]),this._v("）\n    ")])}],!1,null,"48dc0c04",null));t.default=v.exports}}]);