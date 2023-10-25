import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { API } from "@/libs/api";
import { Link } from "react-router-dom";
import { Box, Image, Text, Spinner } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import FormReplies from "@/components/formReplies";

const DetailThread = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [isLike, setIsLike] = useState<boolean>(false);

  const {
    data: detailThreads,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["detailThreads"],
    queryFn: async () => {
      const { data } = await API.get(`/thread/${params.id}`);
      return data;
    },
  });

  const handleLikedPost = () => {
    setIsLike(!isLike);
  };

  useEffect(() => {
    refetch();
  }, [refetch()]);

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
          {/* End Thread */}

          {/* Input Replies */}
          <Box mt="20px">
            <FormReplies />
          </Box>
          {/* End Input Replies */}

          {/* Replies */}
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
                  <Image
                    src={reply.image}
                    alt={reply.content}
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
          {/* End Replies */}
        </Box>
      )}
    </>
  );
};

export default DetailThread;
