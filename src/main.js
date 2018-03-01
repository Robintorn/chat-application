import Chat from './logic/chat';

document.addEventListener('DOMContentLoaded', () => {
    let chat = new Chat();
    console.log("Im here");
    chat.render('general', 'chat-window');
});

document.getElementById('reply').addEventListener('click', () => {
    let chat = new Chat();
    chat.sendMessage('general', "Hello MADDAFAKKA", "Jeppan");
});