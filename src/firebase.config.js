// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx5l2uJK4UVEUVpAynKUUAoLvqvAmUCeY",
  authDomain: "oasis-1b1dd.firebaseapp.com",
  projectId: "oasis-1b1dd",
  storageBucket: "oasis-1b1dd.appspot.com",
  messagingSenderId: "135572119639",
  appId: "1:135572119639:web:d4aba56feb8da245e84312"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)