import FirebaseRepository from "../database/FirebaseRepository";

class Register extends FirebaseRepository {
    constructor() {
        super();
    }

    register(email, password){
        this.auth("createUserWithEmailPass", email, password, (user) => {
            if(user){
                let welcome = document.getElementById("welcome").style.display = "block";
                document.getElementById("welcome").innerHTML =  "Welcome " + email;
                let logout = document.getElementById("logout").style.display = "block"; 
                let regLog = document.getElementById("registration/login").style.display = "none";
            }
        });
    }

    render() {
        return `
            <h1>This is the register!</h1>
        `;
    }
}

export default Register;
