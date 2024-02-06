// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e9432.firebaseapp.com",
  projectId: "mern-blog-e9432",
  storageBucket: "mern-blog-e9432.appspot.com",
  messagingSenderId: "329623055447",
  appId: "1:329623055447:web:9e5a89e8a14e31d5164712"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);