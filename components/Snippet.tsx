import React from "react";
import axios from "axios";
import Code from "./Code";
import Link from "next/link";
import { useMutation, useQueryClient } from "react-query";
import { useRouter } from "next/router";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

export default function Snippet({ snippet }) {
  const queryClient = useQueryClient();
  const router = useRouter();

  const deleteSnippet = useMutation((snippetID) =>
    axios.delete(`/api/deleteSnippet/${snippetID}`)
  );

  // Function untuk meng-Handle hapus data
  const deleteHandler = () => {
    deleteSnippet.mutate(snippet._id, {
      onSuccess: (data) => queryClient.invalidateQueries("snippets"),
      onError: (error) => console.log(error),
    });
  };

  return (
    <div className="p-4 my-4 rounded-md border border-gray-200 hover:border-gray-300">
      <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between">
        <h2 className="text-xl text-gray-800 font-bold">{snippet.title}</h2>
        <span className="font-bold text-sm text-blue-800 md:px-2 py-1 rounded-lg ">
          {snippet.language}
        </span>
      </div>
      <p className="text-gray-500 font-medium mb-4">{snippet.username}</p>
      <p className="text-gray-700 mb-4">{snippet.description}</p>

      <Code code={snippet.code} />

      <div className="flex flex-row justify-end">
        <Link href={`/edit/1`}>
          <button className="px-4 py-2 bg-indigo-200 hover:bg-indigo-300 text-indigo-800 rounded-md shadow-sm mt-2 mr-2">
            <AiFillEdit />
          </button>
        </Link>
        <button
          onClick={deleteHandler}
          className="px-4 py-2 bg-red-200 hover:bg-red-300 text-red-800 rounded-md shadow-sm mt-2 mr-2"
        >
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
}
