import { API } from "@/libs/api";
import { RootState } from "@/store/type/RootState";
import { Box, Button, Grid, Image, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

type DataUser = {
  id: number;
  full_name: string;
  username: string;
  photo_profile: string;
};
const Follow = () => {
  const loginSession = useSelector((state: RootState) => state.auth);
  const userId = loginSession.id;
  const [dataUser, setDataUser] = useState<DataUser[]>([]);

  const fetchData = async () => {
    const response = await API.get("/users");
    setDataUser(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      <Box mt="40px" fontWeight={"bold"} fontSize={"40px"}>
        <Text>Follow</Text>
      </Box>
      <Grid gridTemplateColumns={"1fr"}>
        <Box w="100%">
          {dataUser.map((user) => (
            <div key={user.id}>
              {user.id !== userId && (
                <Box key={user.id}>
                  <Link to={`/detail-profile/${user.id}`}>
                    <Box
                      display={"flex"}
                      flexDirection={"row"}
                      alignItems={"center"}
                      my="30px"
                    >
                      <Box>
                        <Image
                          src={user.photo_profile}
                          alt={user.full_name}
                          objectFit="cover"
                          borderRadius="full"
                          w="50px"
                          h="50px"
                        />
                      </Box>
                      <Box
                        ml="20px"
                        display="grid"
                        gridTemplateColumns={"1fr 1fr"}
                      >
                        <Box>
                          <Text>{user.full_name}</Text>
                          <Text>{user.username}</Text>
                        </Box>
                        <Box>
                          <Button>Follow</Button>
                        </Box>
                      </Box>
                    </Box>
                  </Link>
                </Box>
              )}
            </div>
          ))}
        </Box>
      </Grid>
    </Box>
  );
};

export default Follow;
