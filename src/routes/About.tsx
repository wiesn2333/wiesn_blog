import Header from "../components/Header";
import SnsLinks from "../components/SnsLinks";

function About() {
  return (
    <>
      <Header />
      <div className="mx-[5%] flex min-h-[calc(100vh-96px)] flex-col justify-center sm:mx-[20%] 2xl:mx-[30%]">
        <div className="my-4 -translate-y-8 rounded-xl bg-white p-4 shadow-md shadow-slate-400/20 transition hover:shadow-lg dark:bg-slate-700 dark:shadow-slate-800/20">
          <article>
            <h1>关于维森</h1>
            <p>怎么会这样。。。</p>
            <p>
              我不应该是编程大佬，有一两个 Side Project
              的开源软件开发者，算法选手，一年能看几十本书的文艺青年，会绘画建模剪视频的亚文化创作者吗？
            </p>
            <p>怎么会如此一事无成</p>
            <p>😭</p>
          </article>
          <div className="flex justify-center">
            <SnsLinks />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
