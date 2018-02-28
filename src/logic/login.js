import FirebaseRepository from "../database/FirebaseRepository";

class Login extends FirebaseRepository {
    constructor() {
        super();
    }

    login(){
        let Txtemail = document.getElementById("email");
        let Txtpassword = document.getElementById("password");

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
