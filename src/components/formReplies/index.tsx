// import { useState } from "react";
// import { API } from "@/libs/api";
// import { Box, Image, Input, Button } from "@chakra-ui/react";
// import { useQueryClient, useMutation } from "@tanstack/react-query";

// type FormReply = {
//   content: string;
//   image?: string;
// };

// const FormReplies = () => {
//   const [keyword, setKeyword] = useState<FormReply>({
//     content: "",
//     image: "",
//   });

//   const QueryClient = useQueryClient();

//   const mutation = useMutation({
//     mutationFn: (newreplies: FormReply) => {
//       return API.post("/reply", newreplies);
//     },
//     onSuccess() {
//       QueryClient.invalidateQueries({ queryKey: ["detailThreads"] });
//       setKeyword({
//         content: "",
//         image: "",
//         // likeId:
//       });
//     },
//   });

//   const handleChangeInputReplies = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setKeyword({
//       ...keyword,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <Box display="flex" width="100%" alignItems={"center"}>
//       <Image
//         boxSize="100px"
//         width="30px"
//         height="30px"
//         borderRadius={"full"}
//         objectFit="cover"
//         src="https://bit.ly/dan-abramov"
//         alt="Dan Abramov"
//       />
//       <Input
//         name="content"
//         value={keyword.content}
//         onChange={handleChangeInputReplies}
//         placeholder="What is Happening ?!"
//         bg={"transparent"}
//         color={"gray.300"}
//         width="80%"
//         mx="20px"
//         pl="10px"
//         // height={"35px"}
//         // borderRadius="7px"
//         variant={"flushed"}
//       />
//       <Button
//         colorScheme="whatsapp"
//         // bg="green"
//         px="10px"
//         py="5px"
//         borderRadius={"7px"}
//         onClick={() => mutation.mutate(keyword)}
//       >
//         Button
//       </Button>
//     </Box>
//   );
// };

// export default FormReplies;
