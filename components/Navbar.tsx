import React from "react";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

function Navbar() {
  return (
    <div className="p-6 flex items-center justify-between w-full z-0 h-full">
      <Link href="/">
        <h1 className="font-extrabold text-2xl text-black cursor-pointer">
          snippet.bin
        </h1>
      </Link>
      <a target="_blank" href="https://github.com/asfian99">
        <Button
          color="white"
          bg="black"
          _hover={{ bg: "gray.700" }}
          shadow="sm"
        >
          Github
        </Button>
      </a>
    </div>
  );
}

export default Navbar;
