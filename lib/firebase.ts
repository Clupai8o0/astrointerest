// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: "portfolio-75182.firebaseapp.com",
	projectId: "portfolio-75182",
	storageBucket: "portfolio-75182.appspot.com",
	messagingSenderId: "705089254129",
	appId: "1:705089254129:web:01c9cc288e5a560907ef50",
	measurementId: "G-GKY6QNFBVF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// const db = getFirestore(app);
// const analytics = getAnalytics(app);
