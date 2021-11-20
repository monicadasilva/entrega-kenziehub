import styled, { keyframes } from "styled-components";

import home from "../../img/home.svg";

const appearFromLeft = keyframes`
from{
    opacity: 0;
    transform: translateX(-50px);

}
to{
    opacity:1;
    transform: translateX(0px);

}
`;

const appearFromRight = keyframes`
from{
    opacity:0;
    transform: translateX(50px);
}
to{
    opacity: 1;
    transform: translateX(0px);
}
`;
const appear = keyframes`
from{
    opacity: 0;
}
to{
    opacity:1;
}
`;

export const Container = styled.div`
  margin: auto;
  width: 100vw;
  height: 640px;

  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;

  svg.open {
    display: initial;
    position: absolute;
    right: 10px;
    color: white;
    width: 30px;
    height: 30px;
  }

  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  -ms-transition: all 0.5s ease;
  transition: all 0.5s ease;

  @media (min-width: 768px) {
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 800px;

    svg.open {
      display: none;
    }
  }
  @media (min-width: 1280px) {
    width: 1100px;
  }
`;

export const Content = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2rem;
    border-bottom-style: solid;
    border-width: 2px;
    border-image: linear-gradient(45deg, #d18261ff, #8448a1ff) 1;
    animation: ${appearFromRight} 2s;
  }
  p {
    font-size: 1rem;
    font-family: "Quicksand", sans-serif;
    text-align: left;
    animation: ${appearFromLeft} 4s;
  }

  @media (min-width: 768px) {
    margin-right: 50px;
    width: 300px;

    h1 {
      font-size: 4rem;
    }
    p {
      padding-top: 50px;
      font-size: 1.4rem;
    }
  }
  @media (min-width: 1024px) {
    width: 500px;
  }
`;
export const Background = styled.div`
  margin-top: 50px;
  width: 250px;
  height: 350px;
  background-image: url(${home});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  animation: ${appear} 4s;
  background-size: 100%;

  @media (min-width: 768px) {
    flex: 1;
    background-size: 90%;
    height: 450px;

    margin-right: 40px;
  }
  @media (min-width: 1024px) {
    flex: 1;
    width: 1000px;
    height: 100vh;
    background-size: 100%;
    margin: 0 100px 0 100px;
  }
`;
