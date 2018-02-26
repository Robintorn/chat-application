import FirebaseRepository from "../database/FirebaseRepository";

class Login extends FirebaseRepository {
    constructor() {
        super();
    }

    render() {
        return `
            <h1>This is the login!</h1>
        `;
    }
}

export default Login
