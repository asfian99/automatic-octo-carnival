import React from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Link from "next/link";

export interface snippetType {
  data: {
    code: string;
    language: string;
    description: string;
    name: string;
  };
}

function SnippetForm({ snippet }) {
  const router = useRouter();
  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: {
      code: snippet ? snippet.data.code : "",
      language: snippet ? snippet.data.language : "",
      description: snippet ? snippet.data.description : "",
      name: snippet ? snippet.data.name : "",
    },
  });

  return (
    <>
      <div className="bg-white p-4 rounded-md my-2 border border-gray-400">
        <form action="">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-md font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="Snippet Name"
              ref={register({ required: true })}
            />
          </div>

          <div className="my-2">
            <label
              htmlFor="language"
              className="block text-md font-medium text-gray-700"
            >
              Language
            </label>
            <select
              id="language"
              name="language"
              ref={register({ required: true })}
              className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md"
            >
              <option className="py-2">JavaScript</option>
              <option className="py-2">HTML</option>
              <option className="py-2">CSS</option>
            </select>
          </div>

          <div className="my-2">
            <label
              htmlFor="description"
              className="block text-md font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={2}
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="What does the snippet do?"
            ></textarea>
          </div>

          <div className="my-2">
            <label
              htmlFor="code"
              className="block text-md font-medium text-gray-700"
            >
              Code
            </label>
            <textarea
              id="code"
              name="code"
              rows={6}
              className="shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="What does the snippet do?"
            ></textarea>
          </div>
          <div className="justify-self-end space-x-4">
            <Link href="/">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium text-sm py-2 px-4 inline-flex items-center space-x-2 shadow-sm rounded-md focus:outline-none focus:shadow-outline">
                Cancel
              </button>
            </Link>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium text-sm py-2 px-4 inline-flex items-center space-x-2 shadow-sm rounded-md focus:outline-none focus:shadow-outline">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SnippetForm;
