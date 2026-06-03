import { Link, isRouteErrorResponse, useRouteError } from "react-router";
import WanderingEyes from "../components/loading-ui/WanderingEyes";

export default function NotFoundPage() {
  const error = useRouteError();
  const isRouteError = isRouteErrorResponse(error);
  const statusCode = isRouteError ? error.status : 404;
  const title =
    statusCode === 404
      ? "페이지를 찾을 수 없어요"
      : isRouteError
        ? `${error.status} ${error.statusText}`
        : "예상하지 못한 오류가 발생했어요";
  const description =
    statusCode === 404
      ? "주소가 바뀌었거나 삭제된 페이지입니다. 눈을 굴려도 찾을 수 없으니 홈으로 돌아가서 다시 이동해 주세요."
      : "요청을 처리하는 중 문제가 발생했습니다. 홈으로 돌아가서 다시 진행해 주세요.";

  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-white px-[var(--content-pad)] py-12">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <WanderingEyes
          className="h-24 w-[220px] text-[#ff3b8d]"
        />

        <h2 className="mt-8 max-w-xl text-4xl font-semibold tracking-tight text-[#171b34] md:text-5xl">
          {title}
        </h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 md:text-lg">
          {description}
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-[#ff3b8d] px-6 text-sm font-semibold leading-none text-white transition-colors duration-200 hover:bg-[#ff4b95]"
        >
          홈으로 이동
        </Link>
      </div>
    </section>
  );
}
