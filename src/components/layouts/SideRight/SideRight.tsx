// import React from "react";
import { Box } from "@chakra-ui/react";

import Profile from "../../Profile/Profile";
import SuggestedFollow from "../../SuggestedFollow/SuggestedFollow";

const SideRight = () => {
  return (
    <Box maxW="400px" width="100%" position={"fixed"}>
      <Profile />
      <SuggestedFollow />
    </Box>
  );
};

export default SideRight;
