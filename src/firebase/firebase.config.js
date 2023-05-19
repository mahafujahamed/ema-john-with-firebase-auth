// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVKuonK4N_-EG47eE23OOGyOr56r3KdIY",
  authDomain: "ema-john-with-firebase-a-f57a5.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-f57a5",
  storageBucket: "ema-john-with-firebase-a-f57a5.appspot.com",
  messagingSenderId: "757325186914",
  appId: "1:757325186914:web:51b6d55246b29cd516ce3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;