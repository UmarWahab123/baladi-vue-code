import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBb5nrjAsakaJEX1uFsw9fvGVyVOIQPqHE",
  authDomain: "slack-clone-asad.firebaseapp.com",
  projectId: "slack-clone-asad",
  storageBucket: "slack-clone-asad.appspot.com",
  messagingSenderId: "88928286067",
  appId: "1:88928286067:web:f08355ad12c8cfb2224106",
  measurementId: "G-TNC7GXD00K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
const facbookprovider = new firebase.auth.FacebookAuthProvider();
export { db, auth, provider, facbookprovider };
