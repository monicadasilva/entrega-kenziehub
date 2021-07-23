import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100vw;
  padding: 0 38px;
`;

export const InputContainer = styled.form`
  flex: 1;
  margin-top: 32px;
  padding: 0 38px;
  section {
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    display: flex;
    > div {
      max-width: 40%;
      flex: 1;
      margin-right: 16px;
    }
    button {
      border-radius: 20%;
      width: 50px;
      height: 45px;
      margin-top: 20px;
      font-size: 1rem;
      background-image: linear-gradient(
        to right,
        #f9976e,
        #f8866d,
        #f5746e,
        #f06373,
        #e95179
      );
      font-weight: bold;
      color: var(--white);
      border: none;
      :hover {
        text-shadow: rgba(250, 245, 237, 0.9) 0px 0px 23px;
      }
    }
  }
`;
export const TechContainer = styled.div`
  padding: 0 38px;
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  div {
    margin-top: 16px;
    margin-right: 32px;
    transform: translateY(2px);
  }
`;
