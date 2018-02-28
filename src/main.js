import FirebaseRepo from './database/FirebaseRepository';

let testDiv = document.getElementById('test');
testDiv.style.backgroundColor = "red";
testDiv.innerText = "CLICK ME";


testDiv.addEventListener('click', () => {
    let fire = new FirebaseRepo();

    // The url you want to point to, The event, what you want to do with the result (see function)
    fire.getData('/users', 'value', (x) => {
        console.log(x);
    }); // WhatIWantToDoWithTheResult

    // careful on using this one on already existing data.

    // you can use this in your logic/classes folder. only using getData('/', 'something', {});
    // This is just a demo.
    fire.postData('/', 'users/hello', {
        "Jeppan": {
            leader: "YEPP",
            cool: "YEPP"
        }
    });
    fire.updateData('/', 'users', {
        "Jeppan": {
            leader: "WTF?",
            cool: "KIND OF"
        }
    });

    fire.updateData('/', 'users', {
        "Robban": {
            leader: "Hell YEAH",
            cool: "TOTALLY"
        }
    });

    fire.auth('signInUserWithEmailPass', 'jeppa12321n@gmail.com', 'he3333llowoooooord', (userCredentials) => {
        console.log(userCredentials);
    });

});