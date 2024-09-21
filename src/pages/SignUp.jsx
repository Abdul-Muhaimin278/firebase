import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../store/action";

import { Button, Card, Input } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [userName, setUserName] = useState("");

	const dispatch = useDispatch();
	// const user = useSelector((state) => state.user);
	const loading = useSelector((state) => state.isLoading);

	const signIn = () => {
		dispatch(
			userSignup({ userName, email, password }, () => navigate("/home"))
		);
	};

	return (
		<Card className="w-50 bg-dark shadow-lg mx-auto">
			<h1 className="text-white mb-4">Sign Up</h1>
			<div className="d-flex flex-column justify-content-between align-items center gap-2">
				<Input
					type="username"
					placeholder="Username..."
					onChange={(e) => setUserName(e.target.value)}
				/>
				<Input
					type="email"
					placeholder="Email..."
					onChange={(e) => setEmail(e.target.value)}
				/>
				<Input
					type="password"
					placeholder="Password..."
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<div className="mt-4">
				{loading !== true ? (
					<Button className="mx-1" color="primary" onClick={signIn}>
						Sign up
					</Button>
				) : (
					<Button className="mx-1" color="primary" type="button" disabled>
						<span
							className="spinner-border spinner-border-sm"
							aria-hidden="true"
						></span>
					</Button>
				)}
			</div>

			<p className="text-white my-3">
				Already have an account.<Link to="/Login">Log in</Link>
			</p>
		</Card>
	);
};

export default SignUp;
