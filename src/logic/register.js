import FirebaseRepository from "../database/FirebaseRepository";

class Register extends FirebaseRepository {
    constructor() {
        super();
    }

    register(email, password){
        this.auth("createUserWithEmailPass", email, password, null);
    }

    render() {
        return `
            <h1>This is the register!</h1>
        `;
    }
}

export default Register;
