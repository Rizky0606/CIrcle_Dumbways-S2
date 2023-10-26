import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  // useColorModeValue,
  //   Link,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useRegister } from "../../hooks/useRegister";
const Register = () => {
  const { showPassword, setShowPassword, form, handleChangeInputRegister } =
    useRegister();

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bgColor={"#1d1d1d"}
      color="white"
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box w="500px" rounded={"lg"} bg={"#262626"} boxShadow={"lg"} p={8}>
          <Stack spacing="5">
            <HStack>
              <FormControl id="firstName" isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input
                  type="text"
                  name="fullname"
                  onChange={handleChangeInputRegister}
                  value={form.full_name}
                />
              </FormControl>
            </HStack>
            <HStack>
              <FormControl id="username" isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  name="username"
                  onChange={handleChangeInputRegister}
                  value={form.username}
                />
              </FormControl>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                onChange={handleChangeInputRegister}
                value={form.email}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  onChange={handleChangeInputRegister}
                  value={form.password}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Link to="/login">
              <Stack spacing={10} pt={2} w="100%">
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"green.500"}
                  color={"white"}
                  _hover={{
                    bg: "green.300",
                  }}
                >
                  Sign up
                </Button>
              </Stack>
            </Link>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link to="/auth/login">
                  <Text color={"blue.400"}>Login</Text>
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Register;
