// import React from 'react'
import { Container, Box, Grid, GridItem } from "@chakra-ui/react";
import SideLeft from "@/components/SideLeft/SideLeft";
import SideRight from "@/components/layouts/SideRight/SideRight";
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
        <Grid templateColumns="0.8fr 2fr 1.2fr" gap="3">
          <GridItem w="200px">
            <SideLeft />
          </GridItem>
          <GridItem w="100%">
            <DetailThread />
          </GridItem>
          <GridItem w="100%">
            <SideRight />
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
};

export default DetailThreads;
