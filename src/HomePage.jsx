import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "./commons/Layout";
import Contactinfos from "./components/ContactInfos";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const HomePage = () => {



  return (
    <Layout>
      <CardContainer>
        <Contactinfos />
        <Education/>
        <Experience />
        <Skills/>
        <Projects/>
      </CardContainer>
    </Layout>
  );
};
export default HomePage;

const CardContainer = styled.div`

`;
