import React from "react";
import { Link } from "react-router-dom";
import { Box, Image, Text, Divider } from "@chakra-ui/react";
import { DataThreads } from "@/types/TypeThreads";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { handleDateThread } from "@/utils/convertTime";
import { API } from "@/libs/api";
import { useSelector } from "react-redux";
import { RootState } from "@/store/type/RootState";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";

const ThreadItem: React.FC<DataThreads> = (props) => {
  const user = useSelector((state: RootState) => state.auth);
  const userId = user?.id;
  const threadsId = props?.id;
  const toast = useToast();

  const isLiked = props.likes.some((like: any) => like.userId.id === userId);

  const mutation = useMutation({
    mutationFn: (like) => {
      return API.post(`/thread/${threadsId}/like`, like);
    },
    onSuccess() {
      if (!isLiked) {
        toast({
          title: "Success like thread",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Success unlike thread",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
    },
  });
  return (
    <>
      <div key={props.id}>
        <Box color={"white"} display={"flex"} mt="20px">
          <Image
            src={props.userId.photo_profile}
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
                {props.userId.full_name}
              </Text>

              <Text fontSize={"30px"} px="10px">
                {" "}
                -{" "}
              </Text>

              <Text>{handleDateThread(props.created_at)}</Text>
            </Box>
            <Text color={"#6F6F6F"} mr="10px" ml="10px">
              {props.userId.username}
            </Text>
            <Text ml="10px">{props.content}</Text>
            {props.image && (
              <Image
                src={props?.image}
                alt={props?.content}
                borderRadius={"10px"}
                alignContent={"center"}
                m="10px 0 0 10px"
              />
            )}
            <Box display={"flex"} m="10px 0 0 10px" alignItems={"center"}>
              <Box display={"flex"} alignItems={"center"}>
                <Box
                  onClick={() => mutation.mutate()}
                  display={"flex"}
                  alignItems={"center"}
                  cursor={"pointer"}
                  color={isLiked === true ? "red" : "white"}
                >
                  <AiFillHeart size="25px" />
                  <h2 style={{ margin: "0 5px 0 10px", fontSize: "20px" }}>
                    {props.likes.length}
                  </h2>
                </Box>
              </Box>
              <Link to={`/detail-thread/${props.id}`} key={props.id}>
                <Box display={"flex"} alignItems={"center"} ml="15px">
                  <BiCommentDetail size="25px" />
                  <h2 style={{ margin: "0 5px 0 10px", fontSize: "20px" }}>
                    {props.replies.length}
                    <span style={{ marginLeft: "5px" }}>replies</span>
                  </h2>
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>
        <Divider my="10px" />
      </div>
    </>
  );
};

export default ThreadItem;
