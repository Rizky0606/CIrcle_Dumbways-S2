// import React from 'react'
import { Container, Box } from "@chakra-ui/react";
import DetailThread from "@/pages/detailThreads";

const DetailThreads = () => {
  return (
    <Container
      maxW="container.2xl"
      m="0"
      p="0"
      bg="#1D1D1D"
      color="white"
      // height={"100vh"}
    >
      <Box w="100%">
        <DetailThread />
      </Box>
    </Container>
  );
};

export default DetailThreads;
