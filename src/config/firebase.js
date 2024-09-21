import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyA-L7Kkzg0I6l1aIVl2zfGx3DyAQSvEMXg",
	authDomain: "fir-1-4e3b9.firebaseapp.com",
	databaseURL: "https://fir-1-4e3b9-default-rtdb.firebaseio.com",
	projectId: "fir-1-4e3b9",
	storageBucket: "fir-1-4e3b9.appspot.com",
	messagingSenderId: "1087648075846",
	appId: "1:1087648075846:web:8963c12bdc91d510183a47",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
