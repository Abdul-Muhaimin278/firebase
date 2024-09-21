import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const userSignup =
	(user, onSuccess = () => {}) =>
	async (dispatch) => {
		const { userName, email, password } = user;

		dispatch({
			type: "SIGN_UP_PENDING",
		});
		try {
			let signup = await createUserWithEmailAndPassword(
				auth,
				email,
				password,
				userName
			);
			const uid = signup.user.uid;

			const userDocRef = doc(db, "users", uid);
			await setDoc(userDocRef, { userName, email, password }, { merge: true });

			localStorage.setItem("User", JSON.stringify({ user, uid }));
			toast.success("User signed up successfully!");
			dispatch({
				type: "SIGN_UP",
				payload: { userName, email, password, uid },
			});
			onSuccess();
		} catch (error) {
			toast.error(error.message || "Unknown error occurred");
			dispatch({
				type: "SIGN_UP_ERROR",
			});
		}
	};
export const userLogin =
	(user, onSuccess = () => {}) =>
	async (dispatch) => {
		const { email, password } = user;

		dispatch({
			type: "LOGIN_PENDING",
		});
		try {
			await signInWithEmailAndPassword(auth, email, password);

			toast.success("User logged in successfully!");
			dispatch({
				type: "LOGIN",
				payload: { email, password },
			});
			onSuccess();
		} catch (error) {
			toast.error(error.message || "Unknown error occurred");
			dispatch({
				type: "LOGIN_ERROR",
			});
		}
	};

export const logout =
	(onSuccess = () => {}) =>
	async (dispatch) => {
		dispatch({
			type: "LOG_OUT_PENDING",
		});
		try {
			await signOut(auth);
			toast.success("User logged out successfully!");
			dispatch({
				type: "LOG_OUT",
			});
			onSuccess();
		} catch (error) {
			toast.error(error.message || "Unknown error occurred");
			dispatch({
				type: "LOG_OUT_ERROR",
			});
		}
	};
