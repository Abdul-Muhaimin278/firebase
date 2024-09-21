import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes/index.jsx";

function App() {
	const router = createBrowserRouter(routes);

	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
