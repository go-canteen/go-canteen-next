import { Spinner } from "@chakra-ui/react";

export const PageLoadingComponent = () => {
  return (
    <div className="h-[70vh] w-full flex justify-center items-center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </div>
  );
};
