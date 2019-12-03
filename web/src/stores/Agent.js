import {userStore} from "./UserStore";
import {vehicleStore} from "./VehicleStore";

const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080/rest/":"rest/"; //Check if dev


class Agent {

    doGoogleLogin(token, email){
        fetch(baseUrl + "loginGoogle",{
            method:"POST",
            body:JSON.stringify(token),
            headers:{
                "Content-Type": "application/json"
            }
        }).then(
            (response)=>{
                response.text().then((text)=>{
                    if(JSON.parse(text) === 200){
                        fetch(baseUrl + "loginGoogle/getToken", {
                            method:"POST",
                            body:JSON.stringify(email),
                            headers:{
                                "Content-Type": "application/json"
                            }
                        }).then(
                            (response) => {
                                 console.log(response.status)
                                response.text().then(
                                    (token)=> {
                                        console.log("Katoffel")
                                        userStore.token = token;
                                        localStorage.setItem("NofossToken", token);
                                        userStore.state = userStore.loginStates.LOGGED_IN;
                                        userStore.startTokenCheck();
                                    })
                            })
                    }else {

                    }
                })
            }
        ).catch(() => this.state = userStore.loginStates.LOGGED_OUT);
    }

    doLogin(loginData){
        fetch(baseUrl +"login",{
            method:"POST",
            body:JSON.stringify(loginData),
            headers:{
                "Content-Type": "application/json"
            }
        }).then(
            (response)=> {
                if (response.status === 200) {
                    response.text().then(
                        (token) => {
                            userStore.token = token;
                            localStorage.setItem("NofossToken", token);
                            userStore.state = userStore.loginStates.LOGGED_IN;
                            userStore.startTokenCheck();
                        }
                    )
                } else{

                }
            }
        ).catch(() => this.state = userStore.loginStates.LOGGED_OUT);
    }

    async doVehicleFetch() {
        await fetch(baseUrl + "mongo/GET/dummyData", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + userStore.token
            }
        }).then(
            (response) => {
                vehicleStore.vehicles = response
            }
        ).catch(() => console.log("couldn't fetch"));
    }
}

export const agent = new Agent();