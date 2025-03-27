import Container from "../components/Container";
import Header from "../components/Header";

function NotFound() {
  return (
    <>
      <Header />
      <Container>
        <article className="mt-10 text-center">
          <h1 className="text-2xl font-bold">404 - Not Found</h1>
          <p className="mt-4">你来到了没有信息的荒原</p>
        </article>
      </Container>
    </>
  );
}

export default NotFound;
