import { Link } from "react-router";

export default function AppHeader() {
	return (
		<header className="sticky top-0 z-30 border-b border-white/8 bg-[#171b34]/92 backdrop-blur-md">
			<div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-4 md:px-10 md:py-5">
				<Link to="/" aria-label="SSF 홈으로 이동" className="inline-flex">
					<img src="/SSF2026.svg" alt="SSF 2026" className="h-7 w-auto md:h-9" />
				</Link>

				<a
					href="https://luma.com/jnvzlvkc"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex h-11 items-center justify-center rounded-full bg-[#ff3b8d] px-5 text-sm font-bold leading-none text-white transition-colors duration-200 hover:bg-[#ff4b95] cursor-pointer"
				>
					지원하기
				</a>
			</div>
		</header>
	);
}
