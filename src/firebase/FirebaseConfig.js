import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import {GoogleAuthProvider, signInWithPopup, onAuthStateChanged, getAuth, signOut} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyB3UQbj-o6xj9IOgme-Xn4EpkEUXO0X06c",
    authDomain: "react-chat-app-fdd82.firebaseapp.com",
    projectId: "react-chat-app-fdd82",
    storageBucket: "react-chat-app-fdd82.appspot.com",
    messagingSenderId: "90349757488",
    appId: "1:90349757488:web:fafe17b05a618defe7b9f5"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const provider = new GoogleAuthProvider();

export {database as default, provider, signInWithPopup, onAuthStateChanged, getAuth, signOut}



export const userLogin = _ => signInWithPopup(getAuth(), provider);
export const userLogout = _ => signOut(getAuth());
