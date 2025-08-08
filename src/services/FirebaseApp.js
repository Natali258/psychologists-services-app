import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from 'firebase/auth';
// import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDj6BODjU6wuGbwsQBhvuru4aSR6mSxz20",
  authDomain: "psychologists-services-a-54279.firebaseapp.com",
  databaseURL: "https://psychologists-services-a-54279-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "psychologists-services-a-54279",
  storageBucket: "psychologists-services-a-54279.firebasestorage.app",
  messagingSenderId: "1030750938893",
  appId: "1:1030750938893:web:dacac3af07e5c212f5f244",
  measurementId: "G-B59THEZ924"
};

const conectAPI = initializeApp(firebaseConfig);
export const auth = getAuth(conectAPI);
export const database = getDatabase(conectAPI);

// export const db = getFirestore(conectAPI);
