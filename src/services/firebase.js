import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVYH6B0_wJDn68Ao7q-rLnuHGHD80KHhI",
  authDomain: "docs-ce719.firebaseapp.com",
  projectId: "docs-ce719",
  storageBucket: "docs-ce719.appspot.com",
  messagingSenderId: "459242134222",
  appId: "1:459242134222:web:a287dc8e342adabcf0ce9f",
  measurementId: "G-D53TGX7RS2",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
