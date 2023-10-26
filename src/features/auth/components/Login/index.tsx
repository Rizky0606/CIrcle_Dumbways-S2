import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useLogin } from "../../hooks/useLogin";
const Login = () => {
  const {
    showPassword,
    setShowPassword,
    form,
    handleChangeInputLogin,
    handleLogin,
  } = useLogin();

  return (
    <Flex minH={"100vh"} align={"center"} bgColor={"#1d1d1d"} color="white">
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Login
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box w="500px" rounded={"lg"} bg={"#262626"} boxShadow={"lg"} p={8}>
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email or Username</FormLabel>
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChangeInputLogin}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChangeInputLogin}
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
            <Link to="/">
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"green.500"}
                  color={"white"}
                  _hover={{
                    bg: "green.300",
                  }}
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </Stack>
            </Link>
            <Stack pt={6}>
              <Text align={"center"}>
                Don't have account?{" "}
                <Link to="/auth/register">
                  <Text color={"blue.400"}>Register</Text>
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
