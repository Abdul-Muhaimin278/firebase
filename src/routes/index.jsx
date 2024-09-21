// import { AuthGuard, UnAuthGuard } from "../guards/Guards";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const routes = [
	{
		path: "/",
		element: <SignUp />,
		// <UnAuthGuard component={<signUp/>} />,
	},
	{
		path: "/home",
		element: <Home />,
		// <AuthGuard component={<Home />} />,
	},
	{
		path: "/login",
		element: <Login />,
		// <UnAuthGuard component={<Login />} />,
	},
];

export default routes;
