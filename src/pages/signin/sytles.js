import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: center;
  }

  button {
    width: 200px;
    height: 35px;

    margin-top: 20px;
    border-radius: 20px;
    background-image: linear-gradient(
      to right,
      #f9976e,
      #f8866d,
      #f5746e,
      #f06373,
      #e95179
    );
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--white);
    border: none;
    :hover {
      text-shadow: rgba(250, 245, 237, 0.9) 0px 0px 23px;
    }
  }
`;
