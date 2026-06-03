import { Link, isRouteErrorResponse, useRouteError } from "react-router";

export default function NotFoundPage() {
  const error = useRouteError();
  const title = isRouteErrorResponse(error)
    ? `${error.status} ${error.statusText}`
    : "페이지를 찾을 수 없습니다.";

  return (
    <section className="flex min-h-[50vh] flex-col items-start justify-center gap-4">
      <p className="text-sm font-medium text-slate-500">Error</p>
      <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
      <p className="max-w-xl text-sm leading-6 text-slate-600">
        요청한 경로를 확인하거나 홈으로 돌아가서 다시 진행하세요.
      </p>
      <Link
        to="/"
        className="rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white"
      >
        홈으로 이동
      </Link>
    </section>
  );
}

