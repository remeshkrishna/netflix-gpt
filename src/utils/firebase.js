// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4Cfa6koNxCGV9zqIP4NZWYYu135xHldc",
  authDomain: "netflix-gpt-7bc68.firebaseapp.com",
  projectId: "netflix-gpt-7bc68",
  storageBucket: "netflix-gpt-7bc68.firebasestorage.app",
  messagingSenderId: "675358420598",
  appId: "1:675358420598:web:0e19a6199bf45ffb51b957",
  measurementId: "G-JKDGYBG4Y6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();