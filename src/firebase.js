import * as firebase from "firebase";
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAOXiMXRUwNg7FQkn3WFhiKcKwZr5wblRI",
    authDomain: "diary-25027.firebaseapp.com",
    databaseURL: "https://diary-25027.firebaseio.com",
    projectId: "diary-25027",
    storageBucket: "diary-25027.appspot.com",
    messagingSenderId: "661395996534",
    appId: "1:661395996534:web:66212869b0e96c45"
};
firebase.initializeApp(config);

export const database = firebase.database().ref("/notes");

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const twitterProvider = new firebase.auth.TwitterAuthProvider();
