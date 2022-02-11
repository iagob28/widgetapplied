import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import { Title } from "../Title/Title";
import "./Challenges.css"

export function Challenges() {
  return (
    <>
      <section className="info_challenge">
        <div>
          <Title color="blue" size="small">
            Ganhe 400 xp
          </Title>
          <div className="challenge_divider"></div>
        </div>

        <img
          src="https://cdn-icons.flaticon.com/png/512/1823/premium/1823079.png?token=exp=1644518907~hmac=6165e7c91eb066dac73396a5e9755336"
          alt=""
        />
        <div>
          <Title weight="heavy">Exercite-se</Title>
          <Text weight="light" size="small">
            É agora UserName, bora lá. Caminhe por 3 minutos e estique suas
            pernas para você ficar saudável.
          </Text>
        </div>

        <span>
          <Button size="small" color="green">
            Completei
          </Button>
          <Button size="small" color="red">
            Falhei
          </Button>
        </span>
      </section>
    </>
  );
}
