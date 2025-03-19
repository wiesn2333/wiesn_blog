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
    return;
  }

  const ArticleContent = article.ArticleContent;
  return (
    <>
      <Header />
      <Container>
        <ArticleContent />
      </Container>
    </>
  );
}

export default Article;
