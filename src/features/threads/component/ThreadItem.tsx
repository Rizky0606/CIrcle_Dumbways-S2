import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Image, Text, Divider } from "@chakra-ui/react";
import { DataThreads } from "@/types/TypeThreads";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";

type ThreadItemsApi = {
  api: DataThreads[] | null;
};

const ThreadItem: React.FC<ThreadItemsApi> = ({ api }) => {
  const [isLike, setIsLike] = useState<boolean>(false);

  const handleLikedPost = () => {
    setIsLike(!isLike);
  };

  return (
    <>
      {api?.map((post: DataThreads) => (
        <div key={post.id}>
          <Box color={"white"} display={"flex"} mt="20px">
            <Image
              src={post.userId.photo_profile}
              width={"30px"}
              height={"30px"}
              borderRadius={"full"}
            />
            <Box>
              <Box display={"flex"}>
                <h2 style={{ marginLeft: "10px", fontWeight: "bold" }}>
                  {post.userId.full_name}
                </h2>
                <Text color={"#6F6F6F"} mr="10px" ml="10px">
                  {post.userId.username}
                </Text>
                <Text>{post.created_at}</Text>
              </Box>
              <Text ml="10px">{post.content}</Text>
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.content}
                  borderRadius={"10px"}
                  m="10px 0 0 10px"
                />
              )}
              <Box display={"flex"} m="10px 0 0 10px" alignItems={"center"}>
                <Box display={"flex"} alignItems={"center"}>
                  <Box
                    onClick={handleLikedPost}
                    display={"flex"}
                    alignItems={"center"}
                    cursor={"pointer"}
                  >
                    <AiFillHeart color={isLike ? "red" : ""} size="25px" />
                    <h2 style={{ margin: "0 5px 0 10px", fontSize: "20px" }}>
                      {post.likes.length}
                    </h2>
                  </Box>
                </Box>
                <Link to={`/detail-thread/${post.id}`} key={post.id}>
                  <Box display={"flex"} alignItems={"center"} ml="15px">
                    <BiCommentDetail size="25px" />
                    <h2 style={{ margin: "0 5px 0 10px", fontSize: "20px" }}>
                      {post.replies.length}
                      <span style={{ marginLeft: "5px" }}>replies</span>
                    </h2>
                  </Box>
                </Link>
              </Box>
            </Box>
          </Box>
          <Divider my="10px" />
        </div>
      ))}
    </>
  );
};

export default ThreadItem;
