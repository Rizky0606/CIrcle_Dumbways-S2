import { Box, Image, Text, Spinner, Input, Button } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { useDetailThreads } from "@/features/threads/Hooks";
import { handleDateThread } from "@/utils/convertTime";
import { useSelector } from "react-redux";
import { RootState } from "@/store/type/RootState";
import { useMutation } from "@tanstack/react-query";
import { API } from "@/libs/api";

const DetailThread = () => {
  const {
    keyword,
    navigate,
    detailThreads,
    mutation,
    isLoading,
    handleChangeInputReplies,
  } = useDetailThreads();

  const user = useSelector((state: RootState) => state.auth);
  const userId = user.id;
  const threadsId = detailThreads?.id;

  const isLiked = detailThreads?.likes.some(
    (like: any) => like.userId.id === userId
  );

  const postLiked = useMutation({
    mutationFn: (like) => {
      return API.post(`/thread/${threadsId}/like`, like);
    },
  });

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Box mt="20px" minH={"100vh"} className="scroll">
          <Box display={"flex"} alignItems={"center"} my="20px">
            <Box
              _hover={{
                bgColor: "white",
                color: "black",
                borderRadius: "full",
                cursor: "pointer",
              }}
              onClick={() => navigate(-1)}
            >
              <IoIosArrowBack style={{ fontSize: "40px" }} />
            </Box>
            <Text fontSize={"30px"} fontWeight={"bold"} ml="20px">
              Threads
            </Text>
          </Box>

          {/* Thread */}
          <Box color={"white"} display={"flex"} mt="20px">
            <Image
              src={detailThreads?.userId.photo_profile}
              width={"30px"}
              height={"30px"}
              borderRadius={"full"}
            />
            <Box>
              <Box display={"flex"}>
                <h2 style={{ marginLeft: "10px", fontWeight: "bold" }}>
                  {detailThreads?.userId.full_name}
                </h2>
                <Text color={"#6F6F6F"} mr="10px" ml="10px">
                  {detailThreads?.userId.username}
                </Text>
                <Text>{handleDateThread(detailThreads?.created_at)}</Text>
              </Box>
              <Text ml="10px">{detailThreads?.content}</Text>
              {detailThreads?.image && (
                <Image
                  src={detailThreads?.image}
                  alt={detailThreads?.content}
                  borderRadius={"10px"}
                  m="10px 0 0 10px"
                />
              )}
              <Box display={"flex"} m="10px 0 0 10px" alignItems={"center"}>
                <Box display={"flex"} alignItems={"center"}>
                  <Box
                    onClick={() => postLiked.mutate()}
                    display={"flex"}
                    alignItems={"center"}
                    cursor={"pointer"}
                    color={isLiked ? "red" : "white"}
                  >
                    <AiFillHeart size="25px" color={isLiked ? "red" : ""} />
                    <h2 style={{ margin: "0 5px 0 5px" }}>
                      {detailThreads?.likes.length}
                    </h2>
                  </Box>
                </Box>
                <Box display={"flex"} alignItems={"center"} ml="15px">
                  <BiCommentDetail size="25px" />
                  <h2 style={{ marginLeft: "5px" }}>
                    {detailThreads.replies.length}
                    <span style={{ marginLeft: "5px" }}>replies</span>
                  </h2>
                </Box>
              </Box>
            </Box>
          </Box>
          {/* End Thread */}

          {/* Input Replies */}
          <Box mt="20px">
            <Box display="flex" width="100%" alignItems={"center"}>
              <Image
                boxSize="100px"
                width="30px"
                height="30px"
                borderRadius={"full"}
                objectFit="cover"
                src={user.photo_profile}
                alt={user.full_name}
              />
              <Input
                name="content"
                value={keyword.content}
                onChange={handleChangeInputReplies}
                bg={"transparent"}
                placeholder="Replies Thread"
                color={"gray.300"}
                width="80%"
                mx="20px"
                pl="10px"
                // height={"35px"}
                // borderRadius="7px"
                variant={"flushed"}
              />

              <Button
                colorScheme="whatsapp"
                // bg="green"
                px="10px"
                py="5px"
                borderRadius={"7px"}
                onClick={() => mutation.mutate(keyword)}
              >
                Button
              </Button>
            </Box>
          </Box>
          {/* End Input Replies */}

          {/* Replies */}
          <Box mb="30px">
            {detailThreads?.replies.length === 0 ? (
              <Text
                align="center"
                mt="150px"
                fontWeight={"semibold"}
                fontSize={"30px"}
                color="whiteAlpha.300"
              >
                Replies Not Found
              </Text>
            ) : (
              <>
                {detailThreads.replies?.map((reply: any) => (
                  <Box mt="50px" key={reply.id}>
                    <Box color={"white"} display={"flex"} mt="20px">
                      <Image
                        src={reply.userId.photo_profile}
                        width={"30px"}
                        height={"30px"}
                        borderRadius={"full"}
                      />
                      <Box>
                        <Box display={"flex"}>
                          <h2
                            style={{ marginLeft: "10px", fontWeight: "bold" }}
                          >
                            {reply.userId.full_name}
                          </h2>
                          <Text color={"#6F6F6F"} mr="10px" ml="10px">
                            {reply.userId.username}
                          </Text>
                          <Text>{handleDateThread(reply.created_at)}</Text>
                        </Box>
                        <Text ml="10px">{reply.content}</Text>
                        {reply.image && (
                          <Image
                            src={reply.image}
                            alt={reply.content}
                            borderRadius={"10px"}
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
                              display={"flex"}
                              alignItems={"center"}
                              cursor={"pointer"}
                            >
                              <AiFillHeart size="25px" />
                              <h2 style={{ margin: "0 5px 0 5px" }}>
                                {detailThreads.likes &&
                                  detailThreads?.likes.length}
                              </h2>
                            </Box>
                          </Box>
                          <Box display={"flex"} alignItems={"center"} ml="15px">
                            <BiCommentDetail size="25px" />
                            <h2 style={{ marginLeft: "5px" }}>
                              {detailThreads.replies.length}
                              <span style={{ marginLeft: "5px" }}>replies</span>
                            </h2>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </>
            )}
          </Box>
          {/* End Replies */}
        </Box>
      )}
    </>
  );
};

export default DetailThread;
