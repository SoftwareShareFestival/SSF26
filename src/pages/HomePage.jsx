const folderItems = [
  { name: "app", description: "앱 엔트리, 라우터, 전역 설정" },
  { name: "assets", description: "이미지, 아이콘, 정적 리소스" },
  { name: "components", description: "재사용 UI 컴포넌트" },
  { name: "layouts", description: "공통 레이아웃 컴포넌트" },
  { name: "pages", description: "라우트 단위 페이지 컴포넌트" },
  { name: "styles", description: "전역 스타일 및 Tailwind 진입점" },
  { name: "utils", description: "순수 유틸 함수" },
];

export default function HomePage() {
  return (
    <section className="flex flex-col gap-8">
      <div className="space-y-4">
        <span className="inline-flex w-fit rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-600">
          React + Tailwind CSS + React Router
        </span>
        <div className="space-y-3">
          <h2 className="text-4xl font-semibold tracking-tight">
            기본 셋업이 완료된 시작점
          </h2>
          <p className="max-w-3xl text-base leading-7 text-slate-600">
            라우터, Tailwind, 기본 폴더 구조, 파일 네이밍 규칙을 바로 확장할 수
            있게 정리해두었습니다.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {folderItems.map((item) => (
          <article
            key={item.name}
            className="rounded-lg border border-slate-200 bg-white p-5"
          >
            <h3 className="text-base font-semibold">{item.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

