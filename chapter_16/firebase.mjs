// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxTyR569n-fgUriMsdWexNh2M7ItR_kg4",
  authDomain: "projeto-js-43150.firebaseapp.com",
  projectId: "projeto-js-43150",
  storageBucket: "projeto-js-43150.appspot.com",
  messagingSenderId: "960004733952",
  appId: "1:960004733952:web:4188f6639927d3e8ca2ce5",
  measurementId: "G-FZQ9JBVG9S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

export var lili = 'sdlfjsaoipfjaweoipj';