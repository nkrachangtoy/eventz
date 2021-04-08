// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore"



const firebaseConfig = {
    apiKey: "AIzaSyCVdm4ILruwejiSkdiD7bpdX14Yb8Br8is",
    authDomain: "eventz-website.firebaseapp.com",
    projectId: "eventz-website",
    storageBucket: "eventz-website.appspot.com",
    messagingSenderId: "1011473878677",
    appId: "1:1011473878677:web:0c04138df5bbc7924f959c"
  };


  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
  
  
  export default { firebase }