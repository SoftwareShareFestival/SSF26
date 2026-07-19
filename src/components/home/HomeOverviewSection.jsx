const timelineItems = [
	{
		year: "2023",
		src: "/SSF2023.svg",
		alt: "SSF 2023",
		className: "w-[72px] md:w-[82px]",
		yearClassName: "md:text-[1.45rem]",
	},
	{
		year: "2024",
		src: "/SSF2024.svg",
		alt: "SSF 2024",
		className: "w-[96px] md:w-[110px]",
		yearClassName: "md:text-[1.45rem]",
	},
	{
		year: "2025",
		src: "/SSF2025.svg",
		alt: "SSF 2025",
		className: "w-[74px] md:w-[84px]",
		yearClassName: "md:text-[1.6rem]",
	},
	{
		year: "2026",
		src: "/SSF2026.svg",
		alt: "SSF 2026",
		className: "w-[150px] md:w-[182px]",
		yearClassName: "md:text-[1.7rem]",
	},
];

export default function HomeOverviewSection() {
	return (
		<section className="bg-[#F0EFF3] text-slate-900">
			<div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--content-pad)] py-20 md:py-28">
				<div className="mx-auto flex w-full max-w-5xl flex-col gap-8 md:gap-10">
					<div className="w-full max-w-[700px] space-y-6">
						<h2 className="text-3xl font-bold tracking-tight text-[#ff3b8d] md:text-5xl text-balance break-keep">
							소프트웨어 나눔축제란 무엇일까요?
						</h2>

						<div className="space-y-1 text-base leading-7 text-slate-800 md:text-[1.06rem]">
							<p>선린인터넷고등학교 소프트웨어 나눔 축제.</p>
							<p>
								SSF는 2018년부터 개최된 선린인터넷고등학교의 최대 축제 중 하나입니다.
							</p>
							<p>
								먼저 소프트웨어를 경험한 사람들이 미래 세대에게 소프트웨어에 대한 경험을
								나누고,
							</p>
							<p>다양한 소프트웨어를 직접 만들고 체험해볼 수 있는 행사입니다.</p>
						</div>
					</div>

					<div className="space-y-10 pt-2 md:space-y-12 md:pl-8 lg:pl-14">
						<div className="space-y-12 md:hidden">
							<div className="relative">
								<div className="absolute left-[calc(var(--content-pad)*-1)] right-[calc(75%+0.5rem)] top-[8.875rem] h-px bg-gradient-to-r from-transparent via-slate-300/45 to-slate-400/70" />
								<div className="absolute left-[calc(25%-0.5rem)] right-[calc(var(--content-pad)*-1)] top-[8.875rem] h-px bg-slate-400/70" />

								<div className="grid grid-cols-2 gap-x-8">
									{timelineItems.slice(0, 2).map((item) => (
										<article
											key={item.year}
											className="flex flex-col items-center text-center"
										>
											<div className="flex h-28 items-end justify-center">
												<img
													src={item.src}
													alt={item.alt}
													className={`${item.className} h-auto object-contain`}
												/>
											</div>

											<div className="mt-6 flex flex-col items-center gap-4">
												<span className="relative z-10 h-3 w-3 rounded-full bg-slate-800" />
												<span className="text-lg font-medium text-slate-500">
													{item.year}
												</span>
											</div>
										</article>
									))}
								</div>
							</div>

							<div className="relative">
								<div className="absolute left-[calc(var(--content-pad)*-1)] right-[calc(25%-0.5rem)] top-[8.875rem] h-px bg-slate-400/70" />

								<div className="grid grid-cols-2 gap-x-8">
									{timelineItems.slice(2).map((item) => (
										<article
											key={item.year}
											className="flex flex-col items-center text-center"
										>
											<div className="flex h-28 items-end justify-center">
												<img
													src={item.src}
													alt={item.alt}
													className={`${item.className} h-auto object-contain`}
												/>
											</div>

											<div className="mt-6 flex flex-col items-center gap-4">
												<span className="relative z-10 h-3 w-3 rounded-full bg-slate-800" />
												<span className="text-lg font-medium text-slate-500">
													{item.year}
												</span>
											</div>
										</article>
									))}
								</div>
							</div>
						</div>

						<div className="relative hidden md:grid md:grid-cols-4">
							<div className="absolute left-0 right-[87.5%] top-[9.875rem] h-px bg-gradient-to-r from-transparent via-slate-300/45 to-slate-400/70" />
							<div className="absolute left-[12.5%] right-[12.5%] top-[9.875rem] border-t border-slate-400/70" />

							{timelineItems.map((item) => (
								<div key={item.year} className="flex flex-col items-center text-center">
									<div className="flex h-32 items-end justify-center">
										<img
											src={item.src}
											alt={item.alt}
											className={`${item.className} h-auto object-contain`}
										/>
									</div>

									<div className="mt-6 flex flex-col items-center gap-6">
										<span className="relative z-10 h-3 w-3 rounded-full bg-slate-800" />
										<span className={`font-medium text-slate-500 ${item.yearClassName}`}>
											{item.year}
										</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
