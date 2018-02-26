import * as firebase from 'firebase';

export default class {
    constructor() {
        console.log("Hello");
    }
    
    config() {
        return {
            apiKey: "AIzaSyC99W8Q0Ljie57VFr4lPpAB8-uZlJDQ0dY",
            authDomain: "chatapp-151d0.firebaseapp.com",
            databaseURL: "https://chatapp-151d0.firebaseio.com",
            projectId: "chatapp-151d0",
            storageBucket: "chatapp-151d0.appspot.com",
            messagingSenderId: "105631242194"
        }
    }

    get(url) {
        let app = firebase.initializeApp(this.config());
        // get going!
    }
}