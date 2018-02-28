import FirebaseRepository from "../database/FirebaseRepository";

class Chat extends FirebaseRepository {
    constructor() {
        super();
    }

    sendMessage() {
        this.auth('signInUserWithEmailPass', "hello@gmail.com", "hellu123");

        this.getData('/rooms/' + room_id + 'messages', 'value', (response) => {
            render(response.chatMessage, )
        });
    }

    render() {
        this.getData('/rooms/' + room_id + 'messages', 'value', (response) => {
            return `
                <h1>${response.chatMsg}</h1>
            `;
        });
    }
}

export default Chat;
