// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMBIUG4E2l6TIkOm-kDIfasGvXl28dSSo",
  authDomain: "citl-project-c0446.firebaseapp.com",
  projectId: "citl-project-c0446",
  storageBucket: "citl-project-c0446.appspot.com",
  messagingSenderId: "97164319881",
  appId: "1:97164319881:web:a6c17028306e6f1cbefa58",
  measurementId: "G-0Z00VHMDKT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

