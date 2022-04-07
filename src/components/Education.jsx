import React from "react";
import styled from "styled-components";
const Education = () => {
  return (
    <Container id="education">
      <h1>Education</h1>
      <ul>
        <div className="dot" data-aos="fade-down" data-aos-duration="800"></div>
        <li>
          <h2 data-aos="fade-right" data-aos-duration="1200">
            2014 - 2017
          </h2>
          <p data-aos="fade-left" data-aos-duration="1200">
            <span>TÜRKİYE DIYANET VAKFI BAKI TÜRK LİSEYİ</span>
            Before here, I was study in number of 86 and "HFTML" schools. In
            2014, I was accepted to this school with an exam. During the my
            study years , I won various certificates and appreciation. And I
            finished secondary school with the good results I collected thanks
            to my school.
          </p>
        </li>
        <div className="dot" data-aos="fade-down" data-aos-duration="800"></div>
        <li>
          <h2 data-aos="fade-right" data-aos-duration="1200">
            2017 - 2022
          </h2>
          <p data-aos="fade-left" data-aos-duration="1200">
            <span>BAKU ENGİNEERİNG UNİVERSİTY</span>I was accepted to the
            computer engineering faculty of this university with a score of 638
            in 2017. I am now a last year student. It's doing pretty well on my
            average scores. I am planning to finish the university in a good way
            in the next 1 year.
          </p>
        </li>{" "}
        <div className="dot" data-aos="fade-down" data-aos-duration="800"></div>
        <li>
          <h2 data-aos="fade-right" data-aos-duration="1200">
            03-07. 2020
          </h2>
          <p data-aos="fade-left" data-aos-duration="1200">
            <span>ABB TECH ACADEMY</span>I was accepted to this course as a
            result of an exam and we worked on many useful and instructive
            projects in the field of mobile application development. There are
            also some of these projects in my portfolio. In the same year, we
            finished the course with a successful final project that we did as a
            group business.
          </p>
        </li>
      </ul>
    </Container>
  );
};

export default Education;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #182153;
  h1 {
    font-weight: 600;
    font-size: 25px;
  }
  ul {
    width: 60%;
    list-style: none;
    display: flex;
    flex-direction: column;

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 10px;
      background-color: #182153;
      display: flex;
      margin-left: -5px;
    }
  }

  ul > li {
    display: flex;
    justify-content: space-between;
    align-items: top;
    font-size: 15px;
    line-height: 2;
    opacity: 0.9;
    border-left: 0.4px solid #1821532f;
    position: relative;

    h2 {
      font-weight: 500;
      font-size: 20px;
      white-space: nowrap;
      padding: 0 20px;
      text-align: left;
    }
    span {
      font-weight: bolder;
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
