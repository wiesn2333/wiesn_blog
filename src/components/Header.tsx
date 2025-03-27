import { useEffect, useRef } from "preact/hooks";
import Logo from "../assets/bookshelf.svg?react";
function Header() {
  const refHeader = useRef<HTMLDivElement | null>(null);
  const topStyle = "bg-slate-100 dark:bg-slate-800";
  const stickyStyle =
    "bg-slate-50 dark:bg-slate-700 shadow-md shadow-slate-400/20 dark:shadow-slate-800/20";
  useEffect(() => {
    const fancyHeader = () => {
      if (refHeader.current) {
        let classList = refHeader.current.classList;
        if (document.documentElement.scrollTop > 5) {
          classList.add(...stickyStyle.split(" "));
          classList.remove(...topStyle.split(" "));
        } else {
          classList.add(...topStyle.split(" "));
          classList.remove(...stickyStyle.split(" "));
        }
      }
    };
    fancyHeader();
    document.addEventListener("scroll", fancyHeader);
    return () => {
      document.removeEventListener("scorll", fancyHeader);
    };
  }, []);
  return (
    <>
      <div className="mb-8 h-16" />
      <div
        ref={refHeader}
        className={"t fixed top-0 z-50 w-full transition" + " " + topStyle}
      >
        <div className="flex h-16 justify-between px-[5%] leading-8 text-slate-800 md:px-[15%] 2xl:px-[25%] dark:text-slate-300">
          <a
            href="/"
            className="my-auto rounded-md px-3 py-2 text-2xl font-bold transition hover:bg-slate-400/30"
          >
            <Logo className="top-0 hidden h-7 me-1 -translate-y-0.5 fill-slate-800 md:inline dark:fill-slate-300" />
            Wiesn's bookshelf
          </a>
          <a
            className="my-auto rounded-md px-3 py-2 text-sm font-medium transition hover:bg-slate-400/30"
            href="/about"
          >
            About
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
