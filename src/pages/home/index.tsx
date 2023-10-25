// import React from "react";
import Thread from "@/features/threads/component/Thread";
import SideLeft from "@/components/SideLeft/SideLeft";
import { Container, GridItem, Grid, Box } from "@chakra-ui/react";
import SideRight from "@/components/layouts/SideRight/SideRight";

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: "#1d1d1d",
        minHeight: "100vh",
        // height: "100vh",
        // height: "100vh",
      }}
    >
      <Container maxW="container.2xl" m="0" p="0" color="white">
        <Box w="100%">
          <Grid templateColumns="0.8fr 2fr 1.2fr" gap="3">
            <GridItem w="200px">
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
    </div>
  );
};

export default Home;
