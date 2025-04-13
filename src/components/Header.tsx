import { useEffect, useRef } from "preact/hooks";
import Logo from "../assets/bookshelf.svg?react";
interface HeaderProps {
  articleTitle?: string;
}

function Header({ articleTitle }: HeaderProps) {
  const refHeader = useRef<HTMLDivElement | null>(null);
  const refArticleTilte = useRef<HTMLDivElement | null>(null);
  const topStyle = "bg-slate-100 dark:bg-slate-800";
  const stickyStyle =
    "bg-slate-50 dark:bg-slate-700 shadow-md shadow-slate-400/20 dark:shadow-slate-800/20";
  useEffect(() => {
    console.log("useEffect() start");
    console.log("refArticleTilte.current", refArticleTilte.current);
    const fancyHeader = () => {
      if (refHeader.current) {
        const classList = refHeader.current.classList;
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

    let scrollTitle: () => void;
    if (articleTitle) {
      const classList = refArticleTilte.current?.classList;
      scrollTitle = () => {
        if (document.documentElement.scrollTop > 50) {
          classList?.add("-translate-y-16");
        } else {
          classList?.remove("-translate-y-16");
        }
      };
      scrollTitle();
      document.addEventListener("scroll", scrollTitle);
    }
    return () => {
      console.log("useEffect() clean up");
      console.log("refArticleTilte.current", refArticleTilte.current);

      document.removeEventListener("scroll", fancyHeader);
      if (articleTitle) {
        document.removeEventListener("scroll", scrollTitle);
      }
    };
  }, []);
  return (
    <>
      <div className="mb-8 h-16" />
      <div
        ref={refHeader}
        className={
          "fixed top-0 z-50 h-16 w-full overflow-hidden transition" +
          " " +
          topStyle
        }
      >
        <div
          ref={refArticleTilte}
          className="h-16 px-[5%] text-slate-800 transition md:px-[15%] 2xl:px-[25%] dark:text-slate-300"
        >
          <div className="flex h-16 justify-between leading-8">
            <a
              href="/"
              className="my-auto rounded-md px-3 py-2 text-2xl font-bold whitespace-nowrap transition hover:bg-slate-400/30 active:bg-slate-400/30"
            >
              <Logo className="top-0 me-1 hidden h-7 -translate-y-0.5 fill-slate-800 md:inline dark:fill-slate-300" />
              Wiesn's bookshelf
            </a>
            <a
              className="my-auto rounded-md px-3 py-2 text-sm font-medium transition hover:bg-slate-400/30 active:bg-slate-400/30"
              href="/about"
            >
              About
            </a>
          </div>
          {articleTitle && (
            <div
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex h-16 justify-between px-3 py-2 text-2xl font-bold"
            >
              <div className="my-auto">{articleTitle}</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
