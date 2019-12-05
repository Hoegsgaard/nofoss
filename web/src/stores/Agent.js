import {userStore} from "./UserStore";
import {vehicleStore} from "./VehicleStore";

const baseUrl = process.env.NODE_ENV === 'development' ? "http://localhost:8080/rest/" : "rest/"; //Check if dev


class Agent {

    doGoogleLogin(token, email) {
        fetch(baseUrl + "loginGoogle", {
            method: "POST",
            body: JSON.stringify(token),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(
            (response) => {
                response.text().then((text) => {
                    if (JSON.parse(text) === 200) {
                        fetch(baseUrl + "loginGoogle/getToken", {
                            method: "POST",
                            body: JSON.stringify(email),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then(
                            (response) => {
                                response.text().then(
                                    (token) => {
                                        userStore.token = token;
                                        localStorage.setItem("NofossToken", token);
                                        userStore.state = userStore.loginStates.LOGGED_IN;
                                        userStore.startTokenCheck();
                                    })
                            })
                    } else {

                    }
                })
            }
        ).catch(() => userStore.state = userStore.loginStates.LOGGED_OUT);
    }

     async doLogin(loginData) {
        await fetch(baseUrl + "login", {
            method: "POST",
            body: JSON.stringify(loginData),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(
            (response) => {
                if (response.status === 200) {
                    response.text().then(
                        (token) => {
                            userStore.token = token;
                            localStorage.setItem("NofossToken", token);
                            userStore.state = userStore.loginStates.LOGGED_IN;
                            userStore.startTokenCheck();
                        }
                    )
                }else if(response.status === 401){

                }
            }
        ).catch(() => userStore.state = userStore.loginStates.LOGGED_OUT);
    }

    async createUser() {
        fetch(baseUrl + "user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nameFirst: userStore.newFirstName,
                nameLast: userStore.newLastName,
                firm: userStore.newFirm,
                email: userStore.newEmail,
                password/*måske dumt?*/ : userStore.newPasswordOne
            })
        }).catch(() => this.state = userStore.loginStates.LOGGED_OUT);
    }

    async doVehicleFetch() {
        await fetch(baseUrl + "mongo", {
            method: "GET",
            headers: {
                Authorization: "Bearer " + userStore.token
            }
        }).then(
            (response) => {
                response.json()
                    .then((vehicles) => {
                        vehicles.map(vehicle => vehicleStore.vehicles.push({
                            _id: vehicle._id,
                            brand: vehicle.brand,
                            model: vehicle.name,
                            fuelType: vehicle.fuelType,
                            maxWeight: vehicle.weight,
                            maxRange: vehicle.range,
                            price: vehicle.price,
                            imageLink: vehicle.imageLink
                        }))
                    });
            }
        ).catch(e => console.log(e));
    }

    async createVehicle() {
        await fetch(baseUrl + "mongo", {
            method: "POST",
            headers: {
                Authorization: "Bearer " + userStore.token
            },
            body: JSON.stringify({
                brand: vehicleStore.newBrand,
                name: vehicleStore.newModel,
                fuelType: vehicleStore.newFuelType,
                weight: vehicleStore.newMaxWeight,
                range: vehicleStore.newMaxRange,
                price: vehicleStore.newPrice,
                imageLink: vehicleStore.newImageLink
            })
        })
    }

    async deleteVehicle(vehicleID) {
        await fetch(baseUrl + "mongo/" + vehicleID, {
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + userStore.token
            }
        })
    }
}

export const agent = new Agent();