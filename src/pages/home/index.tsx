// import React from "react";
import Thread from "@/features/threads/component/Thread";
import SideLeft from "@/components/SideLeft/SideLeft";
import { Container, GridItem, Grid, Box } from "@chakra-ui/react";
import SideRight from "@/components/layouts/SideRight/SideRight";

const Home = () => {
  return (
    <Container maxW="container.2xl" m="0" p="0" bg="#1D1D1D" color="white">
      <Box w="100%">
        <Grid templateColumns="1fr 2fr 1fr" gap="3">
          <GridItem w="300px">
            <SideLeft />
          </GridItem>
          <GridItem w="100%">
            <Thread />
          </GridItem>
          <GridItem w="100%">
            <SideRight />
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;
