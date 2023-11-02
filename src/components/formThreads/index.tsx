import { Box, Image, Input, Button } from "@chakra-ui/react";
import { BiSolidImageAdd } from "react-icons/bi";
import { postThreads } from "@/features/threads/Hooks";
import { useSelector } from "react-redux";
import { RootState } from "@/store/type/RootState";
const FormThreads = () => {
  const {
    keyword,
    // handlePostThreads,
    mutate,
    isPending,
    handleChangeInputThread,
  } = postThreads();

  const user = useSelector((state: RootState) => state.auth);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          mutate();
        }}
        // onSubmit={onSubmit}
        encType="mutlipart/form-data"
      >
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
            placeholder="What is Happening ?!"
            bg={"transparent"}
            color={"gray.300"}
            width="80%"
            value={keyword.content}
            mx="20px"
            pl="10px"
            variant={"flushed"}
            onChange={handleChangeInputThread}
          />

          <label htmlFor="image" style={{ cursor: "pointer" }}>
            <BiSolidImageAdd
              size="35px"
              style={{
                marginRight: "10px",
              }}
            />
            <Input
              name="image"
              id="image"
              type="file"
              placeholder="Images"
              bg={"transparent"}
              color={"gray.300"}
              width="80%"
              mx="20px"
              // pl="10px"
              variant={"flushed"}
              onChange={handleChangeInputThread}
              hidden
            />
          </label>

          <Button
            colorScheme="whatsapp"
            borderRadius={"7px"}
            type="submit"
            isLoading={isPending}
          >
            Button
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default FormThreads;
