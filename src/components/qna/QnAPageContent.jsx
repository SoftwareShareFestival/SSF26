import { useState } from "react";

export default function QnAPageContent() {
	const [openItems, setOpenItems] = useState({ apply: true });

	const toggleItem = (key) => {
		setOpenItems((prev) => ({
			...prev,
			[key]: !prev[key],
		}));
	};

	return (
		<>
			<style>
				<>
					{`
          .qna-animation {
            animation: slideDown 0.3s ease;
          }
          @keyframes slideDown {
            from {
              max-height: 0;
              opacity: 0;
            }
            to {
              max-height: 500px;
              opacity: 1;
            }
          }
         `}
				</>
			</style>
			<section className="flex flex-col gap-6 bg-[#F0EFF3] ">
				<h1 className="mt-8 text-center text-3xl font-bold text-[#ff3b8d] pb-5 pt-20">
					자주 묻는 질문
				</h1>

				<div className="flex flex-col gap-2 w-full max-w-[1200px] mx-auto px-[50px]">
					<div className="rounded-[12px] bg-white hover:bg-[#f9f9f9]">
						<div
							className="flex cursor-pointer items-center justify-between p-4 text-[#ff3b8d] font-bold"
							onClick={() => toggleItem("apply")}
						>
							<span>
								캠프{" "}
								<span className="pl-2 font-semibold text-black break-keep">
									참가 신청은 어떻게 하나요?
								</span>
							</span>
							<span
								className={`ml-4 text-[18px] text-[#ff3b8d] transition-transform duration-300 ${openItems.apply ? "rotate-0" : "rotate-180"}`}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.8"
									viewBox="0 0 24 24"
								>
									<path d="m5.8 15.05 6.2-6.1 6.2 6.1" />
								</svg>
							</span>
						</div>
						{openItems.apply && (
							<div className="px-4 pb-4 text-[#333] font-bold qna-animation break-keep">
								참가 신청은 9월 6일까지 웹사이트에서 할 수 있습니다.
							</div>
						)}
					</div>
				</div>

				<div className="flex flex-col gap-2 w-full max-w-[1200px] mx-auto px-[50px]">
					<div className="rounded-[12px] bg-white hover:bg-[#f9f9f9]">
						<div
							className="flex cursor-pointer items-center justify-between p-4 text-[#ff3b8d] font-bold"
							onClick={() => toggleItem("duplicateSupport")}
						>
							<span>
								캠프{" "}
								<span className="pl-2 font-semibold text-black break-keep">
									중복 지원이 가능한가요?
								</span>
							</span>
							<span
								className={`ml-4 text-[18px] text-[#ff3b8d] transition-transform duration-300 ${openItems.duplicateSupport ? "rotate-0" : "rotate-180"}`}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.8"
									viewBox="0 0 24 24"
								>
									<path d="m5.8 15.05 6.2-6.1 6.2 6.1" />
								</svg>
							</span>
						</div>
						{openItems.duplicateSupport && (
							<div className="px-4 pb-4 text-[#333] font-bold qna-animation break-keep">
								중복 신청은 불가능하며, 1지망부터 3지망까지 모두 서로 다른 캠프를
								선택하셔야 합니다.
							</div>
						)}
					</div>
				</div>

				<div className="flex flex-col gap-2 w-full max-w-[1200px] mx-auto px-[50px]">
					<div className="rounded-[12px] bg-white hover:bg-[#f9f9f9]">
						<div
							className="flex cursor-pointer items-center justify-between p-4 text-[#ff3b8d] font-bold"
							onClick={() => toggleItem("applyStatus")}
						>
							<span>
								캠프{" "}
								<span className="pl-2 font-semibold text-black break-keep">
									참가 신청이 제대로 되었는지 궁금해요!
								</span>
							</span>
							<span
								className={`ml-4 text-[18px] text-[#ff3b8d] transition-transform duration-300 ${openItems.applyStatus ? "rotate-0" : "rotate-180"}`}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.8"
									viewBox="0 0 24 24"
								>
									<path d="m5.8 15.05 6.2-6.1 6.2 6.1" />
								</svg>
							</span>
						</div>
						{openItems.applyStatus && (
							<div className="px-4 pb-4 text-[#333] font-bold qna-animation break-keep">
								신청이 완료되면 등록하신 이메일로 확인 메일이 발송됩니다.
							</div>
						)}
					</div>
				</div>

				<div className="flex flex-col gap-2 w-full max-w-[1200px] mx-auto px-[50px]">
					<div className="rounded-[12px] bg-white hover:bg-[#f9f9f9]">
						<div
							className="flex cursor-pointer items-center justify-between p-4 text-[#ff3b8d] font-bold"
							onClick={() => toggleItem("resultCheck")}
						>
							<span>
								캠프{" "}
								<span className="pl-2 font-semibold text-black break-keep">
									참가 신청 선정 결과는 어떻게 확인하나요?
								</span>
							</span>
							<span
								className={`ml-4 text-[18px] text-[#ff3b8d] transition-transform duration-300 ${openItems.resultCheck ? "rotate-0" : "rotate-180"}`}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.8"
									viewBox="0 0 24 24"
								>
									<path d="m5.8 15.05 6.2-6.1 6.2 6.1" />
								</svg>
							</span>
						</div>
						{openItems.resultCheck && (
							<div className="px-4 pb-4 text-[#333] font-bold qna-animation break-keep">
								선정 결과는 9월 9일 본교 홈페이지와 개인 메시지를 통해 안내드립니다.
							</div>
						)}
					</div>
				</div>

				<div className="flex flex-col gap-2 w-full max-w-[1200px] mx-auto px-[50px]">
					<div className="rounded-[12px] bg-white hover:bg-[#f9f9f9]">
						<div
							className="flex cursor-pointer items-center justify-between p-4 text-[#8E8F96] font-bold"
							onClick={() => toggleItem("lunch")}
						>
							<span>
								캠프{" "}
								<span className="pl-2 font-semibold text-black break-keep">
									캠프 날 점심이 제공 되나요?
								</span>
							</span>
							<span
								className={`ml-4 text-[18px] text-[#ff3b8d] transition-transform duration-300 ${openItems.lunch ? "rotate-0" : "rotate-180"}`}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.8"
									viewBox="0 0 24 24"
								>
									<path d="m5.8 15.05 6.2-6.1 6.2 6.1" />
								</svg>
							</span>
						</div>
						{openItems.lunch && (
							<div className="px-4 pb-4 text-[#333] font-bold qna-animation break-keep">
								캠프는 오후 1시부터 진행되므로 점심은 제공되지 않습니다.
							</div>
						)}
					</div>
				</div>

				<div className="flex flex-col gap-2 w-full max-w-[1200px] mx-auto px-[50px] pb-[150px]">
					<div className="rounded-[12px] bg-white hover:bg-[#f9f9f9]">
						<div
							className="flex cursor-pointer items-center justify-between p-4 text-[#8E8F96] font-bold"
							onClick={() => toggleItem("otherQuestion")}
						>
							<span>
								캠프{" "}
								<span className="pl-2 font-semibold text-black break-keep">
									다른 궁금한 점은 어떻게 질문하나요?
								</span>
							</span>
							<span
								className={`ml-4 text-[18px] text-[#ff3b8d] transition-transform duration-300 ${openItems.otherQuestion ? "rotate-0" : "rotate-180"}`}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.8"
									viewBox="0 0 24 24"
								>
									<path d="m5.8 15.05 6.2-6.1 6.2 6.1" />
								</svg>
							</span>
						</div>
						{openItems.otherQuestion && (
							<div className="px-4 pb-4 text-[#333] font-bold qna-animation break-keep">
								SSF 인스타그램(@sunrin_ssf) DM으로 문의 부탁드립니다.
							</div>
						)}
					</div>
				</div>
			</section>
		</>
	);
}
