// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRbFPCZq1peCLGkEYWmlniSvRv_2Mdx-M",
  authDomain: "foody-app-nextjs.firebaseapp.com",
  databaseURL: "https://foody-app-nextjs-default-rtdb.firebaseio.com",
  projectId: "foody-app-nextjs",
  storageBucket: "foody-app-nextjs.appspot.com",
  messagingSenderId: "936571365206",
  appId: "1:936571365206:web:0801c205805b72f08cd8f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fileStorage = getStorage(app);
