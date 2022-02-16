import { Button } from "../Button/Button";
import { Text } from "../Text/Text";
import { Title } from "../Title/Title";
import { useTimer } from "../../hooks/useTimer";
import "./Challenges.css";
import { useAuth } from "../../hooks/useAuth";
import { doc, setDoc } from "firebase/firestore";
import { database } from "../../services/firebase";
import { useEffect } from "react";
import { useChallenge } from "../../hooks/useChallenge";

export function Challenges() {
  const { changeSeconds } = useTimer();
  const { changeXp, user } = useAuth();
  const { challenge } = useChallenge();

  function handleFail() {
    changeSeconds(25 * 60);
  }

  async function handleComplete() {
    if (challenge?.points !== undefined) {
      changeXp(parseInt(challenge.points));
      changeSeconds(25 * 60);
    } else return;
  }

  useEffect(() => {
    if (user.id !== "") {
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
  }, [user, changeSeconds]);

  return (
    <>
      <section className="info_challenge">
        <div>
          <Title color="blue" size="small">
            Ganhe {challenge?.points} xp
          </Title>
          <div className="challenge_divider"></div>
        </div>

        <img src={challenge?.img} alt="" />
        <div>
          <Title weight="heavy">{challenge?.phrase}</Title>
          <Text weight="light" size="small">
            {challenge?.des}
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
