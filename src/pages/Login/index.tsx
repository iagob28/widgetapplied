import "./index.css";
import Logo from "../../assets/img/Logo.svg";
import { Title } from "../../components/Title/Title";
import { AiFillGithub } from "react-icons/ai";
import { Button } from "../../components/Button/Button";
import { useAuth } from "../../hooks/useAuth";

export function Login() {
  const { signIn } = useAuth();

  function handleSubmit(event: any) {
    event.preventDefault();
    signIn();
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
          <div className="button">
            <Button onClick={handleSubmit} color="heavyBlue" className="github">
              <AiFillGithub size="40px" />
              Faça login com o seu github para começar
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
