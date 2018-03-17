import FirebaseRepository from "../database/FirebaseRepository";

let roomsBeenIn = {};

class Chat extends FirebaseRepository {
  constructor() {
    super();
  }

  sendMessage(room, msg, user) {
    let today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var hh = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();

    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    if (hh < 10) {
      hh = "0" + hh;
    }
    if (min < 10) {
      min = "0" + min;
    }

    today = mm + "/" + dd + "/" + yyyy + "   " + hh + ":" + min;

    this.pushData("/messages/room/" + room, {
      message: msg,
      displayName: user,
      // this really need to be rewritten
      time: today
    });
  }

  render(room, func) {
    console.log(room);

    if (!hasRoom()) {
      roomsBeenIn[room] = room;
      this.getData("/messages/room/" + room, "child_added", response => {
        console.log(response);
        func(`
                    <div class="new-message">
                    <span>${response["displayName"]}| ${response["time"]}</span>
                     <p class="p-message">${response["message"]}</p>
                    </div>
                `);
      });
    } else {
      this.getDataOnce("/messages/room/" + room, "value", response => {
        console.log(response);
        func(`
                    <div class="new-message">
                    <span>${response["displayName"]}| ${response["time"]}</span>
                    
                        <p class="p-message">${response["message"]}</p>
                    </div>
                `);
      });
    }

    function hasRoom() {
      for (let i = 0; i < Object.keys(roomsBeenIn).length; i++) {
        if (Object.keys(roomsBeenIn)[i] === room) {
          return true;
        }
      }
      return false;
    }
  }
}

export default Chat;
