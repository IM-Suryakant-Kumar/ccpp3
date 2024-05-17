import dvr from "../assets/dvr.png";
import fact_check from "../assets/fact_check.png";
import block from "../assets/block.png";
import clock_loader from "../assets/clock_loader_40.png";

export const Home = () => {
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
				className="mt-4 w-full h-[25rem]"
				src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19957653.630640335!2d-97.41352233235972!3d40.5914680632176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1715944568563!5m2!1sen!2sin"
				allowfullscreen=""
				loading="lazy"
			></iframe>
		</div>
	);
};
