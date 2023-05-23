import React, { useContext } from "react";
import styled from "styled-components";
import profile from "../assets/profile.webp";
import background from "../assets/background.jpg";
import background2 from "../assets/bcg2.jpg";
import ThemeContext from "../commons/Context";
import info from "../data";
const Contactinfos = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Container theme={theme} id="infos">
      <span className="color" />
      <div className="container">
        <img
          className="imgDiv"
          src={profile}
          alt=""
          data-aos="fade-right"
          data-aos-duration="2000"
        />
        <div className="list" data-aos="fade-right" data-aos-duration="2000">
          <ul>
            {" "}
            {/* <p className="nameHeader"> Jamila Israfilzadeh</p> */}
            <p>Frontend Developer</p>
            <li>
              Phone:
              <p>{info.phone}</p>
            </li>
            <li>
              Email:
              <p>{info.email}</p>
            </li>
            <li>
              Portfolio:
              <a href={info.portfolio} target="_blank" rel="noreferrer">
                https://github.com/cemileisrafilzade/
              </a>
            </li>
            <li>
              LinkedIn:
              <a href={info.linkedin} target="_blank" rel="noreferrer">
                {info.linkedin}
              </a>
            </li>
            <li>
              Date of birth:
              <p>March 3rd, 2000</p>
            </li>
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
  background-image: url(${(props) =>
    props.theme !== "dark" ? background : background2});
  background-attachment: fixed;
  background-size: cover;
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
  .container {
    padding: 3%;
    width: 85%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 5% auto;
    justify-content: center;
    position: relative;
    @media screen and (max-width: 800px) {
      width: 100% !important;
    }
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
    background-color: ${(props) =>
      props.theme !== "dark" ? "#f1f1f1" : "#182153"};
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    text-align: left;
    padding-left: 20px !important;
    @media screen and (max-width: 800px) {
      padding-left: 10px !important;
    }
    p,
    a {
      text-decoration: none;

      cursor: pointer;
    }
    a {
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
    .imgDiv {
      margin-top: 5%;
    }
    ul > p,
    ul > a {
      font-size: 14px;
    }
  }
`;
