import Header from "../components/Header";
import SnsLinks from "../components/SnsLinks";

function About() {
  return (
    <>
      <Header />
      <div className="mx-[5%] flex min-h-[calc(100vh-96px)] flex-col justify-center sm:mx-[20%] 2xl:mx-[30%]">
        <div className="group flow my-4 rounded-sm border-1 border-zinc-500/30 bg-slate-100 p-4 shadow-slate-400/20 transition hover:border-slate-500/75 hover:shadow-[6px_6px] dark:bg-slate-700 dark:shadow-slate-700/50">
          <article>
            <h1 className="inline text-xl font-semibold text-slate-700 dark:text-slate-200">
              关于维森
            </h1>
            <p className="my-4 text-slate-500 dark:text-slate-300">
              废物大学生，啥的不会,一事无成
            </p>
            <p className="my-4 text-slate-500 dark:text-slate-300">😭</p>
          </article>
          <div className="mt-4 flex justify-center">
            <SnsLinks />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
