import Register from './logic/register';
import Login from './logic/login';
import FirebaseRepo from './database/FirebaseRepository';

let testDiv = document.getElementById('test');
testDiv.style.backgroundColor = "red";
testDiv.innerText = "CLICK ME";

let login = document.getElementById("login");
let signup = document.getElementById("signup");

login.addEventListener("click", () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let login = new Login();
    login.login(email.value, password.value);
});

signup.addEventListener("click", () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let register = new Register()
    register.register(email.value, password.value);
});