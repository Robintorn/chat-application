import FirebaseRepository from "../database/FirebaseRepository";

let Txtemail = document.getElementById("email");
let Txtpassword = document.getElementById("password");

class Login extends FirebaseRepository {
    constructor() {
        super();
    }

    login(){

        let email = Txtemail.value;
        let password = Txtpassword.value;
        this.auth("createUserWithEmailPass", email, password);
    }

    render() {
        return `
            <h1>This is the login!</h1>
        `;
    }
}

export default Login;
