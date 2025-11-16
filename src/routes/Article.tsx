import { useLocation, useRoute } from "preact-iso";
import { articles } from "../scripts/articles";
import Header from "../components/Header";
import Container from "../components/Container";

function Article() {
  const { params } = useRoute();
  const articleParam = params.article;
  const article = articles.find((a) => a.fileName === articleParam);

  if (!article) {
    useLocation().route("/notfound", true);
    return null;
  }

  const ArticleContent = article.ArticleContent;
  const { title, description, date } = article.attributes;
  return (
    <>
      <Header />
      <Container>
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
        <div className="group flow my-4 rounded-sm bg-slate-100 border-zinc-500/30 hover:border-slate-500/75 border-1 p-4 hover:shadow-[6px_6px] shadow-slate-400/20 transition dark:bg-slate-700 dark:shadow-slate-700/50">
          <article>
            <ArticleContent />
          </article>
        </div>
      </Container>
    </>
  );
}

export default Article;
