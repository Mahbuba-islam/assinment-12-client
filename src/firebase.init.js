// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL-W2nnbcV6kgNNPKdT8vx5yb9aMkiabA",
  authDomain: "manufacturer-website-e41b9.firebaseapp.com",
  projectId: "manufacturer-website-e41b9",
  storageBucket: "manufacturer-website-e41b9.appspot.com",
  messagingSenderId: "886838211362",
  appId: "1:886838211362:web:dd77a4ce6440c97bfaeb7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;





