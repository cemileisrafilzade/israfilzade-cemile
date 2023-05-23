import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import info from "../data";
import ThemeContext from "./Context";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  function scrollToX(pathX) {
    document.querySelector(`#${pathX}`).scrollIntoView({
      behavior: "smooth",
    });
  }
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [IsDesktop, setIsDesktop] = useState();
  useEffect(() => {
    const size = window.innerWidth;
    if (size > 800) {
      setMobileMenuOpen(true);
      setIsDesktop(true);
    } else {
      setMobileMenuOpen(false);
      setIsDesktop(false);
    }
  }, []);
  console.log(theme);
  const handleBurgerMenu = (e) => {
    // e.preventDefault();
    setMobileMenuOpen(!mobileMenuOpen);
    setChecked(!checked);
  };
  return (
    <HeaderContainer theme={theme}>
      <h1>{info.fullName}</h1>

      <section className="top-nav">
        <input
          checked={checked}
          id="menu-toggle"
          type="checkbox"
          onChange={handleBurgerMenu}
        />
        <label className="menu-button-container" for="menu-toggle">
          <div className="menu-button"></div>
        </label>
      </section>
      {mobileMenuOpen && (
        <ul
          onClick={!IsDesktop && handleBurgerMenu}
          className={`desktopNav ${mobileMenuOpen ? "active" : ""}`}
        >
          <li onClick={() => scrollToX("infos")}>Top</li>
          <li onClick={() => scrollToX("experience")}>Experience</li>
          <li onClick={() => scrollToX("education")}>Education</li>
          <li onClick={() => scrollToX("skills")}>Skills</li>
          <li onClick={() => scrollToX("projects")}>Projects</li>
        </ul>
      )}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 5;
  /* background-color: #f5f5f5; */
  background-color: ${(props) =>
    props.theme === "dark" ? "#000f62" : "#f5f5f5;"};
  border-bottom: 1px solid #fff;
  position: fixed;
  box-sizing: border-box;
  justify-content: space-around;
  @media (max-width: 800px) {
    justify-content: space-between;
    padding: 0 20px;
    h1 {
      font-size: 24px !important;
    }
  }
  h1 {
    font-weight: 500;
  }
  .desktopNav {
    display: flex;
    list-style: none;
  }
  .desktopNav > li {
    padding: 10px 25px;
    text-transform: uppercase;
    cursor: pointer;
    :hover,
    :focus {
      opacity: 0.6;
    }
    @media (max-width: 1000px) {
      padding: 10px;
    }
  }
  @media screen and (max-width: 800px) {
    .desktopNav {
      display: block;
      position: fixed;
      background-color: ${(props) =>
        props.theme !== "dark" ? "#f5f5f5" : "#000f62"};
      border: 1px solid #fff;
      top: 8%;
      left: 50%;
      transform: translateX(-50%);
      width: 98%;
      text-align: left;
      padding-right: 10px;
      opacity: 0;
    }
    .desktopNav li {
      margin: 0 auto;
      border-bottom: 1px solid
        ${(props) => (props.theme === "dark" ? "#fff" : "#1821531b")};

      /* border-bottom: 1px solid #1821531b; */
    }
    .desktopNav.active {
      transition: all 0.3s ease-in-out;
      top: 8%;
      opacity: 1;
      border-radius: 5px;
      box-shadow: 1px 1px 1px 1px
        ${(props) => (props.theme ? "#18215316" : "#fff")};
      @media screen and (max-width: 320px) {
        top: 12%;
      }
    }
  }
  @import url(https://fonts.googleapis.com/css?family=Raleway);
  h2 {
    vertical-align: center;
    text-align: center;
  }

  .top-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    height: 50px;
    padding: 1em;
    display: none;
    @media (max-width: 800px) {
      display: block;
    }
  }

  .menu-button-container {
    display: none;
    height: 100%;
    width: 30px;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #menu-toggle {
    display: none;
  }

  .menu-button,
  .menu-button::before,
  .menu-button::after {
    display: block;
    background-color: ${(props) =>
      props.theme !== "dark" ? "#182153" : "#fff"};
    position: absolute;
    height: 2px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 3px;
  }

  .menu-button::before {
    content: "";
    margin-top: -8px;
  }

  .menu-button::after {
    content: "";
    margin-top: 8px;
  }

  #menu-toggle:checked + .menu-button-container .menu-button::before {
    margin-top: 0px;
    transform: rotate(405deg);
  }

  #menu-toggle:checked + .menu-button-container .menu-button {
    background: rgba(255, 255, 255, 0);
  }

  #menu-toggle:checked + .menu-button-container .menu-button::after {
    margin-top: 0px;
    transform: rotate(-405deg);
  }

  @media (max-width: 800px) {
    .menu-button-container {
      display: flex;
    }
    .menu {
      position: absolute;
      top: 0;
      margin-top: 50px;
      left: 0;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
    }
    #menu-toggle ~ .menu li {
      height: 0;
      margin: 0;
      padding: 0;
      border: 0;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    #menu-toggle:checked ~ .menu li {
      border: 1px solid #333;
      height: 2.5em;
      padding: 0.5em;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }
    .menu > li {
      display: flex;
      justify-content: center;
      margin: 0;
      padding: 0.5em 0;
      width: 100%;

      background-color: #222;
    }
    .menu > li:not(:last-child) {
      border-bottom: 1px solid #444;
    }
  }
`;
