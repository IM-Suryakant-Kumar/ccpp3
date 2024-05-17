import { NavLink } from "react-router-dom";
import { MdHistory, MdOutlineArchive, MdOutlineDashboard } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { PiNotepad } from "react-icons/pi";
import { GiNotebook } from "react-icons/gi";
import { PiShippingContainerBold } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

export const Sidebar = () => {
	return (
		<aside className="min-h-screen w-60 border bg-[#6B120A] rounded-e-[2.8rem] text-white flex items-center">
			<nav className="flex flex-col">
				<NavLink
					className="mx-3 w-52 h-[3.5rem] flex gap-2 items-center px-4 rounded-lg font-semibold"
					to="/"
				>
					<MdOutlineDashboard size="1.4rem" />
					<span className="">Dashboard</span>
				</NavLink>
				<NavLink
					className="mx-3 w-52 h-[3.5rem] flex gap-2 items-center px-4 rounded-lg font-semibold"
					to="/analytics"
				>
					<TbBrandGoogleAnalytics size="1.4rem" />
					<span className="">Analytics</span>
				</NavLink>
				<NavLink
					className="mx-3 w-52 h-[3.5rem] flex gap-2 items-center px-4 rounded-lg font-semibold"
					to="/rate-request"
				>
					<PiNotepad size="1.4rem" />
					<span className="">Rate Request</span>
					<IoIosArrowDown className="ml-auto" size="1.25rem" />
				</NavLink>
				<NavLink
					className="mx-3 w-52 h-[3.5rem] flex gap-2 items-center px-4 rounded-lg font-semibold"
					to="/quote"
				>
					<GiNotebook size="1.4rem" />
					<span className="">Quote</span>
					<IoIosArrowDown className="ml-auto" size="1.25rem" />
				</NavLink>
				<NavLink
					className="mx-3 w-52 h-[3.5rem] flex gap-2 items-center px-4 rounded-lg font-semibold"
					to="/shipments"
				>
					<PiShippingContainerBold size="1.4rem" />
					<span className="">Shipments</span>
				</NavLink>
				<NavLink
					className="mx-3 w-52 h-[3.5rem] flex gap-2 items-center px-4 rounded-lg font-semibold"
					to="/user-list"
				>
					<FaRegUserCircle size="1.4rem" />
					<span className="">User List</span>
				</NavLink>
				<NavLink
					className="mx-3 w-52 h-[3.5rem] flex gap-2 items-center px-4 rounded-lg font-semibold"
					to="/archive"
				>
					<MdOutlineArchive size="1.4rem" />
					<span className="">Archive</span>
					<IoIosArrowDown className="ml-auto" size="1.25rem" />
				</NavLink>
				<NavLink
					className="mx-3 w-52 h-[3.5rem] flex gap-2 items-center px-4 rounded-lg font-semibold"
					to="/history"
				>
					<MdHistory size="1.4rem" />
					<span className="">History</span>
				</NavLink>
			</nav>
		</aside>
	);
};
