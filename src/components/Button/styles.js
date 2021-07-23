import styled from "styled-components";

export const Container = styled.button`
  background: none;
  border: none;
  width: 100%;
  max-width: fit-content;
  margin: 45px;
  padding-bottom: 5px;
  transition: 0.3s;
  color: var(--white);
  font-size: 1.1rem;
  font-weight: 600;
  :hover {
    border-bottom-style: solid;
    border-width: 2px;
    border-image: linear-gradient(45deg, #d18261ff, #8448a1ff) 1;
  }
`;
