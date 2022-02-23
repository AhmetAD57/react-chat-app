import { initializeApp } from 'firebase/app';
import { getFirestore, collection , addDoc, getDocs, onSnapshot, doc, serverTimestamp, query, orderBy, limit } from "firebase/firestore";
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
const provider = new GoogleAuthProvider();



const db = getFirestore(app);
const coll= collection(db, "messages");



//const query = coll.orderBy('createDate').limit(100);





///realtime get onSnapshot



       




export const sendMessage = (uId, message, profileImageURL) => {
  addDoc(collection(db, "messages"), {
    uId: uId,
    message: message,
    profileImageURL: profileImageURL,
    creatingTime: serverTimestamp(),
  });
}

export const userLogin = _ => signInWithPopup(getAuth(), provider);
export const userLogout = _ => signOut(getAuth());

export {provider, signInWithPopup, onAuthStateChanged, getAuth, signOut, onSnapshot, coll, getDocs, query, orderBy, limit }