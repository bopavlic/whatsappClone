import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEJuMt68J5Gd3ZkfkdSmfYda1cIJAVuG4",
  authDomain: "whatsapp-clone-aae61.firebaseapp.com",
  projectId: "whatsapp-clone-aae61",
  storageBucket: "whatsapp-clone-aae61.appspot.com",
  messagingSenderId: "491003458456",
  appId: "1:491003458456:web:836f5b6b743944f042f1ed",
  measurementId: "G-KWY3Y8RQPB",
};

//storing initialize app of firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//date base
const db = firebaseApp.firestore();
//authorization
const auth = firebase.auth();
//google authorization
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
