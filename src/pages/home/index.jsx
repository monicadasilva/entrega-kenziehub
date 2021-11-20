import { Container, Content, Background } from "./sytles";
import React from "react";
import Header from "../../components/Header";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Home = () => {
  const [visible, setVisible] = useState(false);

  const showMenu = () => {
    setVisible(!visible);
  };
  return (
    <Container>
      <Header visible={visible} setVisible={setVisible} showMenu={showMenu} />
      <FiMenu className={"open"} onClick={showMenu} />
      <Background />
      <Content>
        <h1>KenzieHub</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eu ligula eu turpis consectetur semper. Quisque purus diam,
          consectetur id commodo quis, pellentesque et ante.
        </p>
      </Content>
    </Container>
  );
};
export default Home;
