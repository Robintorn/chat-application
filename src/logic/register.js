import FirebaseRepository from "../database/FirebaseRepository";

class Register extends FirebaseRepository {
    constructor() {
        super();
    }

    render() {
        return `
            <h1>This is the register!</h1>
        `;
    }
}

export default Register;
