import FirebaseRepository from "../database/FirebaseRepository";
var listRef;
var userRef;
var presenceRef;

class Presence extends FirebaseRepository {
  constructor() {
    super();
  }
  /*/
  /**/
  /*** varför blir Firebase undefined?????*/
  presence() {
    this.auth("createUserWithEmailPass", email, password, user => {
      if (user) {
        listRef = this.database(
          "https://chatapp-151d0.firebaseio.com/presence/"
        );
        userRef = listRef.push();

        //add online user to presence list

        presenceRef = this.database(
          "https://chatapp-151d0.firebaseio.com/.info/connected"
        );

        presenceRef.on("value", function(snap) {
          if (snap.val()) {
            userRef.set(true);
            //remove user from preference list when disconnected by using the remove() method

            userRef.onDisconnect().remove();
          }
        });
        console.log("presence");
        //list our objects in presence list as online users in our   element
        var onlineList;
        onlineList = document.getElementById("online-users");
        listRef.on("value", function(snap) {
          onlineList.text(snap.numChildren());
        });
      }
    });
  }
}

export default Presence;

/**/
