function FestivalIntro() {
	return (
		<div className="text-balance w-full flex bg-[#F0EFF3] items-center justify-center flex-col p-6 py-16 lg:py-[97px] lg:px-[225px] gap-16 lg:gap-[76px]">
			<div className="w-full max-w-[var(--content-max)] px-[var(--content-pad)] flex flex-col-reverse lg:flex-row justify-between items-center gap-6 lg:gap-0">
				<div className="flex flex-col justify-center items-center lg:items-start gap-2 text-center lg:text-left">
					<div className="text-black font-bold text-2xl break-keep">
						각 동아리에서 준비한 체계적인 커리큘럼을 경험해보세요!
					</div>
					<div className="text-[#606061] break-keep">
						체계화된 캠프별 커리큘럼을 통해 중학생도 쉽게 소프트웨어 관련 경험을 깊이
						있게 쌓아갈 수 있습니다.
					</div>
				</div>
				<img className="h-[160px] lg:h-[226px] object-contain" src="/example.jpg" />
			</div>
			<div className="w-full max-w-[var(--content-max)] px-[var(--content-pad)] flex flex-col-reverse lg:flex-row justify-between items-center gap-6 lg:gap-0">
				<div className="flex flex-col justify-center items-center lg:items-start gap-2 text-center lg:text-left">
					<div className="text-black font-bold text-2xl break-keep">
						각 동아리에서 준비한 굿즈와 간식이 있어요!
					</div>
					<div className="text-[#606061] break-keep">
						동아리에 대한 이야기도 들어보고, 굿즈도 챙겨가세요!
					</div>
				</div>
				<img className="h-[160px] lg:h-[226px] object-contain" src="/example.jpg" />
			</div>
			<div className="w-full max-w-[var(--content-max)] px-[var(--content-pad)] flex flex-col-reverse lg:flex-row justify-between items-center gap-6 lg:gap-0">
				<div className="flex flex-col justify-center items-center lg:items-start gap-2 text-center lg:text-left">
					<div className="text-black font-bold text-2xl break-keep">
						재학생들과 직접 소통할 수 있어요!
					</div>
					<div className="text-[#606061] break-keep">
						쉬는 시간엔 재학생에게서 소프트웨어와 학교 생활에 대한 경험을 들을 수
						있습니다.
					</div>
				</div>
				<img className="h-[160px] lg:h-[226px] object-contain" src="/example.jpg" />
			</div>
		</div>
	);
}
export default FestivalIntro;
