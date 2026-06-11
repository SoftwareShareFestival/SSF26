import { useEffect, useState } from 'react';

export default function CampPageContent() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : '';
    const mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    setIsMobileDevice(mobile);
  }, []);

  const campData = [
    // 정보보호과 (Layer7, IRIS, TeamLog, Unifox)
    { id: 1, name: 'Layer7', category: 'security', title: '게임을 분석하고 직접 핵 프로그램 만들기',logo: './logo/Layer7.png', image: './poster/layer7.png', textColor: '#000000' },
    { id: 2, name: 'IRIS', category: 'security', title: '저예산 존윅 체험 : 직접 만드는 사격 게임',logo: './logo/IRIS.png', image: './poster/iris.png', textColor: '#5B80D7' },
    { id: 3, name: 'TeamLog', category: 'security', title: '님아 그 선을 넘지 마오',logo: './logo/TeamLog.png', image: './poster/teamlog.png', textColor: '#EA3E45' },
    { id: 4, name: 'Unifox', category: 'security', title: '느리면 전치 3주! : 길건너 친구들',logo: './logo/Unifox.png', image: './poster/unifox.png', textColor: '#FF6D03' },
    // 소프트웨어과 (AnA, C,real, TAPIE, PARA)
    { id: 5, name: 'AnA', category: 'software', title: '나만의 랜덤 채팅 만들기',logo: './logo/AnA.png', image: './poster/ana.png', textColor: '#334882' },
    { id: 6, name: 'C,real', category: 'software', title: 'Unity로 만드는 농장 타이쿤 게임',logo: './logo/C,real.png', image: './poster/creal.png', textColor: '#1DD8D6' },
    { id: 7, name: 'TAPIE', category: 'software', title: '웹으로 슈의 라면가게 제작하기',logo: './logo/TAPIE.png', image: './poster/tapie.png', textColor: '#000000' },
    { id: 8, name: 'PARA', category: 'software', title: '자기 얼굴과 비슷한 캐릭터 찾아주는 AI',logo: './logo/Para.png', image: './poster/para.png', textColor: '#9966FF' },
  ];

  const filteredCamps = selectedCategory === 'all' 
    ? campData 
    : campData.filter(camp => camp.category === selectedCategory);

  const getCategoryBadge = (category) => {
    if (category === 'security') {
      return { bg: '#f0e8ff', text: '#8b7cc7', label: '정보보호' };
    }
    return { bg: '#e8f3ff', text: '#5b8dc7', label: '소프트웨어' };
  };

  return (
    <>
    <style>
      {`
        .qna-animation {
          animation: slideDown 0.3s ease;
        }
        @keyframes slideDown {
          from {
            max-height: 0;
            opacity: 0;
          }
          to {
            max-height: 500px;
            opacity: 1;
          }
        }
        .camp-scrollbar {
          overflow-x: auto;
          -ms-overflow-style: none;
        }
      `}
    </style>
    <section className="flex flex-col gap-4 bg-[#F0EFF3]">
      <h1 className="mt-8 text-center text-2xl md:text-3xl font-bold text-[#ff3b8d] pt-20">
        캠프 소개
      </h1>
      <p className="text-center text-[#333] font-bold text-base md:text-lg max-w-[800px] pb-4 mx-auto px-4">
        소프트웨어과 정보보호과가 준비한 동아리 캠프를 소개합니다!
      </p>

      <div className="w-full max-w-[980px] mx-auto px-[50px] mb-8">
        <div className="flex justify-center gap-3 mb-6 flex-nowrap">
          <button 
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base font-semibold whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#ff3b8d] text-white'
                : 'border border-[#E6E6EA] text-[#333] font-medium'
            }`}
          >
            전체
          </button>
          <button 
            onClick={() => setSelectedCategory('security')}
            className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base font-semibold whitespace-nowrap transition-all ${
              selectedCategory === 'security'
                ? 'bg-[#ff3b8d] text-white'
                : 'border border-[#E6E6EA] text-[#333] font-medium'
            }`}
          >
            정보보호과
          </button>
          <button 
            onClick={() => setSelectedCategory('software')}
            className={`px-3 py-1 md:px-4 md:py-2 rounded-full text-sm md:text-base font-semibold whitespace-nowrap transition-all ${
              selectedCategory === 'software'
                ? 'bg-[#ff3b8d] text-white'
                : 'border border-[#E6E6EA] text-[#333] font-medium'
            }`}
          >
            소프트웨어과
          </button>
        </div>

        <div className={isMobileDevice ? 'camp-scrollbar flex gap-6 pb-2 px-2' : 'grid grid-cols-4 gap-6  max-w-[980px]'}>
          {filteredCamps.map((camp) => {
            return (
              <div key={camp.id} className={isMobileDevice ? 'flex min-w-[200px] max-w-[200px] flex-col items-start text-left' : 'flex flex-col items-start text-left'}>
                <div className={isMobileDevice ? "w-full aspect-[256/362] mb-3 flex items-center justify-center flex-shrink-0" : "w-full aspect-[256/362] mb-3 flex items-center justify-center flex-shrink-0"}>
                  <img src={camp.image} alt={camp.name} className="rounded-md w-full h-full object-cover" />
                </div>
                
                <div className="text-sm md:text-base font-bold text-[#333] mb-1">
                  {camp.title}
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-[#F0EFF3] rounded-full flex items-center justify-center flex-shrink-0">
                    <img src={camp.logo} alt={camp.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-xs md:text-sm font-semibold" style={{ color: camp.textColor }}>
                    {camp.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
    </section>
    </>
  );
}
