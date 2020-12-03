(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b3289"],{"26d3":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Settings"},[n("h1",[e._v("Set user info")]),n("GeneralForm"),n("MedicalConditions"),n("Age")],1)},o=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.show?n("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[n("b-form-group",{attrs:{id:"input-group-1",label:"Email address:","label-for":"input-1",description:"We'll never share your email with anyone else."}},[n("b-form-input",{attrs:{id:"input-1",type:"email",required:"",placeholder:"Enter email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),n("b-form-group",{attrs:{id:"input-group-2",label:"Your Name:","label-for":"input-2"}},[n("b-form-input",{attrs:{id:"input-2",required:"",placeholder:"Enter name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),n("b-form-group",{attrs:{id:"input-group-5",label:"Age:","label-for":"input-5"}},[n("b-form-input",{attrs:{id:"input-5",required:"",placeholder:"Enter age"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),n("b-form-group",{attrs:{id:"input-group-6",label:"Job:","label-for":"input-6"}},[n("b-form-input",{attrs:{id:"input-6",required:"",placeholder:"Enter job"},model:{value:e.form.job,callback:function(t){e.$set(e.form,"job",t)},expression:"form.job"}})],1),n("b-form-group",{attrs:{id:"input-group-7",label:"Pre-existing Medical Conditions"}},[n("b-form-checkbox-group",{attrs:{id:"checkboxes-7"},model:{value:e.form.medical,callback:function(t){e.$set(e.form,"medical",t)},expression:"form.medical"}},[n("b-form-checkbox",{attrs:{value:"cancer"}},[e._v("Cancer")]),n("b-form-checkbox",{attrs:{value:"kidney"}},[e._v("Chronic Kidney Disease")]),n("b-form-checkbox",{attrs:{value:"COPD"}},[e._v("COPD")]),n("b-form-checkbox",{attrs:{value:"heart"}},[e._v("Heart Condition(s)")]),n("b-form-checkbox",{attrs:{value:"immunocompromised"}},[e._v("Immunocompromised")]),n("b-form-checkbox",{attrs:{value:"obese"}},[e._v("Obese")]),n("b-form-checkbox",{attrs:{value:"sickle"}},[e._v("Sickle Cell Disease")]),n("b-form-checkbox",{attrs:{value:"smoker"}},[e._v("Smoker")]),n("b-form-checkbox",{attrs:{value:"diabetes"}},[e._v("Type 2 Diabetes")])],1)],1),n("b-form-group",{attrs:{id:"input-group-3",label:"Primary Location:","label-for":"input-3"}},[n("b-form-select",{attrs:{id:"input-3",options:e.pLocations,required:""},model:{value:e.form.pLocation,callback:function(t){e.$set(e.form,"pLocation",t)},expression:"form.pLocation"}})],1),n("b-form-group",{attrs:{id:"input-group-4"}},[n("b-form-checkbox-group",{attrs:{id:"checkboxes-4"},model:{value:e.form.checked,callback:function(t){e.$set(e.form,"checked",t)},expression:"form.checked"}},[n("b-form-checkbox",{attrs:{value:"asympomatic"}},[e._v("I currently do not have COVID19 symptoms.")]),n("b-form-checkbox",{attrs:{value:"symptomatic"}},[e._v("I currently DO have COVID19 symptoms.")])],1)],1),n("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:e.randomValue}},[e._v("Submit")]),n("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")])],1):e._e(),n("b-card",{staticClass:"mt-3",attrs:{header:"Form Data Result"}},[n("pre",{staticClass:"m-0"},[e._v(e._s(e.form))])]),n("div",{attrs:{id:"mapContainer"}}),e._v(' L.map("mapContainer").setView([37.7749, -122.4194], 13); ')],1)},a=[],l=(n("b0c0"),{name:"GeneralForm",data:function(){return{form:{email:"",name:"",pLocation:null,checked:[]},pLocations:[{text:"Select One",value:null},"Home","Work","Inconsistent","Not Sure"],show:!0,value:45,max:100}},methods:{onSubmit:function(e){e.preventDefault(),alert(JSON.stringify(this.form))},onReset:function(e){var t=this;e.preventDefault(),this.form.email="",this.form.name="",this.form.pLocation=null,this.form.checked=[],this.show=!1,this.$nextTick((function(){t.show=!0}))},randomValue:function(){this.value=Math.random()*this.max}}}),c=l,s=n("2877"),u=Object(s["a"])(c,r,a,!1,null,null,null),d=u.exports,m=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",[n("h2",[e._v("Do you have any of the following health conditions?")]),n("input",{attrs:{type:"checkbox",id:"condition1"}}),n("label",{attrs:{for:"condition1"}},[e._v(" I have Cancer")]),n("br"),n("input",{attrs:{type:"checkbox",id:"condition2"}}),n("label",{attrs:{for:"condition2"}},[e._v(" I have Chronic Kidney Disease")]),n("br"),n("input",{attrs:{type:"checkbox",id:"condition3"}}),n("label",{attrs:{for:"condition3"}},[e._v(" I have COPD")]),n("br"),n("input",{attrs:{type:"checkbox",id:"condition4"}}),n("label",{attrs:{for:"condition4"}},[e._v(" I have Heart Condition(s)")]),n("br"),n("input",{attrs:{type:"checkbox",id:"condition5"}}),n("label",{attrs:{for:"condition5"}},[e._v(" I am Immunocompromised")]),n("br"),n("input",{attrs:{type:"checkbox",id:"condition6"}}),n("label",{attrs:{for:"condition6"}},[e._v(" I am Obese")]),n("br"),n("input",{attrs:{type:"checkbox",id:"condition7"}}),n("label",{attrs:{for:"condition7"}},[e._v(" I have Sickle Cell Disease")]),n("br"),n("input",{attrs:{type:"checkbox",id:"condition8"}}),n("label",{attrs:{for:"condition8"}},[e._v(" I am a Smoker")]),n("br"),n("input",{attrs:{type:"checkbox",id:"condition9"}}),n("label",{attrs:{for:"condition9"}},[e._v(" I have Type 2 Diabetes")]),n("br")]),n("br"),n("div",{attrs:{id:"bubbles"}})])}],p=(n("4de4"),n("ade3")),b=n("5698"),h={data:function(){return{}},mounted:function(){var e={children:[{Name:"Cancer",Count:6e3,id:"a"},{Name:"Chronic Kidney Disease",Count:9e3,id:"b"},{Name:"COPD",Count:11e3,id:"c"},{Name:"Heart Conditions",Count:13e3,id:"d"},Object(p["a"])({Name:"Immunocompromised",Count:11e3,id:"fff"},"id","e"),{Name:"Obesity",Count:7e3,id:"f"},{Name:"Sickle Cell Disease",Count:9e3,id:"g"},{Name:"Smoking",Count:7e3,id:"h"},{Name:"Type 2 Diabetes",Count:8e3,id:"i"}]},t=600,n=b["c"](b["d"]),i=b["b"](e).size([t+20,t+20]).padding(5),o=b["e"]("#bubbles").append("svg").attr("width",t+300).attr("height",t).attr("class","bubble"),r=b["a"](e).sum((function(e){return e.Count})),a=o.selectAll(".node").data(i(r).descendants()).enter().filter((function(e){return!e.children})).append("g").attr("class","node").attr("transform",(function(e){return"translate("+e.x+","+e.y+")"}));function l(e){b["e"]("#rad-value").text(e-20),b["e"]("#nRadius").property("value",e),o.selectAll("circle").attr("r",e)}function c(){b["e"]("#condition1").property("checked")?b["e"]("#Cancer").style("fill","orange"):b["e"]("#Cancer").style("fill",(function(e){return n(0)}))}function s(){b["e"]("#condition2").property("checked")?b["e"]("[id='Chronic Kidney Disease']").style("fill","orange"):b["e"]("[id='Chronic Kidney Disease']").style("fill",(function(e){return n(1)}))}function u(){b["e"]("#condition3").property("checked")?b["e"]("#COPD").style("fill","orange"):b["e"]("#COPD").style("fill",(function(e){return n(2)}))}function d(){b["e"]("#condition4").property("checked")?b["e"]("[id='Heart Conditions']").style("fill","orange"):b["e"]("[id='Heart Conditions']").style("fill",(function(e){return n(3)}))}function m(){b["e"]("#condition5").property("checked")?b["e"]("#Immunocompromised").style("fill","orange"):b["e"]("#Immunocompromised").style("fill",(function(e){return n(4)}))}function f(){b["e"]("#condition6").property("checked")?b["e"]("[id='Obesity']").style("fill","orange"):b["e"]("#Obesity").style("fill",(function(e){return n(5)}))}function h(){b["e"]("#condition7").property("checked")?b["e"]("[id='Sickle Cell Disease']").style("fill","orange"):b["e"]("[id='Sickle Cell Disease']").style("fill",(function(e){return n(6)}))}function v(){b["e"]("#condition8").property("checked")?b["e"]("#Smoking").style("fill","orange"):b["e"]("#Smoking").style("fill",(function(e){return n(7)}))}function y(){b["e"]("#condition9").property("checked")?b["e"]("[id='Type 2 Diabetes']").style("fill","orange"):b["e"]("[id='Type 2 Diabetes']").style("fill",(function(e){return n(8)}))}a.append("title").text((function(e){return e.data.Name})),a.append("circle").attr("r",(function(e){return e.r})).style("fill",(function(e,t){return n(t)})).attr("id",(function(e){return e.data.Name})),a.append("text").attr("dy",".2em").style("text-anchor","middle").attr("fill","white").text((function(e){return e.data.Name})).attr("font-size",(function(e){return e.r/5})),b["e"](self.frameElement).style("height",t+"px"),b["e"]("#nRadius").on("input",(function(){l(+this.value)})),b["e"]("#condition1").on("change",c),c(),b["e"]("#condition2").on("change",s),s(),b["e"]("#condition3").on("change",u),c(),b["e"]("#condition4").on("change",d),s(),b["e"]("#condition5").on("change",m),c(),b["e"]("#condition6").on("change",f),s(),b["e"]("#condition7").on("change",h),c(),b["e"]("#condition8").on("change",v),s(),b["e"]("#condition9").on("change",y),c()},name:"Dashboard"},v=h,y=Object(s["a"])(v,m,f,!1,null,"e2a31710",null),g=y.exports,k=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",[e._v("How old are you?")]),n("p",[n("label",{staticStyle:{display:"inline-block",width:"240px","text-align":"right"},attrs:{for:"radius"}},[e._v(" Age = "),n("span",{attrs:{id:"radvalue"}},[e._v("…")])]),n("input",{attrs:{type:"range",min:"20",max:"125",id:"radius"}})]),n("div",{attrs:{id:"age_circle"}}),n("br")])}],_=(n("96cf"),n("1da1")),C=n("3f4e"),D={data:function(){return{posts:"",value:""}},created:function(){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,n=[],t.next=4,C["a"].getPosts();case 4:for(n=t.sent,i=0;i<n.length;i++)n[i].email==e.$auth.user.email&&(e.posts=n[i],console.log("forms age is",e.posts.forms.age),e.value=e.posts.forms.age,console.log("page age is",e.value));t.next=10;break;case 8:t.prev=8,t.t0=t["catch"](0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))()},mounted:function(){var e=600,t=300,n=b["e"]("#age_circle").append("svg").attr("width",e).attr("height",t);function i(e){b["e"]("#radvalue").text(e-20),b["e"]("#radius").property("value",e),n.selectAll("circle").attr("r",e),e<65&&n.selectAll("circle").style("fill","green"),e>64&&e<85&&n.selectAll("circle").style("fill","yellow"),e>=85&&e<=94&&n.selectAll("circle").style("fill","orange"),e>=95&&n.selectAll("circle").style("fill","red").attr("dy",".2em").style("text-anchor","middle").attr("fill","white").append("text").text("High Risk")}function o(){radius<=64&&n.selectAll("circle").style("fill","green"),radius>=65&&radius<=84&&n.selectAll("circle").style("fill","yellow"),radius>=85&&radius<=94&&n.selectAll("circle").style("fill","orange"),radius>=95?n.selectAll("circle").style("fill","red").attr("dy",".2em").style("text-anchor","middle").attr("fill","white").append("text").text("High Risk"):n.selectAll("circle").style("fill","gray")}n.append("circle").attr("cx",300).attr("cy",150).style("fill","gray").attr("r",120),b["e"]("#radius").on("input",(function(){i(+this.value)})),i(60),o()},name:"MaskWearing"},w=D,O=Object(s["a"])(w,k,x,!1,null,"53b63f30",null),S=O.exports,I={name:"Settings",components:{GeneralForm:d,MedicalConditions:g,Age:S}},A=I,N=Object(s["a"])(A,i,o,!1,null,null,null);t["default"]=N.exports}}]);
//# sourceMappingURL=chunk-2d0b3289.aa432453.js.map