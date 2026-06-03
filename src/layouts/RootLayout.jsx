import { NavLink, Outlet } from "react-router";

const navLinkClassName = ({ isActive }) =>
  [
    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
    isActive
      ? "bg-slate-900 text-white"
      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
  ].join(" ");

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              ssf26
            </p>
            <h1 className="text-lg font-semibold">React Starter</h1>
          </div>

          <nav className="flex items-center gap-2">
            <NavLink to="/" end className={navLinkClassName}>
              Home
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col px-6 py-10">
        <Outlet />
      </main>
    </div>
  );
}

