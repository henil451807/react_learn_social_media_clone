// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider} from 'firebase/auth'  // for authentation
import {getFirestore} from 'firebase/firestore'  // like data you enter that goes to database


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxg2XAYwkWwhFOpP4Q_llWbxgDQzjBEig",
  authDomain: "react-learn-5025a.firebaseapp.com",
  projectId: "react-learn-5025a",
  storageBucket: "react-learn-5025a.appspot.com",
  messagingSenderId: "80859556784",
  appId: "1:80859556784:web:730181bb4ed171b07a0475"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);   // to getauth from firebase
export const provider = new GoogleAuthProvider();   // For google authentation
export const db = getFirestore(app); // data whtever you enter in create post that goes to firebase database.