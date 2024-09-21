import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button, Card } from "reactstrap";
import { logout } from "../store/action";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

const Home = () => {
	const [usersList, setUsersList] = useState([]);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);

	const loading = useSelector((state) => state.isLoading);

	const handleLogout = () => {
		dispatch(logout(() => navigate("/login")));
	};

	const usersCollectionRef = collection(db, "movies");

	useEffect(() => {
		const getUsersList = async () => {
			try {
				const data = await getDocs(usersCollectionRef);
				const filteredData = data.docs.map((doc) => ({
					...doc.data(),
					id: doc.id,
				}));
				setUsersList(filteredData);
			} catch (err) {
				console.error(err);
			}
		};
		getUsersList();
	}, [usersCollectionRef]);

	return (
		<>
			<h1>Home</h1>
			<Card className="mx-auto" style={{ width: "20rem" }}>
				<p>
					Logged in with <br /> Email: {user.email}
				</p>
				{loading !== true ? (
					<Button color="primary" className="mx-auto" onClick={handleLogout}>
						Log out
					</Button>
				) : (
					<Button className="mx-auto" color="primary" type="button" disabled>
						<span
							className="spinner-border spinner-border-sm"
							aria-hidden="true"
						></span>
					</Button>
				)}
				{usersList.map((user, index) => {
					return (
						<div key={index}>
							<h3>{user.userName}</h3>
							<h4>{user.id}</h4>
							<h6>{user.email}</h6>
							<h6>{user.password}</h6>
						</div>
					);
				})}
			</Card>
		</>
	);
};
export default Home;
