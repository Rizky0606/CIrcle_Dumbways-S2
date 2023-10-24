// import React from "react";
import { useState, useEffect } from "react";
import FormThread from "@/components/formThread";
import axios from "axios";
import { DataPosts } from "@/components/types/TypeThreads";
import { Box, Text } from "@chakra-ui/react";
import ThreadItem from "./ThreadItem";

const Thread = () => {
  const [data, setData] = useState<DataPosts[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8000/posts").then((res) => {
      setData(res?.data);
    });
  }, []);

  return (
    <Box w="100%">
      <Box p="20px">
        <Text fontSize="4xl" my={"20px"} fontWeight={"bold"}>
          Home
        </Text>
        <FormThread />

        <div style={{ marginTop: "20px" }}>
          <ThreadItem api={data} />
        </div>
      </Box>
    </Box>
  );
};

export default Thread;
