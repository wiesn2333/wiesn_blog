import { ArticleProps } from "../scripts/articles";

function ArticleCard({ title, description, date }: ArticleProps) {
  return (
    <div className="group flow my-4 flex-row rounded-xl bg-slate-50 p-4 shadow-md shadow-slate-400/20 transition hover:shadow-lg dark:bg-slate-700 dark:shadow-slate-800/20">
      <div>
        <h2 className="inline text-xl font-bold text-slate-700 dark:text-slate-200">
          {title}
        </h2>
        <p className="mb-4 text-slate-600 dark:text-slate-300">{description}</p>
        <span className="h-4 rounded-lg bg-slate-200 px-2 pb-0.5 text-slate-500 dark:bg-slate-500 dark:text-slate-300">
          <span className="text-sm leading-4">{date}</span>
        </span>
      </div>
    </div>
  );
}

export default ArticleCard;
