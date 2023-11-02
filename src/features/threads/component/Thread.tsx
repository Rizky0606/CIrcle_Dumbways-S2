import { Box, Text } from "@chakra-ui/react";
import ThreadItem from "./ThreadItem";
import FormThreads from "@/components/formThreads";
import { useThreads } from "../Hooks";

const Thread = () => {
  const { threads } = useThreads();

  return (
    <Box h="100vh" w="100%" overflow={"auto"} className="scroll">
      <Box p="10px">
        <Text fontSize="4xl" my={"20px"} fontWeight={"bold"}>
          Home
        </Text>
        <FormThreads />

        <div style={{ marginTop: "20px" }}>
          {threads?.map((thread: any, index: any) => (
            <ThreadItem key={index} {...thread} />
          ))}
        </div>
      </Box>
    </Box>
  );
};

export default Thread;
