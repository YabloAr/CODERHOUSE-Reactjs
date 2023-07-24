// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlze7Zhs0sXiLqs5ZmRJGekVYcLVOYnCg",
    authDomain: "yablo-test.firebaseapp.com",
    projectId: "yablo-test",
    storageBucket: "yablo-test.appspot.com",
    messagingSenderId: "888963297352",
    appId: "1:888963297352:web:6f6ba3af64b5d60dfb287d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)