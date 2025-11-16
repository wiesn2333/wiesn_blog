import { ArticleProps } from "../scripts/articles";

function ArticleCard({ title, description, date }: ArticleProps) {
  return (
    <div className="group flow my-4 rounded-sm bg-slate-100 border-zinc-500/30 hover:border-slate-500/75 border-1 p-4 hover:shadow-[6px_6px] shadow-slate-400/20 transition dark:bg-slate-700 dark:shadow-slate-700/50">
      <div>
        <h1 className="inline text-xl font-semibold text-slate-700 dark:text-slate-200">
          {title}
        </h1>
        <p className="my-4 text-slate-500 dark:text-slate-300">{description}</p>
        <div className="flex justify-between">
          <div>{/* TODO: Add author name */}</div>
          <span className="font-mono text-sm leading-4 text-slate-500 dark:text-slate-300">
            {date}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
