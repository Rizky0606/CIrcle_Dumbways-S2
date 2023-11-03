import { API } from "@/libs/api";
import { RootState } from "@/store/type/RootState";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useSelector } from "react-redux";

const SuggestFollow = (props: any) => {
  const user = useSelector((state: RootState) => state.auth);
  const isFollow = props.item.follower.some(
    (follow: any) => follow.id === user.id
  );

  const mutation = useMutation({
    mutationFn: (suggestFollow) => {
      return API.post(`/follow/${props.item.id}`, suggestFollow);
    },
  });

  return (
    <>
      {props.item.id !== user.id && (
        <Box
          display="flex"
          width="100%"
          alignItems={"center"}
          key={props.item.id}
          justifyContent={"space-between"}
        >
          <Image
            src={props.item.photo_profile}
            rounded="full"
            w="30px"
            h="30px"
          />
          <Box p="10px" display={"flex"} flexDirection={"column"}>
            <Text noOfLines={1}>{props.item.full_name}</Text>
            <Text>@{props.item.username}</Text>
          </Box>
          {isFollow ? (
            <Button
              onClick={() => mutation.mutate()}
              variant={"outline"}
              color="white"
              _hover={{ color: "black", bgColor: "white" }}
            >
              Unfollow
            </Button>
          ) : (
            <Button
              onClick={() => mutation.mutate()}
              variant={"outline"}
              color="white"
              bgColor={"green.500"}
              _hover={{ bgColor: "transparent" }}
            >
              Follow
            </Button>
          )}
        </Box>
      )}
    </>
  );
};

export default SuggestFollow;
