import { Link } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Ellpse from "../assets/Ellipse.png";

export const Header = () => {
	return (
		<header className="absolute left-60 pl-4 right-0 h-[5rem] flex items-center border-b-2 border-[#D9D9D9]">
			<Link className="text-[1.79rem] font-semibold text-[#353535]" to="/">
				Dashboard
			</Link>
			<nav className="w-[22rem] ml-auto flex items-center justify-around gap-4">
				{/* notification icon */}
				<div className="relative cursor-pointer">
					<div className="w-[0.7rem] h-[0.7rem] bg-[#FF4D49] border-2 border-white rounded-full absolute right-0 top-[-0.2em]"></div>
					<IoIosNotificationsOutline size="1.25rem" color="#616C76" />
				</div>
				{/* profile section */}
				<div className="w-[80%] flex gap-4">
					<div className="relative">
						<img className="w-[3.7rem] bg-cover cursor-pointer" src={Ellpse} alt="" />
						{/* status */}
						<div className="bg-[#72E128] w-[1rem] h-[1rem] rounded-full border-2 border-white absolute bottom-[0.2rem] right-0"></div>
					</div>
					<div className="flex flex-col gap-2">
						<span className="text-lg font-semibold cursor-pointer">Edward william</span>
						<span className="text-xs text-[#969596]">Admin</span>
					</div>
				</div>
				<div className="flex items-center mr-4 cursor-pointer">
					<IoIosArrowDown size="1.25rem" color="#616C76" />
				</div>
			</nav>
		</header>
	);
};
