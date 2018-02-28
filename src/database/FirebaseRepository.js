import * as firebase from 'firebase';

export default class {
    constructor() {

    }

    get config() {
        return {
            apiKey: "AIzaSyC99W8Q0Ljie57VFr4lPpAB8-uZlJDQ0dY",
            authDomain: "chatapp-151d0.firebaseapp.com",
            databaseURL: "https://chatapp-151d0.firebaseio.com",
            projectId: "chatapp-151d0",
            storageBucket: "chatapp-151d0.appspot.com",
            messagingSenderId: "105631242194"
        }
    }

    database() {
        try {
            firebase.initializeApp(this.config);
        } catch (err) {
            // disable multiple implementations (enables hot-reloading)
            if (!/already exists/.test(err.message)) {
                console.error(err);
                // Try to solve the error if there are any.
                firebase.app().delete().then(() => {
                    console.warn("reinitializing firebase app");
                    return firebase.initializeApp(this.config);
                });
            }
        }
        return firebase.database();
    }

    getData(urlPointer, event, func) {
        this.database().ref(urlPointer).on(event, (snapshot) => {
            func(snapshot.val());
        }, (err) => {
            // we can't save the user this time, as this is a super generic method.
            console.error(err);
        });
    }

    // Be careful on using post on data that already exists.
    postData(urlPointer, child, obj) {
        this.database().ref(urlPointer).child(child).set(obj, (err) => {
            if(err) {
                console.error(err);
            } else {
                console.log("Post completed");
            }
        });
    }

    updateData(urlPointer, child, updateRow) {
        // Update row {"nickname" : "Jeppan"}
        this.database().ref(urlPointer).child(child).update(updateRow, (err) => {
            if(err) {
                console.error(err);
            } else {
                console.log("Update completed");
            }
        });
    }
}