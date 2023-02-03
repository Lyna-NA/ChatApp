import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBFetcJEBl238JwWB67I3HrRQMh-lylnYs",
  authDomain: "chatapp-react-and-firebase.firebaseapp.com",
  projectId: "chatapp-react-and-firebase",
  storageBucket: "chatapp-react-and-firebase.appspot.com",
  messagingSenderId: "1066556795331",
  appId: "1:1066556795331:web:ae28e47821ffe59e68f576",
  measurementId: "G-N5V357JFJD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();

// Create a root reference
export const storage = getStorage();

export const db = getFirestore();