import FirebaseRepo from './database/FirebaseRepository';

let testDiv = document.getElementById('test');
testDiv.style.backgroundColor = "red";
testDiv.innerText = "CLICK ME";

let login = document.getElementById("login");
let signup = document.getElementById("signup");

testDiv.addEventListener('click', () => {
    let fire = new FirebaseRepo();

    // The url you want to point to, The event, what you want to do with the result (see function)
    fire.getData('/users', 'value', (x) => {
        console.log(x);
    }); // WhatIWantToDoWithTheResult

    // careful on using this one on already existing data.

    // you can use this in your logic/classes folder. only using getData('/', 'something', {});
    // This is just a demo.
});

login.addEventListener("click", () => {
    
});

signup.addEventListener("click", () => {
    
});