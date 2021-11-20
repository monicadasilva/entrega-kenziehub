import { Headers, Logo, NavBtn } from "./styles";
import { useHistory } from "react-router";
import { FiX } from "react-icons/fi";

const Header = ({ visible, setVisible, showMenu }) => {
  const history = useHistory();
  const handleNavigation = (path) => {
    return history.push(path);
  };

  return (
    <Headers visible={visible}>
      <Logo onClick={() => handleNavigation("/")} />

      <FiX className="close" onClick={showMenu} />
      <NavBtn className="btn" onClick={() => handleNavigation("/")}>
        Home
      </NavBtn>
      <NavBtn onClick={() => handleNavigation("/signin")}>Sign-in</NavBtn>
      <NavBtn onClick={() => handleNavigation("/signup")}>Sign-up</NavBtn>
      <NavBtn onClick={() => handleNavigation("/dashboard")}>Dashboard</NavBtn>
    </Headers>
  );
};
export default Header;
