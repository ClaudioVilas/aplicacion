// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI2fAPH97HcZCPAhlWwNFDMHNfLbkN8V4",
  authDomain: "accionesecommerce.firebaseapp.com",
  projectId: "accionesecommerce",
  storageBucket: "accionesecommerce.appspot.com",
  messagingSenderId: "834134382844",
  appId: "1:834134382844:web:d77fd46d20f3b3e8a7df79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)