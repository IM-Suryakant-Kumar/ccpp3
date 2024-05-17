import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../components";

export const Layout = () => {
	return (
		<div className="relative">
			{/* header */}
			<Header />
			{/* aside */}
			<Sidebar />
			{/* main section */}
			<main className="absolute left-56 top-[5rem] right-0 pl-4">
				<Outlet />
			</main>
		</div>
	);
};
