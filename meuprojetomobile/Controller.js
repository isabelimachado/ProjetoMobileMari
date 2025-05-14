// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmc-hcw4XUEUsdilfHiQKCgNulygyYPLs",
  authDomain: "mobile2025-d6f40.firebaseapp.com",
  projectId: "mobile2025-d6f40",
  storageBucket: "mobile2025-d6f40.firebasestorage.app",
  messagingSenderId: "254780334945",
  appId: "1:254780334945:web:4c268d571ace6c2dcb1b20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);