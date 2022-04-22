import React  from "react";
import Header from "./Header";
import { MantineProvider } from "@mantine/core";
import styled from "styled-components";
const Layout = ({ children }) => {

  return (
    <Container>
      <MantineProvider theme={{ fontFamily: "Open Sans" }}>
        <div>
          <Header />
          <div>{children}</div>
        </div>
      </MantineProvider>
    </Container>
  );
};

export default Layout;
const Container = styled.div`
scroll-behavior: smooth;
 
`;
