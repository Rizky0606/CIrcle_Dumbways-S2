import { useState, useEffect } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
} from "@chakra-ui/react";
import { SmallCloseIcon } from "@chakra-ui/icons";
import { API } from "@/libs/api";

const EditProfile = () => {
  const [dataProfile, setDataProfile] = useState({
    id: 0,
    full_name: "",
    username: "",
    email: "",
    photo_profile: "",
    bio: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getData = async () => {
    const response = await API.get("/user/profile");
    setDataProfile(response.data.data);
    setIsLoading(false);
  };

  const handleChangeEditProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataProfile((prevStudent) => ({
      ...prevStudent,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(dataProfile);

  //   const handleEditProfile = () => {
  //     const config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     };
  //     API.patch(`/user/${dataProfile?.id}`, dataProfile, config);
  //   };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <Flex minH={"100vh"} align={"center"} justify={"center"}>
          <Stack
            spacing={4}
            w={"full"}
            maxW={"md"}
            rounded={"xl"}
            boxShadow={"lg"}
            p={6}
            // my={12}
          >
            <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
              User Profile Edit
            </Heading>
            <FormControl id="userName">
              <FormLabel>User Icon</FormLabel>
              <Stack direction={["column", "row"]} spacing={6}>
                <Center>
                  <Avatar size="xl" src={dataProfile?.photo_profile}>
                    <AvatarBadge
                      as={IconButton}
                      size="sm"
                      rounded="full"
                      top="-10px"
                      colorScheme="red"
                      aria-label="remove Image"
                      icon={<SmallCloseIcon />}
                    />
                  </Avatar>
                </Center>
                <Center w="full">
                  <Button w="full">Change Icon</Button>
                </Center>
              </Stack>
            </FormControl>
            <FormControl id="userName" isRequired>
              <FormLabel>User Name</FormLabel>
              <Input
                name="username"
                value={dataProfile?.username}
                onChange={handleChangeEditProfile}
                _placeholder={{ color: "gray.500" }}
                type="text"
              />
            </FormControl>
            <FormControl id="fullname" isRequired>
              <FormLabel>Full Name</FormLabel>
              <Input
                name="full_name"
                value={dataProfile?.full_name}
                onChange={handleChangeEditProfile}
                _placeholder={{ color: "gray.500" }}
                type="text"
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                name="email"
                value={dataProfile?.email}
                onChange={handleChangeEditProfile}
                _placeholder={{ color: "gray.500" }}
                type="email"
              />
            </FormControl>
            <FormControl id="bio" isRequired>
              <FormLabel>Bio</FormLabel>
              <Input
                name="bio"
                value={dataProfile?.bio}
                onChange={handleChangeEditProfile}
                _placeholder={{ color: "gray.500" }}
                type="text"
              />
            </FormControl>
            <Stack spacing={6} direction={["column", "row"]}>
              <Button
                bg={"red.400"}
                color={"white"}
                w="full"
                _hover={{
                  bg: "red.500",
                }}
              >
                Cancel
              </Button>
              <Button
                bg={"blue.400"}
                color={"white"}
                w="full"
                _hover={{
                  bg: "blue.500",
                }}
                // onClick={handleEditProfile}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Flex>
      )}
    </>
  );
};

export default EditProfile;
