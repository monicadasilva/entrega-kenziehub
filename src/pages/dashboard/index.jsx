import Input from "../../components/Input";
import { Container, InputContainer, TechContainer } from "./styles";
import { useForm } from "react-hook-form";
import { FiEdit2, FiLayers, FiLogOut, FiMenu } from "react-icons/fi";
import Card from "../../components/Card";
import { useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import Header from "../../components/Header";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";

const Dashboard = ({ authenticated, setAuthenticated, userId }) => {
  const [techs, setTechs] = useState([]);
  const [visible, setVisible] = useState(false);

  const { register, handleSubmit } = useForm([]);

  const [token] = useState(localStorage.getItem("KenzieHub:token") || "");
  const [userID] = useState(localStorage.getItem("KenzieHub:id") || "");

  useEffect(() => {
    api
      .get(`/users/${userID}`)
      .then((response) => setTechs(response.data["techs"]))
      .catch((err) => toast.error("Technology already been registered!"));
  }, [userID]);

  const onSubmitFun = (data) => {
    if (!data) {
      return toast.error("Add a new tech");
    }
    api
      .post(
        "/users/techs",
        {
          title: data.title,
          status: data.status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => setTechs([...techs, response.data]))
      .catch((err) => toast.error("Technology already been registered!"));
  };

  const handleRemove = (id) => {
    console.log(id);
    const newtechs = techs.filter((tech) => tech.id !== id);

    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setTechs(newtechs));
  };
  if (!authenticated) {
    return <Redirect to={"/signin"} />;
  }

  const showMenu = () => {
    setVisible(!visible);
  };

  const Logout = () => {
    localStorage.clear();

    setAuthenticated(!authenticated);
  };
  return (
    <>
      <Container>
        <Header visible={visible} setVisible={setVisible} showMenu={showMenu} />
        <FiMenu className={"open"} onClick={showMenu} />
        <InputContainer onSubmit={handleSubmit(onSubmitFun)}>
          <section>
            <Input
              icon={FiEdit2}
              pacleholder="New tech"
              name="title"
              register={register}
            />
            <Input
              icon={FiLayers}
              pacleholder="Status"
              name="status"
              register={register}
            />
            <button type="submit">ADD</button>
          </section>
        </InputContainer>
        <TechContainer>
          {techs &&
            techs.map((elem) => (
              <Card
                key={elem.id}
                title={elem.title}
                status={elem.status}
                onClick={() => handleRemove(elem.id)}
              />
            ))}
        </TechContainer>
        <FiLogOut className={"logout"} onClick={Logout} />
      </Container>
    </>
  );
};
export default Dashboard;
