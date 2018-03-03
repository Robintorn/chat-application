import Chat from './logic/chat';
import Register from './logic/register';
import Login from './logic/login';
import FirebaseRepo from './database/FirebaseRepository';

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

let login = document.getElementById("login");
let loggit = document.getElementById("github-login");
let signup = document.getElementById("signup");
let logout = document.getElementById("logout");

login.addEventListener("click", () => {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let login = new Login();
    login.login(email.value, password.value);
});

loggit.addEventListener("click", () => {
    let loggit = new Login();
    loggit.logingithub();
})

signup.addEventListener("click", () => {
    let email = document.getElementById("registeremail");
    let password = document.getElementById("registerpassword");
    let register = new Register()
    register.register(email.value, password.value);
});

logout.addEventListener("click", () => {
    let logout = new Login();
    logout.logout();
})

/* Angående tillgång till registrering */

let sign = document.getElementById("sign");

sign.addEventListener("click", function(){
    document.getElementById("register").style.display = "block";
    document.getElementById("registration/login").style.display = "none";
})
