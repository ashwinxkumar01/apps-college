(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{19:function(e,a,t){},22:function(e,a,t){e.exports=t.p+"media/logo.5d5d9eef.svg"},25:function(e,a,t){e.exports=t.p+"media/stephen_the_goat.e0323fc4.jpg"},26:function(e,a,t){e.exports=t.p+"media/Student_picture.a3ab7090.png"},27:function(e,a,t){e.exports=t(48)},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(21),s=t.n(r),o=(t(32),t(7)),c=t(8),i=t(10),m=t(9),u=(t(33),t(6)),d=t(1),h=(t(34),t(22)),p=t.n(h);t(35);var E=function(){return l.a.createElement("nav",null,l.a.createElement("ul",{className:"navbar"},l.a.createElement(u.b,{style:{textDecoration:"none"},to:"/"},l.a.createElement("li",null,l.a.createElement("img",{src:p.a,className:"App-logo",alt:"logo"}))),l.a.createElement(u.b,{style:{textDecoration:"none"},to:"/feature"},l.a.createElement("li",{className:"features-link"},"Features")),l.a.createElement(u.b,{style:{textDecoration:"none"},to:"/dashboard"},l.a.createElement("li",{className:"dashboard-link"},"Dashboard")),l.a.createElement(u.b,{style:{textDecoration:"none"},to:"/profile"},l.a.createElement("li",{className:"profile-link"},"Profile")),l.a.createElement("div",{className:"space-between-tabs"}),l.a.createElement(u.b,{style:{textDecoration:"none"},to:"/login"},l.a.createElement("li",{className:"login-link"},"Login")),l.a.createElement(u.b,{style:{textDecoration:"none"},to:"/signup"},l.a.createElement("li",{className:"signup-link"},"Sign up"))))};var g=function(){return l.a.createElement("div",{className:"background-feature"},l.a.createElement(E,null))},b=t(13),f=(t(19),t(24)),v=t.n(f),N=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).login=function(){""===n.state.user||""===n.state.password?console.log("empty"):(console.log(n.state.user),console.log(n.state.password)),console.log("button works")},n.state={user:"",password:""},n.handleChangeUser=n.handleChangeUser.bind(Object(b.a)(n)),n.handleChangePass=n.handleChangePass.bind(Object(b.a)(n)),n}return Object(c.a)(t,[{key:"googleLogin",value:function(){console.log("Google button Clicked!")}},{key:"handleChangeUser",value:function(e){this.setState({user:e.target.value})}},{key:"handleChangePass",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){return l.a.createElement("div",{className:"Login"},l.a.createElement("div",{className:"credentials"},l.a.createElement("div",{className:"email-password"},l.a.createElement("input",{className:"email",type:"text",placeholder:"Email",value:this.state.user,onChange:this.handleChangeUser}),l.a.createElement("input",{className:"password",type:"text",placeholder:"Password",value:this.state.password,onChange:this.handleChangePass})),l.a.createElement("div",{className:"login-button-div"},l.a.createElement("button",{className:"login-button",onClick:this.login},"Log in")),l.a.createElement("div",{className:"google-login-divide"},l.a.createElement("hr",{className:"lineone"}),l.a.createElement("h2",null,"Or"),l.a.createElement("hr",{className:"linetwo"})),l.a.createElement(v.a,{className:"google-button",onClick:this.googleLogin})))}}]),t}(l.a.Component);var y=function(){return l.a.createElement("div",{className:"Signup"},l.a.createElement("div",{className:"background"}))},k=(t(43),t(44),t(45),function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"node-layout"},l.a.createElement("span",null,l.a.createElement("h1",{className:"college-name"},this.props.collegeName)),l.a.createElement("span",null,l.a.createElement("h1",{className:"tuition"},this.props.tuitionCost)),l.a.createElement("span",null,l.a.createElement("h1",{className:"deadlines"},this.props.deadline)),l.a.createElement("span",null,l.a.createElement("h1",{className:"ranking"},this.props.rankings)),l.a.createElement("span",null,l.a.createElement("h1",{className:"location"},this.props.location)),l.a.createElement("span",{className:"button"},l.a.createElement("button",{className:"remove-button"},"Remove")))}}]),t}(n.Component)),C=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={students:[{college_name:"Berkeley",tuition:"5,000",deadlines:"11/30/20",ranking:"100",location:"New York"},{college_name:"UC San Diego",tuition:"15,000",deadlines:"11/30/20",ranking:"1",location:"California"},{college_name:"UC Miramar",tuition:"10,000",deadlines:"11/30/20",ranking:"10",location:"California"},{college_name:"Purdue",tuition:"50,000",deadlines:"11/30/20",ranking:"1000",location:"Illinois"}]},n}return Object(c.a)(t,[{key:"renderTableData",value:function(){return this.state.students.map((function(e,a){var t=e.college_name,n=e.tuition,r=e.deadlines,s=e.ranking,o=e.location;return l.a.createElement(k,{collegeName:t,tuitionCost:n,deadline:r,rankings:s,location:o})}))}},{key:"renderTableHeader",value:function(){return Object.keys(this.state.students[0]).map((function(e,a){return"college_name"===e&&(e="college"),l.a.createElement("div",{className:"header"},l.a.createElement("h1",null,e.toUpperCase()))}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"table-header"},this.renderTableHeader(),l.a.createElement("span",{className:"button-divide"})),this.renderTableData())}}]),t}(n.Component);var O=function(){return l.a.createElement("div",{className:"dashboard"},l.a.createElement(E,null),l.a.createElement("span",null,l.a.createElement("h1",null,"My Dashboard"),l.a.createElement(C,null)))},w=(t(46),t(25)),x=t.n(w);var j=function(){return l.a.createElement("div",{className:"background1"},l.a.createElement(E,null),l.a.createElement("div",null,l.a.createElement("div",{className:"image-box fill"},l.a.createElement("img",{src:x.a,height:"200"})),l.a.createElement("div",{className:"basic-info-box"},l.a.createElement("div",{className:"basic-text"},l.a.createElement("p",null,"Better than Harden."),l.a.createElement("p",null,"Better than Giannis."),l.a.createElement("p",null,"Better than Westbrick."),l.a.createElement("p",null,"Better than Durant."),l.a.createElement("p",null,"Better than Donkey."),l.a.createElement("p",null,"Better than Brady."),l.a.createElement("p",null,"Better than Keenan."),l.a.createElement("p",null,"Better than LeChoke."),l.a.createElement("p",null,"Better than J O R D A N."))),l.a.createElement("div",{className:"advanced-info-box"},l.a.createElement("div",{className:"advanced-text"},l.a.createElement("p",null,"After the first month of the NBA season and a 13-0 start for the Golden State Warriors, it's time we all admit Stephen Curry is the best player in the NBA. LeBron James fans\u2014myself included\u2014should step aside for the Chef (\"Cheph\" patent still pending). It's not a bad thing to relinquish James' top spot. It's merely respect for the hottest player in the league."),l.a.createElement("p",null,"(To clarify: the greatest player in the league is James, but right now, Curry is the best.)"),l.a.createElement("p",null,"If something happens once, it's a fluke. If it happens twice, it's a trend and if it happens three times, then it's a pattern. And that's a microcosm of Curry's ascension to becoming the top player in the league. Curry started off as a hot shooter, turned into one of the game's best shooters and eventually turned into one of the best shooters ever, all while developing a gorgeous handle with an ability to pass and finish at the rim. This all happened in three years\u2014oh, and add in an MVP and championship."),l.a.createElement("p",null,"I won't stand for any Steph slander.  He is the GOAT, if you can't see that then you are certifiably blind and there truly is no saving you.  You must be stuck up USC or some stupid kid from Berkeley or maybe even Toucan Sam.  Whatever your handicap or disability is, it's time to recognize his AIRnesses greatness. "))),l.a.createElement("div",{className:"buttons"},l.a.createElement("div",{className:"apply-buttons"},l.a.createElement("span",null,l.a.createElement("h1",{className:"button-text"},"SRHS PORTAL FOR IDIOTS"))),l.a.createElement("div",{className:"apply-buttons"},l.a.createElement("span",null,l.a.createElement("h1",{className:"button-text"},"UCSD >>> USC"))),l.a.createElement("div",{className:"apply-buttons"},l.a.createElement("span",null,l.a.createElement("h1",{className:"button-text"},"RACCOONS"))),l.a.createElement("div",{className:"apply-buttons"},l.a.createElement("span",null,l.a.createElement("h1",{className:"button-text"},"CURRY THE GOAT GOT EM"))))),l.a.createElement("span",null,l.a.createElement("h1",{className:"name"},"University of Red Pandas")))},S=(t(47),t(26)),B=t.n(S);var D=function(){return l.a.createElement("div",{className:"Background-home-page"},l.a.createElement(E,null),l.a.createElement("span",null,l.a.createElement("h1",{className:"logo-header"},"All your needs, organized. One Place.")),l.a.createElement("div",{className:"searchbar"},l.a.createElement("form",{className:"search-bar"},l.a.createElement("input",{className:"bar",type:"text",placeholder:"Find your dream school"}),l.a.createElement("button",{className:"search-button",type:"submit"},"Search")),l.a.createElement("div",{className:"advanced-box"},l.a.createElement("h2",{className:"advanced"},"Advanced"))),l.a.createElement("div",{className:"slogan-image"},l.a.createElement("div",{className:"description-slogan"},l.a.createElement("span",{className:"slogan"},l.a.createElement("h1",{className:"slogan-text"},"College, Simplified")),l.a.createElement("span",{className:"description-website"},l.a.createElement("p",{className:"description"},"Time to simplify college searching. Welcome to College Organizer, a place where you can find, compare, and determine your dream college."))),l.a.createElement("div",{className:"vector-image"},l.a.createElement("img",{src:B.a,height:"500",alt:"College student"}))))},A=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(d.c,null,l.a.createElement(d.a,{path:"/feature",component:g}),l.a.createElement(d.a,{path:"/dashboard",component:O}),l.a.createElement(d.a,{path:"/profile",component:j}),l.a.createElement(d.a,{path:"/login",component:N}),l.a.createElement(d.a,{path:"/signup",component:y}),l.a.createElement(d.a,{path:"/",component:D}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.fd20364b.chunk.js.map