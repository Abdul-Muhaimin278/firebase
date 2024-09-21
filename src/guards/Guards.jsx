import { Navigate } from "react-router-dom";

const isAuthenticated = () => {
	let user = localStorage.getItem("User");
	return !!user;
};

const AuthGuard = ({ children }) => {
	if (isAuthenticated()) {
		return children;
	} else {
		return <Navigate to="/login" replace />;
	}
};

const UnAuthGuard = ({ children }) => {
	if (!isAuthenticated()) {
		return children;
	} else {
		return <Navigate to="/home" replace />;
	}
};

export { AuthGuard, UnAuthGuard };
