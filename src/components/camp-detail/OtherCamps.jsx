import { Link } from "react-router";

function OtherCamps({ detail, details }) {
	const allCamps = Object.values(details);

	const filteredCamps = allCamps.filter(
		(camp) => camp.category === detail.category,
	);

	return (
		<div className="flex flex-col lg:my-30 my-15 gap-10 mx-auto">
			<div className="lg:text-4xl text-2xl font-bold text-[#202330]">
				다른 캠프도 확인해보세요
			</div>
			<div className="flex lg:flex-row flex-col lg:gap-20 gap-14 items-center">
				<div className="grid grid-cols-2 gap-4 lg:flex lg:gap-5">
					{filteredCamps.map((camp) => (
						<Link key={camp.id} to={`/camp/${camp.link}`}>
							<img
								src={camp.cover}
								className="lg:w-54 w-40 rounded-md border border-[#D9D9D9]"
							/>
						</Link>
					))}
				</div>
				<Link to="/#camps">
					<div className="lg:text-xl text-base text-[#202330] font-bold hover:underline underline-offset-4 decoration-2">{`전체보기 >`}</div>
				</Link>
			</div>
		</div>
	);
}
export default OtherCamps;
