// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSW8-sRqh9_nMtaW82J7snHjiqpUUXXZk",
  authDomain: "realtimefirebase-16445.firebaseapp.com",
  projectId: "realtimefirebase-16445",
  storageBucket: "realtimefirebase-16445.firebasestorage.app",
  messagingSenderId: "758718392725",
  appId: "1:758718392725:web:73cd4e1f65fd10c1592e9c",
  measurementId: "G-1F2VF2MF39"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);