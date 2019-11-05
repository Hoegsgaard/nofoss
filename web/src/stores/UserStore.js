class UserStore{
    adminNavBar = [
        {href:"#/search",name:"Søg køretøj"},
        {href:"#/create/vehicle",name:"Opret køretøj"},
        {href:"#/profile",name:"Profil"},
        {href:"#/login",name:"Login"}];
    token = "";
}

export const userStore = new UserStore();