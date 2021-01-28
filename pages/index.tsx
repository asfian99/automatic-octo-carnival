import Head from "next/head";
import Link from "next/link";
import Snippet from "../components/Snippet";

export default function Home() {
  const snippets = [];
  return (
    <>
      <Head>
        <title>snippet.bin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="my-6">
          <h1 className="text-2xl font-medium">V Snippets Bin</h1>
          <p className="text-gray-700 text-lg">
            Create and browse snippets that I use every day in Web Development!
          </p>
          <Link href="/new">
            <a className="mt-3 inline-block bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 shadow-sm rounded-md focus:outline-none focus:shadow-outline">
              Create a Snippet!
            </a>
          </Link>
        </div>
        <Snippet />
      </main>
    </>
  );
}
