import HomePageContent from "../components/home/HomePageContent";
import FestivalIntro from "../components/intro/FestivalIntro";
import CampPageContent from "../components/camp/CampPageContent";
import QnAPageContent from "../components/qna/QnAPageContent";
import Footer from "../components/Footer.jsx";
import CapmSchedule from "@/components/camp/CampSchedule";
import { useEffect } from "react";
import { useLocation } from "react-router";
export default function HomePage() {
	const { hash } = useLocation();
	useEffect(() => {
		if (hash) {
			const element = document.getElementById(hash.replace("#", ""));
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, [hash]);
	return (
		<>
			<HomePageContent />
			<FestivalIntro />
			<CampPageContent id={"camps"} />
			<CapmSchedule />
			<QnAPageContent />
			<Footer />
		</>
	);
}
