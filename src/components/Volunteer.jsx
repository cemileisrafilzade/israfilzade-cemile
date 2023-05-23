import React, { useContext } from "react";
import { volunteer } from "../mockData/mockData";
import { Container } from "../styles/InfoContainerStyle";
import ThemeContext from "../commons/Context";

const Volunteer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Container theme={theme} id="volunteer">
        <hr />
        <h1>Volunteer Experience</h1>
        <ul>
          {volunteer.map((item) => (
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
    </div>
  );
};

export default Volunteer;
