import { Container, Content, Background } from "./sytles";
import React from "react";
import Header from "../../components/Header";

const Home = () => {
  return (
    <Container>
      <Header />
      <Background />
      <Content>
        <h1>KenzieHub</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eu ligula eu turpis consectetur semper. Quisque purus diam,
          consectetur id commodo quis, pellentesque et ante.
        </p>
        <p>
          Fusce placerat, massa vitae pulvinar volutpat, tellus lorem semper
          purus, at congue nisi nibh in augue. Morbi vel congue libero, mattis
          mollis lacus. Sed leo odio, venenatis et libero sed, mollis
          scelerisque nisl.
        </p>
        <p>
          Suspendisse potenti. Ut imperdiet enim ac justo venenatis, gravida
          ultrices libero scelerisque. Cras in enim turpis. Donec fermentum sit
          amet elit sit amet commodo.
        </p>
      </Content>
    </Container>
  );
};
export default Home;
