import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useNavigate } from "react-router";
import CopyModal from "../modal/CopyModal";
import { useState } from "react";
import NotAvailable from "../modal/NotAvailable";

function CampIntro({ detail }) {
	const navigate = useNavigate();
	const [showCopyModal, setShowCopyModal] = useState(false);
	const [showLinkModal, setShowLinkModal] = useState(false);
	const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : "";
	const isMobile =
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			userAgent,
		);
	const handleShare = async () => {
		const shareData = {
			title: "캠프 소개",
			text: "소프트웨어과 정보보호과가 준비한 동아리 캠프를 확인해보세요!",
			url: window.location.href,
		};

		if (isMobile && navigator.share) {
			try {
				await navigator.share(shareData);
			} catch (error) {
				console.log("공유가 취소되었거나 실패했습니다.", error);
			}
		} else {
			try {
				await navigator.clipboard.writeText(shareData.url);
				setShowCopyModal(true);
			} catch (error) {
				console.error("클립보드 복사 실패:", error);
				alert("링크 복사에 실패했습니다");
			}
		}
	};

	return (
		<div className="mt-10 lg:mb-30 mb-15">
			<CopyModal isOpen={showCopyModal} onClose={() => setShowCopyModal(false)} />
			<NotAvailable
				isOpen={showLinkModal}
				onClose={() => setShowLinkModal(false)}
			/>
			<div className="flex flex-col gap-[30px]">
				<div className="max-w-[var(--content-max)] flex lg:flex-row flex-col w-full lg:gap-10 gap-[25px]">
					<img
						className="lg:w-63 w-44 rounded-md border border-[#D9D9D9]"
						src={detail.cover}
					/>
					<div className="flex flex-col justify-end gap-4">
						<div className="flex justify-between items-center">
							<div className="w-4/5 lg:text-4xl md:text-3xl text-xl font-bold text-[#202330] break-keep text-balance">
								{detail.title}
							</div>
							{!isMobile && (
								<div className="flex gap-4">
									<div
										className="w-[47px] h-[47px] bg-[#F7347E] rounded-full flex justify-center items-center cursor-pointer"
										// to="https://www.youtube.com/watch?v=RGVKqYgGlMM"
										target="_blank"
										rel="noopener noreferrer"
										onClick={() => setShowLinkModal(true)}
									>
										<img className="w-[27px] h-[27px]" src="/svg/instagram.svg" />
									</div>
									<div
										className="w-[47px] h-[47px] bg-[#F7347E] rounded-full flex justify-center items-center cursor-pointer"
										// to="https://www.youtube.com/watch?v=RGVKqYgGlMM"
										target="_blank"
										rel="noopener noreferrer"
										onClick={() => setShowLinkModal(true)}
									>
										<img className="w-[27px] h-[27px]" src="/svg/video.svg" />
									</div>
								</div>
							)}
						</div>
						<div className="lg:text-xl md:text-base text-xs text-[#606061] break-keep font-medium">
							{detail.campIntro}
						</div>
					</div>
				</div>
				<div className="flex lg:justify-end justify-between">
					{isMobile && (
						<div className="flex gap-4">
							<div
								className="lg:w-[47px] lg:h-[47px] w-10 h-10 bg-[#F7347E] rounded-full flex justify-center items-center cursor-pointer"
								// to="https://www.youtube.com/watch?v=RGVKqYgGlMM"
								target="_blank"
								rel="noopener noreferrer"
								onClick={() => setShowLinkModal(true)}
							>
								<img
									className="lg:w-[27px] lg:h-[27px] w-5 h-5"
									src="/svg/instagram.svg"
								/>
							</div>
							<div
								className="lg:w-[47px] lg:h-[47px] w-10 h-10 bg-[#F7347E] rounded-full flex justify-center items-center cursor-pointer"
								// to="https://www.youtube.com/watch?v=RGVKqYgGlMM"
								target="_blank"
								rel="noopener noreferrer"
								onClick={() => setShowLinkModal(true)}
							>
								<img className="lg:w-[27px] lg:h-[27px] w-5 h-5" src="/svg/video.svg" />
							</div>
						</div>
					)}
					<div
						onClick={handleShare}
						className="cursor-pointer lg:w-[240px] lg:h-[64px] w-[138px] h-10 box-border bg-[#F7347E] px-[20px] py-[10px] rounded-4xl flex gap-[10px] flex items-center justify-center"
					>
						<img
							src="/svg/share.svg"
							className="lg:w-[25px] lg:h-[25px] w-[17px] h-[17px]"
						/>
						<div className="font-bold lg:text-2xl text-xs">캠프 공유하기</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default CampIntro;
