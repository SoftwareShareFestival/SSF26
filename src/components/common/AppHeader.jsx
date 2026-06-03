import { Link } from "react-router";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/animate-ui/components/radix/alert-dialog";

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/8 bg-[#171b34]/92 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-6 py-4 md:px-10 md:py-5">
        <Link to="/" aria-label="SSF 홈으로 이동" className="inline-flex">
          <img
            src="/SSF2026.svg"
            alt="SSF 2026"
            className="h-7 w-auto md:h-9"
          />
        </Link>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <button
              type="button"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[#ff3b8d] px-5 text-sm font-semibold leading-none text-white transition-colors duration-200 hover:bg-[#ff4b95]"
            >
              지원하기
            </button>
          </AlertDialogTrigger>

          <AlertDialogContent className="!max-w-[440px] !rounded-[28px] !border !border-slate-200 !bg-white !p-8 !shadow-[0_28px_100px_rgba(23,27,52,0.24)]">
            <AlertDialogHeader className="items-center text-center">
              <img
                src="/SSF2026.svg"
                alt="SSF 2026"
                className="mx-auto h-auto w-[92px]"
              />
              <AlertDialogTitle className="text-2xl font-semibold tracking-tight text-[#171b34]">
                지원 기간 안내
              </AlertDialogTitle>
              <AlertDialogDescription className="text-base leading-7 text-slate-600">
                아직은 지원 기간이 아닙니다.
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter className="!mt-8 !justify-center">
              <AlertDialogAction className="!inline-flex !h-12 !min-w-[112px] !items-center !justify-center !rounded-full !border-0 !bg-[#ff3b8d] !px-6 !text-sm !font-semibold !leading-none !text-white !shadow-none transition-colors duration-200 hover:!bg-[#ff4b95]">
                확인
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </header>
  );
}
