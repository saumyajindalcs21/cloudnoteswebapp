// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM3PdJVnRonn3xAyBsJkF510TTKIOdxl4",
  authDomain: "notes-masterstroke.firebaseapp.com",
  projectId: "notes-masterstroke",
  storageBucket: "notes-masterstroke.appspot.com",
  messagingSenderId: "35944742116",
  appId: "1:35944742116:web:2e5f68ce3d0806dc1580f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);