import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Link from "next/link";

export interface snippetType {
  username: string;
  title: string;
  language: string;
  description: string;
  code: string;
}

function SnippetForm({ snippet }) {
  const router = useRouter();
  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: {
      username: snippet ? snippet.username : "",
      title: snippet ? snippet.title : "",
      language: snippet ? snippet.language : "",
      description: snippet ? snippet.description : "",
      code: snippet ? snippet.code : "",
    },
  });

  const createSnippet = async (data: snippetType) => {
    const { username, title, language, description, code } = data;
    try {
      const resData = await axios.post("/api/createSnippet", {
        username,
        title,
        language,
        description,
        code,
      });
      console.log(resData.data);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="bg-white p-4 rounded-md my-2 border border-gray-400">
        <form action="">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-md font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="Username"
              ref={register({ required: true })}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-md font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="Snippet Title"
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
              className="pl-4 py-2 pr-6 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
              className="pl-4 py-2 pr-6 shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="What does the snippet do?"
              ref={register({ required: true })}
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
              className="pl-4 py-2 pr-6 shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="What does the snippet do?"
              ref={register({ required: true })}
            ></textarea>
          </div>

          <div className="justify-self-end space-x-4">
            <button className="bg-blue-200 hover:bg-blue-300 text-blue-800 font-medium text-sm py-2 px-4 inline-flex items-center space-x-2 shadow-sm rounded-md focus:outline-none focus:shadow-outline">
              Save
            </button>
            <Link href="/">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium text-sm py-2 px-4 inline-flex items-center space-x-2 shadow-sm rounded-md focus:outline-none focus:shadow-outline">
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default SnippetForm;
