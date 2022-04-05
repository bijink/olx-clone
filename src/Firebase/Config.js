import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   // apiKey: process.env.FIREBASE_API_KEY,
   // authDomain: "olx2-f5b61.firebaseapp.com",
   // projectId: "olx2-f5b61",
   // storageBucket: "olx2-f5b61.appspot.com",
   // messagingSenderId: "503067130869",
   // appId: "1:503067130869:web:e1a6ebd59030185a837ebc",
   // measurementId: "G-36SBFFZLB0"

   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
   appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export default firebase.initializeApp(firebaseConfig);
