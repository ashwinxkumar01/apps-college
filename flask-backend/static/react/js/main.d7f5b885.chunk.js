(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{115:function(e,a,t){e.exports=t(145)},120:function(e,a,t){},121:function(e,a,t){},127:function(e,a,t){},129:function(e,a,t){},132:function(e,a,t){},138:function(e,a,t){},139:function(e,a,t){},142:function(e,a,t){},143:function(e,a,t){},144:function(e,a,t){},145:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(13),i=t.n(s),l=(t(120),t(15)),c=t(16),o=t(19),m=t(18),u=(t(78),t(43)),h=t(20),p=t(14),d=(t(121),t(202)),g=t(40),v=t(41),f=(t(127),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navigation-div"},r.a.createElement("div",{className:"sidebar-header"},r.a.createElement("h3",null,"College Search")),r.a.createElement(d.a,{variant:"tabs",className:"flex-column",defaultActiveKey:this.props.active},r.a.createElement(d.a.Item,{className:"dashboard"},r.a.createElement(d.a.Link,{eventKey:"1",href:"/loginhome/dashboard"},r.a.createElement(g.a,{icon:v.a}),"  Dashboard")),r.a.createElement(d.a.Item,{className:"explore"},r.a.createElement(d.a.Link,{eventKey:"2",href:"/loginhome/explore"},r.a.createElement(g.a,{icon:v.b}),"  Explore")),r.a.createElement(d.a.Item,{className:"login"},r.a.createElement(d.a.Link,{eventKey:"3",href:"/loginhome/login"},r.a.createElement(g.a,{icon:v.a}),"  Login")),r.a.createElement(d.a.Item,{className:"signup"},r.a.createElement(d.a.Link,{eventKey:"4",href:"/loginhome/signup"},r.a.createElement(g.a,{icon:v.b}),"  Signup")),r.a.createElement(d.a.Item,{className:"features"},r.a.createElement(d.a.Link,{eventKey:"5",href:"/loginhome/features"},r.a.createElement(g.a,{icon:v.a}),"  Features")),r.a.createElement(d.a.Item,{className:"faq"},r.a.createElement(d.a.Link,{eventKey:"6",href:"/loginhome/profile"},r.a.createElement(g.a,{icon:v.b}),"  FAQ")),r.a.createElement(d.a.Item,{className:"faq"},r.a.createElement(d.a.Link,{eventKey:"7",href:"/loginhome/page"},r.a.createElement(g.a,{icon:v.b}),"  College Page"))))}}]),t}(r.a.Component)),E=t(203),b=t(200),y=t(180),U=function(){function e(a){Object(l.a)(this,e),this.iteration=[a]}return Object(c.a)(e,[{key:"push",value:function(e){this.iteration.push(e)}},{key:"pop",value:function(){this.iteration=this.iteration.pop()}},{key:"peek",value:function(){return this.iteration[this.iteration.length-1]}}]),e}(),S=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={searchResults:[]},n.allResults=new U(n.props.list),n.handleChange=n.handleChange.bind(Object(p.a)(n)),n}return Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({searchResults:[]})}},{key:"handleChange",value:function(e){var a=[],t=[],n=[];if(""!==e.target.value)this.props.searchBarInUse(!0),this.props.list.map((function(a){var r=!1;a.map((function(s){if(!r){for(var i,l,c=s.toLowerCase(),o=e.target.value.toLowerCase(),m=!0,u=0;u<o.length;u++)if(o.substring(u,u+1)!==c.substring(u,u+1)){m=!1;break}if(m)return r=!0,void t.push(a[0]);var h=c.split(" "),p=o.split(" ");for(i=0;i<p.length-1;i++){var d=!1;for(l=0;l<h.length;l++)h[l]!==p[i]||(d=!0,h.splice(l,1),p.splice(i,1));if(!d)return}if(0===p.length)return n.push(a[0]),void(r=!0);for(i=0;i<h.length;i++){d=!0;for(l=0;l<p[p.length-1].length;l++)if(p[p.length-1].substring(l,l+1)!==h[i].substring(l,l+1)){d=!1;break}if(d)return n.push(a[0]),void(r=!0)}}}))}));else{a=[],this.props.searchBarInUse(!1)}t.map((function(e,t){a.length>=10||a.push(e)})),n.map((function(e){a.length>=10||a.push(e)})),console.log(t),console.log(a),this.props.setSearch(a),this.setState({searchResults:a,allResults:this.allResults.push(a)})}},{key:"render",value:function(){return r.a.createElement(b.a,{inline:!0,className:"ml-5 w-100"},r.a.createElement(b.a.Control,{type:"text",onInput:this.handleChange,placeholder:"Search",className:"mr-0 w-75",style:{width:"200px"}}),r.a.createElement(y.a,{variant:"outline-success",className:"mr-0 w-0"},"Search"))}}]),t}(r.a.Component),C=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={collegelist:[["Princeton University","Princeton",""],["Harvard University","Harvard",""],["Columbia University","Columbia",""],["Yale University","Yale",""],["University of Chicago","U Chicago",""],["Stanford University","Stanford",""],["University of Pennsylvania ","UPenn","Penn"],["Northwestern University","Northwestern",""],["Duke University","Duke",""],["Johns Hopkins University","Johns Hopkins",""],["Brown University","Brown",""],["Vanderbilt University","Vanderbilt",""],["Washington University in St Louis","WashU","WUSTL"],["University of California, Los Angeles","UC Los Angeles","UCLA"],["University of California, Berkeley","UC Berkeley","UCB"],["University of Southern California","","USC"],["University of Michigan - Ann Arbor","Michigan","UMich"],["University of Virginia- Main Campus","","UVA"],["New York University","","NYU"],["Georgia Institute of Technology-Main Campus","Georgia Tech","GT"],["University of California, Santa Barbara","UC Santa Barbara","UCSB"],["University of Florida","","UF"],["University of California, Irvine","UC Irvine","UCI"],["University of California, San Diego","UC San Diego","UCSD"],["Boston College","",""],["University of California, Davis","UC Davis","UCD"],["Boston University","","BU"],["Case Western Reserve University","Case Western","CWRU"],["Tulane University of Louisiana","Tulane",""],["Northeastern University","Northeastern",""],["University of Illinois at Urbana-Champaign","","UIUC"],["Syracuse University","Syracuse",""],["University of Miami","",""],["Purdue University - Main Campus","Purdue",""],["University of Pittsburgh-Pittsburgh Campus","University of Pittsburgh",""],["Florida State University","Florida State","FSU"],["Pennsylvania State University - Main Campus","Penn State","PSU"],["Rutgers University - New Brunswick","Rutgers",""],["University of Washington-Seattle Campus","UW Seattle","UW"],["University of Connecticut","","UConn"],["University of Massachusetts-Amherst","Umass Amherst","Umass"],["University of Maryland-College Park","Maryland","UMD"],["Clemson University","Clemson",""],["George Washington University","George Washington","GW"],["University of Minnesota - Twin Cities","University of Minnesota",""],["Fordham University","Fordham",""],["Binghamton University","Binghamton",""],["University at Buffalo","","UB"],["University of California, Santa Cruz","UC Santa Cruz","UCSC"],["University of Iowa","Iowa","uiowa"],["North Carolina State University at Raleigh","","NC State"],["University of California, Riverside","UC Riverside","UCR"],["Stony Brook University","Stony Brook",""],["Miami University-Oxford","Miami University","Miami"],["Drexel University","Drexel",""],["University of California, Merced","UC Merced","UCM"],["University of South Florida-Main Campus","","USF"],["San Diego State University","San Diego State","SDSU"],["The University of Alabama ","Alabama","bama"],["Hofstra University","Hofstra",""],["St John's University-New York","",""],["San Jose State University","San Jose State","SJSU"],["California State University - Long Beach","CSU Long Beach","CSULB"],["Northern Arizona University","","NAU"],["San Francisco State University","San Francisco State","SFSU"],["Liberty University","",""],["California State University, Los Angeles","CSU Los Angeles","CSULA"],["California State University-Fullerton  ","CSU Fullerton","CSUF"],["Michigan State University  ","Michigan State","MSU"],["CUNY Hunter College","Hunter College",""],["California Polytechnic State University - San Luis Obispo","Cal Poly SLO","SLO"]]},n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,{bg:"dark",className:"navbar shadow-sm p-3 mb-4 bg-white rounded",expand:!0},r.a.createElement(S,{list:this.state.collegelist,searchBarInUse:this.props.searchBarInUse,setSearch:this.props.setSearch}),r.a.createElement(E.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(E.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(d.a,{className:"ml-auto",navbar:!0},r.a.createElement(d.a.Link,{href:""},"LOGOUT"))))}}]),t}(r.a.Component),k=t(47),N=t.n(k),O=(t(129),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"tile-layout"},r.a.createElement("div",{className:"college-name"},r.a.createElement("h1",null,this.props.Alias)),r.a.createElement("div",{className:"element-display"},r.a.createElement("div",{className:"specifications"},r.a.createElement("h3",null,"Tuition (In State): $",this.props.Tuition),r.a.createElement("h3",null,"Tuition (Out of State): $",this.props.TuitionOOS),r.a.createElement("h3",null,"Acceptance Rate: ",this.props.Acceptance,"%"),r.a.createElement("h3",null,"School Type: ",this.props.Type),r.a.createElement("h3",null,"App Fee: $",this.props.Fee)),r.a.createElement("div",{className:"college-icon"},r.a.createElement("img",{src:this.props.Logo,alt:"Logo",height:"150",width:"100%"}))))}}]),t}(n.Component)),x=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).searchBarInUse=function(e){e!==n.state.searchBar&&(console.log(e),n.setState({searchBar:e}))},n.renderExplore=function(e){return!1===n.state.searchBar?r.a.createElement("div",{className:"container-div"},r.a.createElement("div",{className:"filter"},r.a.createElement("h1",{className:"filter-name"},"Filters"),r.a.createElement("div",{className:"tuition"},r.a.createElement("div",{className:"header"},"Population"),r.a.createElement("form",{className:"filter-form"},r.a.createElement("input",{onChange:function(e){return n.setState({PopulationLower:e.target.value})},type:"text",placeholder:"Lower",size:"100"}),r.a.createElement("span",null,"-"),r.a.createElement("input",{onChange:function(e){return n.setState({PopulationUpper:e.target.value})},type:"text",placeholder:"Upper",size:"100"}))),r.a.createElement("div",{className:"tuition"},r.a.createElement("div",{className:"header"},"Acceptance"),r.a.createElement("form",{className:"filter-form"},r.a.createElement("input",{onChange:function(e){return n.setState({AcceptanceLower:e.target.value})},type:"text",placeholder:"Lower",size:"100"}),r.a.createElement("span",null,"-"),r.a.createElement("input",{onChange:function(e){return n.setState({AcceptanceUpper:e.target.value})},type:"text",placeholder:"Upper",size:"100"}))),r.a.createElement("div",{className:"tuition"},r.a.createElement("div",{className:"header"},"App fee"),r.a.createElement("form",{className:"filter-form"},r.a.createElement("input",{onChange:function(e){return n.setState({AppFeeLower:e.target.value})},type:"text",placeholder:"Lower",size:"100"}),r.a.createElement("span",null,"-"),r.a.createElement("input",{onChange:function(e){return n.setState({AppFeeUpper:e.target.value})},type:"text",placeholder:"Upper",size:"100"}))),r.a.createElement("div",{className:"tuition"},r.a.createElement("div",{className:"header"},"Ranking"),r.a.createElement("form",{className:"filter-form"},r.a.createElement("input",{onChange:function(e){return n.setState({RankingLower:e.target.value})},type:"text",placeholder:"Lower",size:"100"}),r.a.createElement("span",null,"-"),r.a.createElement("input",{onChange:function(e){return n.setState({RankingUpper:e.target.value})},type:"text",placeholder:"Upper",size:"100"}))),r.a.createElement("div",{className:"tuition"},r.a.createElement("div",{className:"header"},"Tuition"),r.a.createElement("form",{className:"filter-form"},r.a.createElement("input",{onChange:function(e){return n.setState({TuitionLower:e.target.value})},type:"text",placeholder:"Lower",size:"100"}),r.a.createElement("span",null,"-"),r.a.createElement("input",{onChange:function(e){return n.setState({TuitionUpper:e.target.value})},type:"text",placeholder:"Upper",size:"100"}))),r.a.createElement("div",{className:"oos-tuition"},r.a.createElement("input",{className:"checkbox",type:"checkbox",onClick:n.changeTuitionState}),r.a.createElement("h4",null,"Out of State")),r.a.createElement("div",{className:"app-type"},r.a.createElement("span",{className:"dropdown-name"},"App type"),r.a.createElement("select",{onChange:function(e){return n.setState({App:e.target.value})},value:n.state.App},r.a.createElement("option",{value:"Any"},"Any"),r.a.createElement("option",{value:"commonapp"},"Common App"),r.a.createElement("option",{value:"coalitionapp"},"Coalition App"))),r.a.createElement("div",{className:"school-type"},r.a.createElement("span",{className:"dropdown-name"},"School Type"),r.a.createElement("select",{onChange:function(e){return n.setState({School:e.target.value})},value:n.state.School},r.a.createElement("option",{value:"Any"},"Any"),r.a.createElement("option",{value:"Public"},"Public"),r.a.createElement("option",{value:"Private"},"Private"))),r.a.createElement("div",{className:"filter-button-div"},r.a.createElement("button",{onClick:n.handleClick,className:"filter-button"},"Apply"))),r.a.createElement("div",{className:"content-display"},r.a.createElement("div",{className:"float-display"},r.a.createElement("div",{className:"filter-type"},r.a.createElement("h3",{className:"filter-span"},"Sort by"),r.a.createElement("select",{onChange:n.handleFilter,value:n.state.Filter},r.a.createElement("option",{value:"national_ranking"},"Ranking"),r.a.createElement("option",{value:"tuition_normal"},"Tuition: In-state"),r.a.createElement("option",{value:"tuition_oos"},"Tuition: Out of State "),r.a.createElement("option",{value:"acceptance_rate"},"Acceptance Rate"),r.a.createElement("option",{value:"app_fee"},"App Fee"),r.a.createElement("option",{value:"population"},"Population")),r.a.createElement("input",{className:"button",type:"submit",onClick:n.changeAscent,value:n.state.Ordering}))),r.a.createElement("ul",{className:"ListColleges"},n.state.College.map((function(e){console.log(e);var a=JSON.parse(e),t=a.college_name;return r.a.createElement(u.b,{to:"/loginhome/features/".concat(t)},r.a.createElement("li",null,r.a.createElement(O,{Alias:a.alias,Tuition:n.numFormat(a.tuition_normal),TuitionOOS:n.numFormat(a.tuition_oos),Acceptance:a.acceptance_rate,Fee:a.app_fee,collegeName:a.college_name,Logo:a.college_logo,Type:n.dateFormat(a.regular_decision)})))}))))):n.state.resultsFromSearch.map((function(e){return r.a.createElement(d.a.Link,{href:"/loginhome/features/".concat(e),className:"fixedHeight"},r.a.createElement("div",{className:"searchResult"},r.a.createElement("img",{src:N.a,alt:"ImageAgain",className:"imageBox"}),e,r.a.createElement("div",{className:"heart"})))}))},n.setSearch=function(e){e!==n.state.resultsFromSearch&&n.setState({resultsFromSearch:e})},n.state={searchBar:!1,College:[],School:"Any",App:"Any",Filter:"national_ranking",Checkbox:!0,AppFeeLower:"",AppFeeUpper:"",AcceptanceLower:"",AcceptanceUpper:"",PopulationLower:"",PopulationUpper:"",TuitionLower:"",TuitionUpper:"",RankingLower:"",RankingUpper:"",Ordering:"Ascending",TuitionState:"tuition_normal"},n.setSearch=n.setSearch.bind(Object(p.a)(n)),n.searchBarInUse=n.searchBarInUse.bind(Object(p.a)(n)),n.renderExplore=n.renderExplore.bind(Object(p.a)(n)),n.handleClick=n.handleClick.bind(Object(p.a)(n)),n.handleFilter=n.handleFilter.bind(Object(p.a)(n)),n.changeAscent=n.changeAscent.bind(Object(p.a)(n)),n.changeTuitionState=n.changeTuitionState.bind(Object(p.a)(n)),n.numFormat=n.numFormat.bind(Object(p.a)(n)),n.dateFormat=n.dateFormat.bind(Object(p.a)(n)),n}return Object(c.a)(t,[{key:"numFormat",value:function(e){return e.toLocaleString()}},{key:"dateFormat",value:function(e){var a=new Date(1e3*e);return a.getUTCMonth()+1+"/"+a.getUTCDate()+"/"+a.getUTCFullYear()}},{key:"handleClick",value:function(){var e=this,a=[];"Any"!==this.state.App&&(a.push("app_site"),a.push(this.state.App)),"Any"!==this.state.School&&(a.push("school_type"),a.push(this.state.School)),""!==this.state.AppFeeLower&&""!==this.state.AppFeeUpper&&(a.push("app_fee"),a.push("+"+this.state.AppFeeLower),a.push("app_fee"),a.push("-"+this.state.AppFeeUpper)),""!==this.state.AcceptanceLower&&""!==this.state.AcceptanceUpper&&(a.push("acceptance_rate"),a.push("+"+this.state.AcceptanceLower),a.push("acceptance_rate"),a.push("-"+this.state.AcceptanceUpper)),""!==this.state.PopulationLower&&""!==this.state.PopulationUpper&&(a.push("population"),a.push("+"+this.state.PopulationLower),a.push("population"),a.push("-"+this.state.PopulationUpper)),""!==this.state.TuitionLower&&""!==this.state.TuitionLower&&("tuition_normal"===this.state.TuitionState?(a.push("tuition_normal"),a.push("+"+this.state.TuitionLower),a.push("tuition_normal"),a.push("-"+this.state.TuitionUpper)):(a.push("tuition_oos"),a.push("+"+this.state.TuitionLower),a.push("tuition_oos"),a.push("-"+this.state.TuitionUpper))),""!==this.state.RankingLower&&""!==this.state.RankingUpper&&(a.push("national_ranking"),a.push("+"+this.state.RankingLower),a.push("national_ranking"),a.push("-"+this.state.RankingUpper)),console.log(a),fetch("/filter",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({Array:a,Filter:this.state.Filter,IsDescending:this.state.Checkbox})}).then((function(e){return e.json()})).then((function(a){e.setState({College:a})}))}},{key:"handleFilter",value:function(e){var a=this;this.setState({Filter:e.target.value},(function(){a.handleClick(),console.log(a.state.Filter)}))}},{key:"changeAscent",value:function(e){var a=this,t="Ascending"===this.state.Ordering?"Descending":"Ascending";this.setState({Ordering:t},(function(){console.log(a.state.Ordering),a.handleClick()}));var n=!this.state.Checkbox;this.setState({Checkbox:n},(function(){console.log(a.state.Checkbox)}))}},{key:"changeTuitionState",value:function(e){var a=this,t="tuition_normal"===this.state.TuitionState?"tuition_oos":"tuition_normal";this.setState({TuitionState:t},(function(){console.log(a.state.TuitionState)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"Explore"},r.a.createElement(f,{active:"2"}),r.a.createElement(C,{searchBarInUse:this.searchBarInUse,setSearch:this.setSearch}),this.renderExplore(this.state.College))}}]),t}(r.a.Component),A=(t(132),t(181)),w=t(46),j=t(75),L=t(3),B=t(97),F=t.n(B),P=t(98),T=t.n(P),I=t(183),R=t(185),_=t(186),M=t(187),D=t(188),W=t(189),q=t(206),Y=t(191),z=t(207),H=t(148),G=t(192),J=t(204),K=Object(A.a)((function(e){return{root:{},content:{padding:0},inner:{minWidth:1050},nameContainer:{display:"flex",alignItems:"center"},avatar:{marginRight:e.spacing(2)},actions:{justifyContent:"flex-end"}}})),V=function(e){var a=e.className,t=e.users,s=Object(j.a)(e,["className","users"]),i=K(),l=Object(n.useState)([]),c=Object(w.a)(l,2),o=c[0],m=c[1],u=Object(n.useState)(10),h=Object(w.a)(u,2),p=h[0],d=h[1],g=Object(n.useState)(0),v=Object(w.a)(g,2),f=v[0],E=v[1];return r.a.createElement(I.a,Object.assign({},s,{className:Object(L.a)(i.root,a)}),r.a.createElement(R.a,{className:i.content},r.a.createElement(T.a,null,r.a.createElement("div",{className:i.inner},r.a.createElement(_.a,null,r.a.createElement(M.a,null,r.a.createElement(D.a,null,r.a.createElement(W.a,{padding:"checkbox"},r.a.createElement(q.a,{checked:o.length===t.length,color:"primary",indeterminate:o.length>0&&o.length<t.length,onChange:function(a){var t,n=e.users;t=a.target.checked?n.map((function(e){return e.id})):[],m(t)}})),r.a.createElement(W.a,null,"Name"),r.a.createElement(W.a,null,"Email"),r.a.createElement(W.a,null,"Location"),r.a.createElement(W.a,null,"Phone"),r.a.createElement(W.a,null,"Registration date"))),r.a.createElement(Y.a,null,t.slice(0,p).map((function(e){return r.a.createElement(D.a,{className:i.tableRow,hover:!0,key:e.id,selected:-1!==o.indexOf(e.id)},r.a.createElement(W.a,{padding:"checkbox"},r.a.createElement(q.a,{checked:-1!==o.indexOf(e.id),color:"primary",onChange:function(a){return function(e,a){var t=o.indexOf(a),n=[];-1===t?n=n.concat(o,a):0===t?n=n.concat(o.slice(1)):t===o.length-1?n=n.concat(o.slice(0,-1)):t>0&&(n=n.concat(o.slice(0,t),o.slice(t+1))),m(n)}(0,e.id)},value:"true"})),r.a.createElement(W.a,null,r.a.createElement("div",{className:i.nameContainer},r.a.createElement(z.a,{className:i.avatar,src:e.avatarUrl}),r.a.createElement(H.a,{variant:"body1"},e.name))),r.a.createElement(W.a,null,e.email),r.a.createElement(W.a,null,e.address.city,", ",e.address.state,","," ",e.address.country),r.a.createElement(W.a,null,e.phone),r.a.createElement(W.a,null,F()(e.createdAt).format("DD/MM/YYYY")))}))))))),r.a.createElement(G.a,{className:i.actions},r.a.createElement(J.a,{component:"div",count:t.length,onChangePage:function(e,a){E(a)},onChangeRowsPerPage:function(e){d(e.target.value)},page:f,rowsPerPage:p,rowsPerPageOptions:[5,10,25]})))},$=t(195),Q=Object(A.a)((function(e){return{root:{},row:{height:"42px",display:"flex",alignItems:"center",marginTop:e.spacing(1)},spacer:{flexGrow:1},importButton:{marginRight:e.spacing(1)},exportButton:{marginRight:e.spacing(1)},searchInput:{marginRight:e.spacing(1)}}})),X=function(e){var a=e.className,t=Object(j.a)(e,["className"]),n=Q();return r.a.createElement("div",Object.assign({},t,{className:Object(L.a)(n.root,a)}),r.a.createElement("div",{className:n.row},r.a.createElement("span",{className:n.spacer}),r.a.createElement($.a,{className:n.importButton},"Import"),r.a.createElement($.a,{className:n.exportButton},"Export"),r.a.createElement($.a,{color:"primary",variant:"contained"},"Add user")))},Z=t(28),ee=t.n(Z),ae=[{id:ee()(),name:"Ekaterina Tankova",address:{country:"USA",state:"West Virginia",city:"Parkersburg",street:"2849 Fulton Street"},email:"ekaterina.tankova@devias.io",phone:"304-428-3097",avatarUrl:"/images/avatars/avatar_3.png",createdAt:15550164e5},{id:ee()(),name:"Cao Yu",address:{country:"USA",state:"Bristow",city:"Iowa",street:"1865  Pleasant Hill Road"},email:"cao.yu@devias.io",avatarUrl:"/images/avatars/avatar_4.png",phone:"712-351-5711",createdAt:15550164e5},{id:ee()(),name:"Alexa Richardson",address:{country:"USA",state:"Georgia",city:"Atlanta",street:"4894  Lakeland Park Drive"},email:"alexa.richardson@devias.io",phone:"770-635-2682",avatarUrl:"/images/avatars/avatar_2.png",createdAt:15550164e5},{id:ee()(),name:"Anje Keizer",address:{country:"USA",state:"Ohio",city:"Dover",street:"4158  Hedge Street"},email:"anje.keizer@devias.io",avatarUrl:"/images/avatars/avatar_5.png",phone:"908-691-3242",createdAt:155493e7},{id:ee()(),name:"Clarke Gillebert",address:{country:"USA",state:"Texas",city:"Dallas",street:"75247"},email:"clarke.gillebert@devias.io",phone:"972-333-4106",avatarUrl:"/images/avatars/avatar_6.png",createdAt:15547572e5},{id:ee()(),name:"Adam Denisov",address:{country:"USA",state:"California",city:"Bakerfield",street:"317 Angus Road"},email:"adam.denisov@devias.io",phone:"858-602-3409",avatarUrl:"/images/avatars/avatar_1.png",createdAt:15546708e5},{id:ee()(),name:"Ava Gregoraci",address:{country:"USA",state:"California",city:"Redondo Beach",street:"2188  Armbrester Drive"},email:"ava.gregoraci@devias.io",avatarUrl:"/images/avatars/avatar_7.png",phone:"415-907-2647",createdAt:15543252e5},{id:ee()(),name:"Emilee Simchenko",address:{country:"USA",state:"Nevada",city:"Las Vegas",street:"1798  Hickory Ridge Drive"},email:"emilee.simchenko@devias.io",phone:"702-661-1654",avatarUrl:"/images/avatars/avatar_8.png",createdAt:15230484e5},{id:ee()(),name:"Kwak Seong-Min",address:{country:"USA",state:"Michigan",city:"Detroit",street:"3934  Wildrose Lane"},email:"kwak.seong.min@devias.io",avatarUrl:"/images/avatars/avatar_9.png",phone:"313-812-8947"},{id:ee()(),name:"Merrile Burgett",address:{country:"USA",state:"Utah",city:"Salt Lake City",street:"368 Lamberts Branch Road"},email:"merrile.burgett@devias.io",phone:"801-301-7894",avatarUrl:"/images/avatars/avatar_10.png",createdAt:15227028e5}],te=(t(138),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={status:!1,currentCollege:n.props.collegeName},n.handleClick=n.handleClick.bind(Object(p.a)(n)),n}return Object(c.a)(t,[{key:"handleClick",value:function(e){!0===this.state.status&&console.log(this.state.currentCollege),!0===this.state.status?this.setState({status:!1}):this.setState({status:!0})}},{key:"render",value:function(){return!0===this.state.status?r.a.createElement("div",{className:"height"},r.a.createElement("div",{className:"redheart",onClick:this.handleClick})):r.a.createElement("div",{className:"height"},r.a.createElement("div",{className:"heart",onClick:this.handleClick}))}}]),t}(r.a.Component)),ne=Object(A.a)((function(e){return{root:{padding:e.spacing(3)},content:{marginTop:e.spacing(3)}}})),re=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).setSearch=function(e){e!==n.state.resultsFromSearch&&n.setState({resultsFromSearch:e})},n.searchBarInUse=function(e){e!==n.state.searchBar&&n.setState({searchBar:e})},n.renderDashboard=function(){return!1===n.state.searchBar?r.a.createElement("div",{className:ne.root},r.a.createElement(X,null),r.a.createElement("div",{className:ne.theme},r.a.createElement(V,{users:n.state.users}))):n.state.resultsFromSearch.map((function(e){return r.a.createElement("div",null,r.a.createElement(d.a.Link,{href:"/loginhome/features/".concat(e),className:"fixedHeight"},r.a.createElement("div",{className:"searchResult"},r.a.createElement("img",{src:N.a,alt:"Hello",className:"imageBox"}),e)),r.a.createElement(te,{collegeName:e}))}))},n.state={searchBar:!1,resultsFromSearch:[],users:ae},n.setSearch=n.setSearch.bind(Object(p.a)(n)),n.searchBarInUse=n.searchBarInUse.bind(Object(p.a)(n)),n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"dashboard"},r.a.createElement(f,{active:"1"}),r.a.createElement(C,{searchBarInUse:this.searchBarInUse,setSearch:this.setSearch}),r.a.createElement("div",null,this.renderDashboard()))}}]),t}(r.a.Component);t(139);var se=function(){return r.a.createElement("div",{className:"Background-home-page"},r.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-dark fixed-top",id:"mainNav"},r.a.createElement("div",{class:"container"},r.a.createElement("a",{class:"navbar-brand js-scroll-trigger",href:"#page-top"},r.a.createElement("img",{src:"assets/img/navbar-logo.svg",alt:""})),r.a.createElement("button",{class:"navbar-toggler navbar-toggler-right",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},"Menu",r.a.createElement("i",{class:"fa fa-bars ml-1"})),r.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarResponsive"},r.a.createElement("ul",{class:"navbar-nav text-uppercase ml-auto"},r.a.createElement(u.b,{to:"/loginhome/explore"},r.a.createElement("li",{class:"nav-item"},r.a.createElement("a",{class:"nav-link js-scroll-trigger"},"Services"))))))),r.a.createElement("header",{class:"masthead"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"masthead-subheading"},"5300 Colleges. 20+ Applications."),r.a.createElement("div",{class:"masthead-heading text-uppercase"},"One Site."),r.a.createElement(u.b,{to:"/loginhome/login"},r.a.createElement("a",{class:"btn btn-primary btn-xl text-uppercase js-scroll-trigger"},"Login")))),r.a.createElement("section",{class:"page-section bg-light",id:"team"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"text-center"},r.a.createElement("h2",{class:"section-heading text-uppercase"},"Our Amazing Team"),r.a.createElement("h3",{class:"section-subheading text-muted"},"The great founders of Red Pandas")),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-lg-4"},r.a.createElement("div",{class:"team-member"},r.a.createElement("img",{class:"mx-auto rounded-circle",src:"assets/img/team/1.jpg",alt:""}),r.a.createElement("h4",null,"Ashwin Kumar"),r.a.createElement("p",{class:"text-muted"},"Berkeley student"),r.a.createElement("a",{class:"btn btn-dark btn-social mx-2",href:"#!"},r.a.createElement("i",{class:"fa fa-twitter"})),r.a.createElement("a",{class:"btn btn-dark btn-social mx-2",href:"#!"},r.a.createElement("i",{class:"fa fa-facebook-f"})),r.a.createElement("a",{class:"btn btn-dark btn-social mx-2",href:"#!"},r.a.createElement("i",{class:"fa fa-linkedin-square"})))),r.a.createElement("div",{class:"col-lg-4"},r.a.createElement("div",{class:"team-member"},r.a.createElement("img",{class:"mx-auto rounded-circle",src:"assets/img/team/2.jpg",alt:""}),r.a.createElement("h4",null,"Mihir Gupta"),r.a.createElement("p",{class:"text-muted"},"UCSD Student"),r.a.createElement("a",{class:"btn btn-dark btn-social mx-2",href:"#!"},r.a.createElement("i",{class:"fa fa-twitter"})),r.a.createElement("a",{class:"btn btn-dark btn-social mx-2",href:"#!"},r.a.createElement("i",{class:"fa fa-facebook-f"})),r.a.createElement("a",{class:"btn btn-dark btn-social mx-2",href:"#!"},r.a.createElement("i",{class:"fa fa-linkedin-square"})))),r.a.createElement("div",{class:"col-lg-4"},r.a.createElement("div",{class:"team-member"},r.a.createElement("img",{class:"mx-auto rounded-circle",src:"assets/img/team/3.jpg",alt:""}),r.a.createElement("h4",null,"Andrew Kim"),r.a.createElement("p",{class:"text-muted"},"Pro Gamer"),r.a.createElement("a",{class:"btn btn-dark btn-social mx-2",href:"#!"},r.a.createElement("i",{class:"fa fa-twitter"})),r.a.createElement("a",{class:"btn btn-dark btn-social mx-2",href:"#!"},r.a.createElement("i",{class:"fa fa-facebook-f"})),r.a.createElement("a",{class:"btn btn-dark btn-social mx-2",href:"#!"},r.a.createElement("i",{class:"fa fa-linkedin-square"}))))),r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-lg-8 mx-auto text-center"},r.a.createElement("p",{class:"large text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde."))))),r.a.createElement("div",{class:"py-5"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col-md-3 col-sm-6 my-3"},r.a.createElement("a",{href:"#!"},r.a.createElement("img",{class:"img-fluid d-block mx-auto",src:"assets/img/logos/envato.jpg",alt:""}))),r.a.createElement("div",{class:"col-md-3 col-sm-6 my-3"},r.a.createElement("a",{href:"#!"},r.a.createElement("img",{class:"img-fluid d-block mx-auto",src:"assets/img/logos/designmodo.jpg",alt:""}))),r.a.createElement("div",{class:"col-md-3 col-sm-6 my-3"},r.a.createElement("a",{href:"#!"},r.a.createElement("img",{class:"img-fluid d-block mx-auto",src:"assets/img/logos/themeforest.jpg",alt:""}))),r.a.createElement("div",{class:"col-md-3 col-sm-6 my-3"},r.a.createElement("a",{href:"#!"},r.a.createElement("img",{class:"img-fluid d-block mx-auto",src:"assets/img/logos/creative-market.jpg",alt:""})))))),r.a.createElement("section",{class:"page-section",id:"contact"},r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"text-center"},r.a.createElement("h2",{class:"section-heading text-uppercase"},"Contact Us"),r.a.createElement("h3",{class:"section-subheading text-muted"},"We will be happy to hear your feedback!")),r.a.createElement("form",{id:"contactForm",name:"sentMessage",novalidate:"novalidate"},r.a.createElement("div",{class:"row align-items-stretch mb-5"},r.a.createElement("div",{class:"col-md-6"},r.a.createElement("div",{class:"form-group"},r.a.createElement("input",{class:"form-control",id:"name",type:"text",placeholder:"Your Name *",required:"required","data-validation-required-message":"Please enter your name."}),r.a.createElement("p",{class:"help-block text-danger"})),r.a.createElement("div",{class:"form-group"},r.a.createElement("input",{class:"form-control",id:"email",type:"email",placeholder:"Your Email *",required:"required","data-validation-required-message":"Please enter your email address."}),r.a.createElement("p",{class:"help-block text-danger"})),r.a.createElement("div",{class:"form-group mb-md-0"},r.a.createElement("input",{class:"form-control",id:"phone",type:"tel",placeholder:"Your Phone *",required:"required","data-validation-required-message":"Please enter your phone number."}),r.a.createElement("p",{class:"help-block text-danger"}))),r.a.createElement("div",{class:"col-md-6"},r.a.createElement("div",{class:"form-group form-group-textarea mb-md-0"},r.a.createElement("textarea",{class:"form-control",id:"message",placeholder:"Your Message *",required:"required","data-validation-required-message":"Please enter a message."}),r.a.createElement("p",{class:"help-block text-danger"})))),r.a.createElement("div",{class:"text-center"},r.a.createElement("div",{id:"success"}),r.a.createElement("button",{class:"btn btn-primary btn-xl text-uppercase",id:"sendMessageButton",type:"submit"},"Send Message"))))))},ie=t(198),le=t(205),ce=t(196),oe=t(147),me=t(201),ue=t(197),he=t(102),pe=t.n(he);function de(){return r.a.createElement(H.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(ce.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var ge=Object(A.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://images.huffingtonpost.com/2016-02-03-1454538177-6729202-1156952a9865492c403b26f277_008_SMU_MainQuadAerial.jpg)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function ve(){var e=ge(),a=Object(n.useState)({username:""}),t=Object(w.a)(a,2),s=t[0],i=t[1],l=Object(n.useState)({password:""}),c=Object(w.a)(l,2),o=c[0],m=c[1];return r.a.createElement(ue.a,{container:!0,component:"main",className:e.root},r.a.createElement(ie.a,null),r.a.createElement(ue.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),r.a.createElement(ue.a,{item:!0,xs:12,sm:8,md:5,component:oe.a,elevation:6,square:!0},r.a.createElement("div",{className:e.paper},r.a.createElement(z.a,{className:e.avatar},r.a.createElement(pe.a,null)),r.a.createElement(H.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(le.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",onChange:function(e){var a={username:e.target.value};i(a),console.log(a.username)},autoComplete:"email",autoFocus:!0}),r.a.createElement(le.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){var a={password:e.target.value};m(a),console.log(a.password)}}),r.a.createElement("div",{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(e){console.log("testing"),fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({Username:s.username,Password:o.password})}).then((function(e){return e.json()})).then((function(e){console.log(e)}))}},"Sign In"),r.a.createElement(ue.a,{container:!0},r.a.createElement(ue.a,{item:!0,xs:!0},r.a.createElement(ce.a,{href:"#",variant:"body2"},"Forgot password?")),r.a.createElement(ue.a,{item:!0},r.a.createElement(ce.a,{href:"#",variant:"body2"},"Don't have an account? Sign Up"))),r.a.createElement(me.a,{mt:5},r.a.createElement(de,null))))))}t(142);var fe=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).signup=function(){""===n.state.user||""===n.state.password?console.log("empty"):(console.log(n.state.user),console.log(n.state.password)),console.log("button works")},n.state={user:"",password:""},n.handleChangeUser=n.handleChangeUser.bind(Object(p.a)(n)),n.handleChangePass=n.handleChangePass.bind(Object(p.a)(n)),n}return Object(c.a)(t,[{key:"handleChangeUser",value:function(e){this.setState({user:e.target.value})}},{key:"handleChangePass",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Login"},r.a.createElement(f,{active:"4"}),r.a.createElement(C,null),r.a.createElement("div",{className:"credentials"},r.a.createElement("h1",{className:"header"},"Sign Up and Join"),r.a.createElement("div",{className:"email-password"},r.a.createElement("input",{className:"email",type:"text",placeholder:"Email",value:this.state.user,onChange:this.handleChangeUser}),r.a.createElement("input",{className:"password",type:"text",placeholder:"Password",value:this.state.password,onChange:this.handleChangePass}))))}}]),t}(r.a.Component),Ee=(t(143),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).searchBarInUse=function(e){e!==n.state.searchBar&&(console.log(e),n.setState({searchBar:e}))},n.setSearch=function(e){e!==n.state.resultsFromSearch&&n.setState({resultsFromSearch:e})},n.renderFeatures=function(){return!1===n.state.searchBar?r.a.createElement("div",null,n.state.collegeName):n.state.resultsFromSearch.map((function(e){return r.a.createElement(d.a.Link,{href:"/loginhome/features/".concat(e),className:"fixedHeight"},r.a.createElement("div",{className:"searchResult"},r.a.createElement("img",{src:N.a,alt:"Hello",className:"imageBox"}),e,r.a.createElement("div",{className:"heart"})))}))},n.componentWillMount=function(){n.setState({collegeName:n.props.match.params.collegeName})},n.state={searchBar:!1,resultsFromSearch:[],collegeName:""},n.setSearch=n.setSearch.bind(Object(p.a)(n)),n.searchBarInUse=n.searchBarInUse.bind(Object(p.a)(n)),n}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"background-feature"},r.a.createElement(f,{active:"5"}),r.a.createElement(C,{searchBarInUse:this.searchBarInUse,setSearch:this.setSearch}),this.renderFeatures())}}]),t}(r.a.Component)),be=(t(144),function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"Hello World")}}]),t}(n.Component)),ye=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/loginhome/explore",component:x}),r.a.createElement(h.a,{path:"/loginhome/dashboard",component:re}),r.a.createElement(h.a,{path:"/loginhome/login",component:ve}),r.a.createElement(h.a,{path:"/loginhome/signup",component:fe}),r.a.createElement(h.a,{path:"/loginhome/features/:collegeName",component:Ee}),r.a.createElement(h.a,{path:"/loginhome/page",component:be}),r.a.createElement(h.a,{path:"/",component:se}))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},47:function(e,a,t){e.exports=t.p+"media/UCSD_3.914f5b55.jpg"},78:function(e,a,t){}},[[115,1,2]]]);
//# sourceMappingURL=main.d7f5b885.chunk.js.map