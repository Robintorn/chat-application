import FirebaseRepository from "../database/FirebaseRepository";

class Register extends FirebaseRepository {
    constructor() {
        super();
    }

    register(email, password){
        this.auth("createUserWithEmailPass", email, password, (user) => {
            if(!user){
                let message = document.getElementById("registermessage");
                message.style.display = "block";
                message.innerHTML = err.message;
                setTimeout(function(){message.style.display = "none"}, 3000);
            }
            else{
                document.getElementById("introduktion").style.display = "block";
                document.getElementById("register").style.display = "none";
            }
        });
    }
}

export default Register;
