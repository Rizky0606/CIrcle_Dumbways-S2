// import React from 'react'
import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import SideLeft from "../SideLeft/SideLeft";
import { Outlet } from "react-router-dom";
import SideRight from "./SideRight/SideRight";

const Layout = () => {
  return (
    <Container maxW="container.2xl" m="0" p="0" color="white">
      <Box w="100%">
        <Grid templateColumns="0.8fr 2fr 1.2fr" gap="3">
          <GridItem w="200px">
            <SideLeft />
          </GridItem>
          <GridItem>
            <Outlet />
          </GridItem>
          <GridItem w="100%">
            <SideRight />
          </GridItem>
        </Grid>
      </Box>
    </Container>
  );
};

export default Layout;
