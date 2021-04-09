import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyALmq6R5X5e9TZEgLW9rO7U0Z9AY8Iuc_c",
    authDomain: "reactjs-app-b5ee3.firebaseapp.com",
    databaseURL: "https://reactjs-app-b5ee3-default-rtdb.firebaseio.com",
    projectId: "reactjs-app-b5ee3",
    storageBucket: "reactjs-app-b5ee3.appspot.com",
    messagingSenderId: "138488492654",
    appId: "1:138488492654:web:bfe63dd8bf8163ee1dec7f",
    measurementId: "G-7N7C31C58B"
  };
 firebase.initializeApp ( firebaseConfig );

  export default firebase; 