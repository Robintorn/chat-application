import Chat from './logic/chat';
import Login from './logic/login';
import Register from './logic/register';

let testDiv = document.getElementById('test');
testDiv.style.backgroundColor = "red";
testDiv.innerText = "CLICK ME";

testDiv.addEventListener('click', () => {
    let chat = new Chat();
    testDiv.innerHTML += chat.render();

    let login = new Login();
    testDiv.innerHTML += login.render();

    let register = new Register();
    testDiv.innerHTML += register.render();
});