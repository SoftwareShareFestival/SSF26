function ClubIntro({ detail }) {
    const renderIcons = () => (
        <div className="flex gap-[10px] md:gap-[15px]">
            <div
                className="w-[40px] h-[40px] md:w-[47px] md:h-[47px] rounded-full flex justify-center items-center cursor-pointer flex-shrink-0"
                style={{ background: detail.textColor }}
                onClick={() => window.open(detail.web, "_blank")}
            >
                <img
                    className="w-[20px] h-[20px] md:w-[27px] md:h-[27px] object-contain"
                    src="/svg/home.svg"
                    alt="home"
                />
            </div>
            <div
                className="w-[40px] h-[40px] md:w-[47px] md:h-[47px] rounded-full flex justify-center items-center cursor-pointer flex-shrink-0"
                style={{ background: detail.textColor }}
                onClick={() => window.open(detail.sns, "_blank")}
            >
                <img
                    className="w-[20px] h-[20px] md:w-[27px] md:h-[27px] object-contain"
                    src="/svg/instagram.svg"
                    alt="instagram"
                />
            </div>
        </div>
    );

	return (
        <div className="w-full max-w-[var(--content-max)] mx-auto">
            {/* Mobile View */}
            <div className="flex md:hidden flex-col gap-6">
                <div className="flex justify-between items-start gap-4">
                    <div className="flex flex-col gap-4">
                        <p className="text-[26px] font-bold text-[#222] leading-[1.3] break-keep">
                            <span className="font-extrabold" style={{ color: detail.textColor }}>{detail.name}</span>는<br/>무슨동아리 인가요?
                        </p>
                        {renderIcons()}
                    </div>
                    <div className="w-[120px] h-[120px] flex-shrink-0">
                        <img src={detail.logo} alt={detail.name} className="w-full h-full object-contain" />
                    </div>
                </div>
                <div className="text-[15px] font-medium text-[#606061] leading-[1.6] whitespace-pre-wrap break-keep">
                    {detail.clubIntro}
                </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:flex justify-between items-center gap-10">
                <div className="flex flex-col gap-6 w-full">
                    <div className="flex items-center justify-between w-full gap-6">
                        <p className="text-[32px] font-bold text-[#222] break-keep">
                            <span className="font-extrabold" style={{ color: detail.textColor }}>{detail.name}</span>는 무슨동아리 인가요?
                        </p>
                        {renderIcons()}
                    </div>
                    <div className="text-[18px] font-medium text-[#606061] leading-[1.6] whitespace-pre-wrap break-keep">
                        {detail.clubIntro}
                    </div>
                </div>
                <div className="w-[240px] h-[240px] flex-shrink-0">
                    <img src={detail.logo} alt={detail.name} className="w-full h-full object-contain" />
                </div>
            </div>
        </div>
	);
}

export default ClubIntro;
