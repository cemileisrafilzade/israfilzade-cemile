import React, { useState } from "react";
import Header from "./Header";
import { MantineProvider } from "@mantine/core";
import styled from "styled-components";
import { BsMoonStars, BsSun } from "react-icons/bs";
import ThemeContext from "./Context";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const value = { theme, setTheme };

  return (
    <ThemeContext.Provider value={value}>
      <Container theme={theme}>
        <MantineProvider theme={{ fontFamily: "Open Sans" }}>
          <div>
            <Header />
            <div>{children}</div>
          </div>
        </MantineProvider>
        <div
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="themeChanger"
        >
          {theme !== "light" ? (
            <>
              <BsSun className="light" />
            </>
          ) : (
            <BsMoonStars className="dark" />
          )}
        </div>
      </Container>
    </ThemeContext.Provider>
  );
};

export default Layout;
const Container = styled.div`
  scroll-behavior: smooth;
  background-color: ${(props) => (props.theme === "dark" ? "#182153" : "#fff")};
  h1,
  h2,
  h3,
  li,
  p,
  a,
  span {
    color: ${(props) =>
      props.theme === "dark" ? "#fff" : "#182153"} !important;
  }
  .themeChanger {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px !important;
    height: 50px !important;
    color: #fff;
    /* writing-mode: vertical-rl;
    text-orientation: upright; */
    cursor: pointer;

    font-size: 25px;
    gap: 8px;
    .light,
    .dark {
      border-radius: 100%;
      padding: 10px;
      width: 100%;
      height: 100%;
      font-weight: bolder;
      transition: 3s ease-in-out;
    }
    .light {
      border: 2px solid #e47133;
      fill: #e47133;
      background-color: #fff;
    }
    .dark {
      background-color: #182153;
      border: 2px solid #d9e135;
      fill: #d9e135;
    }
  }
`;
