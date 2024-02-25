// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvtbUdiVx9BqlAq_6Y9h-BgForH-6z3qg",
  authDomain: "mern-book-inventory-1fca5.firebaseapp.com",
  projectId: "mern-book-inventory-1fca5",
  storageBucket: "mern-book-inventory-1fca5.appspot.com",
  messagingSenderId: "1035845270853",
  appId: "1:1035845270853:web:ecf25d4026de64b744922c"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;