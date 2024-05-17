import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";
import { Home, NotFound } from "./pages";
import { Layout } from "./components";

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
};

export default App;
