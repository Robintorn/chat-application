import * as firebase from "firebase";

export default class {
  get config() {
    return {
      apiKey: "AIzaSyC99W8Q0Ljie57VFr4lPpAB8-uZlJDQ0dY",
      authDomain: "chatapp-151d0.firebaseapp.com",
      databaseURL: "https://chatapp-151d0.firebaseio.com",
      projectId: "chatapp-151d0",
      storageBucket: "chatapp-151d0.appspot.com",
      messagingSenderId: "105631242194"
    };

    firebase.initializeApp(config);

    // Få en referens till databasen.
    var database = firebase.database();
  }

  database() {
    try {
      firebase.initializeApp(this.config);
    } catch (err) {
      // disable multiple implementations (enables hot-reloading)
      if (!/already exists/.test(err.message)) {
        console.error(err);
        // Try to solve the error if there are any.
        firebase
          .app()
          .delete()
          .then(() => {
            console.warn("reinitializing firebase app");
            return firebase.initializeApp(this.config);
          });
      }
    }
    return firebase.database();
  }

  getData(urlPointer, event, func) {
    this.database()
      .ref(urlPointer)
      .on(
        event,
        snapshot => {
          func(snapshot.val());
        },
        err => {
          // we can't save the user this time, as this is a super generic method.
          console.error(err);
        }
      );
  }

  getDataOnce(urlPointer, event, func) {
    this.database()
      .ref(urlPointer)
      .once(
        event,
        snapshot => {
          let obj = snapshot.val();
          for (let curr in snapshot.val()) {
            if (obj.hasOwnProperty(curr)) {
              func(obj[curr]);
            }
          }
        },
        err => {
          console.error(err);
        }
      );
  }

  // Be careful on using post on data that already exists.
  postData(urlPointer, child, obj) {
    this.database()
      .ref(urlPointer)
      .child(child)
      .set(obj, err => {
        if (err) {
          console.error(err);
        } else {
          console.log("Post completed");
        }
      });
  }

  pushData(urlPointer, obj) {
    this.database()
      .ref(urlPointer)
      .push(obj, err => {
        if (err) {
          console.error(err);
        } else {
          console.log("Push completed");
        }
      });
  }

  updateData(urlPointer, child, updateRow) {
    // Update row {"nickname" : "Jeppan"}
    this.database()
      .ref(urlPointer)
      .child(child)
      .update(updateRow, err => {
        if (err) {
          console.error(err);
        } else {
          console.log("Update completed");
        }
      });
  }

  // if using signing in with github, enter null as parameter.
  auth(type, email, password, func) {
    this.database();
    switch (type) {
      case "createUserWithEmailPass": {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .catch(err => {
            console.error(err);
            let message = document.getElementById("registermessage2");
            message.style.display = "block";
            message.innerHTML = err.message;
            document.getElementById("logout").style.display = "none";
            setTimeout(function() {
              message.style.display = "none";
            }, 3000);
          });
        break;
      }

      case "signInUserWithEmailPass": {
        firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .catch(err => {
            console.error(err);
            console.log("Im here");
            document.getElementById("introduktion").style.display = "none";
            let message = document.getElementById("registermessage1");
            message.style.display = "block";
            message.innerHTML = err.message;
            setTimeout(function() {
              message.style.display = "none";
            }, 3000);
          });
        break;
      }

      case "signInWithGithub": {
        let provider = new firebase.auth.GithubAuthProvider();
        firebase
          .auth()
          .signInWithPopup(provider)
          .then(result => {
            /*
                    userCredentials = {
                        "token": result.credential.accessToken,
                        "user": result.user
                    };
                    */
          })
          .catch(err => {
            console.error(err);
          });
        break;
      }

      case "signOut": {
        firebase
          .auth()
          .signOut()
          .catch(err => {
            console.error(err);
          });
      }
    }

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        document.cookie =
          "displayName=" +
          user.displayName +
          ";" +
          "email=" +
          user.email +
          ";" +
          "img_url=" +
          user.photoURL +
          ";" +
          "uid=" +
          user.uid +
          ";";

        if (func !== null) {
          func({
            displayName: user.displayName,
            email: user.email,
            img_url: user.photoURL,
            uid: user.uid
          });
        }
      }
    });
  }
}
