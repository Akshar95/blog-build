import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Blog Build</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="flex items-center justify-between max-w-6xl mx-auto py-10 lg:py-0 bg-indigo-200 border-b-8 border-indigo-300">
        <div className="px-10 space-y-5">
          <h1 className="text-6xl max-w-xl font-serif">
            <span className="underline decoration-black decoration-4">
              MIST
            </span>{" "}
            is a blog that reviews
          </h1>
          <h2>
            Read our reviews in order to clear the mist. The MISTery lies
            within...
          </h2>
        </div>
        <div>
          <h1 className="hidden md:inline-flex text-14xl lg:text-21xl px-10">
            M
          </h1>
        </div>
      </div>
      {/* Posts */}
    </div>
  );
}

export const getServerSideProps = async () => {
  const query =
}