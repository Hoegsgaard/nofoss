(window.webpackJsonpweb=window.webpackJsonpweb||[]).push([[0],{125:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(14),c=t.n(r),i=(t(90),t(21)),s=t(23),m=(t(92),t(18)),o=t(36),u=t(37),d=t(148),g=t(126),p=t(29),f=t(28),E=t(17),h=t(5),b=function(){function e(){Object(f.a)(this,e),this.brands=["Volvo","Renault","Iveco","Scania"],this.fuelType=["Gas","El"],this.vehicles=[{brand:"Volvo",name:"5-53x",price:"550000",maxWeight:"40000",maxRange:"1000",fuelType:"Gas",imageLink:"https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg"},{brand:"Volvo",name:"6-63x",price:"500000",maxWeight:"27000",maxRange:"2000",fuelType:"El",imageLink:"https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg"},{brand:"Scania",name:"123",price:"450000",maxWeight:"40000",maxRange:"1000",fuelType:"Gas",imageLink:"https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg"},{brand:"Scania",name:"321",price:"350000",maxWeight:"27000",maxRange:"2000",fuelType:"Gas",imageLink:"https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg"},{brand:"Iveco",name:"abc",price:"250000",maxWeight:"3500",maxRange:"750",fuelType:"Gas",imageLink:"https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg"},{brand:"Iveco",name:"def",price:"300000",maxWeight:"7000",maxRange:"1400",fuelType:"Gas",imageLink:"https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg"},{brand:"Iveco",name:"ghi",price:"400000",maxWeight:"40000",maxRange:"2000",fuelType:"Gas",imageLink:"https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg"},{brand:"Renault",name:"lille",price:"300000",maxWeight:"2500",maxRange:"1000",fuelType:"El",imageLink:"https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg"},{brand:"Renault",name:"Stor",price:"350000",maxWeight:"4000",maxRange:"1500",fuelType:"El",imageLink:"https://f.nordiskemedier.dk/2gvdpo4v0qz2xyeb.jpg"}],this.newBrand="",this.newName="",this.newPrice="",this.newMaxWeight="",this.newMaxRange="",this.newFuelType="",this.newImageLink="",this.selectedBrands=[""],this.selectedFuelTypes=[""],this.searchName="",this.searchMinWeight=0,this.searchMaxWeight=0,this.searchMinRange=0,this.searchMaxRange=0}return Object(E.a)(e,[{key:"filteredVehicles",get:function(){var e=this;return v.vehicles.filter((function(a){return(e.selectedBrands.length<=1||e.selectedBrands.includes(a.brand))&&(e.selectedFuelTypes.length<=1||e.selectedFuelTypes.includes(a.fuelType))&&a.name.toLowerCase().includes(e.searchName.toLowerCase())&&(0===e.searchMinWeight||Number(a.maxWeight)>=Number(e.searchMinWeight))&&(0===e.searchMaxWeight||Number(a.maxWeight)<=Number(e.searchMaxWeight))&&(0===e.searchMinRange||Number(a.maxRange)>=Number(e.searchMinRange))&&(0===e.searchMaxRange||Number(a.maxRange)<=Number(e.searchMaxRange))}))}}]),e}();Object(h.g)(b,{vehicles:h.l,newBrand:h.l,newName:h.l,newPrice:h.l,newMaxWeight:h.l,newMaxRange:h.l,newFuelType:h.l,newImageLink:h.l,selectedBrands:h.l,selectedFuelTypes:h.l,searchName:h.l,searchMinWeight:h.l,searchMaxWeight:h.l,searchMinRange:h.l,searchMaxRange:h.l,filteredVehicles:h.d});var v=new b,x=Object(i.a)((function(){return l.a.createElement("div",null,l.a.createElement(m.a,null,l.a.createElement(o.a,null,l.a.createElement(u.a,{md:{span:6,offset:3},style:{background:"#fff",padding:"20pt",border:"1px solid",borderColor:"#d8dee2",borderRadius:"5pt"}},l.a.createElement(m.a,null,l.a.createElement(o.a,null,l.a.createElement(u.a,{md:{span:10,offset:1}},l.a.createElement("text",null,"Brand"),l.a.createElement(d.a,{className:"mb-3"},l.a.createElement(g.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",value:v.newBrand,onChange:function(e){return v.newBrand=e.target.value}})))),l.a.createElement(o.a,null,l.a.createElement(u.a,{md:{span:10,offset:1}},l.a.createElement("text",null,"Weight"),l.a.createElement(d.a,{className:"mb-3"},l.a.createElement(g.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",value:v.newWeight,onChange:function(e){return v.newWeight=e.target.value}})))),l.a.createElement(o.a,null,l.a.createElement(u.a,{md:{span:10,offset:1}},l.a.createElement("text",null,"Fuel"),l.a.createElement(d.a,{className:"mb-3"},l.a.createElement(g.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",value:v.newFuel,onChange:function(e){return v.newFuel=e.target.value}})))),l.a.createElement(o.a,null,l.a.createElement(u.a,{md:{span:10,offset:1}},l.a.createElement(p.a,{onClick:function(){return v.vehicles.push({brand:v.newBrand,name:v.newWeight,price:v.newFuel})},style:{width:"100%",background:"#637724",borderColor:"#637724"}},"Opret K\xf8ret\xf8j"))))))))}));function k(){return l.a.createElement("div",null,l.a.createElement(m.a,null,l.a.createElement(o.a,null,l.a.createElement(u.a,{md:{span:6,offset:3},style:{background:"#fff",padding:"20pt",border:"1px solid",borderColor:"#d8dee2",borderRadius:"5pt"}},l.a.createElement(m.a,null,l.a.createElement(o.a,null,l.a.createElement(u.a,{md:{span:10,offset:1}},l.a.createElement("text",null,"Firm"),l.a.createElement(d.a,{className:"mb-3"},l.a.createElement(g.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default"})))),l.a.createElement(o.a,null,l.a.createElement(u.a,{md:{span:10,offset:1}},l.a.createElement("text",null,"First Name"),l.a.createElement(d.a,{className:"mb-3"},l.a.createElement(g.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default"})))),l.a.createElement(o.a,null,l.a.createElement(u.a,{md:{span:10,offset:1}},l.a.createElement("text",null,"Last Name"),l.a.createElement(d.a,{className:"mb-3"},l.a.createElement(g.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default"})))),l.a.createElement(o.a,null,l.a.createElement(u.a,{md:{span:10,offset:1}},l.a.createElement("text",null,"Email"),l.a.createElement(d.a,{className:"mb-3"},l.a.createElement(g.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default"})))),l.a.createElement(o.a,null,l.a.createElement(u.a,{md:{span:10,offset:1}},l.a.createElement("text",null,"Password"),l.a.createElement(d.a,{className:"mb-3"},l.a.createElement(g.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default"})))),l.a.createElement(o.a,null,l.a.createElement(u.a,{md:{span:10,offset:1}},l.a.createElement("text",null,"Password Confirm"),l.a.createElement(d.a,{className:"mb-3"},l.a.createElement(g.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default"})))),l.a.createElement(o.a,null,l.a.createElement(u.a,{md:{span:10,offset:1}},l.a.createElement(p.a,{style:{width:"100%",background:"#637724",borderColor:"#637724"}},"Opret bruger"))))))))}var y=t(43),w=t(62),N=t(58),T=t.n(N),G=t(75),O=new(function(){function e(){Object(f.a)(this,e)}return Object(E.a)(e,[{key:"doLogin",value:function(e){var a=this;fetch("rest/login",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){e.text().then((function(e){R.token=e,localStorage.setItem("NofossToken",e),R.state=R.loginStates.LOGGED_IN,R.startTokenCheck()}))})).catch((function(){return a.state=R.loginStates.LOGGED_OUT}))}},{key:"getVehicles",value:function(){var e=Object(G.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("rest/vehicles",{headers:{Authorization:"Bearer "+R.token}});case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}()),L=t(76),D=function(){function e(){Object(f.a)(this,e),this.loginStates={LOGGING_IN:"loading",LOGGED_OUT:"logout",LOGGED_IN:"LoggedIn"},this.token=window.localStorage.getItem("NofossToken"),this.adminNavBar=[{href:"#/search",name:"S\xf8g k\xf8ret\xf8j"},{href:"#/create/vehicle",name:"Opret k\xf8ret\xf8j"},{href:"#/profile",name:"Profil"}],this.loginData={username:"",password:""},this.state=this.loginStates.LOGGED_OUT,this.token&&(this.state=this.loginStates.LOGGED_IN),this.startTokenCheck()}return Object(E.a)(e,[{key:"doLogin",value:function(){O.doLogin(this.loginData)}},{key:"startTokenCheck",value:function(){var e=this;if(this.token){var a=this.token.split(".")[1],t=JSON.parse(window.atob(a)),n=new Date(1e3*t.exp)-new Date-1e4;this.timer=setTimeout((function(){localStorage.clear(),e.token=null,e.state=e.loginStates.LOGGED_OUT,L.a.warn("Dit login er udl\xf8bet. Log ind igen")}),n)}}}]),e}();Object(h.g)(D,{state:h.l});var R=new D,C=Object(i.a)((function(){return l.a.createElement(m.a,null,l.a.createElement(o.a,null,l.a.createElement(u.a,{md:{span:8,offset:0}},l.a.createElement(y.a,{bg:"light",expand:"lg"},l.a.createElement(y.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(y.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(w.a,{className:"mr-auto"},l.a.createElement(y.a.Brand,{href:"#/search"},"Nofoss"),R.adminNavBar.map((function(e){return l.a.createElement(w.a.Link,{href:e.href},e.name)})))))),l.a.createElement(u.a,{md:{span:4,offset:0},className:"d-none d-lg-block"},l.a.createElement("img",{src:"https://i.imgur.com/bVMYcYR.png",className:"Logo",alt:"NoFoss Logo"}))))})),W=function(){return l.a.createElement("div",null,l.a.createElement(m.a,null,l.a.createElement(o.a,null,l.a.createElement(u.a,{md:{span:6,offset:3},style:{background:"#fff",padding:"20pt",border:"1px solid",borderColor:"#d8dee2",borderRadius:"5pt"}},l.a.createElement(m.a,null,l.a.createElement(o.a,null,l.a.createElement(u.a,{md:{span:10,offset:1}},l.a.createElement("text",null,"Email"),l.a.createElement(d.a,{className:"mb-3"},l.a.createElement(g.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",onChange:function(e){return R.loginData.username=e.target.value}})))),l.a.createElement(o.a,null,l.a.createElement(u.a,{md:{span:10,offset:1}},l.a.createElement("text",null,"Password"),l.a.createElement(d.a,{className:"mb-3"},l.a.createElement(g.a,{type:"password","aria-label":"Default","aria-describedby":"inputGroup-sizing-default",onChange:function(e){return R.loginData.password=e.target.value}})))),l.a.createElement(o.a,null,l.a.createElement(u.a,{md:{span:5,offset:1}},l.a.createElement(p.a,{onClick:j,style:{width:"100%",background:"#637724",borderColor:"#637724"}},"Login")),l.a.createElement(u.a,{md:{span:5,offset:0}},l.a.createElement(p.a,{href:"#/create/User",style:{width:"100%",background:"#fff",border:"1px solid",borderColor:"#637724",color:"#637724"}},"Opret bruger"))))))))};function j(){R.doLogin()}t(22);var B=t(63),M=t(44);function z(e){var a=e.Car,t=a.name,n=a.brand,r=a.price,c=a.fuelType,i=a.maxWeight,s=a.maxRange,m=a.imageLink;return l.a.createElement(M.a,null,l.a.createElement(o.a,null,l.a.createElement(u.a,{md:{span:4,offset:0}},l.a.createElement(M.a.Header,null,n," - ",t),l.a.createElement(M.a.Body,null,l.a.createElement("img",{style:{width:"100%"},src:m,alt:"Billede af bil"}))),l.a.createElement(u.a,null,l.a.createElement(M.a.Body,null,"Pris: ",r," kr.",l.a.createElement("br",null),"Totalv\xe6gt: ",i," kg.",l.a.createElement("br",null),"Total r\xe6kkevidde: ",s," km.",l.a.createElement("br",null),"Br\xe6ndstof: ",c,"."))))}var S=t(40),F=t.n(S),I=t(59),V=t.n(I),_=t(152);var q=Object(i.a)((function(){var e=l.a.useState([0,100]),a=Object(B.a)(e,2),t=(a[0],a[1],l.a.useState({Volvo:!0,Mercedes:!0,Ford:!0})),n=Object(B.a)(t,2),r=(n[0],n[1],v.brands.map((function(e,a){return l.a.createElement(_.a,{key:a,control:l.a.createElement(V.a,{value:e,onChange:function(a){if(a.target.checked)v.selectedBrands.push(e),console.log(v.selectedBrands);else{var t=v.selectedBrands.indexOf(a.target.value);t>-1&&v.selectedBrands.splice(t,1)}}}),label:e})}))),c=v.fuelType.map((function(e,a){return l.a.createElement(_.a,{key:a,control:l.a.createElement(V.a,{value:e,onChange:function(a){if(a.target.checked)v.selectedFuelTypes.push(e),console.log(v.selectedFuelTypes);else{var t=v.selectedFuelTypes.indexOf(a.target.value);t>-1&&v.selectedFuelTypes.splice(t,1)}}}),label:e})}));return l.a.createElement(m.a,null,l.a.createElement(o.a,null,l.a.createElement(u.a,null,l.a.createElement(F.a,{gutterBottom:!0},"M\xe6rke"),l.a.createElement(o.a,null,r),l.a.createElement(F.a,{gutterBottom:!0},"Navn"),l.a.createElement(o.a,null,l.a.createElement(d.a,{className:"mb-3"},l.a.createElement(g.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",onChange:function(e){return v.searchName=e.target.value}}))),l.a.createElement(F.a,{gutterBottom:!0},"V\xe6gt"),l.a.createElement(o.a,null,l.a.createElement(u.a,null,l.a.createElement(d.a,{className:"mb-3"},l.a.createElement(d.a.Append,null,l.a.createElement(d.a.Text,{id:"basic-addon2"},"min")),l.a.createElement(g.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",onChange:function(e){return v.searchMinWeight=e.target.value}}),l.a.createElement(d.a.Append,null,l.a.createElement(d.a.Text,{id:"basic-addon2"},"kg.")))),l.a.createElement(u.a,null,l.a.createElement(d.a,{className:"mb-3"},l.a.createElement(d.a.Append,null,l.a.createElement(d.a.Text,{id:"basic-addon2"},"max")),l.a.createElement(g.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",onChange:function(e){return v.searchMaxWeight=e.target.value}}),l.a.createElement(d.a.Append,null,l.a.createElement(d.a.Text,{id:"basic-addon2"},"kg."))))),l.a.createElement(F.a,{gutterBottom:!0},"R\xe6kkevidde"),l.a.createElement(o.a,null,l.a.createElement(u.a,null,l.a.createElement(d.a,{className:"mb-3"},l.a.createElement(d.a.Append,null,l.a.createElement(d.a.Text,{id:"basic-addon2"},"min")),l.a.createElement(g.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",onChange:function(e){return v.searchMinRange=e.target.value}}),l.a.createElement(d.a.Append,null,l.a.createElement(d.a.Text,{id:"basic-addon2"},"km.")))),l.a.createElement(u.a,null,l.a.createElement(d.a,{className:"mb-3"},l.a.createElement(d.a.Append,null,l.a.createElement(d.a.Text,{id:"basic-addon2"},"max")),l.a.createElement(g.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",onChange:function(e){return v.searchMaxRange=e.target.value}}),l.a.createElement(d.a.Append,null,l.a.createElement(d.a.Text,{id:"basic-addon2"},"km."))))),l.a.createElement(F.a,{gutterBottom:!0},"Drivmiddel"),l.a.createElement(o.a,null,c)),l.a.createElement(u.a,{xs:8,style:{overflow:"scroll"}},v.filteredVehicles.map((function(e){return l.a.createElement(z,{Car:e})})))))})),A=Object(i.a)((function(){return l.a.createElement("h1",null,"Her vil dine profil indstillinger blive vist")}));var P=Object(i.a)((function(){return l.a.createElement(m.a,null,l.a.createElement(C,null),l.a.createElement(s.c,null,R.state!==R.loginStates.LOGGED_IN&&l.a.createElement(W,null),R.state===R.loginStates.LOGGED_IN&&l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{exact:!0,path:"/login",component:W}),l.a.createElement(s.a,{exact:!0,path:"/search",component:q}),l.a.createElement(s.a,{exact:!0,path:"/create/vehicle",component:x}),l.a.createElement(s.a,{exact:!0,path:"/create/user",component:k}),l.a.createElement(s.a,{exact:!0,path:"/profile",component:A}),l.a.createElement(s.a,{exact:!0,path:"/",component:q})),l.a.createElement(s.a,{render:function(){return l.a.createElement("h1",null,"404")}})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=t(47);c.a.render(l.a.createElement(U.a,null,l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},85:function(e,a,t){e.exports=t(125)},90:function(e,a,t){},92:function(e,a,t){}},[[85,1,2]]]);
//# sourceMappingURL=main.4be55202.chunk.js.map