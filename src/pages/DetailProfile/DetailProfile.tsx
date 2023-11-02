import { useState, useEffect } from "react";
import { Box, Card, Image, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { API } from "@/libs/api";

type DataProfileUser = {
  full_name: string;
  photo_profile: string;
  bio: string;
  username: string;
  email: string;
};
const DetailProfile = () => {
  const [data, setData] = useState<any>();
  const params = useParams();

  const fetchUserProfile = async () => {
    const response = await API.get(`/user/${params.id}`);
    setData(response.data);
  };
  console.log(data);

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <Box mt="50px">
      <Box display={"flex"} justifyContent={"center"}>
        <Image
          src={data?.user?.photo_profile}
          boxSize="150px"
          objectFit="cover"
          alt={data?.user?.full_name}
          borderRadius="10px"
        />
      </Box>
      <Card bg="#262626" mt="40px" color="whiteAlpha.800" p="20px">
        <Box mt="10px">
          <Text fontSize="22px" fontWeight={"semibold"}>
            Full Name
          </Text>
          <Text fontSize="25px" fontWeight={"bold"} ml="20px">
            {data?.user?.full_name}
          </Text>
        </Box>
        <Box mt="10px">
          <Text fontSize="22px" fontWeight={"semibold"}>
            Username
          </Text>
          <Text fontSize="25px" fontWeight={"bold"} ml="20px">
            {data?.user?.username}
          </Text>
        </Box>
        <Box mt="10px">
          <Text fontSize="22px" fontWeight={"semibold"}>
            Email
          </Text>
          <Text fontSize="25px" fontWeight={"bold"} ml="20px">
            {data?.user?.email}
          </Text>
        </Box>
        <Box mt="10px">
          <Text fontSize="22px" fontWeight={"semibold"}>
            Bio
          </Text>
          <Text fontSize="25px" fontWeight={"bold"} ml="20px">
            {data?.user?.bio}
          </Text>
        </Box>
        <Box mt="10px">
          <Text fontSize="22px" fontWeight={"semibold"}>
            Follower
          </Text>
          <Text fontSize="25px" fontWeight={"bold"} ml="20px">
            {data?.follower?.length}
          </Text>
        </Box>
        <Box mt="10px">
          <Text fontSize="22px" fontWeight={"semibold"}>
            Following
          </Text>
          <Text fontSize="25px" fontWeight={"bold"} ml="20px">
            {data?.following?.length}
          </Text>
        </Box>
      </Card>
    </Box>
  );
};

export default DetailProfile;
