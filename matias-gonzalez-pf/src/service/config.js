
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
//  apiKey: "AIzaSyB6EKez8Z79WaLUFmdxe2TA6Ba-JtsqHVA",

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APY_KEY,
  authDomain: "clase13-80dd0.firebaseapp.com",
  projectId: "clase13-80dd0",
  storageBucket: "clase13-80dd0.appspot.com",
  messagingSenderId: "838408763725",
  appId: "1:838408763725:web:c329f1d1fe2628c9f75f04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)