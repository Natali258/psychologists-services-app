import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDj6BODjU6wuGbwsQBhvuru4aSR6mSxz20",
  authDomain: "psychologists-services-a-54279.firebaseapp.com",
  databaseURL: "https://psychologists-services-a-54279-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "psychologists-services-a-54279",
  storageBucket: "psychologists-services-a-54279.appspot.com",
  messagingSenderId: "1  030750938893",
  appId: "1:1030750938893:web:dacac3af07e5c212f5f244",
  measurementId: "G-B59THEZ924"
};

// Initialize Firebase
export const conectAPI = initializeApp(firebaseConfig);

