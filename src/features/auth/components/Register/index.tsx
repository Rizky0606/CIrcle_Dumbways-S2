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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useRegister } from "../../hooks/useRegister";
const Register = () => {
  const {
    showPassword,
    setShowPassword,
    form,
    handleChangeInputRegister,
    mutation,
  } = useRegister();

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
                  name="full_name"
                  value={form.full_name}
                  onChange={handleChangeInputRegister}
                />
              </FormControl>
            </HStack>
            <HStack>
              <FormControl id="username" isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChangeInputRegister}
                />
              </FormControl>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChangeInputRegister}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChangeInputRegister}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"solid"}
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
                  onClick={() => mutation.mutate(form)}
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
