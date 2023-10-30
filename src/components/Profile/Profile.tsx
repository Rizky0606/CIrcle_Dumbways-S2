// import React from "react";
import { RootState } from "@/store/type/RootState";
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
import { useSelector } from "react-redux";
const Profile = () => {
  const user = useSelector((state: RootState) => state.auth);

  return (
    <Box m="30px" position={"fixed"}>
      <Card p="15px" bg="#262626" borderRadius="10px" w="350px">
        <CardBody>
          <Box>
            <Heading size="md" mb="15px" color="white">
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
                src={user.photo_profile}
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
            <Text color="white">{user.full_name}</Text>
            <Text color={"#6F6F6F"}>{user.username}</Text>
            <Text color="white" fontSize="15px">
              {/* {user.bio} */}
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
