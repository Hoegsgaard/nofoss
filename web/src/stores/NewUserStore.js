import {decorate, observable} from "mobx";

class NewUserStore {
    newUser;

    newFirm = "";
    newFirstName = "";
    newLastName = "";
    newEmail = "";
    newPasswordOne = "";
    newpasswordtow = "";
}


decorate(NewUserStore, {
    newFirm: observable,
    newFirstName: observable,
    newLastName: observable,
    newEmail: observable,
    newPasswordOne: observable,
    newpasswordtow: observable
});

export const newUserStore = new NewUserStore();
