import {userStore} from "./UserStore";
import {vehicleStore} from "./VehicleStore";
import {forEach} from "react-bootstrap/cjs/ElementChildren";

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