import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Image, Text, Divider } from "@chakra-ui/react";
import { DataPosts } from "@/components/types/TypeThreads";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";

type ThreadItemsApi = {
  api: DataPosts[] | null;
};

const ThreadItem: React.FC<ThreadItemsApi> = ({ api }) => {
  const [isLike, setIsLike] = useState<boolean>(false);

  const handleLikedPost = () => {
    setIsLike(!isLike);
  };
  return (
    <>
      {api?.map((post: DataPosts) => (
        <>
          <Box color={"white"} display={"flex"} mt="20px" key={post.id}>
            <Image
              src={post.author_picture}
              width={"30px"}
              height={"30px"}
              borderRadius={"full"}
            />
            <Box>
              <Box display={"flex"}>
                <h2 style={{ marginLeft: "10px", fontWeight: "bold" }}>
                  {post.author_full_name}
                </h2>
                <Text color={"#6F6F6F"} mr="10px" ml="10px">
                  {post.author_username}
                </Text>
                <Text>{post.posted_at}</Text>
              </Box>
              <Text ml="10px">{post.content}</Text>
              <Image
                src={post.image}
                alt={post.content}
                borderRadius={"10px"}
                m="10px 0 0 10px"
              />
              <Box display={"flex"} m="10px 0 0 10px">
                <Box display={"flex"} alignItems={"center"}>
                  <Box onClick={handleLikedPost}>
                    <AiFillHeart color={isLike ? "red" : ""} />
                  </Box>
                  <h2 style={{ marginLeft: "5px" }}>{post.likes_count}</h2>
                </Box>
                <Link to={`/detail-thread/${post.id}`} key={post.id}>
                  <Box display={"flex"} alignItems={"center"} ml="15px">
                    <BiCommentDetail />
                    <h2 style={{ marginLeft: "5px" }}>{post.replies_count}</h2>
                  </Box>
                </Link>
              </Box>
            </Box>
          </Box>
          <Divider my="10px" />
        </>
      ))}
    </>
  );
};

export default ThreadItem;
