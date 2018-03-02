import FirebaseRepository from "../database/FirebaseRepository";

class Register extends FirebaseRepository {
    constructor() {
        super();
    }

    register(email, password){
        this.auth("createUserWithEmailPass", email, password, (err) => {
            if(err){
                let message = document.getElementById("registermessage");
                message.style.display = "block";
                message.innerHTML = (err);
                setTimeout(function(){message.style.display = "none"}, 3000);
            }
            else{
                let welcome = document.getElementById("welcome").style.display = "block";
                document.getElementById("welcome").innerHTML =  "Welcome " + email;
                let logout = document.getElementById("logout").style.display = "block"; 
                let regLog = document.getElementById("register").style.display = "none";
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
