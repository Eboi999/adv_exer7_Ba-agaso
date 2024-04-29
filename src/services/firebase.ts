// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Attention Please add your firebase console config here
const firebaseConfig = {
  apiKey: "AIzaSyBLgCUCIyTb-9WpCLQC9rXKLa5ykJtt_Tw",
  authDomain: "adv-exer7-8d221.firebaseapp.com",
  projectId: "adv-exer7-8d221",
  storageBucket: "adv-exer7-8d221.appspot.com",
  messagingSenderId: "853232877449",
  appId: "1:853232877449:web:dc15fdd50f30ebb2eb2b58"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
