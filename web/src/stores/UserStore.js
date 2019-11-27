import Agent, {agent} from "./Agent";
import {decorate, observable} from "mobx";
import {toast} from 'react-toastify';


class UserStore{
    loginStates = {LOGGING_IN:"loading", LOGGED_OUT:"logout", LOGGED_IN:"LoggedIn"};
    token = window.localStorage.getItem("NofossToken");
    constructor(){
        //let nofossToken = localStorage.getItem("NofossToken");
        if (this.token){
            console.log(this.token)
            this.state = this.loginStates.LOGGED_IN;
        }
        this.startTokenCheck();
    }

    adminNavBar = [
        {href:"#/search",name:"Søg køretøj"},
        {href:"#/create/vehicle",name:"Opret køretøj"},
        {href:"#/profile",name:"Profil"}];

    loginData={username:"",password:""};
    state = this.loginStates.LOGGED_OUT;

    doLogin(){
        agent.doLogin(this.loginData);
    }

    startTokenCheck() {
        if(!this.token) return;
        let splitToken = this.token.split(".")[1];
        let parse = JSON.parse(window.atob(splitToken));
        let exp = new Date(parse.exp * 1000);
        const now = new Date();
        let timeOut = (exp - now) - 10000;
        this.timer = setTimeout(()=>{
            localStorage.clear();
            this.token = null;
            this.state=this.loginStates.LOGGED_OUT;
            toast.warn("Dit login er udløbet. Log ind igen")
        }, timeOut)
    }
}

decorate(UserStore,{
    state:observable
})

export const userStore = new UserStore();