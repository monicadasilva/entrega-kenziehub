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
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  margin-right: 50px;

  h1 {
    font-size: 4rem;
    border-bottom-style: solid;
    border-width: 2px;
    border-image: linear-gradient(45deg, #d18261ff, #8448a1ff) 1;
    animation: ${appearFromRight} 2s;
  }
  p {
    padding-top: 50px;
    font-family: "Quicksand", sans-serif;
    font-size: 1.4rem;
    text-align: left;
    animation: ${appearFromLeft} 4s;
  }
`;
export const Background = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    background-image: url(${home});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    margin-right: 50px;
    animation: ${appear} 4s;
  }
  @media (min-width: 1500px) {
    flex: 1;
    max-width: 1100px;
    background-size: 70%;
    margin: 0 400px 0 400px;
  }
`;
