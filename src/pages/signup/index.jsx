import { Container, Content } from "./sytles";
import Header from "../../components/Header";
import {
  FiUser,
  FiMail,
  FiLock,
  FiBook,
  FiSmile,
  FiSmartphone,
} from "react-icons/fi";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory, Redirect } from "react-router-dom";

import Input from "../../components/Input";

const Signup = ({ authenticated }) => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Mandatory field!"),
    course_module: yup.string().required("Mandatory field!"),
    email: yup.string().email("Invalid Mail").required("Mandatory field!"),
    password: yup
      .string()
      .min(8, "At least 8 characters")
      .required("Mandatory field!"),
    passwordConf: yup
      .string()
      .oneOf([yup.ref("password")], "Your passwords don't match")
      .required("Mandatory field!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const history = useHistory();

  const onSubmitFunc = (data) => {
    api
      .post("/users", data)
      .then((response) => {
        toast.success("Success");
        return history.push("/signin");
      })
      .catch((err) => toast.error("Please complete all fields!"));
  };
  if (authenticated) {
    return <Redirect to={"/dashboard"} />;
  }

  return (
    <Container>
      <Header />
      <Content>
        <form onSubmit={handleSubmit(onSubmitFunc)}>
          <h1>Sign Up</h1>
          <Input
            register={register}
            name="name"
            icon={FiUser}
            label="Name"
            placeholder="Type your name"
            error={errors.name?.message}
          />
          <Input
            register={register}
            name="course_module"
            icon={FiBook}
            label="Course"
            placeholder="Type your course module"
            error={errors.course_module?.message}
          />
          <Input
            register={register}
            name="bio"
            icon={FiSmile}
            label="Bio"
            placeholder="Bio"
            error={errors.bio?.message}
          />
          <Input
            register={register}
            name="contact"
            icon={FiSmartphone}
            label="Contact"
            placeholder="Cellphone"
            error={errors.contact?.message}
          />
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
          <Input
            register={register}
            name="passwordConf"
            icon={FiLock}
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            error={errors.passwordConf?.message}
          />
          <button type="submit">Sign up</button>
        </form>
      </Content>
    </Container>
  );
};
export default Signup;
