// import React from "react";
import {
  SimpleGrid,
  Box,
  Text,
  Button,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiHomeAlt, BiSearchAlt2 } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const SideLeft = () => {
  return (
    <Box position={"fixed"} top="0" maxW="300px" width="100%">
      <SimpleGrid p={5}>
        <Box>
          <Link to="/">
            <Text color="green" fontSize="6xl" fontWeight="bold">
              Circle
            </Text>
          </Link>
        </Box>
        <Box>
          <UnorderedList style={{ listStyle: "none" }}>
            <Box
              display={"flex"}
              alignItems={"center"}
              py="20px"
              px="10px"
              _hover={{
                bg: "white",
                color: "black",
                borderRadius: "10px",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <BiHomeAlt />
              <ListItem style={{ marginLeft: "10px" }}>
                <Text size="xl">Home</Text>
              </ListItem>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              py="20px"
              px="10px"
              _hover={{
                bg: "white",
                color: "black",
                borderRadius: "10px",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <BiSearchAlt2 />
              <ListItem style={{ marginLeft: "10px" }}>Search</ListItem>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              py="20px"
              px="10px"
              _hover={{
                bg: "white",
                color: "black",
                borderRadius: "10px",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <AiOutlineHeart />
              <ListItem style={{ marginLeft: "10px" }}>Follow</ListItem>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              py="20px"
              px="10px"
              _hover={{
                bg: "white",
                color: "black",
                borderRadius: "10px",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <CgProfile />
              <ListItem style={{ marginLeft: "10px" }}>Profile</ListItem>
            </Box>
          </UnorderedList>
        </Box>
        <Button colorScheme={"green"} m="10px" p="10px" borderRadius={"15px"}>
          Create Post
        </Button>
      </SimpleGrid>
    </Box>
  );
};

export default SideLeft;
