// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-729bb.firebaseapp.com",
  projectId: "mern-blog-729bb",
  storageBucket: "mern-blog-729bb.appspot.com",
  messagingSenderId: "1051930769253",
  appId: "1:1051930769253:web:6944843ee998b8b2fc938c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


  
