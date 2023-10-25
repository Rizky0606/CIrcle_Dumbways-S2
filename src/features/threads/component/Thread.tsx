// import React from "react";
import { useState } from "react";
// import FormThread from "@/components/formThread";
import { BiSolidImageAdd } from "react-icons/bi";
import { Box, Text, Input, Image, Button } from "@chakra-ui/react";
import ThreadItem from "./ThreadItem";
import { API } from "@/libs/api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

type FormThread = {
  content: string;
  image: string;
  userId: number;
};

const Thread = () => {
  const { data: threads } = useQuery({
    queryKey: ["threads"],
    queryFn: async () => {
      const { data } = await API.get("/threads");
      return data;
    },
  });

  const [keyword, setKeyword] = useState<FormThread>({
    content: "",
    image: "",
    userId: 2,
  });

  const QueryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newthread: FormThread) => {
      return API.post("/thread", newthread);
    },
    onSuccess() {
      QueryClient.invalidateQueries({ queryKey: ["threads"] });
      setKeyword({
        content: "",
        image: "",
        userId: 2,
      });
    },
  });

  const handleChangeInputThread = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword({
      ...keyword,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box w="100%">
      <Box p="10px">
        <Text fontSize="4xl" my={"20px"} fontWeight={"bold"}>
          Home
        </Text>
        {/* <FormThread /> */}
        <Box display="flex" width="100%" alignItems={"center"}>
          <Image
            boxSize="100px"
            width="30px"
            height="30px"
            borderRadius={"full"}
            objectFit="cover"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
          <Input
            name="content"
            placeholder="What is Happening ?!"
            bg={"transparent"}
            color={"gray.300"}
            width="80%"
            value={keyword.content}
            mx="20px"
            pl="10px"
            // height={"35px"}
            // borderRadius="7px"
            variant={"flushed"}
            onChange={handleChangeInputThread}
          />

          <Input
            name="image"
            placeholder="Images"
            value={keyword.image}
            bg={"transparent"}
            color={"gray.300"}
            width="80%"
            mx="20px"
            pl="10px"
            // height={"35px"}
            // borderRadius="7px"
            variant={"flushed"}
            onChange={handleChangeInputThread}
          />
          <BiSolidImageAdd size="35px" style={{ marginRight: "10px" }} />
          <Button
            colorScheme="whatsapp"
            // bg="green"
            // px="10px"
            // py="5px"
            borderRadius={"7px"}
            onClick={() => {
              mutation.mutate(keyword);
            }}
          >
            Button
          </Button>
        </Box>

        <div style={{ marginTop: "20px" }}>
          <ThreadItem api={threads} />
        </div>
      </Box>
    </Box>
  );
};

export default Thread;
