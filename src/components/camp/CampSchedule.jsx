function CapmSchedule() {
	return (
		<div className="flex flex-col w-full h-auto items-center justify-center py-[146px] px-6 max-w-[var(--content-max)] mx-auto gap-15">
			<div className="flex flex-col text-center font-extrabold gap-3.75">
				<div className="text-3xl text-[#F7347E]">캠프 일정</div>
				<div className="text-[#202330] font-bold">
					지원을 통해 지원자를 선별 후 캠프를 진행합니다!
				</div>
			</div>
			<div className="flex flex-col lg:flex-row items-center justify-center w-full h-auto box-border border-[#F7347E] text-[#F7347E]">
				<div className="flex flex-col items-center justify-center rounded-full w-37 aspect-square border-3 shrink-0">
					<div className="w-auto flex flex-col items-center justify-center gap-0.5">
						<div className="font-extrabold text-[18px]">지원 시작</div>
						<div className="font-bold text-[18px]">8.31</div>
					</div>
				</div>
				<div className="bg-[#F7347E] lg:w-[73px] lg:h-0 h-[73px] border-3"></div>
				<div className="flex flex-col items-center justify-center rounded-full w-37 aspect-square border-3 bg-[#F7347E] shrink-0">
					<div className="w-auto flex flex-col items-center justify-center gap-0.5 text-[#F0EFF3]">
						<div className="font-extrabold text-[18px] ">지원 마감</div>
						<div className="font-bold text-[18px]">9.06</div>
					</div>
				</div>
				<div className="bg-[#F7347E] lg:w-[73px] lg:h-0 h-[73px] border-3"></div>
				<div className="flex flex-col items-center justify-center rounded-full w-37 aspect-square border-3 shrink-0">
					<div className="w-auto flex flex-col items-center justify-center gap-0.5">
						<div className="font-extrabold text-[18px]">캠프 진행</div>
						<div className="font-bold text-[18px]">9.12</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default CapmSchedule;
