// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkvQJGVyow9Ih2h_6nD7Bki6553M7Hdbk",
  authDomain: "movieverse-99.firebaseapp.com",
  projectId: "movieverse-99",
  storageBucket: "movieverse-99.firebasestorage.app",
  messagingSenderId: "240839253262",
  appId: "1:240839253262:web:09f64171337260c51a4b5f",
  measurementId: "G-TQQYM9WSQK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);