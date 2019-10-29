class UserStore{
    adminNavBar = [
        {href:"#/",name:"Login"},
        {href:"#/search",name:"Søg Køretøj"},
        {href:"#/profile",name:"Profil"},
        {href:"#/create/vehicle",name:"Nyt køretøj"},
        {href:"#/create/User",name:"Ny bruger"},
        {href:"#/newSearch",name:"Søg køretøj ny"}];
}

export const userStore = new UserStore();