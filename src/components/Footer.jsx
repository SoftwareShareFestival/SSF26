import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/animate-ui/components/radix/tooltip";

const TOOLTIP_DISABLED_AT = new Date("2026-09-17T00:00:00+09:00").getTime();

function DeveloperCredit({ label, tooltip }) {
	if (Date.now() >= TOOLTIP_DISABLED_AT) {
		return <span className="text-[#171B2E]">{label}</span>;
	}

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<button
					type="button"
					className="text-[#171B2E] outline-none cursor-pointer hover:opacity-80 transition-opacity"
				>
					{label}
				</button>
			</TooltipTrigger>
			<TooltipContent className="bg-[#171B2E] text-white">
				{tooltip}
			</TooltipContent>
		</Tooltip>
	);
}

function Footer() {
	return (
		<div className="w-full bg-[#F0EFF3] py-10 lg:py-16 flex justify-center box-border">
			<div className="w-full max-w-[var(--content-max)] px-4 sm:px-8 lg:px-[142px] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-y-5">
				<div className="order-1 lg:col-span-6 flex items-center lg:justify-start w-full">
					<div className="flex items-center gap-3">
						<img
							src="/logo/sunrint_logo.svg"
							alt="선린 로고"
							className="h-6 sm:h-7"
						/>
						<span className="font-bold text-[#171B2E] text-xl sm:text-2xl break-keep">
							선린인터넷고등학교
						</span>
					</div>
				</div>
				<div className="hidden lg:flex order-2 lg:col-span-6 flex-col gap-2">
					<span className="text-sm font-bold text-[#838591]">후원</span>
					<div className="flex items-center gap-2">
						<img src="/logo/DragonMountain.png" alt="용산구청" className="h-5" />
						<span className="text-sm font-semibold text-[#202330]">용산구청</span>
					</div>
				</div>
				<div className="order-2 lg:order-4 lg:col-span-6 w-full flex flex-col gap-5">
					<div className="flex lg:hidden flex-col gap-1">
						<span className="text-xs sm:text-sm text-[#838591]">후원</span>
						<div className="flex items-center gap-1.5">
							<img src="/logo/DragonMountain.png" alt="용산구청" className="h-4" />
							<span className="text-sm sm:text-base font-semibold text-[#202330]">
								용산구청
							</span>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-12">
						<div className="grid grid-rows-2 gap-5">
							<div className="flex flex-col gap-1">
								<span className="text-xs sm:text-sm font-bold text-[#838591]">
									총괄
								</span>
								<span className="text-sm sm:text-base font-medium text-[#171B2E]">
									장한울
								</span>
							</div>
							<div className="flex flex-col gap-1">
								<span className="text-xs sm:text-sm font-bold text-[#838591]">
									학과 총괄
								</span>
								<div className="flex flex-wrap gap-x-2 gap-y-1 text-sm sm:text-base font-medium text-[#171B2E]">
									<span>김주영</span>
									<span>김민후</span>
								</div>
							</div>
						</div>
						<div className="grid grid-rows-2 gap-5">
							<div className="flex flex-col gap-1">
								<span className="text-xs sm:text-sm font-bold text-[#838591]">
									디자인
								</span>
								<div className="flex flex-wrap gap-x-2 gap-y-0.5 text-sm sm:text-base font-medium text-[#171B2E]">
									<span>조예서</span>
									<span>이승주</span>
									<span>윤서율</span>
									<span>강서진</span>
								</div>
							</div>
							<div className="flex flex-col gap-1">
								<span className="text-xs sm:text-sm font-bold text-[#838591]">
									개발
								</span>
								<div className="flex flex-wrap gap-x-3 gap-y-0.5 text-sm sm:text-base font-medium text-[#171B2E]">
									<DeveloperCredit label="PIXELHIZE" tooltip="김하준" />
									<DeveloperCredit label="김우찬" tooltip="woojak" />
									<DeveloperCredit label="김서준" tooltip="1325OK" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="order-3 lg:order-3 lg:col-span-6 flex flex-col gap-4 font-medium leading-relaxed text-[#888992] break-keep">
					<hr className="block lg:hidden border-[#E6E6EA] my-2" />
					<div>
						<div className="text-xs lg:text-[16px] text-[#A0A1AB]">
							서울특별시 용산구 원효로97길 33-4 (청파동3가)
						</div>
						<div className="text-xs lg:text-[16px] text-[#A0A1AB]">
							Tel. 02-717-4616 | Fax. 02-704-0960
						</div>
					</div>
					<div className="text-xs lg:text-[16px] text-[#A0A1AB]">
						© 2026. 선린인터넷고등학교 All Rights Reserved.
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
