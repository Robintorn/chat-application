import FirebaseRepository from "../database/FirebaseRepository";

class Chat extends FirebaseRepository {
    constructor() {
        super();
    }

    render() {
        return `
            <h1>This is the chat JEPPAN!</h1>
        `;
    }
}

export default Chat;
