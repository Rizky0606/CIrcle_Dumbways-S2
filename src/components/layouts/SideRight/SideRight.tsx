// import React from "react";
import {
  Box,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  Text,
  Image,
  StackDivider,
  Button,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/type/RootState";
import { API } from "@/libs/api";
import { useEffect, useState } from "react";

type DataUser = {
  id: number;
  username: string;
  full_name: string;
  photo_profile: string;
};

const SideRight = () => {
  return (
    <Box
      width="100%"
      h="100vh"
      overflow={"auto"}
      display="flex"
      flexDirection={"column"}
      className="scroll"
    >
      <Profile />
      <SuggestedFollow />
      <Footer />
    </Box>
  );
};

export default SideRight;

const Profile = () => {
  const user = useSelector((state: RootState) => state.auth);
  console.log(user);

  return (
    <Box m="20px" className="scroll">
      <Card p="10px" bg="#262626" borderRadius="10px" w="350px">
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
              {user.bio}
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

const SuggestedFollow = () => {
  const [data, setData] = useState<DataUser[]>();
  const fetchDataUser = async () => {
    const response = await API.get("/users");
    setData(response.data);
  };

  useEffect(() => {
    fetchDataUser();
  }, []);

  return (
    <Card m="25px" bg="#262626" color="white">
      <CardHeader>
        <Heading size="md">Suggested for you</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {data?.map((user) => {
            return (
              <Box
                display="flex"
                width="100%"
                alignItems={"center"}
                key={user.id}
                justifyContent={"space-between"}
              >
                <Image
                  src={user.photo_profile}
                  rounded="full"
                  w="30px"
                  h="30px"
                />
                <Box p="10px" display={"flex"} flexDirection={"column"}>
                  <Text>{user.full_name}</Text>
                  <Text>@{user.username}</Text>
                </Box>
                <Button
                  variant={"outline"}
                  color="white"
                  _hover={{ color: "black", bgColor: "white" }}
                >
                  Follow
                </Button>
              </Box>
            );
          })}
        </Stack>
      </CardBody>
    </Card>
  );
};

const Footer = () => {
  return (
    <Card bg="#262626" m="20px" color="white">
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
    </Card>
  );
};
