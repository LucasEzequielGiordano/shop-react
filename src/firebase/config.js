// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxKbt0tKovr4w96V7BWYiS2nNufuyBGAk",
    authDomain: "bella-vita-shop.firebaseapp.com",
    projectId: "bella-vita-shop",
    storageBucket: "bella-vita-shop.appspot.com",
    messagingSenderId: "535260371194",
    appId: "1:535260371194:web:eeb628c6738ddab8e41143"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default function getFirestoreApp() {
    return app
}