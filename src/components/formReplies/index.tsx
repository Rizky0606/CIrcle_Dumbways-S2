// import React from "react";
import { Box, Image, Input, Button } from "@chakra-ui/react";
import { BiSolidImageAdd } from "react-icons/bi";

const FormReplies = () => {
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
      >
        Button
      </Button>
    </Box>
  );
};

export default FormReplies;
