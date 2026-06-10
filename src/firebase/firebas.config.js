// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFDx1ZzzLLEnbPaaMtnMa2yAogjavMih8",
  authDomain: "book-vaibe.firebaseapp.com",
  projectId: "book-vaibe",
  storageBucket: "book-vaibe.firebasestorage.app",
  messagingSenderId: "263716297279",
  appId: "1:263716297279:web:815c0e121cc0341bfcf68a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;