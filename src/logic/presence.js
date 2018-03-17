import FirebaseRepository from "../database/FirebaseRepository";

class Presence extends FirebaseRepository {
  constructor() {
    super();
  }

  presence() {
    // var myConnectionsRef = this.database().ref("users/*/connections");
    var myConnectionsRef = this.database().ref("/presence/");
    var con = myConnectionsRef.push();

    var connectedRef = this.database().ref(".info/connected");
    connectedRef.on("value", function(snap) {
      if (snap.val() === true) {
        var onlineList;
        onlineList = document.getElementById("online-users");
        connectedRef.on("value", function(snap) {
          onlineList.innerHTML = snap.numChildren() + " users connected";
        });

        con.onDisconnect().remove(); // When I disconnect, remove this device

        con.set(true); // Add this device to my connections list
        // this value could contain info about the device or a timestamp too
      }
    });
  }
}

export default Presence;

/******************** alternative code 1 ******************/

// import FirebaseRepository from "../database/FirebaseRepository";

// class Presence extends FirebaseRepository {
//   constructor() {
//     super();
//   }

//   presence() {

// var amOnline = this.database(
//   "https://chatapp-151d0.firebaseio.com/.info/connected"
// );
// var userRef = this.database(
//   "https://chatapp-151d0.firebaseio.com/presence/" + uid
// );
// amOnline.on("value", function(snapshot) {
//   if (snapshot.val()) {
//     userRef.onDisconnect().remove();
//     userRef.set(true);

//     var onlineList;
//     onlineList = document.getElementById("online-users");
//     onlineList.innerHTML = `<p>${userRef}</p>`;
//   }
// });
//   }
// }

/******************** alternative code 2 ******************/

// import FirebaseRepository from "../database/FirebaseRepository";
// // var listRef;
// // var userRef;
// // var presenceRef;

// class Presence extends FirebaseRepository {
//   constructor() {
//     super();
//   }
//   /*/
//   /**/
//   /*** varför funkar det inte?????*/
//   presence() {

//     var listRef = this.database(
//       "https://chatapp-151d0.firebaseio.com/presence/"
//     );
//     var userRef = listRef.push();

//     //add online user to presence list

//     var presenceRef = this.database(
//       "https://chatapp-151d0.firebaseio.com/.info/connected"
//     );

//     presenceRef.on("value", function(snap) {
//       if (snap.val()) {
//         userRef.set(true);
//         //remove user from preference list when disconnected by using the remove() method

//         userRef.onDisconnect().remove();
//       }
//     });
//     console.log("presence");
//     //list our objects in presence list as online users in our   element
//     var onlineList;
//     onlineList = document.getElementById("online-users");
//     listRef.on("value", function(snap) {
//       onlineList.text(snap.numChildren());
//     });
//   }
// }

// export default Presence;

// /**/
