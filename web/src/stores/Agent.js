import {userStore} from "./UserStore";
import {vehicleStore} from "./VehicleStore";
import {forEach} from "react-bootstrap/cjs/ElementChildren";

const baseUrl = process.env.NODE_ENV === 'development' ?  "http://localhost:8080/rest/":"rest/"; //Check if dev


class Agent {

    createUser(user){
        fetch(baseUrl + "createUser",{
            method:"POST",
            body:JSON.stringify(user),
            headers:{
                "Content-Type": "application/json"
            }
        }).then(
            (response)=> {// token
                if (response.status === 200) {//Hvis/når brugeren er oprettet
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
                                response.text().then(
                                    (token)=> {
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
                            this.doVehicleFetch()
                        }
                    )
                } else{

                }
            }
        ).catch(() => this.state = userStore.loginStates.LOGGED_OUT);
    }

    async doVehicleFetch() {
        await fetch(baseUrl + "mongo", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + userStore.token
            }
        }).then(
            (response) => { response.json()
                .then((vehicles)=>{
                    console.log(vehicles)
                    vehicleStore.vehicles=vehicles
                });
            }
        ).catch(e => console.log(e));
    }
}

export const agent = new Agent();