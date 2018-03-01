import FirebaseRepository from "../database/FirebaseRepository";

class Login extends FirebaseRepository {
    constructor() {
        super();
    }

    login(email, password){
        this.auth("signInUserWithEmailPass", email, password);
    }

    render() {
        return `
            <h1>This is the login!</h1>
        `;
    }
}

export default Login;
