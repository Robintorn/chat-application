import FirebaseRepository from "../database/FirebaseRepository";

let roomsBeenIn = {};

class Chat extends FirebaseRepository {
    constructor() {
        super();
    }

    sendMessage(room, msg, user) {
        let date = new Date();
        this.pushData('/messages/room/' + room, {
           message: msg,
           displayName: user,
            // this really need to be rewritten
           time: (date.getDay() >= 10 ? date.getDay() : "0" + date.getDay()) + "/" + ((date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1)) + " - " + date.getFullYear() + " | " +
                (date.getHours() >= 10 ? date.getHours() : "0" + date.getHours()) + ":" +
                (date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes()),
           timestamp: new Date()
        });
    }

    render(room, func) {
        console.log(room);

        if(!hasRoom()) {
            roomsBeenIn[room] = room;
            this.getData('/messages/room/' + room, 'child_added', (response) => {
                console.log(response);
                func(`
                    <div class="new-message">
                    <span><h3>${response["displayName"]}</h3></span><span><h5> | ${response["time"]}</h5></span>
                    <p>${response["message"]}</p>
                    </div>
                `);
            });
        } else {
            this.getDataOnce('/messages/room/' + room, 'value', (response) => {
                console.log(response);
                func(`
                    <div class="new-message">
                        <span><h3>${response["displayName"]}</h3></span><span><h5> | ${response["time"]}</h5></span>
                        <p>${response["message"]}</p>
                    </div>
                `);
            });
        }

        function hasRoom() {
            for(let i = 0; i < Object.keys(roomsBeenIn).length; i++) {
                if(Object.keys(roomsBeenIn)[i] === room) {
                    return true;
                }
            }
            return false;
        }
    }
}

export default Chat;
