(function(){"use strict";var e={3272:function(e,t,r){r(6992),r(8674),r(9601),r(7727);var n=r(144),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],i=r(5961),o={},l=(0,i.Z)(o,a,s,!1,null,null,null),c=l.exports,u=r(8345),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{staticStyle:{border:"1px solid #eee"}},[r("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[r("el-menu",{attrs:{router:"","unique-opened":"","default-active":e.$route.path}},[r("el-submenu",{attrs:{index:"1"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-message"}),e._v("内容管理")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("物品")]),r("el-menu-item",{attrs:{index:"/items/create"}},[e._v("新建物品")]),r("el-menu-item",{attrs:{index:"/items/list"}},[e._v("物品列表")])],2),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("英雄")]),r("el-menu-item",{attrs:{index:"/heroes/create"}},[e._v("新建英雄")]),r("el-menu-item",{attrs:{index:"/heroes/list"}},[e._v("英雄列表")])],2),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("文章")]),r("el-menu-item",{attrs:{index:"/articles/create"}},[e._v("新建文章")]),r("el-menu-item",{attrs:{index:"/articles/list"}},[e._v("文章列表")])],2)],2),r("el-submenu",{attrs:{index:"2"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-message"}),e._v("运营管理")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("广告位")]),r("el-menu-item",{attrs:{index:"/ads/create"}},[e._v("新建广告位")]),r("el-menu-item",{attrs:{index:"/ads/list"}},[e._v("广告位列表")])],2)],2),r("el-submenu",{attrs:{index:"3"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-message"}),e._v("系统设置")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("分类")]),r("el-menu-item",{attrs:{index:"/categories/create"}},[e._v("新建分类")]),r("el-menu-item",{attrs:{index:"/categories/list"}},[e._v("分类列表")])],2),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("管理员")]),r("el-menu-item",{attrs:{index:"/admin_user/create"}},[e._v("新建管理员")]),r("el-menu-item",{attrs:{index:"/admin_user/list"}},[e._v("管理员列表")])],2)],2)],1)],1),r("el-container",[r("el-header",{staticStyle:{"text-align":"right","font-size":"12px"}},[r("el-dropdown",[r("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px"}}),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",[e._v("查看")]),r("el-dropdown-item",[e._v("新增")]),r("el-dropdown-item",[e._v("删除")])],1)],1),r("span",[e._v("王小虎")])],1),r("el-main",[r("router-view",{key:e.$route.path})],1)],1)],1)},p=[],d=(r(3290),{data:function(){var e={date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"};return{tableData:Array(20).fill(e)}}}),f=d,h=(0,i.Z)(f,m,p,!1,null,null,null),v=h.exports,g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.id?"修改分类":"新建分类"))]),r("el-form",{nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{lable:"上级分类"}},[r("el-select",{model:{value:e.model.parent,callback:function(t){e.$set(e.model,"parent",t)},expression:"model.parent"}},e._l(e.parentsOptions,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{lable:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},b=[],x=r(5199),w=(r(5666),{props:{id:{}},data:function(){return{model:{},parentsOptions:[]}},methods:{save:function(){var e=this;return(0,x.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("rest/categories/".concat(e.id),e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("rest/categories",e.model);case 7:e.$router.push("/categories/list"),e.$message({type:"success",message:"保存成功"});case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return(0,x.Z)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories/".concat(e.id));case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()},getPaarents:function(){var e=this;return(0,x.Z)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories");case 2:r=t.sent,e.parentsOptions=r.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.getPaarents(),this.id&&this.fetch()}}),_=w,k=(0,i.Z)(_,g,b,!1,null,null,null),$=k.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("分类列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"id",width:"220"}}),r("el-table-column",{attrs:{prop:"parent.name",label:"上级分类"}}),r("el-table-column",{attrs:{prop:"name",label:"分类名称"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/categories/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},R=[],Z=(r(8309),{data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return(0,x.Z)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return(0,x.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm('此操作将会删除这一类"'.concat(e.name,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((0,x.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/categories/".concat(e._id));case 2:t.$message({type:"success",message:"删除成功!"}),t.fetch();case 4:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}}),S=Z,C=(0,i.Z)(S,y,R,!1,null,null,null),O=C.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.id?"修改物品":"新建物品"))]),r("el-form",{attrs:{"lable-width":"150px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",{attrs:{label:"图标"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload",headers:e.getAuthheaders(),"show-file-list":!1,"on-success":e.afterUpload}},[e.model.icon?r("img",{staticClass:"avatar",attrs:{src:e.model.icon}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},E=[],z={props:{id:{}},data:function(){return{model:{}}},methods:{afterUpload:function(e){var t=this;return(0,x.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$set(t.model,"icon",e.url);case 1:case"end":return r.stop()}}),r)})))()},save:function(){var e=this;return(0,x.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("rest/items/".concat(e.id),e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("rest/items",e.model);case 7:e.$router.push("/items/list"),e.$message({type:"success",message:"保存成功"});case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return(0,x.Z)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/items/".concat(e.id));case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.id&&this.fetch()}},B=z,A=(0,i.Z)(B,T,E,!1,null,"0b9a9174",null),U=A.exports,P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("物品列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"id",width:"220"}}),r("el-table-column",{attrs:{prop:"name",label:"物品名称"}}),r("el-table-column",{attrs:{prop:"icon",label:"图标"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("img",{staticStyle:{"{height":"3rem}"},attrs:{src:e.row.icon}})]}}])}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/items/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},j=[],D={data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return(0,x.Z)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/items");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return(0,x.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm('此操作将会删除这一类"'.concat(e.name,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((0,x.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/items/".concat(e._id));case 2:t.$message({type:"success",message:"删除成功!"}),t.fetch();case 4:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},L=D,I=(0,i.Z)(L,P,j,!1,null,null,null),M=I.exports,V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.id?"修改英雄":"新建英雄"))]),r("el-form",{attrs:{"lable-width":"150px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-tabs",{attrs:{value:"basic",type:"border-card"}},[r("el-tab-pane",{attrs:{label:"基础信息",name:"basic"}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",{attrs:{label:"称号"}},[r("el-input",{model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),r("el-form-item",{attrs:{label:"头像"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload",headers:e.getAuthheaders(),"show-file-list":!1,"on-success":e.afterUpload}},[e.model.avatar?r("img",{staticClass:"avatar",attrs:{src:e.model.avatar}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"Banner"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload",headers:e.getAuthheaders(),"show-file-list":!1,"on-success":function(t){return e.$set(e.model,"banner",t.url)}}},[e.model.banner?r("img",{staticClass:"banner",attrs:{src:e.model.banner}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"类型"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.categories,callback:function(t){e.$set(e.model,"categories",t)},expression:"model.categories"}},e._l(e.categories,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"难度"}},[r("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.difficult,callback:function(t){e.$set(e.model.scores,"difficult",t)},expression:"model.scores.difficult"}})],1),r("el-form-item",{attrs:{label:"技能"}},[r("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.skills,callback:function(t){e.$set(e.model.scores,"skills",t)},expression:"model.scores.skills"}})],1),r("el-form-item",{attrs:{label:"攻击"}},[r("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.attack,callback:function(t){e.$set(e.model.scores,"attack",t)},expression:"model.scores.attack"}})],1),r("el-form-item",{attrs:{label:"生存"}},[r("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.survive,callback:function(t){e.$set(e.model.scores,"survive",t)},expression:"model.scores.survive"}})],1),r("el-form-item",{attrs:{label:"顺风出装"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.items1,callback:function(t){e.$set(e.model,"items1",t)},expression:"model.items1"}},e._l(e.items,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"逆风出装"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.items2,callback:function(t){e.$set(e.model,"items2",t)},expression:"model.items2"}},e._l(e.items,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"使用技巧"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.model.usageTips,callback:function(t){e.$set(e.model,"usageTips",t)},expression:"model.usageTips"}})],1),r("el-form-item",{attrs:{label:"对抗思路"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.model.battleTips,callback:function(t){e.$set(e.model,"battleTips",t)},expression:"model.battleTips"}})],1),r("el-form-item",{attrs:{label:"团战思路"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.model.teamTips,callback:function(t){e.$set(e.model,"teamTips",t)},expression:"model.teamTips"}})],1)],1),r("el-tab-pane",{attrs:{label:"技能",name:"skills"}},[r("el-button",{attrs:{type:"text"},on:{click:function(t){return e.model.skills.push({})}}},[r("i",{staticClass:"el-icon-plus"}),e._v(" 添加技能")]),r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.skills,(function(t,n){return r("el-col",{key:n,attrs:{md:12}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:t.name,callback:function(r){e.$set(t,"name",r)},expression:"item.name"}})],1),r("el-form-item",{attrs:{label:"图标"},model:{value:t.icon,callback:function(r){e.$set(t,"icon",r)},expression:"item.icon"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload","show-file-list":!1,headers:e.getAuthheaders(),"on-success":function(r){return e.$set(t,"icon",r.url)}}},[t.icon?r("img",{staticClass:"avatar",attrs:{src:t.icon}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"冷却值"}},[r("el-input",{model:{value:t.delay,callback:function(r){e.$set(t,"delay",r)},expression:"item.delay"}})],1),r("el-form-item",{attrs:{label:"消耗"}},[r("el-input",{model:{value:t.cost,callback:function(r){e.$set(t,"cost",r)},expression:"item.cost"}})],1),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.description,callback:function(r){e.$set(t,"description",r)},expression:"item.description"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){return e.model.skills.splice(n,1)}}},[e._v("删除")])],1)],1)})),1)],1),r("el-tab-pane",{attrs:{label:"最佳搭档",name:"partners"}},[r("el-button",{attrs:{type:"text"},on:{click:function(t){return e.model.partners.push({})}}},[r("i",{staticClass:"el-icon-plus"}),e._v(" 添加搭档")]),r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.partners,(function(t,n){return r("el-col",{key:n,attrs:{md:12}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-select",{model:{value:t.hero,callback:function(r){e.$set(t,"hero",r)},expression:"item.hero"}},e._l(e.heros,(function(e){return r("el-option",{key:e._id,attrs:{value:e._id,label:e.name}})})),1)],1),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.description,callback:function(r){e.$set(t,"description",r)},expression:"item.description"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){return e.model.partners.splice(n,1)}}},[e._v("删除")])],1)],1)})),1)],1)],1),r("el-form-item",{staticStyle:{"margin-top":"1rem"}},[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},q=[],F={props:{id:{}},data:function(){return{heros:[],items:[],categories:[],model:{name:"",scores:{difficult:0},skills:[],partners:[]}}},methods:{afterUpload:function(e){var t=this;return(0,x.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$set(t.model,"avatar",e.url);case 1:case"end":return r.stop()}}),r)})))()},save:function(){var e=this;return(0,x.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("rest/heroes/".concat(e.id),e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("rest/heroes",e.model);case 7:e.$router.push("/heroes/list"),e.$message({type:"success",message:"保存成功"});case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return(0,x.Z)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/heroes/".concat(e.id));case 2:r=t.sent,e.model=Object.assign({},e.model,r.data);case 4:case"end":return t.stop()}}),t)})))()},fetchcategories:function(){var e=this;return(0,x.Z)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories");case 2:r=t.sent,e.categories=r.data;case 4:case"end":return t.stop()}}),t)})))()},fetchitems:function(){var e=this;return(0,x.Z)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/items");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},fetchheros:function(){var e=this;return(0,x.Z)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/heros");case 2:r=t.sent,e.heros=r.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.id&&this.fetch(),this.fetchcategories(),this.fetchitems(),this.fetchheros()}},N=F,H=(0,i.Z)(N,V,q,!1,null,"5e905344",null),G=H.exports,J=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("英雄列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"id",width:"220"}}),r("el-table-column",{attrs:{prop:"name",label:"英雄名称"}}),r("el-table-column",{attrs:{prop:"title",label:"英雄称号"}}),r("el-table-column",{attrs:{prop:"avatar",label:"头像"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("img",{staticStyle:{"{height":"2rem}"},attrs:{src:e.row.avatar}})]}}])}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/heroes/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},K=[],Q={data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return(0,x.Z)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/heroes");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return(0,x.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm('此操作将会删除这一类"'.concat(e.name,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((0,x.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/heroes/".concat(e._id));case 2:t.$message({type:"success",message:"删除成功!"}),t.fetch();case 4:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},W=Q,X=(0,i.Z)(W,J,K,!1,null,null,null),Y=X.exports,ee=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.id?"修改文章":"新建文章"))]),r("el-form",{nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{lable:"所属分类"}},[r("el-select",{attrs:{multiple:""},model:{value:e.model.categories,callback:function(t){e.$set(e.model,"categories",t)},expression:"model.categories"}},e._l(e.categories,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"标题"}},[r("el-input",{model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),r("el-form-item",{attrs:{label:"详情"}},[r("vue-editor",{attrs:{useCustomImageHandler:""},on:{"image-added":e.handleImageAdded},model:{value:e.model.body,callback:function(t){e.$set(e.model,"body",t)},expression:"model.body"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},te=[],re=r(2739),ne={components:{VueEditor:re.bR},props:{id:{}},data:function(){return{categories:[],model:{}}},methods:{handleImageAdded:function(e,t,r,n){var a=this;return(0,x.Z)(regeneratorRuntime.mark((function s(){var i,o;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return i=new FormData,i.append("file",e),s.next=4,a.$http.post("upload",i);case 4:o=s.sent,t.insertEmbed(r,"image",o.data.url),n();case 7:case"end":return s.stop()}}),s)})))()},save:function(){var e=this;return(0,x.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("rest/articles/".concat(e.id),e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("rest/articles",e.model);case 7:e.$router.push("/articles/list"),e.$message({type:"success",message:"保存成功"});case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return(0,x.Z)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/articles/".concat(e.id));case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()},fetchcategories:function(){var e=this;return(0,x.Z)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/categories");case 2:r=t.sent,e.categories=r.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.fetchcategories(),this.id&&this.fetch()}},ae=ne,se=(0,i.Z)(ae,ee,te,!1,null,null,null),ie=se.exports,oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("文章列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"id",width:"220"}}),r("el-table-column",{attrs:{prop:"title",label:"文章名称"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/articles/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},le=[],ce={data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return(0,x.Z)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/articles");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return(0,x.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm('此操作将会删除这一类"'.concat(e.title,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((0,x.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/articles/".concat(e._id));case 2:t.$message({type:"success",message:"删除成功!"}),t.fetch();case 4:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},ue=ce,me=(0,i.Z)(ue,oe,le,!1,null,null,null),pe=me.exports,de=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.id?"修改广告位":"新建广告位"))]),r("el-form",{nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",[r("el-button",{on:{click:function(t){return e.model.items.push({})}}},[r("i",{staticClass:"el-icon-plus"}),e._v(" 添加广告位")]),r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.items,(function(t,n){return r("el-col",{key:n,attrs:{md:24}},[r("el-form-item",{attrs:{label:"广告位地址 (URL)"}},[r("el-input",{model:{value:t.url,callback:function(r){e.$set(t,"url",r)},expression:"item.url"}})],1),r("el-form-item",{staticStyle:{margin:"10px"},attrs:{label:"图片"},model:{value:t.img,callback:function(r){e.$set(t,"img",r)},expression:"item.img"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload","show-file-list":!1,headers:e.getAuthheaders(),"on-success":function(r){return e.$set(t,"img",r.url)}}},[t.img?r("img",{staticClass:"avatar",attrs:{src:t.img}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",[r("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){return e.model.items.splice(n,1)}}},[e._v("删除")])],1)],1)})),1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},fe=[],he={props:{id:{}},data:function(){return{model:{items:[]}}},methods:{save:function(){var e=this;return(0,x.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("rest/ads/".concat(e.id),e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("rest/ads",e.model);case 7:e.$router.push("/ads/list"),e.$message({type:"success",message:"保存成功"});case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return(0,x.Z)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/ads/".concat(e.id));case 2:r=t.sent,e.model=Object.assign({},e.model,r.data);case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.id&&this.fetch()}},ve=he,ge=(0,i.Z)(ve,de,fe,!1,null,null,null),be=ge.exports,xe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("分类列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"id",width:"220"}}),r("el-table-column",{attrs:{prop:"name",label:"分类名称"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/ads/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},we=[],_e={data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return(0,x.Z)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/ads");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return(0,x.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm('此操作将会删除这一类"'.concat(e.name,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((0,x.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/ads/".concat(e._id));case 2:t.$message({type:"success",message:"删除成功!"}),t.fetch();case 4:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},ke=_e,$e=(0,i.Z)(ke,xe,we,!1,null,null,null),ye=$e.exports,Re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"about"},[r("h1",[e._v(e._s(e.id?"修改管理员":"新建管理员"))]),r("el-form",{nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"名字"}},[r("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),r("el-form-item",{attrs:{label:"密码"}},[r("el-input",{model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},Ze=[],Se={props:{id:{}},data:function(){return{model:{}}},methods:{save:function(){var e=this;return(0,x.Z)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("rest/admin_user/".concat(e.id),e.model);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("rest/admin_user",e.model);case 7:e.$router.push("/admin_user/list"),e.$message({type:"success",message:"保存成功"});case 9:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return(0,x.Z)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/admin_user/".concat(e.id));case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.id&&this.fetch()}},Ce=Se,Oe=(0,i.Z)(Ce,Re,Ze,!1,null,null,null),Te=Oe.exports,Ee=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("管理员列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"id",width:"220"}}),r("el-table-column",{attrs:{prop:"username",label:"管理员名称"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.$router.push("/admin_user/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"text",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},ze=[],Be={data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return(0,x.Z)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("rest/admin_user");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return(0,x.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm('此操作将会删除这一类"'.concat(e.name,'"'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((0,x.Z)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("rest/admin_user/".concat(e._id));case 2:t.$message({type:"success",message:"删除成功!"}),t.fetch();case 4:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},Ae=Be,Ue=(0,i.Z)(Ae,Ee,ze,!1,null,null,null),Pe=Ue.exports,je=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"logincontiner"},[r("el-card",{staticClass:"logincard",attrs:{header:"请先登录"}},[r("el-form",{nativeOn:{submit:function(t){return t.preventDefault(),e.login(t)}}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),r("el-form-item",{attrs:{label:"密码"}},[r("el-input",{attrs:{type:"password"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("登录")])],1)],1)],1)],1)},De=[],Le={data:function(){return{model:{}}},methods:{login:function(){var e=this;return(0,x.Z)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.post("/login",e.model);case 2:r=t.sent,localStorage.token=r.data.token,e.$router.push("/");case 5:case"end":return t.stop()}}),t)})))()}}},Ie=Le,Me=(0,i.Z)(Ie,je,De,!1,null,null,null),Ve=Me.exports;n.default.use(u.Z);var qe=[{path:"/login",name:"login",component:Ve,meta:{isPublic:!0}},{path:"/",name:"Main",component:v,children:[{path:"/categories/create",component:$},{path:"/categories/list",component:O},{path:"/categories/edit/:id",component:$,props:!0},{path:"/items/create",component:U},{path:"/items/list",component:M},{path:"/items/edit/:id",component:U,props:!0},{path:"/heroes/create",component:G},{path:"/heroes/list",component:Y},{path:"/heroes/edit/:id",component:G,props:!0},{path:"/articles/create",component:ie},{path:"/articles/list",component:pe},{path:"/articles/edit/:id",component:ie,props:!0},{path:"/ads/create",component:be},{path:"/ads/list",component:ye},{path:"/ads/edit/:id",component:be,props:!0},{path:"/admin_user/create",component:Te},{path:"/admin_user/list",component:Pe},{path:"/admin_user/edit/:id",component:Te,props:!0}]}],Fe=new u.Z({routes:qe});Fe.beforeEach((function(e,t,r){if(!e.meta.isPublic&&!localStorage.token)return r("/login");r()}));var Ne=Fe,He=r(4720),Ge=r.n(He);n.default.use(Ge());r(1539);var Je=r(9669),Ke=r.n(Je),Qe=Ke().create({baseURL:{NODE_ENV:"production",BASE_URL:"/admin/"}.VUE_APP_API_URL||"/admin/api"});Qe.interceptors.request.use((function(e){return localStorage.token&&(e.headers.Authorization="Bearer "+localStorage.token),e}),(function(e){return Promise.reject(e)})),Qe.interceptors.response.use((function(e){return e}),(function(e){return e.response.data.message&&(n.default.prototype.$message({type:"error",message:e.response.data.message}),401==e.response.status&&Ne.push("/login")),Promise.reject(e)}));var We=Qe;n.default.config.productionTip=!1,n.default.prototype.$http=We,n.default.mixin({methods:{getAuthheaders:function(){return{Authorization:"Bearer ".concat(localStorage.token||"")}}}}),new n.default({router:Ne,render:function(e){return e(c)}}).$mount("#app")}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,n,a,s){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],a=e[c][1],s=e[c][2];for(var o=!0,l=0;l<n.length;l++)(!1&s||i>=s)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(o=!1,s<i&&(i=s));o&&(e.splice(c--,1),t=a())}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[n,a,s]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,s,i=n[0],o=n[1],l=n[2],c=0;for(a in o)r.o(o,a)&&(r.m[a]=o[a]);for(l&&l(r),t&&t(n);c<i.length;c++)s=i[c],r.o(e,s)&&e[s]&&e[s][0](),e[i[c]]=0;r.O()},n=self["webpackChunkadmin"]=self["webpackChunkadmin"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(3272)}));n=r.O(n)})();
//# sourceMappingURL=app.8f473994.js.map