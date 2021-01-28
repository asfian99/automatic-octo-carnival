import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="p-6 flex items-center justify-between w-full z-0 h-full">
      <Link href="/">
        <h1 className="font-extrabold text-2xl text-black cursor-pointer">
          snippet.bin
        </h1>
      </Link>
      <a href="https://github.com/asfian99">
        <button className="px-4 py-2 font-medium bg-gray-800 hover:bg-gray-900 text-gray-50 border border-gray-900 shadow-sm rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-900">
          Github
        </button>
      </a>
    </div>
  );
}

export default Navbar;
