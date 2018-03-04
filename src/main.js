import Chat from './logic/chat';

let chatNav = document.getElementById('chat-navigation');
let replyBox = document.getElementById('reply');

let chatRoomUserIsIn = {};

function init() {
    let chat = new Chat();
    chat.getData("/messages/room", 'value', (response) => {
        let rendered = "";

        Object.keys(response).map((item) => {
            rendered += `
                <h3 data-value="${item}">${item}</h3>
            `;
        });
        chatNav.innerHTML = rendered;
        rendered = "";
    });

    chatNav.addEventListener('click', (e) => {
        document.getElementById('send').addEventListener('click', sendBtn);

        document.getElementById('chat-window').innerHTML = "";
        replyBox.style.display = "block";

        chatRoomUserIsIn = {
            current: e.target.getAttribute("data-value")
        };
        document.getElementById('send').removeEventListener('click', sendBtn);
        document.getElementById('send').addEventListener('click', sendBtn);

        openRoom(chat);
    });
}

// problemet är att vi hela tiden skapar nya ref, därav genererar den två gånger eller mer. Så vi måste se till att den förra
// getData inte skapas igen

function openRoom(chat) {
    chat.render(chatRoomUserIsIn["current"], (rendered) => {
        document.getElementById('chat-window').innerHTML += rendered;
    });
}

function sendBtn() {
    let chat = new Chat();
    let message = document.getElementById('message').value;
    if(message.length > 0) {
        chat.sendMessage(chatRoomUserIsIn["current"], message, "Jepan");
    }
}

init();