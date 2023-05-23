import React from "react";
import styled from "styled-components";
import phoneShop from "../assets/projects/phone-shop.png";
import journey from "../assets/projects/journey.png";
import netflix from "../assets/projects/netflix.png";
import taskool from "../assets/projects/taskool.mp4";
import huddle from "../assets/projects/huddle.mp4";
import ham from "../assets/projects/theHam.mp4";
import createNote from "../assets/projects/createNote.mp4";
import findGiphy from "../assets/projects/findGiphy.mp4";
import knowladge from "../assets/projects/knowladge.mp4";
import musica from "../assets/projects/musica.mp4";
import numberPricing from "../assets/projects/numberPricing.mp4";
import aqrotexnika from "../assets/projects/aqrotexnika.mp4";
import avarageCalculator from "../assets/projects/avarageCalculator.mp4";
import shopsite from "../assets/projects/shopsite.mp4";
import cities from "../assets/projects/editCities.mp4";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <h2>Some Example Projects</h2>
      <h3>Click the project to see projects and codes</h3>
      <div>
        <div className="container">
          <a href="https://www.taskool.com/" rel="noreferrer" target="_blank">
            <video
              data-aos="fade-right"
              data-aos-duration="1200"
              muted
              autoPlay
              loop
              src={taskool}
            />
          </a>
          <a href="https://aqrotexnika.az/" rel="noreferrer" target="_blank">
            <video
              data-aos="fade-right"
              data-aos-duration="1200"
              muted
              autoPlay
              loop
              src={aqrotexnika}
            />
          </a>
          <a
            href="https://easyshopbyjamila.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            <video
              data-aos="fade-right"
              data-aos-duration="1200"
              muted
              autoPlay
              loop
              src={shopsite}
            />
          </a>
          <a
            href="https://knowledgebyjamila.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            <video
              data-aos="fade-right"
              data-aos-duration="1200"
              muted
              autoPlay
              loop
              src={knowladge}
            />
          </a>

          <a
            href="https://github.com/cemileisrafilzade/Journey"
            rel="noreferrer"
            target="_blank"
          >
            <img
              data-aos="fade-right"
              data-aos-duration="1200"
              src={journey}
              alt=""
            />
          </a>

          <a
            href="https://github.com/cemileisrafilzade/Musica"
            rel="noreferrer"
            target="_blank"
          >
            <video
              data-aos="fade-right"
              data-aos-duration="1200"
              muted
              autoPlay
              loop
              src={musica}
            />
          </a>
          <a
            href="https://github.com/cemileisrafilzade/theHam"
            rel="noreferrer"
            target="_blank"
          >
            <video
              data-aos="fade-right"
              data-aos-duration="1200"
              muted
              autoPlay
              loop
              src={ham}
            />
          </a>
          <a
            href="https://github.com/cemileisrafilzade"
            rel="noreferrer"
            target="_blank"
          >
            <img
              data-aos="fade-right"
              data-aos-duration="1200"
              src={netflix}
              alt=""
            />
          </a>
          <a
            href="https://github.com/cemileisrafilzade/huddle"
            rel="noreferrer"
            target="_blank"
          >
            <video
              data-aos="fade-right"
              data-aos-duration="1200"
              muted
              autoPlay
              loop
              src={huddle}
            />
          </a>
          <a
            href="https://github.com/cemileisrafilzade/Create-Note-App"
            rel="noreferrer"
            target="_blank"
          >
            <video
              data-aos="fade-right"
              data-aos-duration="1200"
              muted
              autoPlay
              loop
              src={createNote}
            />
          </a>
          <a
            href="https://editcitiesbyjamila.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <video
              data-aos="fade-right"
              data-aos-duration="1200"
              muted
              autoPlay
              loop
              src={cities}
            />
          </a>
          <a
            href="https://github.com/cemileisrafilzade/giphy-Api"
            rel="noreferrer"
            target="_blank"
          >
            <video
              data-aos="fade-right"
              data-aos-duration="1200"
              muted
              autoPlay
              loop
              src={findGiphy}
            />
          </a>
          <a
            href="https://github.com/cemileisrafilzade/Lucid"
            rel="noreferrer"
            target="_blank"
          >
            <img
              data-aos="fade-right"
              data-aos-duration="1200"
              src={phoneShop}
              alt=""
            />
          </a>
          <a
            href="https://github.com/cemileisrafilzade/number-pricing"
            rel="noreferrer"
            target="_blank"
          >
            <video
              data-aos="fade-right"
              data-aos-duration="1200"
              muted
              autoPlay
              loop
              src={numberPricing}
            />
          </a>
          <a
            href="https://github.com/cemileisrafilzade/score-Calculation"
            rel="noreferrer"
            target="_blank"
          >
            <video
              data-aos="fade-right"
              data-aos-duration="1200"
              muted
              autoPlay
              loop
              src={avarageCalculator}
            />
          </a>
        </div>
      </div>
    </ProjectsContainer>
  );
};

export default Projects;

const ProjectsContainer = styled.div`
  padding: 10px 40px;
  width: 100%;
  .container {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 20px;
    @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
    }
  }
  img,
  video {
    width: 100%;
    /* margin: 25px; */
    object-fit: contain;
    border-radius: 5px;
    cursor: pointer;
    :hover {
      transition: 0.5s;
      opacity: 0.3;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.123);
    }
  }
  h2 {
    margin: 30px auto;
  }
  div {
    /* margin-bottom: 100px; */
  }
`;
