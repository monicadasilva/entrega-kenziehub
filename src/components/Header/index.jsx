import { Headers, Logo } from "./styles";
import Button from "../../components/Button";
import { useHistory } from "react-router";

const Header = () => {
  const history = useHistory();

  const handleNavigation = (path) => {
    return history.push(path);
  };
  return (
    <Headers>
      <Logo />
      <Button onClick={() => handleNavigation("/")}>Home</Button>
      <Button onClick={() => handleNavigation("/signin")}>Sign in</Button>
      <Button onClick={() => handleNavigation("/signup")}>Sign up</Button>
      <Button onClick={() => handleNavigation("/dashboard")}>Dashboard</Button>
    </Headers>
  );
};
export default Header;
