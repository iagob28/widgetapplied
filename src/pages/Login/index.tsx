import "./index.css";
import Logo from "../../assets/img/Logo.svg";
import { Title } from "../../components/Title/Title";
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";
import { Text } from "../../components/Text/Text";
import { Input } from "../../components/Input/index";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

export function Login() {
  const history = useNavigate();

  function handleSubmit() {
    history("/Home");
  }

  return (
    <>
      <div className="login_background">
        <section className="left_side"></section>
        <section className="right_side">
          <img src={Logo} alt="Logo Move.It" />
          <Title weight="heavy" color="white" size="large" align="left">
            Bem vindo
          </Title>
          <Text color="white" className="github">
            <AiFillGithub size="40px" />
            Faça login com o seu github para começar
          </Text>
          <form className="input_button" onSubmit={handleSubmit}>
            <Input placeholder="Digite seu username" />
            <Button size="square" color="heavyBlue">
              <AiOutlineArrowRight />
            </Button>
          </form>
        </section>
      </div>
    </>
  );
}
