import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const qnaItems = [
	{
		key: "apply",
		question: "참가 신청은 어떻게 하나요?",
		answer: "참가 신청은 9월 6일까지 웹사이트에서 할 수 있습니다.",
		categoryColor: "text-[#ff3b8d]",
	},
	{
		key: "duplicateSupport",
		question: "중복 지원이 가능한가요?",
		answer:
			"중복 신청은 불가능하며, 1지망부터 3지망까지 모두 서로 다른 캠프를 선택하셔야 합니다.",
		categoryColor: "text-[#ff3b8d]",
	},
	{
		key: "applyStatus",
		question: "참가 신청이 제대로 되었는지 궁금해요!",
		answer: "신청이 완료되면 등록하신 이메일로 확인 메일이 발송됩니다.",
		categoryColor: "text-[#ff3b8d]",
	},
	{
		key: "resultCheck",
		question: "참가 신청 선정 결과는 어떻게 확인하나요?",
		answer: "선정 결과는 9월 9일 본교 홈페이지와 개인 메시지를 통해 안내드립니다.",
		categoryColor: "text-[#ff3b8d]",
	},
	{
		key: "lunch",
		question: "캠프 날 점심이 제공되나요?",
		answer: "점심은 제공되지 않으므로 드시고 오시기 바랍니다.",
		categoryColor: "text-[#8E8F96]",
	},
	{
		key: "otherQuestion",
		question: "다른 궁금한 점은 어떻게 질문하나요?",
		answer: "SSF 인스타그램(@sunrin_ssf) DM으로 문의 부탁드립니다.",
		categoryColor: "text-[#8E8F96]",
	},
];

const accordionEase = [0.22, 1, 0.36, 1];

export default function QnAPageContent() {
	const [openItems, setOpenItems] = useState({ apply: true });
	const shouldReduceMotion = useReducedMotion();

	const toggleItem = (key) => {
		setOpenItems((prev) => ({
			...prev,
			[key]: !prev[key],
		}));
	};

	return (
		<section className="flex flex-col gap-6 bg-[#F0EFF3]">
			<h1 className="mt-8 text-center text-3xl font-bold text-[#ff3b8d] pb-5 pt-20">
				자주 묻는 질문
			</h1>

			{qnaItems.map((item, index) => {
				const isOpen = Boolean(openItems[item.key]);
				const answerId = `qna-answer-${item.key}`;

				return (
					<div
						key={item.key}
						className={`flex flex-col gap-2 w-full max-w-[1200px] mx-auto px-[50px] ${index === qnaItems.length - 1 ? "pb-[150px]" : ""}`}
					>
						<div className="overflow-hidden rounded-[12px] bg-white transition-colors duration-300 hover:bg-[#f9f9f9]">
							<button
								type="button"
								className={`flex w-full cursor-pointer items-center justify-between p-4 text-left font-bold ${item.categoryColor}`}
								onClick={() => toggleItem(item.key)}
								aria-expanded={isOpen}
								aria-controls={answerId}
							>
								<span>
									캠프{" "}
									<span className="pl-2 font-semibold text-black break-keep">
										{item.question}
									</span>
								</span>
								<motion.span
									className="ml-4 shrink-0 text-[18px] text-[#ff3b8d]"
									animate={{ rotate: isOpen ? 0 : 180 }}
									transition={{
										duration: shouldReduceMotion ? 0 : 0.35,
										ease: accordionEase,
									}}
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
										aria-hidden="true"
									>
										<path d="m5.8 15.05 6.2-6.1 6.2 6.1" />
									</svg>
								</motion.span>
							</button>

							<AnimatePresence initial={false}>
								{isOpen && (
									<motion.div
										id={answerId}
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{
											height: {
												duration: shouldReduceMotion ? 0 : 0.4,
												ease: accordionEase,
											},
											opacity: {
												duration: shouldReduceMotion ? 0 : 0.25,
												ease: "easeOut",
											},
										}}
										className="overflow-hidden"
									>
										<div className="px-4 pb-4 text-[#333] font-bold break-keep">
											{item.answer}
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</div>
				);
			})}
		</section>
	);
}
