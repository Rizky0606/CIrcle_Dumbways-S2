import { API } from "@/libs/api";
import { RootState } from "@/store/type/RootState";
import { Box, Grid, Image, Input, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

type DataUser = {
  id: number;
  full_name: string;
  username: string;
  photo_profile: string;
};
const SearchUser = () => {
  const loginSession = useSelector((state: RootState) => state.auth);
  const [dataUser, setDataUser] = useState<DataUser[]>([]);
  const [filteringUser, setFilteringUser] = useState<DataUser[]>([]);

  const fetchData = async () => {
    const response = await API.get("/users");
    setDataUser(response.data);
    setFilteringUser(response.data);
  };
  const handleChangeInputUser = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const keyword = e.target.value;
    const filteredUser = dataUser.filter((user) => {
      return (
        user.username.toLowerCase().includes(keyword.toLowerCase()) ||
        user.full_name.toLowerCase().includes(keyword.toLowerCase())
      );
    });
    setFilteringUser(filteredUser);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box>
      <Box mt="40px" fontWeight={"bold"} fontSize={"40px"}>
        <Text>Search User</Text>
      </Box>
      <Box mt="50px">
        <Input
          name="inputUser"
          placeholder="Search User"
          onChange={handleChangeInputUser}
        />
      </Box>
      <Box>
        <Grid gridTemplateColumns={"1fr"}>
          <Box w="100%">
            {filteringUser.length > 0 ? (
              <>
                {filteringUser.map((user) => (
                  <div key={user.id}>
                    {user.id !== loginSession.id && (
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
                            <Box ml="20px">
                              <Text>{user.full_name}</Text>
                              <Text>{user.username}</Text>
                            </Box>
                          </Box>
                        </Link>
                      </Box>
                    )}
                  </div>
                ))}
              </>
            ) : (
              <Text
                align="center"
                mt="150px"
                fontWeight={"semibold"}
                fontSize={"30px"}
                color="whiteAlpha.300"
              >
                User Not Found
              </Text>
            )}
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default SearchUser;
