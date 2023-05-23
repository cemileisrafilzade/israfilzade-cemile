import React, { useContext } from "react";
import { experience } from "../mockData/mockData";
import { Container } from "../styles/InfoContainerStyle";
import ThemeContext from "../commons/Context";

const Experience = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <Container theme={theme} id="experience">
        <h1>Work Experience</h1>
        <ul>
          {experience.map((item) => (
            <li key={item.id}>
              <div
                data-aos="fade-down"
                data-aos-duration="800"
                className="dot"
              ></div>
              <h2 data-aos="fade-right" data-aos-duration="1200">
                {item.time}
                <img src={item.imgPath} alt="" />
              </h2>
              <p data-aos="fade-right" data-aos-duration="1200">
                <span>
                  {" "}
                  {item.name}
                  {item?.link && (
                    <a href={item?.link} rel="noreferrer" target="_blank">
                      {" "}
                      ( {item?.linkName} )
                    </a>
                  )}
                </span>{" "}
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default Experience;
