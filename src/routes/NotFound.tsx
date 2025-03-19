import Container from "../components/Container";
import Header from "../components/Header";

function NotFound() {
  return (
    <>
      <Header />
      <Container>
        <div className="mt-10 text-center">
          <h1 className="text-2xl font-bold">404 - Not Found</h1>
          <p className="mt-4 text-gray-600">你来到了没有信息的荒原</p>
        </div>
      </Container>
    </>
  );
}

export default NotFound;
