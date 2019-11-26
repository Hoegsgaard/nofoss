import Agent, {agent} from "./Agent";
import {decorate, observable} from "mobx";
import {observer} from "mobx-react";


class UserStore{

    constructor(){
        let nofossToken = localStorage.getItem("NofossToken");
        if (nofossToken){
            this.state = this.loginStates.LOGGED_IN;
        }
    }
    loginStates = {LOGGING_IN:"loading", LOGGED_OUT:"logout", LOGGED_IN:"LoggedIn"};

    adminNavBar = [
        {href:"#/search",name:"Søg køretøj"},
        {href:"#/create/vehicle",name:"Opret køretøj"},
        {href:"#/profile",name:"Profil"},
        {href:"#/login",name:"Login"}];

    loginData={username:"",password:""};
    token = null;
    state = this.loginStates.LOGGED_OUT;

    doLogin(){
        console.log("Login gogo");
        agent.doLogin(this.loginData);


    }
}

decorate(UserStore,{
    state:observable
})

export const userStore = new UserStore();