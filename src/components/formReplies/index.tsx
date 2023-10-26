import { useState } from "react";
import { API } from "@/libs/api";
import { Box, Image, Input, Button } from "@chakra-ui/react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { BiSolidImageAdd } from "react-icons/bi";

type FormReply = {
  content: string;
  image?: string;
  userId: number;
  threadsId: number;
};

const FormReplies = () => {
  const [keyword, setKeyword] = useState<FormReply>({
    content: "",
    image: "",
    userId: 2,
    threadsId: 12,
  });

  const QueryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newreplies: FormReply) => {
      return API.post("/reply", newreplies);
    },
    onSuccess() {
      QueryClient.invalidateQueries({ queryKey: ["detailThreads"] });
      setKeyword({
        content: "",
        image: "",
        threadsId: 12,
        userId: 2,
        // likeId:
      });
    },
  });

  const handleChangeInputReplies = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword({
      ...keyword,
      [e.target.name]: e.target.value,
    });
  };

  console.log(keyword);

  return (
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
        value={keyword.content}
        onChange={handleChangeInputReplies}
        placeholder="What is Happening ?!"
        bg={"transparent"}
        color={"gray.300"}
        width="80%"
        mx="20px"
        pl="10px"
        // height={"35px"}
        // borderRadius="7px"
        variant={"flushed"}
      />
      <Input
        name="image"
        value={keyword.image}
        onChange={handleChangeInputReplies}
        placeholder="What is Happening ?!"
        bg={"transparent"}
        color={"gray.300"}
        width="80%"
        mx="20px"
        pl="10px"
        // height={"35px"}
        // borderRadius="7px"
        variant={"flushed"}
      />
      <BiSolidImageAdd size="35px" style={{ marginRight: "10px" }} />
      <Button
        colorScheme="whatsapp"
        // bg="green"
        px="10px"
        py="5px"
        borderRadius={"7px"}
        onClick={() => mutation.mutate(keyword)}
      >
        Button
      </Button>
    </Box>
  );
};

export default FormReplies;
