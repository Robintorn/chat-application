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
                document.getElementById("logout").style.display = "none";
                setTimeout(function(){message.style.display = "none"}, 3000);
            }
            else{
                document.getElementById("introduktion").style.display = "block";
                document.getElementById("register").style.display = "none";
                document.getElementById("logout").style.display = "block";
            }
        });
    }
}

export default Register;
