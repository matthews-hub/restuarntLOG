
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1eHn0p2PmvEQazOU02e1V8gtFg_ZTFXY",
    authDomain: "resturantusers.firebaseapp.com",
    projectId: "resturantusers",
    storageBucket: "resturantusers.appspot.com",
    messagingSenderId: "92032426669",
    appId: "1:92032426669:web:6829d23deddead16cd9c24",
    measurementId: "G-MCL5XMY8SH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Auth= getAuth(app);
export const db = getFirestore(app);
export default(app,db)