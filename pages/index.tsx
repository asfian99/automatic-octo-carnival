import { useQuery, useMutation } from "react-query";
import Head from "next/head";
import Link from "next/link";
import Snippet from "../components/Snippet";
import axios from "axios";

export default function Home() {
  const query = useQuery("snippets", getSnippets);

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
            Create and browse snippets that people use every day!
          </p>
          <Link href="/new">
            <a className="mt-3 inline-block bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 shadow-sm rounded-md focus:outline-none focus:shadow-outline">
              Create a Snippet!
            </a>
          </Link>
        </div>

        {query.isLoading ? (
          <p className="text-lg font-semibold my-4 text-center">Loading...</p>
        ) : undefined}

        {query.isSuccess
          ? query.data.map((snippet) => {
              return <Snippet key={snippet._id} snippet={snippet} />;
            })
          : undefined}
      </main>
    </>
  );
}

const getSnippets = async () => {
  try {
    const { data } = await axios.get("/api/snippets");
    return data;
  } catch (error) {
    console.log(error);
  }
};
