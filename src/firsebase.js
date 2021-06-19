import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtDtoH7w7WnmzGwlgabpQEAOslKBJjrg4",
  authDomain: "slack-clone-90808.firebaseapp.com",
  projectId: "slack-clone-90808",
  storageBucket: "slack-clone-90808.appspot.com",
  messagingSenderId: "547258417476",
  appId: "1:547258417476:web:6af9cd9334141d58071711",
  measurementId: "G-WTQF85JRVG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
