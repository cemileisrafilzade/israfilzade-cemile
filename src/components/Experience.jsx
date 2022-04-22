import React from "react";
import styled from "styled-components";

const Experience = () => {
  return (
    <div>
      <Container id="experience">
        <hr />
        <h1>Experience</h1>
        <ul>
          <div
            data-aos="fade-down"
            data-aos-duration="800"
            className="dot"
          ></div>
          <li>
            <h2 data-aos="fade-right" data-aos-duration="1200">
              2021 - 2022
            </h2>
            <p data-aos="fade-left" data-aos-duration="1200">
              <span>TASKOOL - TASKILLED <a href="http://www.taskool.com/" rel="noreferrer" target="_blank"> ( Taskool.com )</a></span>
              In order to participate in the internship as a student in the
              last year of the university, I applied and was accepted for the
              position of frontend developer intern at Taskool, which I met on
              the Internet. Through this site, I easily grasped many of the
              topics I had difficulty learning by experimenting on a
              real project.
            </p>
          </li>{" "}
          <div
            className="dot"
            data-aos="fade-down"
            data-aos-duration="800"
          ></div>
          <li>
            <h2 data-aos="fade-right" data-aos-duration="1200">
              02-04.2022
            </h2>
            <p data-aos="fade-left" data-aos-duration="1200">
              <span>ABB Tech Academy</span>I volunteered as an assistant mentor
              in programming classes for little children. Trying to answer
              children's questions, mastering the lessons with different
              experiences excited not only the children but also me. Working
              with children gave me a new and different experience. At the end
              of the course , we were awarded a certificate from the ABB Tech
              Academy.
            </p>
          </li>
          <div
            className="dot"
            data-aos="fade-down"
            data-aos-duration="800"
          ></div>
          <li>
            <h2 data-aos="fade-right" data-aos-duration="1200">
              12. 01. 2022
            </h2>
            <p data-aos="fade-left" data-aos-duration="1200">
              <span>AZERCELL HACKATON</span>It was an amazing experience for me.
              In there I knew a lot of people who interested or worked on
              developing sphere. Unfortunately we couldn't win competiton, but
              it was too interesting. Working with groups, competiton, time
              limit, finding idea and developing on it was unforgettable
              experience.
            </p>
          </li>
          <div
            className="dot"
            data-aos="fade-down"
            data-aos-duration="800"
          ></div>
          <li>
            <h2 data-aos="fade-right" data-aos-duration="1200">
              07-08.2019{" "}
            </h2>
            <p data-aos="fade-left" data-aos-duration="1200">
              <span>EUROPEAN YOUTH OLYMPİCS FESTİVAL(EYOF)</span>
              Although this field of experience was not exactly related to my
              specialization, it was a platform where I worked voluntarily for a
              few months. Here I assisted the German teams during the Olympic
              Games. It was a different and good experience for me.
            </p>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default Experience;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #182153;
  a{
    text-decoration: none;
  }
  hr {
    width: 100%;
    border: 0.1px solid #18215328;
  }
  h1 {
    font-weight: 500;
    font-size: 25px;
  }
  ul {
    width: 60%;
    list-style: none;
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 10px;
      background-color: #182153;
      margin-left: -5px;
      display: flex;
    }
  }

  ul > li {
    display: flex;
    justify-content: space-between;
    align-items: top;
    font-size: 15px;
    line-height: 2;
    opacity: 0.9;
    border-left: 0.6px solid #1821532f;
    position: relative;
    h2 {
      font-weight: 500;
      font-size: 20px;
      white-space: nowrap;
      padding: 0 20px;
    }
    span {
      font-weight: bold;
      color: #182153;
      display: block;
      padding: 10px 0;
    }
    p {
      text-align: left;
      padding-left: 20px;
      margin-left: 20px;
    }
  }
  @media screen and (max-width: 800px) {
    ul{
      width: 100%;
    }
    ul > li {
    display: flex;
    flex-direction: column;
    
   
   
    
  }
  }
`;
