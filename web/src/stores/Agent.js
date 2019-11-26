import {userStore} from "./UserStore";

const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080/rest/":"rest/"; //Check if dev


class Agent {
    doLogin(loginData){
        fetch(baseUrl +"login",{
            method:"POST",
            body:JSON.stringify(loginData),
            headers:{
                "Content-Type": "application/json"
            }
        }).then(
            (response)=> {
                response.text().then(
                    (token)=>{
                        userStore.token=token;
                        localStorage.setItem("NofossToken",token);
                        userStore.state = userStore.loginStates.LOGGED_IN;
                        userStore.startTokenCheck();
                    }
                )
            }
        ).catch(()=> this.state = userStore.loginStates.LOGGED_OUT);
    }

    async getVehicles(){
        let vehicles =await fetch(baseUrl + "vehicles",{
            headers: {
                Authorization: "Bearer " + userStore.token
            }
        })
        //Fill in some autos
    }


}
export const agent = new Agent();