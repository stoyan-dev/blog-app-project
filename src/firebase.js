import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyBYvdk5FegP27ogG2nxogYNa_QviK0JIBs",
	authDomain: "react-blog-app-project.firebaseapp.com",
	projectId: "react-blog-app-project",
	storageBucket: "react-blog-app-project.appspot.com",
	messagingSenderId: "662061188946",
	appId: "1:662061188946:web:1d934d3bb772f40f469c8b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
