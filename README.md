# ssf26

`React + Vite + Tailwind CSS + React Router + JavaScript` 기반의 기본 스타터 프로젝트입니다.

## 시작하기

```bash
npm install
npm run dev
```

기본 개발 서버 주소는 `http://localhost:5173` 입니다.

## 기술 스택

- React
- Vite
- Tailwind CSS
- React Router
- JavaScript

## 폴더 구조

```text
src/
  app/         # 앱 엔트리, 라우터, 전역 설정
  assets/      # 이미지, 아이콘, 정적 파일
  components/  # 재사용 컴포넌트
  layouts/     # 공통 레이아웃
  pages/       # 라우트 기준 페이지
  styles/      # 전역 스타일
  utils/       # 순수 유틸 함수
```

## 파일 명 규칙

- React 컴포넌트 파일: `PascalCase.jsx`
  - 예: `HomePage.jsx`, `RootLayout.jsx`, `UserCard.jsx`
- 훅 파일: `camelCase.js`
  - 예: `useAuth.js`, `useModal.js`
- 유틸 파일: `camelCase.js`
  - 예: `formatDate.js`, `buildQueryString.js`
- 스타일 파일: `kebab-case.css`
  - 예: `index.css`
- 폴더 이름: `camelCase`
  - 예: `components/common`, `features/userProfile`

## 작업 기준

- 페이지 단위 UI는 `src/pages`에 둡니다.
- `src/pages` 파일에는 직접적인 화면 마크업을 많이 넣지 않고, 페이지 조합과 데이터 연결만 둡니다.
- 실제 화면 구성은 `src/components` 하위로 분리해서 페이지에서 불러옵니다.
- 여러 페이지에서 재사용되는 UI는 `src/components`에 둡니다.
- 라우터 설정은 `src/app/router.jsx`에서 관리합니다.
- 레이아웃은 `src/layouts`에 둡니다.
- 비즈니스 로직이 없는 순수 함수는 `src/utils`에 둡니다.

## 라우팅 추가 예시

1. `src/pages/AboutPage.jsx` 생성
2. `src/app/router.jsx`에 route 추가

예시:

```jsx
import AboutPage from "../pages/AboutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
    ],
  },
]);
```

## 참고

- Tailwind CSS는 Vite 플러그인 방식으로 연결되어 있습니다.
- React Router는 데이터 라우터 방식(`createBrowserRouter`)으로 시작합니다.
