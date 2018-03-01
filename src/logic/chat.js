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

    render(room, renderId) {
        console.log(room);
        let index = 0;
        this.getData('/messages/room/' + room, 'value', (response) => {
            console.log(response);
            if(index === 0) {
                Object.keys(response).map((item) => {
                    document.getElementById(renderId).innerHTML += `
                        <div>
                            <h3>${item[0]} | ${item[1]}</h3>
                            <p>${item[2]}</p>
                        </div>
                    `;
                    index++;
                });
            } else {
                document.getElementById(renderId).innerHTML += `
                    <div>
                        <h3>${response[index][0]} | ${response[index][1]}</h3>
                        <p>${response[index][2]}</p>
                    </div>
                `;
                index++;
            }
        });
    }
}

export default Chat;
