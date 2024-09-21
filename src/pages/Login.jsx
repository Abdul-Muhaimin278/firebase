import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Input } from "reactstrap";
import { userLogin } from "../store/action";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();
	const loading = useSelector((state) => state.isLoading);

	const login = () => {
		dispatch(userLogin({ email, password }, () => navigate("/home")));
	};

	return (
		<Card className="w-50 bg-dark shadow-md mx-auto">
			<h1 className="text-white mb-4">Log in</h1>
			<div className="d-flex flex-column justify-content-between align-items center gap-2">
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
					<Button className="mx-1" color="primary" onClick={login}>
						Log in
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
				Don`t have an account?<Link to="/">Sign up</Link>
			</p>
		</Card>
	);
};

export default Login;
