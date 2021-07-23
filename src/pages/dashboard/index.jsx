import Input from "../../components/Input";
import { Container, InputContainer, TechContainer } from "./styles";
import { useForm } from "react-hook-form";
import { FiEdit2, FiLayers } from "react-icons/fi";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import Header from "../../components/Header";

const Dashboard = () => {
  const [techs, setTechs] = useState([]);
  console.log(techs);
  const { register, handleSubmit } = useForm([]);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token")) || ""
  );

  const loadTechs = () => {
    api
      .get("/users/techs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const apiTechs = response.data.map((tech) => ({ ...tech }));
        setTechs(apiTechs);
      })
      .catch((err) => console.log(err));
  };
  console.log(techs);

  useEffect(() => {
    loadTechs();
  }, []);

  const onSubmitFun = (data) => {
    if (!data) {
      return toast.error("Add a new tech");
    }
    api
      .post(
        "/users/techs",
        {
          title: data.tech,
          status: data.status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => loadTechs());
  };

  const handleCompleted = (id) => {
    const newtechs = techs.filter((tech) => tech.id !== id);

    api.delete(`/users/techs/${id}`).then((response) => setTechs(newtechs));
  };

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
          {techs.map((tech) => (
            <Card
              key={tech.id}
              title={tech.title}
              status={tech.status}
              onClick={() => handleCompleted(tech.id)}
            />
          ))}
        </TechContainer>
      </Container>
    </>
  );
};
export default Dashboard;
