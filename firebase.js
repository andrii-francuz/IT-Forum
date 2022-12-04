// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz9UwxSHwOzD5Hp59UOKf0tRoUHIMbnBg",
  authDomain: "it-forum-74e2e.firebaseapp.com",
  projectId: "it-forum-74e2e",
  storageBucket: "it-forum-74e2e.appspot.com",
  messagingSenderId: "544208320334",
  appId: "1:544208320334:web:170f6f3507e1b9b146501f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db }