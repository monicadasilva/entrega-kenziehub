import { Container, InputContainer } from "./styles";

const Input = ({ label, icon: Icon, register, error = "", name, ...rest }) => {
  return (
    <Container>
      <div>{!!error && <span>{error}</span>}</div>
      <InputContainer isErrored={!!error}>
        {Icon && <Icon size={20} />}
        <input {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
};
export default Input;
