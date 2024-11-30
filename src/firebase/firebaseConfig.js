import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB64B5jec1uolb-J8X5r0WwOKNtpmWQgPA",
  authDomain: "luna-166f1.firebaseapp.com",
  projectId: "luna-166f1",
  storageBucket: "luna-166f1.firebasestorage.app",
  messagingSenderId: "136032883202",
  appId: "1:136032883202:web:5a981ac32c2fee8d478d1b",
  measurementId: "G-Y0QGSPRZNC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
