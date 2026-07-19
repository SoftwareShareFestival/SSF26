import { Outlet } from "react-router";
import AppHeader from "../components/common/AppHeader";
import Footer from "@/components/Footer";

export default function RootLayout() {
	return (
		<div className="min-h-screen bg-[#f0eff3] text-white">
			<AppHeader />
			<main className="flex flex-col [--content-max:1240px] [--content-pad:1.5rem] md:[--content-pad:3rem]">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
