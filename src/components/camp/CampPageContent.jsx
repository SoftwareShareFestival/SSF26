import { useState } from 'react';

export default function CampPageContent() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const campData = [
    // 정보보호과 (Layer7, IRIS, TeamLog, Unifox)
    { id: 1, name: 'Layer7', category: 'security', status: '공개예정' },
    { id: 2, name: 'IRIS', category: 'security', status: '공개예정' },
    { id: 3, name: 'TeamLog', category: 'security', status: '공개예정' },
    { id: 4, name: 'Unifox', category: 'security', status: '공개예정' },
    // 소프트웨어과 (AnA, C,real, TAPIE, PARA)
    { id: 5, name: 'AnA', category: 'software', status: '공개예정' },
    { id: 6, name: 'C,real', category: 'software', status: '공개예정' },
    { id: 7, name: 'TAPIE', category: 'software', status: '공개예정' },
    { id: 8, name: 'PARA', category: 'software', status: '공개예정' },
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
      `}
    </style>
    <section className="flex flex-col gap-4 bg-[#F0EFF3]">
      <h1 className="mt-8 text-center text-3xl font-bold text-[#ff3b8d] pt-20">
        캠프 소개
      </h1>
      <p className="text-center text-[#333] font-bold text-lg max-w-[800px] pb-4 mx-auto px-4">
        소프트웨어과 정보보호과가 준비한 동아리 캠프를 소개합니다!
      </p>

      {/* 필터 버튼 */}
      <div className="w-full max-w-[1200px] mx-auto px-[50px] mb-8">
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

        {/* 카드 그리드 */}
        <div className="grid grid-cols-4 gap-6">
          {filteredCamps.map((camp) => {
            return (
              <div key={camp.id} className="flex flex-col items-start text-left">
                {/* 이미지 (237x329 비율, 반응형) */}
                <div className="w-full aspect-[237/329] bg-white rounded-[12px] mb-3 flex items-center justify-center flex-shrink-0">
                  <div className="text-[#999] text-sm">
                    이미지
                  </div>
                </div>
                
                {/* 공개예정 제목 */}
                <div className="text-base font-bold text-[#333] mb-1">
                  {camp.status}
                </div>

                {/* 동아리 로고 + 이름 (가로 정렬) */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#F0EFF3] rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-[#999] text-xs">로고</div>
                  </div>
                  <div className="text-sm font-semibold text-[#333]">
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
