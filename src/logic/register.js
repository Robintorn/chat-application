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
                message.innerHTML = err.message;
                setTimeout(function(){message.style.display = "none"}, 3000);
            }
            else{
                document.getElementById("welcome").style.display = "block";
                document.getElementById("welcome").innerHTML =  "Welcome " + email;
                document.getElementById("logout").style.display = "block";
                document.getElementById("register").style.display = "none";
            }
        });
    }
}

export default Register;
