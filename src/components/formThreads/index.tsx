import { Box, Image, Input, Button } from "@chakra-ui/react";
import { BiSolidImageAdd } from "react-icons/bi";
import { postThreads } from "@/features/threads/Hooks";

const FormThreads = () => {
  const { keyword, mutation, handleChangeInputThread } = postThreads();
  return (
    <div>
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
    </div>
  );
};

export default FormThreads;
