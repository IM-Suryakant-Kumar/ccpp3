import dvr from "../assets/dvr.png";
import fact_check from "../assets/fact_check.png";
import block from "../assets/block.png";
import clock_loader from "../assets/clock_loader_40.png";
import { useState } from "react";
import sea from "../assets/sea.png"
import air from "../assets/air.png"
import land from "../assets/land.png"

export const Home = () => {
	const [activeChart, setActiveChart] = useState("sea");

	return (
		<div className="mt-4 mr-4">
			{/* Booking details card */}
			<div className="flex justify-between gap-8">
				<div className="p-4 flex-1 flex bg-white gap-4 rounded-lg">
					<div className="flex justify-between flex-col">
						<span className="text-xs text-[#353535]">Total bookings</span>
						<span className="font-bold">501 Bookings</span>
					</div>
					<div className="bg-[#6B120A] p-4 rounded-md ml-auto">
						<img className="w-[1rem]" src={dvr} alt="dvr" />
					</div>
				</div>
				<div className="p-4 flex-1 flex bg-white gap-4 rounded-lg">
					<div className="flex justify-between flex-col">
						<span className="text-xs text-[#353535]">Bookings Utilized</span>
						<span className="font-bold">501 Bookings</span>
					</div>
					<div className="bg-[#F7A668] p-4 rounded-md ml-auto">
						<img className="w-[1rem]" src={fact_check} alt="dvr" />
					</div>
				</div>
				<div className="p-4 flex-1 flex bg-white gap-4 rounded-lg">
					<div className="flex justify-between flex-col">
						<span className="text-xs text-[#353535]">Booking Cancelled</span>
						<span className="font-bold">0 Bookings</span>
					</div>
					<div className="bg-[#EB5D50] p-4 rounded-md ml-auto">
						<img className="w-[1rem]" src={block} alt="dvr" />
					</div>
				</div>
				<div className="p-4 flex-1 flex bg-white gap-4 rounded-lg">
					<div className="flex justify-between flex-col">
						<span className="text-xs text-[#353535]">Utilization</span>
						<span className="font-bold">100%</span>
					</div>
					<div className="bg-[#7BB896] p-4 rounded-md ml-auto">
						<img className="w-[1rem]" src={clock_loader} alt="dvr" />
					</div>
				</div>
			</div>
			{/* google map */}
			<iframe
				className="mt-4 w-full h-[25rem] rounded-lg"
				src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19957653.630640335!2d-97.41352233235972!3d40.5914680632176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1715944568563!5m2!1sen!2sin"
				allowfullscreen=""
				loading="lazy"
			></iframe>
			{/* charts section */}
			<div className="mt-4 w-full bg-white rounded-lg p-8">
				<div className="flex">
					<span className="font-semibold text-2xl">Pie Chart Analysis</span>
					<div className="flex gap-6 mx-auto text-[#969596]">
						<div
							className={`flex justify-center items-center gap-2 pb-2 w-[5rem] text-center cursor-pointer ${
								activeChart === "sea" ? "text-[#EB5D50] border-b-4 border-[#EB5D50]" : ""
							}`}
							onClick={() => setActiveChart("sea")}
						>
              <img className="w-[20px] h-[20px]" src={sea} alt="sea" />
							<span className="text-center text-sm font-medium">Sea</span>
						</div>
						<div
							className={`flex justify-center items-center gap-2 pb-2 w-[5rem] text-center cursor-pointer ${
								activeChart === "air" ? "text-[#EB5D50] border-b-4 border-[#EB5D50]" : ""
							}`}
							onClick={() => setActiveChart("air")}
						>
              <img className="w-[20px] h-[20px]" src={air} alt="air" />
							<span className="text-center text-sm font-medium">Air</span>
						</div>
						<div
							className={`flex justify-center items-center gap-2 pb-2 w-[5rem] text-center cursor-pointer ${
								activeChart === "land" ? "text-[#EB5D50] border-b-4 border-[#EB5D50]" : ""
							}`}
							onClick={() => setActiveChart("land")}
						>
              <img className="w-[20px] h-[20px]" src={land} alt="land" />
							<span className="text-sm font-medium">Land</span>
						</div>
					</div>
				</div>
        {/* charts */}
        
			</div>
		</div>
	);
};
