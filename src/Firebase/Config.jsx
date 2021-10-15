import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
   authDomain: "olx2-f5b61.firebaseapp.com",
   projectId: "olx2-f5b61",
   storageBucket: "olx2-f5b61.appspot.com",
   messagingSenderId: "503067130869",
   appId: "1:503067130869:web:e1a6ebd59030185a837ebc",
   measurementId: "G-36SBFFZLB0"
};

export default firebase.initializeApp(firebaseConfig);