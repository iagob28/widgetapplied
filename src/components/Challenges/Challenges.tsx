import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import { Title } from "../Title/Title";
import { useTimer } from "../../hooks/useTimer";
import "./Challenges.css";
import { useAuth } from "../../hooks/useAuth";
import { doc, setDoc } from "firebase/firestore";
import { database } from "../../services/firebase";
import { useEffect } from "react";

export function Challenges() {
  const points = 400;
  const { changeSeconds } = useTimer();
  const { changeXp, user } = useAuth();
  const data = doc(database, user.id, "userData");

  function handleFail() {
    changeSeconds(5);
  }

  async function handleComplete() {
    changeXp(points);
    changeSeconds(5);
  }

  useEffect(() => {
    if (user.id != "") {
      const setData = async () => {
        await setDoc(doc(database, user.id, "userData"), {
          xp: user.xp,
          completeChallenges: user.completeChallenges,
          level: user.level,
        });
      };
      return () => {
        setData();
      };
    }
  }, [user]);
  
  return (
    <>
      <section className="info_challenge">
        <div>
          <Title color="blue" size="small">
            Ganhe {points} xp
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
          <Button onClick={handleComplete} size="small" color="green">
            Completei
          </Button>
          <Button onClick={handleFail} size="small" color="red">
            Falhei
          </Button>
        </span>
      </section>
    </>
  );
}
