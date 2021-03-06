import FirebaseRepository from "../database/FirebaseRepository";

class Login extends FirebaseRepository {
  constructor() {
    super();
  }

  login(email, password) {
    this.auth("signInUserWithEmailPass", email, password, user => {
      console.log("DEBUG", user);
      if (user) {
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
        document.getElementById("span").innerHTML = "Logged in as ";
        document.getElementById("id").innerHTML = email;
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
    document.getElementById("chat").style.display = "none";
    document.getElementById("style-chat").style.display = "none";
    document.getElementById("chat-navigation").style.display = "none";
    console.log("Logged out");
  }

  logingithub() {
    this.auth("signInWithGithub", null, null, null);
  }
}

export default Login;

/**/
