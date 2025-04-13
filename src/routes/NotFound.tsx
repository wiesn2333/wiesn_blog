import { useLocation, useRoute } from "preact-iso";
import Header from "../components/Header";

function NotFound() {
  if (useRoute().path != "/Notfound") {
    useLocation().route("/Notfound", true);
  }

  return (
    <>
      <Header />
      <div className="flex min-h-[calc(100vh-96px)] flex-col justify-center">
        <article className="-translate-y-8 text-center">
          <h1 className="text-2xl font-bold">404 - Not Found</h1>
          <p className="mt-4">你来到了没有信息的荒原</p>
        </article>
      </div>
    </>
  );
}

export default NotFound;
