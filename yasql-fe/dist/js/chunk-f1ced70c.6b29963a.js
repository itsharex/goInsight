(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f1ced70c"],{"4ad3":function(e,t,r){"use strict";r.d(t,"s",(function(){return s})),r.d(t,"j",(function(){return n})),r.d(t,"l",(function(){return o})),r.d(t,"k",(function(){return l})),r.d(t,"t",(function(){return i})),r.d(t,"c",(function(){return u})),r.d(t,"n",(function(){return c})),r.d(t,"m",(function(){return d})),r.d(t,"v",(function(){return m})),r.d(t,"i",(function(){return f})),r.d(t,"q",(function(){return h})),r.d(t,"o",(function(){return p})),r.d(t,"p",(function(){return b})),r.d(t,"h",(function(){return v})),r.d(t,"g",(function(){return g})),r.d(t,"r",(function(){return y})),r.d(t,"b",(function(){return k})),r.d(t,"a",(function(){return _})),r.d(t,"f",(function(){return q})),r.d(t,"u",(function(){return T})),r.d(t,"d",(function(){return F})),r.d(t,"w",(function(){return S})),r.d(t,"e",(function(){return w})),r.d(t,"x",(function(){return E}));r("99af");var a=r("b775"),s=a["b"].request({url:"/users/list",method:"get"}),n=a["b"].request({url:"/sqlorders/envs",method:"get"}),o=a["b"].request({url:"/sqlorders/versions/get",method:"get"}),l=function(e){return a["b"].request({url:"/sqlorders/schemas",method:"get",params:e})},i=function(e){return a["b"].request({url:"/sqlorders/incep/syntaxcheck",method:"post",data:e})},u=function(e){return a["b"].request({url:"/sqlorders/commit",method:"post",data:e})},c=function(e){return a["b"].request({url:"/sqlorders/list",method:"get",params:e})},d=function(e){return a["b"].request({url:"/sqlorders/detail/".concat(e),method:"get"})},m=function(e){return a["b"].request({url:"/sqlorders/op/".concat(e.action,"/").concat(e.pk),method:"put",data:e})},f=function(e){return a["b"].request({url:"/sqlorders/tasks/generate",method:"post",data:e})},h=function(e){return a["b"].request({url:"/sqlorders/tasks/preview/".concat(e.task_id),method:"get",params:e})},p=function(e){return a["b"].request({url:"/sqlorders/tasks/get/".concat(e.order_id),method:"get",params:e})},b=function(e){return a["b"].request({url:"/sqlorders/tasks/list/".concat(e.task_id),method:"get",params:e})},v=function(e){return a["b"].request({url:"/sqlorders/tasks/execute/single",method:"post",data:e})},g=function(e){return a["b"].request({url:"/sqlorders/tasks/execute/multi",method:"post",data:e})},y=function(e){return a["b"].request({url:"/sqlorders/tasks/result/".concat(e),method:"get"})},k=function(e){return a["b"].request({url:"/sqlorders/tasks/throttle",method:"post",data:e})},_=function(e){return a["b"].request({url:"/sqlorders/hook",method:"post",data:e})},q=function(e){return a["b"].request({url:"/sqlorders/export/download/".concat(e),method:"get",responseType:"blob"})},T=function(e){return a["b"].request({url:"/sqlorders/versions/list",method:"get",params:e})},F=function(e){return a["b"].request({url:"/sqlorders/versions/create",method:"post",data:e})},S=function(e){return a["b"].request({url:"/sqlorders/versions/update/".concat(e.key),method:"put",data:e})},w=function(e){return a["b"].request({url:"/sqlorders/versions/delete/".concat(e),method:"delete",data:e})},E=function(e){return a["b"].request({url:"/sqlorders/versions/view/".concat(e),method:"get",params:e})}},7125:function(e,t,r){"use strict";r.d(t,"d",(function(){return a})),r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"e",(function(){return l}));var a=[{key:1,value:"mysql"},{key:2,value:"tidb"}],s=["立即执行","上线执行"],n=[{key:"xlsx",value:"xlsx"},{key:"csv",value:"csv"}],o=[{key:0,value:"待审核",color:"warning"},{key:1,value:"已驳回",color:"danger"},{key:2,value:"已批准",color:"primary"},{key:3,value:"处理中",color:"warning"},{key:4,value:"已完成",color:"success"},{key:5,value:"已关闭",color:"danger"},{key:6,value:"已复核",color:"info"},{key:7,value:"已勾住",color:"default"}],l=[{key:0,value:"未执行"},{key:1,value:"已完成"},{key:2,value:"处理中"},{key:3,value:"失败"},{key:4,value:"异常"}]},"76a8":function(e,t,r){"use strict";var a=r("d6c4"),s=r.n(a);s.a},c37b:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("a-card",{attrs:{title:e.cardTitle}},[r("a-row",[r("a-col",{attrs:{span:16,push:8}},[r("div",{staticStyle:{"margin-bottom":"5px"}},[r("a-button",{staticStyle:{"margin-right":"6px"},attrs:{type:"dashed",icon:"thunderbolt"},on:{click:function(t){return e.formatSQL()}}},[e._v("格式化")]),r("a-button",{staticStyle:{"margin-right":"6px"},attrs:{type:"dashed",icon:"safety",disabled:e.checkBtnStatus},on:{click:function(t){return e.syntaxCheck()}}},[e._v("语法检查")])],1),r("codemirror",{ref:"myCm",attrs:{options:e.cmOptions},on:{ready:e.onCmReady},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1),r("a-col",{attrs:{span:8,pull:16}},[r("el-form",{ref:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"100px",size:"small"}},[r("el-form-item",{key:"bindTitle",attrs:{label:"标题",prop:"title"}},[r("el-input",{staticStyle:{width:"95%"},attrs:{placeholder:"请输入标题"},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),r("el-form-item",{attrs:{label:"需求",prop:"demand"}},[r("el-input",{staticStyle:{width:"95%"},attrs:{type:"textarea",rows:2,placeholder:"请输入需求描述"},model:{value:e.ruleForm.demand,callback:function(t){e.$set(e.ruleForm,"demand",t)},expression:"ruleForm.demand"}})],1),r("el-form-item",{key:"bindIsHide"},[r("template",{slot:"label"},[r("span",{attrs:{stryle:"position: relative"}},[r("span",[e._v("隐藏数据")]),r("el-tooltip",{attrs:{placement:"right-end",effect:"light"}},[r("div",{attrs:{slot:"content"},slot:"content"},[r("span",[e._v(" 开启后 "),r("br"),e._v("仅工单的提交人、审核人、复核人和DBA "),r("br"),e._v("可以查看工单内容 ")])]),r("i",{staticClass:"el-icon-question table-msg"})])],1)]),r("a-switch",{staticStyle:{"margin-bottom":"1px"},attrs:{defaultChecked:""},on:{change:e.onMyChange}})],2),e.isShow?r("el-form-item",{key:"bindVersion",attrs:{label:"版本"}},[r("el-select",{staticStyle:{width:"95%"},attrs:{placeholder:"请选择上线版本",value:""},model:{value:e.ruleForm.version,callback:function(t){e.$set(e.ruleForm,"version",t)},expression:"ruleForm.version"}},e._l(e.versions,(function(e){return r("el-option",{key:e.id,attrs:{label:e.version,value:e.id}})})),1)],1):e._e(),r("el-form-item",{key:"bindRemark",attrs:{label:"备注",prop:"remark"}},[r("el-select",{staticStyle:{width:"95%"},attrs:{placeholder:"请选择合适的备注",value:""},model:{value:e.ruleForm.remark,callback:function(t){e.$set(e.ruleForm,"remark",t)},expression:"ruleForm.remark"}},e._l(e.remarks,(function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})})),1)],1),r("el-form-item",{key:"bindRdsCategory",attrs:{label:"DB类别",prop:"rds_category"}},[r("el-select",{staticStyle:{width:"95%"},attrs:{placeholder:"请选择数据库类型",value:""},on:{change:e.changeRdsCategory},model:{value:e.ruleForm.rds_category,callback:function(t){e.$set(e.ruleForm,"rds_category",t)},expression:"ruleForm.rds_category"}},e._l(e.rds_category,(function(e){return r("el-option",{key:e.key,attrs:{label:e.value,value:e.key,disabled:e.disabled}})})),1)],1),r("el-form-item",{key:"bindEnvId",attrs:{label:"环境",prop:"env_id"}},[r("el-select",{staticStyle:{width:"95%"},attrs:{placeholder:"请选择工单环境",value:""},on:{change:e.changeEnvs},model:{value:e.ruleForm.env_id,callback:function(t){e.$set(e.ruleForm,"env_id",t)},expression:"ruleForm.env_id"}},e._l(e.envs,(function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id,disabled:e.disabled}})})),1)],1),r("el-form-item",{key:"bindDatabase",attrs:{label:"库名",prop:"database"}},[r("el-select",{staticStyle:{width:"95%"},attrs:{clearable:"",filterable:"",placeholder:"请选择数据库",value:""},model:{value:e.ruleForm.database,callback:function(t){e.$set(e.ruleForm,"database",t)},expression:"ruleForm.database"}},e._l(e.schemas,(function(e){return r("el-option",{key:e.id,attrs:{label:e.comment+"-"+e.schema,value:e.cid+"__"+e.schema}})})),1)],1),e.isShow?e._e():r("el-form-item",{key:"bindFileFormart",attrs:{label:"文件格式",prop:"file_format"}},[r("el-select",{staticStyle:{width:"95%"},attrs:{clearable:"",filterable:"",placeholder:"请选择文件格式",value:""},model:{value:e.ruleForm.file_format,callback:function(t){e.$set(e.ruleForm,"file_format",t)},expression:"ruleForm.file_format"}},e._l(e.format,(function(e){return r("el-option",{key:e.key,attrs:{label:e.value,value:e.key}})})),1)],1),r("el-form-item",{key:"bindAuditor",attrs:{label:"审核人",prop:"auditor"}},[r("el-select",{staticStyle:{width:"95%"},attrs:{multiple:"","multiple-limit":3,clearable:"",filterable:"",placeholder:"请选择工单审核人",value:""},model:{value:e.ruleForm.auditor,callback:function(t){e.$set(e.ruleForm,"auditor",t)},expression:"ruleForm.auditor"}},e._l(e.users,(function(e){return r("el-option",{key:e.uid,attrs:{label:e.displayname+"["+e.username+"]",value:e.username}})})),1)],1),r("el-form-item",{key:"bindReviewer",attrs:{label:"复核人",prop:"reviewer"}},[r("el-select",{staticStyle:{width:"95%"},attrs:{multiple:"","multiple-limit":3,clearable:"",filterable:"",placeholder:"请选择工单复核人",value:""},model:{value:e.ruleForm.reviewer,callback:function(t){e.$set(e.ruleForm,"reviewer",t)},expression:"ruleForm.reviewer"}},e._l(e.users,(function(e){return r("el-option",{key:e.uid,attrs:{label:e.displayname+"["+e.username+"]",value:e.username}})})),1)],1),r("el-form-item",{key:"bindCc",attrs:{label:"抄送人"}},[r("el-select",{staticStyle:{width:"95%"},attrs:{multiple:"","multiple-limit":5,clearable:"",filterable:"",placeholder:"请选择工单抄送人",value:""},model:{value:e.ruleForm.email_cc,callback:function(t){e.$set(e.ruleForm,"email_cc",t)},expression:"ruleForm.email_cc"}},e._l(e.users,(function(e){return r("el-option",{key:e.uid,attrs:{label:e.displayname+"["+e.username+"]",value:e.username}})})),1)],1),r("el-form-item",{staticStyle:{"text-align":"left"}},[r("el-button",{attrs:{type:"primary",loading:e.isDisabledCommit},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v("提交")]),r("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)],1)],1),e.visibleAuditResult?r("a-card",[r("a-row",[r("a-table",{attrs:{columns:e.table.columns,dataSource:e.table.data,pagination:e.pagination,loading:e.tableLoading,rowClassName:e.setRowClass,rowKey:function(e){return e.order_id},size:"middle"},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"error_level",fn:function(t){return r("span",{},[r("span",0===t?[e._v("成功")]:1===t?[e._v("警告")]:[e._v("错误")])])}}],null,!1,2424698565)})],1)],1):e._e(),r("div",[r("a-modal",{attrs:{title:"TiDB注意事项",width:"55%"},on:{ok:e.handleTiDBOk},model:{value:e.tidbVisible,callback:function(t){e.tidbVisible=t},expression:"tidbVisible"}},[r("div",{staticStyle:{"font-size":"12px"}},[r("el-divider",{attrs:{"content-position":"left"}},[e._v("DML事务")]),r("p",[e._v(" TiDB单条DML语句最大支持的事务为3W, 若是更新（DELETE/UPDATE）超过了3W条记录，需要拆分为多条SQL语句，每条SQL后面加上LIMIT 20000。 ")]),r("h3",[e._v("例子：")]),r("h4",[e._v("原始SQL：")]),r("p",[e._v("UPDATE TEST1 SET NAME='XXX' WHERE I_STATUS = 2;")]),r("h4",[e._v("改写为：")]),r("p",[e._v("UPDATE TEST1 SET NAME='XXX' WHERE I_STATUS = 2 LIMIT 20000;")]),r("p",[e._v("UPDATE TEST1 SET NAME='XXX' WHERE I_STATUS = 2 LIMIT 20000;")]),r("el-divider",{attrs:{"content-position":"left"}},[e._v("DML备份")]),r("p",[e._v("TiDB不支持生成回滚语句、TiDB不支持生成回滚语句、TiDB不支持生成回滚语句")]),r("el-divider",{attrs:{"content-position":"left"}},[e._v("DDL语句")]),r("p",[e._v("TiDB的ALTER语句不支持聚合写法，MODIFY/CHANGE/ADD等需要拆分")]),r("h3",[e._v("例子：")]),r("h4",[e._v("原始SQL：")]),r("p",[e._v(" ALTER TABLE TEST1 ADD COL1 CHAR(10) NOT NULL DEFAULT '' COMMENT 'XX',ADD COL2 CHAR(10) NOT NULL DEFAULT '' COMMENT 'XX'; ")]),r("h4",[e._v("改写为：")]),r("p",[e._v("ALTER TABLE TEST1 ADD COL1 CHAR(10) NOT NULL DEFAULT '' COMMENT 'XX';")]),r("p",[e._v("ALTER TABLE TEST1 ADD COL2 CHAR(10) NOT NULL DEFAULT '' COMMENT 'XX';")])],1)])],1)],1)},s=[],n=(r("ac1f"),r("1276"),r("5530")),o=r("7125"),l=r("4ad3"),i=r("db05"),u=r.n(i),c=(r("ffda"),r("31c5"),r("f4ba"),r("9b74"),r("f6b6"),r("832b"),r("991c"),r("9a48"),{data:function(){var e=this,t=function(e,t,r){t.length<1?r(new Error("请至少选择1个审核人")):r()},r=function(e,t,r){t.length<1?r(new Error("请至少选择1个复核人")):r()},a=function(t,r,a){r||a(new Error("请选择工单环境")),e.ruleForm.rds_category?a():a(new Error("请先选择DB类别"))};return{isDisabledCommit:!1,checkBtnStatus:!1,visibleAuditResult:!1,tidbVisible:!1,cardTitle:"",sqltype:"",code:"",schemas:[],users:[],remarks:o["a"],format:o["b"],versions:[],rds_category:o["d"],envs:[],isShow:!0,ruleForm:{title:"",demand:"",version:"",is_hide:"OFF",remark:"",file_format:"csv",rds_category:1,env_id:"",database:"",auditor:[],reviewer:[this.$store.getters.userInfo.username],email_cc:[]},rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"},{min:3,max:64,message:"长度在 3 到 64 个字符",trigger:"blur"}],demand:[{required:!0,message:"请输入需求描述",trigger:"blur"},{min:3,max:256,message:"长度在 3 到 256 个字符",trigger:"blur"}],file_format:[{required:!0,message:"请选择文件格式",trigger:"change"}],remark:[{required:!0,message:"请选择备注",trigger:"change"}],rds_category:[{required:!0,message:"请选择数据库类型",trigger:"change"}],env_id:[{required:!0,validator:a,trigger:"change"}],database:[{required:!0,message:"请选择数据库",trigger:"change"}],auditor:[{required:!0,validator:t,trigger:"change"}],reviewer:[{required:!0,validator:r,trigger:"change"}]},tableLoading:!1,table:{columns:null,data:null},pagination:{current:1,pageSize:10,total:0,pageSizeOptions:["10","20","50"],showSizeChanger:!0},cmOptions:{mode:"text/x-mysql",indentUnit:2,tabSize:2,indentWithTabs:!0,smartIndent:!0,autoRefresh:!0,lineNumbers:!0,matchBrackets:!0,autofocus:!0,keyMap:"sublime",autorefresh:!0,viewportMargin:1/0},auditRules:""}},methods:{onMyChange:function(e){this.ruleForm.is_hide=e?"ON":"OFF"},handleTiDBOk:function(e){this.tidbVisible=!1},getsqltype:function(){var e=this;l["j"].then((function(t){var r=t.data,a=e.$route.path.split("/");e.sqltype=a[a.length-1].toUpperCase(),e.cardTitle="提交".concat(e.sqltype,"工单(每条SQL必须以 ; 结尾)"),e.isShow=!0,"EXPORT"===e.sqltype&&(e.isShow=!1),e.envs=r}))},handleTableChange:function(e){this.pagination.current=e.current,this.pagination.pageSize=e.pageSize},onCmReady:function(e){var t=this.$refs.ruleForm.$el.offsetHeight-30;e.setSize("height","".concat(t,"px")),e.on("keypress",(function(){e.showHint({completeSingle:!1})}))},getReleaseVersionsList:function(){var e=this;l["l"].then((function(t){e.versions=t.data}))},formatSQL:function(){var e=this.codemirror.getValue();this.codemirror.setValue(u.a.format(e,{indent:"  "}))},syntaxCheck:function(){var e=this;this.$message.info("正在执行语法检测，请稍等");var t={rds_category:this.ruleForm.rds_category,database:this.ruleForm.database,sqls:this.codemirror.getValue(),sql_type:this.sqltype};this.$nextTick((function(){document.scrollingElement.scrollTop=document.scrollingElement.scrollHeight})),this.tableLoading=!0,this.checkBtnStatus=!0,this.visibleAuditResult=!0,Object(l["t"])(t).then((function(t){"0000"===t.code?(0===t.data.data.status?e.$message.success(t.message):e.$message.error(t.message),e.table.data=t.data.data.data,e.table.columns=t.data.columns):e.$message.error(t.message),e.tableLoading=!1,e.checkBtnStatus=!1})).catch((function(t){e.$message.error("语法检查失败，错误码: "+t.response.status),e.tableLoading=!1,e.checkBtnStatus=!1}))},setRowClass:function(e){return 0===e.error_level?"row-info":1===e.error_level?"row-warn":2===e.error_level?"row-error":void 0},changeRdsCategory:function(e){2===e&&(this.tidbVisible=!0),this.ruleForm.env_id="",this.ruleForm.database=""},changeEnvs:function(e){var t=this;this.ruleForm.database="";var r={env_id:e,use_type:0,rds_category:this.ruleForm.rds_category};"EXPORT"===this.sqltype&&(r.use_type=1),Object(l["k"])(r).then((function(e){t.schemas=e.data}))},getUsersList:function(){var e=this;l["s"].then((function(t){e.users=t.data}))},submitForm:function(e){var t=this;this.isDisabledCommit=!0,setTimeout((function(){t.$refs[e].validate((function(e){if(!e)return t.isDisabledCommit=!1,!1;var r=t.codemirror.getValue();if(!r)return t.$message.error("请输入要审核的SQL内容"),t.isDisabledCommit=!1,!1;var a=Object(n["a"])({sql_type:t.sqltype,contents:r},t.ruleForm);Object(l["c"])(a).then((function(e){"0000"===e.code?t.$router.push("/sqlorders/list"):(t.isDisabledCommit=!1,t.$message.error(e.message))})).catch((function(e){t.$message.error("提交失败，错误码: "+e.response.status),t.isDisabledCommit=!1}))}))}),500)},resetForm:function(e){this.$refs[e].resetFields(),this.codemirror.setValue("")}},mounted:function(){this.getsqltype(),this.getUsersList(),this.getReleaseVersionsList()},computed:{codemirror:function(){return this.$refs.myCm.codemirror}},watch:{$route:function(){this.getsqltype()}}}),d=c,m=(r("76a8"),r("2877")),f=Object(m["a"])(d,a,s,!1,null,null,null);t["default"]=f.exports},d6c4:function(e,t,r){}}]);