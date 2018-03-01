import Chat from './logic/chat';

document.addEventListener('DOMContentLoaded', () => {
    let chat = new Chat();
    chat.render('general', (rendered) => {
        document.getElementById('chat-window').innerHTML += rendered;
    });
});

document.getElementById('send').addEventListener('click', () => {

    let message = document.getElementById('message').value;

    if(message.length > 1) {
        let chat = new Chat();
        chat.sendMessage('general', message, "Jeppan");
    }
});