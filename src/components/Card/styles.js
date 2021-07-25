import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 180px;
  padding: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.7);
  color: var(--black);
  border: 2px solid var(--orange);
  hr {
    width: 80%;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  button {
    align-self: center;
    border-radius: 5px;
    width: 80px;
    height: 30px;
    margin-top: 30px;
    border: none;
    color: var(--white);
    background-image: linear-gradient(
      to right,
      #f9976e,
      #f8866d,
      #f5746e,
      #f06373,
      #e95179
    );
  }

  svg {
    font-size: 1.1rem;
    color: var(--pink);
    margin-left: -60px;
  }
`;
