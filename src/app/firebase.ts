// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCMA0ox2oz039Spuj1BCRemS0dGYacKYI",
  authDomain: "portfolio-test-f816d.firebaseapp.com",
  projectId: "portfolio-test-f816d",
  storageBucket: "portfolio-test-f816d.appspot.com",
  messagingSenderId: "157040942335",
  appId: "1:157040942335:web:3fd8d923427ef2ecac40ca",
  measurementId: "G-TRKTWWTJEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);