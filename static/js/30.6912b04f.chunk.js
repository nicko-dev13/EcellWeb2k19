(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{111:function(e,t,a){},50:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(76),l=a.n(n),r=a(35),s="https://ecell.nitrr.ac.in";s="",t.b=function(){var e=void 0,t=r.store.getState().auth;return t&&(e=t.loggedin?t.token:void 0),l.a.create({baseURL:s,headers:{Authorization:e,Access:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnQiOiJhbmRyb2lkIiwib3JnYW5pemF0aW9uIjoiRUNlbGwifQ.H2aaDJuOxK44D2kwRCWwv9s5rzJGCNYKT3thtQqN-hQ"}})}},531:function(e,t,a){"use strict";a.r(t);var n=a(11),l=a(12),r=a(14),s=a(13),c=a(15),i=a(0),o=a.n(i),m=a(50),d=a(77),p=a(24),u=(a(111),a(25)),b=a(61),E=a(56),v=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),i=0;i<l;i++)c[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={startup_detail:[],jobs:[],loading:!0,msg:"",applied:!1},a._job_apply_=function(){document.querySelector(".job_apply_btn").click()},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.startup_id,a=this.props.match.params.job_id;Object(m.b)().get("/iportal/startup/".concat(t,"/")).then(function(t){console.log(t);var a=t.data;e.setState({startup_detail:a}),console.log(e.state.startup_detail)}),Object(m.b)().get("/iportal/job/".concat(a,"/")).then(function(t){var a=t.data;console.log(a),e.setState({jobs:a})}),Object(m.b)().get("/iportal/job_application/?job=".concat(a,"&applicant=").concat(this.props.auth.id)).then(function(t){console.log(t),console.log(a),console.log(e.props.auth.id);var n=t.data;0===n.count&&e.setState({loading:!1,msg:"Apply Now",applied:!1}),1===n.count&&e.setState({loading:!1,msg:"Applied",applied:!0})})}},{key:"render",value:function(){var e,t=this,a=this.state.startup_detail;return o.a.createElement("div",null,this.state.loading?o.a.createElement("div",{className:"my-5 text-center"},o.a.createElement("i",{className:"fa fa-2x fa-spinner fa-spin"})):o.a.createElement(i.Fragment,null,o.a.createElement("div",{style:{background:"lightgray",marginTop:"-60px"}},o.a.createElement("div",{className:"container-fluid",style:{maxWidth:"1200px"}},(e=this.state.jobs,o.a.createElement("div",{className:"my-4",key:e.id},o.a.createElement("div",{class:"card"},o.a.createElement("div",{class:"card-header green text-white d-flex",style:{justifyContent:"space-between"}},o.a.createElement("div",null,o.a.createElement("h4",{className:" indiv_job font-weight-bold"},e.name))),o.a.createElement("div",{class:"card-body"},o.a.createElement("div",null,o.a.createElement("div",{className:"mb-2"},o.a.createElement("strong",null,"Location : "),e.location),o.a.createElement("hr",{className:"gray"}),o.a.createElement("div",{className:"d-flex job_flex"},o.a.createElement("div",{className:"text-center"},o.a.createElement("div",{style:{fontSize:"14px"}},o.a.createElement("strong",null,"Start Date")),o.a.createElement("div",{style:{fontSize:"13px"}},Object(E.b)(e.start_date))),o.a.createElement("div",{className:"text-center"},o.a.createElement("div",{style:{fontSize:"14px"}},o.a.createElement("strong",null,"Duration")),o.a.createElement("div",{style:{fontSize:"13px"}},e.duration)),o.a.createElement("div",{className:"text-center"},o.a.createElement("div",{style:{fontSize:"14px"}},o.a.createElement("strong",null,"Stipend")),o.a.createElement("div",{style:{fontSize:"13px"}},e.stipend)),o.a.createElement("div",{className:"text-center"},o.a.createElement("div",{style:{fontSize:"14px"}},o.a.createElement("strong",null,"Posted On")),o.a.createElement("div",{style:{fontSize:"13px"}},Object(E.b)(e.posted_on))),o.a.createElement("div",{className:"text-center"},o.a.createElement("div",{style:{fontSize:"14px"}},o.a.createElement("strong",null,"Apply By")),o.a.createElement("div",{style:{fontSize:"13px"}},Object(E.b)(e.apply_by)))),o.a.createElement("div",{className:"job_flex2"},o.a.createElement("div",{className:""},o.a.createElement("div",{style:{fontSize:"13px"}},o.a.createElement("strong",null,"Start Date : "),e.start_date)),o.a.createElement("div",{className:""},o.a.createElement("div",{style:{fontSize:"13px"}},o.a.createElement("strong",null,"Duration : "),e.duration)),o.a.createElement("div",{className:""},o.a.createElement("div",{style:{fontSize:"13px"}},o.a.createElement("strong",null,"Stipend : "),e.stipend)),o.a.createElement("div",{className:""},o.a.createElement("div",{style:{fontSize:"13px"}},o.a.createElement("strong",null,"Posted On : "),e.posted_on)),o.a.createElement("div",{className:""},o.a.createElement("div",{style:{fontSize:"13px"}},o.a.createElement("strong",null,"Apply By :"),e.apply_by))))))))),o.a.createElement("div",{className:"container-fluid",style:{maxWidth:"1200px"}},o.a.createElement("div",{class:"jumbotron"},function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:"start-name font-weight-bold",style:{fontSize:"20px"}},e.name),o.a.createElement("br",null),o.a.createElement("div",{className:"start-brief"},o.a.createElement("strong",{className:"font-weight-bold"},"Brief"),": ",e.brief),o.a.createElement("br",null),(a=t.state.jobs,o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("strong",{className:"font-weight-bold"},"Posted On :")," ",Object(E.b)(a.posted_on)),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement("strong",{className:"font-weight-bold"},"About the job :"),o.a.createElement("br",null)," ",o.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.about_the_job}})),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement("span",{className:"font-weight-bold"},"Perks :"),o.a.createElement("br",null)," ",o.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.perks}})),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement("span",{className:"font-weight-bold"},"Skills Required : "),o.a.createElement("br",null)," ",o.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.skills_required}})),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement("span",{className:"font-weight-bold"},"Who can apply :"),o.a.createElement("br",null)," ",o.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.who_can_apply}})," "),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement("span",{className:"font-weight-bold"},"No of openings :")," ",a.no_of_opening),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement("span",{className:"font-weight-bold"},"Apply By : ")," ",Object(E.b)(a.apply_by)),o.a.createElement("br",null))));var a}(a),o.a.createElement("hr",{class:"my-4"}),o.a.createElement("div",{className:"d-flex justify-content-center"},o.a.createElement("button",{className:"bg-white",style:{border:"none"}},this.state.loading?o.a.createElement(d.a,null):this.state.applied?o.a.createElement("button",{className:"btn btn-success font-weight-bold",disabled:!0},this.state.msg):o.a.createElement("button",{onClick:this._job_apply_,className:"btn btn-primary font-weight-bold"},this.state.msg))),o.a.createElement(p.b,{className:"job_apply_btn",style:{display:"none"},to:"/internship/jobs/application/".concat(this.props.match.params.job_id)}))))))}}]),t}(i.Component);t.default=Object(u.b)(function(e){return e},b)(v)},77:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function(){return l.a.createElement("div",{className:"spinner-border text-light",role:"status"},l.a.createElement("span",{className:"sr-only"},"Loading..."))}}}]);
//# sourceMappingURL=30.6912b04f.chunk.js.map