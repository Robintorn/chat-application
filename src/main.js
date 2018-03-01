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
        document.getElementById('chat-window').innerHTML = "";
        // remove target and change to id
        replyBox.style.display = "block";

        chatRoomUserIsIn = {
            current: e.target.getAttribute("data-value")
        };
        document.getElementById('send').removeEventListener('click', sendBtn);
        openChat(chat);
    });
}

function openChat(chat) {

    chat.render(chatRoomUserIsIn["current"], (rendered) => {
        document.getElementById('chat-window').innerHTML += rendered;
    });

    document.getElementById('send').addEventListener('click', sendBtn);
}

function sendBtn() {
    let chat = new Chat();
    let message = document.getElementById('message').value;
    if(message.length > 1) {
        chat.sendMessage(chatRoomUserIsIn["current"], message, "Jeppan");
    }
}

init();