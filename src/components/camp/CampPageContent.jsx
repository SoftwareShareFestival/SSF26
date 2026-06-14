import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

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

  const containerRef = useRef(null);
  const itemRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [showTutorial, setShowTutorial] = useState(true);
  const [showRightEdgeShadow, setShowRightEdgeShadow] = useState(false);
  const [tutorialTop, setTutorialTop] = useState(null);
  const listLength = filteredCamps.length;
  const safeIndex = listLength > 0 ? ((currentIndex % listLength) + listLength) % listLength : 0;

  useEffect(() => {
    function updateWidth() {
      if (containerRef.current && itemRef.current) {
        const itemW = itemRef.current.offsetWidth || 0;
        const styles = getComputedStyle(containerRef.current);
        // gap may be returned as '24px' or empty; fallback to 0
        const gap = parseFloat(styles.gap || styles.columnGap || '0') || 0;
        setItemWidth(itemW + gap);
      }
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [isMobileDevice, filteredCamps.length]);

  // compute tutorial arrow vertical position (center of first item image) relative to wrapper
  useEffect(() => {
    function updateTutorialTop() {
      if (!containerRef.current || !itemRef.current) return;
      const wrapper = containerRef.current.parentElement; // relative overflow-hidden
      if (!wrapper) return;
      const wrapperRect = wrapper.getBoundingClientRect();
      // Prefer the image element inside the item for more accurate centering
      const img = itemRef.current.querySelector && itemRef.current.querySelector('img');
      const targetRect = img ? img.getBoundingClientRect() : itemRef.current.getBoundingClientRect();
      const centerY = targetRect.top - wrapperRect.top + targetRect.height / 2;
      const arrowHeight = 44; // matches .tutorial-arrow height
      const topPos = Math.round(centerY - arrowHeight / 2);
      setTutorialTop(topPos);
    }
    updateTutorialTop();
    window.addEventListener('resize', updateTutorialTop);
    return () => window.removeEventListener('resize', updateTutorialTop);
  }, [itemWidth, isMobileDevice, filteredCamps.length, currentIndex]);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  // Clamp currentIndex if filtered list becomes smaller
  useEffect(() => {
    if (listLength === 0) {
      setCurrentIndex(0);
    } else if (currentIndex >= listLength || currentIndex < 0) {
      setCurrentIndex(0);
    }
  }, [filteredCamps.length]);

  // keep currentIndex within bounds when listLength changes
  useEffect(() => {
    if (listLength > 0) {
      const normalized = ((currentIndex % listLength) + listLength) % listLength;
      if (normalized !== currentIndex) setCurrentIndex(normalized);
    }
  }, [listLength]);

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

        .edge-shadow-right {
          position: absolute;
          right: 6px;
          top: 0;
          bottom: 0;
          width: 36px;
          pointer-events: none;
          background: linear-gradient(90deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.12) 100%);
          border-radius: 4px;
          opacity: 0;
          transition: opacity 220ms ease;
        }
        .edge-shadow-right.visible {
          opacity: 1;
        }

        .tutorial-arrow {
          position: absolute;
          right: 14px;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
          z-index: 30;
          opacity: 0.98;
          background: #ffffff;
          border-radius: 999px;
          box-shadow: 0 10px 24px rgba(0,0,0,0.18);
          animation: arrow-swipe 1s infinite ease-in-out;
        }
        .tutorial-arrow .arrow-icon {
          width: 20px;
          height: 20px;
          color: #ff3b8d;
          transform-origin: center;
          filter: drop-shadow(0 6px 12px rgba(0,0,0,0.18));
        }
        @keyframes arrow-swipe {
          0% { transform: translateX(-6px); }
          50% { transform: translateX(6px); }
          100% { transform: translateX(-6px); }
        }
      `}
    </style>
    <section className="flex flex-col gap-4 bg-[#F0EFF3]">
      <h1 className="mt-8 text-center text-2xl md:text-3xl font-bold text-[#ff3b8d] pt-20">
        캠프 소개
      </h1>
      <p className="text-center text-[#333] font-bold text-base md:text-lg max-w-[800px] pb-4 mx-auto px-4 break-keep">
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

        {isMobileDevice ? (
          <div className="camp-scrollbar pb-2 px-2">
            <div className="relative overflow-hidden">
              <motion.div
                ref={containerRef}
                className="flex gap-6"
                drag={listLength > 1 ? 'x' : false}
                dragElastic={listLength > 1 ? 0.2 : 0}
                onDragStart={() => {
                  if (showTutorial) setShowTutorial(false);
                }}
                onDragEnd={(e, info) => {
                  if (!itemWidth || listLength === 0) return;
                  const moved = info.offset.x;
                  const lastIndex = listLength - 1;
                  if (moved < -50) {
                    // swipe left -> next (wrap to first)
                    if (safeIndex < lastIndex) {
                      setCurrentIndex((p) => p + 1);
                    } else {
                      // wrap to first and briefly show edge shadow
                      setCurrentIndex(0);
                      setShowRightEdgeShadow(true);
                      setTimeout(() => setShowRightEdgeShadow(false), 700);
                    }
                  } else if (moved > 50) {
                    // swipe right -> prev (wrap to last)
                    if (safeIndex > 0) {
                      setCurrentIndex((p) => p - 1);
                    } else {
                      setCurrentIndex(lastIndex);
                    }
                  }
                }}
                animate={{ x: itemWidth ? -safeIndex * itemWidth : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                style={{ cursor: 'grab' }}
              >
                {filteredCamps.map((camp, idx) => (
                  <div key={camp.id} ref={idx === 0 ? itemRef : null} className={isMobileDevice ? "w-full flex-shrink-0 flex flex-col items-start text-left":"min-w-[200px] max-w-[200px] flex-shrink-0 flex flex-col items-start text-left"}>
                    <div className="w-full aspect-[256/362] mb-3 flex items-center justify-center flex-shrink-0">
                      <img src={camp.image} alt={camp.name} className={isMobileDevice ? "rounded-md w-full h-full object-cover" : "rounded-md w-full h-full object-cover"} />
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
                ))}
              </motion.div>
              {isMobileDevice && (
                <>
                  <div className={`edge-shadow-right ${showRightEdgeShadow ? 'visible' : ''}`} />
                  {showTutorial && currentIndex === 0 && (
                    <div className="tutorial-arrow" aria-hidden style={{ top: tutorialTop ? `${tutorialTop}px` : '50%' }}>
                      <svg className="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 4L16 12L8 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-6  max-w-[980px]">
            {filteredCamps.map((camp) => {
              return (
                <div key={camp.id} className="flex flex-col items-start text-left">
                  <div className="w-full aspect-[256/362] mb-3 flex items-center justify-center flex-shrink-0">
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
        )}
      </div>
      
    </section>
    </>
  );
}
