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
import { FiLogIn } from "react-icons/fi";
import { PiSignOutBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const SideLeft = () => {
  return (
    <Box position={"fixed"} top="0">
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
            <Link to="/">
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
                <BiHomeAlt size="20px" />
                <ListItem style={{ marginLeft: "10px" }}>
                  <Text size="xl">Home</Text>
                </ListItem>
              </Box>
            </Link>

            <Link to="/search">
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
                <BiSearchAlt2 size="20px" />
                <ListItem style={{ marginLeft: "10px" }}>Search</ListItem>
              </Box>
            </Link>

            <Link to="/follow">
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
                <AiOutlineHeart size="20px" />
                <ListItem style={{ marginLeft: "10px" }}>Follow</ListItem>
              </Box>
            </Link>

            <Link to="/profile">
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
                <CgProfile size="20px" />
                <ListItem style={{ marginLeft: "10px" }}>Profile</ListItem>
              </Box>
            </Link>
          </UnorderedList>
        </Box>
        <Button colorScheme={"green"} m="10px" p="10px" borderRadius={"15px"}>
          Create Post
        </Button>

        <UnorderedList mt="60px">
          <Link to="/auth/login">
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
              <FiLogIn size="20px" />
              <ListItem style={{ marginLeft: "10px" }}>Login</ListItem>
            </Box>
          </Link>

          <Link to="/auth/register">
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
              <PiSignOutBold size="20px" />
              <ListItem style={{ marginLeft: "10px" }}>Register</ListItem>
            </Box>
          </Link>

          {/* <Link to="/register">
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
              <PiSignOutBold size="20px" />
              <ListItem style={{ marginLeft: "10px" }}>Logout</ListItem>
            </Box>
          </Link> */}
        </UnorderedList>
      </SimpleGrid>
    </Box>
  );
};

export default SideLeft;
