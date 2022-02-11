import { GiUpgrade } from "react-icons/gi";
import { Text } from "../Text/Text";
import { Title } from "../Title/Title";
import "../Challenges/Challenges.css";

export function NoChallengeInfo() {
  return (
    <section className="info_challenge">
      <Title weight="light">Inicie um ciclo para receber desafios</Title>
      <GiUpgrade color="#4CD62B" size="140px" />
      <Text>Avance de level completando os desafios</Text>
    </section>
  );
}
