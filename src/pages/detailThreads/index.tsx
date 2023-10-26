import { Link } from "react-router-dom";
import { Box, Image, Text, Spinner, Input, Button } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { BiSolidImageAdd } from "react-icons/bi";
import { useDetailThreads } from "@/features/threads/Hooks";

const DetailThread = () => {
  const {
    keyword,
    isLike,
    navigate,
    detailThreads,
    mutation,
    isLoading,
    handleChangeInputReplies,
    handleLikedPost,
  } = useDetailThreads();

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Box mt="20px" minH={"100vh"}>
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
                <Text>{detailThreads?.created_at}</Text>
              </Box>
              <Text ml="10px">{detailThreads?.content}</Text>
              <Image
                src={detailThreads?.image}
                alt={detailThreads?.content}
                borderRadius={"10px"}
                m="10px 0 0 10px"
              />
              <Box display={"flex"} m="10px 0 0 10px" alignItems={"center"}>
                <Box display={"flex"} alignItems={"center"}>
                  <Box
                    onClick={handleLikedPost}
                    display={"flex"}
                    alignItems={"center"}
                    cursor={"pointer"}
                  >
                    <AiFillHeart color={isLike ? "red" : ""} />
                    <h2 style={{ margin: "0 5px 0 5px" }}>
                      {detailThreads?.likes.length}
                    </h2>
                  </Box>
                </Box>
                <Link
                  to={`/detail-thread/${detailThreads?.id}`}
                  key={detailThreads?.id}
                >
                  <Box display={"flex"} alignItems={"center"} ml="15px">
                    <BiCommentDetail />
                    <h2 style={{ marginLeft: "5px" }}>
                      {detailThreads.replies.length}
                      <span style={{ marginLeft: "5px" }}>replies</span>
                    </h2>
                  </Box>
                </Link>
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
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
              <Input
                name="content"
                value={keyword.content}
                onChange={handleChangeInputReplies}
                placeholder="What is Happening ?!"
                bg={"transparent"}
                color={"gray.300"}
                width="80%"
                mx="20px"
                pl="10px"
                // height={"35px"}
                // borderRadius="7px"
                variant={"flushed"}
              />
              <Input
                name="image"
                value={keyword.image}
                onChange={handleChangeInputReplies}
                placeholder="What is Happening ?!"
                bg={"transparent"}
                color={"gray.300"}
                width="80%"
                mx="20px"
                pl="10px"
                // height={"35px"}
                // borderRadius="7px"
                variant={"flushed"}
              />
              <BiSolidImageAdd size="35px" style={{ marginRight: "10px" }} />
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
                      <h2 style={{ marginLeft: "10px", fontWeight: "bold" }}>
                        {reply.userId.full_name}
                      </h2>
                      <Text color={"#6F6F6F"} mr="10px" ml="10px">
                        {reply.userId.username}
                      </Text>
                      <Text>{reply.created_at}</Text>
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
                          onClick={handleLikedPost}
                          display={"flex"}
                          alignItems={"center"}
                          cursor={"pointer"}
                        >
                          <AiFillHeart color={isLike ? "red" : ""} />
                          <h2 style={{ margin: "0 5px 0 5px" }}>
                            {detailThreads.likes && detailThreads?.likes.length}
                          </h2>
                        </Box>
                      </Box>
                      <Link
                        to={`/detail-thread/${detailThreads?.id}`}
                        key={detailThreads?.id}
                      >
                        <Box display={"flex"} alignItems={"center"} ml="15px">
                          <BiCommentDetail />
                          <h2 style={{ marginLeft: "5px" }}>
                            {detailThreads.replies.length}
                            <span style={{ marginLeft: "5px" }}>replies</span>
                          </h2>
                        </Box>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
          {/* End Replies */}
        </Box>
      )}
    </>
  );
};

export default DetailThread;
