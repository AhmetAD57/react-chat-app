import { initializeApp } from 'firebase/app';
import { getFirestore, collection , addDoc, getDocs, onSnapshot, doc} from "firebase/firestore";
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
const coll= collection(db, "users");




export const getAllMessages = ()=>{
  
  
        // addDoc(collection(db, "users"), {
        //   first: "Ada",
        //   last: "Lovelace",
        //   born: 1815
        // }).then(snapshot =>{ console.log("Document written with ID: ", snapshot.id)});
       
        getDocs(coll).then(snapshot =>{
            snapshot.docs.forEach(doc => console.log(doc.data().born));
          
        })
      
  
}














export const userLogin = _ => signInWithPopup(getAuth(), provider);
export const userLogout = _ => signOut(getAuth());

export {provider, signInWithPopup, onAuthStateChanged, getAuth, signOut}