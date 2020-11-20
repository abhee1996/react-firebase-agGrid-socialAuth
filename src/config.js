import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAbsVIHpBt8F3Whb3zl0LXQIKXOj-cPdZU",
  authDomain: "ag-grid-social-login.firebaseapp.com",
  databaseURL: "https://ag-grid-social-login.firebaseio.com",
  projectId: "ag-grid-social-login",
  storageBucket: "ag-grid-social-login.appspot.com",
  messagingSenderId: "283330301161",
  appId: "1:283330301161:web:d96ddb3cf8d1218cb27478",
  measurementId: "G-39F8YXFD9V"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

}

export default firebase;
