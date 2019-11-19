const loginStates = {LOGGING_IN:"loading", LOGGED_OUT:"logout", LOGGED_IN:"LoggedIn"};
class UserStore{
    adminNavBar = [
        {href:"#/search",name:"Søg køretøj"},
        {href:"#/create/vehicle",name:"Opret køretøj"},
        {href:"#/profile",name:"Profil"},
        {href:"#/login",name:"Login"}];

    loginData={username:"",password:""};
    token = null;
    state = loginStates.LOGGED_OUT;

    doLogin(){
        this.state = loginStates.LOGGING_IN;
        fetch("http://localhost:3000/#/rest/login",{
            method:"POST",
            body:JSON.stringify(this.loginData),
            headers:{
                "Content-Type": "application/json"
            }
        }).then(
            (response)=> {
                response.text().then(
                    (token)=>{
                        this.token=token;
                        localStorage.setItem("NofossToken",token);
                        this.state = loginStates.LOGGED_IN;
                        console.log(token)
                    }
                )
            }
        ).catch(()=> this.state = loginStates.LOGGED_OUT);
    }
}

export const userStore = new UserStore();