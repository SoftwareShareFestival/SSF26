function CampIntro({ detail }) {
	return (
		<div className="max-w-[var(--content-max)]">
			<img src={detail.cover} />
			{detail.cover}
		</div>
	);
}
export default CampIntro;
