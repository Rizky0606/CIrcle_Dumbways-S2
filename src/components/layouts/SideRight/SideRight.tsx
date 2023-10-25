// import React from "react";
import { Box } from "@chakra-ui/react";

import Profile from "../../Profile/Profile";
import SuggestedFollow from "../../SuggestedFollow/SuggestedFollow";

const SideRight = () => {
  return (
    <Box width="100%">
      <Profile />
      <SuggestedFollow />
    </Box>
  );
};

export default SideRight;
