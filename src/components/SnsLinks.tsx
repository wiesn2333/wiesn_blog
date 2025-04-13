import Github from "../assets/github.svg?react";
import BiliBili from "../assets/bilibili.svg?react";
import Twitter from "../assets/twitter-x.svg?react";

function SnsLinks() {
  return (
    <div className="flex w-fit gap-2">
      <a
        href="https://twitter.com/weisn2333"
        className="rounded-full p-2 transition hover:bg-slate-500/25"
      >
        <Twitter className="h-6 fill-slate-800 dark:fill-slate-300" />
      </a>
      <a
        href="https://github.com/wiesn2333"
        className="rounded-full p-2 transition hover:bg-slate-500/25"
      >
        <Github className="h-6 fill-slate-800 dark:fill-slate-300" />
      </a>
      <a
        href="https://space.bilibili.com/37298661/"
        className="rounded-full p-2 transition hover:bg-pink-400/25"
      >
        <BiliBili className="h-6 fill-pink-400" />
      </a>
    </div>
  );
}

export default SnsLinks;
