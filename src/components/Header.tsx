import { useEffect, useRef } from "preact/hooks";

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
    <div
      ref={refHeader}
      className={"sticky top-0 z-50 mb-8 w-full transition " + topStyle}
    >
      <div className="h-16 content-center px-[5%] text-center leading-8 md:px-[20%] 2xl:px-[30%]">
        <span className="text-xl">
          Title
        </span>
      </div>
    </div>
  );
}

export default Header;
