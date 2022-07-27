import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCG3H70aZQK9CXXAS9Iq8Bz6WUMJ688OYc",
    authDomain: "disneyplus-clone-5f74a.firebaseapp.com",
    projectId: "disneyplus-clone-5f74a",
    storageBucket: "disneyplus-clone-5f74a.appspot.com",
    messagingSenderId: "731669372182",
    appId: "1:731669372182:web:87174616f661146ca14437",
    measurementId: "G-3KBNT9FRGY"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;