(window.webpackJsonpweb=window.webpackJsonpweb||[]).push([[0],{129:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(15),c=t.n(r),o=(t(95),t(14)),i=t(17),s=(t(97),t(23)),u=t(16),m=t(40),d=t(41),f=t(150),E=t(156),g=t(154),h=t(37),p=t(32),b=t(20),w=t(5),v=t(29),y=t.n(v),k=t(48),x=t(79),N=function(){function e(){Object(p.a)(this,e),this.loginData={username:"",password:""},this.loginStates={LOGGING_IN:"loading",LOGGED_OUT:"logout",LOGGED_IN:"LoggedIn"},this.token=window.localStorage.getItem("NofossToken"),this.newFirm="",this.newFirstName="",this.newLastName="",this.newEmail="",this.newPasswordOne="",this.newpasswordtow="",this.newHashPass="",this.adminNavBar=[{href:"#/search",name:"S\xf8g k\xf8ret\xf8j"},{href:"#/create/vehicle",name:"Opret k\xf8ret\xf8j"},{href:"#/profile",name:"Profil"}],this.state=this.loginStates.LOGGED_OUT,this.token&&(this.state=this.loginStates.LOGGED_IN),this.startTokenCheck()}return Object(b.a)(e,[{key:"doLogin",value:function(){T.doLogin(this.loginData)}},{key:"startTokenCheck",value:function(){var e=this;if(this.token){var a=this.token.split(".")[1],t=JSON.parse(window.atob(a)),n=new Date(1e3*t.exp)-new Date-1e4;this.timer=setTimeout((function(){localStorage.clear(),e.token=null,e.state=e.loginStates.LOGGED_OUT,x.a.warn("Dit login er udl\xf8bet. Log ind igen")}),n)}}}]),e}();Object(w.g)(N,{state:w.l,loginData:w.l,newFirm:w.l,newFirstName:w.l,newLastName:w.l,newEmail:w.l,newPasswordOne:w.l,newpasswordtow:w.l,hashPass:w.l});var O=new N,T=new(function(){function e(){Object(p.a)(this,e)}return Object(b.a)(e,[{key:"doGoogleLogin",value:function(e,a){fetch("rest/loginGoogle",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){e.text().then((function(e){200===JSON.parse(e)&&fetch("rest/loginGoogle/getToken",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(e){e.text().then((function(e){O.token=e,localStorage.setItem("NofossToken",e),O.state=O.loginStates.LOGGED_IN,O.startTokenCheck()}))}))}))})).catch((function(){return O.state=O.loginStates.LOGGED_OUT}))}},{key:"doLogin",value:function(e){O.state=O.loginStates.LOGGING_IN,fetch("rest/user/login",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((function(e){200===e.status?e.text().then((function(e){O.token=e,localStorage.setItem("NofossToken",e),O.state=O.loginStates.LOGGED_IN,O.startTokenCheck()})):e.status})).catch((function(){return O.state=O.loginStates.LOGGED_OUT}))}},{key:"createUser",value:function(){var e=Object(k.a)(y.a.mark((function e(){var a=this;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("rest/user",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nameFirst:O.newFirstName,nameLast:O.newLastName,firm:O.newFirm,email:O.newEmail,password:O.newPasswordOne})}).catch((function(){return a.state=O.loginStates.LOGGED_OUT}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"doVehicleFetch",value:function(){var e=Object(k.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("rest/mongo",{method:"GET",headers:{Authorization:"Bearer "+O.token}}).then((function(e){200===e.status?e.json().then((function(e){e.map((function(e){return M.vehicles.push({_id:e._id,brand:e.brand,model:e.name,fuelType:e.fuelType,maxWeight:e.weight,maxRange:e.range,price:e.price,imageLink:e.imageLink})}))})):e.status})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"createVehicle",value:function(){var e=Object(k.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("rest/mongo",{method:"POST",headers:{Authorization:"Bearer "+O.token},body:JSON.stringify({brand:M.newBrand,name:M.newModel,fuelType:M.newFuelType,weight:M.newMaxWeight,range:M.newMaxRange,price:M.newPrice,imageLink:M.newImageLink})});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"deleteVehicle",value:function(){var e=Object(k.a)(y.a.mark((function e(a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("rest/mongo/"+a,{method:"DELETE",headers:{Authorization:"Bearer "+O.token}});case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}]),e}()),G=function(){function e(){Object(p.a)(this,e),this.vehicles=[],this.brands=["Volvo","Renault","Iveco","Scania"],this.fuelType=["Gas","El"],this.newBrand="",this.newModel="",this.newPrice="",this.newMaxWeight="",this.newMaxRange="",this.newFuelType="",this.newImageLink="",this.selectedBrands=[""],this.selectedFuelTypes=[""],this.searchModel="",this.searchMinWeight=0,this.searchMaxWeight=0,this.searchMinRange=0,this.searchMaxRange=0,T.doVehicleFetch()}return Object(b.a)(e,[{key:"deleteVehicle",value:function(e){this.vehicles=this.vehicles.filter((function(a){return a._id!==e})),T.deleteVehicle(e)}},{key:"filteredVehicles",get:function(){var e=this;return M.vehicles.filter((function(a){return(e.selectedBrands.length<=1||e.selectedBrands.includes(a.brand))&&(e.selectedFuelTypes.length<=1||e.selectedFuelTypes.includes(a.fuelType))&&a.model.toLowerCase().includes(e.searchModel.toLowerCase())&&(0===e.searchMinWeight||Number(a.maxWeight)>=Number(e.searchMinWeight))&&(0===e.searchMaxWeight||Number(a.maxWeight)<=Number(e.searchMaxWeight))&&(0===e.searchMinRange||Number(a.maxRange)>=Number(e.searchMinRange))&&(0===e.searchMaxRange||Number(a.maxRange)<=Number(e.searchMaxRange))}))}}]),e}();Object(w.g)(G,{vehicles:w.l,newBrand:w.l,newModel:w.l,newPrice:w.l,newMaxWeight:w.l,newMaxRange:w.l,newFuelType:w.l,newImageLink:w.l,selectedBrands:w.l,selectedFuelTypes:w.l,searchModel:w.l,searchMinWeight:w.l,searchMaxWeight:w.l,searchMinRange:w.l,searchMaxRange:w.l,filteredVehicles:w.d});var M=new G,C=Object(o.a)((function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),o=Object(s.a)(c,2),i=o[0],p=o[1];function b(){""!==M.newBrand&&""!==M.newModel&&""!==M.newFuelType&&""!==M.newMaxWeight&&""!==M.newMaxRange&&""!==M.newPrice&&""!==M.newImageLink?(M.vehicles.push({brand:M.newBrand,model:M.newModel,fuelType:M.newFuelType,maxWeight:M.newMaxWeight,maxRange:M.newMaxRange,price:M.newPrice,imageLink:M.newImageLink}),T.createVehicle(),M.newBrand="",M.newModel="",M.newFuelType="",M.newMaxWeight="",M.newMaxRange="",M.newPrice="",M.newImageLink="",r(!0)):p(!0)}return l.a.createElement("div",null,l.a.createElement(u.a,null,l.a.createElement(m.a,null,l.a.createElement(d.a,{md:{span:6,offset:3},style:{background:"#fff",padding:"20pt",border:"1px solid",borderColor:"#d8dee2",borderRadius:"5pt"}},l.a.createElement(u.a,null,l.a.createElement(m.a,null,l.a.createElement(d.a,{md:{span:10,offset:1}},l.a.createElement("text",null,"M\xe6rke"),l.a.createElement(f.a,{className:"mb-3"},l.a.createElement(E.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",value:M.newBrand,onChange:function(e){return M.newBrand=e.target.value}})))),l.a.createElement(m.a,null,l.a.createElement(d.a,{md:{span:10,offset:1}},l.a.createElement("text",null,"Model navn / nr."),l.a.createElement(f.a,{className:"mb-3"},l.a.createElement(E.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",value:M.newModel,onChange:function(e){return M.newModel=e.target.value}})))),l.a.createElement(m.a,null,l.a.createElement(d.a,{md:{span:10,offset:1}},l.a.createElement("text",null,"Drivmiddel"),l.a.createElement(f.a,{className:"mb-3"},l.a.createElement(E.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",value:M.newFuelType,onChange:function(e){return M.newFuelType=e.target.value}})))),l.a.createElement(m.a,null,l.a.createElement(d.a,{md:{span:10,offset:1}},l.a.createElement("text",null,"Max v\xe6gt"),l.a.createElement(f.a,{className:"mb-3"},l.a.createElement(E.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",value:M.newMaxWeight,onChange:function(e){return M.newMaxWeight=e.target.value}})))),l.a.createElement(m.a,null,l.a.createElement(d.a,{md:{span:10,offset:1}},l.a.createElement("text",null,"Max r\xe6kkevidde"),l.a.createElement(f.a,{className:"mb-3"},l.a.createElement(E.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",value:M.newMaxRange,onChange:function(e){return M.newMaxRange=e.target.value}})))),l.a.createElement(m.a,null,l.a.createElement(d.a,{md:{span:10,offset:1}},l.a.createElement("text",null,"Pris"),l.a.createElement(f.a,{className:"mb-3"},l.a.createElement(E.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",value:M.newPrice,onChange:function(e){return M.newPrice=e.target.value}})))),l.a.createElement(m.a,null,l.a.createElement(d.a,{md:{span:10,offset:1}},l.a.createElement("text",null,"Link til billede"),l.a.createElement(f.a,{className:"mb-3"},l.a.createElement(E.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",value:M.newImageLink,onChange:function(e){return M.newImageLink=e.target.value}})))),l.a.createElement(m.a,null,l.a.createElement(d.a,{md:{span:10,offset:1}},l.a.createElement(h.a,{onClick:function(){b()},style:{width:"100%",background:"#637724",borderColor:"#637724"}},"Opret K\xf8ret\xf8j"))))),l.a.createElement(d.a,{md:{span:3,offset:0}},l.a.createElement(g.a,{onClose:function(){return r(!1)},show:t,delay:3e3,autohide:!0},l.a.createElement(g.a.Header,null,l.a.createElement("strong",{className:"mr-auto"},"Nofoss")),l.a.createElement(g.a.Body,null,"K\xf8ret\xf8j oprettet")),l.a.createElement(g.a,{onClose:function(){return p(!1)},show:i,delay:3e3,autohide:!0},l.a.createElement(g.a.Header,null,l.a.createElement("strong",{className:"mr-auto"},"Nofoss")),l.a.createElement(g.a.Body,null,"Alle felter skal v\xe6re udfyldt"))))))})),L=t(81),D=t.n(L),j=t(63),S=t.n(j),B=Object(o.a)((function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),o=Object(s.a)(c,2),i=o[0],p=o[1];var b=function(e){e.w3.U3&&T.doGoogleLogin(e.accessToken,e.w3.U3)};return l.a.createElement("div",null,l.a.createElement(u.a,null,l.a.createElement(m.a,null,l.a.createElement(d.a,{md:{span:6,offset:3},style:{background:"#fff",padding:"20pt",border:"1px solid",borderColor:"#d8dee2",borderRadius:"5pt"}},l.a.createElement(u.a,null,l.a.createElement(m.a,null,l.a.createElement(d.a,{md:{span:10,offset:1}},l.a.createElement("text",null,"Email"),l.a.createElement(f.a,{className:"mb-3"},l.a.createElement(E.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",value:O.loginData.username,onChange:function(e){return O.loginData.username=e.target.value}})))),l.a.createElement(m.a,null,l.a.createElement(d.a,{md:{span:10,offset:1}},l.a.createElement("text",null,"Password"),l.a.createElement(f.a,{className:"mb-3"},l.a.createElement(E.a,{id:"passwordText",type:"password","aria-label":"Default","aria-describedby":"inputGroup-sizing-default",value:O.loginData.password,onChange:function(e){return O.loginData.password=e.target.value}})))),l.a.createElement(m.a,null,l.a.createElement(d.a,{md:{span:5,offset:1}},l.a.createElement(h.a,{onClick:function(){""!==O.loginData.username&&""!==O.loginData.password?(O.doLogin(),O.state!==O.loginStates.LOGGED_IN&&O.state!==O.loginStates.LOGGING_IN&&(console.log(O.state),O.loginData.password="",r(!0))):p(!0)},style:{width:"100%",background:"#637724",borderColor:"#637724"}},"Login")),l.a.createElement(d.a,{md:{span:5,offset:0}},l.a.createElement(h.a,{href:"#/create/User",style:{width:"100%",background:"#fff",border:"1px solid",borderColor:"#637724",color:"#637724"}},"Opret bruger"))),l.a.createElement(m.a,null,l.a.createElement(d.a,{md:{span:5,offset:1},style:{paddingTop:"5pt"}},l.a.createElement(S.a,{clientId:"535992274215-0i5rm3il5tt76ds4k3a6048pjocvcmob.apps.googleusercontent.com",buttonText:"Login med Google",onSuccess:b,onFailure:b,cookiePolicy:"single_host_origin"}))))),l.a.createElement(d.a,null,l.a.createElement(g.a,{onClose:function(){return r(!1)},show:t,delay:3e3,autohide:!0},l.a.createElement(g.a.Header,null,l.a.createElement("strong",{className:"mr-auto"},"Nofoss")),l.a.createElement(g.a.Body,null,"Email og password stemmer ikke over ens")),l.a.createElement(g.a,{onClose:function(){return p(!1)},show:i,delay:3e3,autohide:!0},l.a.createElement(g.a.Header,null,l.a.createElement("strong",{className:"mr-auto"},"Nofoss")),l.a.createElement(g.a.Body,null,"Alle felter skal v\xe6re udfyldt"))))))})),F=!1,P=Object(i.f)(Object(o.a)((function(e){var a=Object(n.useState)(!1),t=Object(s.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(!1),i=Object(s.a)(o,2),p=i[0],b=i[1];function w(){""!==O.newFirm&&""!==O.newFirstName&&""!==O.newLastName&&""!==O.newEmail&&""!==O.newPasswordOne&&""!==O.newpasswordtow&&F?O.newpasswordtow===O.newPasswordOne?(T.createUser(),O.newFirm="",O.newFirstName="",O.newLastName="",O.newEmail="",O.newPasswordOne="",O.newpasswordtow="",window.location.replace("/")):c(!0):b(!0)}return l.a.createElement("div",null,l.a.createElement(u.a,null,l.a.createElement(m.a,null,l.a.createElement(d.a,{md:{span:6,offset:3},style:{background:"#fff",padding:"20pt",border:"1px solid",borderColor:"#d8dee2",borderRadius:"5pt"}},l.a.createElement(u.a,null,l.a.createElement(m.a,null,l.a.createElement(d.a,{md:{span:10,offset:1}},l.a.createElement("text",null,"Firma"),l.a.createElement(f.a,{id:"test",className:"mb-3"},l.a.createElement(E.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",value:O.newFirm,onChange:function(e){return O.newFirm=e.target.value}})))),l.a.createElement(m.a,null,l.a.createElement(d.a,{md:{span:10,offset:1}},l.a.createElement("text",null,"Fornavn"),l.a.createElement(f.a,{className:"mb-3"},l.a.createElement(E.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",value:O.newFirstName,onChange:function(e){return O.newFirstName=e.target.value}})))),l.a.createElement(m.a,null,l.a.createElement(d.a,{md:{span:10,offset:1}},l.a.createElement("text",null,"Efternavn"),l.a.createElement(f.a,{className:"mb-3"},l.a.createElement(E.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",value:O.newLastName,onChange:function(e){return O.newLastName=e.target.value}})))),l.a.createElement(m.a,null,l.a.createElement(d.a,{md:{span:10,offset:1}},l.a.createElement("text",null,"Email"),l.a.createElement(f.a,{className:"mb-3"},l.a.createElement(E.a,{type:"email","aria-label":"Default","aria-describedby":"inputGroup-sizing-default",value:O.newEmail,onChange:function(e){return O.newEmail=e.target.value}})))),l.a.createElement(m.a,null,l.a.createElement(d.a,{md:{span:10,offset:1}},l.a.createElement("text",null,"Password"),l.a.createElement(f.a,{className:"mb-3"},l.a.createElement(E.a,{type:"password","aria-label":"Default","aria-describedby":"inputGroup-sizing-default",value:O.newPasswordOne,onChange:function(e){return O.newPasswordOne=e.target.value}})))),l.a.createElement(m.a,null,l.a.createElement(d.a,{md:{span:10,offset:1}},l.a.createElement("text",null,"Gentag password"),l.a.createElement(f.a,{className:"mb-3"},l.a.createElement(E.a,{type:"password","aria-label":"Default","aria-describedby":"inputGroup-sizing-default",value:O.newpasswordtow,onChange:function(e){return O.newpasswordtow=e.target.value}})))),l.a.createElement(m.a,null,l.a.createElement(d.a,{md:{span:10,offset:1}},l.a.createElement(h.a,{onClick:function(){return w()},style:{width:"100%",background:"#637724",borderColor:"#637724"}},"Opret bruger"))),l.a.createElement(m.a,null,l.a.createElement(d.a,{md:{span:10,offset:1}},l.a.createElement(D.a,{sitekey:"6LcaJsYUAAAAAHQ7cbFSBUjwcd3MyuDStYbHF6CX",render:"explicit",onloadCallback:function(){console.log("Done")},verifyCallback:function(e){e&&(F=!0)}}))))),l.a.createElement(d.a,{md:{span:3,offset:0}},l.a.createElement(g.a,{onClose:function(){return c(!1)},show:r,delay:3e3,autohide:!0},l.a.createElement(g.a.Header,null,l.a.createElement("strong",{className:"mr-auto"},"Nofoss")),l.a.createElement(g.a.Body,null,"Password er ikke ens")),l.a.createElement(g.a,{onClose:function(){return b(!1)},show:p,delay:3e3,autohide:!0},l.a.createElement(g.a.Header,null,l.a.createElement("strong",{className:"mr-auto"},"Nofoss")),l.a.createElement(g.a.Body,null,"Alle felter skal v\xe6re udfyldt")))," ")))}))),R=t(49),I=t(68),W=Object(o.a)((function(){return l.a.createElement(u.a,null,l.a.createElement(m.a,null,l.a.createElement(d.a,{md:{span:8,offset:0}},l.a.createElement(R.a,{bg:"light",expand:"lg"},l.a.createElement(R.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(R.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(I.a,{className:"mr-auto"},l.a.createElement(R.a.Brand,{href:"#/search"},"Nofoss"),O.adminNavBar.map((function(e){return l.a.createElement(I.a.Link,{href:e.href},e.name)})))))),l.a.createElement(d.a,{md:{span:4,offset:0},className:"d-none d-lg-block"},l.a.createElement("img",{src:"https://i.imgur.com/bVMYcYR.png",className:"Logo",alt:"NoFoss Logo"}))))})),z=(t(25),t(26));function _(e){var a=e.Car,t=a.model,n=a.brand,r=a.price,c=a.fuelType,o=a.maxWeight,i=a.maxRange,s=a.imageLink,u=a._id;return l.a.createElement(z.a,null,l.a.createElement(m.a,null,l.a.createElement(d.a,{md:{span:4,offset:0}},l.a.createElement(z.a.Header,null,n," - ",t),l.a.createElement(z.a.Body,null,l.a.createElement("img",{style:{width:"100%"},src:s,alt:"Billede af bil"}))),l.a.createElement(d.a,null,l.a.createElement(z.a.Body,null,"Pris: ",r," kr.",l.a.createElement("br",null),"Totalv\xe6gt: ",o," kg.",l.a.createElement("br",null),"Total r\xe6kkevidde: ",i," km.",l.a.createElement("br",null),"Br\xe6ndstof: ",c,".",l.a.createElement("br",null),l.a.createElement("button",{type:"button",onClick:function(){M.deleteVehicle(u)},className:"btn btn-danger"},"SLET K\xd8RET\xd8J")))))}var A=t(45),V=t.n(A),U=t(67),H=t.n(U),J=t(155);var Y=Object(o.a)((function(){var e=l.a.useState({Volvo:!0,Mercedes:!0,Ford:!0}),a=Object(s.a)(e,2),t=(a[0],a[1],M.brands.map((function(e,a){return l.a.createElement(J.a,{key:a,control:l.a.createElement(H.a,{value:e,onChange:function(a){if(a.target.checked)M.selectedBrands.push(e);else{var t=M.selectedBrands.indexOf(a.target.value);t>-1&&M.selectedBrands.splice(t,1)}}}),label:e})}))),n=M.fuelType.map((function(e,a){return l.a.createElement(J.a,{key:a,control:l.a.createElement(H.a,{value:e,onChange:function(a){if(a.target.checked)M.selectedFuelTypes.push(e);else{var t=M.selectedFuelTypes.indexOf(a.target.value);t>-1&&M.selectedFuelTypes.splice(t,1)}}}),label:e})}));return l.a.createElement(u.a,null,l.a.createElement(m.a,null,l.a.createElement(d.a,null,l.a.createElement(V.a,{gutterBottom:!0},"M\xe6rke"),l.a.createElement(m.a,null,t),l.a.createElement(V.a,{gutterBottom:!0},"Model"),l.a.createElement(m.a,null,l.a.createElement(f.a,{className:"mb-3"},l.a.createElement(E.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",onChange:function(e){return M.searchModel=e.target.value}}))),l.a.createElement(V.a,{gutterBottom:!0},"V\xe6gt"),l.a.createElement(m.a,null,l.a.createElement(d.a,null,l.a.createElement(f.a,{className:"mb-3"},l.a.createElement(f.a.Append,null,l.a.createElement(f.a.Text,{id:"basic-addon2"},"min")),l.a.createElement(E.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",onChange:function(e){return M.searchMinWeight=e.target.value}}),l.a.createElement(f.a.Append,null,l.a.createElement(f.a.Text,{id:"basic-addon2"},"kg.")))),l.a.createElement(d.a,null,l.a.createElement(f.a,{className:"mb-3"},l.a.createElement(f.a.Append,null,l.a.createElement(f.a.Text,{id:"basic-addon2"},"max")),l.a.createElement(E.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",onChange:function(e){return M.searchMaxWeight=e.target.value}}),l.a.createElement(f.a.Append,null,l.a.createElement(f.a.Text,{id:"basic-addon2"},"kg."))))),l.a.createElement(V.a,{gutterBottom:!0},"R\xe6kkevidde"),l.a.createElement(m.a,null,l.a.createElement(d.a,null,l.a.createElement(f.a,{className:"mb-3"},l.a.createElement(f.a.Append,null,l.a.createElement(f.a.Text,{id:"basic-addon2"},"min")),l.a.createElement(E.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",onChange:function(e){return M.searchMinRange=e.target.value}}),l.a.createElement(f.a.Append,null,l.a.createElement(f.a.Text,{id:"basic-addon2"},"km.")))),l.a.createElement(d.a,null,l.a.createElement(f.a,{className:"mb-3"},l.a.createElement(f.a.Append,null,l.a.createElement(f.a.Text,{id:"basic-addon2"},"max")),l.a.createElement(E.a,{"aria-label":"Default","aria-describedby":"inputGroup-sizing-default",onChange:function(e){return M.searchMaxRange=e.target.value}}),l.a.createElement(f.a.Append,null,l.a.createElement(f.a.Text,{id:"basic-addon2"},"km."))))),l.a.createElement(V.a,{gutterBottom:!0},"Drivmiddel"),l.a.createElement(m.a,null,n)),l.a.createElement(d.a,{xs:8,style:{overflow:"scroll"}},M.filteredVehicles.map((function(e){return l.a.createElement(_,{Car:e})})))))})),K=Object(o.a)((function(){return l.a.createElement("h1",null,"Her vil dine profil indstillinger blive vist")}));var Q=Object(o.a)((function(){return O.state!==O.loginStates.LOGGED_IN?l.a.createElement(u.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/create/user",component:P}),l.a.createElement(i.a,{render:function(){return l.a.createElement(B,null)}}))):l.a.createElement(u.a,null,l.a.createElement(W,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/search",component:Y}),l.a.createElement(i.a,{exact:!0,path:"/create/vehicle",component:C}),l.a.createElement(i.a,{exact:!0,path:"/profile",component:K}),l.a.createElement(i.a,{exact:!0,path:"/",component:Y}),l.a.createElement(i.a,{render:function(){return l.a.createElement("h1",null,"404 - page not found")}})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=t(52);c.a.render(l.a.createElement(X.a,null,l.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},90:function(e,a,t){e.exports=t(129)},95:function(e,a,t){},97:function(e,a,t){}},[[90,1,2]]]);
//# sourceMappingURL=main.0fe32f87.chunk.js.map