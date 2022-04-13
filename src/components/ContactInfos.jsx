import React from "react";
import styled from "styled-components";
import profile from "../assets/profile.webp";
import background from "../assets/background.jpg";
import info from "../data.json";
const Contactinfos = () => {
  return (
    <Container id="infos">
      <span className="color" />
      <div className="container">
        <img
          className="imgDiv"
          src={profile}
          alt=""
          data-aos="fade-right"
          data-aos-duration="2000"
        />
        <div className="list" data-aos="fade-left" data-aos-duration="2000">
          <ul>
            {" "}
            <p className="nameHeader"> Jamila Israfilzadeh</p>
            <p>Frontend Developer</p>
            <li>Phone:</li>
            <p>{info.phone}</p>
            <li>Email:</li>
            <p>{info.email}</p>
            <li>Portfolio:</li>
            <a href={info.portfolio}>https://github.com/cemileisrafilzade/</a>
            <li>LinkedIn:</li>
            <a href={info.linkedin}>{info.linkedin}</a>
            <li>Date of birth:</li>
            <p>March 3rd, 2000</p>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Contactinfos;

const Container = styled.div`
  padding: 5%;
  position: relative;
  background-image: url(${background});
  background-attachment: fixed;
  background-size: cover;

  .color {
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.8;
    width: 100%;
    height: 100%;
    background-color: #182153;
   
  }
  .container {
    padding: 3%;
    width: 85%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 5% auto;
    justify-content: center;
    position: relative;
  }

  .imgDiv {
    object-fit: cover;
    display: flex;
    height: 100%;
    width: 100%;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
   
  }
  .nameHeader {
    font-size: 25px;
    font-weight: 400;
    padding-bottom: 17px;
    color: #2c2c2c;
  }
  .list {
    display: flex;
    background-color: #f1f1f1;
  }

  ul {
    list-style: none;
    text-align: left;

    p,a {
      text-decoration: none;
      color: #2c2c2cce;
      cursor: pointer;

      
    }
    a{
      display: block;
      margin: 20px 0px;

    }
  }
  ul > li {
    font-weight: 600;
    font-size: 14px;
  }
  @media screen and (max-width: 800px) {
   width: 100%;
    .container {
    padding: 3%;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin: 5% auto;
    justify-content: center;
    position: relative;
  }
   .imgDiv{
margin-top: 5%;

   }
   ul>p,ul>a{
     font-size: 14px;
     
   }
  }
`;
