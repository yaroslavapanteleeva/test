import firebase from 'firebase/app'
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBJaugTo1OOzaepZt-FoJDiLqCclyFmAVs",
    authDomain: "todo-list-d3f4a.firebaseapp.com",
    databaseURL: "https://todo-list-d3f4a.firebaseio.com",
    projectId: "todo-list-d3f4a",
    storageBucket: "todo-list-d3f4a.appspot.com",
    messagingSenderId: "986372108850",
    appId: "1:986372108850:web:e70ea50c2df09aa64c822b"
};


firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;