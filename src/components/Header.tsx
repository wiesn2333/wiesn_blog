import Logo from "../assets/bookshelf.svg?react";

function Header() {
  return (
    <>
      <div className="h-16" />
      <div className="fixed top-0 z-50 h-16 w-full border-b border-b-slate-400/40 bg-slate-100 transition dark:bg-slate-800">
        <div className="h-16 px-[5%] text-slate-800 transition md:px-[15%] 2xl:px-[25%] dark:text-slate-300">
          <div className="flex h-16 justify-between">
            <a
              href="/"
              className="my-auto rounded-md px-3 py-2 text-2xl font-bold whitespace-nowrap transition hover:bg-slate-400/30 active:bg-slate-400/30"
            >
              <Logo className="top-0 me-1 hidden h-7 -translate-y-0.5 fill-slate-800 md:inline dark:fill-slate-300" />
              Wiesn's bookshelf
            </a>
            <div className="flex items-center">
              <a
                className="my-auto rounded-md px-3 py-2 text-sm font-medium transition hover:bg-slate-400/30 active:bg-slate-400/30"
                href="/project"
              >
                Project
              </a>
              <a
                className="my-auto rounded-md px-3 py-2 text-sm font-medium transition hover:bg-slate-400/30 active:bg-slate-400/30"
                href="/about"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
