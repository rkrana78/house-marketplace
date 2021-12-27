import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU0GN7nnbzhelZ62iLMx8jZaOeqE1_qfI",
  authDomain: "house-marketplace-app-221.firebaseapp.com",
  projectId: "house-marketplace-app-221",
  storageBucket: "house-marketplace-app-221.appspot.com",
  messagingSenderId: "131392332586",
  appId: "1:131392332586:web:985a2ed54bfed02870b453"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()