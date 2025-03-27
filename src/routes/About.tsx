import Header from "../components/Header";
import Container from "../components/Container";

function About() {
  return (
    <>
      <Header />
      <Container>
        <article className="flow my-4 flex-row rounded-xl bg-white p-4 shadow-md shadow-slate-400/20 transition hover:shadow-lg dark:bg-slate-700 dark:shadow-slate-800/20">
          <h1 className="text-center">
          About me
          </h1>
        </article>
      </Container>
    </>
  );
}

export default About;
