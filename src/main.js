import Register from './logic/register';
import Login from './logic/login';
import FirebaseRepo from './database/FirebaseRepository';

let login = document.getElementById("login");
let loggit = document.getElementById("github-login");
let signup = document.getElementById("signup");
let logout = document.getElementById("logout");

login.addEventListener("click", () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let login = new Login();
    login.login(email.value, password.value);
});

loggit.addEventListener("click", () => {
    let loggit = new Login();
    loggit.logingithub();
})

signup.addEventListener("click", () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let register = new Register()
    register.register(email.value, password.value);
});

logout.addEventListener("click", () => {
    let logout = new Login();
    logout.logout();
})
