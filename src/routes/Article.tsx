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
  const { title, description, date } = article.attributes;
  return (
    <>
      <Header articleTitle={title} />
      <Container>
        <ul className="text-slate-800 dark:text-slate-200">
          <li className="mb-2 text-3xl font-bold">{title}</li>
          <li className="text-md font-medium">{description}</li>
          <li className="text-right">
            <span className="h-4 rounded-lg bg-slate-200 px-2 pb-0.5 text-slate-500 dark:bg-slate-500 dark:text-slate-300">
              <span className="text-sm leading-4">{date}</span>
            </span>
          </li>
        </ul>
        <div className="group flow my-4 flex-row rounded-lg bg-white p-4 shadow-md shadow-slate-400/20 md:px-8 dark:bg-slate-700 dark:shadow-slate-800/20">
          <article>
            <ArticleContent />
          </article>
        </div>
      </Container>
    </>
  );
}

export default Article;
