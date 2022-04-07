import React from "react";
import styled from "styled-components";
// import phoneShop from "../assets/projects/phone-shop.png";
// import journey from "../assets/projects/journey.png";
// import netflix from "../assets/projects/netflix.png";
// import huddle from "../assets/projects/huddle.avi";
import ham from "../assets/theHam.avi";
// import avarage from "../assets/projects/avarage.mp4";

const Projects = () => {
  return (
    <ProjectsContainer>
      <h2>Some Example Projects</h2>
      <div>
        <h3>HTML , CSS ,JS, Jquery , Bootstrap </h3>
        <div>
          {/* <img src={phoneShop} alt="" />
          <img src={journey} alt="" />
          <img src={netflix} alt="" /> */}
          {/* <video src=""></video> */}
          {/* <video loop autoPlay src="/theHam.avi" /> */}
          <video width={400} height={300} controls>
            <source src={ham} type="video/avi" />
          </video>
        </div>
      </div>
    </ProjectsContainer>
  );
};

export default Projects;

const ProjectsContainer = styled.div`
  img,
  video {
    width: 450px;
    margin: 15px;
    /* height: 300px; */
    object-fit: contain;
    background-color: gray;
    :hover {
      transform: scale(1.1);
      transition: all 0.4s ease-in-out;
    }
  }
`;
