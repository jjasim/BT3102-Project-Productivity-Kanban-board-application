// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPB1jmwH-3h1YmBAkkekTF8eDto4pfo9c",
  authDomain: "workwise-b1604.firebaseapp.com",
  projectId: "workwise-b1604",
  storageBucket: "workwise-b1604.appspot.com",
  messagingSenderId: "218806215802",
  appId: "1:218806215802:web:258458dab46639a66e07c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;