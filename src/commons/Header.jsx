import React from "react";
import styled from "styled-components";
import info from "../data.json";
import { useScrollIntoView } from "@mantine/hooks";

const Header = () => {
  function scrollToX(pathX) {
    document.querySelector(`#${pathX}`).scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <HeaderContainer>
      <h1>{info.fullName}</h1>

      <ul>
        <li onClick={() => scrollToX("infos")}>Top</li>
        <li onClick={() => scrollToX("education")}>Education</li>
        <li onClick={() => scrollToX("experience")}>Experience</li>
        <li onClick={() => scrollToX("skills")}>Skills</li>
        <li onClick={() => scrollToX("projects")}>Projects</li>
      </ul>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 5;
  background-color: #fff;
  position: fixed;
  box-sizing: border-box;
  justify-content: space-around;
  h1 {
    font-weight: 500;
  }
  ul {
    display: flex;
    list-style: none;
  }
  ul > li {
    padding: 10px 25px;
    text-transform: uppercase;
    cursor: pointer;
    :hover,
    :focus {
      opacity: 0.6;
    }

  }
  @media screen and (max-width: 800px) {
    ul {
      display: none;
  }}
`;
