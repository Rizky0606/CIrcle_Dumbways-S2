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
  Button,
  // Spinner,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/type/RootState";
import { API } from "@/libs/api";
import { useQuery } from "@tanstack/react-query";
import SuggestFollow from "./SuggestFollow";

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

  return (
    <Box m="20px" className="scroll">
      <Card p="10px" bg="#262626" borderRadius="10px" w="350px">
        <CardBody>
          <Box>
            <Heading size="md" mb="15px" color="white">
              My Profile
            </Heading>
            <Image
              src="https://img.freepik.com/free-vector/gradient-abstract-purple-color-background-design_343694-2875.jpg?w=900&t=st=1698981151~exp=1698981751~hmac=ab3b1aed9c3c7af91ff29d3e9a410b9eece848ed692376a3e9f5e1bbad65cd28"
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
          <Heading display="flex" ml={5} size="sm" color="white">
            {/* {user.follower.length} */}
            <Text ml={2} color={"#6F6F6F"} size="sm">
              Followers
            </Text>
          </Heading>
          <Heading display="flex" size="sm" color="white">
            {/* {user.following.length} */}
            <Text ml={2} color={"#6F6F6F"} size="sm">
              Following
            </Text>
          </Heading>
        </Box>
      </Card>
    </Box>
  );
};

const SuggestedFollow = () => {
  const { data: user } = useQuery({
    queryKey: ["suggesFollow"],
    queryFn: async () => {
      const { data } = await API.get("/users");

      return data;
    },
    refetchInterval: 1000,
  });

  return (
    <>
      <Card m="25px" bg="#262626" color="white">
        <CardHeader>
          <Heading fontSize="25px">Suggested for you</Heading>
        </CardHeader>
        <CardBody>
          <Stack spacing="2">
            {user?.map((data: any) => {
              return (
                <div key={data.id}>
                  <SuggestFollow item={data} />
                </div>
              );
            })}
          </Stack>
        </CardBody>
      </Card>
    </>
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
