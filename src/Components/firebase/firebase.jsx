import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfbSpDN3gJQYQXwOc8AeuKTeepj-GwlGs",
  authDomain: "social-f4fbb.firebaseapp.com",
  projectId: "social-f4fbb",
  storageBucket: "social-f4fbb.appspot.com",
  messagingSenderId: "703465243865",
  appId: "1:703465243865:web:2f03bec4131abce206aac8",
  measurementId: "G-DNSLWV59YZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, onAuthStateChanged };
