(this.webpackJsonpqab=this.webpackJsonpqab||[]).push([[0],{49:function(e,t,a){e.exports=a(65)},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),i=a(27),o={expectedBehaviour:"",observedBehaviour:""};var u=Object(i.b)({ticketInfo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATED_EXPECTED_BEHAVIOUR":return Object.assign({},e,{expectedBehaviour:t.payload});case"UPDATED_OBSERVED_BEHAVIOUR":return Object.assign({},e,{observedBehaviour:t.payload});default:return e}}}),l=Object(i.c)(u);window.store=l;var s=l,p=a(6),b=a.n(p),h=a(12),d=a(10),v=a(13),E=a(14),O=a(15),f=a(89),m=a(93),j=a(96),y=a(94),B=a(43),D=a.n(B),k=function(e){function t(){return Object(h.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,{position:"static",color:"primary"},r.a.createElement(m.a,null,r.a.createElement(j.a,{edge:"start",color:"inherit"},r.a.createElement(D.a,null)),r.a.createElement(y.a,{variant:"h6"},"QAB")))}}]),t}(n.Component),T=(a(61),a(95));a(62);function x(e){return{type:"UPDATED_EXPECTED_BEHAVIOUR",payload:e}}function A(e){return{type:"UPDATED_OBSERVED_BEHAVIOUR",payload:e}}var g=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).dispatchToStore=function(e){switch(e.id){case"Expected behaviour":return a.props.dispatch(x(e.value));case"Observed behaviour":return a.props.dispatch(A(e.value))}},a}return Object(O.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",null,r.a.createElement(T.a,{className:"inputText-div",id:this.props.label,label:this.props.label,color:"secondary",onChange:function(t){t.preventDefault(),e.dispatchToStore(t.target)}}))}}]),t}(n.Component),C=Object(c.b)(null)(g),I=function(e){function t(){return Object(h.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"ticketBuilder-div"},r.a.createElement("p",{class:"title"},"Ticket info"),r.a.createElement(C,{label:"Expected behaviour"}),r.a.createElement(C,{label:"Observed behaviour"}))}}]),t}(n.Component),U=a(66),_=(a(63),function(e){function t(){return Object(h.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(U.a,{id:"ticketDisplay-div",elevation:3},r.a.createElement("p",{className:"header"},"h1. Expected behaviour"),r.a.createElement("p",null,this.props.expectedBehaviour||"Type the expected behaviour..."),r.a.createElement("p",{className:"header"},"h1. Observed behaviour"),r.a.createElement("p",null,this.props.observedBehaviour||"Type the observed behaviour..."))}}]),t}(n.Component)),w=Object(c.b)((function(e){return{expectedBehaviour:e.ticketInfo.expectedBehaviour,observedBehaviour:e.ticketInfo.observedBehaviour}}))(_),P=function(e){function t(){return Object(h.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement(I,null),r.a.createElement(w,null))}}]),t}(n.Component);a(64);b.a.render(r.a.createElement(c.a,{store:s},r.a.createElement(P,null)),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.497b6ede.chunk.js.map