import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FormControl, FormLabel, Switch } from "@chakra-ui/react";

function Code({ code }) {
  const [showCode, setShowCode] = useState<boolean>(false);
  const [copyText, setCopyText] = useState<string>("Copy");

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopyText("Copied!");
    setTimeout(() => {
      setCopyText("Copy");
    }, 1000);
  };

  return (
    <div>
      <button
        className="mb-1 bg-blue-200 hover:bg-blue-300 text-blue-800 font-medium text-sm py-2 px-4 inline-flex items-center space-x-2 shadow-sm rounded-md focus:outline-none focus:shadow-outline"
        onClick={() => setShowCode(!showCode)}
        type="submit"
      >
        {showCode ? (
          <>
            <span>Hide the code</span>
            <AiFillEyeInvisible />
          </>
        ) : (
          <>
            <span>Show the code</span>
            <AiFillEye />
          </>
        )}
      </button>
      {showCode && (
        <div className="relative">
          <pre className="w-full text-gray-800 bg-gray-300 rounded-md pt-7 pb-3 px-3 overflow-auto">
            {code}
          </pre>

          <button
            className="bg-gray-500 text-xs hover:bg-gray-600 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mb-2 absolute top-0 right-0 transform -translate-x-1 translate-y-1"
            type="submit"
            onClick={copyCode}
          >
            {copyText}
          </button>
        </div>
      )}
    </div>
  );
}

export default Code;
