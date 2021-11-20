import styled from "styled-components";
import logo from "../../img/logo.png";

export const Headers = styled.div`
  position: absolute;
  top: 0%;
  right: 0%;
  z-index: 10;
  width: 50vw;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(22, 25, 52, 1) 33%,
    rgba(34, 36, 86, 0.773546918767507) 90%
  );

  display: flex;
  flex-direction: column;
  color: var(--white);

  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  animation: ${(props) => (props.visible ? "background 1s, ease" : "none")};
  opacity: ${(props) => `${props.visible ? "1" : "0"}`};
  transition: 0.3s;

  .close {
    align-self: flex-end;
    color: white;
    width: 30px;
    height: 30px;
  }

  @keyframes background {
    from {
      transform: translateX(1500px);
    }
    to {
      transform: translateX(0);
    }
  }

  @media screen and (min-width: 768px) {
    width: 80%;
    right: 90px;
    height: 60px;

    flex-direction: row;
    justify-content: right;
    background: none;
    align-items: center;

    visibility: visible;
    animation: none;
    opacity: 1;
    transition: none;

    .close {
      display: none;
    }
  }
`;
export const Logo = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: initial;
    width: 50px;
    height: 30px;
    background-image: url(${logo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 15%;
    left: 5%;
  }
`;

export const NavBtn = styled.div`
  width: fit-content;
  cursor: pointer;
  font-family: "Palanquin", sans-serif;
  padding: 10px;
  margin: 5px 0 5px 0;

  @media screen and (min-width: 768px) {
    margin: 0;
    font-size: 1.5rem;

    position: relative;

    ::after {
      content: "";
      position: absolute;
      background-image: linear-gradient(
        to right,
        #f9976e,
        #f8866d,
        #f5746e,
        #f06373,
        #e95179
      );
      height: 3px;
      width: 0;
      left: 0;
      bottom: 0;
      transition: 0.5s ease;
    }
    :hover::after {
      width: 100%;
    }
  }
`;
