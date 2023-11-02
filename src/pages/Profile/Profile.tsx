import { Box, Card, Image, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/type/RootState";

const Profile = () => {
  const user = useSelector((state: RootState) => state.auth);
  console.log(user);

  return (
    <Box mt="50px">
      <Box display={"flex"} justifyContent={"center"}>
        <Image
          src={user.photo_profile}
          boxSize="150px"
          objectFit="cover"
          alt={user.full_name}
          borderRadius="10px"
        />
      </Box>
      <Card bg="#262626" mt="40px" color="whiteAlpha.800" p="20px">
        <Box mt="10px">
          <Text fontSize="22px" fontWeight={"semibold"}>
            Full Name
          </Text>
          <Text fontSize="25px" fontWeight={"bold"} ml="20px">
            {user.full_name}
          </Text>
        </Box>
        <Box mt="10px">
          <Text fontSize="22px" fontWeight={"semibold"}>
            Username
          </Text>
          <Text fontSize="25px" fontWeight={"bold"} ml="20px">
            {user.username}
          </Text>
        </Box>
        <Box mt="10px">
          <Text fontSize="22px" fontWeight={"semibold"}>
            Email
          </Text>
          <Text fontSize="25px" fontWeight={"bold"} ml="20px">
            {user.email}
          </Text>
        </Box>
        <Box mt="10px">
          <Text fontSize="22px" fontWeight={"semibold"}>
            Bio
          </Text>
          <Text fontSize="25px" fontWeight={"bold"} ml="20px">
            {user.bio}
          </Text>
        </Box>
      </Card>
    </Box>
  );
};

export default Profile;
