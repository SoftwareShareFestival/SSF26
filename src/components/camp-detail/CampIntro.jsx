import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useNavigate } from "react-router";
import CopyModal from "../modal/CopyModal";
import { useState } from "react";
import NotAvailable from "../modal/NotAvailable";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/animate-ui/components/radix/alert-dialog";

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
				alert("공유가 취소되었거나 실패했습니다.");
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
			{/* <CopyModal isOpen={showCopyModal} onClose={() => setShowCopyModal(false)} />
			<NotAvailable
				isOpen={showLinkModal}
				onClose={() => setShowLinkModal(false)}
			/> */}
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
									<AlertDialog>
										<AlertDialogTrigger aschild>
											<div
												className="w-[47px] h-[47px] bg-[#F7347E] rounded-full flex justify-center items-center cursor-pointer"
												// to="https://www.youtube.com/watch?v=RGVKqYgGlMM"
												target="_blank"
												rel="noopener noreferrer"
												// onClick={() => setShowLinkModal(true)}
											>
												<img className="w-[27px] h-[27px]" src="/svg/instagram.svg" />
											</div>
										</AlertDialogTrigger>
										<AlertDialogContent className="!max-w-[440px] !rounded-[28px] !border !border-slate-200 !bg-white !p-8 !shadow-[0_28px_100px_rgba(23,27,52,0.24)]">
											<AlertDialogHeader className="items-center text-center">
												<img
													src="/SSF2026.svg"
													alt="SSF 2026"
													className="mx-auto h-auto w-[92px]"
												/>
												<AlertDialogTitle className="text-2xl font-semibold tracking-tight text-[#171b34]">
													홍보 게시글 안내
												</AlertDialogTitle>
												<AlertDialogDescription className="text-base leading-7 text-slate-600">
													아직 홍보 게시글이 게시되지 않았습니다.
												</AlertDialogDescription>
											</AlertDialogHeader>

											<AlertDialogFooter className="!mt-8 !justify-center">
												<AlertDialogAction className="!inline-flex !h-12 !min-w-[112px] !items-center !justify-center !rounded-full !border-0 !bg-[#ff3b8d] !px-6 !text-sm !font-semibold !leading-none !text-white !shadow-none transition-colors duration-200 hover:!bg-[#ff4b95]">
													확인
												</AlertDialogAction>
											</AlertDialogFooter>
										</AlertDialogContent>
									</AlertDialog>
									<AlertDialog>
										<AlertDialogTrigger aschild>
											<div
												className="w-[47px] h-[47px] bg-[#F7347E] rounded-full flex justify-center items-center cursor-pointer"
												// to="https://www.youtube.com/watch?v=RGVKqYgGlMM"
												target="_blank"
												rel="noopener noreferrer"
												onClick={() => setShowLinkModal(true)}
											>
												<img className="w-[27px] h-[27px]" src="/svg/video.svg" />
											</div>
										</AlertDialogTrigger>
										<AlertDialogContent className="!max-w-[440px] !rounded-[28px] !border !border-slate-200 !bg-white !p-8 !shadow-[0_28px_100px_rgba(23,27,52,0.24)]">
											<AlertDialogHeader className="items-center text-center">
												<img
													src="/SSF2026.svg"
													alt="SSF 2026"
													className="mx-auto h-auto w-[92px]"
												/>
												<AlertDialogTitle className="text-2xl font-semibold tracking-tight text-[#171b34]">
													홍보 릴스 안내
												</AlertDialogTitle>
												<AlertDialogDescription className="text-base leading-7 text-slate-600">
													아직 홍보 릴스가 게시되지 않았습니다.
												</AlertDialogDescription>
											</AlertDialogHeader>

											<AlertDialogFooter className="!mt-8 !justify-center">
												<AlertDialogAction className="!inline-flex !h-12 !min-w-[112px] !items-center !justify-center !rounded-full !border-0 !bg-[#ff3b8d] !px-6 !text-sm !font-semibold !leading-none !text-white !shadow-none transition-colors duration-200 hover:!bg-[#ff4b95]">
													확인
												</AlertDialogAction>
											</AlertDialogFooter>
										</AlertDialogContent>
									</AlertDialog>
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
							<AlertDialog>
								<AlertDialogTrigger aschild>
									<div
										className="w-[47px] h-[47px] bg-[#F7347E] rounded-full flex justify-center items-center cursor-pointer"
										// to="https://www.youtube.com/watch?v=RGVKqYgGlMM"
										target="_blank"
										rel="noopener noreferrer"
										// onClick={() => setShowLinkModal(true)}
									>
										<img className="w-[27px] h-[27px]" src="/svg/instagram.svg" />
									</div>
								</AlertDialogTrigger>
								<AlertDialogContent className="!max-w-[440px] !rounded-[28px] !border !border-slate-200 !bg-white !p-8 !shadow-[0_28px_100px_rgba(23,27,52,0.24)]">
									<AlertDialogHeader className="items-center text-center">
										<img
											src="/SSF2026.svg"
											alt="SSF 2026"
											className="mx-auto h-auto w-[92px]"
										/>
										<AlertDialogTitle className="text-2xl font-semibold tracking-tight text-[#171b34]">
											홍보 게시글 안내
										</AlertDialogTitle>
										<AlertDialogDescription className="text-base leading-7 text-slate-600">
											아직 홍보 게시글이 게시되지 않았습니다.
										</AlertDialogDescription>
									</AlertDialogHeader>

									<AlertDialogFooter className="!mt-8 !justify-center">
										<AlertDialogAction className="!inline-flex !h-12 !min-w-[112px] !items-center !justify-center !rounded-full !border-0 !bg-[#ff3b8d] !px-6 !text-sm !font-semibold !leading-none !text-white !shadow-none transition-colors duration-200 hover:!bg-[#ff4b95]">
											확인
										</AlertDialogAction>
									</AlertDialogFooter>
								</AlertDialogContent>
							</AlertDialog>
							<AlertDialog>
								<AlertDialogTrigger aschild>
									<div
										className="w-[47px] h-[47px] bg-[#F7347E] rounded-full flex justify-center items-center cursor-pointer"
										// to="https://www.youtube.com/watch?v=RGVKqYgGlMM"
										target="_blank"
										rel="noopener noreferrer"
										onClick={() => setShowLinkModal(true)}
									>
										<img className="w-[27px] h-[27px]" src="/svg/video.svg" />
									</div>
								</AlertDialogTrigger>
								<AlertDialogContent className="!max-w-[440px] !rounded-[28px] !border !border-slate-200 !bg-white !p-8 !shadow-[0_28px_100px_rgba(23,27,52,0.24)]">
									<AlertDialogHeader className="items-center text-center">
										<img
											src="/SSF2026.svg"
											alt="SSF 2026"
											className="mx-auto h-auto w-[92px]"
										/>
										<AlertDialogTitle className="text-2xl font-semibold tracking-tight text-[#171b34]">
											홍보 릴스 안내
										</AlertDialogTitle>
										<AlertDialogDescription className="text-base leading-7 text-slate-600">
											아직 홍보 릴스가 게시되지 않았습니다.
										</AlertDialogDescription>
									</AlertDialogHeader>

									<AlertDialogFooter className="!mt-8 !justify-center">
										<AlertDialogAction className="!inline-flex !h-12 !min-w-[112px] !items-center !justify-center !rounded-full !border-0 !bg-[#ff3b8d] !px-6 !text-sm !font-semibold !leading-none !text-white !shadow-none transition-colors duration-200 hover:!bg-[#ff4b95]">
											확인
										</AlertDialogAction>
									</AlertDialogFooter>
								</AlertDialogContent>
							</AlertDialog>
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
