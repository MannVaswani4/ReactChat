import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
 
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-14cf5.firebaseapp.com",
  projectId: "reactchat-14cf5",
  storageBucket: "reactchat-14cf5.appspot.com",
  messagingSenderId: "287827049513",
  appId: "1:287827049513:web:2d16858e5f0b8f1d807038",
  measurementId: "G-NRWFMCG6ZH"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth= getAuth();
export const db= getFirestore();
export const storage= getStorage();

