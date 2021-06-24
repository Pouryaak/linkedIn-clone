import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAP6jDYql056b7QFjEm5yr8tSREt3vR75k",
  authDomain: "linkedin-clone-ca433.firebaseapp.com",
  projectId: "linkedin-clone-ca433",
  storageBucket: "linkedin-clone-ca433.appspot.com",
  messagingSenderId: "537242337600",
  appId: "1:537242337600:web:3406ed7701e3b9fcb2baa5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
