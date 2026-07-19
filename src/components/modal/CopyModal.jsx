import React from "react";

const CopyModal = ({ isOpen, onClose }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center px-4">
			<div
				className="absolute inset-0 bg-black/20 transition-opacity"
				onClick={onClose}
			/>

			<div className="relative bg-white rounded-2xl shadow-xl px-8 py-6 flex flex-col items-center animate-bounce-short">
				<div className="w-12 h-12 bg-[#F7347E]/10 rounded-full flex items-center justify-center mb-3">
					<svg
						className="w-6 h-6 text-[#F7347E]"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="3"
							d="M5 13l4 4L19 7"
						/>
					</svg>
				</div>
				<p className="text-[#333] font-bold text-lg">링크가 복사되었습니다!</p>
				<p className="text-gray-500 text-sm">원하는 곳에 붙여넣기 해주세요.</p>
				<div
					className="w-full bg-[#F7347E] text-center rounded-lg py-1 mt-2	hover:cursor-pointer"
					onClick={onClose}
				>
					확인
				</div>
			</div>
		</div>
	);
};

export default CopyModal;
