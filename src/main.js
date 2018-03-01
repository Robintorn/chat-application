import Chat from './logic/chat';

let chatNav = document.getElementById('chat-navigation');
let replyBox = document.getElementById('reply');
let currentChat = "";

document.addEventListener('DOMContentLoaded', () => {
    let chat = new Chat();

    chat.getData("/messages/room", 'value', (response) => {
        Object.keys(response).map((item) => {
            chatNav.innerHTML += `
                <h3 data-value="${item}">${item}</h3>
            `;
        });
    });
});

chatNav.addEventListener('click', (e) => {
    // remove target and change to id
    replyBox.style.display = "block";
    currentChat = e.target.getAttribute("data-value");

    let chat = new Chat();
    chat.render(currentChat, (rendered) => {
        document.getElementById('chat-window').innerHTML += rendered;
    });
});

document.getElementById('send').addEventListener('click', () => {
    let message = document.getElementById('message').value;
    let chat = new Chat();
    if(message.length > 1) {
        chat.sendMessage(currentChat, message, "Jeppan");
    }
});