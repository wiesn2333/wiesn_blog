import { useLocation, useRoute } from "preact-iso";
import { articles } from "../scripts/articles";
import Header from "../components/Header";
import Container from "../components/Container";

function Article() {
  const { params } = useRoute();
  const articleParam = params.article;
  const article = articles.find((a) => a.fileName === articleParam);

  if (!article) {
    useLocation().route("/Notfound", true);
    return null;
  }

  const ArticleContent = article.ArticleContent;
  return (
    <>
      <Header />
      <Container>
        <ul className="text-slate-950 dark:text-slate-100">
          <li className="mb-2 text-3xl font-bold">
            {article.attributes.title}
          </li>
          <li className="text-md font-medium">
            {article.attributes.description}
          </li>
          <li className="text-right">
            <span className="rounded-lg bg-slate-200 px-2 text-sm text-slate-500 dark:bg-slate-500 dark:text-slate-300">
              {article.attributes.date}
            </span>
          </li>
        </ul>
        <div className="group flow my-4 flex-row rounded-md bg-white p-4 md:px-8 shadow-md shadow-slate-400/20 dark:bg-slate-700 dark:shadow-slate-800/20">
          <article>
            <ArticleContent />
          </article>
        </div>
      </Container>
    </>
  );
}

export default Article;
