(window.webpackJsonp=window.webpackJsonp||[]).push([[18,23],{427:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(12),s=a(14),o=a(13),i=a(15),c=a(0),l=a.n(c),u=a(50),m=a(88),d=(a(67),a(56)),p=a(25),f=a(72),h=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).isEdit=a.props.location.pathname.indexOf("edit")>-1,a.state={errors:{},requesting:!1,success:!1,startup:{}},a._register_startup=function(e){e.preventDefault(),a.setState({requesting:!1});var t=Object(u.b)().post,n="/iportal/startup/";a.props.auth.startup_id&&(t=Object(u.b)().put,n="/iportal/startup/".concat(a.props.auth.startup_id,"/")),t(n,{name:a.name.value,email:a.email.value,contact:a.contact.value,brief:a.brief.value,description:a.description.get_value(),sector:a.sector.value,address1:a.address1.value,address2:a.address2.value,district:a.district.value,state:a.lstate.value,country:a.country.value,user:a.props.auth.id}).then(function(e){var t=e.data;console.log(t),a.isEdit?a.props.history.goBack():a.setState({success:!0,requesting:!1})}).catch(function(e){var t=e.response.data;console.log(t),a.setState({errors:t,requesting:!1}),t.user&&(alert("your startup is already registered"),a.props.history.push("/startups"))})},a._reset_form=function(e){e.preventDefault(),a.name.value="",a.email.value="",a.contact.value="",a.brief.value="",a.sector.value="",a.address1.value="",a.address2.value="",a.district.value="",a.lstate.value="",a.country.value="",a.description.set_value("")},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(u.b)().get("/iportal/startup/".concat(this.props.auth.startup_id,"/")).then(function(t){var a=t.data;e.setState({startup:a}),console.log(a,"running"),e.name.value=a.name,e.email.value=a.email,e.contact.value=a.contact,e.brief.value=a.brief,e.sector.value=a.sector,e.address1.value=a.address1,e.address2.value=a.address2,e.district.value=a.district,e.lstate.value=a.state,e.country.value=a.country,e.description.set_value(a.description)})}},{key:"render",value:function(){var e=this,t=d.c.map(function(e){return l.a.createElement("option",{value:e},e)});if(this.state.success&&!this.state.startup.can_hire_interns)return l.a.createElement("div",null,l.a.createElement("h2",{className:"mt-5 text-center"},"Successfully submited for verification"),l.a.createElement("h4",{className:"text-center mt-3"},"You will receive confirmation by E-mail and SMS once the verification is complete."),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{className:"btn btn-primary mt-5",onClick:function(){return e.props.history.goBack()}},"Go to homepage")));if(this.state.success&&this.state.startup.can_hire_interns)return l.a.createElement("div",null,l.a.createElement("h2",{className:"mt-5 text-center font-weight-bold"},"Successfully edited the details!!"),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{className:"btn btn-primary mt-5",onClick:function(){return e.props.history.goBack()}},"Go to homepage")));var a={};return Object.keys(this.state.errors).forEach(function(t){a[t]=e.state.errors[t].map(function(e,t){return l.a.createElement("div",{key:t,className:"text-danger"},e)})}),l.a.createElement("div",{className:"reg-pad"},l.a.createElement("div",{className:"container hoverable jumbotron"},l.a.createElement("div",{className:""},l.a.createElement("button",{onClick:function(){return e.props.history.goBack()},className:"btn font-weight-bold btn-primary"},"Go Back")),l.a.createElement("div",null,l.a.createElement("h1",{className:"open text-center font-weight-bold my-5"},this.isEdit?"Edit Startup Profile":"Startup Profile"),l.a.createElement("div",{className:"text-center"},l.a.createElement(m.a,null)),l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"font-weight-bold"},"Name"),l.a.createElement("input",{type:"text",ref:function(t){return e.name=t},className:"form-control"}),a.name),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"font-weight-bold"},"Email"),l.a.createElement("input",{type:"email",ref:function(t){return e.email=t},className:"form-control"}),a.email),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"font-weight-bold"},"Contact"),l.a.createElement("input",{type:"text",ref:function(t){return e.contact=t},className:"form-control"}),a.contact),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"font-weight-bold"},"Brief"),l.a.createElement("input",{type:"text",ref:function(t){return e.brief=t},className:"form-control"}),a.brief),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"font-weight-bold"},"Description"),a.description,l.a.createElement(f.a,{onRef:function(t){return e.description=t}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,l.a.createElement("span",{className:"font-weight-bold"},"Sector"),"*\xa0 ",l.a.createElement("i",null,"(eg: technical, education)")),l.a.createElement("select",{className:"form-control",ref:function(t){return e.sector=t}},t),a.sector),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"font-weight-bold"},"Address line 1"),l.a.createElement("input",{type:"text",ref:function(t){return e.address1=t},className:"form-control"}),a.address1),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"font-weight-bold"},"Address line 2"),l.a.createElement("input",{type:"text",ref:function(t){return e.address2=t},className:"form-control"}),a.address2),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"font-weight-bold"},"District"),l.a.createElement("input",{type:"text",ref:function(t){return e.district=t},className:"form-control"}),a.district),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"font-weight-bold"},"State"),l.a.createElement("input",{type:"text",ref:function(t){return e.lstate=t},className:"form-control"}),a.state),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"font-weight-bold"},"Country"),l.a.createElement("input",{type:"text",ref:function(t){return e.country=t},className:"form-control"}),a.country),l.a.createElement("div",{className:"text-center"},l.a.createElement("button",{disabled:this.state.requesting||this.state.success,onClick:this._register_startup,className:"btn font-weight-bold btn-primary"},this.state.requesting?l.a.createElement("i",{className:"fa fa-spinner fa-spin"}):"submit"),l.a.createElement("button",{onClick:this._reset_form,className:"btn font-weight-bold btn-danger"},"reset"))))))}}]),t}(c.Component);t.default=Object(p.b)(function(e){return e})(h)},50:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(76),r=a.n(n),s=a(35),o="https://ecell.nitrr.ac.in";o="",t.b=function(){var e=void 0,t=s.store.getState().auth;return t&&(e=t.loggedin?t.token:void 0),r.a.create({baseURL:o,headers:{Authorization:e,Access:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJhbmRyb2lkIiwib3JnYW5pemF0aW9uIjoiRUNlbGwifQ.H2aaDJuOxK44D2kwRCWwv9s5rzJGCNYKT3thtQqN-hQ"}})}},54:function(e,t){var a,n,r=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(a===setTimeout)return setTimeout(e,0);if((a===s||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"===typeof setTimeout?setTimeout:s}catch(e){a=s}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var c,l=[],u=!1,m=-1;function d(){u&&c&&(u=!1,c.length?l=c.concat(l):m=-1,l.length&&p())}function p(){if(!u){var e=i(d);u=!0;for(var t=l.length;t;){for(c=l,l=[];++m<t;)c&&c[m].run();m=-1,t=l.length}c=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];l.push(new f(e,t)),1!==l.length||u||i(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},56:function(e,t,a){"use strict";a.d(t,"e",function(){return s}),a.d(t,"a",function(){return o}),a.d(t,"b",function(){return i}),a.d(t,"c",function(){return c}),a.d(t,"d",function(){return l});var n,r=a(26),s=(n={GST:"Guest",VLT:"Voluteer",EXE:"Executive",MNG:"Manager",HCO:"Head Co-ordinator",OCO:"Overall Co-ordinator",CAB:"Campus Ambassador"},Object(r.a)(n,"CAB","Campus Ambassador"),Object(r.a)(n,"DRT","Director"),Object(r.a)(n,"CDC","CDC Admin"),n),o={PND:"pending",RJD:"rejected",HRD:"hired",URV:"under review"},i=function(e){try{return e=(e=new Date(e)).toISOString(),"".concat(e.slice(8,10),"-").concat(e.slice(5,7),"-").concat(e.slice(0,4))}catch(t){return"invalid-format"}},c=["Accountancy","Banking","Finance","Business","Consulting","Management","Charity","Design","Engineering","Agriculture","Healthcare","Hospitality","IT","Law","Security","Leisure","Sport","Tourism","Marketing","Advertising","PR","Media","Construction","Public Services","Administration","Retail","Sales","Science","Social Care","Teacher Training","Education","Transport","Logistics","Others"],l=["Select","Student","Faculty"]},67:function(e,t,a){},72:function(e,t,a){"use strict";a.d(t,"a",function(){return g});var n=a(11),r=a(12),s=a(14),o=a(13),i=a(15),c=a(0),l=a.n(c),u=(a(73),a(95),a(96)),m=a(86),d=a(97),p=a.n(d),f=a(98),h=a.n(f),g=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(i)))).state={editorState:m.EditorState.createEmpty()},a.set_value=function(e){var t=h()(e);if(t){var n=m.ContentState.createFromBlockArray(t.contentBlocks),r=m.EditorState.createWithContent(n);a.setState({editorState:r})}},a.get_value=function(){return p()(Object(m.convertToRaw)(a.state.editorState.getCurrentContent()))},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.onRef(this)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"wysiwyg"},l.a.createElement(u.Editor,{editorState:this.state.editorState,toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",onEditorStateChange:function(t){return e.setState({editorState:t})}}))}}]),t}(c.Component)},73:function(e,t,a){},82:function(e,t,a){e.exports=a.p+"static/media/no_pic.67edcff8.svg"},88:function(e,t,a){"use strict";var n=a(121),r=a.n(n),s=a(27),o=a(122),i=a(11),c=a(12),l=a(14),u=a(13),m=a(15),d=a(0),p=a.n(d),f=a(50),h=a(25),g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),m=0;m<n;m++)c[m]=arguments[m];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={progress:0,uploading:!1,startup:{}},a._upload_logo=function(){var e=Object(o.a)(r.a.mark(function e(t){var n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!a.state.startup.logo_id){e.next=4;break}return e.next=4,Object(f.b)().delete("/iportal/logo/".concat(a.state.startup.logo_id,"/")).then(function(e){a.setState({startup:Object(s.a)({},a.state.startup,{logo_id:null,logo:null})})});case 4:(n=document.createElement("input")).type="file",n.accept="image/x-png,image/gif,image/jpeg,image/svg+xml",n.click(),n.addEventListener("change",function(e){var t=e.target.files,n=new FileReader;n.readAsDataURL(t[0]),n.addEventListener("load",function(e){a.setState({startup:Object(s.a)({},a.state.startup,{logo:n.result})});var r=new FormData,o=new XMLHttpRequest;r.append("logo",t[0]),r.append("startup",a.props.auth.startup_id),o.addEventListener("load",function(e){var t=JSON.parse(e.target.response);console.log(t),a.setState({uploading:!1,progress:0,startup:Object(s.a)({},a.state.startup,{logo:t.logo,logo_id:t.id})})}),o.upload.addEventListener("progress",function(e){var t=Math.round(e.loaded/e.total*100);console.log({progress:t}),a.setState({progress:t})}),o.open("post",f.a+"/iportal/logo/"),o.setRequestHeader("Authorization",a.props.auth.token),o.send(r),a.setState({uploading:!0})})});case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(f.b)().get("/iportal/startup/".concat(this.props.auth.startup_id,"/")).then(function(t){console.log(t.data),e.setState({loading:!1,startup:t.data})})}},{key:"render",value:function(){if(!this.props.auth.startup_id)return null;var e=this.state.startup.logo?this.state.startup.logo:a(82);return p.a.createElement("div",null,p.a.createElement("img",{style:{outline:"4px solid #57C952",outlineOffset:"12px",maxWidth:"300px",maxHeight:"250px"},className:"logo_img",src:e,alt:""}),p.a.createElement("div",null,p.a.createElement("button",{disabled:this.state.uploading,onClick:this._upload_logo,className:"btn font-weight-bold btn-success"},this.state.uploading?"uploading":"Change logo",this.state.uploading?p.a.createElement("span",null,p.a.createElement("i",{className:"fa fa-spinner fa-spin"}),this.state.progress?this.state.progress:null):null)))}}]),t}(d.Component);t.a=Object(h.b)(function(e){return e})(g)}}]);
//# sourceMappingURL=18.2c73e0c9.chunk.js.map