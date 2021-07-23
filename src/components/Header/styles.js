import styled from "styled-components";
import logo from "../../img/logo.svg";

export const Headers = styled.div`
  position: absolute;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: var(--white);
`;
export const Logo = styled.div`
  width: 50px;
  height: 60px;
  background-image: url(${logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
`;
