import { Container } from "./styles";
import { FiDatabase, FiCommand } from "react-icons/fi";

const Card = ({ title, status, onClick }) => {
  return (
    <Container>
      <span>
        <FiCommand /> {title}
      </span>
      <hr />
      <span>
        <FiDatabase /> {status}
      </span>
      <button onClick={onClick}>Remove</button>
    </Container>
  );
};
export default Card;
