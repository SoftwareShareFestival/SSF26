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
    { id: 1, name: 'Layer7', category: 'security', status: '공개예정',logo: './logo/Layer7.png', image: 'https://placehold.co/256x362', textColor: '#000000' },
    { id: 2, name: 'IRIS', category: 'security', status: '공개예정',logo: './logo/IRIS.png', image: 'https://placehold.co/256x362', textColor: '#5B80D7' },
    { id: 3, name: 'TeamLog', category: 'security', status: '공개예정',logo: './logo/TeamLog.png', image: 'https://placehold.co/256x362', textColor: '#EA3E45' },
    { id: 4, name: 'Unifox', category: 'security', status: '공개예정',logo: './logo/Unifox.png', image: 'https://placehold.co/256x362', textColor: '#FF6D03' },
    // 소프트웨어과 (AnA, C,real, TAPIE, PARA)
    { id: 5, name: 'AnA', category: 'software', status: '공개예정',logo: './logo/AnA.png', image: 'https://placehold.co/256x362', textColor: '#334882' },
    { id: 6, name: 'C,real', category: 'software', status: '공개예정',logo: './logo/C,real.png', image: 'https://placehold.co/256x362', textColor: '#1DD8D6' },
    { id: 7, name: 'TAPIE', category: 'software', status: '공개예정',logo: './logo/TAPIE.png', image: 'https://placehold.co/256x362', textColor: '#000000' },
    { id: 8, name: 'PARA', category: 'software', status: '공개예정',logo: './logo/Para.png', image: 'https://placehold.co/256x362', textColor: '#9966FF' },
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
      <h1 className="mt-8 text-center text-3xl font-bold text-[#ff3b8d] pt-20">
        캠프 소개
      </h1>
      <p className="text-center text-[#333] font-bold text-lg max-w-[800px] pb-4 mx-auto px-4">
        소프트웨어과 정보보호과가 준비한 동아리 캠프를 소개합니다!
      </p>

      <div className="w-full max-w-[980px] mx-auto px-[50px] mb-8">
        <div className="flex justify-center gap-3 mb-6">
          <button 
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full font-semibold transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#ff3b8d] text-white'
                : 'border border-[#E6E6EA] text-[#333] font-medium'
            }`}
          >
            전체
          </button>
          <button 
            onClick={() => setSelectedCategory('security')}
            className={`px-4 py-2 rounded-full font-semibold transition-all ${
              selectedCategory === 'security'
                ? 'bg-[#ff3b8d] text-white'
                : 'border border-[#E6E6EA] text-[#333] font-medium'
            }`}
          >
            정보보호과
          </button>
          <button 
            onClick={() => setSelectedCategory('software')}
            className={`px-4 py-2 rounded-full font-semibold transition-all ${
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
              <div key={camp.id} className={isMobileDevice ? 'flex min-w-[260px] max-w-[260px] flex-col items-start text-left' : 'flex flex-col items-start text-left'}>
                <div className="w-full aspect-[256/362] mb-3 flex items-center justify-center flex-shrink-0">
                  <img src={camp.image} alt={camp.name} className="rounded-md w-full h-full object-cover" />
                </div>
                
                <div className="text-base font-bold text-[#333] mb-1">
                  {camp.status}
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-[#F0EFF3] rounded-full flex items-center justify-center flex-shrink-0">
                    <img src={camp.logo} alt={camp.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="text-sm font-semibold" style={{ color: camp.textColor }}>
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
