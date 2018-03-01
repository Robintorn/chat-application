import FirebaseRepository from "../database/FirebaseRepository";

class Chat extends FirebaseRepository {
    constructor() {
        super();
    }

    sendMessage(room, msg, user) {
        this.pushData('/messages/room/' + room, {
           message: msg,
           displayName: user,
           timestamp: new Date()
        });
    }

    render(room, func) {
        console.log(room);
        this.getData('/messages/room/' + room, 'child_added', (response) => {
            console.log(response);
            func(`
                <div>
                    <h3>${response["displayName"]}</h3>
                    <p>${response["message"]}</p>
                </div>
            `);
        });
    }
}

export default Chat;
