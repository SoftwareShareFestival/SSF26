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
				<button type="button" className="text-[#171B2E] outline-none">
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
		<div className="flex flex-col lg:flex-row items-start lg:items-center w-full h-fit bg-[#F0EFF3] box-border py-10 px-6 lg:py-[88px] lg:px-[142px] justify-between gap-10 lg:gap-0">
			<div className="order-2 flex flex-col lg:order-1 gap-5">
				<div className="flex gap-4 w-fit">
					<img src="/sunrint_logo.svg" />
					<div className="font-bold text-[#171B2E] text-2xl w-fit flex-wrap">
						선린인터넷고등학교
					</div>
				</div>
				<div className="flex flex-col gap-5 h-fit font-medium text-4 leading-6 text-[#888992]">
					<div>
						<div>서울특별시 용산구 원효로97길 33-4 (청파동3가)</div>
						<div>Tel. 02-717-4616 | Fax. 02-704-0960</div>
					</div>
					<div>© 2026. 선린인터넷고등학교 All Rights Reserved.</div>
				</div>
			</div>
			<div className="order-1 flex flex-col gap-8.75 text-2 lg:order-2">
				<div className="flex flex-col gap-2.5">
					<div className="text-base font-bold text-[#838591]">후원</div>
					<div className="flex gap-2">
						<img className="h-5" src="/DragonMountain.png" alt="DragonMountainLogo" />
						<div className="text-3.5 font-semibold text-[#202330]">용산구청</div>
					</div>
				</div>
				<div className="flex gap-10.25">
					<div className="flex flex-col gap-6.25">
						<div className="flex flex-col gap-1.5">
							<div className="text-[#838591] font-bold">총괄</div>
							<div className="text-[#171B2E] font-medium">장한울</div>
						</div>
						<div>
							<div className="text-[#838591] font-bold">학과 총괄</div>
							<div className="flex gap-2 font-medium">
								<div className="text-[#171B2E]">김주영</div>
								<div className="text-[#171B2E]">김민후</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-6.25">
						<div className="flex flex-col gap-1.5 font-medium">
							<div className="text-[#838591] font-bold">디자인</div>
							<div className="flex gap-2 font-medium">
								<div className="text-[#171B2E]">조예서</div>
								<div className="text-[#171B2E]">이승주</div>
								<div className="text-[#171B2E]">윤서율</div>
								<div className="text-[#171B2E]">강서진</div>
							</div>
						</div>
						<div>
							<div className="text-[#838591] font-bold">개발</div>
							<div className="flex gap-2 font-medium">
								<DeveloperCredit label="우작" tooltip="김우찬" />
								<DeveloperCredit label="PIXELHIZE" tooltip="김하준" />
								<DeveloperCredit label="김서준" tooltip="1325OK" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
