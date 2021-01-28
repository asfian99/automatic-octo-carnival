import React from "react";
import Head from "next/head";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useRouter } from "next/router";
import SnippetForm from "../components/SnippetForm";
import type { snippetType } from "../components/SnippetForm";

function New() {
  const router = useRouter();
  const data: snippetType = {
    data: {
      code: "code",
      language: "language",
      description: "description",
      name: "name",
    },
  };
  return (
    <div>
      <Head>
        <title>New Snippet</title>
      </Head>

      <main className="max-w-lg mx-auto">
        <div className="flex flex-row items-center justify-between space-x-4 mb-4">
          <button
            onClick={() => router.back()}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium text-sm py-2 px-4 inline-flex items-center space-x-2 shadow-sm rounded-md focus:outline-none focus:shadow-outline"
          >
            <AiOutlineArrowLeft />
            <span>Back</span>
          </button>
          <p className="font-bold text-3xl">New Snippet</p>
        </div>
        <SnippetForm snippet={data} />
      </main>
    </div>
  );
}

export default New;
