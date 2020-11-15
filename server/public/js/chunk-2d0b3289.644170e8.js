(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b3289"],{"26d3":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"Settings"},[o("h1",[e._v("Set user info")]),o("GeneralForm")],1)},a=[],n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.show?o("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[o("b-form-group",{attrs:{id:"input-group-1",label:"Email address:","label-for":"input-1",description:"We'll never share your email with anyone else."}},[o("b-form-input",{attrs:{id:"input-1",type:"email",required:"",placeholder:"Enter email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),o("b-form-group",{attrs:{id:"input-group-2",label:"Your Name:","label-for":"input-2"}},[o("b-form-input",{attrs:{id:"input-2",required:"",placeholder:"Enter name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),o("b-form-group",{attrs:{id:"input-group-5",label:"Age:","label-for":"input-5"}},[o("b-form-input",{attrs:{id:"input-5",required:"",placeholder:"Enter age"},model:{value:e.form.age,callback:function(t){e.$set(e.form,"age",t)},expression:"form.age"}})],1),o("b-form-group",{attrs:{id:"input-group-6",label:"Job:","label-for":"input-6"}},[o("b-form-input",{attrs:{id:"input-6",required:"",placeholder:"Enter job"},model:{value:e.form.job,callback:function(t){e.$set(e.form,"job",t)},expression:"form.job"}})],1),o("b-form-group",{attrs:{id:"input-group-7",label:"Pre-existing Medical Conditions"}},[o("b-form-checkbox-group",{attrs:{id:"checkboxes-7"},model:{value:e.form.medical,callback:function(t){e.$set(e.form,"medical",t)},expression:"form.medical"}},[o("b-form-checkbox",{attrs:{value:"cancer"}},[e._v("Cancer")]),o("b-form-checkbox",{attrs:{value:"kidney"}},[e._v("Chronic Kidney Disease")]),o("b-form-checkbox",{attrs:{value:"COPD"}},[e._v("COPD")]),o("b-form-checkbox",{attrs:{value:"heart"}},[e._v("Heart Condition(s)")]),o("b-form-checkbox",{attrs:{value:"immunocompromised"}},[e._v("Immunocompromised")]),o("b-form-checkbox",{attrs:{value:"obese"}},[e._v("Obese")]),o("b-form-checkbox",{attrs:{value:"sickle"}},[e._v("Sickle Cell Disease")]),o("b-form-checkbox",{attrs:{value:"smoker"}},[e._v("Smoker")]),o("b-form-checkbox",{attrs:{value:"diabetes"}},[e._v("Type 2 Diabetes")])],1)],1),o("b-form-group",{attrs:{id:"input-group-3",label:"Primary Location:","label-for":"input-3"}},[o("b-form-select",{attrs:{id:"input-3",options:e.pLocations,required:""},model:{value:e.form.pLocation,callback:function(t){e.$set(e.form,"pLocation",t)},expression:"form.pLocation"}})],1),o("b-form-group",{attrs:{id:"input-group-4"}},[o("b-form-checkbox-group",{attrs:{id:"checkboxes-4"},model:{value:e.form.checked,callback:function(t){e.$set(e.form,"checked",t)},expression:"form.checked"}},[o("b-form-checkbox",{attrs:{value:"asympomatic"}},[e._v("I currently do not have COVID19 symptoms.")]),o("b-form-checkbox",{attrs:{value:"symptomatic"}},[e._v("I currently DO have COVID19 symptoms.")])],1)],1),o("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:e.randomValue}},[e._v("Submit")]),o("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")])],1):e._e(),o("b-card",{staticClass:"mt-3",attrs:{header:"Form Data Result"}},[o("pre",{staticClass:"m-0"},[e._v(e._s(e.form))])]),o("div",{attrs:{id:"mapContainer"}}),e._v(' L.map("mapContainer").setView([37.7749, -122.4194], 13); ')],1)},i=[],s=(o("b0c0"),{name:"GeneralForm",data:function(){return{form:{email:"",name:"",pLocation:null,checked:[]},pLocations:[{text:"Select One",value:null},"Home","Work","Inconsistent","Not Sure"],show:!0,value:45,max:100}},methods:{onSubmit:function(e){e.preventDefault(),alert(JSON.stringify(this.form))},onReset:function(e){var t=this;e.preventDefault(),this.form.email="",this.form.name="",this.form.pLocation=null,this.form.checked=[],this.show=!1,this.$nextTick((function(){t.show=!0}))},randomValue:function(){this.value=Math.random()*this.max}}}),l=s,m=o("2877"),c=Object(m["a"])(l,n,i,!1,null,null,null),u=c.exports,b={name:"Settings",components:{GeneralForm:u}},p=b,f=Object(m["a"])(p,r,a,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d0b3289.644170e8.js.map