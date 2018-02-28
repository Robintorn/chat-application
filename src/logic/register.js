import FirebaseRepository from "../database/FirebaseRepository";

let Txtemail = document.getElementById("email");
let Txtpassword = document.getElementById("password");

class Register extends FirebaseRepository {
    constructor() {
        super();
    }

    register(){

        let email = Txtemail.value;
        let password = Txtpassword.value;
        this.auth("createUserWithEmailAndPassword", email, password);
    }

    render() {
        return `
            <h1>This is the register!</h1>
        `;
    }
}

export default Register;
