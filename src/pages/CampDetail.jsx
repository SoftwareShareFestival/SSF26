import CampIntro from "@/components/camp-detail/CampIntro";
import ClubIntro from "@/components/camp-detail/ClubIntro";
import OtherCamps from "@/components/camp-detail/OtherCamps";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";

function CampDetail() {
	const navigate = useNavigate();
	const { club } = useParams();
	const details = {
		layer7: {
			id: 1,
			name: "Layer7",
			link: "layer7",
			category: "security",
			title: "게임을 분석하고 직접 핵 프로그램 만들기",
			logo: "/logo/Layer7.png",
			image: "/poster/layer7.png",
			textColor: "#000000",
			campIntro:
				"CheatEngine으로 게임 메모리를 들여다보고, 오픈소스 게임 AssaultCube에서 직접 핵을 제작하며 공격자의 시선으로 게임과 보안을 이해합니다.",
			clubIntro:
				"Layer7은 정보보호 분야에 대한 관심과 열정을 가진 학생들이 모여 시스템 해킹, 웹 해킹, 리버싱 등 다양한 분야에서 활동하고 있습니다. 2001년 설립된 Layer7은 선린인터넷고등학교 정보보호과 동아리 중에서 가장 긴 역사를 지니며, 수많은 수상 실적들과 활동으로 정보보호과를 대표하는 동아리 중 하나입니다. 정보보호에 대한 전문적인 지식과 기술을 배우고, 이를 실제로 활용해 보며 끊임없이 발전하는 동아리로, 정보보호 분야에 관심이 있는 학생들에게 매우 유용한 동아리입니다.",
			cover: "/cover/layer7.png",
			sns: "https://www.instagram.com/sunrin_layer7",
			web: "https://layer7.kr/",
		},
		iris: {
			id: 2,
			name: "IRIS",
			link: "iris",
			category: "security",
			title: "저예산 존윅 체험 : 직접 만드는 사격 게임",
			logo: "/logo/IRIS.png",
			image: "/poster/iris.png",
			textColor: "#5B80D7",
			campIntro:
				"아두이노로 직접 사격게임을 만들며 IoT 기술의 원리를 체험해보세요. 센서와 제어 기술을 활용해 게임을 제작하고, 실생활에도 적용할 수 있는 IoT의 기초를 쉽고 재미있게 익힙니다.",
			clubIntro:
				"IRIS 동아리는 인공지능 개발과 사물인터넷(IoT)에 관심 있는 학생들이 모여 활동하는 동아리입니다. 선린인터넷고등학교에서 활동하며, 파이썬 프로그래밍 언어를 배우며 데이터 분석และ 인공지능 개발의 기본 개념을 익히고, 이를 토대로 실제 인공지능 모델을 개발합니다. 또한, 아두이노를 활용한 체계적인 IoT 교육을 통해 교내에서 유일하게 IoT 분야의 심도 있는 학습 기회를 제공하며, AI와 IoT의 융합을 통해 다양한 프로젝트를 진행하고 있습니다. IRIS는 학생들에게 최신 기술과 지식을 전달하고 창의적 활동을 지원함으로써, 학생들의 성장과 발전을 도모하는 것을 목표로 합니다.",
			cover: "/cover/iris.png",
			sns: "https://www.instagram.com/sunrin_iris/",
			web: "https://sunrin-iris.kr/",
		},
		teamlog: {
			id: 3,
			name: "TeamLog",
			link: "teamlog",
			category: "security",
			title: "님아 그 선을 넘지 마오 : 웹으로 만드는 타워디펜스 게임",
			logo: "/logo/TeamLog.png",
			image: "/poster/teamlog.png",
			textColor: "#EA3E45",
			campIntro:
				'HTML, CSS, JavaScript를 사용하여 프론트엔드에서 작동하는 "레써판다 대 담비" 게임을 만들고 직접 플레이 해보며 웹 개발을 경험해 볼 수 있습니다. 이를 통해, 웹 구조와 동작 원리에 대해서 배울 수 있습니다.',
			clubIntro:
				"TeamLog는 서버 프로그래밍, 네트워크, 그리고 웹 개발에 관심 있는 학생들이 모여 함께 동아리 활동을 합니다. 이 동아리에서는 HTML, CSS, JavaScript, Node.js와 같은 프론트엔드와 백엔드 기술을 배울 수 있습니다. 또한, TCP/IP, HTTP, Socket 등의 네트워크 분야와 서버 프로그래밍 분야에도 중점을 두어 이론을 배우고, 실제 서버를 구축해보며 이를 적용하는 방법을 익힐 수 있습니다. TeamLog에서는 학생들이 현대적인 IT 기술을 습득하고, 다양한 분야의 지식을 습득할 수 있는 기회를 제공합니다.",
			cover: "/cover/teamlog.png",
			sns: "https://www.instagram.com/sunrin_teamlog/",
			web: "https://teamlog.kr/",
		},
		unifox: {
			id: 4,
			name: "Unifox",
			link: "unifox",
			category: "security",
			title: "느리면 전치 3주! : 길건너 친구들",
			logo: "/logo/Unifox.png",
			image: "/poster/unifox.png",
			textColor: "#FF6D03",
			campIntro:
				"Python으로 만드는 길 건너 친구들 게임! 본 캠프에선 꾸준히 사랑받는 프로그래밍 언어인 Python과 게임 개발 라이브러리인 Pygame을 통해 길 건너 친구들을 직접 구현하는 활동을 합니다! 평소 게임 개발에 관심이 있으셨던 분들이나, 게임을 좋아하시는 분들이 신청하시면 좋은 기회가 될 것 같습니다. 언젠가 한 번쯤은 들어봤던 길 건너 친구들 게임, 이번 기회에 한 번 직접 구현해 보는 건 어떠신가요?",
			clubIntro:
				"우리는 2008년 정보보호과 선린인터넷고등학교 전공동아리로서 설립되어 개발과 보안프로그래밍 분야에서 활동하고 있습니다. 보안에 최적화된 개발 역량을 기르는 것을 목표로 다양한 분야를 탐구하며 지속적으로 성장하고 있습니다. 알고리즘부터 개발, 웹해킹까지 깊이 있게 탐구하며, 지식의 공유를 통해 함께 성장하는 우리를 만들어갑니다. Unifox는 꿈을 향한 확신을 공유하는 동아리입니다.",
			cover: "/cover/unifox.png",
			sns: "https://www.instagram.com/sunrin_unifox/",
			web: "https://unifox.kr/",
		},
		ana: {
			id: 5,
			name: "AnA",
			link: "ana",
			category: "software",
			title: "나만의 랜덤 채팅 만들기",
			logo: "/logo/AnA.png",
			image: "/poster/ana.png",
			textColor: "#334882",
			campIntro:
				"매일 쓰는 채팅 앱, 직접 만들 수 있다면 어떨까요? AnA 캠프에서는 웹 백엔드 기초부터 실시간 대화가 가능한 서버 통신까지 한 번에 배웁니다. 복잡한 이론 대신 흥미진진한 실습을 통해 나만의 랜덤 채팅 서비스를 완성해 보세요. 코딩 초보자도 나만의 소통 공간을 직접 만들어보는 즐거움을 느낄 수 있습니다!",
			clubIntro:
				"AnA는 선린인터넷고등학교 소프트웨어과 서버 개발 동아리입니다. ‘어두운 곳에서 세상을 밝게 만들어 나가는 동아리’ 라는 슬로건 아래, 눈에 보이지 않는 곳에서 세상을 움직이는 기술을 개발하고 공부합니다. 백엔드 개발, 서버 구축 및 운영, 네트워킹, CI/CD 등의 다양한 서버 기술을 배우며, 부원들의 실력에 맞는 학습을 위해 기초반과 심화반 시스템을 운영하고 있습니다.",
			cover: "/cover/ana.png",
			sns: "https://www.instagram.com/sunrin_ana/",
			web: "https://ana.st/",
		},
		creal: {
			id: 6,
			name: "C,real",
			link: "creal",
			category: "software",
			title: "Unity로 만드는 농장 타이쿤 게임",
			logo: "/logo/C,real.png",
			image: "/poster/creal.png",
			textColor: "#1DD8D6",
			campIntro:
				"저희 동아리에서 만드는 게임은 미지의 행성을 탐험하며 새로운 식물을 발견하고, 키우는 타이쿤 게임입니다. 범상치 않은 행성에서 지구에는 존재하지 않는 식물을 기르는 재미를 유니티라는 도구를 사용해 여러분의 손으로 직접 제작해볼 수 있습니다.",
			clubIntro:
				"C,REAL은 선린인터넷고등학교 유일의 게임 개발 동아리입니다. 상상을 게임을 통해 현실로 만들어내는 것—그것이 우리의 목표입니다. Unity 엔진 기반 게임 개발과 게임 디자인을 배우며, 개발자와 디자이너가 함께하는 체계적인 커리큘럼으로 모든 부원에게 공평한 기회를 제공합니다. 다양한 프로젝트와 협업을 통해 개인의 능력과 팀워크를 기르고, 부원들이 제작한 게임 작품을 만들어가고 있습니다. 여러 행사를 부원들과 함께하며 서로의 친목을 다지고 협업을 하면서 행복하고 화목한 C,REAL만의 분위기를 만들어 나갑니다.",
			cover: "/cover/creal.png",
			sns: "https://www.instagram.com/c.real._/",
			web: "https://www.sunrint-creal.com/",
		},
		tapie: {
			id: 7,
			name: "TAPIE",
			link: "tapie",
			category: "software",
			title: "웹으로 슈의 라면가게 제작하기",
			logo: "/logo/TAPIE.png",
			image: "/poster/tapie.png",
			textColor: "#000000",
			campIntro:
				"모두의 추억이 담긴 플래시 게임 '슈의 라면가게'를 웹 프론트엔드 기술을 활용해 직접 만들어보려 합니다. HTML, CSS, 자바스크립트로 당시의 재미와 감성을 살리면서, 지금의 웹 환경에 맞게 새롭게 구현해보는 과정을 하나씩 담아봅시다.",
			clubIntro:
				"웹과 앱을 개발하는 전공동아리입니다. 최신 웹, 앱 기술인 React와 React Native를 다루고, 다양한 활동과 프로젝트를 진행하며 협업 능력을 키우는 것을 중심으로 합니다.",
			cover: "/cover/tapie.png",
			sns: "https://www.instagram.com/sunrin_tapie/",
			web: "https://tapie.kr/",
		},
		para: {
			id: 8,
			name: "PARA",
			link: "para",
			category: "software",
			title: "자기 얼굴과 비슷한 캐릭터 찾아주는 AI",
			logo: "/logo/Para.png",
			image: "/poster/para.png",
			textColor: "#9966FF",
			campIntro:
				"자신의 얼굴과 닮은 캐릭터를 AI가 분석하여 찾아주는 서비스를 직접 만들어보고 체험해보는 활동입니다. 얼굴의 특징을 AI가 분석한 뒤 다양한 애니메이션, 게임, 영화 속 캐릭터와 비교하여 가장 닮은 캐릭터를 추천해 줍니다. AI의 이미지 분석 원리를 쉽고 재미있게 이해할 수 있으며, 직접 서비스를 체험하면서 인공지능 기술이 실생활에서 어떻게 활용되는지 경험해 볼 수 있습니다.",
			clubIntro:
				"선린인터넷고등학교 소프트웨어과 인공지능 연구/개발 동아리 PARA입니다. PARA (Project Achievement and Research AI)는 인공지능에 대해 연구하고, 개발하고, 성취하는 것을 목표로 하는 동아리입니다.",
			cover: "/cover/para.png",
			sns: "https://www.instagram.com/sunrin.para",
			web: "https://sunrin-para.dev/",
		},
	};

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, [club]);
	const userAgent = typeof navigator !== "undefined" ? navigator.userAgent : "";
	const isMobile =
		/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
			userAgent,
		);
	return (
		<div className="max-w-[var(--content-max)] mx-auto flex flex-col justify-center ">
			{!isMobile && (
				<div
					className="ml-7.5 w-fit flex justify-start text-[#1C1B1F] text-4xl font-semibold pt-10 hover:underline underline-offset-4 decoration-black transition-all cursor-pointer"
					onClick={() => navigate(-1)}
				>{`<`}</div>
			)}

			<div className="flex flex-col px-7.5">
				<CampIntro detail={details[club]} id="camp-intro" />
				<ClubIntro detail={details[club]} />
				<OtherCamps detail={details[club]} details={details} />
			</div>
		</div>
	);
}

export default CampDetail;
