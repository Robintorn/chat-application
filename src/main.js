import Chat from "./logic/chat";
import Register from "./logic/register";
import Login from "./logic/login";
import Presence from "./logic/presence";
import FirebaseRepo from "./database/FirebaseRepository";

/**/
let chatNav = document.getElementById("chat-navigation");
let replyBox = document.getElementById("reply");

let chatRoomUserIsIn = {};

function init() {
  let chat = new Chat();
  chat.getData("/messages/room", "value", response => {
    let rendered = "";

    Object.keys(response).map(item => {
      rendered += `
                <h3 data-value="${item}">${item}</h3>
            `;
    });
    chatNav.innerHTML = rendered;
    rendered = "";
  });

  chatNav.addEventListener("click", e => {
    document.getElementById("send").addEventListener("click", sendBtn);

    document.getElementById("chat-window").innerHTML = "";
    replyBox.style.display = "block";

    chatRoomUserIsIn = {
      current: e.target.getAttribute("data-value")
    };
    document.getElementById("send").removeEventListener("click", sendBtn);
    document.getElementById("send").addEventListener("click", sendBtn);

    openRoom(chat);
  });
}

// problemet är att vi hela tiden skapar nya ref, därav genererar den två gånger eller mer. Så vi måste se till att den förra
// getData inte skapas igen

function openRoom(chat) {
  chat.render(chatRoomUserIsIn["current"], rendered => {
    document.getElementById("chat-window").innerHTML += rendered;
  });
}

function sendBtn() {
  let email = document.getElementById("email");
  let registrering = document.getElementById("registeremail");
  let chat = new Chat();
  let message = document.getElementById("message").value;
  if (message.length > 0 && email.value) {
    chat.sendMessage(chatRoomUserIsIn["current"], message, email.value);
    message = " "; // tömmer fältet efter att man skickar meddelande (har slutat funka av okänd anledning?)
    var messageList = document.querySelectorAll(".new-message");
    messageList[0].scrollBottom = messageList[0].scrollHeight; // försöker scrolla till botten för att se nya meddelandet
  } else if (message.length > 0 && registrering.value) {
    message = " ";
    chat.sendMessage(chatRoomUserIsIn["current"], message, registrering.value);
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
  let presence = new Presence();
  presence.presence();
});

loggit.addEventListener("click", () => {
  let loggit = new Login();
  loggit.logingithub();
});

signup.addEventListener("click", () => {
  let email = document.getElementById("registeremail");
  let password = document.getElementById("registerpassword");
  let password2 = document.getElementById("registerpassword2");
  let register = new Register();
  register.register(email.value, password.value);
  let presence = new Presence();
  presence.presence();
});

logout.addEventListener("click", () => {
  let logout = new Login();
  logout.logout();
});

/* Angående tillgång till registrering. */

let sign = document.getElementById("sign");

sign.addEventListener("click", function() {
  document.getElementById("register").style.display = "block";
  document.getElementById("registration/login").style.display = "none";
});

/* Tillgång till chatrummet. */

let showChatroom = document.getElementById("show-chatroom");

showChatroom.addEventListener("click", function() {
  document.getElementById("chat").style.display = "block";
  document.getElementById("introduktion").style.display = "none";
});
