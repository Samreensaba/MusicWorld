/** @format */

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCEy8QCIQtO_E3O5dE1XdP5D0Q16RTyBUs",
  authDomain: "login-auth-8ecee.firebaseapp.com",
  projectId: "login-auth-8ecee",
  storageBucket: "login-auth-8ecee.appspot.com",
  messagingSenderId: "589862582293",
  appId: "1:589862582293:web:25c6162bd9fca6f29c761c",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
