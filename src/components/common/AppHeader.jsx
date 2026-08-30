import { useEffect, useState } from "react";
import { Link } from "react-router";
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

const applicationUrl = "https://luma.com/jnvzlvkc";
const applicationOpenAt = new Date("2026-08-31T00:00:00+09:00").getTime();

function getRemainingTime() {
	return Math.max(applicationOpenAt - Date.now(), 0);
}

function getCountdownParts(remainingTime) {
	const totalSeconds = Math.ceil(remainingTime / 1000);

	return [
		{ label: "일", value: Math.floor(totalSeconds / 86400) },
		{ label: "시간", value: Math.floor((totalSeconds % 86400) / 3600) },
		{ label: "분", value: Math.floor((totalSeconds % 3600) / 60) },
		{ label: "초", value: totalSeconds % 60 },
	];
}

export default function AppHeader() {
	const [remainingTime, setRemainingTime] = useState(getRemainingTime);
	const isApplicationOpen = remainingTime <= 0;
	const countdownParts = getCountdownParts(remainingTime);

	useEffect(() => {
		if (isApplicationOpen) return undefined;

		const timer = window.setInterval(() => {
			setRemainingTime(getRemainingTime());
		}, 1000);

		return () => window.clearInterval(timer);
	}, [isApplicationOpen]);

	return (
		<header className="sticky top-0 z-30 border-b border-white/8 bg-[#171b34]/92 backdrop-blur-md">
			<div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-4 md:px-10 md:py-5">
				<Link to="/" aria-label="SSF 홈으로 이동" className="inline-flex">
					<img src="/SSF2026.svg" alt="SSF 2026" className="h-7 w-auto md:h-9" />
				</Link>

				{isApplicationOpen ? (
					<a
						href={applicationUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex h-11 items-center justify-center rounded-full bg-[#ff3b8d] px-5 text-sm font-bold leading-none text-white transition-colors duration-200 hover:bg-[#ff4b95] cursor-pointer"
					>
						지원하기
					</a>
				) : (
					<AlertDialog>
						<AlertDialogTrigger asChild>
							<button
								type="button"
								className="inline-flex h-11 items-center justify-center rounded-full bg-[#ff3b8d] px-5 text-sm font-bold leading-none text-white transition-colors duration-200 hover:bg-[#ff4b95] cursor-pointer"
							>
								지원하기
							</button>
						</AlertDialogTrigger>

						<AlertDialogContent className="!max-w-[440px] !rounded-[28px] !border !border-slate-200 !bg-white !p-8 !shadow-[0_28px_100px_rgba(23,27,52,0.24)]">
							<AlertDialogHeader className="items-center text-center">
								<img
									src="/SSF2026.svg"
									alt="SSF 2026"
									className="mx-auto h-auto w-[92px]"
								/>
								<AlertDialogTitle className="text-2xl font-semibold tracking-tight text-[#171b34]">
									지원 오픈을 기다려주세요
								</AlertDialogTitle>
								<AlertDialogDescription className="text-base leading-7 text-slate-600">
									지원은 8월 31일 자정부터 가능합니다.
								</AlertDialogDescription>
							</AlertDialogHeader>

							<div
								role="timer"
								aria-label="지원 오픈까지 남은 시간"
								className="grid grid-cols-4 gap-2"
							>
								{countdownParts.map((part) => (
									<div
										key={part.label}
										className="flex min-w-0 flex-col items-center rounded-2xl bg-[#f6f4f8] px-2 py-4"
									>
										<span className="font-mono text-2xl font-bold tabular-nums text-[#171b34]">
											{String(part.value).padStart(2, "0")}
										</span>
										<span className="mt-1 text-xs font-semibold text-slate-500">
											{part.label}
										</span>
									</div>
								))}
							</div>

							<AlertDialogFooter className="!mt-2 !justify-center">
								<AlertDialogAction className="!inline-flex !h-12 !min-w-[112px] !items-center !justify-center !rounded-full !border-0 !bg-[#ff3b8d] !px-6 !text-sm !font-semibold !leading-none !text-white !shadow-none transition-colors duration-200 hover:!bg-[#ff4b95] cursor-pointer">
									확인
								</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>
				)}
			</div>
		</header>
	);
}
