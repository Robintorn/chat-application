import FirebaseRepository from "../database/FirebaseRepository";

class Login extends FirebaseRepository {
  constructor() {
    super();
  }

  login(email, password) {
    this.auth("signInUserWithEmailPass", email, password, user => {
      console.log("DEBUG", user);
      if (!user) {
        console.log("Im here");
        document.getElementById("introduktion").style.display = "none";
        let message = document.getElementById("registermessage");
        message.style.display = "block";
        message.innerHTML = err.message;
        setTimeout(function() {
          message.style.display = "none";
        }, 3000);
      } else {
        console.log("Im here 2");
        document.getElementById("introduktion").style.display = "block";
        document.getElementById("registration/login").style.display = "none";
        document.getElementById("animation").style.display = "block";
        document.getElementById("logout").style.display = "block";
        setTimeout(function() {
          document.getElementById("animation").style.display = "none";
        }, 3000);
        setTimeout(function() {
          document.getElementById("nav").style.display = "block";
        }, 3000);
        document.getElementById("loggedInUser").style.display = "block";
        document.getElementById("loggedInUser").innerHTML =
          "Logged in as" + email.value;
      }
    });
  }

  logout() {
    this.auth("signOut", null, null, null);
    document.getElementById("registration/login").style.display = "block";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("logout").style.display = "none";
    document.getElementById("nav").style.display = "none";
    document.getElementById("loggedInUser").style.display = "none";
    console.log("Logged out");
  }

  logingithub() {
    this.auth("signInWithGithub", null, null, null);
  }
}

export default Login;
