import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn-sMB2zbHMnlAqbWWhtORbzUuV9P3paA",
  authDomain: "react-next-shop-app-4ff90.firebaseapp.com",
  projectId: "react-next-shop-app-4ff90",
  storageBucket: "react-next-shop-app-4ff90.appspot.com",
  messagingSenderId: "225964108170",
  appId: "1:225964108170:web:11bb36218c4b0c9d1c4073",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
