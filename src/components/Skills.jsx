import React from "react";
import styled from "styled-components";
import background from "../assets/background.jpg";
const Skills = () => {
  return (
    <div>
      <Container id="skills">
        <span className="color" />
        <div className="container">
          <div className="list">
            <div data-aos="fade-right" data-aos-duration="1000">
              Microsoft Office Programs
            </div>
            <div data-aos="fade-right" data-aos-duration="1150">
              HTML , CSS, Bootstrap, Mantine{" "}
            </div>
            <div data-aos="fade-right" data-aos-duration="1250">
              React Js{" "}
            </div>
            <div data-aos="fade-right" data-aos-duration="1350">
              Adobe XD , Figma, Trello, Git
            </div>
            <div data-aos="fade-right" data-aos-duration="1500">
              English - intermediate{" "}
            </div>
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
  background-image: url(${background});
  background-attachment: fixed;
  background-size: cover;
  .container {
    display: flex;
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
    color: #2c2c2c;
  }
  .list {
    display: grid;
    grid-template-columns: auto auto;
    align-content: stretch;
    div {
      margin: 20px;
      background-color: #f1f1f12f;
      color: #fff;
      padding: 35px;
      width: 350px;
    }
  }

  .color {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.8;
    width: 100%;
    height: 100%;
    background-color: #182153;
  }
  @media screen and (max-width: 800px) {
    .list {
      display: flex;
      flex-direction: column;
      div{
        box-sizing: border-box;
        width: 300px;
        
      }
    }
  }
`;
