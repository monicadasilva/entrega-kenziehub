import { Container, Content } from "./sytles";
import Header from "../../components/Header";
import { FiMail, FiLock } from "react-icons/fi";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import Input from "../../components/Input";

const Signin = () => {
  const formSchema = yup.object().shape({
    email: yup.string().email("Invalid Mail").required("Ivalid email!"),
    password: yup
      .string()
      .min(8, "Wrong password!")
      .required("Enter your password"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const history = useHistory();

  const onSubmitFunc = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        console.log(response.data);
        return history.push("/dashboard");
      })
      .catch((err) => toast.error("Invalid mail or password!"));
  };
  return (
    <Container>
      <Header />
      <Content>
        <form onSubmit={handleSubmit(onSubmitFunc)}>
          <h1>Sign In</h1>

          <Input
            register={register}
            name="email"
            icon={FiMail}
            label="E-mail"
            placeholder="Type your email"
            error={errors.email?.message}
          />
          <Input
            register={register}
            name="password"
            icon={FiLock}
            label="Password"
            type="password"
            placeholder="Type your password"
            error={errors.password?.message}
          />
          <button>Sign in </button>
        </form>
      </Content>
    </Container>
  );
};
export default Signin;
