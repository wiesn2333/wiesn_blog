import { articles } from "../scripts/articles";
import Header from "../components/Header";
import ArticleCard from "../components/ArticleCard";
import Container from "../components/Container";

function Home() {
  return (
    <>
      <Header />
      <Container>
        {articles.map(({ fileName, attributes }) => (
          <a href={"/article/" + fileName}>
            <ArticleCard {...attributes} />
          </a>
        ))}
      </Container>
    </>
  );
}
export default Home;
