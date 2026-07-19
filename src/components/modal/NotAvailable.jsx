import React from "react";

const NotAvailable = ({ isOpen, onClose }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center px-4">
			<div
				className="absolute inset-0 bg-black/20 transition-opacity"
				onClick={onClose}
			/>

			<div className="relative bg-white rounded-2xl shadow-xl px-8 py-6 flex flex-col items-center animate-bounce-short">
				<div className="w-12 h-12 flex items-center justify-center mb-3">
					<img src="/SSF2026.svg" />
				</div>
				<p className="text-[#333] font-bold text-lg">아직 지원하지 않습니다</p>
				<p className="text-gray-500 text-sm">조금만 기다려주세요</p>
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

export default NotAvailable;
