import Input from "../../components/Input";
import { Container, InputContainer, TechContainer } from "./styles";
import { useForm } from "react-hook-form";
import { FiEdit2, FiLayers } from "react-icons/fi";
import Card from "../../components/Card";
import { useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import Header from "../../components/Header";
import { Redirect } from "react-router-dom";

const Dashboard = ({ authenticated, userId }) => {
  const [techs, setTechs] = useState(userId.techs);

  const { register, handleSubmit } = useForm([]);

  const [token] = useState(localStorage.getItem("KenzieHub:token") || "");

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
  return (
    <>
      <Header />
      <Container>
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
      </Container>
    </>
  );
};
export default Dashboard;
