// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk_4pr5zcGfrw7OCCbj62XgWxtqVZ_ajk",
  authDomain: "rtrip-e4961.firebaseapp.com",
  projectId: "rtrip-e4961",
  storageBucket: "rtrip-e4961.firebasestorage.app",
  messagingSenderId: "200132660609",
  appId: "1:200132660609:web:0cf206ab22bc1c26e1ec80",
  measurementId: "G-MJWG94QD8N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);