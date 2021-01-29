import React from "react";
import {
  Stack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

function SkeletonIndex() {
  return (
    <div className="p-4 my-4 rounded-md border border-gray-200 hover:border-gray-300">
      <Stack>
        <Skeleton height="20px" rounded="2xl" />
        <Skeleton height="20px" rounded="2xl" />
        <Skeleton height="20px" rounded="2xl" />
        <Skeleton height="20px" w="60%" rounded="2xl" />
      </Stack>
    </div>
  );
}

export default SkeletonIndex;
