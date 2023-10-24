// import React from "react";
import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Stack,
  Box,
  Button,
} from "@chakra-ui/react";
const Profile = () => {
  return (
    <Box p="20px" top="0" w="330px">
      <Card p="15px" bg="#262626" borderRadius="10px">
        <CardBody>
          <Box>
            <Heading size="md" mb="15px" mt="5px" color="white">
              My Profile
            </Heading>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
              height="100px"
              width="100%"
            />
            <Box
              display="flex"
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Image
                src="https://img.freepik.com/free-photo/portrait-happy-asian-woman-smiling-posing-confident-cross-arms-chest-standing-against-studio-background_1258-89269.jpg?w=826&t=st=1698051188~exp=1698051788~hmac=10400db0d23ceee19bb3261433d68317f095bb191eb9af5a853a6e9f049b794b"
                borderRadius="50%"
                width="50px"
                height="50px"
                objectFit={"cover"}
              />
              <Button
                border="1px solid white"
                borderRadius="10px"
                margin="3px"
                fontSize="12px"
                height="30px"
              >
                Edit Profile
              </Button>
            </Box>
          </Box>
          <Stack mt="3" spacing="0">
            <Text color="white">Stella Audhina</Text>
            <Text color={"#6F6F6F"}>@audhinafa</Text>
            <Text color="white" fontSize="15px">
              picked over by the worms, and weird fishes
            </Text>
          </Stack>
        </CardBody>
        <Box display="flex" justifyContent={"space-evenly"} mt="5px">
          <Heading display="flex" size="sm" color="white">
            291
            <Text ml={2} color={"#6F6F6F"} size="sm">
              Following
            </Text>
          </Heading>
          <Heading display="flex" ml={5} size="sm" color="white">
            23
            <Text ml={2} color={"#6F6F6F"} size="sm">
              Followers
            </Text>
          </Heading>
        </Box>
      </Card>
    </Box>
  );
};

export default Profile;
