import React, { useContext } from "react";
import styled from "styled-components";
import background from "../assets/background.jpg";
import background2 from "../assets/bcg3.jpg";
import ThemeContext from "../commons/Context";
import { skills } from "../mockData/mockData";
const Skills = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <Container theme={theme} id="skills">
        <span className="color" />
        <div className="container">
          <h1 className="nameHeader">Skills and personal qualities</h1>
          <div className="list">
            {skills.map((item) => (
              <div data-aos="fade-right" data-aos-duration="1000">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skills;

const Container = styled.div`
  padding: 5%;
  position: relative;
  background-size: cover !important;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-image: url(${(props) =>
    props.theme !== "dark" ? background : background2});

  @media screen and (max-width: 500px) {
    padding: 1%;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    justify-content: center;
    position: relative;
    z-index: 1;
  }

  .nameHeader {
    font-size: 25px;
    font-weight: 400;
    padding-bottom: 17px;
    color: ${(props) =>
      props.theme !== "dark" ? "#fff" : "#182153"} !important;
  }

  .list {
    display: grid;
    grid-template-columns: auto auto;
    div {
      margin: 20px;
      background-color: #f1f1f12f;
      padding: 35px;
      border: 1px solid #182153;
      max-width: 400px;
      color: ${(props) =>
        props.theme !== "dark" ? "#fff" : "#182153"} !important;
    }
  }
  /* } */

  .color {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.8;
    width: 100%;
    height: 100%;
    background-color: ${(props) =>
      props.theme !== "dark" ? "#182153" : "#ffffff1f"};
  }
  @media screen and (max-width: 800px) {
    .list {
      display: flex;
      flex-direction: column;
      div {
        box-sizing: border-box;
        width: 90%;
        padding: 20px;
        margin: 10px;
        font-size: 16px;
      }
    }
  }
`;
