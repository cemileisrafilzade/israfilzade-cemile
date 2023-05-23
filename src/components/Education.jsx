import React, { useContext } from "react";
import { Container } from "../styles/InfoContainerStyle";
import { education } from "../mockData/mockData";
import ThemeContext from "../commons/Context";

const Education = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Container theme={theme} id="education">
      <hr />
      <h1>Education</h1>
      <ul>
        {education.map((item) => (
          <li key={item.id}>
            <div
              className="dot"
              data-aos="fade-down"
              data-aos-duration="800"
            ></div>
            <h2 data-aos="fade-right" data-aos-duration="1200">
              {item.time}
              <img src={item.imgPath} alt="" />
            </h2>
            <p data-aos="fade-right" data-aos-duration="1200">
              <span>{item.name}</span>
              {item.desc}
            </p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Education;
