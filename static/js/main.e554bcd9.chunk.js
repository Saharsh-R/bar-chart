(this["webpackJsonpbar-chart"]=this["webpackJsonpbar-chart"]||[]).push([[0],{144:function(t,e,n){"use strict";n.r(e);var r=n(1),a=n(24),i=n.n(a),o=n(167),c=n(166),s=n(60),l=n(164),d=n(168),u=n(169),f=(n(38),n(163)),h=(n(162),n(3));Object(f.a)((function(t){return{root:{margin:t.spacing(6,0,3)},lightBulb:{verticalAlign:"middle",marginRight:t.spacing(1)}}}));var g=n(5),p=n(165);function b(){return Object(h.jsxs)(l.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(h.jsx)(u.a,{color:"inherit",target:"_blank",href:"https://saharsh-r.github.io/",children:"Saharsh Rathi"})," ",(new Date).getFullYear(),"."]})}function j(t){var e=t.id,n=t.data,a=t.width,i=void 0===a?800:a,o=t.height,c=void 0===o?500:o,s=50,l=n.map((function(t){return new Date(t[0])})),d=g.f().domain([g.d(l),g.c(l)]).range([s,i-s]),u=g.e().domain([0,g.c(n,(function(t){return t[1]}))]).range([c-s,s]),f=g.b(u),p=g.a(d),b=i/n.length*.85;return Object(r.useEffect)((function(){var t=g.g("#tooltip").attr("id","tooltip").style("opacity",0),r=g.g("#"+e).append("svg").attr("width",i).attr("height",c);r.selectAll("rect").data(n).enter().append("rect").attr("x",(function(t,e){return d(l[e])})).attr("y",(function(t,e){return u(t[1])})).attr("width",b).attr("height",(function(t,e){return c-s-u(t[1])})).attr("class","bar").attr("data-date",(function(t){return t[0]})).attr("data-gdp",(function(t){return t[1]})).style("fill","#810034").on("mouseover",(function(e,n){g.g(e.currentTarget).style("fill","#fff600"),t.transition().duration(50).style("opacity",.9),t.html(n[0]+"<br>$"+n[1]+" Billion").attr("data-date",n[0]).style("left",d(new Date(n[0]))+"px").style("top",u(n[1])+"px").style("transform","translateY(-60px)")})).on("mouseout",(function(){g.g(event.currentTarget).style("fill","#810034"),t.transition().duration(50).style("opacity",0)})),r.append("g").attr("transform","translate(50, 0)").attr("id","y-axis").call(f),r.append("g").attr("transform","translate(".concat(0,", ",c-s,")")).attr("id","x-axis").call(p)}),[]),Object(h.jsx)("div",{id:e,style:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(h.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",textAlign:"center",width:150,height:50,backgroundColor:"#ff005c",color:"white",fontSize:15,boxShadow:"1px 1px 10px",borderRadius:5,pointerEvents:"none"},id:"tooltip"})})}function y(){var t=Object(r.useState)([]),e=Object(s.a)(t,2),n=e[0],a=e[1];return Object(r.useEffect)((function(){0==n.length&&fetch("https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json").then((function(t){return t.json()})).then((function(t){a(t.data)}))}),[n]),Object(h.jsx)(p.a,{container:!0,alignItems:"center",justify:"center",style:{backgroundColor:"grey"},children:Object(h.jsx)(p.a,{item:!0,children:Object(h.jsxs)(d.a,{p:4,style:{backgroundColor:"#f5f5f5"},borderRadius:40,children:[Object(h.jsx)(l.a,{variant:"h4",component:"h1",align:"center",id:"title",gutterBottom:!0,children:"United States GDP"}),0!=n.length&&Object(h.jsx)(j,{id:"barchart",data:n}),Object(h.jsx)(b,{})]})})})}var x=n(32),m=n(59),O=Object(m.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:x.a.A400},background:{default:"#fff"}}});i.a.render(Object(h.jsxs)(c.a,{theme:O,children:[Object(h.jsx)(o.a,{}),Object(h.jsx)(y,{})]}),document.querySelector("#root"))}},[[144,1,2]]]);
//# sourceMappingURL=main.e554bcd9.chunk.js.map