import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  margin-top: 20px;
  div {
    span {
      color: var(--red);
    }
  }
  span {
    font-family: "Quicksand", sans-serif;
  }
`;

export const InputContainer = styled.div`
  background: var(--white);
  border-radius: 0px;
  border: 2px solid var(--orange);
  color: var(--orange);
  padding: 10px;
  width: 100%;
  display: flex;
  transition: 0.4s;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--red);

      svg {
        color: var(--red);
      }
    `}

  input {
    font-family: "Quicksand", sans-serif;

    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    color: var(--black);
    &::placeholder {
      color: var(--gray);
    }
  }
  svg {
    margin-right: 16px;
  }
`;
