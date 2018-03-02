import FirebaseRepository from "../database/FirebaseRepository";

class Login extends FirebaseRepository {
    constructor() {
        super();
    }

    login(email, password){
        this.auth("signInUserWithEmailPass", email, password, (user) => {
            if(err){
                let welcome = document.getElementById("welcome").style.display = "block";
                document.getElementById("welcome").innerHTML =  "Welcome " + email;
                let logout = document.getElementById("logout").style.display = "block"; 
                let regLog = document.getElementById("registration/login").style.display = "none";
            }
            else{
                let welcome = document.getElementById("welcome").style.display = "block";
                document.getElementById("welcome").innerHTML =  "Welcome " + email;
                let logout = document.getElementById("logout").style.display = "block"; 
                let regLog = document.getElementById("registration/login").style.display = "none";
            }
        });
    }
    
    logout(){
        this.auth("signOut", null, null, null)
        let regLog = document.getElementById("registration/login").style.display = "block";
        let welcome = document.getElementById("welcome").style.display = "none";
        let logout = document.getElementById("logout").style.display = "none";
        console.log("Logged out");
    }

    logingithub(){
        this.auth("signInWithGithub")
    }

    render() {
        return `
            <h1>This is the login!</h1>
        `;
    }
}

export default Login;
