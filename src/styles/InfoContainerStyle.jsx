import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: ${(props) => (props.theme === "dark" ? "#fff" : "#182153")} !important;
  /* #182153 */
  @media (max-width: 800px) {
    padding: 5px;
    margin-left: -20px;
  }
  a {
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
    width: 90%;
    list-style: none;
    .dot {
      width: 10px;
      height: 10px;
      border-radius: 10px;
      /* background-color: #182153; */
      background-color: ${(props) =>
        props.theme === "dark" ? "#fff" : "#182153"} !important;

      margin-left: -5px;
      display: flex;
      position: absolute;
    }
    @media (max-width: 800px) {
      width: 100%;
    }
  }

  ul > li {
    display: flex;
    justify-content: space-between;
    align-items: top;
    font-size: 15px;
    line-height: 2;
    opacity: 0.9;
    border-left: 0.6px solid
      ${(props) => (props.theme !== "dark" ? "#1821532f" : "#fff")};
    position: relative;
    h2 {
      font-weight: 500;
      font-size: 20px;
      white-space: nowrap;
      padding: 0 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 20%;
      @media (max-width: 800px) {
        width: 100%;
        flex-direction: row;
        padding: 0 10px;
        justify-content: space-between;
      }

      img {
        width: 100px !important;
        height: 100px;
        object-fit: contain;
        background-color: #fff;
        @media (max-width: 600px) {
          width: 70px;
          height: 70px;
        }
      }
    }
    span {
      font-weight: bold;
      color: ${(props) => (props.theme !== "dark" ? "#182153" : "#fff")};
      display: block;
      padding: 10px 0;
    }
    p {
      text-align: left;
      padding-left: 20px;
      margin-left: 20px;
      @media screen and (max-width: 800px) {
        padding-left: 5px;
        margin-left: 5px;
      }
    }
  }
  @media screen and (max-width: 800px) {
    ul {
      width: 100%;
    }
    ul > li {
      display: flex;
      flex-direction: column;
    }
  }
`;
