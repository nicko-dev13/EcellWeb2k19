(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{556:function(e,t,a){"use strict";a.r(t);var l=a(11),s=a(12),n=a(14),r=a(13),c=a(15),o=a(0),i=a.n(o),m=(a(183),a(50)),d=(a(67),a(25)),u=function(e){function t(){var e,a;Object(l.a)(this,t);for(var s=arguments.length,c=new Array(s),o=0;o<s;o++)c[o]=arguments[o];return(a=Object(n.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(c)))).state={loading:!0,startup:{}},a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(m.b)().get("/iportal/startup/".concat(this.props.auth.startup_id,"/")).then(function(t){console.log(t.data),e.setState({loading:!1,startup:t.data})})}},{key:"render",value:function(){var e=this;if(this.state.loading)return i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"text-center mt-5"}),this.state.loading?i.a.createElement("h1",null,"loading"):null);var t=this.state.startup.logo?this.state.startup.logo:a(82);return i.a.createElement("div",{className:"pb-2",style:{background:"lightgray",paddingTop:"",marginBottom:"-50px"}},i.a.createElement("div",{className:"container jumbotron hoverable"},i.a.createElement("div",null,i.a.createElement("div",{className:"d-flex my-5"},i.a.createElement("h1",{className:"text-center flex-grow-1 font-weight-bold"},"Dashboard"),i.a.createElement("button",{onClick:function(){return e.props.history.push("/internship/startup/edit/")},className:"btn btn-danger font-weight-bold"},"edit")),this.state.loading?i.a.createElement("h1",null,"loading"):null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-8"},i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:"font-weight-bold"},"Name : "),i.a.createElement("span",null,this.state.startup.name)),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:"font-weight-bold"},"Email : "),i.a.createElement("span",null,this.state.startup.email)),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:"font-weight-bold"},"Approved : "),i.a.createElement("span",null,this.state.startup.approved?i.a.createElement("i",{className:"fa fa-check text-success"}):i.a.createElement("i",{className:"fa fa-times text-danger"}))),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:"font-weight-bold"},"Contact : "),i.a.createElement("span",null,this.state.startup.contact)),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:"font-weight-bold"},"Sector : "),i.a.createElement("span",{className:"font-weight-bold"},this.state.startup.sector)),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:"font-weight-bold"},"Address Line 1 : "),i.a.createElement("span",null,this.state.startup.address1)),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:"font-weight-bold"},"Address Line 2 : "),i.a.createElement("span",null,this.state.startup.address2))),i.a.createElement("div",{className:"col-md-4 text-right my-5 d-flex",style:{justifyContent:"center",alignItems:"center"}},i.a.createElement("img",{className:"logo_img image-fluid align-self-center",style:{outline:"3px solid #EA4763",outlineOffset:"8px"},src:t,alt:""}))),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:"font-weight-bold"},"Brief : "),i.a.createElement("span",null,this.state.startup.brief)),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:"font-weight-bold"},"Description : "),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.startup.description}})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:"font-weight-bold"},"District : "),i.a.createElement("span",null,this.state.startup.district)),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:"font-weight-bold"},"State : "),i.a.createElement("span",null,this.state.startup.state)),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",{className:"font-weight-bold"},"Country : "),i.a.createElement("span",null,this.state.startup.country)))))}}]),t}(o.Component);t.default=Object(d.b)(function(e){return e})(u)},82:function(e,t,a){e.exports=a.p+"static/media/no_pic.67edcff8.svg"}}]);
//# sourceMappingURL=49.046d1d6c.chunk.js.map