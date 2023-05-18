// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGIbaL3nqArvNmB0dG4-AdoO5cTTU3SBI",
  authDomain: "linkedin-clone-1c3e8.firebaseapp.com",
  projectId: "linkedin-clone-1c3e8",
  storageBucket: "linkedin-clone-1c3e8.appspot.com",
  messagingSenderId: "540350543992",
  appId: "1:540350543992:web:3301b3da6e2c78c9b5d58d",
  measurementId: "G-868PFE5JP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };