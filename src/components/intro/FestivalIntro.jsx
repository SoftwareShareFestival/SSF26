function FestivalIntro(){
  return(
    <div className="flex bg-[#F0EFF3] items-center justify-center flex-col lg:py-[97px] lg:px-[225px] lg:gap-[76px]">
      <div className="w-full flex justify-between">
        <div className="flex flex-col justify-center gap-2">
          <div className="text-black font-bold text-2xl">각 동아리에서 준비한 체계적인 커리큘럼을 경험해보세요!</div>
          <div className="text-[#9A9A9A]">체계화된 캠프별 커리큘럼을 통해 중학생도 쉽게 소프트웨어 관련 경험을 깊이 있게 쌓아갈 수 있습니다.</div>
        </div>
        <img className="h-[226px]" src="/example.jpg"/>
      </div>
      <div className="w-full flex justify-between">
        <div className="flex flex-col justify-center gap-2">
          <div className="text-black font-bold text-2xl">각 동아리에서 준비한 굿즈와 간식이 있어요!</div>
          <div className="text-[#9A9A9A]">동아리에 대한 이야기도 들어보고, 굿즈도 챙겨가세요!</div>
        </div>
        <img className="h-[226px]" src="/example.jpg"/>
      </div>
      <div className="w-full flex justify-between">
        <div className="flex flex-col justify-center gap-2">
          <div className="text-black font-bold text-2xl">재학생들과 직접 소통할 수 있어요!</div>
          <div className="text-[#9A9A9A]">쉬는 시간엔 재학생에게서 소프트웨어와 학교 생활에 대한 경험을 들을 수 있습니다.</div>
        </div>
        <img className="h-[226px]" src="/example.jpg"/>
      </div>
    </div>
  )
}
export default FestivalIntro;