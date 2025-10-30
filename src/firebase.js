// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZtX7oDwflXWxPI8dGbnEcIL22Wb9OXOs",
  authDomain: "netflixgptt-e92d6.firebaseapp.com",
  projectId: "netflixgptt-e92d6",
  storageBucket: "netflixgptt-e92d6.firebasestorage.app",
  messagingSenderId: "259167773165",
  appId: "1:259167773165:web:0c0829bc132d80437947e4",
  measurementId: "G-9TX5X2G4PD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
export const auth = getAuth(app)

export default app;