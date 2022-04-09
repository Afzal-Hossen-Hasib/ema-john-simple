// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9ZgnugExMcII2MPb9CsEsntEZqPi-hXk",
  authDomain: "ema-jhon-simple-6d9b6.firebaseapp.com",
  projectId: "ema-jhon-simple-6d9b6",
  storageBucket: "ema-jhon-simple-6d9b6.appspot.com",
  messagingSenderId: "405634351945",
  appId: "1:405634351945:web:60e1d4009f806e482f5098"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth (app);

export default auth;