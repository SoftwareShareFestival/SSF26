function CampIntro({ detail }) {
	return (
		<div className="max-w-[var(--content-max)] w-full flex gap-10">
			<img className="w-63" src={detail.cover} />
			<div className="flex flex-col justify-end">
				<div className="text-4xl font-bold text-black">{detail.title}</div>
				<div>{detail.campIntro}</div>
			</div>
		</div>
	);
}
export default CampIntro;
