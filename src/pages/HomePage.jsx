import HomePageContent from "../components/home/HomePageContent";
import FestivalIntro from "../components/intro/FestivalIntro";
import CampPageContent from "../components/camp/CampPageContent";
import QnAPageContent from "../components/qna/QnAPageContent";
import Footer from "../components/Footer.jsx";
export default function HomePage() {
	return (
		<>
			<HomePageContent />
			<FestivalIntro />
			<CampPageContent />
			<QnAPageContent />
			<Footer />
		</>
	);
}
