import React from "react";
import Code from "./Code";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

export default function Snippet() {
  const router = useRouter();

  const deleteSnippet = async () => {
    // try {
    //   await fetch("/api/deleteSnippet", {
    //     method: "DELETE",
    //     body: JSON.stringify({ id: snippet.id }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });
    //   snippetDeleted();
    // } catch (err) {
    //   console.error(err);
    // }
  };
  return (
    <div className="p-4 rounded-md my-2 border border-gray-400">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl text-gray-800 font-bold">snippet.data.name</h2>
        <span className="font-bold text-sm text-blue-800 px-2 py-1 rounded-lg ">
          snippet.data.language
        </span>
      </div>
      <p className="text-gray-900 mb-4">snippet.data.description</p>

      <Code code="snippet.data.code" />

      <div className="flex flex-row justify-end">
        <Link href={`/edit/1`}>
          <button className="px-4 py-2 bg-indigo-200 hover:bg-indigo-300 text-indigo-800 rounded-md shadow-sm mt-2 mr-2">
            <AiFillEdit />
          </button>
        </Link>
        <button
          onClick={deleteSnippet}
          className="px-4 py-2 bg-red-200 hover:bg-red-300 text-red-800 rounded-md shadow-sm mt-2 mr-2"
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
}
