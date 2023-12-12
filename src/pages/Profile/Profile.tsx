import {
  Box,
  Card,
  Divider,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import { handleDateThread } from "@/utils/convertTime";
import { useQuery } from "@tanstack/react-query";
import { API } from "@/libs/api";

const Profile = () => {
  const { data: dataProfile } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const { data } = await API.get("/user/profile");
      return data;
    },
    refetchInterval: 1000,
  });

  console.log(dataProfile);

  return (
    <>
      <Box mt="50px" className="scroll">
        <Card bg="#262626" mt="40px" color="whiteAlpha.800" p="20px">
          <Box display="flex" alignItems={"center"}>
            <Image
              src={dataProfile?.data?.photo_profile}
              boxSize="150px"
              objectFit="cover"
              alt={dataProfile?.data?.full_name}
              borderRadius="10px"
            />
            <Box>
              <Box mt="10px">
                <Text fontSize="20px" fontWeight={"bold"} ml="20px">
                  {dataProfile?.data?.username}
                </Text>
              </Box>
              <Box mt="10px">
                <Text fontSize="25px" fontWeight={"bold"} ml="20px">
                  {dataProfile?.data?.full_name}
                </Text>
              </Box>
              <Box mt="10px" display="flex">
                <Box display="flex" alignItems={"center"} mr="20px">
                  <Text fontSize="20px" fontWeight={"bold"} m="0 10px 0 20px">
                    {dataProfile?.follow.follower.length}
                  </Text>
                  <Text>Followers</Text>
                </Box>
                <Box display="flex" alignItems={"center"}>
                  <Text fontSize="20px" fontWeight={"bold"} m="0 10px 0 10px">
                    {dataProfile?.follow?.following.length}
                  </Text>
                  <Text>Following</Text>
                </Box>
              </Box>
              <Box mt="10px">
                <Text fontSize="17px" fontWeight={"bold"} ml="20px">
                  {dataProfile?.data?.bio}
                </Text>
              </Box>
            </Box>
          </Box>
        </Card>

        <Box>
          <Tabs>
            <TabList display={"flex"} justifyContent={"space-around"}>
              <Tab>Threads</Tab>
              <Tab>Two</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                {dataProfile?.data?.threads.length > 0 ? (
                  <>
                    {dataProfile?.data?.threads.map((thread: any) => {
                      return (
                        <div key={thread.id}>
                          <Box color={"white"} display={"flex"} mt="20px">
                            <Image
                              src={dataProfile?.data?.photo_profile}
                              width={"30px"}
                              height={"30px"}
                              mt="5px"
                              borderRadius={"full"}
                            />
                            <Box w="100%">
                              <Box alignItems={"center"} display="flex">
                                <Text
                                  style={{
                                    marginLeft: "10px",
                                    fontWeight: "bold",
                                    fontSize: "20px",
                                  }}
                                >
                                  {dataProfile?.data?.full_name}
                                </Text>

                                <Text fontSize={"30px"} px="10px">
                                  {" "}
                                  -{" "}
                                </Text>

                                <Text>
                                  {handleDateThread(thread.created_at)}
                                </Text>
                              </Box>
                              <Text color={"#6F6F6F"} mr="10px" ml="10px">
                                {dataProfile?.data?.username}
                              </Text>
                              <Text ml="10px">{thread.content}</Text>
                              {thread.image && (
                                <Image
                                  src={thread?.image}
                                  alt={thread?.content}
                                  borderRadius={"10px"}
                                  alignContent={"center"}
                                  m="10px 0 0 10px"
                                />
                              )}
                              <Box
                                display={"flex"}
                                m="10px 0 0 10px"
                                alignItems={"center"}
                              >
                                <Box display={"flex"} alignItems={"center"}>
                                  <Box
                                    // onClick={() => mutation.mutate()}
                                    display={"flex"}
                                    alignItems={"center"}
                                    cursor={"pointer"}
                                    // color={isLiked === true ? "red" : "white"}
                                  >
                                    <AiFillHeart size="25px" />
                                    <h2
                                      style={{
                                        margin: "0 5px 0 10px",
                                        fontSize: "20px",
                                      }}
                                    >
                                      {thread.likes.length}
                                    </h2>
                                  </Box>
                                </Box>
                                <Link
                                  to={`/detail-thread/${thread.id}`}
                                  key={thread.id}
                                >
                                  <Box
                                    display={"flex"}
                                    alignItems={"center"}
                                    ml="15px"
                                  >
                                    <BiCommentDetail size="25px" />
                                    <h2
                                      style={{
                                        margin: "0 5px 0 10px",
                                        fontSize: "20px",
                                      }}
                                    >
                                      {thread.replies.length}
                                      <span style={{ marginLeft: "5px" }}>
                                        replies
                                      </span>
                                    </h2>
                                  </Box>
                                </Link>
                              </Box>
                            </Box>
                          </Box>
                          <Divider my="10px" />
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <Text
                    align="center"
                    mt="150px"
                    fontWeight={"semibold"}
                    fontSize={"30px"}
                    color="whiteAlpha.300"
                  >
                    Threads Not Found
                  </Text>
                )}
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
};

export default Profile;
