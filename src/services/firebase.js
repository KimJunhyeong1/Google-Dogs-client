import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENTID,
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
