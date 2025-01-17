import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjlP_icdXnh6DbIemKIp4M7xWMkvatgKA",
  authDomain: "omilia-f0b42.firebaseapp.com",
  databaseURL: "https://omilia-f0b42-default-rtdb.firebaseio.com",
  projectId: "omilia-f0b42",
  storageBucket: "omilia-f0b42.appspot.com",
  messagingSenderId: "11465010307",
  appId: "1:11465010307:web:78a4221e498bfea2af7fb6",
  measurementId: "G-8FWM5P1VDC",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);