import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { useToast, Button } from "@chakra-ui/react";
import Link from "next/link";
import updateSnippet from "../pages/api/updateSnippet";

export interface snippetType {
  username: string;
  title: string;
  language: string;
  description: string;
  code: string;
}

function SnippetForm({ snippet }) {
  const toast = useToast();
  const queryClient = useQueryClient();
  const router = useRouter();
  const [isSaving, setIsSaving] = useState(false);
  const languageList = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "Python",
    "Java",
    "Rust",
    "Other",
  ];
  const { register, handleSubmit, formState, errors, reset } = useForm({
    reValidateMode: "onSubmit",
    defaultValues: {
      username: snippet ? snippet.username : undefined,
      title: snippet ? snippet.title : undefined,
      language: snippet ? snippet.language : undefined,
      description: snippet ? snippet.description : undefined,
      code: snippet ? snippet.code : undefined,
    },
  });

  const createSnippetMutation = useMutation((snippetData: snippetType) => {
    return axios.post(`/api/createSnippet`, snippetData);
  });
  // const updateSnippetMutation = useMutation((snippetID) =>
  //   axios.put(`/api/updateSnippet/${snippetID}`)
  // );

  // Function untuk meng-Handle hapus data
  const createSnippet = (formData: snippetType) => {
    setIsSaving(true);
    createSnippetMutation.mutate(formData, {
      onSuccess: (data) => {
        queryClient.invalidateQueries("snippets");
        toast({
          position: "bottom-right",
          duration: 4000,
          description: "Snippet Created.",
          status: "success",
          isClosable: true,
        });
        setIsSaving(false);
        router.replace("/");
      },
      onError: (error) => console.log(error),
    });
  };

  const updateSnippet = async (data: snippetType) => {
    console.log("update");
  };

  return (
    <>
      <div className="bg-white p-4 rounded-md my-2 border border-gray-400">
        <form onSubmit={handleSubmit(snippet ? updateSnippet : createSnippet)}>
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
              {languageList.map((lang, i) => (
                <option key={i} className="py-2">
                  {lang}
                </option>
              ))}
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
            <Button
              type="submit"
              fontSize="sm"
              color="blue.800"
              rounded="md"
              bg="blue.100"
              _hover={{ bg: "blue.200" }}
              isLoading={isSaving}
              loadingText="Saving"
            >
              Save
            </Button>
            <Link href="/">
              <Button fontSize="sm" rounded="md">
                Cancel
              </Button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default SnippetForm;
