import HomePageContent from "../components/home/HomePageContent";
import FestivalIntro from "../components/intro/FestivalIntro";
import CampPageContent from "../components/camp/CampPageContent";
import QnAPageContent from "../components/qna/QnAPageContent";
import Footer from "../components/Footer.jsx";
import CapmSchedule from "@/components/camp/CampSchedule";
export default function HomePage() {
	return (
		<>
			<HomePageContent />
			<FestivalIntro />
			<CampPageContent />
			<CapmSchedule />
			<QnAPageContent />
			<Footer />
		</>
	);
}
